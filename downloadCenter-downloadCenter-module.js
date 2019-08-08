(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["downloadCenter-downloadCenter-module"],{

/***/ "./src/app/pages/tzb/custom/downloadCenter/downCenter/bean/downloadRegQry.bean.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downCenter/bean/downloadRegQry.bean.ts ***!
  \****************************************************************************************/
/*! exports provided: DownloadRegQryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadRegQryBean", function() { return DownloadRegQryBean; });
var DownloadRegQryBean = /** @class */ (function () {
    function DownloadRegQryBean() {
    }
    return DownloadRegQryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'下载中心'\"></header-title>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>下载名称:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <input type=\"text\" class=\"downinput\" pInputText [(ngModel)]=\"downloadRegQryBean.fileName\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>审批状态:</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <p-dropdown class=\"downdrop\" [options]=\"approveStatus\" [(ngModel)]=\"downloadRegQryBean.approveStatus\"></p-dropdown>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>发起时间:</span>\r\n        </div>\r\n        <div class=\"ui-g-6 dateStyle\">\r\n            <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                [(ngModel)]=\"initiatedBeginDate\" [maxDate]=\"initiatedEndDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" (onSelect)=\"showInitiated(1)\"\r\n                (onBlur)=\"showInitiated(1)\"></p-calendar>至\r\n            <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                [(ngModel)]=\"initiatedEndDate\" [minDate]=\"initiatedBeginDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" (onSelect)=\"showInitiated(2)\"\r\n                (onBlur)=\"showInitiated(2)\"></p-calendar>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-6\">\r\n        <div class=\"ui-g-4 tit\">\r\n            <span>审批完成时间:</span>\r\n        </div>\r\n        <div class=\"ui-g-6 dateStyle\">\r\n            <p-calendar [(ngModel)]=\"approveBeginDate\" [maxDate]=\"approveEndDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\"\r\n                [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showApprove(1)\"\r\n                (onBlur)=\"showApprove(1)\"></p-calendar>\r\n            至\r\n            <p-calendar [(ngModel)]=\"approveEndDate\" [minDate]=\"approveBeginDate\" [showOtherMonths]=\"false\" [locale]=\"ch\" [monthNavigator]=\"true\"\r\n                [yearNavigator]=\"true\" yearRange=\"1900:2200\" [showIcon]=\"true\" dateFormat=\"yy-mm-dd\" (onSelect)=\"showApprove(2)\"\r\n                (onBlur)=\"showApprove(2)\"></p-calendar>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton label=\"查询\" (click)=\"bigquery()\"></button>\r\n        <button pButton label=\"重置\" (click)=\"reset()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12 table base-table\">\r\n        <p-dataTable [value]=\"dataTable\" [emptyMessage]=\"tabMesg\">\r\n            <p-column>\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"header\">\r\n                    <p-checkbox label=\"全选\" [(ngModel)]=\"checkAll\" binary=\"true\" (click)=\"checkAllClick()\"></p-checkbox>\r\n                </ng-template>\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                    <p-checkbox name=\"{{ri}}\" value=\"{{ri}}\" [(ngModel)]=\"col.checkBox\" binary=\"true\" (onChange)=\"checkBoxClick(col)\"></p-checkbox>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"fileName\" header=\"下载名称\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                    <span style=\"cursor: pointer;\" (click)=\"toDetail(col)\">{{col.fileName}}</span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"initiatedTime\" header=\"发起时间\"></p-column>\r\n            <p-column field=\"approveStatus\" header=\"审批状态\">\r\n                <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                    {{col.approveStatus|codeValuePie:approveStatus}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"approveTime\" header=\"审批完成时间\"></p-column>\r\n            <p-column field=\"failureDate\" header=\"失效日期\"></p-column>\r\n            <p-column header=\"下载操作\" *ngIf=\"permissionCheck('SID00023_P0170')\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <button pButton type=\"button\" [disabled]=\"col.downbtn\" label=\"下载\" (click)=\"down(col)\" class=\"btn\"></button>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows=\"{{downloadRegQryBean.pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  padding: 0px;\n  text-align: center; }\n\n.btn {\n  text-align: center; }\n\n.date {\n  align-items: center; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.tit {\n  text-align: right; }\n\n.time-name {\n  padding-top: 0; }\n\n.time-name .tit {\n    padding-top: 0; }\n\n.time-name .ui-g-4 {\n    padding-top: 0; }\n\n.time-name .date {\n    display: flex; }\n\n:host /deep/ .btn {\n  color: #444; }\n\n:host /deep/ .downdrop .ui-dropdown {\n  width: 98% !important;\n  min-width: 268px !important; }\n\n.downinput {\n  width: 98% !important;\n  min-width: 268px !important; }\n\n@media screen and (max-width: 1024px) {\n  :host/deep/ .ui-calendar {\n    min-width: 122px;\n    width: 30%; }\n  .dateStyle {\n    width: 63%; } }\n\n@media screen and (min-width: 1025px) {\n  :host/deep/ .ui-calendar {\n    min-width: 202px;\n    width: 34%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9kb3dubG9hZENlbnRlci9kb3duQ2VudGVyL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcZG93bmxvYWRDZW50ZXJcXGRvd25DZW50ZXJcXGRvd25DZW50ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksbUJBQW1CLEVBQUE7O0FBSXZCO0VBQ0kscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYyxFQUFBOztBQURsQjtJQUdRLGNBQWMsRUFBQTs7QUFIdEI7SUFNUSxjQUFjLEVBQUE7O0FBTnRCO0lBU1EsYUFBYSxFQUFBOztBQUlyQjtFQUNJLFdBQVcsRUFBQTs7QUFHZjtFQUNJLHFCQUFxQjtFQUNyQiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxxQkFBcUI7RUFDckIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0s7SUFDRyxnQkFBZ0I7SUFDaEIsVUFBVSxFQUFBO0VBRWQ7SUFDSSxVQUFVLEVBQUEsRUFDYjs7QUFHTDtFQUNLO0lBQ0csZ0JBQWdCO0lBQ2hCLFVBQVUsRUFBQSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9kb3dubG9hZENlbnRlci9kb3duQ2VudGVyL2Rvd25DZW50ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGUge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLy/ooajmoLzlrZfmr43mlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YSB7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi50aXQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50aW1lLW5hbWUge1xyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAudGl0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIH1cclxuICAgIC51aS1nLTQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLmRhdGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuYnRuIHtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmRvd25kcm9wIC51aS1kcm9wZG93biB7XHJcbiAgICB3aWR0aDogOTglICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDI2OHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kb3duaW5wdXQge1xyXG4gICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAyNjhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjRweCkge1xyXG4gICAgIDpob3N0L2RlZXAvIC51aS1jYWxlbmRhciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjJweDtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gICAgLmRhdGVTdHlsZSB7XHJcbiAgICAgICAgd2lkdGg6IDYzJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDI1cHgpIHtcclxuICAgICA6aG9zdC9kZWVwLyAudWktY2FsZW5kYXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMjAycHg7XHJcbiAgICAgICAgd2lkdGg6IDM0JTtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.ts ***!
  \************************************************************************************/
/*! exports provided: DownCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownCenterComponent", function() { return DownCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bean_downloadRegQry_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/downloadRegQry.bean */ "./src/app/pages/tzb/custom/downloadCenter/downCenter/bean/downloadRegQry.bean.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DownCenterComponent = /** @class */ (function () {
    function DownCenterComponent(commfunc, router, httpService) {
        this.commfunc = commfunc;
        this.router = router;
        this.httpService = httpService;
        this.first = 0;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.display = false;
        this.detailHeader = '下载详情';
        this.initiatedBeginDate = null; //发起日期起
        this.initiatedEndDate = null; //发起日期止
        this.approveBeginDate = null; //审批完成时间起
        this.approveEndDate = null; //审批完成时间止
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_1__["CALENDAR_CN"];
        this.temData = new Date();
        //全选/单选
        this.selectedAll = [];
        this.checkAll = false;
        this.checkBox = [];
        this.dataTable = [];
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.downloadRegQryBean = new _bean_downloadRegQry_bean__WEBPACK_IMPORTED_MODULE_4__["DownloadRegQryBean"]();
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        this.user2 = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.user2.userName) {
            this.userName = this.user2.userName;
        }
        if (this.user2.orgName) {
            this.orgName = this.user2.orgName;
        }
        this.codeValues();
        this.approveStatus = this.code['ApproveStatusDownload'];
    }
    DownCenterComponent.prototype.ngOnInit = function () {
        this.downloadRegQryBean.pageSize = 10;
        this.downloadRegQryBean.pageNum = 1;
        this.query();
    };
    DownCenterComponent.prototype.bigquery = function () {
        this.downloadRegQryBean.pageSize = 10;
        this.downloadRegQryBean.pageNum = 1;
        this.first = 0;
        this.query();
    };
    //发起时间
    DownCenterComponent.prototype.showInitiated = function (data) {
        if (this.initiatedBeginDate && this.initiatedBeginDate != null && this.initiatedEndDate && this.initiatedEndDate != null) {
            if (this.commfunc.transDateN(this.initiatedEndDate) < this.commfunc.transDateN(this.initiatedBeginDate)) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '结束发起日期必输大于开始发起日期!' }];
                if (data == 1) {
                    this.initiatedBeginDate = null;
                }
                else if (data == 2) {
                    this.initiatedEndDate = null;
                }
                return;
            }
        }
    };
    //审批时间
    DownCenterComponent.prototype.showApprove = function (data) {
        if (this.approveBeginDate && this.approveBeginDate != null && this.approveEndDate && this.approveEndDate != null) {
            if (this.commfunc.transDateN(this.approveEndDate) < this.commfunc.transDateN(this.approveBeginDate)) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '审批完成结束日期必须大于审批完成开始日期!' }];
                if (data == 1) {
                    this.approveBeginDate = null;
                }
                else if (data == 2) {
                    this.approveEndDate = null;
                }
                return;
            }
        }
    };
    DownCenterComponent.prototype.query = function () {
        var _this = this;
        this.downloadRegQryBean.initiatedBeginDate = this.commfunc.transDateN(this.initiatedBeginDate);
        this.downloadRegQryBean.initiatedEndDate = this.commfunc.transDateN(this.initiatedEndDate);
        this.downloadRegQryBean.approveBeginDate = this.commfunc.transDateN(this.approveBeginDate);
        this.downloadRegQryBean.approveEndDate = this.commfunc.transDateN(this.approveEndDate);
        this.httpService.queryDownloadInfoProcess(this.downloadRegQryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataTable = data.pageList;
                _this.dataTable.forEach(function (item) {
                    if (item.isDownload == '0') {
                        item.downbtn = false;
                    }
                    else if (item.isDownload == '1') {
                        item.downbtn = true;
                    }
                });
                _this.total = data.totalNum;
                _this.showID = data.recordId;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //全选按钮
    DownCenterComponent.prototype.checkAllClick = function () {
        for (var i = 0; i < this.dataTable.length; i++) {
            if (this.checkAll == true) {
                this.dataTable[i].checkBox = true;
                this.selectedAll.push(this.dataTable[i]);
            }
            else {
                this.selectedAll = [];
                this.dataTable[i].checkBox = false;
            }
        }
    };
    //单选按钮
    DownCenterComponent.prototype.checkBoxClick = function (col) {
        var _this = this;
        if (col.checkBox) {
            this.selectedAll.push(col);
        }
        else {
            this.selectedAll.forEach(function (item, i) {
                if (item == col) {
                    _this.selectedAll.splice(i, 1);
                }
            });
        }
        if (this.selectedAll.length == this.dataTable.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //分页
    DownCenterComponent.prototype.paginate = function (event) {
        this.downloadRegQryBean.pageSize = event.rows * 1;
        this.downloadRegQryBean.pageNum = event.page + 1;
        this.first = event.page * this.downloadRegQryBean.pageSize;
        this.query();
    };
    DownCenterComponent.prototype.reset = function () {
        this.downloadRegQryBean.approveStatus = '';
        this.downloadRegQryBean.fileName = '';
        this.downloadRegQryBean.approveBeginDate = '';
        this.downloadRegQryBean.approveEndDate = '';
        this.downloadRegQryBean.initiatedBeginDate = '';
        this.downloadRegQryBean.initiatedEndDate = '';
        this.initiatedBeginDate = null;
        this.initiatedEndDate = null;
        this.approveBeginDate = null;
        this.approveEndDate = null;
    };
    DownCenterComponent.prototype.toDetail = function (item) {
        if (item.downloadDate == null) {
            item.downloadDate = '-';
        }
        if (item.failureDate == null) {
            item.failureDate = '-';
        }
        this.router.navigate(["pages/tzb/custom/downloadCenter/downloadDetail", item]);
    };
    DownCenterComponent.prototype.jilu = function () {
        var list = [];
        this.selectedAll.forEach(function (item) {
            list.push(item.fileId);
        });
    };
    DownCenterComponent.prototype.down = function (temp) {
        var _this = this;
        var path = temp.downloadUrl;
        var donwname = temp.downloadName;
        var list = [];
        list.push(temp.fileId);
        var arr = {
            recordId: this.showID,
            downloadList: list,
        };
        this.httpService.downloadProcess(arr).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.query();
                open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_6__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(donwname) + "&fileUrl=" + path, '_blank');
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
    //按钮权限
    DownCenterComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    //码值
    DownCenterComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    DownCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'downCenter',
            template: __webpack_require__(/*! ./downCenter.component.html */ "./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.html"),
            styles: [__webpack_require__(/*! ./downCenter.component.scss */ "./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"], _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_5__["CusOperationHttpService"]])
    ], DownCenterComponent);
    return DownCenterComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/downloadCenter/downloadCenter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downloadCenter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DownloadCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCenterComponent", function() { return DownloadCenterComponent; });
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

var DownloadCenterComponent = /** @class */ (function () {
    function DownloadCenterComponent() {
    }
    DownloadCenterComponent.prototype.ngOnInit = function () { };
    DownloadCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'downloadCenter',
            template: "<router-outlet></router-outlet>"
        }),
        __metadata("design:paramtypes", [])
    ], DownloadCenterComponent);
    return DownloadCenterComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/downloadCenter/downloadCenter.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downloadCenter.module.ts ***!
  \**************************************************************************/
/*! exports provided: DownloadCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCenterModule", function() { return DownloadCenterModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _downloadCenter_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./downloadCenter.routing */ "./src/app/pages/tzb/custom/downloadCenter/downloadCenter.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _downloadDetail_downloadDetail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./downloadDetail/downloadDetail.component */ "./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.ts");
/* harmony import */ var _downCenter_downCenter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./downCenter/downCenter.component */ "./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.ts");
/* harmony import */ var _downloadCenter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./downloadCenter.component */ "./src/app/pages/tzb/custom/downloadCenter/downloadCenter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var DownloadCenterModule = /** @class */ (function () {
    function DownloadCenterModule() {
    }
    DownloadCenterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _downloadCenter_routing__WEBPACK_IMPORTED_MODULE_4__["DownloadCenterRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"]
            ],
            declarations: [
                _downloadDetail_downloadDetail_component__WEBPACK_IMPORTED_MODULE_6__["DownloadDetailComponent"],
                _downCenter_downCenter_component__WEBPACK_IMPORTED_MODULE_7__["DownCenterComponent"],
                _downloadCenter_component__WEBPACK_IMPORTED_MODULE_8__["DownloadCenterComponent"]
            ],
            providers: []
        })
    ], DownloadCenterModule);
    return DownloadCenterModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/downloadCenter/downloadCenter.routing.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downloadCenter.routing.ts ***!
  \***************************************************************************/
/*! exports provided: routes, DownloadCenterRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadCenterRouting", function() { return DownloadCenterRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _downloadDetail_downloadDetail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./downloadDetail/downloadDetail.component */ "./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.ts");
/* harmony import */ var app_pages_tzb_custom_downloadCenter_downCenter_downCenter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component */ "./src/app/pages/tzb/custom/downloadCenter/downCenter/downCenter.component.ts");



var routes = [
    {
        path: '',
        children: [
            {
                path: 'downloadDetail',
                component: _downloadDetail_downloadDetail_component__WEBPACK_IMPORTED_MODULE_1__["DownloadDetailComponent"]
            },
            {
                path: 'downCenter',
                component: app_pages_tzb_custom_downloadCenter_downCenter_downCenter_component__WEBPACK_IMPORTED_MODULE_2__["DownCenterComponent"]
            }
        ]
    }
];
var DownloadCenterRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <header-title [Info]=\"'下载详情'\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12 down\">\r\n            <div class=\"ui-g-12 row\">\r\n                <div class=\"ui-g-2 tit\">\r\n                    <label>下载名称:</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <span>{{items.fileName}}</span>\r\n                </div>\r\n                <div class=\"ui-g-2 tit\">\r\n                    <label>下载来源:</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <span>{{items.sourceName}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-12 row\">\r\n                <div class=\"ui-g-2 tit\">\r\n                    <label>审批状态:</label>\r\n                </div>\r\n                <div class=\"ui-g-4\">\r\n                    <span>{{items.approveStatus|codeValuePie:approveStatus}}</span>\r\n                </div>\r\n                <div class=\"ui-g-2 tit\">\r\n                    <label>下载时间:</label>\r\n                </div>\r\n                <div class=\"ui-g-4 downTime\">\r\n                    <span *ngFor=\"let temp of dateArray\" class=\"ui-g-4 ui-md-6\" >{{temp}}</span>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton label=\"返回\" (click)=\"comeBack()\"></button>\r\n    </div>\r\n</div>\r\n<p-growl [value]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".down {\n  background: #f2f2f2;\n  margin-bottom: 10px; }\n  .down .row {\n    padding: 0px; }\n  .down .tit {\n    text-align: right;\n    color: #07374d;\n    font-weight: bold; }\n  .down span {\n    color: #999999; }\n  .down .datable-tr-one {\n    line-height: 40px !important;\n    background-color: #fafafa; }\n  .down .datable-tr-two {\n    line-height: 40px !important;\n    background: #ebebeb; }\n  .table {\n  padding: 0px;\n  text-align: center; }\n  :host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n  .shenpi {\n  color: #19b0c8; }\n  .btn {\n  text-align: center; }\n  .downTime .ui-g-4 {\n  padding: 0; }\n  .downTime .ui-md-6 {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9kb3dubG9hZENlbnRlci9kb3dubG9hZERldGFpbC9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxjdXN0b21cXGRvd25sb2FkQ2VudGVyXFxkb3dubG9hZERldGFpbFxcZG93bmxvYWREZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBbUI7RUFDbkIsbUJBQW1CLEVBQUE7RUFGdkI7SUFJUSxZQUFZLEVBQUE7RUFKcEI7SUFPUSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBVHpCO0lBWVEsY0FBYyxFQUFBO0VBWnRCO0lBZVEsNEJBQTRCO0lBQzVCLHlCQUF5QixFQUFBO0VBaEJqQztJQW1CUSw0QkFBNEI7SUFDNUIsbUJBQW1CLEVBQUE7RUFJM0I7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUFJdEI7RUFDSSxxQkFBcUIsRUFBQTtFQUd6QjtFQUNJLGNBQWMsRUFBQTtFQUdsQjtFQUNJLGtCQUFrQixFQUFBO0VBR3RCO0VBRVEsVUFBVSxFQUFBO0VBRmxCO0VBS1EsVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9kb3dubG9hZENlbnRlci9kb3dubG9hZERldGFpbC9kb3dubG9hZERldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kb3duIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgLnJvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgY29sb3I6ICMwNzM3NGQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIH1cclxuICAgIC5kYXRhYmxlLXRyLW9uZSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgfVxyXG4gICAgLmRhdGFibGUtdHItdHdvIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYmViZWI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8v6KGo5qC85a2X5q+N5pWw5a2X6Ieq5Yqo5o2i6KGMXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uc2hlbnBpIHtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRvd25UaW1lIHtcclxuICAgIC51aS1nLTQge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAudWktbWQtNiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DownloadDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadDetailComponent", function() { return DownloadDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
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





var DownloadDetailComponent = /** @class */ (function () {
    function DownloadDetailComponent(routeInfo, httpService, commfunc, router) {
        this.routeInfo = routeInfo;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"]; //表格中无数据时显示的内容
        this.msgs = [];
        this.items = this.routeInfo.snapshot.params;
        this.taskdata = [];
        this.dateArray = [];
        this.codeValues();
        this.shenPiOptions = this.code['ShenPi'];
        this.approveStatus = this.code['ApproveStatusDownload'];
    }
    DownloadDetailComponent.prototype.ngOnInit = function () {
        console.log(this.items);
        this.dateArray = this.items.downloadDate.split(',');
        // let param = {
        //   businessId: this.items.processId
        // }
        // this.httpService.qryProcessByBusId(param).subscribe(data => {
        //   if (data.returnCode.code == 'success') {
        //     this.taskdata = data.recordList;
        //   } else {
        //     this.msgs = [];
        //     this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
        //   }
        // }, err => {
        //   this.msgs = [];
        //   this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        // });
    };
    DownloadDetailComponent.prototype.ngOnChanges = function () {
        this.businessId = this.items.processId;
    };
    //码值
    DownloadDetailComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //返回
    DownloadDetailComponent.prototype.comeBack = function () {
        this.router.navigate(["pages/tzb/custom/downloadCenter/downCenter"]);
    };
    DownloadDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'downloadDetail',
            template: __webpack_require__(/*! ./downloadDetail.component.html */ "./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.html"),
            styles: [__webpack_require__(/*! ./downloadDetail.component.scss */ "./src/app/pages/tzb/custom/downloadCenter/downloadDetail/downloadDetail.component.scss")],
            providers: [_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DownloadDetailComponent);
    return DownloadDetailComponent;
}());



/***/ })

}]);
//# sourceMappingURL=downloadCenter-downloadCenter-module.js.map