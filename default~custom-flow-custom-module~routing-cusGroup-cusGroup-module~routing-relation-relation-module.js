(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~custom-flow-custom-module~routing-cusGroup-cusGroup-module~routing-relation-relation-module"],{

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <header-title [Info]=\"title\"></header-title>\r\n</div>\r\n<div class=\"ui-g-12 secondrow\">\r\n  <div class=\"ui-g-6 first\">\r\n    <label for=\"\">客户号：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.custNo\" disabled>\r\n    <!-- <button type=\"button\" pButton icon=\"ui-icon-search\" label=\" \"></button> -->\r\n  </div>\r\n  <div class=\"ui-g-6 first\">\r\n    <label for=\"\">客户名称：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.custName\" disabled>\r\n  </div>\r\n  <!-- <div class=\"ui-g-4\">\r\n    <label for=\"\">关联客户号：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.relationshipCustNo\" disabled>\r\n  </div> -->\r\n</div>\r\n<div class=\"ui-g-12 secondrow\">\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">关联客户号：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.relationshipCustNo\" disabled>\r\n  </div>\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">关联客户名称：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.relationshipCustName\" disabled>\r\n  </div>\r\n  <!-- <div class=\"ui-g-4\">\r\n    <label for=\"\">关联关系类型：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.parentTypeName\" disabled>\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">关联关系子类型：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.relationshipName\" disabled>\r\n  </div> -->\r\n</div>\r\n<div class=\"ui-g-12 secondrow\">\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">关联关系类型：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.parentTypeName\" disabled>\r\n  </div>\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">关联关系子类型：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.relationshipName\" disabled>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 secondrow\">\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">详细描述：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.comments\" disabled>\r\n  </div>\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">是否统一授信：</label>\r\n    <!-- <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.whetherUnifiedCredit\" disabled> -->\r\n    <p-dropdown [options]=\"panduan\" [(ngModel)]=\"item.whetherUnifiedCredit\" [disabled]='true'></p-dropdown>\r\n  </div>\r\n</div>\r\n<div class=\"ui-g-12 secondrow\">\r\n  <!-- <div class=\"ui-g-6\">\r\n        <label for=\"\">审批状态：</label>\r\n        <p-dropdown [options]=\"statusTypeOptions\" [(ngModel)]=\"item.statusId\"[disabled]='true'></p-dropdown>\r\n      </div> -->\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">是否可冲减积数：</label>\r\n    <!-- <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.whetherReductionNumber\" disabled> -->\r\n    <p-dropdown [options]=\"panduan\" [(ngModel)]=\"item.whetherReductionNumber\" [disabled]='true'></p-dropdown>\r\n  </div>\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">积数冲减控制方式：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.reductionNumberType\" disabled>\r\n  </div>\r\n  <!-- <div class=\"ui-g-4\">\r\n    <label for=\"\">创建日期：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.createDate\" disabled>\r\n  </div>\r\n  <div class=\"ui-g-4\">\r\n    <label for=\"\">申请状态：</label>\r\n    <p-dropdown [options]=\"statusTypeOptions\" [(ngModel)]=\"item.statusId\"[disabled]='true'></p-dropdown>\r\n  </div> -->\r\n</div>\r\n<div class=\"ui-g-12 secondrow\">\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">创建人：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"userName\" disabled>\r\n  </div>\r\n  <div class=\"ui-g-6\">\r\n    <label for=\"\">创建机构：</label>\r\n    <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"userOrgName\" disabled>\r\n  </div>\r\n</div>\r\n<!-- <div  class=\"ui-g-12 secondrow\">\r\n    <div class=\"ui-g-6\">\r\n        <label for=\"\">创建日期：</label>\r\n        <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.createDate\" disabled>\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        <label for=\"\">申请状态：</label>\r\n        <p-dropdown [options]=\"statusTypeOptions\" [(ngModel)]=\"item.statusId\"[disabled]='true'></p-dropdown>\r\n      </div>\r\n</div> -->\r\n<!-- <div class=\"ui-g-12 secondrow\" >\r\n  <div class=\"ui-g-6\">\r\n      <label for=\"\">详细描述：</label>\r\n      <input type=\"text\" pInputText readonly=\"true\" [(ngModel)]=\"item.comments\" disabled>\r\n    </div>\r\n</div> -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g-4 label,\n.ui-g-12 label {\n  display: inline-block;\n  width: 200px;\n  text-align: right; }\n\n.secondrow {\n  padding: 0;\n  margin: 0; }\n\n.secondrow .first label {\n    padding-top: 2%; }\n\n.btn {\n  text-align: center; }\n\ntextarea {\n  margin-left: 100px;\n  width: 70%;\n  height: 200px; }\n\n:host/deep/ .ui-dropdown {\n  width: 60% !important; }\n\n:host/deep/ .ui-inputtext {\n  width: 60% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2V4YW0tYXBwci1jb21wL2N1c3RvbS9hc3NvY2lhdGlvbi1yZWxhdGlvbi9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxleGFtLWFwcHItY29tcFxcY3VzdG9tXFxhc3NvY2lhdGlvbi1yZWxhdGlvblxcYXNzb2NpYXRpb24tcmVsYXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFHUSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUl6QjtFQUNJLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBRmI7SUFLWSxlQUFlLEVBQUE7O0FBSzNCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhLEVBQUE7O0FBRWpCO0VBQ0kscUJBQXFCLEVBQUE7O0FBRXpCO0VBQ0kscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvZXhhbS1hcHByLWNvbXAvY3VzdG9tL2Fzc29jaWF0aW9uLXJlbGF0aW9uL2Fzc29jaWF0aW9uLXJlbGF0aW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZy00LFxyXG4udWktZy0xMiB7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgLy8gcGFkZGluZy10b3A6IDIlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2Vjb25kcm93IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICAuZmlyc3Qge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbjpob3N0L2RlZXAvIC51aS1kcm9wZG93bntcclxuICAgIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktaW5wdXR0ZXh0e1xyXG4gICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.ts ***!
  \**********************************************************************************************/
/*! exports provided: AssociationRelation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssociationRelation", function() { return AssociationRelation; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../tzb/custom/http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssociationRelation = /** @class */ (function () {
    function AssociationRelation(activatedRoute, cusViewHttpService, commfunc) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.cusViewHttpService = cusViewHttpService;
        this.commfunc = commfunc;
        this.title = '关联关系审核';
        this.item = [];
        this.codeValues();
        this.panduan = this.code['DomPanduan'];
        this.statusTypeOptions = this.code['ReductionStatus'];
        this.relation_Param = JSON.parse(this.commfunc.getSessionDataCH('relationParams'));
        console.log(this.relation_Param);
        this.custNo = this.relation_Param.relationId;
        this.relationshipCustNo = this.relation_Param.relationshipCustNo;
        this.relationshipType = this.relation_Param.relationshipType;
        this.applyType = this.relation_Param.applyType;
        // this.custNo = this.activatedRoute.snapshot.paramMap.get('relationId');
        // this.relationshipCustNo = this.activatedRoute.snapshot.paramMap.get('relationshipCustNo');
        // this.relationshipType = this.activatedRoute.snapshot.paramMap.get('relationshipType');
        // this.applyType = this.activatedRoute.snapshot.paramMap.get('applyType');
        var param = {};
        param = {
            applyType: this.applyType,
            custNo: this.custNo,
            relationshipCustNo: this.relationshipCustNo,
            relationshipType: this.relationshipType,
        };
        var ob = this.cusViewHttpService.selectPartyRelationshipDetail(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.reductionNumberType == '0') {
                    data.reductionNumberType = '账户';
                }
                else if (data.reductionNumberType == '1') {
                    data.reductionNumberType = '客户';
                }
                _this.item = data;
                _this.cusViewHttpService.queryTellerById({ tellerId: _this.item.userId }).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        if (data.tellerName != null) {
                            _this.userName = data.tellerName;
                        }
                        else {
                            _this.userName = _this.item.userId;
                        }
                    }
                    else {
                        _this.userName = _this.item.userId;
                    }
                });
                _this.cusViewHttpService.queryOrgById({ orgId: _this.item.userOrgId }).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        if (data.orgName != null) {
                            _this.userOrgName = data.orgName;
                        }
                        else {
                            _this.userOrgName = _this.item.userOrgId;
                        }
                    }
                    else {
                        _this.userOrgName = _this.item.userOrgId;
                    }
                });
            }
        });
    }
    AssociationRelation.prototype.ngOnInit = function () {
    };
    //码值
    AssociationRelation.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //驳回
    AssociationRelation.prototype.reject = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            relationshipCustNo: this.relationshipCustNo,
            relationshipType: this.relationshipType,
            applyType: this.applyType,
            apprResult: '1',
            remark: this.remark
        };
        var ob = this.cusViewHttpService.updatePartyRelationshipStatus(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //确定审核
    AssociationRelation.prototype.confirm = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            relationshipCustNo: this.relationshipCustNo,
            relationshipType: this.relationshipType,
            applyType: this.applyType,
            apprResult: '0',
            remark: this.remark
        };
        var ob = this.cusViewHttpService.updatePartyRelationshipStatus(param);
        ob.subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    AssociationRelation.prototype.codeValue = function (val, arr) {
        if (arr === void 0) { arr = []; }
        var temp = val;
        if (arr.length > 0) {
            arr.forEach(function (item) {
                if (item['value'] == val) {
                    temp = item['label'];
                }
            });
        }
        return temp;
    };
    AssociationRelation = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-association-relation',
            template: __webpack_require__(/*! ./association-relation.html */ "./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.html"),
            styles: [__webpack_require__(/*! ./association-relation.scss */ "./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.scss")],
            providers: [_tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _tzb_custom_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], AssociationRelation);
    return AssociationRelation;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/ZoneInfoBean.bean.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/ZoneInfoBean.bean.ts ***!
  \****************************************************************************************/
/*! exports provided: ZoneInfoBean, zoneList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneInfoBean", function() { return ZoneInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneList", function() { return zoneList; });
var ZoneInfoBean = /** @class */ (function () {
    function ZoneInfoBean() {
        // 四级区划信息查询
        this.parentZoneId = ''; //父级区划标识
        this.zoneList = []; //区划列表
    }
    return ZoneInfoBean;
}());

var zoneList = /** @class */ (function () {
    function zoneList() {
        this.zoneId = ''; //区域id
        this.zoneName = ''; //区域名
    }
    return zoneList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/queryParentZoneInfo.bean.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/queryParentZoneInfo.bean.ts ***!
  \***********************************************************************************************/
/*! exports provided: ParentZoneInfoBean, zoneList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentZoneInfoBean", function() { return ParentZoneInfoBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "zoneList", function() { return zoneList; });
var ParentZoneInfoBean = /** @class */ (function () {
    function ParentZoneInfoBean() {
        // 四级区划解析查询
        this.zoneId = ''; //父级区划标识
        this.zoneList = []; //
    }
    return ParentZoneInfoBean;
}());

var zoneList = /** @class */ (function () {
    function zoneList() {
        this.parentZoneId = ''; //区域id
        this.parentZoneName = ''; //区域名
    }
    return zoneList;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/updateCustGroupStatus.bean.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/updateCustGroupStatus.bean.ts ***!
  \*************************************************************************************************/
/*! exports provided: CustGroupStatusBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustGroupStatusBean", function() { return CustGroupStatusBean; });
var CustGroupStatusBean = /** @class */ (function () {
    function CustGroupStatusBean() {
        this.groupId = ''; //群号
        this.apprResult = ''; //审批结果
        this.applyType = ''; //申请类型
        this.taskCategoryId = ''; //业务种类编号
        this.scheduleId = ''; //待办Id
        this.remark = ''; //描述
    }
    return CustGroupStatusBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 padding-0\">\r\n    <!-- <header-title [Info]=\"title\"></header-title> -->\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-2 base_info\">\r\n            基本资料：\r\n            <hr>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"!opFlag\">\r\n        <div class=\"ui-g-10 ui-g-offset-1\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-2\">\r\n                    <label for=\"\">群编号：</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <label class=\"groupNumStyle\" (click)=\"toCustGroupView()\" *ngIf=\"property\">{{custGroupInfoBean.groupId}}</label>\r\n                    <label *ngIf=\"!property\">{{custGroupInfoBean.groupId}}</label>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-2\">\r\n                    <label for=\"\">群类型：</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                    <p-dropdown [options]=\"groupType\" [(ngModel)]=\"custGroupInfoBean.groupType\" disabled=\"true\"></p-dropdown>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-10 ui-g-offset-1\">\r\n            <div class=\"ui-g-1\">\r\n                <label for=\"\">群名称：</label>\r\n            </div>\r\n            <div class=\"ui-g-10\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"custGroupInfoBean.groupName\" disabled=\"true\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-10 ui-g-offset-1\">\r\n            <div class=\"ui-g-1\">\r\n                <label for=\"\">详细地址：</label>\r\n            </div>\r\n            <div class=\"ui-g-10\">\r\n                <input type=\"text\" pInputText [(ngModel)]=\"custGroupInfoBean.address\" disabled=\"true\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-10 ui-g-offset-1\">\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-2\">\r\n                    <label for=\"\">投向行业：</label>\r\n                </div>\r\n                <div class=\"ui-g-8 dropdown\">\r\n                    <div class=\"ui-g-12\">\r\n                        <p-dropdown [options]=\"firstToinvestTradeOptions\" [(ngModel)]=\"firstToinvestTrade\" disabled=\"true\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <p-dropdown [options]=\"secondToinvestTradeOptions\" [(ngModel)]=\"secondToinvestTrade\" disabled=\"true\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <p-dropdown [options]=\"thirdToinvestTradeOptions\" [(ngModel)]=\"thirdToinvestTrade\" disabled=\"true\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <p-dropdown [options]=\"fourthToinvestTradeOptions\" [(ngModel)]=\"fourthToinvestTrade\" disabled=\"true\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <div class=\"ui-g-2\">\r\n                    <label for=\"\">所属区划：</label>\r\n                </div>\r\n                <div class=\"ui-g-8 dropdown\">\r\n                    <div class=\"ui-g-12\">\r\n                        <p-dropdown [options]=\"regionSHeng\" [(ngModel)]=\"regionSHeng1\" disabled=\"true\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <p-dropdown [options]=\"regionCity\" [(ngModel)]=\"regionCity1\" disabled=\"true\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <p-dropdown [options]=\"regionArea\" [(ngModel)]=\"regionArea1\" disabled=\"true\"></p-dropdown>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                        <p-dropdown [options]=\"regionStreet\" [(ngModel)]=\"regionStreet1\" disabled=\"true\"></p-dropdown>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-10 ui-g-offset-1\">\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-3\">\r\n                    <label for=\"\">群主：</label>\r\n                </div>\r\n                <div class=\"ui-g-9\">\r\n                    <input type=\"text\" pInputText [(ngModel)]=\"custGroupBean.ownerName\" disabled=\"true\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-4\">\r\n                <div class=\"ui-g-3\">\r\n                    <label for=\"\">群联系人：</label>\r\n                </div>\r\n                <div class=\"ui-g-9\">\r\n                    <input type=\"text\" [(ngModel)]=\"contactRoleName\" pInputText disabled=\"true\">\r\n                </div>\r\n            </div>\r\n            <div class=\"ui-g-3\">\r\n                <div class=\"ui-g-3\">\r\n                    <label for=\"\">群介绍人：</label>\r\n                </div>\r\n                <div class=\"ui-g-9\">\r\n                    <input type=\"text\" [(ngModel)]=\"introducerRoleName\" pInputText disabled=\"true\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\" style=\"margin-top:40px;\">\r\n        <div class=\"ui-g-3 ui-g-offset-1\">\r\n            <div class=\"ui-g-4\">\r\n                <label for=\"\">指导师傅：</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n                <input type=\"text\" [(ngModel)]=\"mentorRoleName\" pInputText disabled=\"true\">\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-12\">\r\n            <h3>备注（群描述）：</h3>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <textarea pInputTextarea [(ngModel)]=\"custGroupInfoBean.description\" disabled=\"true\"></textarea>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 submitbtn\" *ngIf=\"!opFlag && taskCode == 'KHQ_HTZX_SP'\">\r\n        <button pButton label=\"名单附件下载\" (click)=\"listAttachDownload()\"></button>\r\n        <button pButton label=\"批量导入名单\" (click)=\"importList()\"></button>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"opFlag\">\r\n        <div class=\"ui-g-12\">\r\n            <h3>删除原因：</h3>\r\n        </div>\r\n        <div class=\"ui-g-12\">\r\n            <textarea pInputTextarea class=\"deleteResonCls\" [(ngModel)]=\"deleteReason\" disabled=\"true\"></textarea>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\">\r\n        <h3>审批意见：</h3>\r\n        <textarea pInputTextarea [(ngModel)]=\"spyj\"></textarea>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"height:200px;padding-top:20px;\">\r\n        <div class=\"ui-g-2 ui-g-offset-4\">\r\n            <button pButton label=\"同意\" (click)=\"agree()\"></button>\r\n        </div>\r\n        <div class=\"ui-g-2 \">\r\n            <button pButton label=\"拒绝\" (click)=\"return()\"></button>\r\n        </div>\r\n    </div> -->\r\n</div>\r\n\r\n<!-- msgs -->\r\n<p-growl [(value)]=\"msgs\" life=\"3000\"></p-growl>\r\n\r\n<!-- 同意，拒绝comfirm -->\r\n<p-confirmDialog header=\"\" icon=\"fa fa-question-circle\" width=\"425\" #cd>\r\n    <p-footer>\r\n        <button type=\"button\" pButton icon=\"fa-check\" label=\"是\" (click)=\"cd.accept()\"></button>\r\n        <button type=\"button\" pButton icon=\"fa-close\" label=\"否\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n</p-confirmDialog>\r\n\r\n<!-- 批量导入 -->\r\n<p-dialog [(visible)]=\"batchDisplay\" *ngIf=\"batchDisplay\" modal=\"modal\" width=\"800\" height=\"800\">\r\n    <header-title [Info]=\"title1\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <pre>\r\n            Excel文件格式说明：\r\n            Excel文件中潜在客户名称为必输项。\r\n            Excel文件最大不能超过2000行记录。\r\n            更多注意事项请查看模板中的“填报说明”。\r\n            请先下载模板：\r\n            <a href=\"{{DOWNLOAD}}/?fileUrl=/copdata/moban/&fileName=custListImport.xls\" target=\"_blank\">下载模板</a>\r\n        </pre>\r\n        <div class=\"ui-g-12\">\r\n            <strong>批量创建（Ecxel导入）</strong>\r\n            <br/>\r\n            <label for=\"\">文件导入</label>\r\n            <p-fileUpload accept=\".xls\" invalidFileTypeMessageDetail=\"只能上传Excel\" invalidFileTypeMessageSummary=\"\" chooseLabel=\"浏览\" uploadLabel=\"上传\"\r\n                cancelLabel=\"取消\" name=\"myfile[]\" url=\"{{UPLOAD}}\" (onUpload)=\"onBeforeSend($event)\">\r\n            </p-fileUpload>\r\n            <div *ngIf=\"files.length>0\">\r\n                <span *ngFor=\"let item of files\">{{item.name}}</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style=\"text-align:center;\">\r\n        <button pButton type=\"button\" label=\"关闭\" (click)=\"closebatch()\"></button>\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- 导入结果返回显示 -->\r\n<p-dialog [(visible)]=\"addDisplay\" *ngIf=\"addDisplay\" modal=\"modal\" width=\"800\">\r\n    <header-title [Info]=\"title2\"></header-title>\r\n    <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-6\">\r\n            <span>成功条数：</span>\r\n            <span>{{custGroupListBean.successNum}}</span>\r\n            <span>条</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span>失败条数：</span>\r\n            <span>{{custGroupListBean.failNum}}</span>\r\n            <span>条</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 table-area tab\">\r\n        <p-dataTable [emptyMessage]=\"tableMesg\" [style]=\"{'text-align':'center'}\" [value]=\"custGroupListBean.failInfoList\">\r\n            <p-column header=\"行号\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                        {{col.rowNum}}\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"成功/失败\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                        {{col.executeFlag == 'S' ? '成功' : '失败'}}\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column header=\"失败原因\">\r\n                <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                    <span [ngClass]=\"{'err-color':col.executeFlag != 'S'}\">\r\n                        {{col.failReason}}\r\n                    </span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <button pButton type=\"button\" label=\"确定\" (click)=\"returnCustGroupList()\"></button>\r\n    </div>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label {\n  display: inline-block;\n  width: 100px;\n  height: 28px;\n  line-height: 28px; }\n\n.base_info .ui-g-6 {\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.base_info .ui-g-12 {\n  padding-bottom: 0;\n  padding-top: 0; }\n\n.importbtn {\n  text-align: right; }\n\n.groupNumStyle {\n  color: #19b0c8;\n  cursor: pointer; }\n\n.submitbtn {\n  text-align: center; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n\n.table {\n  overflow-x: scroll; }\n\ntextarea {\n  margin-left: 100px;\n  width: 70%;\n  height: 200px; }\n\n.deleteResonCls {\n  height: 100px !important; }\n\n.table-area {\n  text-align: center;\n  max-height: 660px;\n  overflow: auto; }\n\n.err-color {\n  color: rgba(255, 0, 0, 0.94); }\n\n.padding-0 > .ui-g-12 .ui-g-11 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-10 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-8 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-6 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-4 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-2 {\n  padding: 0; }\n\n.padding-0 > .ui-g-12 .ui-g-1 {\n  padding: 0; }\n\n.dropdown .ui-g-12 {\n  padding: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2V4YW0tYXBwci1jb21wL2N1c3RvbS9jdXN0b20tZ3JvdXAvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcZXhhbS1hcHByLWNvbXBcXGN1c3RvbVxcY3VzdG9tLWdyb3VwXFxjdXN0b20tZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUVaLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFPckI7RUFFUSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUh0QjtFQU1RLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsYUFBYSxFQUFBOztBQUdqQjtFQUNJLHdCQUF3QixFQUFBOztBQUc1QjtFQUNJLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLDRCQUE0QixFQUFBOztBQUdoQztFQUdZLFVBQVUsRUFBQTs7QUFIdEI7RUFNWSxVQUFVLEVBQUE7O0FBTnRCO0VBU1ksVUFBVSxFQUFBOztBQVR0QjtFQVlZLFVBQVUsRUFBQTs7QUFadEI7RUFlWSxVQUFVLEVBQUE7O0FBZnRCO0VBa0JZLFVBQVUsRUFBQTs7QUFsQnRCO0VBcUJZLFVBQVUsRUFBQTs7QUFLdEI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvZXhhbS1hcHByLWNvbXAvY3VzdG9tL2N1c3RvbS1ncm91cC9jdXN0b20tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwcHg7IC8vIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLy8gdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG4vLyAudWktZy0ze1xyXG4vLyAgICAgbWFyZ2luOiAwO1xyXG4vLyAgICAgcGFkZGluZzogMDtcclxuLy8gfVxyXG4uYmFzZV9pbmZvIHtcclxuICAgIC51aS1nLTYge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnVpLWctMTIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW1wb3J0YnRuIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZ3JvdXBOdW1TdHlsZSB7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnN1Ym1pdGJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGFibGUtbGF5b3V0OiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5kZWxldGVSZXNvbkNscyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZS1hcmVhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1heC1oZWlnaHQ6IDY2MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuLmVyci1jb2xvciB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuOTQpO1xyXG59XHJcblxyXG4ucGFkZGluZy0wIHtcclxuICAgICY+LnVpLWctMTIge1xyXG4gICAgICAgIC51aS1nLTExIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLWctMTAge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy04IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLWctNiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS1nLTQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWktZy0yIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnVpLWctMSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24gLnVpLWctMTIge1xyXG4gICAgcGFkZGluZzogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.ts ***!
  \****************************************************************************************/
/*! exports provided: CreateCustomGroupApprovalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCustomGroupApprovalComponent", function() { return CreateCustomGroupApprovalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../custom/custom-group/bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-group/bean/custom-group.bean.ts");
/* harmony import */ var _custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _bean_updateCustGroupStatus_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/updateCustGroupStatus.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/updateCustGroupStatus.bean.ts");
/* harmony import */ var _bean_ZoneInfoBean_bean__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bean/ZoneInfoBean.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/ZoneInfoBean.bean.ts");
/* harmony import */ var _bean_queryParentZoneInfo_bean__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bean/queryParentZoneInfo.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/bean/queryParentZoneInfo.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../custom/custom-marketing/group/bean/custom-group.bean */ "./src/app/pages/tzb/custom/custom-marketing/group/bean/custom-group.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CreateCustomGroupApprovalComponent = /** @class */ (function () {
    function CreateCustomGroupApprovalComponent(route, httpService, router, routerInfo, commfunc, confirmationService) {
        this.route = route;
        this.httpService = httpService;
        this.router = router;
        this.routerInfo = routerInfo;
        this.commfunc = commfunc;
        this.confirmationService = confirmationService;
        this.property = true;
        this.title = '客户群创建审核';
        this.title1 = '客户群名单批量导入';
        this.title2 = '客户群名单导入结果';
        this.UPLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_CUS_UPLOAD"]; //上传模板
        this.DOWNLOAD = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_CUS_DOWNLOAD"]; //下载模板
        this.fileList = []; //上传文件列表
        this.files = []; //
        this.custGroupListBean = new _custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_11__["CustGroupListBean"](); //客户群名单
        this.batchDisplay = false; //批量导入
        this.addDisplay = false; //返回结果
        // 中间量
        this.contactRoleName = []; //群联系人
        this.introducerRoleName = []; //群介绍人
        this.mentorRoleName = []; //指导师傅
        this.contactArr = []; //群联系人
        this.introducerArr = []; //群介绍人
        this.mentorRoleArr = []; //指导师傅
        // 模态框
        this.GroupAdminInfoTitle = ''; //标题
        this.GroupAdminInfoDisplay = false;
        this.GroupAdminFlag = '';
        this.groupAdminName = '';
        this.nameInValue = {
            ownerName: '',
        };
        this.RoleName = '';
        // bean
        this.custGroupBean = new _custom_custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupBean"]();
        this.custGroupInfoBean = new _custom_custom_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_2__["CustGroupInfoBean"]();
        this.custGroupStatusBean = new _bean_updateCustGroupStatus_bean__WEBPACK_IMPORTED_MODULE_7__["CustGroupStatusBean"]();
        this.zoneInfoBean = new _bean_ZoneInfoBean_bean__WEBPACK_IMPORTED_MODULE_8__["ZoneInfoBean"](); //四级区划信息查询
        this.parentZoneInfoBean = new _bean_queryParentZoneInfo_bean__WEBPACK_IMPORTED_MODULE_9__["ParentZoneInfoBean"](); //四级区划解析查询
        this.scheduleId = ''; //审批接收业务种类编号
        this.taskCategoryId = ''; //审批接收待办Id
        this.list = ''; //审批接收data
        // 四级区划
        this.parentZoneInfoTempArr = [];
        this.regionArrTemp = {}; //四级区划
        this.count = 0;
        this.regionSHeng = [];
        this.regionCity = [];
        this.regionArea = [];
        this.regionStreet = [];
        this.regionSHeng1 = ''; //一级
        this.regionCity1 = ''; //二级
        this.regionArea1 = ''; //三级
        this.regionStreet1 = ''; //四级
        this.parentZoneInfoTempNum = 4; //四级区划--查询--解析--标志
        this.queryZoneInfoTempNum = 0; //四级区划--查询--信息--标志
        this.approvalResult = ''; //审批结果
        // 控件
        this.msgs = [];
        this.opFlag = false;
        this.codeValues();
        this.groupType = this.code['GroupTypeSave'];
    }
    CreateCustomGroupApprovalComponent.prototype.ngOnInit = function () {
        this.selectCustGroupInfo();
        this.preSet();
    };
    CreateCustomGroupApprovalComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    CreateCustomGroupApprovalComponent.prototype.preSet = function () {
        if (this.routerInfo.snapshot.params['data']) {
            this.list = JSON.parse(this.routerInfo.snapshot.params['data']);
        }
        if (this.routerInfo.snapshot.params['markFlag'] && this.routerInfo.snapshot.params['markFlag'] == '2') {
            this.property = false;
        }
        this.taskCode = this.routerInfo.snapshot.params['taskCode'];
        this.groupId = this.routerInfo.snapshot.params['groupId'];
        this.globalSeqNoImage = this.routerInfo.snapshot.params['globalSeqNoImage'];
        // 非主键
        this.custGroupInfoBean.groupName = ''; //查询name
        // 初始化
        //     if (this.routerInfo.snapshot.params.data) {
        //         this.scheduleId = this.routerInfo.snapshot.params.scheduleId
        //         this.taskCategoryId = this.routerInfo.snapshot.params.taskCategoryId
        //         this.list = JSON.parse(this.routerInfo.snapshot.params.data);
        //     }
        //     // 查询
        this.custGroupInfoBean.groupId = this.list.groupId; //查询id
        // 审批
        this.custGroupStatusBean.groupId = this.list.groupId; //审批id        
        this.custGroupStatusBean.applyType = this.list.applyType; //申请类型
        this.custGroupStatusBean.scheduleId = this.scheduleId;
        this.custGroupStatusBean.taskCategoryId = this.list.taskCategoryId; //??
        // // 群主 session
        // let session = window.sessionStorage;
        // let data = session.getItem('commonHeader');
        // if (!data) {
        //     this.router.navigate(["/login"]);
        //     return;
        // }
        // let mesg = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        // if (!mesg) {
        // }
        // let ch = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        // 默认
        this.custGroupBean.bgcFlag = '0'; //后台中心默认
        //四级区划
        this.zoneInfoBean.parentZoneId = ''; //四级区划
    };
    CreateCustomGroupApprovalComponent.prototype.toCustGroupView = function () {
        var a = 'groupId=' + this.custGroupInfoBean.groupId;
        window.open('/#/pages/tzb/custom/custom-group/custom-group-view;' + a);
    };
    //名单附件下载
    CreateCustomGroupApprovalComponent.prototype.listAttachDownload = function () {
        // let a = encodeURI(this.custGroupInfoBean.groupName);
        // let b = `groupId=${this.custGroupInfoBean.groupId};groupName=${a}`;
        // window.open('/#/pages/tzb/custom/custom-group/custom-group-view/custom-image-query;' + b);
        debugger;
        if (!this.globalSeqNoImage || this.globalSeqNoImage == 'undefined') {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '无此附件' }];
            return;
        }
        //获取用户名及ID
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        var chName = JSON.parse(this.commfunc.getSessionDataCH('chName'));
        var orgID = commonHeader.orgId;
        var userId = commonHeader.userId;
        var orgName = chName.orgName;
        var userName = chName.userName;
        var time = new Date();
        var year = time.getFullYear();
        var month = time.getMonth() + 1 + '';
        var datas = time.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (datas.length < 2) {
            datas = "0" + datas;
        }
        var QUERY_TIME = '' + year + month;
        window.open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_10__["TZB_HTTP_YXKQ"] + "SunIAS_V7/SunIASRequestServlet.do?UID=MOBILE&OrgID=" + orgID + "&OrgName=" + orgName + "&OrgOwner=" + orgID + "&right=0100000&PWD=cyg&UserID=" + userId + "&UserName=" + userName + "&AppID=SA&info1=BUSI_SERIAL_NO:" + this.globalSeqNoImage + ";OBJECT_NAME:APP1009;FILELEVEL:33;RIGHT:1111111;OBJECT_NAME:APP1009;QUERY_TIME:" + QUERY_TIME);
    };
    //批量导入名单
    CreateCustomGroupApprovalComponent.prototype.importList = function () {
        this.batchDisplay = true;
    };
    CreateCustomGroupApprovalComponent.prototype.selectCustGroupInfo = function () {
        var _this = this;
        // 客户群信息查询
        this.param = {
            groupId: this.route.snapshot.params['groupId'],
            applyType: this.route.snapshot.params['applyType'],
        };
        this.httpService.selectCustGroupInfo(this.param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupInfoBean = data;
                _this.custGroupInfoBean.contactList = data.contactList;
                _this.custGroupInfoBean.mentorList = data.mentorList;
                _this.contactArr = data.contactList; //群联系人
                _this.introducerArr = data.introducerList; //群介绍人
                _this.mentorRoleArr = data.mentorList; //指导师傅
                // if (this.custGroupInfoBean.appraisalList) {
                //     this.appraisalRoleName = this.custGroupInfoBean.appraisalList[0].roleName
                // }
                _this.custGroupBean.ownerId = data.ownerId;
                _this.custGroupBean.ownerName = data.ownerName;
                _this.custGroupInfoBean.region = data.region; //四级区划
                if (data.region && data.region != '') {
                    _this.queryParentZoneAll(data.region);
                }
                _this.parentZoneInfoBean.zoneId = _this.custGroupInfoBean.region; //四级区划 、
                if (data.subGroupType && data.subGroupType != '') {
                    _this.queryTaskByIndtstryAll(data.subGroupType);
                }
                // 群联系人
                var arr_1 = [];
                if (data.contactList) {
                    data.contactList.forEach(function (item) {
                        arr_1.push(item.roleName);
                    });
                }
                _this.contactRoleName = arr_1.join(';');
                // 群介绍人
                var arr1_1 = [];
                if (data.introducerList) {
                    data.introducerList.forEach(function (item) {
                        arr1_1.push(item.roleName);
                    });
                }
                _this.introducerRoleName = arr1_1.join(';');
                // 根据删除原因是否有值判断属于哪种审批
                if (data.deleteReason && data.deleteReason != '' && data.deleteReason != null && data.deleteReason != undefined) {
                    _this.opFlag = true;
                    _this.deleteReason = data.deleteReason;
                    _this.selectGroupAdminInfoContact();
                    _this.selectGroupAdminInfoIntru();
                }
                else {
                    _this.opFlag = false;
                }
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '查询信息失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.code }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CreateCustomGroupApprovalComponent.prototype.queryParentZoneAll = function (region) {
        var _this = this;
        var params = {
            zoneId: region
        };
        var successFnc = function (data) {
            data.firstZone.forEach(function (item) {
                _this.regionSHeng.push({
                    label: item.zoneName,
                    value: item.zoneId
                });
            });
            data.secondZone.forEach(function (item) {
                _this.regionCity.push({
                    label: item.zoneName,
                    value: item.zoneId
                });
            });
            data.thirdZone.forEach(function (item) {
                _this.regionArea.push({
                    label: item.zoneName,
                    value: item.zoneId
                });
            });
            data.fourthZone.forEach(function (item) {
                _this.regionStreet.push({
                    label: item.zoneName,
                    value: item.zoneId
                });
            });
            _this.regionSHeng = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.regionSHeng);
            _this.regionCity = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.regionCity);
            _this.regionArea = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.regionArea);
            _this.regionStreet = lodash__WEBPACK_IMPORTED_MODULE_6__["clone"](_this.regionStreet);
            data.zoneList.forEach(function (item) {
                switch (item.parentZoneLevel) {
                    case '1':
                        _this.regionSHeng1 = item.parentZoneId;
                        break;
                    case '2':
                        _this.regionCity1 = item.parentZoneId;
                        break;
                    case '3':
                        _this.regionArea1 = item.parentZoneId;
                        break;
                    case '4':
                        _this.regionStreet1 = item.parentZoneId;
                        break;
                    default: break;
                }
            });
        };
        this.commfunc.interfaceComFnc(this.httpService.queryParentZoneAll(params), successFnc, this.msgs);
    };
    // 查询群联系人
    CreateCustomGroupApprovalComponent.prototype.selectGroupAdminInfoContact = function () {
        var _this = this;
        var parames = {
            groupId: this.route.snapshot.params['groupId'],
            roleType: '1',
            statusId: 1
        };
        this.httpService.selectGroupAdminInfo(parames).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.contactArr = data.roleList || [];
                var arr_2 = [];
                if (data.roleList) {
                    data.roleList.forEach(function (item) {
                        arr_2.push(item.userName);
                    });
                }
                _this.contactRoleName = arr_2.join(';');
            }
        });
    };
    // 查询群介绍人
    CreateCustomGroupApprovalComponent.prototype.selectGroupAdminInfoIntru = function () {
        var _this = this;
        var parames = {
            groupId: this.route.snapshot.params['groupId'],
            roleType: '2',
            statusId: 1
        };
        this.httpService.selectGroupAdminInfo(parames).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.introducerRoleName = data.roleList || [];
                var arr_3 = [];
                if (data.roleList) {
                    data.roleList.forEach(function (item) {
                        arr_3.push(item.userName);
                    });
                }
                _this.introducerRoleName = arr_3.join(';');
            }
        });
    };
    //投向行业回显
    CreateCustomGroupApprovalComponent.prototype.queryTaskByIndtstryAll = function (subGroupType) {
        var _this = this;
        var params = {
            taskTypeId: subGroupType, taskTypeKey: 'indtstryType'
        };
        this.httpService.queryTaskByIndtstryAll(params).subscribe(function (data) {
            _this.firstToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.firstTask, 'taskTypeName', 'taskTypeId');
            _this.firstToinvestTradeOptions.unshift({ label: '请选择', value: '' });
            _this.secondToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.secondTask, 'taskTypeName', 'taskTypeId');
            _this.secondToinvestTradeOptions.unshift({ label: '请选择', value: '' });
            _this.thirdToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.thirdTask, 'taskTypeName', 'taskTypeId');
            _this.thirdToinvestTradeOptions.unshift({ label: '请选择', value: '' });
            _this.fourthToinvestTradeOptions = _this.commfunc.listToLabelvalue(data.fourthTask, 'taskTypeName', 'taskTypeId');
            _this.fourthToinvestTradeOptions.unshift({ label: '请选择', value: '' });
            data.taskList.forEach(function (item) {
                switch (item.level) {
                    case '1':
                        _this.firstToinvestTrade = item.taskTypeId;
                        break;
                    case '2':
                        _this.secondToinvestTrade = item.taskTypeId;
                        break;
                    case '3':
                        _this.thirdToinvestTrade = item.taskTypeId;
                        break;
                    case '4':
                        _this.fourthToinvestTrade = item.taskTypeId;
                        break;
                    default: break;
                }
            });
        });
    };
    // 客户群名单批量导入关闭
    CreateCustomGroupApprovalComponent.prototype.closebatch = function () {
        this.batchDisplay = false;
    };
    // 客户群名单返回结果模态框
    CreateCustomGroupApprovalComponent.prototype.returnCustGroupList = function () {
        this.addDisplay = false;
    };
    //批量导入
    CreateCustomGroupApprovalComponent.prototype.onBeforeSend = function (event) {
        var _this = this;
        // 上传点击,需跨域
        this.custGroupListBean = new _custom_custom_marketing_group_bean_custom_group_bean__WEBPACK_IMPORTED_MODULE_11__["CustGroupListBean"]();
        if (event.xhr.response) {
            this.fileList = JSON.parse(event.xhr.response);
            if (this.fileList.length > 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不支持上传多个文件！' }];
                return;
            }
            if (this.fileList.hasOwnProperty('errorMsg')) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: this.fileList.errorMsg });
                return;
            }
            this.custGroupListBean.groupId = this.groupId;
            this.custGroupListBean.filePath = this.fileList[0].fileUrl;
            this.custGroupListBean.fileName = this.fileList[0].fileName;
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '获取服务器列表失败！' }];
        }
        //不需要审批
        var param = this.custGroupListBean;
        this.custGroupListBean.groupApplyFlag = '1';
        this.httpService.batchCustGroupList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custGroupListBean.successNum = data.successNum;
                _this.custGroupListBean.failNum = data.failNum;
                data.failInfoList = data.failInfoList.filter(function (item) { return item.executeFlag == 'F'; }); //
                _this.custGroupListBean.failInfoList = data.failInfoList;
                _this.batchDisplay = false;
                _this.addDisplay = true;
                _this.msgs = [];
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [];
                data.returnCode.code ? data.returnCode.code : '导入失败！';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败！' }];
        });
    };
    CreateCustomGroupApprovalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-custom-group',
            template: __webpack_require__(/*! ./custom-group.component.html */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.html"),
            styles: [__webpack_require__(/*! ./custom-group.component.scss */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.scss")],
            providers: [_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"]])
    ], CreateCustomGroupApprovalComponent);
    return CreateCustomGroupApprovalComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-menubar [model]=\"items\"></p-menubar> -->\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host/deep/ .ui-menubar {\n  border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2V4YW0tYXBwci1jb21wL2N1c3RvbS9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxleGFtLWFwcHItY29tcFxcY3VzdG9tXFxjdXN0b20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvZXhhbS1hcHByLWNvbXAvY3VzdG9tL2N1c3RvbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0L2RlZXAvIC51aS1tZW51YmFye1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom.component.ts ***!
  \*********************************************************************/
/*! exports provided: CustomWorkflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomWorkflow", function() { return CustomWorkflow; });
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

//客户工作流
var CustomWorkflow = /** @class */ (function () {
    function CustomWorkflow() {
    }
    CustomWorkflow.prototype.ngOnInit = function () {
        this.items = [
            {
                label: '关联关系',
                routerLink: '/pages/tzb/workflow/custom-workflow/association-relation'
            },
            {
                label: '客户群',
                routerLink: '/pages/tzb/workflow/custom-workflow/custom-group',
            },
            {
                label: '贷款申请',
                routerLink: '/pages/tzb/workflow/custom-workflow/loans'
            },
        ];
    };
    CustomWorkflow = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-workflow',
            template: __webpack_require__(/*! ./custom.component.html */ "./src/app/pages/tzb/exam-appr-comp/custom/custom.component.html"),
            styles: [__webpack_require__(/*! ./custom.component.scss */ "./src/app/pages/tzb/exam-appr-comp/custom/custom.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomWorkflow);
    return CustomWorkflow;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/custom.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/custom.routing.ts ***!
  \*******************************************************************/
/*! exports provided: CustomWorkflowRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomWorkflowRouting", function() { return CustomWorkflowRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom.component */ "./src/app/pages/tzb/exam-appr-comp/custom/custom.component.ts");
/* harmony import */ var _association_relation_association_relation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./association-relation/association-relation */ "./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.ts");
/* harmony import */ var _loans_loans_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loans/loans.component */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.ts");
/* harmony import */ var _custom_loans_addloan_addloan_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../custom/loans/addloan/addloan.component */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.ts");
/* harmony import */ var _custom_loans_updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom/loans/updateloan/updateloan.component */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.ts");

//页面
 //客户工作流
 //关联关系
 //贷款


// import { CreateCustomGroupApprovalComponent } from './custom-group/custom-group.component';//客户群
var routes = [
    {
        path: '',
        component: _custom_component__WEBPACK_IMPORTED_MODULE_1__["CustomWorkflow"],
        children: [
            { path: '', redirectTo: 'association-relation' },
            {
                path: 'association-relation', component: _association_relation_association_relation__WEBPACK_IMPORTED_MODULE_2__["AssociationRelation"],
            },
            {
                path: 'addloan',
                component: _custom_loans_addloan_addloan_component__WEBPACK_IMPORTED_MODULE_4__["AddLoanComponent"]
            },
            {
                path: 'updateloan',
                component: _custom_loans_updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_5__["UpdateLoanComponent"]
            },
            // {
            //     path: 'custom-group', component: CreateCustomGroupApprovalComponent,
            // },
            {
                path: 'loans',
                component: _loans_loans_component__WEBPACK_IMPORTED_MODULE_3__["LoansComponent"]
            }
        ]
    },
];
var CustomWorkflowRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/flow-custom.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/flow-custom.module.ts ***!
  \***********************************************************************/
/*! exports provided: CustomWorkflowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomWorkflowModule", function() { return CustomWorkflowModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _custom_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custom.routing */ "./src/app/pages/tzb/exam-appr-comp/custom/custom.routing.ts");
/* harmony import */ var _custom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom.component */ "./src/app/pages/tzb/exam-appr-comp/custom/custom.component.ts");
/* harmony import */ var _association_relation_association_relation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./association-relation/association-relation */ "./src/app/pages/tzb/exam-appr-comp/custom/association-relation/association-relation.ts");
/* harmony import */ var _loans_loans_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loans/loans.component */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.ts");
/* harmony import */ var _custom_loans_addloan_addloan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../custom/loans/addloan/addloan.component */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.ts");
/* harmony import */ var _custom_loans_updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../custom/loans/updateloan/updateloan.component */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.ts");
/* harmony import */ var _custom_loans_loansTree_loansTree_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../custom/loans/loansTree/loansTree.component */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loansTree/loansTree.component.ts");
/* harmony import */ var _custom_group_custom_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-group/custom-group.component */ "./src/app/pages/tzb/exam-appr-comp/custom/custom-group/custom-group.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//客户组件


//页面
 //客户工作流
 //关联关系
 //贷款




var CustomWorkflowModule = /** @class */ (function () {
    function CustomWorkflowModule() {
    }
    CustomWorkflowModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
                _custom_routing__WEBPACK_IMPORTED_MODULE_5__["CustomWorkflowRouting"]
            ],
            declarations: [
                _custom_component__WEBPACK_IMPORTED_MODULE_6__["CustomWorkflow"],
                _association_relation_association_relation__WEBPACK_IMPORTED_MODULE_7__["AssociationRelation"],
                _loans_loans_component__WEBPACK_IMPORTED_MODULE_8__["LoansComponent"],
                _custom_loans_updateloan_updateloan_component__WEBPACK_IMPORTED_MODULE_10__["UpdateLoanComponent"],
                _custom_loans_addloan_addloan_component__WEBPACK_IMPORTED_MODULE_9__["AddLoanComponent"],
                _custom_loans_loansTree_loansTree_component__WEBPACK_IMPORTED_MODULE_11__["LoansTreeComponent"],
                _custom_group_custom_group_component__WEBPACK_IMPORTED_MODULE_12__["CreateCustomGroupApprovalComponent"]
            ],
            exports: [
            // CreateCustomGroupComponent
            ],
            entryComponents: [],
            providers: [
                _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__["AuthorityService"],
            ]
        })
    ], CustomWorkflowModule);
    return CustomWorkflowModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'贷款申请新增'\"></header-title>\r\n</div>\r\n<div class=\"ui-g-11 ui-g-offset-1\">\r\n    <form [formGroup]=\"userform\">\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>客户编号:</span>\r\n            <input type=\"text\" formControlName=\"custNo\" pInputText [(ngModel)]=\"addLoanApplyRegisInfoBean.custNo\" (blur)=\"myFunction()\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custNo'].valid&&userform.controls['custNo'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>客户名称:</span>\r\n            <input type=\"text\" disabled formControlName=\"custName\" pInputText [(ngModel)]=\"addLoanApplyRegisInfoBean.custName\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['custName'].valid&&userform.controls['custName'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>申请产品:</span>\r\n            <input type=\"text\" pInputText formControlName=\"itemsAdd\" disabled placeholder=\"请选择产品\" [(ngModel)]=\"itemsAdd\">\r\n            <button pButton type=\"button\" label=\"选择\" (click)=\"chanpin()\"></button>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['itemsAdd'].valid&&userform.controls['itemsAdd'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>申请金额:</span>\r\n            <input type=\"text\" formControlName=\"applyAmt\" pInputText [(ngModel)]=\"addLoanApplyRegisInfoBean.applyAmt\" (blur)=\"money()\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['applyAmt'].valid&&userform.controls['applyAmt'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>主担保方式:</span>\r\n            <p-dropdown [options]=\"danbaoOptions\" formControlName=\"guaranteeMode\" [(ngModel)]=\"addLoanApplyRegisInfoBean.guaranteeMode\"></p-dropdown>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['guaranteeMode'].valid&&userform.controls['guaranteeMode'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">起贷日期:</span>\r\n            <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                formControlName=\"startCridetDate\" [(ngModel)]=\"startCridetDate\" [locale]=\"ch\" (onSelect)=\"showData()\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">到期日期:</span>\r\n            <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                formControlName=\"endCridetDate\" [(ngModel)]=\"endCridetDate\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>客户经理:</span>\r\n            <input type=\"text\" disabled formControlName=\"managerName\" pInputText [(ngModel)]=\"managerName\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['managerName'].valid&&userform.controls['managerName'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>经办人:</span>\r\n            <input type=\"text\" disabled formControlName=\"operateName\" pInputText [(ngModel)]=\"operateName\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['operateName'].valid&&userform.controls['operateName'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>经办机构:</span>\r\n            <input type=\"text\" disabled formControlName=\"operateOrgName\" pInputText [(ngModel)]=\"operateOrgName\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['operateOrgName'].valid&&userform.controls['operateOrgName'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>经办日期:</span>\r\n            <p-calendar [disabled]=\"true\" [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                formControlName=\"operateDate\" [(ngModel)]=\"operateDate\" [locale]=\"ch\" (onSelect)=\"showData()\"></p-calendar>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['operateDate'].valid&&userform.controls['operateDate'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>来源类型:</span>\r\n            <p-dropdown [options]=\"sourceTypeOptions\" formControlName=\"sourceType\" [(ngModel)]=\"addLoanApplyRegisInfoBean.sourceType\"\r\n                (onChange)=\"Addchoose1()\"></p-dropdown>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['sourceType'].valid&&userform.controls['sourceType'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">来源渠道:</span>\r\n            <p-dropdown [options]=\"sourceChanelOptions\" [disabled]=\"true\" formControlName=\"sourceChanel\" [(ngModel)]=\"addLoanApplyRegisInfoBean.sourceChanel\"></p-dropdown>\r\n        </div>\r\n        <div *ngIf=\"cusShow\">\r\n            <div class=\"ui-g-6\">\r\n                <span class=\"ui-g-2\" appValidation>介绍人客户号:</span>\r\n                <input type=\"text\" pInputText formControlName=\"intrCustNo\" [(ngModel)]=\"addLoanApplyRegisInfoBean.intrCustNo\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['intrCustNo'].valid&&userform.controls['intrCustNo'].dirty\">必输项!</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span class=\"ui-g-2\" appValidation>介绍人名称:</span>\r\n                <input type=\"text\" pInputText formControlName=\"intrUserName\" [(ngModel)]=\"addLoanApplyRegisInfoBean.intrUserName\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['intrUserName'].valid&&userform.controls['intrUserName'].dirty\">必输项!</span>\r\n            </div>\r\n\r\n            <div class=\"ui-g-6\">\r\n                <span class=\"ui-g-2\" appValidation>介绍人身份证:</span>\r\n                <input type=\"text\" pInputText formControlName=\"intrGlobalId\" [(ngModel)]=\"addLoanApplyRegisInfoBean.intrGlobalId\" (blur)=\"shenfenCard()\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"shenfen2\">身份证必输!</span>\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"shenfen1\">身份证格式错误!</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span class=\"ui-g-2\" appValidation>介绍人手机号:</span>\r\n                <input type=\"text\" pInputText formControlName=\"intrMobileNo\" [(ngModel)]=\"addLoanApplyRegisInfoBean.intrMobileNo\">\r\n                <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['intrMobileNo'].valid&&userform.controls['intrMobileNo'].dirty\">必输项!</div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>审批状态:</span>\r\n            <p-dropdown [options]=\"applyStatusOptions\" [disabled]=\"true\" formControlName=\"applyStatus\" [(ngModel)]=\"addLoanApplyRegisInfoBean.applyStatus\"></p-dropdown>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['applyStatus'].valid&&userform.controls['applyStatus'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\" *ngIf=\"explain\">\r\n            <span class=\"ui-g-2\" appValidation>说明:</span>\r\n            <input type=\"text\" pInputText formControlName=\"discription\" [(ngModel)]=\"addLoanApplyRegisInfoBean.discription\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['discription'].valid&&userform.controls['discription'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\" *ngIf=\"XYTJ\">\r\n            <span class=\"ui-g-2\" appValidation>营销途径::</span>\r\n            <p-dropdown [options]=\"YingxiaoTJOptions\" formControlName=\"marketType\" [(ngModel)]=\"addLoanApplyRegisInfoBean.marketType\"></p-dropdown>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['marketType'].valid&&userform.controls['marketType'].dirty\">必输项!</span>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton type=\"button\" label=\"保存\" (click)=\"addSave()\"></button>\r\n    <button pButton type=\"button\" label=\"提交\" (click)=\"addcommit()\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)=\"addchongzhi()\"></button>\r\n    <button pButton type=\"button\" label=\"返回\" (click)=\"addCancel()\"></button>\r\n</div>\r\n<p-dialog [(visible)]=\"treePage\" modal=\"modal\" width=\"1200\" [responsive]=\"true\" [positionTop]=10>\r\n    <loansTree (outValue)=\"getData($event)\"></loansTree>\r\n    <!-- <p-tree [value]=\"treeDate\" selectionMode=\"single\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExand($event)\"></p-tree> -->\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n\n.tit {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 3px; }\n\n.tit .total {\n    display: flex;\n    flex: 1;\n    flex-direction: column; }\n\n.tit .total .cont {\n      display: flex;\n      padding: 0;\n      /* width: 87%; */\n      flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2V4YW0tYXBwci1jb21wL2N1c3RvbS9sb2Fucy9hZGRsb2FuL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGV4YW0tYXBwci1jb21wXFxjdXN0b21cXGxvYW5zXFxhZGRsb2FuXFxhZGRsb2FuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBSnRCO0lBTVEsYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0IsRUFBQTs7QUFSOUI7TUFVWSxhQUFhO01BQ2IsVUFBVTtNQUNWLGdCQUFBO01BQ0EsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2V4YW0tYXBwci1jb21wL2N1c3RvbS9sb2Fucy9hZGRsb2FuL2FkZGxvYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50aXR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgLnRvdGFsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAuY29udCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIC8qIHdpZHRoOiA4NyU7ICovXHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLoanComponent", function() { return AddLoanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_addLoanApplyRegisInfo_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/addLoanApplyRegisInfo.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/bean/addLoanApplyRegisInfo.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { CustRegisType, BussTypes, GuaranteeModes, SourceChanel, SourceType, ApplyStatus, YingxiaoTJ } from '../../../../custom/constant/custOperation.codeValue';









var AddLoanComponent = /** @class */ (function () {
    function AddLoanComponent(httpService, commfunc, fb, routeInfo, router, decimalPipe) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.routeInfo = routeInfo;
        this.router = router;
        this.decimalPipe = decimalPipe;
        this.shenfen1 = false; //身份证校验
        this.shenfen2 = false;
        this.danbaoOptions = [];
        this.listTime = [];
        this.treeDate = [];
        this.msgs = [];
        this.addPage = true;
        this.cusShow = false; //介绍人
        this.explain = false; //说明
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.XYTJ = false; //营销途径
        this.date = new Date();
        this.treePage = false;
        this.addLoanApplyRegisInfoBean = new _bean_addLoanApplyRegisInfo_bean__WEBPACK_IMPORTED_MODULE_2__["AddLoanApplyRegisInfoBean"]();
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
        this.userform = fb.group({
            custNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            custName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            startCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            endCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            sourceChanel: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            intrCustNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            intrUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            intrGlobalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            intrMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            discription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            marketType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            applyAmt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            guaranteeMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            managerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            operateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            operateOrgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            operateDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            applyStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            sourceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            itemsAdd: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
        });
        this.operateDate = this.date;
    }
    AddLoanComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.bussType = this.code['BussTypes'];
        this.guaranteeModeOptions = this.code['GuaranteeModes'];
        this.sourceTypeOptions = this.code['SourceType'];
        this.sourceChanelOptions = this.code['SourceChanel'];
        this.applyStatusOptions = this.code['ApplyStatus'];
        this.YingxiaoTJOptions = this.code['YingxiaoTJ'];
        this.startCridetDate = this.date;
        this.operateOrgName = this.orgName;
        this.managerName = this.userName;
        this.operateName = this.userName;
        this.addLoanApplyRegisInfoBean.sourceChanel = '01';
        this.addLoanApplyRegisInfoBean.applyStatus = '0';
        this.addLoanApplyRegisInfoBean.managerId = this.userId;
        this.addLoanApplyRegisInfoBean.operateId = this.userId;
        this.addLoanApplyRegisInfoBean.operateOrgId = this.orgId;
    };
    AddLoanComponent.prototype.ngOnChanges = function () {
        if (this.addLoanApplyRegisInfoBean.sourceType == '01') {
            this.cusShow = true;
            this.XYTJ = false;
            this.explain = false;
            this.userform = this.fb.group({
                custNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                custName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                startCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                endCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                sourceChanel: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrCustNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                intrUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                intrGlobalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                intrMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                discription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                marketType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                applyAmt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                guaranteeMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                managerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateOrgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                applyStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                sourceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                itemsAdd: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            });
        }
        else if (this.addLoanApplyRegisInfoBean.sourceType == '04') {
            this.XYTJ = true;
            this.cusShow = false;
            this.explain = false;
            this.userform = this.fb.group({
                custNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                custName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                startCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                endCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                sourceChanel: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrCustNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrGlobalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                discription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                marketType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                applyAmt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                guaranteeMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                managerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateOrgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                applyStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                sourceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                itemsAdd: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            });
        }
        else if (this.addLoanApplyRegisInfoBean.sourceType == '05') {
            this.explain = true;
            this.cusShow = false;
            this.XYTJ = false;
            this.userform = this.fb.group({
                custNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                custName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                startCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                endCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                sourceChanel: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrCustNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrGlobalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                discription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                marketType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                applyAmt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                guaranteeMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                managerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateOrgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                applyStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                sourceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                itemsAdd: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            });
        }
        else {
            this.explain = false;
            this.cusShow = false;
            this.XYTJ = false;
            this.userform = this.fb.group({
                custNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                custName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                startCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                endCridetDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                sourceChanel: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrCustNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrGlobalId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                intrMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                discription: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                marketType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                applyAmt: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                guaranteeMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                managerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateOrgName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                operateDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                applyStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                sourceType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
                itemsAdd: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            });
        }
    };
    AddLoanComponent.prototype.money = function () {
        this.applyAmt = this.decimalPipe.transform(this.addLoanApplyRegisInfoBean.applyAmt, '1.2-2');
        if (!this.listMoney) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请先选择产品' }];
        }
        else {
            if (parseInt(this.addLoanApplyRegisInfoBean.applyAmt) < this.listMoney[0].min * 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不能小于' + this.listMoney[0].min }];
            }
            else if (parseInt(this.addLoanApplyRegisInfoBean.applyAmt) > this.listMoney[0].max * 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不能大于' + this.listMoney[0].max }];
            }
        }
        this.method();
    };
    AddLoanComponent.prototype.method = function () {
        console.log(this.applyAmt);
        this.addLoanApplyRegisInfoBean.applyAmt = this.applyAmt;
    };
    AddLoanComponent.prototype.transDate = function (value) {
        if (!value) {
            return '';
        }
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + '-' + month + '-' + data;
        return newtime;
    };
    //判断日期
    AddLoanComponent.prototype.showData = function () {
        if (this.transDate(this.operateDate) < this.transDate(this.date)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '不可早于当前日期' }];
            return;
        }
        else if (this.transDate(this.startCridetDate) < this.transDate(this.date)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '不可早于当前日期' }];
            return;
        }
    };
    //判断日期
    AddLoanComponent.prototype.showDataEnd = function () {
        var maxtime = this.listTime[0].max * 1;
        var mintime = this.listTime[0].min * 1;
        var endmintime = moment__WEBPACK_IMPORTED_MODULE_8__().add(mintime / 12, 'year').format('Y-MM-DD');
        var endmaxtime = moment__WEBPACK_IMPORTED_MODULE_8__().add(maxtime / 12, 'year').format('Y-MM-DD');
        if (this.transDate(this.endCridetDate) < this.transDate(this.startCridetDate)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '必须大于起贷日期' }];
            this.endCridetDate = '';
            return;
        }
        else if (this.transDate(this.endCridetDate) > endmaxtime) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '不能大于' + endmaxtime }];
            this.endCridetDate = '';
            return;
        }
        else if (this.transDate(this.endCridetDate) < endmintime) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '不能小于' + endmintime }];
            this.endCridetDate = '';
            return;
        }
    };
    //来源类型
    AddLoanComponent.prototype.Addchoose1 = function () {
        if (this.addLoanApplyRegisInfoBean.sourceType == '01') {
            this.cusShow = true;
            this.XYTJ = false;
            this.explain = false;
        }
        else if (this.addLoanApplyRegisInfoBean.sourceType == '04') {
            this.XYTJ = true;
            this.cusShow = false;
            this.explain = false;
        }
        else if (this.addLoanApplyRegisInfoBean.sourceType == '05') {
            this.explain = true;
            this.cusShow = false;
            this.XYTJ = false;
        }
        else {
            this.explain = false;
            this.cusShow = false;
            this.XYTJ = false;
        }
    };
    AddLoanComponent.prototype.myFunction = function () {
        var _this = this;
        var param = {
            custNo: this.addLoanApplyRegisInfoBean.custNo
        };
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.addLoanApplyRegisInfoBean.custName = data.custName;
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
    AddLoanComponent.prototype.addSave = function () {
        var _this = this;
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        this.addLoanApplyRegisInfoBean.managerId = this.userId;
        this.addLoanApplyRegisInfoBean.operateId = this.userId;
        this.addLoanApplyRegisInfoBean.operateOrgId = this.orgId;
        this.addLoanApplyRegisInfoBean.startCridetDate = this.commfunc.transDate(this.startCridetDate); //新增起贷日期
        this.addLoanApplyRegisInfoBean.endCridetDate = this.commfunc.transDate(this.endCridetDate); //新增到期日期
        this.addLoanApplyRegisInfoBean.operateDate = this.commfunc.transDate(this.operateDate); //新增经办日期
        this.addLoanApplyRegisInfoBean.bussType = this.paramAdd;
        this.httpService.saveLoanApplyRegisInfo(this.addLoanApplyRegisInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '保存成功' });
                _this.router.navigate(["pages/tzb/workflow/custom-workflow/loans"]);
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
    //返回
    AddLoanComponent.prototype.addCancel = function () {
        this.router.navigate(["pages/tzb/workflow/custom-workflow/loans"]);
    };
    AddLoanComponent.prototype.addchongzhi = function () {
        this.addPage = false;
        this.addLoanApplyRegisInfoBean.custNo = '';
        this.addLoanApplyRegisInfoBean.custName = '';
        this.itemsAdd = '';
        this.paramAdd = '';
        this.addLoanApplyRegisInfoBean.bussType = '';
        this.addLoanApplyRegisInfoBean.guaranteeMode = '';
        this.endCridetDate = new Date(this.dateEnd);
        this.startCridetDate = this.date;
        this.addLoanApplyRegisInfoBean.startCridetDate = this.startCridetDate;
        this.addLoanApplyRegisInfoBean.endCridetDate = this.endCridetDate;
        this.addLoanApplyRegisInfoBean.applyAmt = '';
        this.addLoanApplyRegisInfoBean.sourceType = '';
        this.addLoanApplyRegisInfoBean.intrCustNo = '';
        this.addLoanApplyRegisInfoBean.intrUserName = '';
        this.addLoanApplyRegisInfoBean.intrGlobalId = '';
        this.addLoanApplyRegisInfoBean.intrMobileNo = '';
        this.addLoanApplyRegisInfoBean.discription = '';
        this.operateDate = '';
        this.addLoanApplyRegisInfoBean.operateDate = '';
    };
    AddLoanComponent.prototype.addcommit = function () {
        var _this = this;
        //校验的
        for (var i in this.userform.controls) {
            this.userform.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.userform.controls) {
            if (!this.userform.controls[i].valid) {
                return;
            }
        }
        this.addLoanApplyRegisInfoBean.managerId = this.userId;
        this.addLoanApplyRegisInfoBean.operateId = this.userId;
        this.addLoanApplyRegisInfoBean.operateOrgId = this.orgId;
        this.addLoanApplyRegisInfoBean.bussType = this.paramAdd;
        this.addLoanApplyRegisInfoBean.startCridetDate = this.commfunc.transDate(this.startCridetDate); //新增起贷日期
        this.addLoanApplyRegisInfoBean.endCridetDate = this.commfunc.transDate(this.endCridetDate); //新增到期日期
        this.addLoanApplyRegisInfoBean.operateDate = this.commfunc.transDate(this.operateDate); //新增经办日期
        this.httpService.commitLoanApplyRegisInfo(this.addLoanApplyRegisInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '提交成功' });
                _this.router.navigate(["pages/tzb/workflow/custom-workflow/loans"]);
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
    AddLoanComponent.prototype.chanpin = function () {
        this.treePage = true;
    };
    AddLoanComponent.prototype.getData = function (event) {
        this.treePage = false;
        this.parentValue = event;
        this.itemsAdd = this.parentValue[0]['productName'];
        this.paramAdd = this.parentValue[0]['productId'];
        var arrDanbao = this.parentValue[3];
        this.danbaoOptions = [];
        this.danbaoOptions.push({ label: '请选择', value: '' });
        for (var _i = 0, arrDanbao_1 = arrDanbao; _i < arrDanbao_1.length; _i++) {
            var item = arrDanbao_1[_i];
            this.danbaoOptions.push({ label: item['productFeatureName'], value: item['productFeatureId'] });
        }
        this.listMoney = this.parentValue[1];
        this.listTime = this.parentValue[2];
    };
    AddLoanComponent.prototype.shenfenCard = function () {
        if (this.addLoanApplyRegisInfoBean.intrGlobalId) {
            this.shenfen2 = false;
            var reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
            var result = reg.test(this.addLoanApplyRegisInfoBean.intrGlobalId);
            if (!result) {
                this.shenfen1 = true;
                return;
            }
            else {
                this.shenfen1 = false;
            }
        }
        else if (!this.addLoanApplyRegisInfoBean.intrGlobalId) {
            this.shenfen2 = true;
        }
    };
    //码值
    AddLoanComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    AddLoanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'addloan',
            template: __webpack_require__(/*! ./addloan.component.html */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.html"),
            styles: [__webpack_require__(/*! ./addloan.component.scss */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/addloan.component.scss")],
            providers: [_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]]
        }),
        __metadata("design:paramtypes", [_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]])
    ], AddLoanComponent);
    return AddLoanComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/bean/addLoanApplyRegisInfo.bean.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/addloan/bean/addLoanApplyRegisInfo.bean.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddLoanApplyRegisInfoBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLoanApplyRegisInfoBean", function() { return AddLoanApplyRegisInfoBean; });
var AddLoanApplyRegisInfoBean = /** @class */ (function () {
    function AddLoanApplyRegisInfoBean() {
    }
    return AddLoanApplyRegisInfoBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/bean/selectLoanApplyRegisInfo.bean.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/bean/selectLoanApplyRegisInfo.bean.ts ***!
  \*********************************************************************************************/
/*! exports provided: SelectLoanApplyRegisInfoBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLoanApplyRegisInfoBean", function() { return SelectLoanApplyRegisInfoBean; });
//贷款申请登记信息查询
var SelectLoanApplyRegisInfoBean = /** @class */ (function () {
    function SelectLoanApplyRegisInfoBean() {
    }
    return SelectLoanApplyRegisInfoBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12\">\r\n        <header-title [Info]=\"title\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-11 ui-g-offset-1\">\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">客户编号:</span>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"selectLoanApplyRegisInfoBean.custNo\">\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">客户名称:</span>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"selectLoanApplyRegisInfoBean.custName\">\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">申请产品:</span>\r\n            <input type=\"text\" pInputText disabled placeholder=\"请选择产品\" [(ngModel)]=\"items\">\r\n            <button pButton type=\"button\" label=\"选择\" (click)=\"chanpinQry(1)\"></button>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">申请金额:</span>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"selectLoanApplyRegisInfoBean.applyAmt\" (blur)=\"money()\">\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">来源类型:</span>\r\n            <p-dropdown [options]=\"sourceTypeOptions\" [(ngModel)]=\"selectLoanApplyRegisInfoBean.sourceType\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">来源渠道:</span>\r\n            <p-dropdown [options]=\"sourceChanelOptions\" [(ngModel)]=\"selectLoanApplyRegisInfoBean.sourceChanel\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">经办日期:</span>\r\n            <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                [(ngModel)]=\"operateDateQuery\" [locale]=\"ch\" [disabled]=\"true\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">申请状态:</span>\r\n            <p-dropdown [options]=\"applyStatusOptions\" [(ngModel)]=\"selectLoanApplyRegisInfoBean.applyStatus\"></p-dropdown>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">流水号:</span>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"selectLoanApplyRegisInfoBean.seqNo\">\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">信贷流水号:</span>\r\n            <input type=\"text\" pInputText [(ngModel)]=\"selectLoanApplyRegisInfoBean.servSeqNo\">\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 searchBtn\">\r\n        <button pButton type=\"button\" label=\"查询\" (click)=\"query()\"></button>\r\n        <button pButton type=\"button\" label=\"重置\" (click)=\"chongzhi()\"></button>\r\n    </div>\r\n    <div style=\"float:right;padding-right:1em;\">\r\n        <span class=\"icoColor\" (click)=\"add()\">新增</span>\r\n    </div>\r\n    <div class=\"ui-g-12 base-table table\">\r\n        <p-dataTable [value]=\"loantable\" emptyMessage=\"没有查找到数据\">\r\n            <p-column header=\"流水号\" field=\"seqNo\"></p-column>\r\n            <p-column header=\"客户编号\" field=\"custNo\"></p-column>\r\n            <p-column header=\"客户名称\" field=\"custName\"></p-column>\r\n            <p-column header=\"申请产品\" field=\"bussTypeName\"></p-column>\r\n            <p-column header=\"申请金额\" field=\"applyAmt\"></p-column>\r\n            <p-column header=\"来源类型\" field=\"sourceType\"></p-column>\r\n            <p-column header=\"来源渠道\" field=\"sourceChanel\"></p-column>\r\n            <p-column header=\"经办日期\" field=\"operateDate\"></p-column>\r\n            <p-column header=\"申请状态\" field=\"applyStatus\"></p-column>\r\n            <p-column header=\"信贷流水号\" field=\"servSeqNo\"></p-column>\r\n            <p-column header=\"操作\">\r\n                <ng-template let-car=\"rowData\" let-i=\"rowIndex\" pTemplate=\"body\">\r\n                    <div class=\"table-button\">\r\n                        <span class=\"tabelDetailIco\" (click)=\"detail(car)\">详情</span>\r\n                        <span class=\"tabelUpdateIco\" (click)=\"update(car)\">修改</span>\r\n                        <span class=\"tabelDeleteIco\" (click)=\"delete(car)\">删除</span>\r\n                    </div>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n        <p-paginator [first]=\"first\" rows={{selectLoanApplyRegisInfoBean.pageSize}} totalRecords={{total}} [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<!-- 详情 -->\r\n<p-dialog [(visible)]=\"detailPage\" modal=\"modal\" width=\"1500\" [responsive]=\"true\" [positionTop]=10>\r\n    <p-header>\r\n        {{detailHeader}}\r\n    </p-header>\r\n    <div class=\"ui-g-11 ui-g-offset-1\">\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">客户编号:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.custNo}}</span>\r\n\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">客户名称:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.custName}}</span>\r\n\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">申请产品:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.bussTypeName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">主担保方式:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.guaranteeMode|codeValuePie:guaranteeModeOptions}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">起贷日期:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.startCridetDate}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">到期日期:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.endCridetDate}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">申请金额:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.applyAmt}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">来源类型:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.sourceType|codeValuePie:sourceTypeOptions}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">来源渠道:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.sourceChanel|codeValuePie:sourceChanelOptions}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">客户经理:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.managerIdName}}</span>\r\n\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">经办人:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.operateIdName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">经办日期:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.operateDate}}</span>\r\n\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">经办机构:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.operateOrgIdName}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">审批状态:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.applyStatus|codeValuePie:applyStatusOptions}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">流水号:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.seqNo}}</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">信贷流水号:</span>\r\n            <span class=\"ui-g-5\">{{dataMsg.servSeqNo}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\">\r\n        <button pButton label=\"关闭\" (click)=\"detailCancel()\"></button>\r\n    </div>\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog></p-confirmDialog>\r\n<p-dialog [(visible)]=\"treePage\" modal=\"modal\" width=\"1200\" [responsive]=\"true\" [positionTop]=10>\r\n    <loansTree (outValue)=\"getData($event)\"></loansTree>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchBtn {\n  text-align: center; }\n\n.btn, .table {\n  text-align: center; }\n\n.tit {\n  display: flex;\n  justify-content: space-around; }\n\n.tit span {\n    padding: 2px 5px;\n    width: 16%;\n    text-align: center; }\n\n.head {\n  background-color: #eeeeee;\n  margin-top: 20px; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2V4YW0tYXBwci1jb21wL2N1c3RvbS9sb2Fucy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxleGFtLWFwcHItY29tcFxcY3VzdG9tXFxsb2Fuc1xcbG9hbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxhQUFhO0VBQ2IsNkJBQTZCLEVBQUE7O0FBRmpDO0lBSVEsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0IsRUFBQTs7QUFHMUI7RUFDSSx5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0MscUJBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvZXhhbS1hcHByLWNvbXAvY3VzdG9tL2xvYW5zL2xvYW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaEJ0bntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYnRuLC50YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGl0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgc3BhbntcclxuICAgICAgICBwYWRkaW5nOiAycHggNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNiU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbi5oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBcclxufVxyXG4vL+ihqOagvOWtl+avjeaVsOWtl+iHquWKqOaNouihjFxyXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhe1xyXG5cdHdvcmQtd3JhcDpicmVhay13b3JkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.ts ***!
  \**************************************************************************/
/*! exports provided: LoansComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansComponent", function() { return LoansComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bean_selectLoanApplyRegisInfo_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/selectLoanApplyRegisInfo.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/bean/selectLoanApplyRegisInfo.bean.ts");
/* harmony import */ var _custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoansComponent = /** @class */ (function () {
    function LoansComponent(httpService, confirmationService, commfunc, fb, routeInfo, router, decimalPipe) {
        this.httpService = httpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.routeInfo = routeInfo;
        this.router = router;
        this.decimalPipe = decimalPipe;
        this.first = 0;
        this.date = new Date();
        this.treePage = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.msgs = [];
        this.detailPage = false;
        this.title = '贷款申请';
        this.danbaoOptions = [];
        this.explain = false; //说明
        this.XYTJ = false; //营销途径
        //详情页面数据
        this.dataMsg = {
            custNo: '',
            custName: '',
            bussType: '',
            guaranteeMode: '',
            startCridetDate: '',
            endCridetDate: '',
            applyAMT: '',
            sourceType: '',
            intrCustNo: '',
            intrUserName: '',
            intrGlobalId: '',
            intrMobileNo: '',
            discription: '',
            sourceChanel: '',
            managerId: '',
            operateId: '',
            operateDate: '',
            operateOrgIdName: '',
            applyStatus: '',
            seqNo: '',
            servSeqNo: ''
        };
        this.treeDate = [];
        this.selectLoanApplyRegisInfoBean = new _bean_selectLoanApplyRegisInfo_bean__WEBPACK_IMPORTED_MODULE_2__["SelectLoanApplyRegisInfoBean"]();
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        //报文头
        this.selectLoanApplyRegisInfoBean['taskCategoryId'] = this.routeInfo.snapshot.params.taskCategoryId;
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
        this.userform = fb.group({
            custNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            custName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            startCridetDate: [''],
            endCridetDate: [''],
            seqNo: [''],
            sourceChanel: [''],
            intrCustNo: [''],
            intrUserName: [''],
            intrGlobalId: [''],
            intrMobileNo: [''],
            discription: [''],
            marketType: [''],
            applyAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            guaranteeMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            managerId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            operateId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            operateOrgName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            operateDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            applyStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            sourceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            itemsAdd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.operateDateQuery = this.date;
    }
    LoansComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.bussTypeOptions = this.code['BussTypes'];
        this.guaranteeModeOptions = this.code['GuaranteeModes'];
        this.sourceTypeOptions = this.code['SourceType'];
        this.sourceChanelOptions = this.code['SourceChanel'];
        this.applyStatusOptions = this.code['ApplyStatus'];
        this.YingxiaoTJOptions = this.code['YingxiaoTJ'];
        this.dateEnd = moment__WEBPACK_IMPORTED_MODULE_8__().add(6, 'year').format('Y-MM-DD');
        this.selectLoanApplyRegisInfoBean.applyStatus = '0';
        this.selectLoanApplyRegisInfoBean.pageSize = 10;
        this.selectLoanApplyRegisInfoBean.pageNum = 1;
        this.loantable = [];
    };
    LoansComponent.prototype.chanpinQry = function (i) {
        this.num = i;
        this.treePage = true;
    };
    //翻页
    LoansComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.selectLoanApplyRegisInfoBean.pageSize = event.rows * 1;
        //当前页
        this.selectLoanApplyRegisInfoBean.pageNum = event.page + 1;
        this.first = event.page * this.selectLoanApplyRegisInfoBean.pageSize;
        this.query();
    };
    LoansComponent.prototype.queryFirst = function () {
        this.selectLoanApplyRegisInfoBean.pageSize = 10;
        this.selectLoanApplyRegisInfoBean.pageNum = 1;
        this.first = 0;
        this.query();
    };
    LoansComponent.prototype.query = function () {
        var _this = this;
        this.selectLoanApplyRegisInfoBean.bussType = this.paramshow;
        this.selectLoanApplyRegisInfoBean.operateDate = this.commfunc.transDateN(this.operateDateQuery); //查询经办日期
        this.httpService.selectLoanApplyRegisInfoList(this.selectLoanApplyRegisInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.loantable = data.applyRegisInfoList;
                _this.loantable.forEach(function (item) {
                    var temp = {
                        productId: item.bussType
                    };
                    _this.httpService.getAvailableProduct(temp).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            item.bussTypeName = data.availableProduct.productName;
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                        }
                    }, function (err) {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                    });
                    if (item.applyStatus == '0') {
                        item.applyStatus = '待发起';
                    }
                    else if (item.applyStatus == '1') {
                        item.applyStatus = '已发起';
                    }
                    else {
                        item.applyStatus = '';
                    }
                    if (item.sourceType == '01') {
                        item.sourceType = '客户介绍';
                    }
                    else if (item.sourceType == '02') {
                        item.sourceType = '手机短信';
                    }
                    else if (item.sourceType == '03') {
                        item.sourceType = '互联网';
                    }
                    else if (item.sourceType == '04') {
                        item.sourceType = '客户经理营销';
                    }
                    else if (item.sourceType == '05') {
                        item.sourceType = '其他';
                    }
                    else if (item.sourceType == '06') {
                        item.sourceType = '续贷';
                    }
                    else {
                        item.sourceType = '';
                    }
                    if (item.sourceChanel == '01') {
                        item.sourceChanel = '手工发起';
                    }
                    else if (item.sourceChanel == '02') {
                        item.sourceChanel = '自助渠道';
                    }
                    else if (item.sourceChanel == '03') {
                        item.sourceChanel = '贷款到期待处理转入';
                    }
                    else if (item.sourceChanel == '04') {
                        item.sourceChanel = '后台中心预授信';
                    }
                    else if (item.sourceChanel == '05') {
                        item.sourceChanel = '预授信任务';
                    }
                    else {
                        item.sourceChanel = '';
                    }
                });
                _this.total = data.totalNum;
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
    LoansComponent.prototype.chongzhi = function () {
        this.items = '';
        this.paramshow = '';
        this.selectLoanApplyRegisInfoBean.applyAmt = '';
        this.selectLoanApplyRegisInfoBean.custNo = '';
        this.selectLoanApplyRegisInfoBean.custName = '';
        this.operateDateQuery = '';
        this.selectLoanApplyRegisInfoBean.operateDate = '';
        this.selectLoanApplyRegisInfoBean.seqNo = '';
        this.selectLoanApplyRegisInfoBean.sourceChanel = '';
        this.selectLoanApplyRegisInfoBean.sourceType = '';
    };
    //新增
    LoansComponent.prototype.add = function () {
        this.router.navigate(["pages/tzb/workflow/custom-workflow/addloan"]);
    };
    //详情
    LoansComponent.prototype.detail = function (item) {
        var _this = this;
        this.detailPage = true;
        this.detailHeader = '贷款申请详情';
        var param = { "seqNo": item.seqNo };
        this.httpService.selectLoanApplyRegisInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.dataMsg = data;
                _this.dataMsg.forEach(function (item) {
                    var temp = {
                        productId: item.bussType
                    };
                    _this.httpService.getAvailableProduct(temp).subscribe(function (data) {
                        if (data.returnCode.code == 'success') {
                            item.bussTypeName = data.availableProduct.productName;
                        }
                        else {
                            _this.msgs = [];
                            _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                        }
                    }, function (err) {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                    });
                });
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (err) {
            _this.msgs = [];
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
        });
    };
    //删除
    LoansComponent.prototype.delete = function (item) {
        var _this = this;
        this.confirmationService.confirm({
            message: '是否确认删除?',
            header: '删除',
            icon: 'fa fa-trash',
            accept: function () {
                var parm = { "seqNo": item.seqNo };
                _this.httpService.deleteLoanApplyRegisInfo(parm).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'info', summary: '确认删除', detail: '删除成功' }];
                        _this.query();
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '确认删除', detail: data.returnCode.message }];
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                });
            },
            reject: function () {
                _this.msgs = [{ severity: 'info', summary: '取消删除', detail: '删除已取消' }];
            }
        });
    };
    //修改
    LoansComponent.prototype.update = function (item) {
        this.router.navigate(["pages/tzb/workflow/custom-workflow/updateloan", item]);
    };
    LoansComponent.prototype.detailCancel = function () {
        this.detailPage = false;
    };
    LoansComponent.prototype.money = function () {
        this.applyAmt = this.decimalPipe.transform(this.selectLoanApplyRegisInfoBean.applyAmt, '1.2-2');
        console.log(this.decimalPipe.transform(this.selectLoanApplyRegisInfoBean.applyAmt, '1.2-2'), this.decimalPipe.transform(123444, '1.2-2'));
        if (!this.listMoney) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请先选择产品' }];
        }
        else {
            if (parseInt(this.selectLoanApplyRegisInfoBean.applyAmt) < this.listMoney[0].min * 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不能小于' + this.listMoney[0].min }];
            }
            else if (parseInt(this.selectLoanApplyRegisInfoBean.applyAmt) > this.listMoney[0].max * 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不能大于' + this.listMoney[0].max }];
            }
        }
        this.method();
    };
    LoansComponent.prototype.method = function () {
        console.log(this.applyAmt);
        this.selectLoanApplyRegisInfoBean.applyAmt = this.applyAmt;
    };
    LoansComponent.prototype.getData = function (event) {
        this.treePage = false;
        this.parentValue = event;
        this.items = this.parentValue[0]['productName'];
        this.paramshow = this.parentValue[0]['productId'];
        var arrDanbao = this.parentValue[3];
        this.danbaoOptions = [];
        this.danbaoOptions.push({ label: '请选择', value: '' });
        for (var _i = 0, arrDanbao_1 = arrDanbao; _i < arrDanbao_1.length; _i++) {
            var item = arrDanbao_1[_i];
            this.danbaoOptions.push({ label: item['productFeatureName'], value: item['productFeatureId'] });
        }
        this.listMoney = this.parentValue[1];
        var listTime = this.parentValue[2];
        if (this.selectLoanApplyRegisInfoBean.applyAmt) {
            this.money();
        }
    };
    //码值
    LoansComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    LoansComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loans',
            template: __webpack_require__(/*! ./loans.component.html */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.html"),
            styles: [__webpack_require__(/*! ./loans.component.scss */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loans.component.scss")],
            providers: [_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]]
        }),
        __metadata("design:paramtypes", [_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_3__["CusOperationHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]])
    ], LoansComponent);
    return LoansComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loansTree/loansTree.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/loansTree/loansTree.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <header-title [Info]=\"head_title\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 ui-md-12\">\r\n        <div class=\"ui-g\">\r\n            <div class=\"ui-g-12 ui-md-2\">\r\n                <p-tree [value]=\"left_tree\" selectionMode=\"multiple\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExpend($event)\"></p-tree>\r\n            </div>\r\n            <div class=\"ui-g-12 ui-md-10\">\r\n                <div class=\"ui-g-12 ui-md-12 base-table\">\r\n                    <p-dataTable [value]=\"cars_2\" [emptyMessage]='tabMesg' [style]=\"{'text-align':'center'}\">\r\n                        <p-column header=\"选择\">\r\n                            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-col=\"rowData\">\r\n                                <p-radioButton name=\"group1\" (onClick)=\"cusCreate(col)\" inputId=\"ny\"></p-radioButton>\r\n                            </ng-template>\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"productId\" header=\"产品编号\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"productName\" header=\"产品名称\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" field=\"productLineName\" header=\"产品描述\">\r\n                        </p-column>\r\n                        <p-column [style]=\"{'text-align':'center'}\" header=\"详细信息\">\r\n                            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\" let-item=\"rowData\">\r\n                                <span (click)=\"basicDetails(item)\" class=\"tabelDetailIco\">详细信息</span>\r\n                            </ng-template>\r\n                        </p-column>\r\n                    </p-dataTable>\r\n                    <p-paginator rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginate($event)\"></p-paginator>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 btn\">\r\n            <button pButton type=\"button\" label=\"确认提交\" (click)=\"addBtnCom()\"></button>\r\n            <button pButton type=\"button\" label=\"返回\" (click)=\"comeback()\" ></button>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!-- 模态框 -->\r\n<p-dialog *ngIf=\"display\" appendTo=\"body\" modal=\"modal\" [(visible)]=\"display\" width=\"950\" [responsive]=\"true\" [positionTop]=10\r\n    class=\"detail\">\r\n    <p-header>\r\n        {{headerTitle}}\r\n    </p-header>\r\n    <div>\r\n        <app-available-view-details *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"detailsCall($event)\"></app-available-view-details>\r\n        <!-- <product-line-add *ngIf=\"showModel=='1'\" (outValue)=\"addCall($event)\"></product-line-add> -->\r\n    </div>\r\n</p-dialog>\r\n\r\n<!-- 提示信息 -->\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loansTree/loansTree.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/loansTree/loansTree.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .text_right label {\n    font-weight: bold; }\n\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n\n.btn {\n  text-align: center; }\n\n:host /deep/ .ui-tree .ui-treenode.ui-treenode-leaf > .ui-treenode-content > .ui-tree-toggler {\n  visibility: initial; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2V4YW0tYXBwci1jb21wL2N1c3RvbS9sb2Fucy9sb2Fuc1RyZWUvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcZXhhbS1hcHByLWNvbXBcXGN1c3RvbVxcbG9hbnNcXGxvYW5zVHJlZVxcbG9hbnNUcmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0lBT1ksaUJBQWlCLEVBQUE7O0FBSzdCO0VBQ0MscUJBQW9CLEVBQUE7O0FBRXJCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvZXhhbS1hcHByLWNvbXAvY3VzdG9tL2xvYW5zL2xvYW5zVHJlZS9sb2Fuc1RyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgLnRleHRfY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0X3JpZ2h0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy/ooajmoLzlrZfmr43mlbDlrZfoh6rliqjmjaLooYxcclxuOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuXHR3b3JkLXdyYXA6YnJlYWstd29yZDtcclxufVxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IC9kZWVwLyAudWktdHJlZSAudWktdHJlZW5vZGUudWktdHJlZW5vZGUtbGVhZj4udWktdHJlZW5vZGUtY29udGVudD4udWktdHJlZS10b2dnbGVyIHtcclxuICAgIHZpc2liaWxpdHk6IGluaXRpYWw7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loansTree/loansTree.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/loansTree/loansTree.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LoansTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoansTreeComponent", function() { return LoansTreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_pages_tzb_order_http_deal_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/pages/tzb/order/http/deal.http.service */ "./src/app/pages/tzb/order/http/deal.http.service.ts");
/* harmony import */ var _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../product-manage/http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
/* harmony import */ var _product_manage_product_summary_product_directory_bean_product_directory_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../product-manage/product-summary/product-directory/bean/product-directory.bean */ "./src/app/pages/tzb/product-manage/product-summary/product-directory/bean/product-directory.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoansTreeComponent = /** @class */ (function () {
    function LoansTreeComponent(productPlatformHttpService, commfunc, router, route, dealHttpService) {
        this.productPlatformHttpService = productPlatformHttpService;
        this.commfunc = commfunc;
        this.router = router;
        this.route = route;
        this.dealHttpService = dealHttpService;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedAll = [];
        this.checkAll = false;
        this.checkBox = [];
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //列表无数据
        //每页多少条
        this.pageSize = 10;
        //每页多少条
        this.pageNum = 1;
        this.head_title = '业务目录详情';
        //提示信息
        this.msgs = [];
        //组件的参数
        this.updateValue = [];
        //列表
        this.cars_2 = [];
        this.left_tree = [];
        this.left_tree_arr = [];
        this.hierarchy_arr = [];
        this.any = [];
        this.first_meu_obj = {}; //根目录id 组 左侧
        this.first_meu_left = ''; //左侧根目录值
        this.display = false;
        this.ctlgIdV = '';
        this.treeDate = [];
        this.treeDate2 = [];
        this.businessDirectoryBean = new _product_manage_product_summary_product_directory_bean_product_directory_bean__WEBPACK_IMPORTED_MODULE_6__["ProductDirectoryBean"]();
    }
    LoansTreeComponent.prototype.ngOnInit = function () {
        var a = this.router.params;
        this.queryCatalog();
        // this.query_line();
    };
    //调用公共参数项服务查询业务目录编码
    LoansTreeComponent.prototype.queryCatalog = function () {
        var _this = this;
        var param = { paramGroupId: "COP", paramName: "ctlgIdValue" };
        this.dealHttpService.queryCommonParamItemService(param).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                console.log(data);
                // this.first_id = data.returnCommonParamItemList[0].paramItemName;
                for (var _i = 0, _a = data.returnCommonParamItemList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.paramItemValue == '贷款指标') {
                        _this.second_id = item.paramItemName;
                    }
                    else if (item.paramItemValue == '贷款产品目录参数') {
                        _this.first_id = item.paramItemName;
                    }
                }
                _this.ctlgIdValue = _this.first_id;
                _this.query_line();
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    LoansTreeComponent.prototype.query_line = function () {
        var _this = this;
        var this_ = this;
        var parm = { ctlgId: this.ctlgIdValue, categoryNum: this.second_id, pageSize: 10000 };
        this.productPlatformHttpService.ctlgMenuQuery(parm).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.all_tree = data.customerMenuList;
                _this.left_tree_arr = data.customerMenuList;
                _this.left_tree = _this.hierarchyTree(data.customerMenuList, '');
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    LoansTreeComponent.prototype.nodeCheck = function (event) {
        this.hierarchy_arr = this.getMeuInfo(this.left_tree_arr, event.node.value[0]);
        if (event.node.parent != undefined) {
            this.ctlgIdV = event.node.value[0];
            this.maxIdLevelV = this.hierarchy_arr[1];
            this.ctlgIdLevelV = this.hierarchy_arr[0] - 1;
            this.productQuery();
        }
    };
    //+号点击
    LoansTreeComponent.prototype.nodeExpend = function (event) {
        var this_ = this;
        var parames = {
            ctlgId: this.ctlgIdValue,
            categoryNum: '001',
        };
        var delData = function (data) {
            event.node.children = this_.hierarchyTree(data.customerMenuList, event.node.value[0]);
        };
        if (event.node.value[1] === 1) {
            this.interfaceComFnc(this.productPlatformHttpService.ctlgMenuQuery(parames), delData);
        }
        else {
            this.interfaceComFnc(this.productPlatformHttpService.ctlgMenuQuery(parames), delData);
        }
    };
    LoansTreeComponent.prototype.interfaceComFnc = function (service_method, success_fnc) {
        var _this = this;
        service_method.subscribe(function (data) {
            if (data.returnCode != null && data.returnCode.code == "success") {
                if (success_fnc !== null) {
                    success_fnc(data);
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.errorMessage });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //层级树
    LoansTreeComponent.prototype.hierarchyTree = function (menu_list, pid) {
        var menu_arr = [];
        for (var _i = 0, menu_list_1 = menu_list; _i < menu_list_1.length; _i++) {
            var key = menu_list_1[_i];
            if (key.pid === pid) {
                menu_arr.push({
                    children: [{}],
                    label: key.name,
                    value: [key.id, key.pid]
                });
            }
        }
        return menu_arr;
    };
    LoansTreeComponent.prototype.getMeuInfo = function (tree, curren_pid) {
        var count = 1;
        var getFirstId = function (tree) {
            var id = '';
            tree.every(function (item) {
                item.pid == '' ? id = item.id : null;
            });
            return id;
        };
        //末级菜单id
        var getLastId = function (tree) {
            var id_arr = [];
            tree.forEach(function (item) {
                var stu = tree.every(function (item2) {
                    if (item.id != item2.pid) {
                        return true;
                    }
                }) ? id_arr.push(item.id) : null;
            });
            return id_arr;
        };
        //最大层级深度 
        var getMaxHierarchy = function (tree, first_id, last_arr) {
            var arr = [];
            last_arr.forEach(function (item) {
                count = 1;
                var max = currentHierarchy(tree, first_id, item);
                arr.push(max);
            });
            return arr.sort()[arr.length - 1];
        };
        //当前层级深度
        //记录层级次数
        function currentHierarchy(tree, first_id, pid) {
            if (pid != first_id) {
                tree.some(function (item) {
                    if (item.id === pid) {
                        count++;
                        currentHierarchy(tree, first_id, item.pid);
                        return false;
                    }
                });
            }
            return count;
        }
        var first_id = getFirstId(tree); //一级菜单id
        var last_arr = getLastId(tree); //末级菜单 id组
        var current_hierarchy = currentHierarchy(tree, first_id, curren_pid); //当前层级
        var max_hierarchy = getMaxHierarchy(tree, first_id, last_arr); //最大层级 
        return [current_hierarchy, max_hierarchy];
    };
    //分页
    LoansTreeComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows * 1;
        //当前页
        this.pageNum = event.page + 1;
        //调用查询的方法
        this.productQuery();
    };
    LoansTreeComponent.prototype.productQuery = function () {
        var _this = this;
        var parames = {
            pageSize: this.pageSize,
            pageNum: this.pageNum,
            ctlgId: this.ctlgIdV,
            maxIdLevel: this.maxIdLevelV,
            ctlgIdLevel: this.ctlgIdLevelV
        };
        var this_ = this;
        var delData = function (data) {
            _this.total = data.total;
            _this.cars_2 = data.customerListtemp;
            _this.ctlgId = data.departmentList.departmentList[0].basicMessage.catalogOrCategoryId;
            _this.ctlgName = data.departmentList.departmentList[0].basicMessage.ctlgOrCategoryName;
            _this.ctlgDsc = data.departmentList.departmentList[0].basicMessage.ctlgOrCategoryDec;
        };
        this.interfaceComFnc(this.productPlatformHttpService.ctlgManageContactAttrInfo(parames), delData);
    };
    LoansTreeComponent.prototype.cusCreate = function (item) {
        var _this = this;
        var param = {
            productId: item.productId
        };
        this.productPlatformHttpService.getAvailableProduct(param).subscribe(function (data) {
            if (data.productFeatureList && data.productFeatureList.length <= 1) {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: '请选择贷款类产品' });
                return;
            }
            _this.selectedAll = [];
            var param = {
                productName: data.availableProduct.productName,
                productId: data.availableProduct.productId
            };
            var arrMoney = [];
            var timearr = [];
            var listDanbao = [];
            for (var _i = 0, _a = data.productFeatureList; _i < _a.length; _i++) {
                var item_1 = _a[_i];
                if (item_1.productFeatureCategoryId == "PC00000003") {
                    arrMoney = item_1.productFeatureTypeList[1].productFeatureList;
                    timearr = item_1.productFeatureTypeList[3].productFeatureList;
                }
                else if (item_1.productFeatureCategoryId == "PC00000005") {
                    listDanbao = item_1.productFeatureTypeList[0].productFeatureList;
                }
            }
            _this.selectedAll.push(param, arrMoney, timearr, listDanbao);
        });
    };
    //确定按钮事件
    LoansTreeComponent.prototype.addBtnCom = function () {
        this.outValue.emit(this.selectedAll);
    };
    //返回
    LoansTreeComponent.prototype.comeback = function () {
        this.outValue.emit(this.selectedAll);
    };
    // 详情
    LoansTreeComponent.prototype.basicDetails = function (item) {
        this.display = true;
        this.headerTitle = '可售产品详情';
        this.showModel = '1';
        this.updateValue = item.productId;
    };
    LoansTreeComponent.prototype.detailsCall = function (param) {
        this.display = param;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LoansTreeComponent.prototype, "outValue", void 0);
    LoansTreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'loansTree',
            template: __webpack_require__(/*! ./loansTree.component.html */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loansTree/loansTree.component.html"),
            styles: [__webpack_require__(/*! ./loansTree.component.scss */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/loansTree/loansTree.component.scss")],
            providers: [_product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_5__["ProductManageHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], app_pages_tzb_order_http_deal_http_service__WEBPACK_IMPORTED_MODULE_4__["DealHttpService"]]
        }),
        __metadata("design:paramtypes", [_product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_5__["ProductManageHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            app_pages_tzb_order_http_deal_http_service__WEBPACK_IMPORTED_MODULE_4__["DealHttpService"]])
    ], LoansTreeComponent);
    return LoansTreeComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/bean/updateLoanApplyRegisInfo.bean.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/bean/updateLoanApplyRegisInfo.bean.ts ***!
  \********************************************************************************************************/
/*! exports provided: UpdateLoanApplyRegisInfoBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLoanApplyRegisInfoBean", function() { return UpdateLoanApplyRegisInfoBean; });
var UpdateLoanApplyRegisInfoBean = /** @class */ (function () {
    function UpdateLoanApplyRegisInfoBean() {
    }
    return UpdateLoanApplyRegisInfoBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'贷款申请修改'\"></header-title>\r\n</div>\r\n<div class=\"ui-g-11 ui-g-offset-1\">\r\n    <form [formGroup]=\"updatefrom\">\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>客户编号:</span>\r\n            <input type=\"text\" disabled pInputText formControlName=\"custNo\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.custNo\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['custNo'].valid&&updatefrom.controls['custNo'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>客户名称:</span>\r\n            <input type=\"text\" disabled pInputText formControlName=\"custName\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.custName\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['custName'].valid&&updatefrom.controls['custName'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>申请产品:</span>\r\n            <input type=\"text\" pInputText formControlName=\"itemsUpdate\" disabled placeholder=\"请选择产品\" [(ngModel)]=\"itemsUpdate\">\r\n            <button pButton type=\"button\" label=\"选择\" (click)=\"updatechanpin()\"></button>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['itemsUpdate'].valid&&updatefrom.controls['itemsUpdate'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>主担保方式:</span>\r\n            <p-dropdown [options]=\"danbaoOptions\" formControlName=\"guaranteeMode\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.guaranteeMode\">\r\n            </p-dropdown>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['guaranteeMode'].valid&&updatefrom.controls['guaranteeMode'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">起贷日期:</span>\r\n            <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                formControlName=\"startCridetDateUpdate\" [(ngModel)]=\"startCridetDateUpdate\" [locale]=\"ch\" (onSelect)=\"showData()\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">到期日期:</span>\r\n            <p-calendar [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" dateFormat=\"yy-mm-dd\"\r\n                formControlName=\"endCridetDateUpdate\" [(ngModel)]=\"endCridetDateUpdate\" [locale]=\"ch\" (onSelect)=\"showDataEnd()\"></p-calendar>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>申请金额:</span>\r\n            <input type=\"text\" pInputText formControlName=\"applyAmt\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.applyAmt\" (blur)=\"money()\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['applyAmt'].valid&&updatefrom.controls['applyAmt'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>来源类型:</span>\r\n            <p-dropdown [options]=\"sourceTypeOptions\" formControlName=\"sourceType\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.sourceType\" (onChange)=\"updatechoose1()\">\r\n            </p-dropdown>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['sourceType'].valid&&updatefrom.controls['sourceType'].dirty\">必输项!</span>\r\n        </div>\r\n        <div *ngIf=\"introduceshow\">\r\n            <div class=\"ui-g-6\">\r\n                <span class=\"ui-g-2\" appValidation>介绍人客户号:</span>\r\n                <input type=\"text\" pInputText formControlName=\"intrCustNo\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.intrCustNo\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['intrCustNo'].valid&&updatefrom.controls['intrCustNo'].dirty\">必输项!</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span class=\"ui-g-2\" appValidation>介绍人名称:</span>\r\n                <input type=\"text\" pInputText formControlName=\"intrUserName\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.intrUserName\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['intrUserName'].valid&&updatefrom.controls['intrUserName'].dirty\">必输项!</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span class=\"ui-g-2\" appValidation>介绍人身份证:</span>\r\n                <input type=\"text\" pInputText formControlName=\"intrGlobalId\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.intrGlobalId\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['intrGlobalId'].valid&&updatefrom.controls['intrGlobalId'].dirty\">必输项!</span>\r\n            </div>\r\n            <div class=\"ui-g-6\">\r\n                <span class=\"ui-g-2\" appValidation>介绍人手机号:</span>\r\n                <input type=\"text\" pInputText formControlName=\"intrMobileNo\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.intrMobileNo\">\r\n                <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['intrMobileNo'].valid&&updatefrom.controls['intrMobileNo'].dirty\">必输项!</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>来源渠道:</span>\r\n            <p-dropdown [options]=\"sourceChanelOptions\" [disabled]=\"true\" formControlName=\"sourceChanel\" disabled=\"true\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.sourceChanel\"></p-dropdown>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['sourceChanel'].valid&&updatefrom.controls['sourceChanel'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>客户经理:</span>\r\n            <input type=\"text\" disabled pInputText formControlName=\"managerName\" [(ngModel)]=\"managerName\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['managerName'].valid&&updatefrom.controls['managerName'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\" *ngIf=\"explainUpdate\">\r\n            <span class=\"ui-g-2\" appValidation>说明:</span>\r\n            <input type=\"text\" pInputText formControlName=\"discription\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.discription\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['discription'].valid&&updatefrom.controls['discription'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\" *ngIf=\"XYTJUpdate\">\r\n            <span class=\"ui-g-2\" appValidation>营销途径::</span>\r\n            <p-dropdown [options]=\"YingxiaoTJOptions\" formControlName=\"marketType\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.marketType\"></p-dropdown>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['marketType'].valid&&updatefrom.controls['marketType'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>经办人:</span>\r\n            <input type=\"text\" disabled pInputText formControlName=\"operateName\" [(ngModel)]=\"operateName\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['operateName'].valid&&updatefrom.controls['operateName'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>经办日期:</span>\r\n            <p-calendar [disabled]=\"true\" [showIcon]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1917:2117\" formControlName=\"operateDateUpdate\"\r\n                [(ngModel)]=\"operateDateUpdate\" [locale]=\"ch\" (onSelect)=\"showData()\"></p-calendar>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['operateDateUpdate'].valid&&updatefrom.controls['operateDateUpdate'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>经办机构:</span>\r\n            <input type=\"text\" disabled pInputText formControlName=\"operateOrgIdName\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.operateOrgIdName\">\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['operateOrgIdName'].valid&&updatefrom.controls['operateOrgIdName'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\" appValidation>申请状态:</span>\r\n            <p-dropdown [options]=\"applyStatusOptions\" formControlName=\"applyStatus\" [disabled]=\"true\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.applyStatus\"></p-dropdown>\r\n            <span class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!updatefrom.controls['applyStatus'].valid&&updatefrom.controls['applyStatus'].dirty\">必输项!</span>\r\n        </div>\r\n        <div class=\"ui-g-6\">\r\n            <span class=\"ui-g-2\">流水号:</span>\r\n            <input type=\"text\" disabled pInputText formControlName=\"seqNo\" [(ngModel)]=\"updateLoanApplyRegisInfoBean.seqNo\">\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class=\"ui-g-12 btn\">\r\n    <button pButton label=\"保存\" (click)=\"updateSave()\"></button>\r\n    <button pButton label=\"提交\" (click)=\"updateSubmit()\"></button>\r\n    <button pButton type=\"button\" label=\"重置\" (click)=\"updatechongzhi()\"></button>\r\n    <button pButton label=\"返回\" (click)=\"updateCancel()\"></button>\r\n</div>\r\n<p-dialog [(visible)]=\"treePage\" modal=\"modal\" width=\"1200\" [responsive]=\"true\" [positionTop]=10>\r\n    <loansTree (outValue)=\"getData($event)\"></loansTree>\r\n    <!-- <p-tree [value]=\"treeDate\" selectionMode=\"single\" [(selection)]=\"selectedFiles\" (onNodeSelect)=\"nodeCheck($event)\" (onNodeExpand)=\"nodeExand($event)\"></p-tree> -->\r\n</p-dialog>\r\n<p-growl [value]=\"msgs\"></p-growl>\r\n<p-confirmDialog></p-confirmDialog>"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2V4YW0tYXBwci1jb21wL2N1c3RvbS9sb2Fucy91cGRhdGVsb2FuL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGV4YW0tYXBwci1jb21wXFxjdXN0b21cXGxvYW5zXFx1cGRhdGVsb2FuXFx1cGRhdGVsb2FuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvZXhhbS1hcHByLWNvbXAvY3VzdG9tL2xvYW5zL3VwZGF0ZWxvYW4vdXBkYXRlbG9hbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.ts ***!
  \******************************************************************************************/
/*! exports provided: UpdateLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateLoanComponent", function() { return UpdateLoanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../custom/http/custom-operation/custom-operation.http.service */ "./src/app/pages/tzb/custom/http/custom-operation/custom-operation.http.service.ts");
/* harmony import */ var _bean_updateLoanApplyRegisInfo_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bean/updateLoanApplyRegisInfo.bean */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/bean/updateLoanApplyRegisInfo.bean.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var UpdateLoanComponent = /** @class */ (function () {
    function UpdateLoanComponent(httpService, commfunc, fb, routeInfo, router, decimalPipe) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.routeInfo = routeInfo;
        this.router = router;
        this.decimalPipe = decimalPipe;
        this.danbaoOptions = [];
        this.treePage = false;
        this.treeDate = [];
        this.msgs = [];
        this.introduceshow = true; //介绍人
        this.explainUpdate = false;
        this.XYTJUpdate = false;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_4__["CALENDAR_CN"];
        this.date = new Date();
        this.orgId = '';
        this.userId = '';
        this.userName = '';
        this.orgName = '';
        this.updateLoanApplyRegisInfoBean = new _bean_updateLoanApplyRegisInfo_bean__WEBPACK_IMPORTED_MODULE_2__["UpdateLoanApplyRegisInfoBean"]();
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
        this.updatefrom = fb.group({
            custNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            custName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            startCridetDateUpdate: [''],
            endCridetDateUpdate: [''],
            seqNo: [''],
            sourceChanel: [''],
            intrCustNo: [''],
            intrUserName: [''],
            intrGlobalId: [''],
            intrMobileNo: [''],
            discription: [''],
            marketType: [''],
            applyAmt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            guaranteeMode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            managerName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            operateName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            operateOrgIdName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            operateDateUpdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            applyStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            sourceType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            itemsUpdate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
        });
        this.operateDateUpdate = this.date;
    }
    UpdateLoanComponent.prototype.ngOnInit = function () {
        this.codeValues();
        this.guaranteeMode = this.code['GuaranteeModes'];
        this.sourceTypeOptions = this.code['SourceType'];
        this.sourceChanelOptions = this.code['SourceChanel'];
        this.applyStatusOptions = this.code['ApplyStatus'];
        this.YingxiaoTJOptions = this.code['YingxiaoTJ'];
        this.temp = this.routeInfo.snapshot.params;
        this.updatechongzhi();
    };
    UpdateLoanComponent.prototype.updatechanpin = function () {
        this.treePage = true;
    };
    UpdateLoanComponent.prototype.money = function () {
        this.applyAmt = this.decimalPipe.transform(this.updateLoanApplyRegisInfoBean.applyAmt, '1.2-2');
        if (!this.listMoney) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请先选择产品' }];
        }
        else {
            if (parseInt(this.updateLoanApplyRegisInfoBean.applyAmt) < this.listMoney[0].min * 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不能小于' + this.listMoney[0].min }];
            }
            else if (parseInt(this.updateLoanApplyRegisInfoBean.applyAmt) > this.listMoney[0].max * 1) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '不能大于' + this.listMoney[0].max }];
            }
        }
    };
    UpdateLoanComponent.prototype.method = function () {
        console.log(this.applyAmt);
        this.updateLoanApplyRegisInfoBean.applyAmt = this.applyAmt;
    };
    UpdateLoanComponent.prototype.transDate = function (value) {
        if (!value) {
            return '';
        }
        var time = new Date(value);
        var year = value.getFullYear();
        var month = value.getMonth() + 1 + '';
        var data = value.getDate() + '';
        if (month.length < 2) {
            month = '0' + month;
        }
        if (data.length < 2) {
            data = "0" + data;
        }
        var newtime = year + month + data;
        return newtime;
    };
    UpdateLoanComponent.prototype.showData = function () {
        if (this.transDate(this.operateDateUpdate) < this.transDate(this.date)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '不可早于当前日期' }];
            this.operateDateUpdate = '';
            return;
        }
    };
    UpdateLoanComponent.prototype.showDataEnd = function () {
        var maxtime = this.listTime[0].max * 1;
        var mintime = this.listTime[0].min * 1;
        var endmintime = moment__WEBPACK_IMPORTED_MODULE_8__().add(mintime / 12, 'year').format('Y-MM-DD');
        var endmaxtime = moment__WEBPACK_IMPORTED_MODULE_8__().add(maxtime / 12, 'year').format('Y-MM-DD');
        if (this.transDate(this.endCridetDateUpdate) < this.transDate(this.startCridetDateUpdate)) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '必须大于起贷日期' }];
            this.endCridetDateUpdate = '';
            return;
        }
        else if (this.transDate(this.endCridetDateUpdate) > endmaxtime) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '不能大于' + endmaxtime }];
            this.endCridetDateUpdate = '';
            return;
        }
        else if (this.transDate(this.endCridetDateUpdate) < endmintime) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '不能小于' + endmintime }];
            this.endCridetDateUpdate = '';
            return;
        }
    };
    UpdateLoanComponent.prototype.updatechoose1 = function () {
        if (this.updateLoanApplyRegisInfoBean.sourceType == '01') {
            this.introduceshow = true;
            this.XYTJUpdate = false;
            this.explainUpdate = false;
        }
        else if (this.updateLoanApplyRegisInfoBean.sourceType == '04') {
            this.XYTJUpdate = true;
            this.introduceshow = false;
            this.explainUpdate = false;
        }
        else if (this.updateLoanApplyRegisInfoBean.sourceType == '05') {
            this.explainUpdate = true;
            this.introduceshow = false;
            this.XYTJUpdate = false;
        }
        else {
            this.explainUpdate = false;
            this.introduceshow = false;
            this.XYTJUpdate = false;
        }
    };
    //修改保存
    UpdateLoanComponent.prototype.updateSave = function () {
        var _this = this;
        //校验的
        for (var i in this.updatefrom.controls) {
            this.updatefrom.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.updatefrom.controls) {
            if (!this.updatefrom.controls[i].valid) {
                return;
            }
        }
        this.updateLoanApplyRegisInfoBean.bussType = this.paramUpdate;
        this.updateLoanApplyRegisInfoBean.startCridetDate = this.commfunc.transDate(this.startCridetDateUpdate); //修改起贷日期
        this.updateLoanApplyRegisInfoBean.endCridetDate = this.commfunc.transDate(this.endCridetDateUpdate); //修改到期日期
        this.updateLoanApplyRegisInfoBean.operateDate = this.commfunc.transDate(this.operateDateUpdate); //修改经办日期
        this.httpService.saveLoanApplyRegisInfo(this.updateLoanApplyRegisInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '修改成功' });
                _this.router.navigate(["pages/tzb/workflow/custom-workflow/loans"]);
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
    UpdateLoanComponent.prototype.updateSubmit = function () {
        var _this = this;
        //校验的
        for (var i in this.updatefrom.controls) {
            this.updatefrom.controls[i].markAsDirty();
        }
        //处理是否提交
        for (var i in this.updatefrom.controls) {
            if (!this.updatefrom.controls[i].valid) {
                return;
            }
        }
        this.updateLoanApplyRegisInfoBean.bussType = this.paramUpdate;
        this.updateLoanApplyRegisInfoBean.startCridetDate = this.commfunc.transDate(this.startCridetDateUpdate); //修改起贷日期
        this.updateLoanApplyRegisInfoBean.endCridetDate = this.commfunc.transDate(this.endCridetDateUpdate); //修改到期日期
        this.updateLoanApplyRegisInfoBean.operateDate = this.commfunc.transDate(this.operateDateUpdate); //修改经办日期
        this.httpService.commitLoanApplyRegisInfo(this.updateLoanApplyRegisInfoBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '提交成功' });
                _this.router.navigate(["pages/tzb/workflow/custom-workflow/loans"]);
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
    UpdateLoanComponent.prototype.updateCancel = function () {
        this.router.navigate(["pages/tzb/workflow/custom-workflow/loans"]);
    };
    UpdateLoanComponent.prototype.updatechongzhi = function () {
        var _this = this;
        var param = { "seqNo": this.temp.seqNo };
        this.httpService.selectLoanApplyRegisInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.startCridetDate) {
                    _this.startCridetDateUpdate = new Date(data.startCridetDate);
                }
                else {
                    _this.startCridetDateUpdate = '';
                }
                if (data.endCridetDate) {
                    _this.endCridetDateUpdate = new Date(data.endCridetDate);
                }
                else {
                    _this.endCridetDateUpdate = '';
                }
                if (data.operateDate) {
                    _this.operateDateUpdate = new Date(data.operateDate);
                }
                else {
                    _this.operateDateUpdate = '';
                }
                _this.updateLoanApplyRegisInfoBean = data;
                _this.operateOrgIdName = data.operateOrgIdName;
                _this.updateLoanApplyRegisInfoBean.operateOrgId = data.operateOrgId;
                _this.updateLoanApplyRegisInfoBean.managerId = data.managerId;
                _this.managerName = data.managerIdName;
                _this.operateName = data.operateIdName;
                _this.updateLoanApplyRegisInfoBean.operateId = data.operateId;
                _this.paramUpdate = data.bussType;
                var temp = {
                    productId: data.bussType
                };
                _this.httpService.getAvailableProduct(temp).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        _this.itemsUpdate = data.availableProduct.productName;
                    }
                    else {
                        _this.msgs = [];
                        _this.msgs.push({ severity: 'error', summary: 'Error Message', detail: data.returnCode.message });
                    }
                }, function (err) {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用失败！' }];
                });
                _this.updatechoose1();
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
    UpdateLoanComponent.prototype.getData = function (event) {
        this.treePage = false;
        this.parentValue = event;
        this.itemsUpdate = this.parentValue[0]['productName'];
        this.paramUpdate = this.parentValue[0]['productId'];
        var arrDanbao = this.parentValue[3];
        this.danbaoOptions = [];
        this.danbaoOptions.push({ label: '请选择', value: '' });
        for (var _i = 0, arrDanbao_1 = arrDanbao; _i < arrDanbao_1.length; _i++) {
            var item = arrDanbao_1[_i];
            this.danbaoOptions.push({ label: item['productFeatureName'], value: item['productFeatureId'] });
        }
        this.listMoney = this.parentValue[1];
        this.listTime = this.parentValue[2];
    };
    //码值
    UpdateLoanComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    UpdateLoanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'updateloan',
            template: __webpack_require__(/*! ./updateloan.component.html */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.html"),
            styles: [__webpack_require__(/*! ./updateloan.component.scss */ "./src/app/pages/tzb/exam-appr-comp/custom/loans/updateloan/updateloan.component.scss")],
            providers: [_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]]
        }),
        __metadata("design:paramtypes", [_custom_http_custom_operation_custom_operation_http_service__WEBPACK_IMPORTED_MODULE_1__["CusOperationHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_5__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]])
    ], UpdateLoanComponent);
    return UpdateLoanComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/product-manage/product-summary/product-directory/bean/product-directory.bean.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/tzb/product-manage/product-summary/product-directory/bean/product-directory.bean.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ProductDirectoryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDirectoryBean", function() { return ProductDirectoryBean; });
var ProductDirectoryBean = /** @class */ (function () {
    function ProductDirectoryBean() {
        this.pageSize = 10; //每页显示数量
        // catalogName			目录名称	String(32)
        // pageNum			当前页	String(32)
        // pageSize			操作人名称	String(32)
    }
    return ProductDirectoryBean;
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
//# sourceMappingURL=default~custom-flow-custom-module~routing-cusGroup-cusGroup-module~routing-relation-relation-module.js.map