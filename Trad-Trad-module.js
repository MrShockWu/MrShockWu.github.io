(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Trad-Trad-module"],{

/***/ "./src/app/pages/tzb/Trad/Trad.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/tzb/Trad/Trad.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p-menubar [model]=\"items1\" class=\"flt\" *ngIf=\"permissionCheck('SID02064_P0159')\"></p-menubar>\r\n<p-menubar [model]=\"items2\" class=\"flt\" *ngIf=\"permissionCheck('SID02064_P0160')\"></p-menubar> -->\r\n<!-- <div class=\"ui-g-12 functions\">\r\n        <span *ngIf=\"permissionCheck('SID02064_P0159')\">\r\n                <a [routerLink]=\"[ '/pages/tzb/Trad/deal-center']\" class=\"change\" [ngClass]=\"{'active':show==1}\"\r\n                        (click)=\"apply(1)\">\r\n                        订单查询\r\n                </a>\r\n        </span>\r\n        <span *ngIf=\"permissionCheck('SID02064_P0160')\">\r\n                <a [routerLink]=\"[ '/pages/tzb/Trad/exception-hand']\" class=\"change\" [ngClass]=\"{'active':show==2}\"\r\n                        (click)=\"apply(2)\">\r\n                        订单异常处理\r\n                </a>\r\n        </span>\r\n        <span>\r\n                <a [routerLink]=\"[ '/pages/tzb/Trad/order-details']\" class=\"change\" [ngClass]=\"{'active':show==3}\"\r\n                        (click)=\"apply(3)\">\r\n                        订单详情\r\n                </a>\r\n        </span> -->\r\n\r\n<!-- <div class=\"ui-g top_content populate\">\r\n                <div class=\"ui-g-12 top_items_box\" id=\"top_items_box\">\r\n                        <div class=\"top_item\" *ngFor=\"let car of cars ; let i = index ;\" [ngClass]=\"{'active_item':showClass == car.flag}\" (click)=\"tab($event,car.flag)\">\r\n                                <span class=\"top_item_title\">{{car.title}}</span>\r\n                        </div>\r\n                </div>\r\n        </div> -->\r\n<!-- <span>\r\n                <a [routerLink]=\"[ '/pages/tzb/order/order-center/order-manage/voucher-manage']\" class=\"change\" [ngClass]=\"{'active':show==3}\"\r\n                        (click)=\"apply(3)\">\r\n                        抵用券类型管理\r\n                </a>\r\n        </span>\r\n        <span>\r\n                <a [routerLink]=\"[ '/pages/tzb/order/order-center/order-manage/voucher-applicate']\" class=\"change\" [ngClass]=\"{'active':show==4}\"\r\n                        (click)=\"apply(4)\">\r\n                        抵用券申请\r\n                </a>\r\n        </span>\r\n        <span>\r\n                <a [routerLink]=\"[ '/pages/tzb/order/order-center/order-manage/custom-voucher-manage']\" class=\"change\" [ngClass]=\"{'active':show==5}\"\r\n                        (click)=\"apply(5)\">\r\n                        客户抵用券管理\r\n                </a>\r\n        </span> -->\r\n<!-- </div>-->\r\n\r\n\r\n<div class=\"demo6\">\r\n        <div class=\"ui-g top_content populate\">\r\n                <div class=\"ui-g-12 top_items_box\" id=\"top_items_box\">\r\n                        <div [routerLink]=\"[ '/pages/tzb/Trad/deal-center']\" class=\"top_item\" [ngClass]=\"{'active_item':showClass == 0}\" (click)=\"tab(0)\">\r\n                                <span class=\"top_item_title\">订单查询</span>\r\n                        </div>\r\n                        <div [routerLink]=\"[ '/pages/tzb/Trad/exception-hand']\" class=\"top_item\" [ngClass]=\"{'active_item':showClass == 1}\" (click)=\"tab(1)\">\r\n                                <span class=\"top_item_title\">订单异常处理</span>\r\n                        </div>\r\n                        <!-- <div [routerLink]=\"[ '/pages/tzb/Trad/order-details']\" class=\"top_item\" [ngClass]=\"{'active_item':showClass == 2}\" (click)=\"tab(2)\">\r\n                                <span class=\"top_item_title\">订单详情</span>\r\n                        </div> -->\r\n                </div>\r\n        </div>\r\n\r\n</div>\r\n<div class=\"ui-g-12 module\">\r\n        <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/Trad.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tzb/Trad/Trad.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo6 {\n  background-color: #F0F0F0;\n  height: 58px;\n  color: #333; }\n  .demo6 .div1 {\n    font-size: 12px;\n    color: #38CEE9;\n    padding-bottom: 13px;\n    padding-left: 12px;\n    font-weight: 600; }\n  .demo6 .div1 span:last-child {\n      margin-left: 15px; }\n  .demo6 .div3 > div {\n    display: inline-block;\n    font-size: 14px; }\n  .demo6 .div3 .div-m span {\n    color: #34CEF0;\n    font-weight: 600; }\n  .demo6 .div3 .div-t {\n    float: right; }\n  .demo6 .div3 .div-t span.active {\n      color: #34CEF0; }\n  .demo6 .div2 {\n    background-color: #fff;\n    height: 600px;\n    position: relative;\n    padding: 10px; }\n  .demo6 .div2:after {\n      content: ' ';\n      border-right: 2px solid #efefef;\n      display: inline-block;\n      width: 2px;\n      height: 97%;\n      position: absolute;\n      right: 13px;\n      top: 3%; }\n  .demo6 .flow {\n    width: 35%;\n    margin: 0;\n    padding: 0;\n    background: #fff;\n    border-left: 10px solid #F0F0F0; }\n  .demo6 .header-title-theme {\n    padding-left: 12px;\n    height: 42px;\n    width: 100%;\n    background-color: #ffffff;\n    align-items: center;\n    box-sizing: border-box;\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom: 1px solid #e8e8e8 !important; }\n  .demo6 .header-title-theme .line {\n      width: 3px;\n      height: 19px;\n      display: inline-block;\n      margin-right: 13px;\n      background-color: #19b0c8; }\n  @media screen and (max-width: 1280px) {\n      .demo6 .header-title-theme .line {\n        height: 17px; } }\n  .demo6 .header-title-theme .text {\n      -webkit-box-flex: 1;\n      height: 20px;\n      line-height: 20px;\n      display: block;\n      white-space: nowrap;\n      font-size: 14px;\n      color: #004257;\n      padding-right: 45px;\n      font-weight: bold; }\n  .demo6 .header-title-theme .advance {\n      -webkit-box-flex: 1;\n      height: 20px;\n      line-height: 20px;\n      display: block;\n      white-space: nowrap;\n      font-size: 14px; }\n  @media screen and (max-width: 1280px) {\n      .demo6 .header-title-theme .text {\n        font-size: 15px; } }\n  .demo6 .asset-flow-direction {\n    height: 205px;\n    margin: 0;\n    padding: 0; }\n  .demo6 .asset-flow-direction div:nth-child(2) {\n      height: 180px; }\n  .demo6 .circle {\n    display: inline-block;\n    width: 16px;\n    height: 10px;\n    border-radius: 5px;\n    padding: 5px 10px; }\n  .demo6 .bg-g {\n    margin-left: 10px;\n    background-color: #5bb01a; }\n  .demo6 .bg-r {\n    background-color: #e93f33; }\n  .demo6 .tx-aglin {\n    margin-top: -40px;\n    text-align: center; }\n  .demo6 .tx-qh {\n    width: 100%;\n    position: relative;\n    display: flex;\n    margin-top: 10px;\n    margin-bottom: 15px; }\n  .demo6 .tx-qh .total {\n      display: inline-block;\n      width: 50%;\n      text-align: left;\n      padding-left: 12px; }\n  .demo6 .tx-qh .total .num {\n        color: #34CFE6; }\n  .demo6 .tx-qh .range {\n      display: inline-block;\n      width: 50%;\n      text-align: right;\n      padding-right: 10px; }\n  .demo6 .tx-qh .range .tx-a {\n        padding-left: 8px; }\n  .demo6 .tx-qh .range .tx-a:hover {\n          cursor: pointer; }\n  .demo6 .tx-qh .range .active {\n        color: #34cfe6; }\n  .demo6 .tx-qh .range .tx-a-bg {\n        color: #34CFE6;\n        font-weight: bold; }\n  .demo6 .typeStyle {\n    display: block;\n    border-radius: 50px;\n    background-color: #34cfe6;\n    height: 22px;\n    color: #fff;\n    width: 60px;\n    text-align: center;\n    margin-left: -15px; }\n  .demo6 .populate {\n    position: relative; }\n  .demo6 .top_content {\n    background: #ffffff;\n    padding-left: 0px;\n    margin-bottom: 10px;\n    border-bottom: 2px solid #34CFE6;\n    height: 45px; }\n  .demo6 .top_content .top_items_box {\n    padding-left: 0px;\n    height: 47px;\n    margin-top: 3px;\n    line-height: 36px; }\n  .demo6 .top_content .top_items_box .top_item {\n    cursor: pointer;\n    text-align: center;\n    display: inline-block;\n    margin-left: 12px;\n    height: 99%;\n    width: 80px;\n    border-top: 1px solid #e8e8e8;\n    border-left: 1px solid #e8e8e8;\n    border-right: 1px solid #e8e8e8;\n    color: #171819;\n    font-weight: bold;\n    font-size: 14px;\n    outline: 0; }\n  .demo6 .active_item {\n    border-top: 2px solid #34CFE6 !important;\n    border-left: 2px solid #34CFE6 !important;\n    border-right: 2px solid #34CFE6 !important;\n    border-bottom: 3px solid #fafafa !important;\n    color: #34CFE6 !important;\n    font-weight: bold;\n    font-size: 14px; }\n  .demo6 .top_content .top_items_box .top_item {\n    cursor: pointer;\n    text-align: center;\n    display: inline-block;\n    margin-left: 12px;\n    height: 99%;\n    width: 100px;\n    border-top: 1px solid #e8e8e8;\n    border-left: 1px solid #e8e8e8;\n    border-right: 1px solid #e8e8e8;\n    color: #171819;\n    font-weight: bold;\n    font-size: 14px;\n    outline: 0; }\n  .demo6 .custom_list_view {\n    width: 100%; }\n  .demo6 .custom_list_view .view_content {\n      width: 100%;\n      background-color: #fff; }\n  .demo6 .custom_list_view .calendar {\n      background-color: #e8e8e8; }\n  .demo6 :host /deep/ .ui-widget-header {\n    background-color: #f0f0f0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL1RyYWQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcVHJhZFxcVHJhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQkE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTtFQUhmO0lBS1EsZUFBZTtJQUNmLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBVHhCO01BV1ksaUJBQWlCLEVBQUE7RUFYN0I7SUFnQlkscUJBQXFCO0lBQ3JCLGVBQWUsRUFBQTtFQWpCM0I7SUFxQmdCLGNBQWM7SUFDZCxnQkFBZ0IsRUFBQTtFQXRCaEM7SUEwQlksWUFBWSxFQUFBO0VBMUJ4QjtNQTZCb0IsY0FBYyxFQUFBO0VBN0JsQztJQW1DUSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7RUF0Q3JCO01Bd0NZLFlBQVk7TUFDWiwrQkFBK0I7TUFDL0IscUJBQXFCO01BQ3JCLFVBQVU7TUFDVixXQUFXO01BQ1gsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxPQUFPLEVBQUE7RUEvQ25CO0lBbURRLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQiwrQkFBK0IsRUFBQTtFQXZEdkM7SUEwRFEsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGVBQWU7SUFDZiwyQ0FBMkMsRUFBQTtFQWxFbkQ7TUFvRVksVUFBVTtNQUNWLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLHlCQUF5QixFQUFBO0VBRTdCO01BMUVSO1FBNEVnQixZQUFZLEVBQUEsRUFDZjtFQTdFYjtNQWdGWSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGlCQUFpQixFQUFBO0VBeEY3QjtNQTJGWSxtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGVBQWUsRUFBQTtFQUVuQjtNQWxHUjtRQW9HZ0IsZUFBZSxFQUFBLEVBQ2xCO0VBckdiO0lBeUdRLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBM0dsQjtNQTZHWSxhQUFhLEVBQUE7RUE3R3pCO0lBaUhRLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQXJIekI7SUF3SFEsaUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFBO0VBekhqQztJQTRIUSx5QkFBeUIsRUFBQTtFQTVIakM7SUErSFEsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBaEkxQjtJQW1JUSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUF2STNCO01BeUlZLHFCQUFxQjtNQUNyQixVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0VBNUk5QjtRQThJZ0IsY0FBYyxFQUFBO0VBOUk5QjtNQWtKWSxxQkFBcUI7TUFDckIsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixtQkFBbUIsRUFBQTtFQXJKL0I7UUF1SmdCLGlCQUFpQixFQUFBO0VBdkpqQztVQXlKb0IsZUFBZSxFQUFBO0VBekpuQztRQTZKZ0IsY0FBYyxFQUFBO0VBN0o5QjtRQWdLZ0IsY0FBYztRQUNkLGlCQUFpQixFQUFBO0VBaktqQztJQXNLUSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7RUE3SzFCO0lBZ0xRLGtCQUFrQixFQUFBO0VBaEwxQjtJQW1MUSxtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsWUFBWSxFQUFBO0VBdkxwQjtJQTBMUSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQTdMekI7SUFnTVEsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsVUFBVSxFQUFBO0VBNU1sQjtJQStNUSx3Q0FBd0M7SUFDeEMseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQywyQ0FBMkM7SUFDM0MseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7RUFyTnZCO0lBd05RLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFVBQVUsRUFBQTtFQXBPbEI7SUF1T1EsV0FBVyxFQUFBO0VBdk9uQjtNQXlPWSxXQUFXO01BQ1gsc0JBQXNCLEVBQUE7RUExT2xDO01BOE9ZLHlCQUF5QixFQUFBO0VBOU9yQztJQWtQUSx5QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9UcmFkL1RyYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdC9kZWVwLyAudWktbWVudWJhcntcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gfVxyXG4vLyAuZmx0IHtcclxuLy8gICAgIGZsb2F0OiBsZWZ0OyAgICBcclxuLy8gfVxyXG4vLyAuZnVuY3Rpb25zIHtcclxuLy8gICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4vLyAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbi8vICAgICAuY2hhbmdlIHtcclxuLy8gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4vLyAgICAgICAgIGhlaWdodDogNDBweDtcclxuLy8gICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuLy8gICAgICAgICBjb2xvcjogIzkyOTI5MjtcclxuLy8gICAgICAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmFjdGl2ZSB7XHJcbi8vICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZjcgIWltcG9ydGFudDtcclxuLy8gICAgIGNvbG9yOiAjMDAzZjVjICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLmRlbW82IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbiAgICBoZWlnaHQ6IDU4cHg7O1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICAuZGl2MSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzhDRUU5O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXYzIHtcclxuICAgICAgICA+ZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtbSB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNENFRjA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtdCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzNENFRjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGl2MiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnICc7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA5NyU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgcmlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIHRvcDogMyU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZsb3cge1xyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAjRjBGMEYwO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci10aXRsZS10aGVtZSB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlOCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTNweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDQyNTc7IC8vIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkdmFuY2Uge1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hc3NldC1mbG93LWRpcmVjdGlvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDVweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2lyY2xlIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIH1cclxuICAgIC5iZy1nIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiMDFhO1xyXG4gICAgfVxyXG4gICAgLmJnLXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOTNmMzM7XHJcbiAgICB9XHJcbiAgICAudHgtYWdsaW4ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50eC1xaCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIC50b3RhbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgICAgICAgICAubnVtIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzRDRkU2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yYW5nZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIC50eC1hIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNGNmZTY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnR4LWEtYmcge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzNENGRTY7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50eXBlU3R5bGUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0Y2ZlNjtcclxuICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIH1cclxuICAgIC5wb3B1bGF0ZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnRvcF9jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzNENGRTY7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgfVxyXG4gICAgLnRvcF9jb250ZW50IC50b3BfaXRlbXNfYm94IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgfVxyXG4gICAgLnRvcF9jb250ZW50IC50b3BfaXRlbXNfYm94IC50b3BfaXRlbSB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5OSU7XHJcbiAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgY29sb3I6ICMxNzE4MTk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlX2l0ZW0ge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzRDRkU2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMzRDRkU2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzM0Q0ZFNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZmFmYWZhICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMzNENGRTYgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAudG9wX2NvbnRlbnQgLnRvcF9pdGVtc19ib3ggLnRvcF9pdGVtIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICBoZWlnaHQ6IDk5JTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZThlOGU4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICAgICAgY29sb3I6ICMxNzE4MTk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tX2xpc3RfdmlldyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLnZpZXdfY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgLy8gcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhbGVuZGFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZThlODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICA6aG9zdCAvZGVlcC8gLnVpLXdpZGdldC1oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZjBmMGYwO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/Trad.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tzb/Trad/Trad.component.ts ***!
  \**************************************************/
/*! exports provided: TradComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradComponent", function() { return TradComponent; });
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


//订单
var TradComponent = /** @class */ (function () {
    function TradComponent(commfunc) {
        this.commfunc = commfunc;
        this.showClass = 0;
        this.cars = [
            {
                title: '订单查询',
                link: 'deal-center',
                id: 'SID02064_P0159',
                flag: 0
            },
            {
                title: '订单异常处理',
                link: 'exception-hand',
                id: 'SID02064_P0160',
                flag: 1
            },
            {
                title: '订单详情',
                link: 'order-details',
                id: '',
                flag: 2
            },
        ];
    }
    TradComponent.prototype.ngOnInit = function () {
        this.items1 = [
            {
                label: '订单查询',
                routerLink: '/pages/tzb/Trad/deal-center'
            }
        ];
        this.items2 = [
            {
                label: '订单异常处理',
                routerLink: '/pages/tzb/Trad/exception-hand'
            }
        ];
        this.items3 = [
            {
                label: '订单详情',
                routerLink: '/pages/tzb/Trad/order-details'
            }
        ];
        // this.items3 = [
        //   {
        //     label: '订单异常处理',
        //     routerLink: '/pages/tzb/order/order-center/order-manage/order-exception-handle'
        //   }
        // ]
        this.judgStatu();
    };
    TradComponent.prototype.tab = function (flag) {
        // let target = event.target || event.toElement || event.srcElement
        // if (target) {
        //   // $(target).parent('div').addClass('active_item');
        //   // console.log(target);
        // }
        this.showClass = flag;
    };
    TradComponent.prototype.judgStatu = function () {
        var _this = this;
        var url = window.location.href;
        var urlSplit = url.split('/');
        urlSplit.map(function (v) {
            if (v === 'deal-center') {
                _this.show = 1;
            }
            else if (v === 'exception-hand') {
                _this.show = 2;
            }
            else if (v === 'order-details') {
                _this.show = 3;
            }
            // else if (v === 'voucher-manage') {
            //   this.show = 3;
            // }else if (v === 'voucher-applicate') {
            //   this.show = 4;
            // }else if (v === 'voucher-applicate') {
            //   this.show = 5;
            // }
        });
    };
    TradComponent.prototype.apply = function (num) {
        this.show = num;
    };
    //按钮权限
    TradComponent.prototype.permissionCheck = function (id) {
        return this.commfunc.permissionCheck(id);
    };
    TradComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-Trad',
            template: __webpack_require__(/*! ./Trad.component.html */ "./src/app/pages/tzb/Trad/Trad.component.html"),
            styles: [__webpack_require__(/*! ./Trad.component.scss */ "./src/app/pages/tzb/Trad/Trad.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"]])
    ], TradComponent);
    return TradComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/Trad.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tzb/Trad/Trad.module.ts ***!
  \***********************************************/
/*! exports provided: TradModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradModule", function() { return TradModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../service/basis/authority/authority.service */ "./src/app/service/basis/authority/authority.service.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _Trad_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Trad.routing */ "./src/app/pages/tzb/Trad/Trad.routing.ts");
/* harmony import */ var _Trad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Trad.component */ "./src/app/pages/tzb/Trad/Trad.component.ts");
/* harmony import */ var _deal_center_deal_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deal-center/deal-center.component */ "./src/app/pages/tzb/Trad/deal-center/deal-center.component.ts");
/* harmony import */ var _exception_hand_exception_hand_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./exception-hand/exception-hand.component */ "./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/pages/tzb/Trad/order-details/order-details.component.ts");
/* harmony import */ var _deal_centerpac_deal_centerpac_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deal-centerpac/deal-centerpac.component */ "./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.ts");
/* harmony import */ var app_uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/@uisftech/tzb/udatatable/datatable */ "./src/app/@uisftech/tzb/udatatable/datatable.ts");
/* harmony import */ var app_uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/@uisftech/tzb/upaginator/upaginator.module */ "./src/app/@uisftech/tzb/upaginator/upaginator.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// 客户组件


// 页面
 // 订单






var TradModule = /** @class */ (function () {
    function TradModule() {
    }
    TradModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_1__["SharedBasisModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_4__["FrameworkModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
                _Trad_routing__WEBPACK_IMPORTED_MODULE_5__["TradRouting"],
                app_uisftech_tzb_udatatable_datatable__WEBPACK_IMPORTED_MODULE_11__["UDataTableModule"],
                app_uisftech_tzb_upaginator_upaginator_module__WEBPACK_IMPORTED_MODULE_12__["UPaginatorModule"]
            ],
            declarations: [
                _Trad_component__WEBPACK_IMPORTED_MODULE_6__["TradComponent"],
                _deal_center_deal_center_component__WEBPACK_IMPORTED_MODULE_7__["DealCenterComponent"],
                _deal_centerpac_deal_centerpac_component__WEBPACK_IMPORTED_MODULE_10__["DealCenterpacComponent"],
                _exception_hand_exception_hand_component__WEBPACK_IMPORTED_MODULE_8__["ExceptionhandComponent"],
                _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_9__["OrderDetailsComponent"]
            ],
            entryComponents: [],
            providers: [
                _service_basis_authority_authority_service__WEBPACK_IMPORTED_MODULE_2__["AuthorityService"],
            ]
        })
    ], TradModule);
    return TradModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/Trad.routing.ts":
/*!************************************************!*\
  !*** ./src/app/pages/tzb/Trad/Trad.routing.ts ***!
  \************************************************/
/*! exports provided: TradRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradRouting", function() { return TradRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Trad_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trad.component */ "./src/app/pages/tzb/Trad/Trad.component.ts");
/* harmony import */ var _deal_center_deal_center_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deal-center/deal-center.component */ "./src/app/pages/tzb/Trad/deal-center/deal-center.component.ts");
/* harmony import */ var _exception_hand_exception_hand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exception-hand/exception-hand.component */ "./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.ts");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-details/order-details.component */ "./src/app/pages/tzb/Trad/order-details/order-details.component.ts");
/* harmony import */ var _deal_centerpac_deal_centerpac_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deal-centerpac/deal-centerpac.component */ "./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.ts");

//页面
 //订单




var routes = [
    {
        path: '',
        component: _Trad_component__WEBPACK_IMPORTED_MODULE_1__["TradComponent"],
        children: [
            { path: '', redirectTo: 'deal-center', pathMatch: 'full' },
            // { path: 'order-center', loadChildren: './order-center/order-center.module#OrderCenterModule' },
            // { path: 'deal-center', loadChildren: './deal-center/deal-center.module#DealCenterModule' },
            { path: 'deal-center', component: _deal_center_deal_center_component__WEBPACK_IMPORTED_MODULE_2__["DealCenterComponent"] },
            { path: 'exception-hand', component: _exception_hand_exception_hand_component__WEBPACK_IMPORTED_MODULE_3__["ExceptionhandComponent"] },
            { path: 'order-details', component: _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_4__["OrderDetailsComponent"] },
            { path: 'deal-centerpac', component: _deal_centerpac_deal_centerpac_component__WEBPACK_IMPORTED_MODULE_5__["DealCenterpacComponent"] },
        ]
    },
];
var TradRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/Trad/deal-center/bean/order-query.bean.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/deal-center/bean/order-query.bean.ts ***!
  \*********************************************************************/
/*! exports provided: OrderQueryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderQueryBean", function() { return OrderQueryBean; });
var OrderQueryBean = /** @class */ (function () {
    function OrderQueryBean() {
        //订单头信息
        this.orderHeader = {
            orderNo: '',
            productCode: '',
            queryStartDate: '',
            queryEndDate: '',
            appUserId: '',
            salesChannelEnumId: '',
            bankNo: '',
            orderStatus: '',
            minAmt: '',
            maxAmt: '',
            payStatus: '',
            fulStatus: '',
            paySeqNo: '',
            fulSeqNo: '',
            settleAcctNo: '',
            tranType: '',
            appBranchNo: '',
        };
        this.pageParam = {
            pageNumber: Number,
            pageSize: Number,
        };
    }
    return OrderQueryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/deal-center/deal-center.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/deal-center/deal-center.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n    <div class=\"filter-div\">\r\n      <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            订单编号\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\" [formGroup]=\"userform\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" pInputText formControlName=\"orderId\" name=\"orderId\" [(ngModel)]=\"orderQueryBean.orderHeader.orderNo\"\r\n              />\r\n              <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['orderId'].valid&&userform.controls['orderId'].dirty\">\r\n                <span *ngIf=\"userform.hasError('maxlength','orderId')\">订单编号不能超过20位!</span>\r\n                <span *ngIf=\"userform.hasError('specialSymbol','orderId')\">订单编号不支持特殊字符！</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            产品编号\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"orderQueryBean.orderHeader.productCode\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            查询时间\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\" [formGroup]=\"userform\">\r\n              <p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\"\r\n                [locale]=\"ch\" showButtonBar=\"true\" showIcon=\"true\" styleClass=\"ui-calendar-new\" readonlyInput=\"true\" [(ngModel)]=\"queryStartDate\"\r\n                formControlName=\"queryStartDate\" name=\"queryStartDate\" (onSelect)=\"selectTime1()\"></p-calendar>\r\n              至\r\n              <p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\"\r\n                [locale]=\"ch\" showButtonBar=\"true\" showIcon=\"true\" styleClass=\"ui-calendar-new\" readonlyInput=\"true\" [(ngModel)]=\"queryEndDate\"\r\n                formControlName=\"queryEndDate\" name=\"queryEndDate\" (onSelect)=\"selectTime1()\"></p-calendar>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            经办柜员\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" style=\"width: 97%\" pInputText [(ngModel)]=\"orderQueryBean.orderHeader.appUserId\"\r\n              />\r\n              <div class=\"ui_re\">\r\n                <div class=\"clickspan\" (click)=\"chooseWorker()\">\r\n                  <a class=\"a-hand\">\r\n                  <span>...</span>\r\n                </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            流水号\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\" [formGroup]=\"userform\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" pInputText formControlName=\"transactionId\" name=\"transactionId\" [(ngModel)]=\"orderQueryBean.orderHeader.transactionId\"\r\n              />\r\n            </div>\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['transactionId'].valid&&userform.controls['transactionId'].dirty\">\r\n              <span *ngIf=\"userform.hasError('specialSymbol','transactionId')\">核心支付流水号不支持特殊字符！</span>\r\n            </div>\r\n          </div>\r\n        </div> -->\r\n        <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              银行标识\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" [options]=\"bankNo\" [(ngModel)]=\"orderQueryBean.orderHeader.bankNo\"></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            订单状态\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <p-dropdown styleClass=\"ui-dropdown-new\" [options]=\"orderStatusId\" [(ngModel)]=\"orderQueryBean.orderHeader.orderStatus\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            经办机构\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" style=\"width: 97%\" pInputText [(ngModel)]=\"orderQueryBean.orderHeader.appBranchNo\"\r\n              />\r\n              <div class=\"ui_re\">\r\n                <div class=\"clickspan\" (click)=\"openOrg('handle')\">\r\n                  <a class=\"a-hand\">\r\n                    <span>...</span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            账号\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\" [formGroup]=\"userform\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" pInputText formControlName=\"settleAcctNo\" name=\"settleAcctNo\" [(ngModel)]=\"orderQueryBean.orderHeader.settleAcctNo\"\r\n              />\r\n            </div>\r\n            <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['settleAcctNo'].valid&&userform.controls['settleAcctNo'].dirty\">\r\n              <span *ngIf=\"userform.hasError('specialSymbol','settleAcctNo')\">账号不支持特殊字符！</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            交易金额\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\" [formGroup]=\"userform\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" style=\"width: 45.3%;min-width: 100px;\" pInputText formControlName=\"minAmt\" name=\"minAmt\"\r\n                [(ngModel)]=\"orderQueryBean.orderHeader.minAmt\" /> --\r\n              <input class=\"ui-inputtext-new\" type=\"text\" style=\"width: 45.3%;min-width: 100px;\" pInputText formControlName=\"maxAmt\" name=\"maxAmt\"\r\n                [(ngModel)]=\"orderQueryBean.orderHeader.maxAmt\" />\r\n            </div>\r\n            \r\n              <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['minAmt'].valid&&userform.controls['minAmt'].dirty\">\r\n                <span *ngIf=\"userform.hasError('specialSymbol','minAmt')\">最小金额不支持特殊字符！</span>\r\n              </div>\r\n              <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['maxAmt'].valid&&userform.controls['maxAmt'].dirty\">\r\n                <span *ngIf=\"userform.hasError('specialSymbol','maxAmt')\">最大金额不支持特殊字符！</span>\r\n              </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            支付状态\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <p-dropdown styleClass=\"ui-dropdown-new\" [options]=\"PaymentStatus\" [(ngModel)]=\"orderQueryBean.orderHeader.payStatus\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            交付状态\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <p-dropdown styleClass=\"ui-dropdown-new\" [options]=\"FulfillStatus\" [(ngModel)]=\"orderQueryBean.orderHeader.fulStatus\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            支付流水号\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"orderQueryBean.orderHeader.paySeqNo\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n     <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            交付流水号\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" pInputText [(ngModel)]=\"orderQueryBean.orderHeader.fulSeqNo\" />\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            交易类型\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <p-dropdown styleClass=\"ui-dropdown-new\" [options]=\"transactionType\" [(ngModel)]=\"orderQueryBean.orderHeader.tranType\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            来源渠道\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <p-dropdown styleClass=\"ui-dropdown-new\" [options]=\"salesChannelEnumId\" [(ngModel)]=\"orderQueryBean.orderHeader.salesChannelEnumId\"></p-dropdown>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-grid-row form_item\" style=\"margin-bottom:0px\">\r\n        <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;\">\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n            </div>\r\n\r\n          </div>\r\n          <span>&nbsp;</span>\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-div\" style=\"background-color:#fff;height:650px;\">\r\n      <p-panel styleClass=\"ui-panel-new\">\r\n        <u-dataTable [value]=\"tableData\" emptyMessage=\"没有查找到数据\" [scrollable]=\"true\" [style]=\"{'text-align':'left'}\" scrollHeight=\"500px\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'42px','padding-left':'5px'}\">\r\n            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n              {{i+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"orderNo\" header='订单编号' [style]=\"{'width':'112px','padding-left':'5px'}\">\r\n            <!-- <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n              <a (click)=\"dispatchPage(car.orderNo)\">{{car.orderNo}}</a>\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column field=\"ccy\" header='币种' [style]=\"{'width':'78px','padding-left':'5px'}\">\r\n            <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.ccy | codeValuePie:currencyUomIdss}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"appBranchNo\" header='机构号' [style]=\"{'width':'86px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"appUserId\" header='柜员号' [style]=\"{'width':'85px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"orderStatus\" header='订单状态' [style]=\"{'width':'85px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"paySeqNo\" header='核心支付流水号' [style]=\"{'width':'85px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"deliverSeqNo\" header='核心交付流水号' [style]=\"{'width':'85px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"paymentStatus\" header='支付状态' [style]=\"{'width':'85px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"deliverStatus\" header='交付状态' [style]=\"{'width':'85px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"acctNo\" header='帐/卡号' [style]=\"{'width':'150px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"orderAmt\" header='订单金额' [style]=\"{'width':'81px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"oriTranDate\" header='交易日期' [style]=\"{'width':'100px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"productCode\" header='订购产品' [style]=\"{'width':'146px','padding-left':'5px'}\"></p-column>\r\n          <!-- <p-column field=\"orderTypeId\" header='订单类型' [style]=\"{'width':'90px','padding-left':'5px'}\">\r\n              <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                <span>{{col.orderTypeId | codeValuePie:orderTypeId}}</span>\r\n              </ng-template>\r\n            </p-column> -->\r\n          <p-column field=\"tranType\" header='交易类型' [style]=\"{'width':'85px','padding-left':'5px'}\">\r\n            <!-- <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.transactionType | codeValuePie:transactionType}}</span>\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column field=\"sourceChanel\" header='渠道标识' [style]=\"{'width':'85px','padding-left':'5px'}\">\r\n            <!-- <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.salesChannelEnumId | codeValuePie:salesChannelEnumId}}</span>\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column field=\"bankSystemType\" header='银行标识' [style]=\"{'width':'85px','padding-left':'5px'}\">\r\n            <!-- <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.bankId | codeValuePie:bankNo}}</span>\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column field=\"errorInfo\" header='错误信息' [style]=\"{'width':'185px','padding-left':'5px'}\"></p-column>\r\n        </u-dataTable>\r\n        <div style=\"float:right;padding-top:50px\">\r\n          <u-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n        </div>\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" (onHide)=\"onHideClose()\" class=\"contact-track-f\">\r\n  <p-header>员工列表</p-header>\r\n  <app-query-user-list *ngIf=\"personPage\" [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<p-dialog *ngIf='orgTreeDisplay' [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" (onHide)=\"onHideClose()\"\r\n  class=\"contact-track-f\">\r\n  <p-header>机构树</p-header>\r\n  <org-tree-component *ngIf='orgTreeDisplay' [inValue]=\"ownerOrgInValue\" (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/deal-center/deal-center.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/deal-center/deal-center.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui_re {\n  width: 0px;\n  height: 0px;\n  float: right;\n  position: relative; }\n\n.clickspan {\n  width: 40px;\n  height: 28px;\n  cursor: pointer;\n  position: absolute;\n  margin-left: -42px;\n  border: 1px solid #e8e8e8;\n  line-height: 20px; }\n\n@media screen and (min-width: 100px) {\n  :host/deep/ .ui-calendar {\n    width: 44.7%;\n    min-width: 100px; } }\n\n:host/deep/ .ui-widget-header {\n  background-color: #f0f0f0; }\n\n.layout {\n  background-color: #F0F0F0;\n  color: #333; }\n\n.layout .filter-div {\n    background-color: #fff;\n    padding: 15px 0;\n    font-size: 14px; }\n\n.layout .table-div {\n    margin-top: 12px; }\n\n.layout :host /deep/ .form_item {\n    margin: 15px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL1RyYWQvZGVhbC1jZW50ZXIvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcVHJhZFxcZGVhbC1jZW50ZXJcXGRlYWwtY2VudGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBRXRCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ1E7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUEsRUFDcEI7O0FBRVI7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSx5QkFBeUI7RUFFekIsV0FBVyxFQUFBOztBQUhmO0lBS1Esc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixlQUFlLEVBQUE7O0FBUHZCO0lBV1EsZ0JBQWdCLEVBQUE7O0FBWHhCO0lBY1EseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvVHJhZC9kZWFsLWNlbnRlci9kZWFsLWNlbnRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aV9yZSB7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNsaWNrc3BhbiB7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjEwMHB4KSB7XHJcbiAgICAgICAgOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQ0LjclO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG46aG9zdC9kZWVwLyAudWktd2lkZ2V0LWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG59XHJcbi5sYXlvdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuICAgIC8vIGhlaWdodDogMTMwMHB4OyAgICBcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgLmZpbHRlci1kaXYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAudGFibGUtZGl2IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QgL2RlZXAvIC5mb3JtX2l0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwICFpbXBvcnRhbnQ7XHJcbiAgICB9IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/deal-center/deal-center.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/deal-center/deal-center.component.ts ***!
  \*********************************************************************/
/*! exports provided: DealCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealCenterComponent", function() { return DealCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/order-query.bean */ "./src/app/pages/tzb/Trad/deal-center/bean/order-query.bean.ts");
/* harmony import */ var _http_order_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../http/order.http.service */ "./src/app/pages/tzb/Trad/http/order.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { OrderHttpService } from './../../../http/order.http.service';







// import { bankNo, salesChannelEnumId, tranType } from '../../../constant/codeValue';
var DealCenterComponent = /** @class */ (function () {
    function DealCenterComponent(orderHttpService, confirmationService, commfunc, router, fb) {
        this.orderHttpService = orderHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.router = router;
        this.fb = fb;
        //表数据
        this.tableData = [];
        //下拉框
        this.label = []; //订单状态
        this.payStatus = []; //支付状态
        this.fulStatus = []; //交付状态
        this.bankNo = []; //银行标识
        this.salesChannelEnumId = []; //来源渠道
        this.tranType = []; //交易类型
        this.pageSize = 10;
        this.pageNumber = 1;
        // bean
        this.orderQueryBean = new _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_7__["OrderQueryBean"]();
        //模态框
        this.headerTitle = "详情"; //模态框的标题
        this.display = false; //模态框是否显示
        this.orgTreeDisplay = false;
        this.personPage = false;
        //修改的参数
        this.updateValue = [];
        this.first = 0;
        //提示信息
        this.msgs = [];
        this.orderStatusId = [];
        this.orderTypeId = [
            { label: "请选择", value: "" },
            { label: "销售订单", value: "SALES_ORDER" },
            { label: "采购订单", value: "PURCHASE_ORDER" },
        ];
        this.transactionType = [
            { label: "请选择", value: "" },
            { label: "贷款发放", value: "FUNC000002" },
            { label: "贷款还款", value: "FUNC000004" },
            { label: "贷款借据结息", value: "FUNC000003" },
            { label: "应收利息回", value: "FUNC000006" },
            { label: "存款开户", value: "FUNC000007" },
            { label: "存款销户", value: "FUNC000008" },
            { label: "定期部提", value: "FUNC000009" },
        ];
        this.currencyUomIdss = [
            { label: "请选择", value: "" },
            { value: 'CNY', label: '人民币' },
            { value: 'USD', label: '美元' },
            { value: 'HKD', label: '港币' },
            { value: 'EUR', label: '欧元' },
            { value: 'JPY', label: '日元' },
            { value: 'GBP', label: '英镑' },
            { value: 'AUD', label: '澳大利亚元' },
            { value: 'CAD', label: '加拿大元' },
            { value: 'CHF', label: '瑞士法郎' },
            { value: 'DEM', label: '德国马克' },
            { value: 'SGD', label: '新加坡元' },
            { value: 'BEF', label: '比利时法郎' },
            { value: 'MOP', label: '澳门币' },
            { value: 'NLG', label: '荷兰盾' },
            { value: 'DKK', label: '丹麦克郎' },
            { value: 'SEK', label: '瑞典克朗' },
            { value: '98', label: '全外' },
            { value: '99', label: '全币种' },
            { value: 'NA', label: '缺省币种' },
        ];
        //订单支付状态	
        this.PaymentStatus = [
            { label: "请选择", value: "" },
            // { value: 'PAYMENT_RECEIVED', label: '付款已收到' },
            // { value: 'PAYMENT_NOT_RECEIVED', label: '付款未收到' },
            // { value: 'PAYMENT_CANCELLED', label: '支付已取消' },
            // { value: 'PAY_PART_CANCELLED', label: '支付部分取消' },
            // { value: 'PAYMENT_REFUNDED', label: '支付已退款' },
            // { value: 'PAYMENT_AUTHORIZED', label: '支付已授权' },
            // { value: 'PAYMENT_NOT_AUTH', label: '支付未授权' },
            { value: 'PAYMENT_SETTLED', label: '已支付' },
            // { value: 'PAYMENT_DECLINED', label: '支付已搁置' },
            { value: 'PAYMENT_REVERSED', label: '支付已冲正' },
            // { value: 'PAYMENT_REVERSED_UNKNOW', label: '支付冲正未知' },
            { value: 'PAYMENT_UNKNOW', label: '支付状态未知' },
            { value: 'ORDER_NOT_PAY', label: '未支付' },
        ];
        //订单交付状态	
        this.FulfillStatus = [
            { label: "请选择", value: "" },
            { value: 'FULFILL_CREATED', label: '未交付' },
            { value: 'FULFILL_COMPLETED', label: '已交付' },
            { value: 'FULFILL_FAILED', label: '交付失败' },
            { value: 'FULFILL_CANCELLED', label: '交付已取消' },
            // { value: 'FULFILL_REVERSED', label: '交付已冲正' },
            // { value: 'FULFILL_REVERSED_UNKNOW', label: '交付冲正未知' },
            { value: 'FULFILL_UNKNOW', label: '交付状态未知' },
        ];
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"]; //讲英文转化为中文
        this.queryStartDate = new Date();
        this.queryEndDate = new Date();
        this.codeValues(); //调用方法，获取全部码值
        console.log(this.code);
        this.bankNo = this.code['bankNo'];
        this.salesChannelEnumId = this.code['salesChannelEnumId'];
        this.tranType = this.code['tranType'];
        this.orderStatusId = [
            { label: "请选择", value: "" },
            { label: "已创建", value: "ORDER_CREATED" },
            // { label: "处理中", value: "ORDER_PROCESSING" },
            { label: "已核准", value: "ORDER_APPROVED" },
            // { label: "已扣留", value: "ORDER_HOLD" },
            { label: "已完成", value: "ORDER_COMPLETED" },
            { label: "已取消", value: "ORDER_CANCELLED" },
            { label: "已拒绝", value: "ORDER_REJECTED" },
            { label: "已撤销", value: "ORDER_REVOKED" },
        ];
    }
    DealCenterComponent.prototype.ngOnInit = function () {
        // this.queryClick();
        this.preSet();
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.queryClick();
            }
        };
    };
    //码值
    DealCenterComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    DealCenterComponent.prototype.openOrg = function (param) {
        this.orgTreeDisplay = !this.orgTreeDisplay;
        this.ownerOrgInValue = 'adjustOrg';
    };
    DealCenterComponent.prototype.onHideClose = function () {
        this.personPage = false;
        this.orgTreeDisplay = false;
    };
    DealCenterComponent.prototype.treeCall = function (param) {
        this.orgTreeDisplay = false;
        this.orderQueryBean.orderHeader.appBranchNo = param.orgId;
    };
    DealCenterComponent.prototype.chooseWorker = function () {
        this.userInValue = '0000';
        this.personPage = !this.personPage;
    };
    DealCenterComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        if (item.length > 0) {
            this.orderQueryBean.orderHeader.appUserId = item[0].tellerId;
        }
    };
    DealCenterComponent.prototype.preSet = function () {
        //表单校验
        this.userform = this.fb.group({
            'orderId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'queryStartDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'queryEndDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'tradPartyId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'transactionId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'settleAcctNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'userLoginId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'productId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'minAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'maxAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]]))
        });
    };
    //查询
    DealCenterComponent.prototype.queryClick = function () {
        this.pageSize = 10;
        this.pageNumber = 1;
        this.first = 0;
        //调用查询的方法
        this.queryOrderListPac();
    };
    DealCenterComponent.prototype.queryOrderListPac = function () {
        var _this = this;
        //查询时间
        this.orderQueryBean.pageParam.pageSize = this.pageSize;
        this.orderQueryBean.pageParam.pageNumber = this.pageNumber;
        this.orderQueryBean.orderHeader.queryStartDate = this.commfunc.transDateN(this.queryStartDate);
        this.orderQueryBean.orderHeader.queryEndDate = this.commfunc.transDateN(this.queryEndDate);
        this.orderHttpService.queryOrderListPac(this.orderQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.orderList;
                _this.total = data.pageParam.totalCount;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //详情按钮事件
    DealCenterComponent.prototype.dispatchPage = function (item) {
        this.router.navigate(['/pages/tzb/Trad/order-details'], { queryParams: { orderId: item, isext: 'N' } });
    };
    //分页
    DealCenterComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.pageNumber = currentPage;
        this.first = event.page * event.rows;
        //调用查询的方法
        this.queryOrderListPac();
    };
    //重置
    DealCenterComponent.prototype.resetClick = function () {
        this.orderQueryBean = new _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_7__["OrderQueryBean"]();
        this.queryStartDate = new Date();
        this.queryEndDate = new Date();
    };
    //日期范围的处理
    DealCenterComponent.prototype.selectTime1 = function () {
        this.selectTime(1);
    };
    DealCenterComponent.prototype.selectTime2 = function () {
        this.queryStartDate.getHours() == new Date().getHours() ? this.selectTime(2) : this.selectTime(1);
    };
    DealCenterComponent.prototype.selectTime = function (a) {
        var _this = this;
        var startTime = this.queryStartDate.getTime();
        var endTime = this.queryEndDate.getTime();
        if (this.queryStartDate && this.queryEndDate) {
            if (this.queryStartDate > this.queryEndDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.queryStartDate = null;
                    _this.queryEndDate = null;
                });
            }
            else if (endTime - startTime > (6 * 24 * 60 * 60 * 1000)) { //李艳 缺陷17133订单查询日期增加控制七天条件
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期与结束日期之间应小于7天' });
                setTimeout(function () {
                    _this.queryStartDate = null;
                    _this.queryEndDate = null;
                });
            }
        }
    };
    DealCenterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deal-center',
            template: __webpack_require__(/*! ./deal-center.component.html */ "./src/app/pages/tzb/Trad/deal-center/deal-center.component.html"),
            styles: [__webpack_require__(/*! ./deal-center.component.scss */ "./src/app/pages/tzb/Trad/deal-center/deal-center.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], _http_order_http_service__WEBPACK_IMPORTED_MODULE_8__["OrdersHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_order_http_service__WEBPACK_IMPORTED_MODULE_8__["OrdersHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], DealCenterComponent);
    return DealCenterComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/deal-centerpac/bean/order-query.bean.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/deal-centerpac/bean/order-query.bean.ts ***!
  \************************************************************************/
/*! exports provided: OrderQueryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderQueryBean", function() { return OrderQueryBean; });
var OrderQueryBean = /** @class */ (function () {
    function OrderQueryBean() {
        this.pageParam = {
            pageNumber: Number,
            pageSize: Number,
        };
    }
    return OrderQueryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 order-query\">\r\n  <header-title [Info]=\"'订单列表查询'\"></header-title>\r\n  <!-- 查询条件 -->\r\n  <div class=\"ui-g bg\">\r\n    <div class=\"ui-g-12 query-criteria\">\r\n      <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n        <label>订单编号：</label>\r\n        <input type=\"text\" pInputText formControlName=\"orderId\" name=\"orderId\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.orderId\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['orderId'].valid&&userform.controls['orderId'].dirty\">\r\n          <span *ngIf=\"userform.hasError('maxlength','orderId')\">订单编号不能超过20位!</span>\r\n          <span *ngIf=\"userform.hasError('specialSymbol','orderId')\">订单编号不支持特殊字符！</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n        <label>产品编号：</label>\r\n        <input type=\"text\" pInputText formControlName=\"productId\" name=\"productId\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.productId\">\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n          <label style=\"width:149px;\">查询时间：</label>\r\n          <p-calendar [(ngModel)]=\"queryStartDate\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n            [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" [style]=\"{'width':'23%'}\"\r\n            (onSelect)=\"selectTime1()\" formControlName=\"queryStartDate\" name=\"queryStartDate\"></p-calendar>\r\n          至\r\n          <p-calendar [(ngModel)]=\"queryEndDate\" [showButtonBar]=\"true\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\"\r\n            [showOtherMonths]=\"false\" [readonlyInput]=\"true\" [showIcon]=\"true\" dateFormat=\"yy/mm/dd\" [locale]=\"ch\" [style]=\"{'width':'23%'}\"\r\n            (onSelect)=\"selectTime2()\" formControlName=\"queryEndDate\" name=\"queryEndDate\"></p-calendar>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 query-criteria\">\r\n      <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n        <div class=\"cont30 textAligin\">\r\n          柜员号：\r\n        </div>\r\n        <div class=\"cont60\">\r\n          <input type=\"text\" pInputText formControlName=\"userLoginId\" name=\"userLoginId\" style=\"width:88%;\" [(ngModel)]=\"orderQueryBean.userLoginId\">\r\n        </div>\r\n        <div class=\"ui_re\">\r\n          <div class=\"clickspan\" (click)=\"chooseWorker()\">\r\n            <a class=\"a-hand\">\r\n              <span>...</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n        <label>支付流水号：</label>\r\n        <input type=\"text\" pInputText formControlName=\"paymentSeqNo\" name=\"paymentSeqNo\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.paymentSeqNo\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['paymentSeqNo'].valid&&userform.controls['paymentSeqNo'].dirty\">\r\n          <span *ngIf=\"userform.hasError('specialSymbol','paymentSeqNo')\">核心支付流水号不支持特殊字符！</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n        <label>交付流水号：</label>\r\n        <input type=\"text\" pInputText formControlName=\"fulfillSeqNo\" name=\"fulfillSeqNo\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.fulfillSeqNo\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['fulfillSeqNo'].valid&&userform.controls['fulfillSeqNo'].dirty\">\r\n          <span *ngIf=\"userform.hasError('specialSymbol','fulfillSeqNo')\">核心支付流水号不支持特殊字符！</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 query-criteria\">\r\n      <div class=\"ui-g-4\">\r\n        <label>订单状态：</label>\r\n        <p-dropdown [options]=\"orderStatusId\" [(ngModel)]=\"orderQueryBean.orderStatusId\"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <label>支付状态：</label>\r\n        <p-dropdown [options]=\"orderPaymentStatus\" [(ngModel)]=\"orderQueryBean.orderPaymentStatus\"></p-dropdown>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <label>交付状态：</label>\r\n        <p-dropdown [options]=\"orderFulfillStatus\" [(ngModel)]=\"orderQueryBean.orderFulfillStatus\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 query-criteria\">\r\n      <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n        <div class=\"cont30 textAligin\">\r\n          机构号：\r\n        </div>\r\n        <div class=\"cont60\">\r\n          <input type=\"text\" pInputText formControlName=\"branchId\" name=\"branchId\" style=\"width:88%;\" [(ngModel)]=\"orderQueryBean.branchId\">\r\n        </div>\r\n        <div class=\"ui_re\">\r\n          <div class=\"clickspan\" (click)=\"openOrg('handle')\">\r\n            <a class=\"a-hand\">\r\n              <span>...</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4\" [formGroup]=\"userform\">\r\n        <label>账/卡号：</label>\r\n        <input type=\"text\" pInputText formControlName=\"settleAcctNo\" name=\"settleAcctNo\" style=\"width:50%;\" [(ngModel)]=\"orderQueryBean.settleAcctNo\">\r\n        <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['settleAcctNo'].valid&&userform.controls['settleAcctNo'].dirty\">\r\n          <span *ngIf=\"userform.hasError('specialSymbol','settleAcctNo')\">账/卡号不支持特殊字符！</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n          <label>交易金额：</label>\r\n          <input style=\"width:23%;\" type=\"text\" pInputText formControlName=\"minAmt\" name=\"minAmt\" [(ngModel)]=\"orderQueryBean.minAmt\"\r\n          /> --\r\n          <input style=\"width:23%;\" type=\"text\" pInputText formControlName=\"maxAmt\" name=\"maxAmt\" [(ngModel)]=\"orderQueryBean.maxAmt\"\r\n          />\r\n        </div>\r\n        <div class=\"ui-g-12\" [formGroup]=\"userform\">\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['minAmt'].valid&&userform.controls['minAmt'].dirty\">\r\n            <span *ngIf=\"userform.hasError('specialSymbol','minAmt')\">最小金额不支持特殊字符！</span>\r\n          </div>\r\n          <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['maxAmt'].valid&&userform.controls['maxAmt'].dirty\">\r\n            <span *ngIf=\"userform.hasError('specialSymbol','maxAmt')\">最大金额不支持特殊字符！</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 query-criteria\">\r\n      <div class=\"ui-g-4\">\r\n        <label>交易类型：</label>\r\n        <p-dropdown [options]=\"transactionType\" [(ngModel)]=\"orderQueryBean.transactionType\"></p-dropdown>\r\n        <!-- <input type=\"text\" pInputText [(ngModel)]=\"orderQueryBean.tranType\" /> -->\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <label>来源渠道：</label>\r\n        <p-dropdown [options]=\"salesChannelEnumId\" [(ngModel)]=\"orderQueryBean.salesChannelEnumId\"></p-dropdown>\r\n        <!-- <input type=\"text\" pInputText [(ngModel)]=\"orderQueryBean.salesChannelEnumId\" /> -->\r\n      </div>\r\n      <div class=\"ui-g-4\">\r\n        <label>银行标识：</label>\r\n        <p-dropdown [options]=\"bankId\" [(ngModel)]=\"orderQueryBean.bankId\"></p-dropdown>\r\n        <!-- <input type=\"text\" pInputText [(ngModel)]=\"orderQueryBean.orderItems.bankId\" /> -->\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-g-12 btn\">\r\n      <button pButton type=\"button\" label=\"查询\" class=\"queryBtn\" (click)=\"queryClick()\"></button>\r\n      <button pButton type=\"button\" label=\"重置\" class=\"resetBtn\" (click)=\"resetClick()\"></button>\r\n    </div>\r\n\r\n    <!--表格-->\r\n    <div class=\"ui-g-12 juery-result\">\r\n      <div class=\"table\">\r\n        <p-dataTable emptyMessage=\"没有查找到数据\" [value]=\"tableData\" [scrollable]=\"true\" [style]=\"{'text-align':'center'}\" scrollHeight=\"350px\">\r\n          <p-column field=\"number\" header='序号' [style]=\"{'width':'60px'}\">\r\n            <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <span>{{ri+1}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"orderId\" header='订单号' [style]=\"{'width':'130px'}\">\r\n            <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n              <a (click)=\"dispatchPage(car.orderId)\">{{car.orderId}}</a>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"contractNo\" header='合同号' [style]=\"{'width':'185px'}\"></p-column>\r\n          <p-column field=\"duebillNo\" header='借据号' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"settleAcctNo\" header='账/卡号' [style]=\"{'width':'220px'}\"></p-column>\r\n          <p-column field=\"CCY\" header='币种' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"orderAmount\" header='订单金额' [style]=\"{'width':'155px'}\"></p-column>\r\n          <p-column field=\"productId\" header='订购产品' [style]=\"{'width':'185px'}\"></p-column>\r\n          <p-column field=\"entryDate\" header='交易日期' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"salesChannelEnumId\" header='渠道标识' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"orderStatusId\" header='订单状态' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"branchId\" header='机构号' [style]=\"{'width':'85px'}\"></p-column>\r\n          <p-column field=\"userLoginId\" header='柜员号' [style]=\"{'width':'220px'}\"></p-column>\r\n          <p-column field=\"orderPaymentStatus\" header='支付状态' [style]=\"{'width':'140px'}\"></p-column>\r\n          <p-column field=\"orderFulfillStatus\" header='交付状态' [style]=\"{'width':'185px'}\"></p-column>\r\n          <p-column field=\"transactionType\" header='交易类型' [style]=\"{'width':'120px'}\">\r\n          </p-column>\r\n          <p-column field=\"bankId\" header='银行标识' [style]=\"{'width':'85px'}\">\r\n            <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.bankId | codeValuePie:bankId}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n      <p-paginator first={{first}} rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[5,10,20,30]\"\r\n        (onPageChange)=\"paginate($event)\"></p-paginator>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" (onHide)=\"onHideClose()\" class=\"contact-track-f\">\r\n  <p-header>员工列表</p-header>\r\n  <app-query-user-list *ngIf=\"personPage\" [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<p-dialog *ngIf='orgTreeDisplay' [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" (onHide)=\"onHideClose()\"\r\n  class=\"contact-track-f\">\r\n  <p-header>机构树</p-header>\r\n  <org-tree-component *ngIf='orgTreeDisplay' [inValue]=\"ownerOrgInValue\" (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.order-query {\n  margin-top: 10px;\n  padding: 0;\n  padding-bottom: 50px; }\n.order-query .bg {\n    background: #fdfdfd; }\n.order-query .query-criteria {\n    padding: 0 30px; }\n.order-query .query-criteria label {\n      display: inline-block;\n      width: 150px;\n      text-align: right; }\n.order-query /deep/ .ui-g-12 {\n    padding: 0px !important; }\n.order-query .btn {\n    text-align: center; }\n.order-query .btn .queryBtn,\n    .order-query .btn .resetBtn {\n      width: 100px;\n      margin: 30px; }\n.order-query .juery-result {\n    padding: 0 30px;\n    border-top: 1px solid #9e9d9d;\n    height: 400px; }\n.order-query .juery-result .addBtn {\n      width: 100px;\n      margin-top: 15px; }\n.order-query .juery-result .table {\n      border: 1px solid #bdbdbd;\n      text-align: center;\n      margin: 15px 0; }\n.order-query .juery-result .table .modify {\n        margin-right: 20px; }\n:host/deep/ .order-query .query-criteria .ui-dropdown {\n  width: 50% !important; }\n:host/deep/ .ui-cell-data {\n  word-wrap: break-word; }\n/*\r\n*日历组件的样式修改开始\r\n*/\n:host/deep/ .ui-datepicker select.ui-datepicker-year {\n  width: 50%;\n  font-size: 16px !important; }\n:host/deep/ .ui-datepicker select.ui-datepicker-month {\n  width: 40%;\n  font-size: 16px !important; }\n:host/deep/ .ui-button.ui-button-secondary.ui-state-default {\n  color: #ffffff; }\n/*\r\n*日历组件的样式修改结束\r\n*/\n.requireLabel {\n  margin-left: 150px; }\n.clickspan {\n  width: 40px;\n  height: 23px;\n  cursor: pointer;\n  position: absolute;\n  margin-left: -42px; }\n.ui_re {\n  width: 0px;\n  height: 0px;\n  float: left;\n  position: relative; }\n.clickspan {\n  width: 35px;\n  height: 23px;\n  cursor: pointer;\n  position: absolute;\n  margin-left: -42px; }\n.cont60 {\n  float: left;\n  width: 51%;\n  height: 25px; }\n.cont30 {\n  float: left;\n  width: 154px;\n  height: 25px;\n  line-height: 25px;\n  font-size: 14px; }\n.textAligin {\n  text-align: right;\n  line-height: 25px; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL1RyYWQvZGVhbC1jZW50ZXJwYWMvZGVhbC1jZW50ZXJwYWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3R6Yi9UcmFkL2RlYWwtY2VudGVycGFjL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXFRyYWRcXGRlYWwtY2VudGVycGFjXFxkZWFsLWNlbnRlcnBhYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG9CQUFvQixFQUFBO0FBSHRCO0lBS00sbUJBQW1CLEVBQUE7QUFMekI7SUFRTSxlQUFlLEVBQUE7QUFSckI7TUFVVSxxQkFBcUI7TUFDckIsWUFBWTtNQUNaLGlCQUFpQixFQUFBO0FBWjNCO0lBZ0JJLHVCQUF1QixFQUFBO0FBaEIzQjtJQW1CTSxrQkFBa0IsRUFBQTtBQW5CeEI7O01Bc0JVLFlBQVk7TUFDWixZQUFZLEVBQUE7QUF2QnRCO0lBNEJNLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0IsYUFBWSxFQUFBO0FBOUJsQjtNQWdDVSxZQUFZO01BQ1osZ0JBQWdCLEVBQUE7QUFqQzFCO01Bb0NVLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsY0FBYyxFQUFBO0FBdEN4QjtRQXdDYyxrQkFBa0IsRUFBQTtBQUtoQztFQUNFLHFCQUFxQixFQUFBO0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUE7QUFFdkI7O0NEVkM7QUNjRDtFQUNFLFVBQVM7RUFDVCwwQkFBMEIsRUFBQTtBQUc1QjtFQUNDLFVBQVM7RUFDVCwwQkFBMEIsRUFBQTtBQUczQjtFQUNDLGNBQWEsRUFBQTtBQUVkOztDRGJDO0FDaUJEO0VBQ0Usa0JBQWtCLEVBQUE7QUFFcEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFFdEI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTtBQUV0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTtBQUV0QjtFQUNJLFdBQVc7RUFDWCxVQUFTO0VBQ1QsWUFBWSxFQUFBO0FBRWhCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWUsRUFBQTtBQUVuQjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9UcmFkL2RlYWwtY2VudGVycGFjL2RlYWwtY2VudGVycGFjLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLm9yZGVyLXF1ZXJ5IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7IH1cbiAgLm9yZGVyLXF1ZXJ5IC5iZyB7XG4gICAgYmFja2dyb3VuZDogI2ZkZmRmZDsgfVxuICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIHtcbiAgICBwYWRkaW5nOiAwIDMwcHg7IH1cbiAgICAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIGxhYmVsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gIC5vcmRlci1xdWVyeSAvZGVlcC8gLnVpLWctMTIge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50OyB9XG4gIC5vcmRlci1xdWVyeSAuYnRuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAub3JkZXItcXVlcnkgLmJ0biAucXVlcnlCdG4sXG4gICAgLm9yZGVyLXF1ZXJ5IC5idG4gLnJlc2V0QnRuIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbjogMzBweDsgfVxuICAub3JkZXItcXVlcnkgLmp1ZXJ5LXJlc3VsdCB7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOWU5ZDlkO1xuICAgIGhlaWdodDogNDAwcHg7IH1cbiAgICAub3JkZXItcXVlcnkgLmp1ZXJ5LXJlc3VsdCAuYWRkQnRuIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7IH1cbiAgICAub3JkZXItcXVlcnkgLmp1ZXJ5LXJlc3VsdCAudGFibGUge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbjogMTVweCAwOyB9XG4gICAgICAub3JkZXItcXVlcnkgLmp1ZXJ5LXJlc3VsdCAudGFibGUgLm1vZGlmeSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxuXG46aG9zdC9kZWVwLyAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC51aS1kcm9wZG93biB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktY2VsbC1kYXRhIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XG5cbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnlvIDlp4tcclxuKi9cbjpob3N0L2RlZXAvIC51aS1kYXRlcGlja2VyIHNlbGVjdC51aS1kYXRlcGlja2VyLXllYXIge1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsgfVxuXG46aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aCB7XG4gIHdpZHRoOiA0MCU7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50OyB9XG5cbjpob3N0L2RlZXAvIC51aS1idXR0b24udWktYnV0dG9uLXNlY29uZGFyeS51aS1zdGF0ZS1kZWZhdWx0IHtcbiAgY29sb3I6ICNmZmZmZmY7IH1cblxuLypcclxuKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUuee7k+adn1xyXG4qL1xuLnJlcXVpcmVMYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNTBweDsgfVxuXG4uY2xpY2tzcGFuIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMjNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtNDJweDsgfVxuXG4udWlfcmUge1xuICB3aWR0aDogMHB4O1xuICBoZWlnaHQ6IDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uY2xpY2tzcGFuIHtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMjNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAtNDJweDsgfVxuXG4uY29udDYwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA1MSU7XG4gIGhlaWdodDogMjVweDsgfVxuXG4uY29udDMwIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNTRweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi50ZXh0QWxpZ2luIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4OyB9XG4iLCIvL+iuouWNleafpeivolxyXG4ub3JkZXItcXVlcnkge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDsgLy/mn6Xor6LmnaHku7ZcclxuICAuYmd7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZGZkZmQ7XHJcbiAgfVxyXG4gIC5xdWVyeS1jcml0ZXJpYSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgL2RlZXAvIC51aS1nLTEye1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5idG4ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC5xdWVyeUJ0bixcclxuICAgICAgLnJlc2V0QnRuIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICB9IC8v5p+l6K+i57uT5p6cXHJcbiAgLmp1ZXJ5LXJlc3VsdCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5ZTlkOWQ7XHJcbiAgICAgIGhlaWdodDo0MDBweDtcclxuICAgICAgLmFkZEJ0biB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50YWJsZSB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbiAgICAgICAgICAubW9kaWZ5IHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuOmhvc3QvZGVlcC8gLm9yZGVyLXF1ZXJ5IC5xdWVyeS1jcml0ZXJpYSAudWktZHJvcGRvd257XHJcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG59XHJcbi8v6KGo5qC85a2X5q+N44CB5pWw5a2X6Ieq5Yqo5o2i6KGMXHJcbjpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGF7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi8qXHJcbirml6Xljobnu4Tku7bnmoTmoLflvI/kv67mlLnlvIDlp4tcclxuKi9cclxuLy/pgInmi6nlubTku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXIteWVhcntcclxuICB3aWR0aDo1MCU7XHJcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLy/pgInmi6nmnIjku71cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGVwaWNrZXIgc2VsZWN0LnVpLWRhdGVwaWNrZXItbW9udGh7XHJcbiB3aWR0aDo0MCU7XHJcbiBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG4vL+a4heepuuOAgeS7iuWkqeS4pOS4quaMiemSrueahOWtl+S9k+minOiJslxyXG46aG9zdC9kZWVwLyAudWktYnV0dG9uLnVpLWJ1dHRvbi1zZWNvbmRhcnkudWktc3RhdGUtZGVmYXVsdHtcclxuIGNvbG9yOiNmZmZmZmY7XHJcbn1cclxuLypcclxuKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUuee7k+adn1xyXG4qL1xyXG5cclxuLnJlcXVpcmVMYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcbi5jbGlja3NwYW4ge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQycHg7XHJcbn1cclxuLnVpX3JlIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jbGlja3NwYW4ge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTQycHg7XHJcbn1cclxuLmNvbnQ2MCB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOjUxJTtcclxuICAgIGhlaWdodDogMjVweDtcclxufVxyXG4uY29udDMwIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE1NHB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLnRleHRBbGlnaW4ge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBsaW5lLWhlaWdodDogMjVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.ts ***!
  \***************************************************************************/
/*! exports provided: DealCenterpacComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealCenterpacComponent", function() { return DealCenterpacComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/order-query.bean */ "./src/app/pages/tzb/Trad/deal-centerpac/bean/order-query.bean.ts");
/* harmony import */ var _http_order_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../http/order.http.service */ "./src/app/pages/tzb/Trad/http/order.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { OrderHttpService } from './../../../http/order.http.service';







// import { bankId, salesChannelEnumId, transactionType } from '../../../constant/codeValue';
var DealCenterpacComponent = /** @class */ (function () {
    function DealCenterpacComponent(orderHttpService, confirmationService, commfunc, router, fb) {
        this.orderHttpService = orderHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.router = router;
        this.fb = fb;
        //表数据
        this.tableData = [];
        //下拉框
        this.label = []; //订单状态
        this.payStatus = []; //支付状态
        this.fulStatus = []; //交付状态
        this.bankId = []; //银行标识
        this.salesChannelEnumId = []; //来源渠道
        this.transactionType = []; //交易类型
        this.pageSize = 10;
        this.pageNumber = 1;
        // bean
        this.orderQueryBean = new _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_7__["OrderQueryBean"]();
        //模态框
        this.headerTitle = "详情"; //模态框的标题
        this.display = false; //模态框是否显示
        this.orgTreeDisplay = false;
        this.personPage = false;
        //修改的参数
        this.updateValue = [];
        this.orderPaymentStatus = [];
        this.orderFulfillStatus = [];
        this.first = 0;
        //提示信息
        this.msgs = [];
        this.orderStatusId = [];
        this.orderTypeId = [
            { label: "请选择", value: "" },
            { label: "销售订单", value: "SALES_ORDER" },
            { label: "采购订单", value: "PURCHASE_ORDER" },
        ];
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"]; //讲英文转化为中文
        this.queryStartDate = new Date();
        this.queryEndDate = new Date();
        this.codeValues(); //调用方法，获取全部码值
        console.log(this.code);
        this.bankId = this.code['bankNo'];
        this.salesChannelEnumId = this.code['salesChannelEnumId'];
        this.transactionType = this.code['tranType'];
        this.orderStatusId = [
            { label: "请选择", value: "" },
            { label: "已创建", value: "ORDER_CREATED" },
            // { label: "处理中", value: "ORDER_PROCESSING" },
            { label: "已核准", value: "ORDER_APPROVED" },
        ];
    }
    DealCenterpacComponent.prototype.ngOnInit = function () {
        this.queryClick();
        this.preSet();
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.queryClick();
            }
        };
    };
    //码值
    DealCenterpacComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    DealCenterpacComponent.prototype.openOrg = function (param) {
        this.orgTreeDisplay = !this.orgTreeDisplay;
        this.ownerOrgInValue = 'adjustOrg';
    };
    DealCenterpacComponent.prototype.onHideClose = function () {
        this.personPage = false;
        this.orgTreeDisplay = false;
    };
    DealCenterpacComponent.prototype.treeCall = function (param) {
        this.orgTreeDisplay = false;
        this.orderQueryBean.branchId = param.orgId;
    };
    DealCenterpacComponent.prototype.chooseWorker = function () {
        this.userInValue = '0000';
        this.personPage = !this.personPage;
    };
    DealCenterpacComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        if (item.length > 0) {
            this.orderQueryBean.userLoginId = item[0].tellerId;
        }
    };
    DealCenterpacComponent.prototype.preSet = function () {
        //表单校验
        this.userform = this.fb.group({
            'orderId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'queryStartDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'queryEndDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'tradPartyId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'branchId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'paymentSeqNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'fulfillSeqNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'settleAcctNo': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'userLoginId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'productId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'minAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'maxAmt': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]]))
        });
    };
    //查询
    DealCenterpacComponent.prototype.queryClick = function () {
        var _this = this;
        //查询时间
        this.orderQueryBean.START_DATE = this.commfunc.transDateN(this.queryStartDate);
        this.orderQueryBean.END_DATE = this.commfunc.transDateN(this.queryEndDate);
        this.orderHttpService.queryOrderListPac(this.orderQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.orderList;
                _this.total = data.pageParam.totalCount;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //详情按钮事件
    DealCenterpacComponent.prototype.dispatchPage = function (item) {
        this.router.navigate(['/pages/tzb/Trad/order-details'], { queryParams: { orderId: item } });
    };
    //分页
    DealCenterpacComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.pageNumber = currentPage;
        this.first = event.page * event.rows;
        //调用查询的方法
        this.queryClick();
    };
    //重置
    DealCenterpacComponent.prototype.resetClick = function () {
        this.orderQueryBean = new _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_7__["OrderQueryBean"]();
        this.queryStartDate = new Date();
        this.queryEndDate = new Date();
        this.orderQueryBean.pageParam.pageSize = 10;
        this.orderQueryBean.pageParam.pageNumber = 1;
    };
    //日期范围的处理
    DealCenterpacComponent.prototype.selectTime1 = function () {
        this.selectTime(1);
    };
    DealCenterpacComponent.prototype.selectTime2 = function () {
        this.queryStartDate.getHours() == new Date().getHours() ? this.selectTime(2) : this.selectTime(1);
    };
    DealCenterpacComponent.prototype.selectTime = function (a) {
        var _this = this;
        if (this.queryStartDate && this.queryEndDate) {
            if (this.queryStartDate > this.queryEndDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.queryStartDate = null;
                    _this.queryEndDate = null;
                });
            }
            var startTime = this.queryStartDate.getTime();
            var endTime = this.queryEndDate.getTime();
        }
    };
    DealCenterpacComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-deal-centerpac',
            template: __webpack_require__(/*! ./deal-centerpac.component.html */ "./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.html"),
            styles: [__webpack_require__(/*! ./deal-centerpac.component.scss */ "./src/app/pages/tzb/Trad/deal-centerpac/deal-centerpac.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], _http_order_http_service__WEBPACK_IMPORTED_MODULE_8__["OrdersHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_order_http_service__WEBPACK_IMPORTED_MODULE_8__["OrdersHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], DealCenterpacComponent);
    return DealCenterpacComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/exception-hand/bean/order-query.bean.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/exception-hand/bean/order-query.bean.ts ***!
  \************************************************************************/
/*! exports provided: OrderQueryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderQueryBean", function() { return OrderQueryBean; });
var OrderQueryBean = /** @class */ (function () {
    function OrderQueryBean() {
        this.orderHeader = {
            orderNo: '',
            productCode: '',
            queryStartDate: '',
            queryEndDate: '',
            appUserId: '',
            salesChannelEnumId: '',
            bankNo: '',
            orderStatus: '',
            minAmt: '',
            maxAmt: '',
            payStatus: '',
            fulStatus: '',
            paySeqNo: '',
            fulSeqNo: '',
            settleAcctNo: '',
            tranType: '',
            appBranchNo: '',
        };
        this.orderItems = {
            productCode: '',
            productId: '',
        };
        this.pageParam = {
            pageNumber: Number,
            pageSize: Number,
        };
    }
    return OrderQueryBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\r\n  <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n    <div class=\"filter-div\">\r\n      <div class=\"ui-grid-row form_item\">\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n            订单编号\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\" [formGroup]=\"userform\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" pInputText formControlName=\"orderId\" name=\"orderId\" [(ngModel)]=\"orderQueryBean.orderHeader.orderNo\"\r\n              />\r\n              <div class=\"requireLabel\" style=\"color:red;\" *ngIf=\"!userform.controls['orderId'].valid&&userform.controls['orderId'].dirty\">\r\n                <span *ngIf=\"userform.hasError('maxlength','orderId')\">订单编号不能超过20位!</span>\r\n                <span *ngIf=\"userform.hasError('specialSymbol','orderId')\">订单编号不支持特殊字符！</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n              经办柜员\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" style=\"width: 97%\" pInputText [(ngModel)]=\"orderQueryBean.orderHeader.appUserId\"\r\n              />\r\n              <div class=\"ui_re\">\r\n                <div class=\"clickspan\" (click)=\"chooseWorker()\">\r\n                  <a class=\"a-hand\">\r\n                      <span>...</span>\r\n                    </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-col-4\">\r\n          <div class=\"ui-grid-col-4 form_item_label\">\r\n              经办机构\r\n          </div>\r\n          <div class=\"ui-grid-col-8\">\r\n            <div style=\"width: 65%\">\r\n              <input class=\"ui-inputtext-new\" type=\"text\" style=\"width: 97%\" pInputText [(ngModel)]=\"orderQueryBean.orderHeader.appBranchNo\"\r\n              />\r\n              <div class=\"ui_re\">\r\n                <div class=\"clickspan\" (click)=\"openOrg('handle')\">\r\n                  <a class=\"a-hand\">\r\n                            <span>...</span>\r\n                          </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div> </div>\r\n        <div class=\"ui-grid-row form_item\">\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              订单状态\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" [options]=\"orderStatusId\" [(ngModel)]=\"orderQueryBean.orderHeader.orderStatus\"></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              查询时间\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\" [formGroup]=\"userform\">\r\n                <p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\"\r\n                  [locale]=\"ch\" showButtonBar=\"true\" showIcon=\"true\" styleClass=\"ui-calendar-new\" readonlyInput=\"true\" [(ngModel)]=\"queryStartDate\"\r\n                  (onSelect)=\"selectTime1()\" formControlName=\"queryStartDate\" name=\"queryStartDate\"></p-calendar>\r\n                至\r\n                <p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\"\r\n                  [locale]=\"ch\" showButtonBar=\"true\" showIcon=\"true\" styleClass=\"ui-calendar-new\" readonlyInput=\"true\" [(ngModel)]=\"queryEndDate\"\r\n                  (onSelect)=\"selectTime2()\" formControlName=\"queryEndDate\" name=\"queryEndDate\"></p-calendar>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n     \r\n      <div class=\"ui-grid-row form_item\" style=\"margin-bottom:0px\">\r\n        <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;\">\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"查询\" (click)=\"queryClick()\"></button>\r\n            </div>\r\n\r\n          </div>\r\n          <span>&nbsp;</span>\r\n          <div style=\"width: 90px;display: inline-block;\">\r\n            <div class=\"ui-btn2-div\">\r\n              <p class=\"place-div first\"></p>\r\n              <p class=\"place-div last\"></p>\r\n              <button pButton type=\"button\" label=\"重置\" (click)=\"resetClick()\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"table-div\" style=\"background-color:#fff;height:650px;\">\r\n      <p-panel styleClass=\"ui-panel-new\">\r\n        <u-dataTable [value]=\"tableData\" emptyMessage=\"没有查找到数据\" [scrollable]=\"true\" [style]=\"{'text-align':'left'}\" scrollHeight=\"500px\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'50px','padding-left':'5px'}\">\r\n            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n              {{i+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"orderNo\" header='订单号' [style]=\"{'width':'123px','padding-left':'5px'}\">\r\n            <!-- <ng-template let-car=\"rowData\" pTemplate=\"body\">\r\n              <a (click)=\"dispatchPage(car.orderNo)\">{{car.orderNo}}</a>\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column field=\"appBranchNo\" header='经办机构' [style]=\"{'width':'100px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"appUserId\" header='经办柜员' [style]=\"{'width':'100px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"orderStatus\" header='订单状态' [style]=\"{'width':'100px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"paymentStatus\" header='支付状态' [style]=\"{'width':'100px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"deliverStatus\" header='交付状态' [style]=\"{'width':'100px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"paySeqNo\" header='核心支付流水号' [style]=\"{'width':'115px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"deliverSeqNo\" header='核心交付流水号' [style]=\"{'width':'115px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"acctNo\" header='帐/卡号' [style]=\"{'width':'150px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"orderAmt\" header='订单金额' [style]=\"{'width':'117px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"oriTranDate\" header='交易日期' [style]=\"{'width':'113px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"productCode\" header='订购产品' [style]=\"{'width':'150px','padding-left':'5px'}\"></p-column>\r\n          <!--<p-column field=\"orderTypeId\" header='订单类型' [style]=\"{'width':'120px','padding-left':'5px'}\">\r\n             <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.orderTypeId | codeValuePie:orderTypeId}}</span>\r\n            </ng-template> \r\n          </p-column>-->\r\n          <p-column field=\"tranType\" header='交易类型' [style]=\"{'width':'85px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"sourceChanel\" header='来源渠道' [style]=\"{'width':'100px','padding-left':'5px'}\">\r\n            <!-- <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.salesChannelEnumId | codeValuePie:salesChannelEnumId}}</span>\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column field=\"bankSystemType\" header='银行标识' [style]=\"{'width':'100px','padding-left':'5px'}\">\r\n            <!-- <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.bankNo | codeValuePie:bankNo}}</span>\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column header=\"操作\" [style]=\"{'width':'50px','padding-left':'5px'}\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                  <a class=\"icon iconfont\" title=\"异常处理\" style=\"color:#bf66f6;font-size:20px;font-weight:700;cursor: pointer;padding: 0px 5px;\" (click)=\"deliveryOrder(col.orderNo)\">&#xe65c;</a>\r\n              </ng-template>\r\n           </p-column>\r\n        </u-dataTable>\r\n        <!-- <div class=\"ui-g-12\" style=\"background-color:#fff\"> -->\r\n        <div style=\"float:right;padding-top:50px\">\r\n          <u-paginator [first]=\"first\" rows={{pageSize}} totalRecords={{total}} pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></u-paginator>\r\n        </div>\r\n        <!-- </div> -->\r\n      </p-panel>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- 弹出框-->\r\n<!-- <p-dialog *ngIf=\"display\" [(visible)]=\"display\" modal=\"modal\" width=\"950\" [responsive]=\"true\" [positionTop]=10>\r\n  <p-header>\r\n    {{headerTitle}}\r\n  </p-header>\r\n  <div>\r\n    <order-query-detail *ngIf=\"showModel=='1'\" [inValue]=\"updateValue\" (outValue)=\"detailCall($event)\"></order-query-detail>\r\n  </div>\r\n</p-dialog> -->\r\n<!-- 提示信息 -->\r\n<p-dialog *ngIf=\"personPage\" [(visible)]=\"personPage\" modal=\"modal\" (onHide)=\"onHideClose()\" class=\"contact-track-f\">\r\n  <p-header>员工列表</p-header>\r\n  <app-query-user-list *ngIf=\"personPage\" [in-value]=\"userInValue\" (outValue)=\"perInfor($event)\"></app-query-user-list>\r\n</p-dialog>\r\n<p-dialog *ngIf='orgTreeDisplay' [(visible)]=\"orgTreeDisplay\" modal=\"modal\" [responsive]=\"true\" (onHide)=\"onHideClose()\"\r\n  class=\"contact-track-f\">\r\n  <p-header>机构树</p-header>\r\n  <org-tree-component *ngIf='orgTreeDisplay' [inValue]=\"ownerOrgInValue\" (outValue)=\"treeCall($event)\"></org-tree-component>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui_re {\n  width: 0px;\n  height: 0px;\n  float: right;\n  position: relative; }\n\n.clickspan {\n  width: 40px;\n  height: 28px;\n  cursor: pointer;\n  position: absolute;\n  margin-left: -42px;\n  border: 1px solid #e8e8e8;\n  line-height: 20px; }\n\n@media screen and (min-width: 100px) {\n  :host/deep/ .ui-calendar {\n    width: 44.7%;\n    min-width: 100px; } }\n\n:host/deep/ .ui-widget-header {\n  background-color: #f0f0f0; }\n\n.layout {\n  background-color: #F0F0F0;\n  color: #333; }\n\n.layout .filter-div {\n    background-color: #fff;\n    padding: 15px 0;\n    font-size: 14px; }\n\n.layout .table-div {\n    margin-top: 12px; }\n\n.layout :host /deep/ .form_item {\n    margin: 15px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL1RyYWQvZXhjZXB0aW9uLWhhbmQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcVHJhZFxcZXhjZXB0aW9uLWhhbmRcXGV4Y2VwdGlvbi1oYW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGQTtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQWtCckI7RUFDSTtJQUNJLFlBQVk7SUFDWixnQkFBZ0IsRUFBQSxFQUNwQjs7QUFFSjtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNBLHlCQUF5QjtFQUV6QixXQUFXLEVBQUE7O0FBSFg7SUFLSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGVBQWUsRUFBQTs7QUFQbkI7SUFXSSxnQkFBZ0IsRUFBQTs7QUFYcEI7SUFjSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9UcmFkL2V4Y2VwdGlvbi1oYW5kL2V4Y2VwdGlvbi1oYW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy/orqLljZXmn6Xor6JcclxuLy8gLm9yZGVyLXF1ZXJ5IHtcclxuLy8gICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4vLyAgIHBhZGRpbmc6IDA7XHJcbi8vICAgcGFkZGluZy1ib3R0b206IDUwcHg7IC8v5p+l6K+i5p2h5Lu2XHJcbi8vICAgLnF1ZXJ5LWNyaXRlcmlhIHtcclxuLy8gICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4vLyAgICAgICBsYWJlbCB7XHJcbi8vICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbi8vICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuLy8gICAgICAgfVxyXG4vLyAgIH1cclxuLy8gICAvZGVlcC8gLnVpLWctMTJ7XHJcbi8vICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuLy8gICAgIC51aS1nLTZ7XHJcbi8vICAgICAgICAgd2lkdGg6MzAlO1xyXG4vLyAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMyU7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5idG4ge1xyXG4vLyAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgIC5xdWVyeUJ0bixcclxuLy8gICAgICAgLnJlc2V0QnRuIHtcclxuLy8gICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuLy8gICAgICAgICAgIG1hcmdpbjogMzBweDtcclxuLy8gICAgICAgfVxyXG4gICAgICBcclxuLy8gICB9IC8v5p+l6K+i57uT5p6cXHJcbi8vICAgLmp1ZXJ5LXJlc3VsdCB7XHJcbi8vICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuLy8gICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5ZTlkOWQ7XHJcbi8vICAgICAgIGhlaWdodDo0MDBweDtcclxuLy8gICAgICAgLmFkZEJ0biB7XHJcbi8vICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbi8vICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC50YWJsZSB7XHJcbi8vICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4vLyAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgICAgICAgICAgbWFyZ2luOiAxNXB4IDA7XHJcbi8vICAgICAgICAgICAubW9kaWZ5IHtcclxuLy8gICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbi8vICAgICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmJne1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcclxuLy8gfVxyXG4vLyA6aG9zdC9kZWVwLyAub3JkZXItcXVlcnkgLnF1ZXJ5LWNyaXRlcmlhIC51aS1kcm9wZG93bntcclxuLy8gICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gLy/ooajmoLzlrZfmr43jgIHmlbDlrZfoh6rliqjmjaLooYxcclxuLy8gOmhvc3QvZGVlcC8gLnVpLWNlbGwtZGF0YXtcclxuLy8gICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbi8vIH1cclxuLy8gLypcclxuLy8gKuaXpeWOhue7hOS7tueahOagt+W8j+S/ruaUueW8gOWni1xyXG4vLyAqL1xyXG4vLyAvL+mAieaLqeW5tOS7vVxyXG4vLyA6aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci15ZWFye1xyXG4vLyAgIHdpZHRoOjUwJTtcclxuLy8gICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAvL+mAieaLqeaciOS7vVxyXG4vLyA6aG9zdC9kZWVwLyAudWktZGF0ZXBpY2tlciBzZWxlY3QudWktZGF0ZXBpY2tlci1tb250aHtcclxuLy8gIHdpZHRoOjQwJTtcclxuLy8gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC8v5riF56m644CB5LuK5aSp5Lik5Liq5oyJ6ZKu55qE5a2X5L2T6aKc6ImyXHJcbi8vIDpob3N0L2RlZXAvIC51aS1idXR0b24udWktYnV0dG9uLXNlY29uZGFyeS51aS1zdGF0ZS1kZWZhdWx0e1xyXG4vLyAgY29sb3I6I2ZmZmZmZjtcclxuLy8gfVxyXG4vLyAvKlxyXG4vLyAq5pel5Y6G57uE5Lu255qE5qC35byP5L+u5pS557uT5p2fXHJcbi8vICovXHJcblxyXG4vLyAucmVxdWlyZUxhYmVsIHtcclxuLy8gICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbi8vIH1cclxuLnVpX3JlIHtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2xpY2tzcGFuIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00MnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi8vIC5jb250NjAge1xyXG4vLyAgICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgICB3aWR0aDo1MSU7XHJcbi8vICAgICBoZWlnaHQ6IDI1cHg7XHJcbi8vIH1cclxuLy8gLmNvbnQzMCB7XHJcbi8vICAgICBmbG9hdDogbGVmdDtcclxuLy8gICAgIHdpZHRoOiAxNTRweDtcclxuLy8gICAgIGhlaWdodDogMjVweDtcclxuLy8gICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4vLyAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyB9XHJcbi8vIC50ZXh0QWxpZ2luIHtcclxuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbi8vIH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDoxMDBweCkge1xyXG4gICAgOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyIHtcclxuICAgICAgICB3aWR0aDogNDQuNyU7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgfVxyXG59XHJcbjpob3N0L2RlZXAvIC51aS13aWRnZXQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbn1cclxuLmxheW91dCB7XHJcbmJhY2tncm91bmQtY29sb3I6ICNGMEYwRjA7XHJcbi8vIGhlaWdodDogMTMwMHB4OyAgICBcclxuY29sb3I6ICMzMzM7XHJcbi5maWx0ZXItZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi50YWJsZS1kaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmZvcm1faXRlbSB7XHJcbiAgICBtYXJnaW46IDE1cHggMCAhaW1wb3J0YW50O1xyXG59IFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExceptionhandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExceptionhandComponent", function() { return ExceptionhandComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/@uisftech/common/service/validator */ "./src/app/@uisftech/common/service/validator.ts");
/* harmony import */ var _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bean/order-query.bean */ "./src/app/pages/tzb/Trad/exception-hand/bean/order-query.bean.ts");
/* harmony import */ var _http_order_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../http/order.http.service */ "./src/app/pages/tzb/Trad/http/order.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { OrderHttpService } from './../../../http/order.http.service';






// import { bankNo, salesChannelEnumId, tranType } from '../../../constant/codeValue';
var ExceptionhandComponent = /** @class */ (function () {
    function ExceptionhandComponent(orderHttpService, confirmationService, commfunc, fb, router) {
        this.orderHttpService = orderHttpService;
        this.confirmationService = confirmationService;
        this.commfunc = commfunc;
        this.fb = fb;
        this.router = router;
        this.orgTreeDisplay = false;
        this.personPage = false;
        //表数据
        this.tableData = [];
        //下拉框
        this.orderStatus = []; //订单状态
        this.payStatus = []; //支付状态
        this.fulStatus = []; //交付状态
        this.bankNo = []; //银行标识
        this.salesChannelEnumId = []; //来源渠道
        this.tranType = []; //交易类型
        this.orderStatusId = [
            { label: "请选择", value: "Exception_Handing" },
            { label: "已创建", value: "ORDER_CREATED" },
            // { label: "处理中", value: "ORDER_PROCESSING" },
            { label: "已核准", value: "ORDER_APPROVED" },
        ];
        this.orderTypeId = [
            { label: "请选择", value: "" },
            { label: "销售订单", value: "SALES_ORDER" },
            { label: "采购订单", value: "PURCHASE_ORDER" },
        ];
        // bean
        this.orderQueryBean = new _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_7__["OrderQueryBean"]();
        //模态框
        this.headerTitle = "详情"; //模态框的标题
        this.display = false; //模态框是否显示
        //修改的参数
        this.updateValue = [];
        this.first = 0;
        this.pageSize = 10;
        this.pageNumber = 1;
        //提示信息
        this.msgs = [];
        //日期
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"]; //讲英文转化为中文
        this.queryStartDate = new Date();
        this.queryEndDate = new Date();
        this.codeValues(); //调用方法，获取全部码值
        this.bankNo = this.code['bankNo'];
        this.salesChannelEnumId = this.code['salesChannelEnumId'];
        this.tranType = this.code['tranType'];
    }
    ExceptionhandComponent.prototype.ngOnInit = function () {
        this.orderQueryBean.orderHeader.orderStatus = 'Exception_Handing';
        this.preSet();
        //按回车键查询
        var _thiss = this;
        document.onkeydown = function (event) {
            if (event && event.keyCode === 13) {
                _thiss.queryClick();
            }
        };
    };
    //码值
    ExceptionhandComponent.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ExceptionhandComponent.prototype.dispatchPage = function (item) {
        this.router.navigate(['/pages/tzb/Trad/order-details'], { queryParams: { orderId: item, isext: 'Y' } });
    };
    ExceptionhandComponent.prototype.openOrg = function (param) {
        this.orgTreeDisplay = !this.orgTreeDisplay;
        this.ownerOrgInValue = 'adjustOrg';
    };
    ExceptionhandComponent.prototype.onHideClose = function () {
        this.personPage = false;
        this.orgTreeDisplay = false;
    };
    ExceptionhandComponent.prototype.treeCall = function (param) {
        this.orgTreeDisplay = false;
        this.orderQueryBean.orderHeader.appBranchNo = param.orgId;
    };
    ExceptionhandComponent.prototype.chooseWorker = function () {
        this.userInValue = '0000';
        this.personPage = !this.personPage;
    };
    ExceptionhandComponent.prototype.perInfor = function (item) {
        this.personPage = false;
        if (item.length > 0) {
            this.orderQueryBean.orderHeader.appUserId = item[0].tellerId;
        }
    };
    ExceptionhandComponent.prototype.preSet = function () {
        //表单校验
        this.userform = this.fb.group({
            'orderId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), app_uisftech_common_service_validator__WEBPACK_IMPORTED_MODULE_6__["specialSymbol"]])),
            'queryStartDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'queryEndDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'tradePartyId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            'userLoginId': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
        });
    };
    //查询
    ExceptionhandComponent.prototype.queryClick = function () {
        this.pageSize = 10;
        this.pageNumber = 1;
        this.first = 0;
        //调用查询的方法
        this.queryOrderListPac();
    };
    ExceptionhandComponent.prototype.queryOrderListPac = function () {
        var _this = this;
        //查询时间
        this.orderQueryBean.pageParam.pageSize = this.pageSize;
        this.orderQueryBean.pageParam.pageNumber = this.pageNumber;
        this.orderQueryBean.orderHeader.queryStartDate = this.commfunc.transDateN(this.queryStartDate);
        this.orderQueryBean.orderHeader.queryEndDate = this.commfunc.transDateN(this.queryEndDate);
        this.orderHttpService.queryOrderListPac(this.orderQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.tableData = data.orderList;
                _this.total = data.pageParam.totalCount;
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
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
    //异常处理
    ExceptionhandComponent.prototype.deliveryOrder = function (item) {
        var _this = this;
        var pams = {
            orderId: item,
        };
        this.orderHttpService.excOrderProcess(pams).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.msgs = [];
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
                _this.queryOrderListPac();
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
    //分页
    ExceptionhandComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.pageSize = event.rows * 1;
        //当前页
        var currentPage = event.page + 1;
        this.pageNumber = currentPage;
        this.first = event.page * event.rows;
        //调用查询的方法
        this.queryOrderListPac();
    };
    //重置
    ExceptionhandComponent.prototype.resetClick = function () {
        this.orderQueryBean = new _bean_order_query_bean__WEBPACK_IMPORTED_MODULE_7__["OrderQueryBean"]();
        this.queryStartDate = new Date();
        this.queryEndDate = new Date();
        this.orderQueryBean.orderHeader.orderStatus = 'Exception_Handing';
    };
    //日期范围的处理
    ExceptionhandComponent.prototype.selectTime1 = function () {
        this.selectTime(1);
    };
    ExceptionhandComponent.prototype.selectTime2 = function () {
        this.queryStartDate.getHours() == new Date().getHours() ? this.selectTime(2) : this.selectTime(1);
    };
    ExceptionhandComponent.prototype.selectTime = function (a) {
        var _this = this;
        if (this.queryStartDate && this.queryEndDate) {
            if (this.queryStartDate > this.queryEndDate) {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '开始日期不能大于结束日期' });
                setTimeout(function () {
                    _this.queryStartDate = null;
                    _this.queryEndDate = null;
                });
            }
        }
    };
    ExceptionhandComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-exception-hand',
            template: __webpack_require__(/*! ./exception-hand.component.html */ "./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.html"),
            styles: [__webpack_require__(/*! ./exception-hand.component.scss */ "./src/app/pages/tzb/Trad/exception-hand/exception-hand.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"], _http_order_http_service__WEBPACK_IMPORTED_MODULE_8__["OrdersHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"]]
        }),
        __metadata("design:paramtypes", [_http_order_http_service__WEBPACK_IMPORTED_MODULE_8__["OrdersHttpService"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_1__["ConfirmationService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_4__["Commfunc"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ExceptionhandComponent);
    return ExceptionhandComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/http/order.http.constant.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/http/order.http.constant.ts ***!
  \************************************************************/
/*! exports provided: API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/**
 * 订单接口
 */
var API = {
    test: "test",
    queryOrderList: "queryOrderList",
    queryOrderBasicInfo: "queryOrderBasicInfo",
    revokeOrdersExt: 'revokeOrdersExt',
    transactionOrderExceptionHandling: 'transactionOrderExceptionHandling',
    queryOrderListPac: 'queryOrderListPac',
    revokeOrderPac: 'revokeOrderPac',
    excOrderProcess: 'excOrderProcess',
};


/***/ }),

/***/ "./src/app/pages/tzb/Trad/http/order.http.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tzb/Trad/http/order.http.service.ts ***!
  \***********************************************************/
/*! exports provided: OrdersHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersHttpService", function() { return OrdersHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_http_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.http.constant */ "./src/app/pages/tzb/Trad/http/order.http.constant.ts");
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
 * 订单
 * 模块下的接口服务
 */
var OrdersHttpService = /** @class */ (function () {
    function OrdersHttpService(httpService) {
        this.httpService = httpService;
    }
    // http://xwzhuat.tzbtest.ins/ywsn/
    //测试10.1.60.91
    OrdersHttpService.prototype.Test = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_PRO"] + _order_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].test, params);
    };
    OrdersHttpService.prototype.queryOrderList = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_PRO"] + _order_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].queryOrderList, params);
    };
    OrdersHttpService.prototype.queryOrderBasicInfo = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_PRO"] + _order_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].queryOrderBasicInfo, params);
    };
    OrdersHttpService.prototype.revokeOrdersExt = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_PRO"] + _order_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].revokeOrdersExt, params);
    };
    OrdersHttpService.prototype.revokeOrderPac = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_PRO"] + _order_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].revokeOrderPac, params);
    };
    OrdersHttpService.prototype.transactionOrderExceptionHandling = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_PRO"] + _order_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].transactionOrderExceptionHandling, params);
    };
    OrdersHttpService.prototype.queryOrderListPac = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_PRO"] + _order_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].queryOrderListPac, params);
    };
    //异常处理
    OrdersHttpService.prototype.excOrderProcess = function (params) {
        params = this.httpService.handleParams(params);
        return this.httpService.post(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_3__["TZB_HTTP_PRO"] + _order_http_constant__WEBPACK_IMPORTED_MODULE_1__["API"].excOrderProcess, params);
    };
    OrdersHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], OrdersHttpService);
    return OrdersHttpService;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/order-details/order-details.bean.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/order-details/order-details.bean.ts ***!
  \********************************************************************/
/*! exports provided: OrderDetailBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailBean", function() { return OrderDetailBean; });
var OrderDetailBean = /** @class */ (function () {
    function OrderDetailBean() {
    }
    return OrderDetailBean;
}());



/***/ }),

/***/ "./src/app/pages/tzb/Trad/order-details/order-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/order-details/order-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"layout\">\r\n  <p-panel styleClass=\"ui-panel-new\">\r\n    <p-header>\r\n      筛查信息\r\n    </p-header>\r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n      <div class=\"filter-div\">\r\n        <div class=\"ui-grid-row form_item\">\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              订单编号\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div class=\"ui-inputgroup\">\r\n                <input type=\"text\" pInputText placeholder=\"请输入搜索内容\" class=\"ui-inputtext-new\" name=\"orderId\" [(ngModel)]=\"orderId\">\r\n                <button pButton type=\"button\" icon=\"icon iconfont tzbicon-search\" class=\"ui-inputgroup-button-new\" (click)=\"queryClick()\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </p-panel>\r\n</div>\r\n\r\n<div class=\"layout\">\r\n  <p-panel styleClass=\"ui-panel-new\">\r\n    <p-header>\r\n      订单基本信息\r\n    </p-header>\r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n      <div class=\"filter-div\">\r\n        <div class=\"ui-grid-row form_item\">\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              订单编号\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" pInputText readonly [(ngModel)]=\"orderDetailBean.orderId\" name=\"orderId\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              订单状态\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" id=\"dro\" disabled [options]=\"orderStatusIdss\" [(ngModel)]=\"orderDetailBean.orderStatusId\"\r\n                  name=\"orderTypeId\"></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              下单时间\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <p-calendar [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"1900:2200\" dateFormat=\"yy-mm-dd\" [showOtherMonths]=\"false\" disabled\r\n                  [locale]=\"ch\" showButtonBar=\"true\" showIcon=\"true\" styleClass=\"ui-calendar-new\" readonlyInput=\"true\" [(ngModel)]=\"orderDetailBean.entryDate\"></p-calendar>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-row form_item\">\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              订单金额\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" pInputText readonly [(ngModel)]=\"orderDetailBean.orderAmount\" name=\"orderAmount\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              订单类型\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" id=\"dro\" disabled [options]=\"orderTypeIds\" [(ngModel)]=\"orderDetailBean.orderTypeId\"\r\n                  name=\"orderStatusId\"></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              账号\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" pInputText readonly [(ngModel)]=\"orderDetailBean.cardNumber\" name=\"cardNumber\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-row form_item\">\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              下单客户\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" pInputText readonly [(ngModel)]=\"orderDetailBean.purchaseCustomerId\" name=\"purchaseCustomerId\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              操作人员\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" pInputText readonly [(ngModel)]=\"orderDetailBean.userLoginId\" name=\"userLoginId\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              经办机构\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" pInputText readonly [(ngModel)]=\"orderDetailBean.tradePartyId\" name=\"tradePartyId\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui-grid-row form_item\">\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              销售店铺\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" pInputText readonly [(ngModel)]=\"orderDetailBean.productStoreId\" name=\"productStoreId\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              销售渠道\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <input class=\"ui-inputtext-new\" type=\"text\" pInputText readonly [(ngModel)]=\"orderDetailBean.salesChannelEnumId\" name=\"salesChannelEnumId\"\r\n                />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              订单币种\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" id=\"dro\" disabled [options]=\"currencyUomIdss\" [(ngModel)]=\"orderDetailBean.currencyUomId\"\r\n                  name=\"currencyUomId\"></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </p-panel>\r\n</div>\r\n<div class=\"layout\">\r\n  <p-panel styleClass=\"ui-panel-new\">\r\n    <p-header>\r\n      订单支付信息\r\n      <div style=\"display: inline-block;float:right;cursor: pointer;width: 38%;\">\r\n        <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;float:right;\">\r\n          <div style=\"width: 90px;display: inline-block;\" *ngIf=\"isextS\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\" style=\" top: 9px;\"></p>\r\n              <p class=\"place-div last\" style=\"right: -7px;top: 9px;\"></p>\r\n              <button pButton type=\"button\" style=\"width: 72px;\" label=\"订单撤销\" (click)=\"cancelOrder()\"></button>\r\n            </div>\r\n          </div>\r\n          <span *ngIf=\"isext\">&nbsp;</span>\r\n          <div style=\"width: 90px;display: inline-block;\" *ngIf=\"isextS=='Y'\">\r\n            <div class=\"ui-btn1-div\">\r\n              <p class=\"place-div first\" style=\" top: 9px;\"></p>\r\n              <p class=\"place-div last\" style=\"right: -24px;top: 9px;\"></p>\r\n              <button pButton type=\"button\" style=\"width: 90px;\" label=\"订单异常处理\" (click)=\"deliveryOrder()\"></button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </p-header>\r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n      <div class=\"table-div\" style=\"background-color:#fff;height:200px;\">\r\n        <div class=\"ui-grid-row form_item\" style=\"margin: 0px 0;\">\r\n          <div class=\"ui-grid-col-4\">\r\n            <div class=\"ui-grid-col-4 form_item_label\">\r\n              支付状态\r\n            </div>\r\n            <div class=\"ui-grid-col-8\">\r\n              <div style=\"width: 65%\">\r\n                <p-dropdown styleClass=\"ui-dropdown-new\" id=\"dro\" disabled [options]=\"paymentStatuss\" [(ngModel)]=\"paymentStatus\" name=\"paymentStatus\"></p-dropdown>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <p-panel styleClass=\"ui-panel-new\">\r\n          <u-dataTable [value]=\"arrayList\" emptyMessage=\"没有查找到数据\" [scrollable]=\"true\" [style]=\"{'text-align':'left'}\" scrollHeight=\"400px\">\r\n            <p-column header=\"序号\" [style]=\"{'width':'100px','padding-left':'5px'}\">\r\n              <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n                {{i+1}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"cardNumber\" header=\"卡号\" [style]=\"{'width':'150px','padding-left':'5px'}\"></p-column>\r\n            <p-column field=\"paymentStatus\" header=\"支付状态\" [style]=\"{'width':'150px','padding-left':'5px'}\">\r\n              <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                <span>{{col.paymentStatus | codeValuePie:paymentStatuss}}</span>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"paymentStatusDescription\" header=\"支付状态描述\" [style]=\"{'width':'150px','padding-left':'5px'}\"></p-column>\r\n            <p-column field=\"paymentPurpose\" header=\"支付目的\" [style]=\"{'width':'150px','padding-left':'5px'}\"></p-column>\r\n            <p-column field=\"paymentAmount\" header=\"支付金额\" [style]=\"{'width':'150px','padding-left':'5px'}\"></p-column>\r\n            <p-column field=\"remainingAmount\" header=\"支付剩余金额\" [style]=\"{'width':'150px','padding-left':'5px'}\"></p-column>\r\n          </u-dataTable>\r\n        </p-panel>\r\n      </div>\r\n    </div>\r\n  </p-panel>\r\n</div>\r\n<div class=\"layout\">\r\n  <p-panel styleClass=\"ui-panel-new\">\r\n    <p-header>\r\n      订单交付信息\r\n    </p-header>\r\n    <div class=\"ui-grid ui-grid-responsive ui-grid-pad ui-fluid\">\r\n      <div class=\"table-div\" style=\"background-color:#fff;height:200px;\">\r\n        <u-dataTable [value]=\"arrayList1\" emptyMessage=\"没有查找到数据\" [scrollable]=\"true\" [style]=\"{'text-align':'left'}\" scrollHeight=\"400px\">\r\n          <p-column header=\"序号\" [style]=\"{'width':'100px','padding-left':'5px'}\">\r\n            <ng-template let-i=\"rowIndex\" pTemplate=\"body\">\r\n              {{i+1}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"orderItemFulfillStatusId\" header=\"订单交付状态\" [style]=\"{'width':'150px','padding-left':'5px'}\">\r\n            <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              <span>{{col.orderItemFulfillStatusId | codeValuePie:orderFulfillStatuss}}</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"orderFulfillmentId\" header=\"订单交付标识\" styleClass=\"One-line-ellipsis align-center \" [style]=\"{'width':'150px','padding-left':'5px'}\"></p-column>\r\n          <p-column field=\"fulfillmentErrorMsg\" header=\"交付失败原因\" [style]=\"{'width':'150px','padding-left':'5px'}\"> </p-column>\r\n        </u-dataTable>\r\n      </div>\r\n      <div class=\"ui-grid-row form_item\" style=\"margin-bottom:0px\">\r\n          <div class=\"ui-grid-col-4 ui-md-offset-4\" style=\"text-align: center;\">\r\n            <div style=\"width: 90px;display: inline-block;\">\r\n              <div class=\"ui-btn1-div\">\r\n                <p class=\"place-div first\"></p>\r\n                <p class=\"place-div last\"></p>\r\n                <button pButton type=\"button\" label=\"返回\" (click)=\"gouback()\"></button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </p-panel>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/order-details/order-details.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/order-details/order-details.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout {\n  background-color: #F0F0F0;\n  color: #333; }\n  .layout .filter-div {\n    background-color: #fff;\n    padding: 15px 0;\n    font-size: 14px; }\n  .layout .table-div {\n    margin-top: 12px; }\n  .layout :host /deep/ .form_item {\n    margin: 15px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL1RyYWQvb3JkZXItZGV0YWlscy9EOlxcd29ya0ZvclJ1bkhvXFwyMDE5MDgwNVR6X25qX0RMU1xcZnJvbnRfZW5kL3NyY1xcYXBwXFxwYWdlc1xcdHpiXFxUcmFkXFxvcmRlci1kZXRhaWxzXFxvcmRlci1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNVTTtFQUNFLHlCQUF5QjtFQUV6QixXQUFXLEVBQUE7RUFIYjtJQUtNLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZUFBZSxFQUFBO0VBUHJCO0lBV00sZ0JBQWdCLEVBQUE7RUFYdEI7SUFjTSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9UcmFkL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbiAgICAgIC8vIC8v5re75YqgXHJcbiAgICAgIC8vIC5jb250ZW50IHtcclxuICAgICAgLy8gICAuZmlyc3QtcXVlcnkge1xyXG4gICAgICAvLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICAuY2VudGVye3BhZGRpbmctbGVmdDo0JTtcclxuICAgICAgLy8gICAgIHBhZGRpbmctdG9wOiAzMHB4IDtcclxuICAgICAgLy8gICAgICAgICAgIGhlaWdodDogMTAwUFg7XHJcbiAgICAgIC8vICAgICAgICAgd2lkdGg6IDEwMCU7IH1cclxuICAgICAgLy8gICAgLmNlbnRlcnN7XHJcbiAgICAgIC8vICAgICBwYWRkaW5nLWxlZnQ6NCU7XHJcbiAgICAgIC8vICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLy8gICAgfVxyXG4gICAgICAvLyAgICAub3BlcmF0aW9uc3tcclxuICAgICAgLy8gICAgICBmbG9hdDpyaWdodDtcclxuICAgICAgLy8gICAgICBtYXJnaW4tdG9wOiAtMzNweDtcclxuICAgICAgLy8gICAgfVxyXG4gICAgICAvLyAgICAuanVlcnktcmVzdWx0IHtcclxuICAgICAgLy8gICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgLy8gICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOWU5ZDlkO1xyXG4gICAgICAvLyAgICAgLmFkZEJ0biB7XHJcbiAgICAgIC8vICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAvLyAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICAudGFibGUge1xyXG4gICAgICAvLyAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgIC8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAvLyAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAvLyAgICAgICAgIC5tb2RpZnkge1xyXG4gICAgICAvLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vICAgLmlucHV0Z3JvdXB7XHJcbiAgICAgIC8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgICA6aG9zdC9kZWVwLyAubGFiZWwge1xyXG4gICAgICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICB3aWR0aDogMjE1cHg7XHJcbiAgICAgIC8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgLy8gICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIC5sYWJlbF8xIHtcclxuICAgICAgLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLy8gICAgIHdpZHRoOiAxNyU7XHJcbiAgICAgIC8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgLmxhYmVsMSB7XHJcbiAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC8vICAgICB3aWR0aDogMTElO1xyXG4gICAgICAvLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIC5sYWJlbDIge1xyXG4gICAgICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAvLyAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICAucmVxdWlyZUxhYmVsIHtcclxuICAgICAgLy8gICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAvLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICAud2Vha2VuLXJlc2V0e1xyXG4gICAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgLnJlc2V0e1xyXG4gICAgICAvLyAgICAgYmFja2dyb3VuZDojYmRiZGJkO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICBpbnB1dCB7XHJcbiAgICAgIC8vICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIHRleHRhcmVhIHtcclxuICAgICAgLy8gICAgIHdpZHRoOiA3MC41JSAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICAucWJ1dHRvbnMge1xyXG4gICAgICAvLyAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgLy8gICAgIGhlaWdodDogMjVweDtcclxuICAgICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XHJcbiAgICAgIC8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAvLyAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vICAgICAuaGFsZiB7XHJcbiAgICAgIC8vICAgICAgIHdpZHRoOiA0OCU7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vICAgICB0b3A6IDA7XHJcbiAgICAgIC8vICAgICByaWdodDogMTUlO1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICAubGFiZWwge1xyXG4gICAgICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAvLyAgICAgd2lkdGg6IDM0JTtcclxuICAgICAgLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICAubGFiZWwxIHtcclxuICAgICAgLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLy8gICAgIHdpZHRoOiAxMSU7XHJcbiAgICAgIC8vICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgLmxhYmVsMiB7XHJcbiAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC8vICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAvLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIC5yZXF1aXJlTGFiZWwge1xyXG4gICAgICAvLyAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIC8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIC8vICAgfSAvLyAgOmhvc3QvZGVlcC8gLnNwZTEgLnVpLWRyb3Bkb3duIHtcclxuICAgICAgLy8gICAvLyAgIHdpZHRoOiAyNC41JSAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgIC8vIH1cclxuICAgICAgLy8gICAvLyAgOmhvc3QvZGVlcC8gLnNwZTIgLnVpLWRyb3Bkb3duIHtcclxuICAgICAgLy8gICAvLyAgIHdpZHRoOiAyNC41JSAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgIC8vICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgLy8gfVxyXG4gICAgICAvLyAgIC5iYXNlLXRhYmxlIHtcclxuICAgICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgLy8gICB9IC8vICA6aG9zdC9kZWVwLyAudWktZHJvcGRvd24ge1xyXG4gICAgICAvLyAgIC8vICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgIC8vIH1cclxuICAgICAgLy8gICAubW9kdWxlIHtcclxuICAgICAgLy8gICAgIC5yb3dMb2NhdG9uIHtcclxuICAgICAgLy8gICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgLy8gICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICAgIC5idG5Mb2NhdGlvbiB7XHJcbiAgICAgIC8vICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICAgOmhvc3QvZGVlcC8gLmludmVzdGlnYXRvckRpYWxvZyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICAgIC8vICAgICAgIHdpZHRoOiA4NSUgIWltcG9ydGFudDtcclxuICAgICAgLy8gICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICBbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAvLyAgICAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICAucXVlcnkge1xyXG4gICAgICAvLyAgICAgICAudWktZy00IHtcclxuICAgICAgLy8gICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgLy8gICAgICAgfVxyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgICAgIDpob3N0L2RlZXAvIC51aS1jZWxsLWRhdGEge1xyXG4gICAgICAvLyAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICAgOmhvc3QvZGVlcC8gLnVpLWRpYWxvZy51aS1zaGFkb3cge1xyXG4gICAgICAvLyAgICAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgICAgLy8gICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICBbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgICAvLyAgICAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICAgOmhvc3QvZGVlcC8gLnVpLWcge1xyXG4gICAgICAvLyAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgICAgfVxyXG4gICAgICAvLyAgICAgIDpob3N0L2RlZXAvIC51aS1wYW5lbCAudWktcGFuZWwtdGl0bGViYXIge1xyXG4gICAgICAvLyAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICAgOmhvc3QvZGVlcC8gLnVpLXBhbmVsIC51aS1wYW5lbC1jb250ZW50IHtcclxuICAgICAgLy8gICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICB9XHJcbiAgICAgIC8vICAgICAgOmhvc3QvZGVlcC8gLnVpLXdpZGdldC1vdmVybGF5IHtcclxuICAgICAgLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmNyFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICAgIG9wYWNpdHk6IC44ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICAgIHotaW5kZXg6IDAgIWltcG9ydGFudDtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAgIC8vICAgICAgIC8vIOafpeivouiMg+WbtCDml6XmnJ/nu4Tku7ZcclxuICAgICAgLy8gICAgICAgIDpob3N0L2RlZXAvIC5zdW1tYXJ5LWNvbnRhY3QtY2FsZW5kYXIgLnVpLWNhbGVuZGFyIHtcclxuICAgICAgLy8gICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAvLyAgICAgICB9XHJcbiAgICAgIC8vICAgICAgICA6aG9zdCAvZGVlcC8gLmNvbnRhY3RQcm9wZG93bmEgLnVpLWRyb3Bkb3duIHtcclxuICAgICAgLy8gICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICAgIH1cclxuICAgICAgLy8gICAgICAgLnN1bW1hcnljb250YWN0SW5wdXQge1xyXG4gICAgICAvLyAgICAgICAgIHdpZHRoOiA2OS41JSAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgICAgICB9XHJcbiAgICAgIC8vICAgICAgIC50cmFja1N1Y29udGFjdElucHV0IHtcclxuICAgICAgLy8gICAgICAgICB3aWR0aDogNzYlICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgICAgIH1cclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICBcclxuICAgICAgLy8gLmJ0biB7XHJcbiAgICAgIC8vICAgdGV4dC1hbGlnbjogY2VudGVyOyAvLyBidXR0b24ge1xyXG4gICAgICAvLyAgIC8vICAgbWFyZ2luOiAzMHB4IDMwcHggMDtcclxuICAgICAgLy8gICAvLyB9XHJcbiAgICAgIC8vIH1cclxuICBcclxuICAgICAgLy8gIDpob3N0L2RlZXAvYm9keSAudWktZHJvcGRvd24gLnVpLWRyb3Bkb3duLWxhYmVsLnVpLWlucHV0dGV4dCB7XHJcbiAgICAgIC8vICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcclxuICAgICAgLy8gfVxyXG4gIFxyXG4gICAgICAvLyAuYmxvY2tXaWR0aCB7XHJcbiAgICAgIC8vICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLy8gICBwYWRkaW5nOiAzcHggMDtcclxuICAgICAgLy8gfVxyXG4gIFxyXG4gICAgICAvLyAuc3VydmV5T3BpbmlvbiB7XHJcbiAgICAgIC8vICAgd2lkdGg6IDk3NHB4O1xyXG4gICAgICAvLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLy8gICBwYWRkaW5nOiAzcHggMDtcclxuICAgICAgLy8gICB0ZXh0YXJlYSB7XHJcbiAgICAgIC8vICAgICB3aWR0aDogNzMzcHg7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9XHJcbiAgXHJcbiAgICAgIC8vIC5hbGwge1xyXG4gICAgICAvLyAgIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gICAgICAvLyB9XHJcbiAgXHJcbiAgICAgIC8vIC5sb2FuQXNjcmlwdGlvbiB7XHJcbiAgICAgIC8vICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC8vICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgIC8vIH1cclxuICBcclxuICAgICAgLy8gLnJlamVjdGlvbk5vdGUgdGV4dGFyZWEge1xyXG4gICAgICAvLyAgIHdpZHRoOiA3MzNweDtcclxuICAgICAgLy8gfVxyXG4gIFxyXG4gICAgICAvLyAgOmhvc3QvZGVlcC8gLnVpLWRyb3Bkb3duIHtcclxuICAgICAgLy8gICB3aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgLy8gfVxyXG4gIFxyXG4gICAgICAvLyAgOmhvc3QvZGVlcC8udWktY2FsZW5kYXIge1xyXG4gICAgICAvLyAgIHdpZHRoOjI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vIH1cclxuICBcclxuICAgICAgLy8gIDpob3N0L2RlZXAvIGlucHV0W3BJbnB1dFRleHRdIHtcclxuICAgICAgLy8gICB3aWR0aDoyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAvLyB9XHJcbiAgXHJcbiAgICAgIC8vICA6aG9zdC9kZWVwLyAucmVqZWN0aW9uTm90ZSAudWktaW5wdXR0ZXh0IHtcclxuICAgICAgLy8gICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xyXG4gICAgICAvLyAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgICAvLyAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0NnB4KTtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH1cclxuICBcclxuICAgICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMjgwcHgpIHtcclxuICAgICAgLy8gICAuYmxvY2tXaWR0aCB7XHJcbiAgICAgIC8vICAgICB3aWR0aDogNDU1cHg7XHJcbiAgICAgIC8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIC8vICAgICBwYWRkaW5nOiAzcHggMDtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgLnN1cnZleU9waW5pb24ge1xyXG4gICAgICAvLyAgICAgd2lkdGg6IDkxM3B4O1xyXG4gICAgICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAvLyAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgIC8vICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIC8vICAgICAgIHdpZHRoOiA2ODhweDtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgLmFsbCB7XHJcbiAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gICAubG9hbkFzY3JpcHRpb24ge1xyXG4gICAgICAvLyAgICAgd2lkdGg6IDg0MHB4O1xyXG4gICAgICAvLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAvLyAgICAgcGFkZGluZzogM3B4IDA7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgIC5yZWplY3Rpb25Ob3Rle1xyXG4gICAgICAvLyAgICAgd2lkdGg6IDkyMXB4O1xyXG4gICAgICAvLyAgICAgdGV4dGFyZWF7XHJcbiAgICAgIC8vICAgICAgIHdpZHRoOiA2ODhweDtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gICB9IFxyXG4gICAgICAvLyAgICA6aG9zdC9kZWVwLyAudWktZHJvcGRvd24ge1xyXG4gICAgICAvLyAgICAgd2lkdGg6MjUwcHggIWltcG9ydGFudDtcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vICAgIDpob3N0L2RlZXAvLnVpLWNhbGVuZGFyIHtcclxuICAgICAgLy8gICAgIHdpZHRoOjI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyAgICA6aG9zdC9kZWVwLyBpbnB1dFtwSW5wdXRUZXh0XSB7XHJcbiAgICAgIC8vICAgICB3aWR0aDoyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gIFxyXG4gICAgICAvLyAudWktZy0xMiB7XHJcbiAgICAgIC8vICAgcGFkZGluZzogMDtcclxuICAgICAgLy8gfVxyXG4gIFxyXG4gICAgICAvLyAgOmhvc3QvZGVlcC8gLnVpLWNhbGVuZGFyLnVpLWNhbGVuZGFyLXctYnRuIGlucHV0IHtcclxuICAgICAgLy8gICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgLy8gfSAvL+iSmeWxglxyXG4gICAgICAvLyAucG9wV2luZG93IHtcclxuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzFiYmJiO1xyXG4gICAgICAvLyAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvLyAgIGhlaWdodDogMTAwJTtcclxuICAgICAgLy8gICBsZWZ0OiA2MnB4O1xyXG4gICAgICAvLyAgIHRvcDogNDdweDtcclxuICAgICAgLy8gICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgIC8vICAgei1pbmRleDogODg4ODg4ODg4O1xyXG4gICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZVxyXG4gICAgICAvLyB9XHJcbiAgXHJcbiAgICAgIC8vIC5tYXNrTGF5ZXIge1xyXG4gICAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgLy8gICB3aWR0aDogNTUwcHg7XHJcbiAgICAgIC8vICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgLy8gICBsZWZ0OiAwO1xyXG4gICAgICAvLyAgIHRvcDogMDtcclxuICAgICAgLy8gICBib3R0b206IDA7XHJcbiAgICAgIC8vICAgcmlnaHQ6IDA7XHJcbiAgICAgIC8vICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAvLyAgIHotaW5kZXg6IDk5OTk5OTk5OTtcclxuICAgICAgLy8gfVxyXG4gIFxyXG4gICAgICAvLyAgOmhvc3QvZGVlcC8gLnVpLXdpZGdldC1oZWFkZXIge1xyXG4gICAgICAvLyAgIGJhY2tncm91bmQtY29sb3I6ICNlNGVhZWM7XHJcbiAgICAgIC8vIH1cclxuICBcclxuICAgICAgLy8gIDpob3N0L2RlZXAvIC51aS1wcm9ncmVzc2JhciB7XHJcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogIzE5YjBjODtcclxuICAgICAgLy8gICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgLy8gfVxyXG4gIFxyXG4gICAgICAvLyAgOmhvc3QvZGVlcC8udWktbWVzc2FnZXMudWktbWVzc2FnZXMtaW5mbyB7XHJcbiAgICAgIC8vICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgdG9wOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAvLyAgIHJpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vICAgd2lkdGg6IDQyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLmxheW91dCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YwRjBGMDtcclxuICAgICAgICAvLyBoZWlnaHQ6IDEzMDBweDsgICAgXHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgLmZpbHRlci1kaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAudGFibGUtZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOmhvc3QgL2RlZXAvIC5mb3JtX2l0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH0gXHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/Trad/order-details/order-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/Trad/order-details/order-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_order_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http/order.http.service */ "./src/app/pages/tzb/Trad/http/order.http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _order_details_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-details.bean */ "./src/app/pages/tzb/Trad/order-details/order-details.bean.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { ApplyMessageBean } from './apply-message.bean';
// import { ParentChildCommunicationService } from '../common/service/parent-child-comm.service';
// import { CreditCcmService } from '../common/http/credit-ccm.http.service';





var OrderDetailsComponent = /** @class */ (function () {
    function OrderDetailsComponent(orderHttpService, commfunc, routerInfo, router) {
        var _this = this;
        this.orderHttpService = orderHttpService;
        this.commfunc = commfunc;
        this.routerInfo = routerInfo;
        this.router = router;
        this.orderDetailBean = new _order_details_bean__WEBPACK_IMPORTED_MODULE_4__["OrderDetailBean"]();
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_5__["CALENDAR_CN"]; //讲英文转化为中文
        this.pageNumber = 1;
        this.pageSize = 10;
        this.salesChannelEnumIdss = [];
        this.arrayList = [];
        this.arrayList1 = [];
        this.isext = false;
        this.paymentStatuss = [
            { label: "请选择", value: "" },
            { label: "请选择", value: "" },
            // { value: 'PAYMENT_RECEIVED', label: '付款已收到' },
            // { value: 'PAYMENT_NOT_RECEIVED', label: '付款未收到' },
            { value: 'PAYMENT_CANCELLED', label: '支付已取消' },
            // { value: 'PAY_PART_CANCELLED', label: '支付部分取消' },
            // { value: 'PAYMENT_REFUNDED', label: '支付已退款' },
            { value: 'PAYMENT_AUTHORIZED', label: '支付已授权' },
            { value: 'PAYMENT_NOT_AUTH', label: '支付未授权' },
            { value: 'PAYMENT_SETTLED', label: '已支付' },
            // { value: 'PAYMENT_DECLINED', label: '支付已搁置' },
            { value: 'PAYMENT_REVERSED', label: '支付已冲正' },
            { value: 'PAYMENT_REVERSED_UNKNOW', label: '支付冲正未知' },
            { value: 'PAYMENT_UNKNOW', label: '支付状态未知' },
        ];
        this.orderFulfillStatuss = [
            { label: "请选择", value: "" },
            { value: 'FULFILL_CREATED', label: '未交付' },
            { value: 'FULFILL_COMPLETED', label: '已交付' },
            { value: 'FULFILL_FAILED', label: '交付失败' },
            { value: 'FULFILL_CANCELLED', label: '交付已取消' },
            { value: 'FULFILL_REVERSED', label: '交付已冲正' },
            { value: 'FULFILL_REVERSED_UNKNOW', label: '交付冲正未知' },
            { value: 'FULFILL_UNKNOW', label: '交付状态未知' },
        ];
        this.orderStatusIdss = [
            { label: "请选择", value: "" },
            { label: "已创建", value: "ORDER_CREATED" },
            { label: "处理中", value: "ORDER_PROCESSING" },
            { label: "已核准", value: "ORDER_APPROVED" },
            { label: "已扣留", value: "ORDER_HOLD" },
            { label: "已完成", value: "ORDER_COMPLETED" },
            { label: "已取消", value: "ORDER_CANCELLED" },
            { label: "已拒绝", value: "ORDER_REJECTED" },
            { label: "已完成", value: "ORDER_APPROVED_FAIL" },
            { label: "已撤销", value: "ORDER_REVOKED" },
            { label: "状态未知", value: "ORDER_UN" },
        ];
        this.currencyUomIdss = [
            { label: "请选择", value: "" },
            { value: 'CNY', label: '人民币' },
            { value: 'USD', label: '美元' },
            { value: 'HKD', label: '港币' },
            { value: 'EUR', label: '欧元' },
            { value: 'JPY', label: '日元' },
            { value: 'GBP', label: '英镑' },
            { value: 'AUD', label: '澳大利亚元' },
            { value: 'CAD', label: '加拿大元' },
            { value: 'CHF', label: '瑞士法郎' },
            { value: 'DEM', label: '德国马克' },
            { value: 'SGD', label: '新加坡元' },
            { value: 'BEF', label: '比利时法郎' },
            { value: 'MOP', label: '澳门币' },
            { value: 'NLG', label: '荷兰盾' },
            { value: 'DKK', label: '丹麦克郎' },
            { value: 'SEK', label: '瑞典克朗' },
            { value: '98', label: '全外' },
            { value: '99', label: '全币种' },
            { value: 'NA', label: '缺省币种' },
        ];
        this.paymentMethodIds = [];
        this.paymentMethodTypeIds = [];
        this.orderTypeIds = [
            { label: "请选择", value: "" },
            { label: "销售订单", value: "SALES_ORDER" },
            { label: "采购订单", value: "PURCHASE_ORDER" },
        ];
        //提示信息
        this.msgs = [];
        routerInfo.queryParams.subscribe(function (queryParams) {
            _this.orderId = queryParams.orderId;
            _this.isextS = queryParams.isext;
            _this.arrayList = [];
            _this.arrayList1 = [];
            _this.paymentStatus = '';
            _this.orderDetailBean = new _order_details_bean__WEBPACK_IMPORTED_MODULE_4__["OrderDetailBean"]();
        });
        if (this.orderId) {
            this.queryClick();
        }
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        if (this.isextS == 'Y') {
            this.isext = true;
        }
        this.isPicInfo = true;
        this.getCodeValues();
        this.salesChannelEnumIdss = this.code['salesChannelEnumId'];
    };
    OrderDetailsComponent.prototype.getCodeValues = function () {
        this.commfunc.codeValue();
        var codeValues = this.commfunc.codeDatas;
        return this.code = codeValues;
    };
    OrderDetailsComponent.prototype.gouback = function () {
        this.router.navigate(['/pages/tzb/Trad/deal-center']);
    };
    OrderDetailsComponent.prototype.resetClick = function () {
        this.orderId = '';
    };
    OrderDetailsComponent.prototype.deliveryOrder = function () {
        var _this = this;
        var pams = {
            orderId: this.orderId,
        };
        this.orderHttpService.excOrderProcess(pams).subscribe(function (data) {
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
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    OrderDetailsComponent.prototype.cancelOrder = function () {
        var _this = this;
        var pams = {
            orderId: this.orderId,
            orderDate: this.orderDetailBean.entryDate,
        };
        this.orderHttpService.revokeOrdersExt(pams).subscribe(function (data) {
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
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    //获取详情信息
    OrderDetailsComponent.prototype.queryClick = function () {
        var _this = this;
        var pams = {
            orderId: this.orderId,
            pageParam: {
                pageNumber: this.pageNumber,
                pageSize: this.pageSize,
            }
        };
        this.orderHttpService.queryOrderBasicInfo(pams).subscribe(function (data) {
            // if (data.returnCode.code == 'success') {
            // this.tableData = data.orderList;
            // this.total = data.pageParam.totalCount + '';
            _this.orderDetailBean = data.orderHeader;
            _this.orderDetailBean.entryDate = data.orderHeader.entryDate.substring(0, 10);
            _this.arrayList = data.orderPayments;
            _this.arrayList1 = data.orderItems;
            _this.paymentStatus = data.orderPayments[0].paymentStatus;
            _this.msgs = [];
            _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    OrderDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__(/*! ./order-details.component.html */ "./src/app/pages/tzb/Trad/order-details/order-details.component.html"),
            styles: [__webpack_require__(/*! ./order-details.component.scss */ "./src/app/pages/tzb/Trad/order-details/order-details.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"], _http_order_http_service__WEBPACK_IMPORTED_MODULE_1__["OrdersHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_order_http_service__WEBPACK_IMPORTED_MODULE_1__["OrdersHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
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
//# sourceMappingURL=Trad-Trad-module.js.map