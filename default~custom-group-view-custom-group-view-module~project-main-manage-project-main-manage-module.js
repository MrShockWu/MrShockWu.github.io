(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~custom-group-view-custom-group-view-module~project-main-manage-project-main-manage-module"],{

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-part ui-g-12\">\r\n    <header-title [Info]=\"'合作项目协议详情'\"></header-title>\r\n    <div class=\"ui-g-12\" style='background-color:rgb(230,249,253)!important; margin-bottom:20px!important;'>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">合作项目编号：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['projectId']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">合作项目类型：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                <span>{{coopName}}</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">合作项目协议名称：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['projectName']}}\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 dix\">\r\n            <div class=\"ui-g-1 title pdd\">合作项目协议描述：</div>\r\n            <div class=\"ui-g-10 title_conter pdd\">\r\n                {{dataMag['projectDesc']}}\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">合作企业客户号：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['custId']}}\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">合作企业客户名称：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['custName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">合作企业客户简称：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['custSimpleName']}}\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">合作协议文本类型：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['protocolContentType']|codeValuePie:code['protocolContentType']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 dix\">\r\n            <div class=\"ui-g-1 title pdd\">合作协议文本内容：</div>\r\n            <div class=\"ui-g-9 title_conter pdd\">\r\n                <span *ngIf=\"dataMag['protocolContentType']=='0'\"> {{dataMag['protocolContent']}}</span>\r\n                <a *ngIf=\"dataMag['protocolContentType']=='1'\" (click)='click()'> {{dataMag['protocolContent']}}</a>\r\n                <!-- href=\"{{dataMag['protocolContent']}}\" -->\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12\" style='background-color:rgb(230,249,253)!important; margin-bottom:20px!important;'>\r\n        <div style=\"padding: 0.1em!important;\" *ngFor=\"let item of dataMag['elementGroupList'] ;let i = index\" [ngClass]=\"{'ui-g-4':item.elementGroupFlag=='0','ui-g-12':item.elementGroupFlag=='1'}\">\r\n            <!-- <header-title [Info]=\"item.elementName\" *ngIf=\"item.elementGroupFlag=='1'\"></header-title> -->\r\n            <div class=\"dix\" *ngIf=\"item.elementGroupFlag=='0'\">\r\n                <div style=\"padding: 0.1em!important;\" class=\"ui-g-7 tit pdd\">{{item.elementName}}\r\n                    <span style=\"display:inline-block;margin:0 4px 0 0;\">:</span>\r\n                </div>\r\n                <div style=\"line-height:25px!important;padding:0.1em!important;word-wrap:break-word;\" class=\"ui-g-5\" *ngIf=\"item['elementType']!='1'\">\r\n                    {{item['elementValue']}}\r\n                </div>\r\n                <div style=\"line-height:25px!important;padding:0.1em!important;\" class=\"ui-g-5\" *ngIf=\"item['elementType']=='1'\">\r\n                    {{item['elementDesc']}}\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\" style='background-color:rgb(230,249,253)!important;'>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">经办人：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['custManageName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">经办机构：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['handlingOrgName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">经办日期：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['handlingDate']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">审批状态、协议状态：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['projectStatus']|codeValuePie:code['project_status']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">最后审批人：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['lastApprovePersonName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">最后审批时间：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['lastApproveStamp']}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\" *ngIf=\"type1!=='1'\">\r\n    <button pButton type=\"button\" label=\"返回\" (click)=\"goback()\"></button>\r\n</div>\r\n<div class=\"ui-g-12\" *ngIf=\"type1=='1'\">\r\n    <examine-page [mainFlowNo]=\"mainFlowNo\"></examine-page>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.component.scss":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.component.scss ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-text {\n  height: 30px;\n  line-height: 30px; }\n\n.dix {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 25px !important;\n  padding: 0.1em !important; }\n\n.pdd {\n  padding: 0.1em !important; }\n\n.main-part {\n  background: #fff; }\n\n.tit {\n  text-align: right;\n  line-height: 25px; }\n\n.btn {\n  text-align: center; }\n\n.btn .iscolor {\n    background: #ffc900; }\n\n.btn .iscolor:hover {\n      background: #ffc900; }\n\n.queryinputbtn {\n  float: left;\n  display: flex;\n  width: 100%; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n.org-name {\n  display: flex;\n  padding: 0; }\n\n.org-name .org-area {\n    display: inline-block;\n    width: 12%;\n    text-align: right;\n    height: 28px;\n    line-height: 28px;\n    padding: 0 20px; }\n\n.container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .heightO {\n  height: 1rem; }\n\n.container .border-dashed {\n  border-bottom: 1px dashed #ddd; }\n\n.container .ul_box ul li {\n  list-style-type: none;\n  white-space: nowrap; }\n\n.container .overf {\n  max-height: 200px;\n  overflow-y: auto; }\n\n:host/deep/ .ui-inputtext {\n  padding: 0.2em; }\n\n@media screen and (max-width: 1190px) {\n  .ui-g-1, .ui-g-2, .ui-g-3, .ui-g-4, .ui-g-5, .ui-g-6, .ui-g-7, .ui-g-8, .ui-g-9, .ui-g-10, .ui-g-11, .ui-g-12 {\n    font-size: 12px; } }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n:host /deep/ .ui-fileupload {\n  min-width: 330px;\n  margin-left: -10px; }\n\n.title {\n  width: 19.43%;\n  text-align: right; }\n\n.title_conter {\n  width: 80.57%; }\n\np {\n  padding: 0.1em 0.5em;\n  margin: 0; }\n\ninput {\n  height: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9wcm9qZWN0LW1haW4tbWFuYWdlL3Byb2plY3QtbWFpbi1tYW5hZ2UtYWRkLXFpdGEvcHJvamVjdC1wcm90b2NvbC1xdWVyeS1xaXRhL3N1YmplY3QtZGV0YWlscy1xaXRhL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbUNlbnRlclxccHJvamVjdC1tYWluLW1hbmFnZVxccHJvamVjdC1tYWluLW1hbmFnZS1hZGQtcWl0YVxccHJvamVjdC1wcm90b2NvbC1xdWVyeS1xaXRhXFxzdWJqZWN0LWRldGFpbHMtcWl0YVxcc3ViamVjdC1kZXRhaWxzLXFpdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksYUFBWTtFQUNaLHVCQUF1QjtFQUN2QixtQkFBa0I7RUFDbEIsNEJBQTJCO0VBQzNCLHlCQUF3QixFQUFBOztBQUU1QjtFQUNJLHlCQUF3QixFQUFBOztBQUU1QjtFQUFXLGdCQUFnQixFQUFBOztBQUMzQjtFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxtQkFBbUIsRUFBQTs7QUFIM0I7TUFLWSxtQkFBbUIsRUFBQTs7QUFJL0I7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFIZjtJQUtRLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLDBCQUEwQixFQUFBOztBQVJsQztJQVdRLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZSxFQUFBOztBQUd2QjtFQUNJLGFBQWE7RUFDYixVQUFTLEVBQUE7O0FBRmI7SUFJUSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWUsRUFBQTs7QUFHdkI7RUFFUSxrQkFBa0IsRUFBQTs7QUFGMUI7RUFLUSxpQkFBaUIsRUFBQTs7QUFMekI7RUFRUSxZQUFZLEVBQUE7O0FBUnBCO0VBV1EsOEJBQThCLEVBQUE7O0FBWHRDO0VBY1EscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQWYzQjtFQWtCUSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBS3hCO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNJO0lBQ0ksZUFBZ0IsRUFBQSxFQUNuQjs7QUFFTDtFQUNJOzs7Ozs7Ozs7Ozs7SUFZSSxhQUNKLEVBQUE7RUFDQTtJQUNJLGNBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxVQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksZUFDSixFQUFBO0VBQ0E7SUFDSSxXQUNKLEVBQUEsRUFBQzs7QUFFTDtFQUNJLGdCQUFnQjtFQUNoQixrQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxhQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksYUFBWSxFQUFBOztBQUVoQjtFQUNJLG9CQUFtQjtFQUNuQixTQUFTLEVBQUE7O0FBRWI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tQ2VudGVyL3Byb2plY3QtbWFpbi1tYW5hZ2UvcHJvamVjdC1tYWluLW1hbmFnZS1hZGQtcWl0YS9wcm9qZWN0LXByb3RvY29sLXF1ZXJ5LXFpdGEvc3ViamVjdC1kZXRhaWxzLXFpdGEvc3ViamVjdC1kZXRhaWxzLXFpdGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXRleHR7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcbi5kaXh7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4IWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAuMWVtIWltcG9ydGFudDtcclxufVxyXG4ucGRke1xyXG4gICAgcGFkZGluZzogMC4xZW0haW1wb3J0YW50O1xyXG59XHJcbi5tYWluLXBhcnR7YmFja2dyb3VuZDogI2ZmZjt9XHJcbi50aXR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLmlzY29sb3J7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYzkwMDtcclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjOTAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ucXVlcnlpbnB1dGJ0biB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC5xdWVyeWlucHV0T3JnIHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDAgMCAzcHg7XHJcbiAgICAgICAgd2lkdGg6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNjlweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNsaWNrc3BhbiB7XHJcbiAgICAgICAgd2lkdGg6IDE0JTtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcbi5vcmctbmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgLm9yZy1hcmVhe1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aDogMTIlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7ICBcclxuICAgIH1cclxufVxyXG4uY29udGFpbmVyIHtcclxuICAgIC50ZXh0X2NlbnRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHRfcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLmhlaWdodE8ge1xyXG4gICAgICAgIGhlaWdodDogMXJlbTtcclxuICAgIH1cclxuICAgIC5ib3JkZXItZGFzaGVkIHtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICB9XHJcbiAgICAudWxfYm94IHVsIGxpIHtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC5vdmVyZiB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAvLyBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1pbnB1dHRleHR7XHJcbiAgICBwYWRkaW5nOjAuMmVtO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTE5MHB4KXtcclxuICAgIC51aS1nLTEsIC51aS1nLTIsIC51aS1nLTMsIC51aS1nLTQsIC51aS1nLTUsIC51aS1nLTYsIC51aS1nLTcsIC51aS1nLTgsIC51aS1nLTksIC51aS1nLTEwLCAudWktZy0xMSwgLnVpLWctMTJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4IDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyODBweCkge1xyXG4gICAgLnVpLW1wLTEsXHJcbiAgICAudWktbXAtMixcclxuICAgIC51aS1tcC0zLFxyXG4gICAgLnVpLW1wLTQsXHJcbiAgICAudWktbXAtNSxcclxuICAgIC51aS1tcC02LFxyXG4gICAgLnVpLW1wLTcsXHJcbiAgICAudWktbXAtOCxcclxuICAgIC51aS1tcC05LFxyXG4gICAgLnVpLW1wLTEwLFxyXG4gICAgLnVpLW1wLTExLFxyXG4gICAgLnVpLW1wLTEyIHtcclxuICAgICAgICBwYWRkaW5nOiAuNWVtXHJcbiAgICB9XHJcbiAgICAudWktbXAtMSB7XHJcbiAgICAgICAgd2lkdGg6IDguMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0yIHtcclxuICAgICAgICB3aWR0aDogMTYuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC0zIHtcclxuICAgICAgICB3aWR0aDogMjUlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNCB7XHJcbiAgICAgICAgd2lkdGg6IDMzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNSB7XHJcbiAgICAgICAgd2lkdGg6IDQxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtNiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTcge1xyXG4gICAgICAgIHdpZHRoOiA1OC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTgge1xyXG4gICAgICAgIHdpZHRoOiA2Ni42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTkge1xyXG4gICAgICAgIHdpZHRoOiA3NSVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMCB7XHJcbiAgICAgICAgd2lkdGg6IDgzLjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTEge1xyXG4gICAgICAgIHdpZHRoOiA5MS42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEyIHtcclxuICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgfVxyXG59XHJcbjpob3N0IC9kZWVwLyAudWktZmlsZXVwbG9hZHtcclxuICAgIG1pbi13aWR0aDogMzMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDotMTBweDtcclxufVxyXG4udGl0bGV7XHJcbiAgICB3aWR0aDoxOS40MyU7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udGl0bGVfY29udGVye1xyXG4gICAgd2lkdGg6ODAuNTclO1xyXG59XHJcbnB7XHJcbiAgICBwYWRkaW5nOjAuMWVtIDAuNWVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbmlucHV0e1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.component.ts":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.component.ts ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: SubjectDetailsQita */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDetailsQita", function() { return SubjectDetailsQita; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service */ "./src/app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_bean_project_protocol_query_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/bean/project-protocol-query.bean */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/bean/project-protocol-query.bean.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_search_bean_project_main_manage_search_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-search/bean/project-main-manage-search.bean */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search/bean/project-main-manage-search.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../product-manage/http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SubjectDetailsQita = /** @class */ (function () {
    function SubjectDetailsQita(confirmationService, productPlatformHttpService, router, commfunc, http, activatedRoute) {
        this.confirmationService = confirmationService;
        this.productPlatformHttpService = productPlatformHttpService;
        this.router = router;
        this.commfunc = commfunc;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bean = new app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_bean_project_protocol_query_bean__WEBPACK_IMPORTED_MODULE_6__["coopProjectDetailQuery"]();
        this.coopProjectTypeListQueryBean = new app_pages_tzb_customCenter_project_main_manage_project_main_manage_search_bean_project_main_manage_search_bean__WEBPACK_IMPORTED_MODULE_7__["CoopProjectTypeListQueryBean"]();
        // startTime: any;
        // sateType: any;
        // personName: any;
        this.detailDisplay = false;
        // endDate: Date = null;
        // proName: any;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"];
        this.dataMag = {};
    }
    SubjectDetailsQita.prototype.ngOnInit = function () {
        console.log(this.inValue);
        if (this.inValue && this.inValue != '') {
            this.bean.projectId = this.inValue;
            this.type1 = '2';
        }
        else {
            if (this.activatedRoute.snapshot.params.from == 'reminder-do') {
                var t = this.commfunc.getSessionDataCH('cooperative-project-from-reminder-do');
                t = JSON.parse(t);
                var dataMap = JSON.parse(t['dataMap']);
                console.log(dataMap);
                this.details = dataMap;
                this.bean.projectId = this.details['projectId'];
                this.type1 = '1';
                if (this.activatedRoute.snapshot.params.mainFlowNo) {
                    this.mainFlowNo = this.activatedRoute.snapshot.params.mainFlowNo;
                }
            }
            else {
                this.bean.projectId = this.activatedRoute['snapshot']['queryParams']['projectId'];
            }
        }
        this.queryList();
        this.codeValues();
    };
    SubjectDetailsQita.prototype.queryList = function () {
        var _this = this;
        this.http.coopProjectDetailQuery(this.bean).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                _this.dataMag = data;
                _this.copyData();
                _this.query();
            }
        });
    };
    //
    SubjectDetailsQita.prototype.copyData = function () {
        var _this = this;
        var datalist = this.dataMag['elementGroupList'];
        var newData = {};
        var ss = [];
        for (var i = 0; i < datalist.length; i++) {
            if (datalist[i].rowNum > 1) {
                var key = datalist[i]['elementEnName'];
                if (datalist[i].rowNum == 2) {
                    newData[key] = [];
                    newData[key].push(datalist[i - 2].elementValue);
                }
                newData[key].push(datalist[i].elementValue);
            }
        }
        var _loop_1 = function (key) {
            newData[key] = newData[key].join(',');
            this_1.dataMag['elementGroupList'].forEach(function (b, i) {
                var key1 = b['elementEnName'];
                if (key1 == key) {
                    if (b.rowNum == 2) {
                        b['elementValue'] = newData[key];
                        b['elementDesc'] = newData[key];
                    }
                    else {
                        ss.unshift(i);
                    }
                }
            });
        };
        var this_1 = this;
        for (var key in newData) {
            _loop_1(key);
        }
        ss = ss.sort(function (a, b) { return b - a; });
        ss.forEach(function (u) {
            u = Number(u);
            _this.dataMag['elementGroupList'].splice(u, 1);
        });
        //newData + ','
        console.log(this.dataMag['elementGroupList']);
    };
    SubjectDetailsQita.prototype.goback = function () {
        //window.history.go(-1)
        this.router.navigate(['/pages/tzb/custom-center/project-main-manage/project-main-manage-add-qita'], { queryParams: { index: 2 } });
    };
    //码值
    SubjectDetailsQita.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    SubjectDetailsQita.prototype.query = function () {
        var _this = this;
        this.coopProjectTypeListQueryBean.pageSize = 20000;
        this.coopProjectTypeListQueryBean.pageNum = 1;
        this.coopProjectTypeListQueryBean.coopProjectTypeId = this.dataMag['coopProjectTypeId'];
        this.http.coopProjectTypeListQuery(this.coopProjectTypeListQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.coopName = data['returnList'][0]['coopProjectTypeName'];
                console.log(_this.coopName);
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    SubjectDetailsQita.prototype.click = function () {
        // planContent:"/copdata/20181018090320/方案，主体状态查询修改.doc"
        var arr = this.dataMag['protocolContent'].split('/');
        var path = '';
        for (var j = 1; j < arr.length - 1; j++) {
            path += '/' + arr[j];
        }
        path = path + '/';
        var donwname = arr[arr.length - 1];
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(donwname) + "&fileUrl=" + path, '_blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SubjectDetailsQita.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SubjectDetailsQita.prototype, "outValue", void 0);
    SubjectDetailsQita = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "subject-details-qita",
            template: __webpack_require__(/*! ./subject-details-qita.component.html */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.component.html"),
            styles: [__webpack_require__(/*! ./subject-details-qita.component.scss */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_9__["ProductManageHttpService"], app_pages_tzb_customCenter_project_main_manage_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_5__["ProjectHttpService"]]
        }),
        __metadata("design:paramtypes", [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_9__["ProductManageHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_customCenter_project_main_manage_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_5__["ProjectHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SubjectDetailsQita);
    return SubjectDetailsQita;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.module.ts":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.module.ts ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: SubjectDetailsModuleQita */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDetailsModuleQita", function() { return SubjectDetailsModuleQita; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subject_details_qita_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject-details-qita.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add-qita/project-protocol-query-qita/subject-details-qita/subject-details-qita.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//客户群组
var SubjectDetailsModuleQita = /** @class */ (function () {
    function SubjectDetailsModuleQita() {
    }
    SubjectDetailsModuleQita = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
            ],
            declarations: [
                _subject_details_qita_component__WEBPACK_IMPORTED_MODULE_4__["SubjectDetailsQita"]
            ],
            exports: [
                _subject_details_qita_component__WEBPACK_IMPORTED_MODULE_4__["SubjectDetailsQita"]
            ],
            providers: []
        })
    ], SubjectDetailsModuleQita);
    return SubjectDetailsModuleQita;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/bean/project-protocol-query.bean.ts":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/bean/project-protocol-query.bean.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: coopProjectListQueryBean, coopProjectSet, projectElementGroupDetailQuery, coopProjectTypeDetailQuery, coopProjectDetailQuery, coopProjectElementQuery, coopProjectElementAdjust */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coopProjectListQueryBean", function() { return coopProjectListQueryBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coopProjectSet", function() { return coopProjectSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectElementGroupDetailQuery", function() { return projectElementGroupDetailQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coopProjectTypeDetailQuery", function() { return coopProjectTypeDetailQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coopProjectDetailQuery", function() { return coopProjectDetailQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coopProjectElementQuery", function() { return coopProjectElementQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coopProjectElementAdjust", function() { return coopProjectElementAdjust; });
var coopProjectListQueryBean = /** @class */ (function () {
    function coopProjectListQueryBean() {
    }
    return coopProjectListQueryBean;
}());

var coopProjectSet = /** @class */ (function () {
    function coopProjectSet() {
    }
    return coopProjectSet;
}());

var projectElementGroupDetailQuery = /** @class */ (function () {
    function projectElementGroupDetailQuery() {
    }
    return projectElementGroupDetailQuery;
}());

var coopProjectTypeDetailQuery = /** @class */ (function () {
    function coopProjectTypeDetailQuery() {
    }
    return coopProjectTypeDetailQuery;
}());

var coopProjectDetailQuery = /** @class */ (function () {
    function coopProjectDetailQuery() {
    }
    return coopProjectDetailQuery;
}());

var coopProjectElementQuery = /** @class */ (function () {
    function coopProjectElementQuery() {
    }
    return coopProjectElementQuery;
}());

var coopProjectElementAdjust = /** @class */ (function () {
    function coopProjectElementAdjust() {
    }
    return coopProjectElementAdjust;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.component.html ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-part ui-g-12\">\r\n    <header-title [Info]=\"'供应链合作协议详情'\"></header-title>\r\n    <div class=\"ui-g-12\" style='background-color:rgb(230,249,253)!important; margin-bottom:20px!important;'>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">核心企业客户号：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['custId']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">核心企业客户名称：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['custName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">核心企业客户简称：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['custSimpleName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">供应链融资协议名称：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['projectName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">协议编号：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['projectId']}}\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">协议文本类型：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['protocolContentType']|codeValuePie:code['protocolContentType']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-12 dix\">\r\n            <div class=\"ui-g-1 title pdd\">协议文本内容：</div>\r\n            <div class=\"ui-g-9 title_conter pdd\">\r\n                <span *ngIf=\"dataMag['protocolContentType']=='0'\"> {{dataMag['protocolContent']}}</span>\r\n                <a *ngIf=\"dataMag['protocolContentType']=='1'\" (click)='click()'> {{dataMag['protocolContent']}}</a>\r\n                <!-- href=\"{{dataMag['protocolContent']}}\" -->\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"ui-g-12 dix\">\r\n            <div class=\"ui-g-1 title pdd\">供应链融资协议描述：</div>\r\n            <div class=\"ui-g-10 title_conter pdd\">\r\n                {{dataMag['projectDesc']}}\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\" style='background-color:rgb(230,249,253)!important; margin-bottom:20px!important;'>\r\n        <div style=\"padding: 0.1em!important;\" *ngFor=\"let item of dataMag['elementGroupList'] ;let i = index\" [ngClass]=\"{'ui-g-4':item.elementGroupFlag=='0','ui-g-12':item.elementGroupFlag=='1'}\">\r\n            <div class=\"dix\" *ngIf=\"item.elementGroupFlag=='0'\">\r\n                <div style=\"padding: 0.1em!important;\" class=\"ui-g-7 tit pdd\">{{item.elementName}}\r\n                    <span style=\"display:inline-block;margin:0 4px 0 0;\">:</span>\r\n                </div>\r\n                <div style=\"line-height:25px!important;padding:0.1em!important;word-wrap:break-word;\" class=\"ui-g-5 pdd\" *ngIf=\"item['elementType']!='1'&&item['elementEnName']!='coreSettlementAccount'&&item.elementEnName!='imageUrl'\">\r\n                    {{item['elementValue']}}\r\n                </div>\r\n                <div style=\"line-height:25px!important;padding:0!important;word-wrap:break-word;color:#19b0c8;\" (click)='kezhang()' class=\"ui-g-5 pdd\" *ngIf=\"item['elementType']!='1'&&item['elementEnName'] =='coreSettlementAccount'&&item.elementEnName!='imageUrl'\">\r\n                    {{item['elementValue']}}\r\n                </div>\r\n                <div style=\"padding:0 0 !important;\" class=\"ui-g-5\" *ngIf=\"item.elementType=='3'&&item.elementEnName=='imageUrl'\">\r\n                    <button pButton label=\"查看\"  (click)=\"lookvideo()\" ></button>\r\n                </div>\r\n                <div style=\"line-height:25px!important;padding:0.1em!important;\" class=\"ui-g-5 pdd\" *ngIf=\"item['elementType']=='1'\">\r\n                    {{item['elementDesc']}}\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12\" style='background-color:rgb(230,249,253)!important;'>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">经办人：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['custManageName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">经办机构：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['handlingOrgName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">经办日期：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['handlingDate']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">审批状态、协议状态：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['projectStatus']|codeValuePie:code['project_status']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">最后审批人：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['lastApprovePersonName']}}\r\n            </div>\r\n        </div>\r\n        <div class=\"ui-g-4 dix\">\r\n            <div class=\"ui-g-7 tit pdd\">最后审批时间：</div>\r\n            <div class=\"ui-g-5 pdd\">\r\n                {{dataMag['lastApproveStamp']}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"ui-g-12 btn\" *ngIf=\"type1!='1'\">\r\n    <button pButton type=\"button\" label=\"返回\" (click)=\"goback()\"></button>\r\n</div>\r\n<div class=\"ui-g-12\" *ngIf=\"type1=='1'\">\r\n    <examine-page [mainFlowNo]=\"mainFlowNo\"></examine-page>\r\n</div>\r\n<p-dialog header=\"结算账户交易信息查询\" *ngIf=\"accdisplay\" [(visible)]=\"accdisplay\" modal=\"modal\">\r\n    <account-details [inValue]=\"inValue\"></account-details>\r\n</p-dialog>\r\n<p-growl [(value)]=\"msgs\" [style]=\"{'z-index':'1000'}\"></p-growl>\r\n<!-- 影像资料 -->\r\n<p-dialog *ngIf=\"videoShow\" header=\"{{videoheader}}\" [(visible)]=\"videoShow\" modal=\"modal\">\r\n    <project-video [inValue]=\"videoVal\"></project-video>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.component.scss":
/*!**********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.component.scss ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-text {\n  height: 30px;\n  line-height: 30px; }\n\n.dix {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  line-height: 25px !important;\n  padding: 0.1em !important; }\n\n.pdd {\n  padding: 0.1em !important; }\n\n.main-part {\n  background: #fff; }\n\n.tit {\n  text-align: right;\n  line-height: 25px; }\n\n.btn {\n  text-align: center; }\n\n.btn .iscolor {\n    background: #ffc900; }\n\n.btn .iscolor:hover {\n      background: #ffc900; }\n\n.queryinputbtn {\n  float: left;\n  display: flex;\n  width: 100%; }\n\n.queryinputbtn .queryinputOrg {\n    border-right: none;\n    border-radius: 3px 0 0 3px;\n    width: 85% !important;\n    min-width: 69px !important; }\n\n.queryinputbtn .clickspan {\n    width: 14%;\n    height: 23px;\n    cursor: pointer; }\n\n.org-name {\n  display: flex;\n  padding: 0; }\n\n.org-name .org-area {\n    display: inline-block;\n    width: 12%;\n    text-align: right;\n    height: 28px;\n    line-height: 28px;\n    padding: 0 20px; }\n\n.container .text_center {\n  text-align: center; }\n\n.container .text_right {\n  text-align: right; }\n\n.container .heightO {\n  height: 1rem; }\n\n.container .border-dashed {\n  border-bottom: 1px dashed #ddd; }\n\n.container .ul_box ul li {\n  list-style-type: none;\n  white-space: nowrap; }\n\n.container .overf {\n  max-height: 200px;\n  overflow-y: auto; }\n\n:host/deep/ .ui-inputtext {\n  padding: 0.2em; }\n\n@media screen and (max-width: 1190px) {\n  .ui-g-1, .ui-g-2, .ui-g-3, .ui-g-4, .ui-g-5, .ui-g-6, .ui-g-7, .ui-g-8, .ui-g-9, .ui-g-10, .ui-g-11, .ui-g-12 {\n    font-size: 12px; } }\n\n@media screen and (max-width: 1280px) {\n  .ui-mp-1,\n  .ui-mp-2,\n  .ui-mp-3,\n  .ui-mp-4,\n  .ui-mp-5,\n  .ui-mp-6,\n  .ui-mp-7,\n  .ui-mp-8,\n  .ui-mp-9,\n  .ui-mp-10,\n  .ui-mp-11,\n  .ui-mp-12 {\n    padding: .5em; }\n  .ui-mp-1 {\n    width: 8.3333%; }\n  .ui-mp-2 {\n    width: 16.6667%; }\n  .ui-mp-3 {\n    width: 25%; }\n  .ui-mp-4 {\n    width: 33.3333%; }\n  .ui-mp-5 {\n    width: 41.6667%; }\n  .ui-mp-6 {\n    width: 50%; }\n  .ui-mp-7 {\n    width: 58.3333%; }\n  .ui-mp-8 {\n    width: 66.6667%; }\n  .ui-mp-9 {\n    width: 75%; }\n  .ui-mp-10 {\n    width: 83.3333%; }\n  .ui-mp-11 {\n    width: 91.6667%; }\n  .ui-mp-12 {\n    width: 100%; } }\n\n:host /deep/ .ui-fileupload {\n  min-width: 330px;\n  margin-left: -10px; }\n\n.title {\n  width: 19.43%;\n  text-align: right; }\n\n.title_conter {\n  width: 80.57%; }\n\np {\n  padding: 0.1em 0.5em;\n  margin: 0; }\n\ninput {\n  height: 24px; }\n\n:host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: fixed !important;\n  white-space: wrap; }\n\n:host/deep/ .ui-dialog.ui-shadow {\n  width: 900px !important;\n  height: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9wcm9qZWN0LW1haW4tbWFuYWdlL3Byb2plY3QtbWFpbi1tYW5hZ2UtYWRkL3Byb2plY3QtcHJvdG9jb2wtcXVlcnkvc3ViamVjdC1kZXRhaWxzL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbUNlbnRlclxccHJvamVjdC1tYWluLW1hbmFnZVxccHJvamVjdC1tYWluLW1hbmFnZS1hZGRcXHByb2plY3QtcHJvdG9jb2wtcXVlcnlcXHN1YmplY3QtZGV0YWlsc1xcc3ViamVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGFBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQWtCO0VBQ2xCLDRCQUEyQjtFQUMzQix5QkFBd0IsRUFBQTs7QUFFNUI7RUFDSSx5QkFBd0IsRUFBQTs7QUFFNUI7RUFBVyxnQkFBZ0IsRUFBQTs7QUFDM0I7RUFDSSxpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksa0JBQWtCLEVBQUE7O0FBRHRCO0lBR1EsbUJBQW1CLEVBQUE7O0FBSDNCO01BS1ksbUJBQW1CLEVBQUE7O0FBSS9CO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXLEVBQUE7O0FBSGY7SUFLUSxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBQTs7QUFSbEM7SUFXUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWUsRUFBQTs7QUFHdkI7RUFDSSxhQUFhO0VBQ2IsVUFBUyxFQUFBOztBQUZiO0lBSVEscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7O0FBR3ZCO0VBRVEsa0JBQWtCLEVBQUE7O0FBRjFCO0VBS1EsaUJBQWlCLEVBQUE7O0FBTHpCO0VBUVEsWUFBWSxFQUFBOztBQVJwQjtFQVdRLDhCQUE4QixFQUFBOztBQVh0QztFQWNRLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFmM0I7RUFrQlEsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUt4QjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDSTtJQUNJLGVBQWdCLEVBQUEsRUFDbkI7O0FBRUw7RUFDSTs7Ozs7Ozs7Ozs7O0lBWUksYUFDSixFQUFBO0VBQ0E7SUFDSSxjQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksVUFDSixFQUFBO0VBQ0E7SUFDSSxlQUNKLEVBQUE7RUFDQTtJQUNJLGVBQ0osRUFBQTtFQUNBO0lBQ0ksV0FDSixFQUFBLEVBQUM7O0FBRUw7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksYUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGFBQVksRUFBQTs7QUFFaEI7RUFDSSxvQkFBbUI7RUFDbkIsU0FBUyxFQUFBOztBQUViO0VBQ0ksWUFBWSxFQUFBOztBQUVoQjtFQUNJLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksdUJBQXVCO0VBQ3ZCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbUNlbnRlci9wcm9qZWN0LW1haW4tbWFuYWdlL3Byb2plY3QtbWFpbi1tYW5hZ2UtYWRkL3Byb2plY3QtcHJvdG9jb2wtcXVlcnkvc3ViamVjdC1kZXRhaWxzL3N1YmplY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItdGV4dHtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuLmRpeHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHghaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMC4xZW0haW1wb3J0YW50O1xyXG59XHJcbi5wZGR7XHJcbiAgICBwYWRkaW5nOiAwLjFlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1haW4tcGFydHtiYWNrZ3JvdW5kOiAjZmZmO31cclxuLnRpdHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAuaXNjb2xvcntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjOTAwO1xyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmM5MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5xdWVyeWlucHV0YnRuIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLnF1ZXJ5aW5wdXRPcmcge1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggMCAwIDNweDtcclxuICAgICAgICB3aWR0aDogODUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xpY2tzcGFuIHtcclxuICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuLm9yZy1uYW1lIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICAub3JnLWFyZWF7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxMiU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDsgIFxyXG4gICAgfVxyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgLnRleHRfY2VudGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dF9yaWdodCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAuaGVpZ2h0TyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci1kYXNoZWQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgIH1cclxuICAgIC51bF9ib3ggdWwgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLm92ZXJmIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIC8vIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIH1cclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWlucHV0dGV4dHtcclxuICAgIHBhZGRpbmc6MC4yZW07XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMTkwcHgpe1xyXG4gICAgLnVpLWctMSwgLnVpLWctMiwgLnVpLWctMywgLnVpLWctNCwgLnVpLWctNSwgLnVpLWctNiwgLnVpLWctNywgLnVpLWctOCwgLnVpLWctOSwgLnVpLWctMTAsIC51aS1nLTExLCAudWktZy0xMntcclxuICAgICAgICBmb250LXNpemU6IDEycHggO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTI4MHB4KSB7XHJcbiAgICAudWktbXAtMSxcclxuICAgIC51aS1tcC0yLFxyXG4gICAgLnVpLW1wLTMsXHJcbiAgICAudWktbXAtNCxcclxuICAgIC51aS1tcC01LFxyXG4gICAgLnVpLW1wLTYsXHJcbiAgICAudWktbXAtNyxcclxuICAgIC51aS1tcC04LFxyXG4gICAgLnVpLW1wLTksXHJcbiAgICAudWktbXAtMTAsXHJcbiAgICAudWktbXAtMTEsXHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHBhZGRpbmc6IC41ZW1cclxuICAgIH1cclxuICAgIC51aS1tcC0xIHtcclxuICAgICAgICB3aWR0aDogOC4zMzMzJVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTIge1xyXG4gICAgICAgIHdpZHRoOiAxNi42NjY3JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTMge1xyXG4gICAgICAgIHdpZHRoOiAyNSVcclxuICAgIH1cclxuICAgIC51aS1tcC00IHtcclxuICAgICAgICB3aWR0aDogMzMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC01IHtcclxuICAgICAgICB3aWR0aDogNDEuNjY2NyVcclxuICAgIH1cclxuICAgIC51aS1tcC02IHtcclxuICAgICAgICB3aWR0aDogNTAlXHJcbiAgICB9XHJcbiAgICAudWktbXAtNyB7XHJcbiAgICAgICAgd2lkdGg6IDU4LjMzMzMlXHJcbiAgICB9XHJcbiAgICAudWktbXAtOCB7XHJcbiAgICAgICAgd2lkdGg6IDY2LjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtOSB7XHJcbiAgICAgICAgd2lkdGg6IDc1JVxyXG4gICAgfVxyXG4gICAgLnVpLW1wLTEwIHtcclxuICAgICAgICB3aWR0aDogODMuMzMzMyVcclxuICAgIH1cclxuICAgIC51aS1tcC0xMSB7XHJcbiAgICAgICAgd2lkdGg6IDkxLjY2NjclXHJcbiAgICB9XHJcbiAgICAudWktbXAtMTIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlXHJcbiAgICB9XHJcbn1cclxuOmhvc3QgL2RlZXAvIC51aS1maWxldXBsb2Fke1xyXG4gICAgbWluLXdpZHRoOiAzMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0Oi0xMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIHdpZHRoOjE5LjQzJTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50aXRsZV9jb250ZXJ7XHJcbiAgICB3aWR0aDo4MC41NyU7XHJcbn1cclxucHtcclxuICAgIHBhZGRpbmc6MC4xZW0gMC41ZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuOmhvc3QvZGVlcC8gLnVpLWRhdGF0YWJsZSB0YWJsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcclxufVxyXG46aG9zdC9kZWVwLyAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.component.ts":
/*!********************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.component.ts ***!
  \********************************************************************************************************************************************************/
/*! exports provided: SubjectDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDetails", function() { return SubjectDetails; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service */ "./src/app/pages/tzb/customCenter/project-main-manage/http/project-main-manage.service.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_bean_project_protocol_query_bean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/bean/project-protocol-query.bean */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/bean/project-protocol-query.bean.ts");
/* harmony import */ var app_pages_tzb_customCenter_project_main_manage_project_main_manage_search_bean_project_main_manage_search_bean__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/pages/tzb/customCenter/project-main-manage/project-main-manage-search/bean/project-main-manage-search.bean */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search/bean/project-main-manage-search.bean.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../product-manage/http/product-manage.http.service */ "./src/app/pages/tzb/product-manage/http/product-manage.http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SubjectDetails = /** @class */ (function () {
    function SubjectDetails(confirmationService, productPlatformHttpService, router, commfunc, http, activatedRoute) {
        this.confirmationService = confirmationService;
        this.productPlatformHttpService = productPlatformHttpService;
        this.router = router;
        this.commfunc = commfunc;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.videoVal = {};
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bean = new app_pages_tzb_customCenter_project_main_manage_project_main_manage_add_project_protocol_query_bean_project_protocol_query_bean__WEBPACK_IMPORTED_MODULE_6__["coopProjectDetailQuery"]();
        this.coopProjectTypeListQueryBean = new app_pages_tzb_customCenter_project_main_manage_project_main_manage_search_bean_project_main_manage_search_bean__WEBPACK_IMPORTED_MODULE_7__["CoopProjectTypeListQueryBean"]();
        this.detailDisplay = false;
        this.startDate = null;
        this.endDate = null;
        this.ch = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["CALENDAR_CN"];
        this.dataMag = {};
        this.options1 = [];
        this.methods = [];
        this.method = '01';
        this.changeType = '01';
        this.accdisplay = false;
    }
    SubjectDetails.prototype.ngOnInit = function () {
        console.log(this.inValue);
        if (this.inValue && this.inValue != '') { //客群那边的传值
            this.bean.projectId = this.inValue.projectId;
            this.processId = this.inValue.processId;
            this.type1 = '2';
        }
        else {
            debugger;
            if (this.activatedRoute.snapshot.params.from == 'reminder-do') { //审批session取值
                var t = this.commfunc.getSessionDataCH('cooperative-project-from-reminder-do');
                t = JSON.parse(t);
                this.processId = t['processId'];
                var dataMap = JSON.parse(t['dataMap']);
                console.log(dataMap);
                this.details = dataMap;
                this.bean.projectId = this.details['projectId'];
                this.type1 = '1';
                if (this.activatedRoute.snapshot.params.mainFlowNo) {
                    this.mainFlowNo = this.activatedRoute.snapshot.params.mainFlowNo;
                }
            }
            else { //路由传值
                this.bean.projectId = this.activatedRoute['snapshot']['queryParams']['projectId'];
                this.processId = this.activatedRoute['snapshot']['queryParams']['processId'];
            }
        }
        this.queryList();
        this.codeValues();
    };
    SubjectDetails.prototype.queryList = function () {
        var _this = this;
        this.msgs = [];
        this.bean.callSeviceFlag = '0';
        this.http.coopProjectDetailQuery(this.bean).subscribe(function (data) {
            if (data['returnCode']['code'] == 'success') {
                _this.dataMag = data;
                _this.detaillist = _this.dataMag['elementGroupList'];
                _this.copyData();
                _this.query();
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    // 影像查看
    SubjectDetails.prototype.lookvideo = function () {
        this.videoShow = true;
        this.videoheader = '影像资料查看';
        this.videoVal = {
            custNo: this.dataMag['custId'],
            custName: this.dataMag['custName'],
            processId: this.processId,
            QueryFlag: 1,
            falg: 1,
        };
        console.log(this.videoVal);
    };
    //
    SubjectDetails.prototype.copyData = function () {
        var _this = this;
        var datalist = this.dataMag['elementGroupList'];
        var newData = {};
        var ss = [];
        for (var i = 0; i < datalist.length; i++) {
            if (datalist[i].rowNum > 1) {
                var key = datalist[i]['elementEnName'];
                if (datalist[i].rowNum == 2) {
                    newData[key] = [];
                    newData[key].push(datalist[i - 2].elementValue);
                }
                newData[key].push(datalist[i].elementValue);
            }
        }
        var _loop_1 = function (key) {
            newData[key] = newData[key].join(',');
            this_1.dataMag['elementGroupList'].forEach(function (b, i) {
                var key1 = b['elementEnName'];
                if (key1 == key) {
                    if (b.rowNum == 2) {
                        b['elementValue'] = newData[key];
                        b['elementDesc'] = newData[key];
                    }
                    else {
                        ss.unshift(i);
                    }
                }
            });
        };
        var this_1 = this;
        for (var key in newData) {
            _loop_1(key);
        }
        ss = ss.sort(function (a, b) { return b - a; });
        ss.forEach(function (u) {
            u = Number(u);
            _this.dataMag['elementGroupList'].splice(u, 1);
        });
    };
    SubjectDetails.prototype.goback = function () {
        this.router.navigate(['/pages/tzb/custom-center/project-main-manage/ProjectProtocolQuery'], { queryParams: { index: 1 } });
    };
    //码值
    SubjectDetails.prototype.codeValues = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret;
    };
    SubjectDetails.prototype.query = function () {
        var _this = this;
        this.msgs = [];
        this.coopProjectTypeListQueryBean.pageSize = 20000;
        this.coopProjectTypeListQueryBean.pageNum = 1;
        this.coopProjectTypeListQueryBean.coopProjectTypeId = this.dataMag['coopProjectTypeId'];
        this.http.coopProjectTypeListQuery(this.coopProjectTypeListQueryBean).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                // this.coopName = data['returnList']['coopProjectTypeName']
                _this.msgs.push({ severity: 'success', summary: '提示', detail: data.returnCode.message });
            }
            else {
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (err) {
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败！' });
        });
    };
    SubjectDetails.prototype.click = function () {
        var arr = this.dataMag['protocolContent'].split('/');
        var path = '';
        for (var j = 1; j < arr.length - 1; j++) {
            path += '/' + arr[j];
        }
        path = path + '/';
        var donwname = arr[arr.length - 1];
        open(app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_8__["TZB_CUS_DOWNLOAD"] + "?fileName=" + encodeURI(donwname) + "&fileUrl=" + path, '_blank');
    };
    SubjectDetails.prototype.kezhang = function () {
        var _this = this;
        var ret = {};
        this.detaillist.forEach(function (f) {
            if (f.elementEnName == 'coreSettlementAccount' && f.elementValue != '') {
                ret['account'] = f.elementValue;
                _this.inValue = ret;
                _this.accdisplay = true;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SubjectDetails.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SubjectDetails.prototype, "outValue", void 0);
    SubjectDetails = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "subject-details",
            template: __webpack_require__(/*! ./subject-details.component.html */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.component.html"),
            styles: [__webpack_require__(/*! ./subject-details.component.scss */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.component.scss")],
            providers: [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_9__["ProductManageHttpService"], app_pages_tzb_customCenter_project_main_manage_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_5__["ProjectHttpService"]]
        }),
        __metadata("design:paramtypes", [primeng_primeng__WEBPACK_IMPORTED_MODULE_2__["ConfirmationService"],
            _product_manage_http_product_manage_http_service__WEBPACK_IMPORTED_MODULE_9__["ProductManageHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            app_pages_tzb_customCenter_project_main_manage_http_project_main_manage_service__WEBPACK_IMPORTED_MODULE_5__["ProjectHttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], SubjectDetails);
    return SubjectDetails;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.module.ts":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.module.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: SubjectDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDetailsModule", function() { return SubjectDetailsModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _subject_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject-details.component */ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-add/project-protocol-query/subject-details/subject-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//客户群组
var SubjectDetailsModule = /** @class */ (function () {
    function SubjectDetailsModule() {
    }
    SubjectDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
            ],
            declarations: [
                _subject_details_component__WEBPACK_IMPORTED_MODULE_4__["SubjectDetails"]
            ],
            exports: [
                _subject_details_component__WEBPACK_IMPORTED_MODULE_4__["SubjectDetails"]
            ],
            providers: []
        })
    ], SubjectDetailsModule);
    return SubjectDetailsModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search/bean/project-main-manage-search.bean.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/customCenter/project-main-manage/project-main-manage-search/bean/project-main-manage-search.bean.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: CoopProjectTypeListQueryBean, CoopProjectTypeSetBean, CoopProjectTypeDetailQueryBean, ProjectElementGroupDetailQueryBean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoopProjectTypeListQueryBean", function() { return CoopProjectTypeListQueryBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoopProjectTypeSetBean", function() { return CoopProjectTypeSetBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoopProjectTypeDetailQueryBean", function() { return CoopProjectTypeDetailQueryBean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectElementGroupDetailQueryBean", function() { return ProjectElementGroupDetailQueryBean; });
//合作项目类型列表查询
var CoopProjectTypeListQueryBean = /** @class */ (function () {
    function CoopProjectTypeListQueryBean() {
    }
    return CoopProjectTypeListQueryBean;
}());

//合作项目类型新增、修改、删除
var CoopProjectTypeSetBean = /** @class */ (function () {
    function CoopProjectTypeSetBean() {
    }
    return CoopProjectTypeSetBean;
}());

//合作项目类型详情查询
var CoopProjectTypeDetailQueryBean = /** @class */ (function () {
    function CoopProjectTypeDetailQueryBean() {
    }
    return CoopProjectTypeDetailQueryBean;
}());

var ProjectElementGroupDetailQueryBean = /** @class */ (function () {
    function ProjectElementGroupDetailQueryBean() {
    }
    return ProjectElementGroupDetailQueryBean;
}());



/***/ })

}]);
//# sourceMappingURL=default~custom-group-view-custom-group-view-module~project-main-manage-project-main-manage-module.js.map