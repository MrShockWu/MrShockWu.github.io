(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tzb-custom-custom-view-credit-managerment-credit-managerment-module"],{

/***/ "./node_modules/querystring/decode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "./node_modules/querystring/encode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "./node_modules/querystring/index.js":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring/encode.js");


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/acceptance-detail/acceptance-detail.component.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/acceptance-detail/acceptance-detail.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">交易日期：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.tranDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">柜员流水号：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.tellSeqNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">经办机构：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.appBranchNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">管理机构：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.manageBranchId}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">客户号：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.clientNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">合同号：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.contractNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">业务类型：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.bussType|codeValuePie:bussTypeOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">担保方式：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.guaranteeMode|codeValuePie:guaranteeModeOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">结算账号：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.settleAcctNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">签发标识：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.signFlag|codeValuePie:qianFaClassOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">签发行行名：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.billBankName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">签发行行号：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.billBankId}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">票据编号：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.billCode}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">票据号码：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.billNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">币种：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.ccy}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">票据金额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.billAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">票据日期：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.billDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">票据到期日期：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.billPayDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">收款人名称：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.payeeName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">收款人账号：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.payeeAcctNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">收款人开户行行号：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.payeeOpenBranch}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">收款人开户行名称：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.payeeBankName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">保证金币种：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.guaranteeCcy}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">保证金：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.guaranteeAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">保证金比率：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.guaranteeRate/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">保证金账号：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.guaranteeAcctNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">质押金额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.pledgeAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">质押率：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.pledgeRate/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">敞口金额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.gapAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">手续费比率：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.commissionRate/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">付款日期：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.payDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">变更日期：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.changeDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">催收签字日期：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.signDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">垫款金额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.advancedAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">垫款日期：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.advancedDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">当前余额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.balance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">正常余额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.normalLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">关注余额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.interestLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">次级余额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.secondaryLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">可疑余额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.doubtLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">损失余额：</span><span class=\"ui-g-6\">{{(acceptancetanceDetail.lossLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">清分日期：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.clearingDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">票据状态：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.newBillStatus|codeValuePie:newBillStatusOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">业务状态：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.bussStatus|codeValuePie:bussStatusOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">注销日期：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.closeDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">责任人：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.liablePersonName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">调查人：</span><span class=\"ui-g-6\">{{acceptancetanceDetail.investigatorName}}</span></div>\r\n<p-growl [(value)]=\"msgs\"></p-growl> -->\r\n\r\n<div class=\"ui-g-12\">\r\n  <div class=\"ui-g-12\">\r\n    承兑信息：\r\n  </div>\r\n  <div class=\"nopad ui-g-12\">\r\n    <div class=\"nopad ui-g-4\">\r\n      <div class=\"ui-g-6\">\r\n        合同编号\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        {{inValue.contractNo}}\r\n      </div>\r\n    </div>\r\n    <div class=\"nopad ui-g-4\">\r\n      <div class=\"ui-g-6\">\r\n        票据金额\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        {{(inValue.billAmt/1)|number:'1.2-2'}}\r\n      </div>\r\n    </div>\r\n    <div class=\"nopad ui-g-4\">\r\n      <div class=\"ui-g-6\">\r\n        敞口金额\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        {{(inValue.gapAmt/1)|number:'1.2-2'}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"nopad ui-g-12\">\r\n    <div class=\"nopad ui-g-4\">\r\n      <div class=\"ui-g-6\">\r\n        余额\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        {{(inValue.balance/1)|number:'1.2-2'}}\r\n      </div>\r\n    </div>\r\n    <div class=\"nopad ui-g-4\">\r\n      <div class=\"ui-g-6\">\r\n        签发行行号\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        {{inValue.billBankId}}\r\n      </div>\r\n    </div>\r\n    <div class=\"nopad ui-g-4\">\r\n      <div class=\"ui-g-6\">\r\n        十级分类\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        {{inValue.tenType|codeValuePie:tenClassOptions}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"nopad ui-g-12\">\r\n    <div class=\"nopad ui-g-4\">\r\n      <div class=\"ui-g-6\">\r\n        经办日期\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        {{inValue.appDate|timeValuePie}}\r\n      </div>\r\n    </div>\r\n    <div class=\"nopad ui-g-4\">\r\n      <div class=\"ui-g-6\">\r\n        经办人\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        {{inValue.appUserId}}\r\n      </div>\r\n    </div>\r\n    <div class=\"nopad ui-g-4\">\r\n      <div class=\"ui-g-6\">\r\n        合同状态\r\n      </div>\r\n      <div class=\"ui-g-6\">\r\n        {{inValue.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui-g-12\" style=\"overflow-x:scroll\">\r\n    <p-dataTable [value]=\"holdDepositInfo\" [emptyMessage]=\"tabMesg\">\r\n      <p-column>\r\n        <ng-template pTemplate=\"header\">\r\n          <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" binary=\"true\" [(ngModel)]=\"PLCheck\" (click)=\"PLCheckAll()\"></p-checkbox>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-col=\"rowData\" let-ri=\"rowIndex\">\r\n          <p-checkbox name=\"groupname\" [value]=\"ri\" binary=\"true\" [(ngModel)]=\"col.PLbox\" (onChange)=\"PLCheckbox(ri,col)\"></p-checkbox>\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column header=\"序号\">\r\n        <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          {{ri+1}}\r\n        </ng-template>\r\n      </p-column>\r\n      <!-- <p-column field=\"clientName\" header=\"出票人全称\"></p-column> -->\r\n      <!-- <p-column field=\"billBankId\" header=\"签发行\"></p-column>\r\n      <p-column field=\"interrstAcctNo\" header=\"账号\"></p-column> -->\r\n      <p-column field=\"payeeName\" header=\"收款人全称\"></p-column>\r\n      <p-column field=\"payeeBankName\" header=\"收款人开户银行\"></p-column>\r\n      <p-column field=\"payeeAcctNo\" header=\"收款人账号\"></p-column>\r\n      <p-column field=\"draftNo\" header=\"汇票号码\"></p-column>\r\n      <p-column field=\"billAmt\" header=\"汇票金额（元）\">\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          {{(col.billAmt/1)|number:'1.2-2'}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"billSignDate\" header=\"出票日期\">\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          {{col.billSignDate|timeValuePie}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"matureDate\" header=\"到期日期\">\r\n        <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n          {{col.matureDate|timeValuePie}}\r\n        </ng-template>\r\n      </p-column>\r\n      <p-column field=\"advPayBalance\" header=\"当前余额\">\r\n          <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              {{(col.advPayBalance/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n      </p-column>\r\n      <p-column field=\"draftStatus\" header=\"汇票状态\"></p-column>\r\n    </p-dataTable>\r\n    <p-paginator [rows]=\"holdDepositInfopageNum\" [totalRecords]=\"holdDepositInfototalNum\" (onPageChange)=\"paginate($event)\" [rowsPerPageOptions]=\"[10,20,50,200]\"></p-paginator>\r\n\r\n  </div>\r\n  <div class=\"adjust\" *ngIf=\"inValue.temp && inValue.temp=='zishen'\">\r\n    <div>\r\n      <a style=\"color:#fff;\">风险资产处置申请</a>\r\n      <ul class=\"list\">\r\n        <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dangerAddCD()\">新增</li>\r\n        <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dangerUpdateCD()\">修改</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/acceptance-detail/acceptance-detail.component.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/acceptance-detail/acceptance-detail.component.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui-g .tab {\n  padding: 0; }\n  .ui-g .tab .ui-g-11 span {\n    background: #80CEEF; }\n  :host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n  .nopad {\n  padding: 0 !important; }\n  .adjust div {\n  display: inline-block;\n  border-radius: 3px;\n  -moz-border-radius: 3px;\n  -webkit-border-radius: 3px;\n  -o-border-radius: 3px;\n  -ms-border-radius: 3px;\n  text-align: center;\n  position: relative;\n  padding: 3px 17px;\n  background: #d7e9e8;\n  color: #19b0c8;\n  box-shadow: none;\n  border: 1px solid #a7d3d9;\n  border-bottom: 3px solid #b5d8dd; }\n  .adjust div a {\n    color: #29b1c1 !important;\n    cursor: pointer; }\n  .adjust div:hover .list {\n    display: block; }\n  .adjust div:hover .list:hover {\n      display: block; }\n  .adjust .list {\n  position: absolute;\n  list-style-type: none;\n  top: 8px;\n  left: -15px;\n  z-index: 10000;\n  display: none; }\n  .adjust .list li {\n    box-sizing: border-box;\n    width: 100px;\n    text-align: center;\n    border: 1px solid #ffffff;\n    cursor: pointer;\n    margin: 1px;\n    padding: 3px 0 3px 0;\n    border-radius: 6px;\n    -moz-border-radius: 6px;\n    -webkit-border-radius: 6px;\n    -o-border-radius: 6px;\n    -ms-border-radius: 6px;\n    box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n    -moz-box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n    -webkit-box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n    -o-box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n    -ms-box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n    background: #eef3f6 !important;\n    color: #29b1c1 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9jcmVkaXQtbWFuYWdlcm1lbnQvYWNjZXB0YW5jZS1kZXRhaWwvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcY3JlZGl0LW1hbmFnZXJtZW50XFxhY2NlcHRhbmNlLWRldGFpbFxcYWNjZXB0YW5jZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxVQUFVLEVBQUE7RUFGbEI7SUFLZ0IsbUJBQW1CLEVBQUE7RUFNbkM7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0kscUJBQXFCLEVBQUE7RUFFekI7RUFFUSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0NBQWdDLEVBQUE7RUFmeEM7SUFpQlkseUJBQXlCO0lBQ3pCLGVBQWUsRUFBQTtFQWxCM0I7SUF5QmdCLGNBQWMsRUFBQTtFQXpCOUI7TUF1Qm9CLGNBQWMsRUFBQTtFQXZCbEM7RUE4QlEsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixRQUFRO0VBQ1IsV0FBVztFQUNYLGNBQWM7RUFDZCxhQUFhLEVBQUE7RUFuQ3JCO0lBcUNZLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLDRDQUE0QztJQUM1QyxpREFBaUQ7SUFDakQsb0RBQW9EO0lBQ3BELCtDQUErQztJQUMvQyxnREFBZ0Q7SUFDaEQsOEJBQThCO0lBQzlCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9jcmVkaXQtbWFuYWdlcm1lbnQvYWNjZXB0YW5jZS1kZXRhaWwvYWNjZXB0YW5jZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktZyB7XHJcbiAgICAudGFiIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC51aS1nLTExIHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODBDRUVGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAudWktZGF0YXRhYmxlIHRhYmxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRhYmxlLWxheW91dDogaW5oZXJpdDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5ub3BhZCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmFkanVzdCB7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy8gd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDNweCAxN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkN2U5ZTg7XHJcbiAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYTdkM2Q5O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYjVkOGRkO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogIzI5YjFjMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpc3Qge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcbiAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvLyBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMCAzcHggMDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIC1vLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggNy41cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAxcHggNy41cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNy41cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIC1vLWJveC1zaGFkb3c6IDAgMXB4IDcuNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAtbXMtYm94LXNoYWRvdzogMCAxcHggNy41cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWYzZjYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICMyOWIxYzEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/acceptance-detail/acceptance-detail.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/acceptance-detail/acceptance-detail.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: AcceptanceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptanceDetailComponent", function() { return AcceptanceDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bean/tenType.bean */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/bean/tenType.bean.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { QianFaClass, NewBillStatus, BussStatus, BussType, GuaranteeMode, HeTongZhuangTai, TenClass } from '../../../constant/custView.codeValue';




//承兑详情
var AcceptanceDetailComponent = /** @class */ (function () {
    function AcceptanceDetailComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageNum = 1;
        this.pageSize = 10;
        this.msgs = [];
        // acceptancetanceDetail:AcceptancetanceDetailBean=new AcceptancetanceDetailBean();
        // qianFaClassOptions:any[]=QianFaClass;//签发标识
        // newBillStatusOptions:any[]=NewBillStatus;//票据状态
        // bussStatusOptions:any[]=BussStatus;//业务状态
        // bussTypeOptions:any[]=BussType;//业务类型
        // guaranteeModeOptions:any[]=GuaranteeMode;//担保方式
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.heTongZhuangTaiOptions = []; //合同状态
        this.tenClassOptions = []; //十级分类
        this.dataPL = [];
        this.PLCheck = false;
        this.tenTypeBean = new _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_5__["TenTypeBean"]();
        this.codeVal();
        this.heTongZhuangTaiOptions = this.code['HeTongZhuangTai'];
        this.tenClassOptions = this.code['TenClass'];
    }
    // ngOnInit() {
    // }
    // ngOnChanges(){
    //   if(this.inValue){
    //     this.httpService.BZ_0200300000302_LOAN({number:this.inValue.number}).subscribe(data=>{
    //       if(data.returnCode.code=='success'){
    //         this.acceptancetanceDetail=data;
    //         this.httpService.queryOrgById({orgId:this.acceptancetanceDetail.appBranchNo}).subscribe(data=>{
    //           if(data.orgName!=null){
    //             this.acceptancetanceDetail.appBranchNo=data.orgName;              
    //           }
    //         });
    //         this.httpService.queryOrgById({orgId:this.acceptancetanceDetail.manageBranchId}).subscribe(data=>{
    //           if(data.orgName!=null){
    //             this.acceptancetanceDetail.manageBranchId=data.orgName;              
    //           }
    //         });
    //         this.httpService.queryTellerById({ tellerId: this.acceptancetanceDetail.investigatorName }).subscribe(data => {
    //           this.acceptancetanceDetail.investigatorName = data.tellerName;
    //         });
    //         this.httpService.queryTellerById({ tellerId: this.acceptancetanceDetail.liablePersonName }).subscribe(data => {
    //           this.acceptancetanceDetail.liablePersonName = data.tellerName;
    //         });
    //       }else{
    //         data.returnCode.message ? data.returnCode.message : '调用服务失败';
    //         this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
    //       }
    //     })
    //   }
    // }
    AcceptanceDetailComponent.prototype.ngOnChanges = function () {
    };
    AcceptanceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.inValue.guaranteeFlag && this.inValue.guaranteeFlag == 1) { //承兑担保
            this.inValue['contractNo'] = this.inValue.contrId;
            this.inValue['clientNo'] = this.inValue.custNo;
            this.inValue['billAmt'] = this.inValue.par;
            this.inValue['gapAmt'] = this.inValue.gapAmount;
            this.inValue['tenType'] = this.inValue.tenLvlClass;
            this.inValue['appUserId'] = this.inValue.agent;
        }
        console.log(this.inValue);
        this.custNo = this.commfunc.getSessionData('custNo');
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.inValue.appUserId && this.inValue.appUserId != '' && this.inValue.appUserId != null) {
            this.httpService.queryTellerById({ tellerId: this.inValue.appUserId }).subscribe(function (data) {
                if (data.tellerName && data.tellerName != '' && data.tellerName != null) {
                    _this.inValue.appUserId = data.tellerName;
                }
            });
        }
        this.selectHoldDepositInfo();
        //
        var param = {
            custNo: this.custNo
        };
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.dataSourceId == 'BR00A') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_HTTP_XIN"];
            }
            else if (data.dataSourceId == 'BR00B') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_HTTP_XIN_C"];
            }
            else if (!data.dataSourceId || data.dataSourceId == '') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_4__["TZB_HTTP_XIN"];
            }
        });
    };
    AcceptanceDetailComponent.prototype.selectHoldDepositInfo = function () {
        var _this = this;
        var param = {
            contractNo: this.inValue.contractNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize,
        };
        if (this.inValue.clientFlag && this.inValue.clientFlag == '2') { //客户属性
            this.itemsParam = {
                contractNo: this.inValue.contractNo,
                clientNo: this.inValue.clientNo,
                tranType: '0',
                billCategory: '1',
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                clientFlag: '2'
            };
        }
        else if (this.inValue.clientFlag && this.inValue.clientFlag == '3') {
            this.itemsParam = {
                contractNo: this.inValue.contractNo,
                clientNo: this.inValue.clientNo,
                tranType: '0',
                billCategory: '1',
                pageNum: this.pageNum,
                pageSize: this.pageSize,
                clientFlag: '3'
            };
        }
        else {
            this.itemsParam = {
                contractNo: this.inValue.contractNo,
                clientNo: this.inValue.clientNo,
                tranType: '0',
                billCategory: '1',
                pageNum: this.pageNum,
                pageSize: this.pageSize,
            };
        }
        //如果合同状态是未执行（01）
        if (this.inValue.contractStatus == '01') {
            this.httpService.BZ_0300300004415_LOAN(param).subscribe(function (data) {
                _this.holdDepositInfopageNum = data.pageNum;
                _this.holdDepositInfopageSize = data.pageSize;
                _this.holdDepositInfototalNum = data.totalNum;
                _this.holdDepositInfo = data.infoList;
            });
        }
        else {
            //console.log('1122     ' + this.itemsParam)
            this.httpService.BZ_0200300000301_LOAN(this.itemsParam).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.holdDepositInfopageNum = data.pageNum;
                    _this.holdDepositInfopageSize = data.pageSize;
                    _this.holdDepositInfototalNum = data.totalNum;
                    data.infoList.forEach(function (item) {
                        item['draftNo'] = item.billNo;
                        item['billBankId'] = item.billBankName;
                        item['billSignDate'] = item.billDate;
                        item['matureDate'] = item.billPayDate;
                    });
                    _this.holdDepositInfo = data.infoList;
                }
            });
        }
    };
    AcceptanceDetailComponent.prototype.paginate = function (event) {
        this.pageSize = event.rows;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectHoldDepositInfo();
    };
    //全选
    AcceptanceDetailComponent.prototype.PLCheckAll = function () {
        this.dataPL = [];
        for (var i = 0; i < this.holdDepositInfo.length; i++) {
            if (this.PLCheck == true) {
                this.holdDepositInfo[i].PLbox = true;
                this.dataPL.push(this.holdDepositInfo[i]);
            }
            else {
                this.dataPL = [];
                this.holdDepositInfo[i].PLbox = false;
            }
        }
    };
    //单选按钮
    AcceptanceDetailComponent.prototype.PLCheckbox = function (i, data) {
        var _this = this;
        if (data.PLbox) {
            this.dataPL.push(data);
        }
        else {
            this.dataPL.forEach(function (item, i) {
                if (item == data) {
                    _this.dataPL.splice(i, 1);
                }
            });
        }
        if (this.dataPL.length == this.holdDepositInfo.length) {
            this.PLCheck = true;
        }
        else {
            this.PLCheck = false;
        }
    };
    AcceptanceDetailComponent.prototype.dangerAddCD = function () {
        var _this = this;
        var jieju;
        this.dataPL.forEach(function (item) {
            jieju = item.duebillNo;
        });
        if (jieju == '' || jieju == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "此合同状态不支持风险资产处置" }];
            return;
        }
        else {
            var timestamp_1 = new Date().getTime();
            var target = "custLinkForm" + timestamp_1;
            // this.commfunc.createBlank(target);
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&MorefieldValue=030001&param=" + jieju + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|SYS_FIX_WHERE=F9B2E807758C7365FE7EE21FEABF7001:(state='000' or (state='991' and spjd='001' ) or state='996')|moduleName=|main_moduleName=|moduleTable=F9B2E807758C7365FE7EE21FEABF7006|moduleProc=629|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleTable=F9B2E807758C7365FE7EE21FEABF7006|MorefieldName=YWPZ";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
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
    //承兑风险修改
    AcceptanceDetailComponent.prototype.dangerUpdateCD = function () {
        var _this = this;
        var jieju;
        this.dataPL.forEach(function (item) {
            jieju = item.duebillNo;
        });
        if (jieju == '' || jieju == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "此合同状态不支持风险资产处置" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_2 = new Date().getTime();
            var target = "custLinkForm" + timestamp_2;
            // this.commfunc.createBlank(target);
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&where=(CRD_FXZC.YWBH='" + jieju + "' )&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=F9B2E807758C7365FE7EE21FEABF7001:(state='000' or (state='991' and spjd='001' ) or state='996')|isProcModule=no|moduleProc=629|moduleName=|moduleTable=F9B2E807758C7365FE7EE21FEABF7001|moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleName=|main_moduleTable=F9B2E807758C7365FE7EE21FEABF7001";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_2, features, closeOnLoseFocus);
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
    //码值
    AcceptanceDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AcceptanceDetailComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AcceptanceDetailComponent.prototype, "outValue", void 0);
    AcceptanceDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'acceptance-detail',
            template: __webpack_require__(/*! ./acceptance-detail.component.html */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/acceptance-detail/acceptance-detail.component.html"),
            styles: [__webpack_require__(/*! ./acceptance-detail.component.scss */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/acceptance-detail/acceptance-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]])
    ], AcceptanceDetailComponent);
    return AcceptanceDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/bulkpercredit-detail/bulkpercredit-detail.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/bulkpercredit-detail/bulkpercredit-detail.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n  <p-dataTable [value]=\"bulkpercreditDetailInfo\" [emptyMessage]=\"tabMesg\">\r\n    <p-column field=\"vetoerNo\" header=\"否决人工号\"></p-column>\r\n    <p-column field=\"vetoBankNo\" header=\"否决机构\"></p-column>\r\n    <p-column field=\"handleTime\" header=\"处理时间\">\r\n      <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n        {{col.handleTime|timeValuePie}}\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"vetoType\" header=\"否决类型\">\r\n      <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n        {{col.vetoType|codeValuePie:vetoTypeOptions}}\r\n      </ng-template>\r\n    </p-column>\r\n    <p-column field=\"subVetoType\" header=\"二级否决类型\">\r\n      <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n        {{col.subVetoType|codeValuePie:subVetoTypeOptions}}\r\n      </ng-template>\r\n    </p-column>\r\n    <!-- <p-column field=\"vetoReason\" header=\"否决原因\"></p-column> -->\r\n  </p-dataTable>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/bulkpercredit-detail/bulkpercredit-detail.component.scss":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/bulkpercredit-detail/bulkpercredit-detail.component.scss ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvY3JlZGl0LW1hbmFnZXJtZW50L2J1bGtwZXJjcmVkaXQtZGV0YWlsL2J1bGtwZXJjcmVkaXQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/bulkpercredit-detail/bulkpercredit-detail.component.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/bulkpercredit-detail/bulkpercredit-detail.component.ts ***!
  \************************************************************************************************************************/
/*! exports provided: BulkpercreditDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkpercreditDetailComponent", function() { return BulkpercreditDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
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



// import {VetoType,SubVetoType} from '../../../constant/custView.codeValue';

var BulkpercreditDetailComponent = /** @class */ (function () {
    function BulkpercreditDetailComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_2__["tableMessage"];
        this.bulkpercreditDetailInfo = [];
        this.subVetoTypeOptions = []; //二级否决类型
        this.vetoTypeOptions = []; //否决类型
        this.codeVal();
        this.subVetoTypeOptions = this.code['SubVetoType'];
        this.vetoTypeOptions = this.code['VetoType'];
    }
    BulkpercreditDetailComponent.prototype.ngOnInit = function () {
    };
    BulkpercreditDetailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        var param = {
            pk: this.inValue.pk
        };
        this.httpService.BZ_0200300002018_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                data.infoList.forEach(function (item) {
                    _this.httpService.queryOrgById({ orgId: item.vetoBankNo }).subscribe(function (data) {
                        if (data.orgName != null) {
                            item.vetoBankNo = data.orgName;
                        }
                    });
                });
                _this.bulkpercreditDetailInfo = data.infoList;
            }
        });
    };
    //码值
    BulkpercreditDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BulkpercreditDetailComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BulkpercreditDetailComponent.prototype, "outValue", void 0);
    BulkpercreditDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'bulkpercredit-detail',
            template: __webpack_require__(/*! ./bulkpercredit-detail.component.html */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/bulkpercredit-detail/bulkpercredit-detail.component.html"),
            styles: [__webpack_require__(/*! ./bulkpercredit-detail.component.scss */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/bulkpercredit-detail/bulkpercredit-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], BulkpercreditDetailComponent);
    return BulkpercreditDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/contract-detail/contract-detail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/contract-detail/contract-detail.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customLoan\" id=\"customLoan\">\r\n    <div class=\"ui-g-12 btn\">\r\n        <span class=\"spcs\">\r\n            <a (click)=\"showDetail(2)\" class=\"colletCooperator\">担保信息</a>\r\n        </span>\r\n        <span class=\"spcs\">\r\n            <a (click)=\"showDetail(3)\" class=\"colletCooperator\">共同借款人</a>\r\n        </span>\r\n        <div class=\"container\" [ngSwitch]=\"myVar\">\r\n            <div class=\"ui-g-12\" *ngSwitchCase=\"2\">\r\n                <p-dataTable [value]=\"loanGuarInfoItems\" [emptyMessage]=\"tabMesg\">\r\n                    <p-column field=\"clientNo\" header=\"客户号\">\r\n                        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                            <a *ngIf=\"(num==2)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\" target=\"_blank\">{{col.clientNo}}</a>\r\n                            <a *ngIf=\"(num!=2)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}\" target=\"_blank\">{{col.clientNo}}</a>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"clientName\" header=\"客户名称\"></p-column>\r\n                    <p-column field=\"pledgeAmt\" header=\"担保/抵质押金额（单位：元）\">\r\n                        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                            {{(col.pledgeAmt/1)|number:'1.2-2'}}\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"startDate\" header=\"开始日期\">\r\n                        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                            {{col.startDate|timeValuePie}}\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"matureDate\" header=\"到期日期\">\r\n                        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                            {{col.matureDate|timeValuePie}}\r\n                        </ng-template>\r\n                    </p-column>\r\n                </p-dataTable>\r\n            </div>\r\n            <div class=\"ui-g-12\" *ngSwitchCase=\"3\">\r\n                <p-dataTable [value]=\"borrowerItems\" [emptyMessage]=\"tabMesg\">\r\n                    <p-column field=\"clientNo\" header=\"客户号\">\r\n                        <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                            <a *ngIf=\"(num==2)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\" target=\"_blank\">{{col.clientNo}}</a>\r\n                            <a *ngIf=\"(num!=2)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}\" target=\"_blank\">{{col.clientNo}}</a>\r\n                        </ng-template>\r\n                    </p-column>\r\n                    <p-column field=\"clientName\" header=\"客户名称\"></p-column>\r\n                </p-dataTable>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"ui-g-12 btn\" style=\"text-align:center\">\r\n        <span (click)=\"close()\" class=\"spcs\" style=\"margin-left:40%;\">\r\n            <a class=\"colletCooperator\">关闭</a>\r\n        </span>\r\n    </div>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/contract-detail/contract-detail.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/contract-detail/contract-detail.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customLoan {\n  width: 100%;\n  height: 600px;\n  max-height: 700px; }\n  .customLoan .btn .spcs {\n    background-color: #19b0c8;\n    border-radius: 6px;\n    color: #FFFFFF;\n    height: 27px;\n    line-height: 27px;\n    display: block;\n    width: 14%;\n    float: left;\n    margin-left: 2px;\n    text-align: center; }\n  .customLoan .btn .colletCooperator {\n    cursor: pointer;\n    color: #FFFFFF; }\n  #id_1 {\n  height: 600px;\n  overflow: auto; }\n  .ui-g-6 {\n  width: 60%;\n  padding: 0 !important; }\n  .ui-g-5 {\n  width: 40%;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9jcmVkaXQtbWFuYWdlcm1lbnQvY29udHJhY3QtZGV0YWlsL0Q6XFx3b3JrRm9yUnVuSG9cXDIwMTkwODA1VHpfbmpfRExTXFxmcm9udF9lbmQvc3JjXFxhcHBcXHBhZ2VzXFx0emJcXGN1c3RvbVxcY3VzdG9tLXZpZXdcXGNyZWRpdC1tYW5hZ2VybWVudFxcY29udHJhY3QtZGV0YWlsXFxjb250cmFjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGlCQUFpQixFQUFBO0VBSHJCO0lBTVkseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUE7RUFmOUI7SUFrQlksZUFBZTtJQUNmLGNBQWMsRUFBQTtFQUsxQjtFQUNJLGFBQWE7RUFDYixjQUFjLEVBQUE7RUFHbEI7RUFDSSxVQUFVO0VBQ1YscUJBQXFCLEVBQUE7RUFHekI7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90emIvY3VzdG9tL2N1c3RvbS12aWV3L2NyZWRpdC1tYW5hZ2VybWVudC9jb250cmFjdC1kZXRhaWwvY29udHJhY3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUxvYW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNzAwcHg7XHJcbiAgICAuYnRuIHtcclxuICAgICAgICAuc3BjcyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjdweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTQlO1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29sbGV0Q29vcGVyYXRvciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jaWRfMSB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi51aS1nLTYge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLWctNSB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/contract-detail/contract-detail.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/contract-detail/contract-detail.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ContractDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractDetailComponent", function() { return ContractDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../custom-view.component */ "./src/app/pages/tzb/custom/custom-view/custom-view.component.ts");
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






//贷款明细信息
var ContractDetailComponent = /** @class */ (function () {
    function ContractDetailComponent(httpService, commfunc, router, pagesNum) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.router = router;
        this.pagesNum = pagesNum;
        this.outValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.msgs = [];
        this.myVar = 2;
        this.pageNum = 1;
        this.pageSize = 10;
        this.investIndustryOptions = []; //行业投向
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_3__["tableMessage"]; //表格中无数据时显示的内容
        this.bussTypeOptions = []; //业务类型
        this.guaranteeModeOptions = []; //担保方式
        this.currencyOptions = []; //币种
        this.loanNatureOptions = []; //贷款性质
        this.loanFormOptions = []; //贷款形式
        this.loanTypeOptions = []; //贷款类型
        this.repayTypeOptions = []; //还款方式
        this.countInterrstFlagOptions = []; //计息标志
        this.recycleModeOptions = []; //回收方式
        this.subBussTypeOptions = []; //贷款分类
        this.clientStateOptions = []; //客户状态
        this.tranTypeOptions = []; //交易类型
        this.orgId = '';
        // userId: string = '';
        this.userName = '';
        this.orgName = '';
        this.targetId = '';
        this.date = new Date();
        this.show = true;
        this.custNum = true;
        if (!this.pagesNum.num) {
            this.num = -1;
        }
        else {
            this.num = this.pagesNum.num * 1 + 1;
        }
        this.codeVal();
        this.investIndustryOptions = this.code['InvestIndustry'];
        this.bussTypeOptions = this.code['BussType'];
        this.guaranteeModeOptions = this.code['GuaranteeMode'];
        this.currencyOptions = this.code['CURRENCY'];
        this.loanNatureOptions = this.code['LoanNature'];
        this.loanFormOptions = this.code['LoanForm'];
        this.loanTypeOptions = this.code['LoanType'];
        this.repayTypeOptions = this.code['RepayType'];
        this.countInterrstFlagOptions = this.code['CountInterrstFlag'];
        this.recycleModeOptions = this.code['RecycleMode'];
        this.subBussTypeOptions = this.code['LoanDetailType'];
        this.clientStateOptions = this.code['ClientState'];
        this.tranTypeOptions = this.code['TranType'];
        //-----------------------------------------------------上面是码值
        // this.userId=JSON.parse(this.commfunc.getSessionData('commonHeader')).userId;
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
        if (this.user.targetId) {
            this.targetId = this.user.targetId;
        }
        var a = this.targetId.split('');
        var b = a[a.length - 1];
        if (b == '0') {
            this.biaozhi = 'tzb';
        }
        else if (b == '1') {
            this.biaozhi = 'czb';
        }
        this.newdate = this.commfunc.transDate(this.date);
    }
    ContractDetailComponent.prototype.ngOnInit = function () {
        if (this.commfunc.getSessionDataCH('custNoNum')) {
            this.custNum = false;
        }
    };
    ContractDetailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.inValue) {
            var type = '';
            if (this.inValue.dataFlag == '01') {
                type = '01';
            }
            else if (this.inValue.dataFlag == '02') {
                type = '02';
            }
            else if (this.inValue.dataFlag == '03') {
                type = '03';
            }
            else if (this.inValue.dataFlag == '04') {
                type = '04';
            }
            else if (this.inValue.dataFlag == '05') {
                type = '05';
            }
            var param2 = {
                clientNo: this.inValue.clientNo,
                pageSize: this.pageSize,
                pageNum: this.pageNum,
                bussType: type,
                contractNo: this.inValue.contractNo
            };
            //担保信息
            this.httpService.BZ_0200300000403_LOAN(param2).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.loanGuarInfoItems = data.queryResultArray;
                    _this.loanGuarInfopageNum = data.pageNum;
                    _this.loanGuarInfopageSize = data.pageSize;
                    _this.loanGuarInfototalNum = data.totalNum;
                }
                else {
                    data.returnCode.message ? data.returnCode.message : '调用服务失败';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            });
            var param3 = {
                appUserId: this.userId,
                consumerSeqNo: this.inValue.seqNo
            };
            //共同借款人
            this.httpService.BZ_0200300002003_LOAN(param3).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.borrowerItems = data.infoList;
                    _this.borrowerpageNum = data.pageNum;
                    _this.borrowerpageSize = data.pageSize;
                    _this.borrowertotalNum = data.totalNum;
                }
                else {
                    data.returnCode.message ? data.returnCode.message : '调用服务失败';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            });
        }
    };
    ContractDetailComponent.prototype.showDetail = function (data) {
        var _this = this;
        this.myVar = data;
        setTimeout(function () {
            if (!_this.loanGuarInfoItems || _this.loanGuarInfoItems.length == 0) {
                _this.loanGuarInfoItems = [];
            }
            if (!_this.borrowerItems || _this.borrowerItems.length == 0) {
                _this.borrowerItems = [];
            }
        });
    };
    ContractDetailComponent.prototype.close = function () {
        this.outValue.emit('关闭');
    };
    //转码
    ContractDetailComponent.prototype.codeValue = function (val, arr) {
        if (arr === void 0) { arr = []; }
        var temp = "";
        if (arr.length > 0) {
            arr.forEach(function (item) {
                if (item['label'] == val) {
                    temp = item['value'];
                }
            });
        }
        return temp;
    };
    //贷前
    ContractDetailComponent.prototype.beforeLoan = function () {
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        // this.commfunc.createBlank(target);
        if (this.clientNo && this.tellSeqNo && this.newdate && this.biaozhi) {
            var url = "http://10.1.97.166:9081/SunIAS_V7/CreditImgRequestServlet.do?UID=MOBILE&PWD=cyg&AppID=APP1009&UserID=" + this.userId + "&UserName=" + this.userName + "&OrgID=" + this.orgId + "&OrgName=" + this.orgName + "&info1=BUSI_SERIAL_NO:" + this.tellSeqNo + ";CUSTOMER_NO:" + this.clientNo + ";OBJECT_NAME:APP1009;SERIAL_TYPE:DQ;RIGHT:0100000;FILELEVEL:18;QUERY_TIME:" + this.newdate + ";BANK_FLAG:" + this.biaozhi + ";";
            var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
            var closeOnLoseFocus = 'closeOnLoseFocus';
            this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
        }
        else {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "影像链接参数不全!" }];
        }
    };
    //码值
    ContractDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ContractDetailComponent.prototype.custNumClick = function () {
        if (this.commfunc.getSessionDataCH('custNoNum') && this.commfunc.getSessionDataCH('custNoNum') == '1') {
            this.commfunc.setSessionDataCH('custNoNum', '2');
        }
    };
    ContractDetailComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContractDetailComponent.prototype, "inValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ContractDetailComponent.prototype, "outValue", void 0);
    ContractDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contract-detail',
            template: __webpack_require__(/*! ./contract-detail.component.html */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/contract-detail/contract-detail.component.html"),
            styles: [__webpack_require__(/*! ./contract-detail.component.scss */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/contract-detail/contract-detail.component.scss")],
            providers: [app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"]]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _custom_view_component__WEBPACK_IMPORTED_MODULE_5__["CustomView"]; }))),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_2__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _custom_view_component__WEBPACK_IMPORTED_MODULE_5__["CustomView"]])
    ], ContractDetailComponent);
    return ContractDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-business-detail/credit-business-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-business-detail/credit-business-detail.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">交易日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.tranDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">柜员流水号：</span><span class=\"ui-g-6\">{{creditBusinessDetail.tellSeqNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">经办机构：</span><span class=\"ui-g-6\">{{creditBusinessDetail.appBranchNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">管理机构：</span><span class=\"ui-g-6\">{{creditBusinessDetail.manageBranchId}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">客户号：</span><span class=\"ui-g-6\">{{creditBusinessDetail.clientNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">合同号：</span><span class=\"ui-g-6\">{{creditBusinessDetail.contractNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">业务类型：</span><span class=\"ui-g-6\">{{creditBusinessDetail.bussType|codeValuePie:bussTypeOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">担保方式：</span><span class=\"ui-g-6\">{{creditBusinessDetail.guaranteeMode|codeValuePie:guaranteeModeOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">结算账号：</span><span class=\"ui-g-6\">{{creditBusinessDetail.settleAcctNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">签发标识：</span><span class=\"ui-g-6\">{{creditBusinessDetail.signFlag|codeValuePie:qianFaClassOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">签发行行名：</span><span class=\"ui-g-6\">{{creditBusinessDetail.billBankName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">签发行行号：</span><span class=\"ui-g-6\">{{creditBusinessDetail.billBankId}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">进口合同号：</span><span class=\"ui-g-6\">{{creditBusinessDetail.importContractNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">进口货物名称：</span><span class=\"ui-g-6\">{{creditBusinessDetail.importGoodsName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">进口合同金额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.importContractAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">装船日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.shipmentDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">付汇日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.paymentDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">启运港：</span><span class=\"ui-g-6\">{{creditBusinessDetail.loadingPort}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">目的港：</span><span class=\"ui-g-6\">{{creditBusinessDetail.destinationPort}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">支付类型：</span><span class=\"ui-g-6\">{{creditBusinessDetail.payType|codeValuePie:payTypeOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">远期天数：</span><span class=\"ui-g-6\">{{creditBusinessDetail.forwardDays}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">国籍：</span><span class=\"ui-g-6\">{{creditBusinessDetail.countryCitizen|codeValuePie:countryOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">受益人名称：</span><span class=\"ui-g-6\">{{creditBusinessDetail.beneficiaryName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">信用证币种：</span><span class=\"ui-g-6\">{{creditBusinessDetail.creditCcy|codeValuePie:currencyOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">信用证金额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.creditAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">开证日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.issuingDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">保证金币种：</span><span class=\"ui-g-6\">{{creditBusinessDetail.guaranteeCcy|codeValuePie:currencyOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">保证金：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.guaranteeAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">保证金比率：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.guaranteeRate/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">保证金账号：</span><span class=\"ui-g-6\">{{creditBusinessDetail.guaranteeAcctNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">质押金额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.pledgeAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">质押率：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.pledgeRate/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">敞口金额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.gapAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">手续费比率：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.commissionRate/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">状态：</span><span class=\"ui-g-6\">{{creditBusinessDetail.statusType|codeValuePie:statusTypeOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">注销日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.closeDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">变更日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.changeDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">催收签字日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.signDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">垫款金额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.advancedAmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">垫款日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.advancedDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">当前余额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.balance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">正常余额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.normalLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">关注余额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.interestLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">次级余额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.secondaryLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">可疑余额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.doubtLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">损失余额：</span><span class=\"ui-g-6\">{{(creditBusinessDetail.lossLoanBalance/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">清分日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.clearingDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">撤销日期：</span><span class=\"ui-g-6\">{{creditBusinessDetail.revocationDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">责任人：</span><span class=\"ui-g-6\">{{creditBusinessDetail.liablePersonName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">调查人：</span><span class=\"ui-g-6\">{{creditBusinessDetail.investigatorName}}</span></div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-business-detail/credit-business-detail.component.scss":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-business-detail/credit-business-detail.component.scss ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvY3JlZGl0LW1hbmFnZXJtZW50L2NyZWRpdC1idXNpbmVzcy1kZXRhaWwvY3JlZGl0LWJ1c2luZXNzLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-business-detail/credit-business-detail.component.ts":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-business-detail/credit-business-detail.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: CreditBusinessDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditBusinessDetailComponent", function() { return CreditBusinessDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
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



// import {StatusType,BussType,QianFaClass,NewBillStatus,BussStatus,GuaranteeMode,PayType,COUNTRY,CURRENCY} from '../../../constant/custView.codeValue';

//信用证业务详情
var CreditBusinessDetailComponent = /** @class */ (function () {
    function CreditBusinessDetailComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.msgs = [];
        this.currencyOptions = []; //币种  
        this.creditBusinessDetail = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_2__["CreditBusinessDetailBean"]();
        this.guaranteeModeOptions = []; //担保方式
        this.qianFaClassOptions = []; //签发标志
        this.payTypeOptions = []; //支付类型
        this.countryOptions = []; //国籍
        this.bussTypeOptions = []; //业务类型
        this.statusTypeOptions = []; //状态
        this.codeVal();
        this.currencyOptions = this.code['CURRENCY'];
        this.guaranteeModeOptions = this.code['GuaranteeMode'];
        this.qianFaClassOptions = this.code['QianFaClass'];
        this.payTypeOptions = this.code['PayType'];
        this.countryOptions = this.code['COUNTRY'];
        this.bussTypeOptions = this.code['BussType'];
        this.statusTypeOptions = this.code['StatusType'];
        //-------------------------------------------上面是码值
    }
    CreditBusinessDetailComponent.prototype.ngOnInit = function () {
    };
    CreditBusinessDetailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.inValue) {
            this.httpService.BZ_0200300000502_LOAN({ contractNo: this.inValue.contractNo }).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.creditBusinessDetail = data;
                    _this.httpService.queryTellerById({ tellerId: _this.creditBusinessDetail.investigatorName }).subscribe(function (data) {
                        _this.creditBusinessDetail.investigatorName = data.tellerName;
                    });
                    _this.httpService.queryTellerById({ tellerId: _this.creditBusinessDetail.liablePersonName }).subscribe(function (data) {
                        _this.creditBusinessDetail.liablePersonName = data.tellerName;
                    });
                    _this.httpService.queryOrgById({ orgId: _this.creditBusinessDetail.appBranchNo }).subscribe(function (data) {
                        if (data.orgName != null) {
                            _this.creditBusinessDetail.appBranchNo = data.orgName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: _this.creditBusinessDetail.manageBranchId }).subscribe(function (data) {
                        if (data.orgName != null) {
                            _this.creditBusinessDetail.manageBranchId = data.orgName;
                        }
                    });
                }
                else {
                    data.returnCode.message ? data.returnCode.message : '调用服务失败';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            });
        }
    };
    //码值
    CreditBusinessDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreditBusinessDetailComponent.prototype, "inValue", void 0);
    CreditBusinessDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'credit-business-detail',
            template: __webpack_require__(/*! ./credit-business-detail.component.html */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-business-detail/credit-business-detail.component.html"),
            styles: [__webpack_require__(/*! ./credit-business-detail.component.scss */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-business-detail/credit-business-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], CreditBusinessDetailComponent);
    return CreditBusinessDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-line-detail/credit-line-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-line-detail/credit-line-detail.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">客户号：</span><span class=\"ui-g-6\">{{creditLineDetail.clientNo}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">业务种类编码：</span><span class=\"ui-g-6\">{{creditLineDetail.tranCategory|codeValuePie:tranCategoryOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">使用类型：</span><span class=\"ui-g-6\">{{creditLineDetail.useType|codeValuePie:useTypeOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">币种：</span><span class=\"ui-g-6\">{{creditLineDetail.ccy}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">授信额度：</span><span class=\"ui-g-6\">{{(creditLineDetail.creditLmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">已用额度：</span><span class=\"ui-g-6\">{{(creditLineDetail.usedLmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">审批额度：</span><span class=\"ui-g-6\">{{(creditLineDetail.approvedLmt/1)|number:'1.2-2'}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">生效日期：</span><span class=\"ui-g-6\">{{creditLineDetail.effectDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">到期日期：</span><span class=\"ui-g-6\">{{creditLineDetail.matureDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">变更日期：</span><span class=\"ui-g-6\">{{creditLineDetail.changeDate|timeValuePie}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">冻结标志：</span><span class=\"ui-g-6\">{{creditLineDetail.flag|codeValuePie:flagOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">担保方式：</span><span class=\"ui-g-6\">{{creditLineDetail.guaranteeMode|codeValuePie:guaranteeModeOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">共享人：</span><span class=\"ui-g-6\">{{creditLineDetail.sharerName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">状态：</span><span class=\"ui-g-6\">{{creditLineDetail.statusType|codeValuePie:zhStatusTypeOptions}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">备注：</span><span class=\"ui-g-6\">{{creditLineDetail.remark}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">调查人：</span><span class=\"ui-g-6\">{{creditLineDetail.investigatorName}}</span></div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\"><span class=\"ui-g-6\" style=\"text-align:right;\">经办机构：</span><span class=\"ui-g-6\">{{creditLineDetail.appBranchNo}}</span></div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-line-detail/credit-line-detail.component.scss":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-line-detail/credit-line-detail.component.scss ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvY3JlZGl0LW1hbmFnZXJtZW50L2NyZWRpdC1saW5lLWRldGFpbC9jcmVkaXQtbGluZS1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-line-detail/credit-line-detail.component.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-line-detail/credit-line-detail.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: CreditLineDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditLineDetailComponent", function() { return CreditLineDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
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



// import {ZhStatusType,Flag,UseType,TranCategory,QianFaClass,NewBillStatus,BussStatus,GuaranteeMode,PayType,COUNTRY} from '../../../constant/custView.codeValue';

//综合授信额度
var CreditLineDetailComponent = /** @class */ (function () {
    function CreditLineDetailComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.msgs = [];
        this.creditLineDetail = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_2__["CreditLineBean"]();
        this.guaranteeModeOptions = []; //担保方式
        this.zhStatusTypeOptions = []; //状态
        this.flagOptions = []; //标志
        this.useTypeOptions = []; //使用类型
        this.tranCategoryOptions = []; //业务种类编码
        this.codeVal();
        this.guaranteeModeOptions = this.code['GuaranteeMode'];
        this.zhStatusTypeOptions = this.code['ZhStatusType'];
        this.flagOptions = this.code['Flag'];
        this.useTypeOptions = this.code['UseType'];
        this.tranCategoryOptions = this.code['TranCategory'];
        //-----------------------------------上面是码值
    }
    CreditLineDetailComponent.prototype.ngOnInit = function () {
    };
    CreditLineDetailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.inValue) {
            this.httpService.BZ_0200300000202_LOAN({ number: this.inValue.number }).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.creditLineDetail = data;
                    _this.httpService.queryTellerById({ tellerId: _this.creditLineDetail.investigatorName }).subscribe(function (data) {
                        _this.creditLineDetail.investigatorName = data.tellerName;
                    });
                    _this.httpService.queryOrgById({ orgId: _this.creditLineDetail.appBranchNo }).subscribe(function (data) {
                        if (data.orgName != null) {
                            _this.creditLineDetail.appBranchNo = data.orgName;
                        }
                    });
                }
                else {
                    data.returnCode.message ? data.returnCode.message : '调用服务失败';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            });
        }
    };
    //码值
    CreditLineDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CreditLineDetailComponent.prototype, "inValue", void 0);
    CreditLineDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'credit-line-detail',
            template: __webpack_require__(/*! ./credit-line-detail.component.html */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-line-detail/credit-line-detail.component.html"),
            styles: [__webpack_require__(/*! ./credit-line-detail.component.scss */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-line-detail/credit-line-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_1__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], CreditLineDetailComponent);
    return CreditLineDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12 link\">\r\n  <div class=\"tab_first\">\r\n    <table class=\"debt\">\r\n      <!-- <tr> -->\r\n      <!-- <td><a class=\"cursor-mouse\" (click)=\"toZtzw()\">总体债务</a></td>\r\n        <td><a class=\"cursor-mouse\" (click)=\"toZhsxed()\">综合授信额度</a></td>\r\n        <td><a class=\"cursor-mouse\" (click)=\"toZzlyw()\">自助类业务</a></td>\r\n        <td><a class=\"cursor-mouse\" (click)=\"toZwgtjkr()\">作为共同借款人</a></td>\r\n        <td><a class=\"cursor-mouse\" (click)=\"toWhdb()\">作为担保人</a></td>\r\n        <td><a class=\"cursor-mouse\" (click)=\"toPlysxed()\">批量预授信额度</a></td>       -->\r\n      <!-- <td><a class=\"cursor-mouse\" (click)=\"toZhsxfxbg()\">综合授信分析报告</a></td> -->\r\n      <!-- <td><a class=\"cursor-mouse\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"creditQueryList()\">授信调查表</a></td> -->\r\n      <!-- </tr> -->\r\n      <tr>\r\n        <td [ngStyle]=\"{'pointer-events':showFlag1?'none':'auto'}\">\r\n          <a class=\"cursor-mouse\" (click)=\"toZhsxed()\" *ngIf=\"judgeField('X_CUST_M_P009_P151')\" [ngClass]=\"{'show':showFlag1}\" readonly=\"showFlag1\">综合授信额度</a>\r\n        </td>\r\n        <td *ngIf=\"judgeField('X_CUST_M_P009_P144')\" [ngStyle]=\"{'pointer-events':showFlag2?'none':'auto'}\">\r\n          <a class=\"cursor-mouse\" (click)=\"toZzlyw()\" [ngClass]=\"{'show':showFlag2}\">合同管理</a>\r\n        </td>\r\n        <td class=\"selectM td-box-yw\" *ngIf=\"judgeField('X_CUST_M_P009_P136')\" [ngStyle]=\"{'pointer-events':showFlag3?'none':'auto'}\">\r\n          <!-- <p-dropdown [options]=\"selfDebt\" [(ngModel)]=\"selfDebtOwn\" (onChange)=\"totarget1()\"></p-dropdown> -->\r\n          <a class=\"cursor-mouse\" (click)=\"toZszw()\" [ngClass]=\"{'show':showFlag3}\">自身债务</a>\r\n          <ul class=\"nopointer\" style=\"list-style-type:none\">\r\n            <!-- <li *ngFor=\"let item of selfDebt;let selfDebtOwn=index\" (click)=\"totarget1(selfDebtOwn)\" >{{item.label}}</li> -->\r\n            <li (click)=\"totarget1(0)\" *ngIf=\"judgeField('X_CUST_M_P009_P137')\">贷款业务</li>\r\n            <li (click)=\"totarget1(1)\" *ngIf=\"judgeField('X_CUST_M_P009_P138')\">承兑业务</li>\r\n            <li (click)=\"totarget1(2)\" *ngIf=\"judgeField('X_CUST_M_P009_P139')\">贷记卡业务</li>\r\n            <li (click)=\"totarget1(3)\" *ngIf=\"judgeField('X_CUST_M_P009_P140')\">保函业务</li>\r\n            <li (click)=\"totarget1(4)\" *ngIf=\"judgeField('X_CUST_M_P009_P141')\">信用证业务</li>\r\n            <li (click)=\"totarget1(5)\" *ngIf=\"judgeField('X_CUST_M_P009_P136_P244')\">最高额合同</li>\r\n          </ul>\r\n        </td>\r\n        <td class=\"selectM td-box-yw\" *ngIf=\"judgeField('X_CUST_M_P009_P149')\" [ngStyle]=\"{'pointer-events':showFlag4?'none':'auto'}\">\r\n          <a class=\"cursor-mouse\" (click)=\"toZwgtjkr()\" [ngClass]=\"{'show':showFlag4}\">共借债务</a>\r\n          <ul class=\"nopointer\" style=\"list-style-type:none\">\r\n            <li (click)=\"totargetGJZW(3)\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P111')\">贷款业务</li>\r\n            <li (click)=\"totargetGJZW(4)\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P112')\">承兑业务</li>\r\n            <li (click)=\"totargetGJZW(1)\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P113')\">保函业务</li>\r\n            <li (click)=\"totargetGJZW(2)\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P114')\">信用证业务</li>\r\n          </ul>\r\n        </td>\r\n        <td class=\"selectM td-box-yw\" *ngIf=\"judgeField('X_CUST_M_P009_P142')\" [ngStyle]=\"{'pointer-events':showFlag5?'none':'auto'}\">\r\n          <a class=\"cursor-mouse\" (click)=\"toGlgxzw()\" [ngClass]=\"{'show':showFlag5}\">关联债务</a>\r\n          <ul class=\"nopointer\" style=\"list-style-type:none\">\r\n            <li (click)=\"totargetGLZW(1)\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P111')\">贷款业务</li>\r\n            <li (click)=\"totargetGLZW(5)\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P112')\">承兑业务</li>\r\n            <li (click)=\"totargetGLZW(2)\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P115')\">贷记卡业务</li>\r\n            <li (click)=\"totargetGLZW(3)\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P113')\">保函业务</li>\r\n            <li (click)=\"totargetGLZW(4)\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P114')\">信用证业务</li>\r\n          </ul>\r\n        </td>\r\n        <td style=\"width:12%;cursor:pointer\" class=\"selectM\" *ngIf=\"judgeField('X_CUST_M_P009_P148')\" [ngStyle]=\"{'pointer-events':showFlag6?'none':'auto'}\">\r\n          <!-- <p-dropdown [options]=\"guaranteeDebt\" [(ngModel)]=\"guaranteeDebtOwn\" (onChange)=\"totarget2()\"></p-dropdown> -->\r\n          <a class=\"cursor-mouse\" (click)=\"toWhdb()\" [ngClass]=\"{'show':showFlag6}\">担保债务</a>\r\n          <ul class=\"nopointer\" style=\"list-style-type:none\">\r\n            <!-- <li *ngFor=\"let item of guaranteeDebt;let guaranteeDebtOwn=index\" (click)=\"totarget2(guaranteeDebtOwn)\" >{{item.label}}</li> -->\r\n            <li (click)=\"totarget2(0)\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P101')\">最高额担保</li>\r\n            <li (click)=\"totarget2(1)\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P102')\">贷款担保</li>\r\n            <li (click)=\"totarget2(2)\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P103')\">承兑担保</li>\r\n            <li (click)=\"totarget2(3)\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P104')\">保函担保</li>\r\n            <li (click)=\"totarget2(4)\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P105')\">贷记卡担保</li>\r\n          </ul>\r\n        </td>\r\n        <td *ngIf=\"judgeField('X_CUST_M_P009_P146')\" [ngStyle]=\"{'pointer-events':'auto'}\">\r\n            <!-- [ngClass]=\"{'show':showFlag8}\" -->\r\n          <a class=\"cursor-mouse\" (click)=\"toPlysxed()\" [ngClass]=\"{'show':showFlag8}\" >批量预授信</a>\r\n        </td>\r\n        <td *ngIf=\"judgeField('X_CUST_M_P009_P147')\">\r\n          <span class=\"cursor-mouse\" (click)=\"creditQueryList()\">授信调查表</span>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n  <!-- <div class=\"ui-g-12 boxShadow tab_style\">\r\n    <table>\r\n      <tr class=\"first_tr\">\r\n        <td rowspan=\"2\">资产负债统计</td>\r\n        <td>总授信余额</td>\r\n        <td>贷款余额</td>\r\n        <td>承兑票面余额</td>\r\n        <td>承兑敞口余额 </td>\r\n        <td>保函敞口余额</td>\r\n        <td>总敞口余额</td>\r\n        <td>贴现余额 </td>\r\n        <td>贷记卡欠款</td>\r\n        <td>自助贷款金额</td>\r\n      </tr>\r\n      <tr class=\"second_tr\">\r\n        <td>{{creditBalanceSum}}</td>\r\n        <td>{{loanBalance}}</td>\r\n        <td>{{acceptBalance}}</td>\r\n        <td>{{acceBalance}}</td>\r\n        <td>{{exposureBalance}}</td>\r\n        <td>{{exposureBalanceSum}}</td>\r\n        <td>{{discountBalance}}</td>\r\n        <td>{{creditCardDebt}}</td>\r\n        <td>{{selfLoanAmt}}</td>\r\n      </tr>\r\n    </table>\r\n  </div> -->\r\n\r\n  <div class=\"ui-g-12 boxShadow\" *ngIf=\"creditLineItems.length > 0\">\r\n    <!-- <div class=\"ui-g-12\" id=\"Zhsxed\">\r\n      <strong>综合授信额度</strong>\r\n    </div> -->\r\n    <div class=\"ui-g-12 title\" id=\"Zhsxed\" *ngIf=\"judgeField('X_CUST_M_P009_P151')\">\r\n      <header-title [Info]=\"'综合授信额度'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P151')\">\r\n      <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n        <p-dataTable [value]=\"creditLineItems\" [emptyMessage]=\"tabMesg\">\r\n          <p-column>\r\n            <ng-template pTemplate=\"header\">\r\n              <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" binary=\"true\" [(ngModel)]=\"ZHisCheckAll\" (click)=\"ZHCheckAll()\"></p-checkbox>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n              <p-checkbox name=\"groupname\" [value]=\"ri\" binary=\"true\" [(ngModel)]=\"col.ZHisCheck\" (onChange)=\"ZHCheckbox(ri,col)\"></p-checkbox>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"tranCategory\" header=\"额度品种\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.tranCategory|codeValuePie:eDuPinZhong}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"creditLmt\" header=\"授信总额\" *ngIf=\"judgeField('X_CUST_M_P009_P151_P107')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.creditLmt/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"creditLmt\" header=\"授信总额\" *ngIf=\"!judgeField('X_CUST_M_P009_P151_P107')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"usedLmt\" header=\"已用额度\" *ngIf=\"true\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.usedLmt/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"onwayBalance\" header=\"审批中额度\" *ngIf=\"judgeField('X_CUST_M_P009_P151_P109')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.onwayBalance/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"onwayBalance\" header=\"审批中额度\" *ngIf=\"!judgeField('X_CUST_M_P009_P151_P109')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"credTotalBalan\" header=\"授信余额\" *ngIf=\"judgeField('X_CUST_M_P009_P151_P108')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.credTotalBalan/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"credTotalBalan\" header=\"授信余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P151_P108')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"guaranteeMode\" header=\"担保方式\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"effectDate\" header=\"生效日期\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.effectDate|timeValuePie}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"matureDate\" header=\"失效日期\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.matureDate|timeValuePie}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"statusType\" header=\"状态\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.statusType|codeValuePie:zhStatusTypeOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"flag\" header=\"冻结标志\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.flag|codeValuePie:flagOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n          <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P151_P102')\">\r\n            <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n              <span class=\"tabelDetailIco\" (click)='showDialog(col,6)'>查看详情</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n\r\n      <!-- <p-paginator rows=\"{{creditLineItemspageSize}}\" totalRecords=\"{{creditLineItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateCreditLineItems($event)\" [style]=\"{'position':'relative','z-index':0}\"></p-paginator> -->\r\n    </div>\r\n    <div class=\"ui-g-12 biangengPage\" *ngIf=\"judgeField('X_CUST_M_P009_P151')\">\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P151_P103')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"changeEdu()\">变更额度</a>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P151_P104')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"chancelEdu()\">废除额度</a>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P151_P105')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"coldEdu()\">冻结额度</a>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P151_P106')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"jiedongEdu()\">解冻额度</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!-- <div class=\"ui-g-12\">\r\n    <strong id=\"Ztzw\">总体债务</strong><strong style=\"cursor:pointer;position:relative;z-index:0;\" (click)=\"toZszw()\">自身债务</strong>\r\n    <strong style=\"cursor:pointer;position:relative;z-index:0;\" (click)=\"toGlgxzw()\">关联关系债务</strong>\r\n  </div> -->\r\n\r\n\r\n  <div class=\"ui-g-12 boxShadow\" *ngIf=\"selfServiceBusinessItems.length > 0\">\r\n    <!-- <div class=\"ui-g-12\" id=\"Zzlyw\">\r\n      <strong>自助类业务</strong>\r\n    </div> -->\r\n    <div class=\"ui-g-12 title\" *ngIf=\"judgeField('X_CUST_M_P009_P144')\" id=\"Zzlyw\">\r\n      <header-title [Info]=\"'合同管理'\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P144')\">\r\n      <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n        <p-dataTable [value]=\"selfServiceBusinessItems\" [emptyMessage]=\"tabMesg\">\r\n          <p-column>\r\n            <ng-template pTemplate=\"header\">\r\n              <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" binary=\"true\" [(ngModel)]=\"ZZisAll\" (click)=\"ZZcheckAll()\"></p-checkbox>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n              <p-checkbox name=\"groupname\" [value]=\"ri\" binary=\"true\" [(ngModel)]=\"col.ZZisBox\" (onChange)=\"ZZcheckBox(ri,col)\"></p-checkbox>\r\n            </ng-template>\r\n          </p-column>\r\n          <!-- <p-column field=\"clientNo\" header=\"客户号\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <a *ngIf=\"(num==2)&&(col.contractStatus==11 || col.contractStatus==01 || col.contractStatus==02 || col.contractStatus==07)\"\r\n                href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\" target=\"_blank\">{{col.clientNo}}</a>\r\n              <a *ngIf=\"(num!=2)||((num==2)&&(col.contractStatus!=11 && col.contractStatus!=01 && col.contractStatus!=02 && col.contractStatus!=07))\"\r\n                href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}\" target=\"_blank\">{{col.clientNo}}</a>\r\n            </ng-template>\r\n          </p-column> -->\r\n          <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P144_P268')\">\r\n            <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n              <a style=\"cursor: pointer;\" (click)='showDialog(col,91)'>{{col.contractNo}}</a>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P144_P268')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"prodName\" header=\"产品名称\"></p-column>\r\n          <!-- <p-column field=\"bussType\" header=\"业务品种\"></p-column>\r\n          <p-column field=\"subBussCode\" header=\"子业务品种\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.subBussCode|codeValuePie:subBussTypesOptions}}\r\n            </ng-template>\r\n          </p-column> -->\r\n          <p-column field=\"contractAmt\" header=\"贷款金额（元）\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.contractAmt/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"usedLmt\" header=\"当前已用额度\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.usedLmt/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"loanDateStart\" header=\"起贷日期\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.loanDateStart|timeValuePie}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"loanDateEnd\" header=\"止贷日期\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.loanDateEnd|timeValuePie}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"contractStatus\" header=\"状态\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"lastLoanDate\" header=\"最近一笔借据起贷日期\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.lastLoanDate|timeValuePie}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"contractRate\" header=\"利率（‰）\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.contractRate|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"tenType\" header=\"十级分类\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.tenType|codeValuePie2:tenClassOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"overStatus\" header=\"逾期标志\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.overStatus|codeValuePie:flagSignOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"tellerName\" header=\"经办人\"></p-column>\r\n          <!-- <p-column header=\"操作\">\r\n                  <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                    <span class=\"tabelDetailIco\" (click)='showDialog(col,7)'>查看详情</span>\r\n                  </ng-template>\r\n                </p-column> -->\r\n        </p-dataTable>\r\n      </div>\r\n      <!-- <p-paginator rows=\"{{selfServiceBusinessItemspageSize}}\" totalRecords=\"{{selfServiceBusinessItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"paginateSelfServiceBusiness($event)\" alwaysShow=\"false\"></p-paginator> -->\r\n    </div>\r\n    <div class=\"adjust ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P144')\">\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P262')\">\r\n        <a style=\"color:#fff;\">合同状态调整</a>\r\n        <ul class=\"list\">\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"hetongCheXiao()\">撤销新增</li>\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"hetongZhongZhi()\">中止新增</li>\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"hetongCheXiaotiaozheng()\">撤销修改</li>\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"hetongZhongZhitiaozheng()\">中止修改</li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P263')\">\r\n        <a style=\"color:#fff;\">合同要素修改</a>\r\n        <ul class=\"list\">\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"hetongMain()\">新增</li>\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"HTmaintiaozheng()\">修改</li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P264')\">\r\n        <a style=\"color:#fff;\">年检</a>\r\n        <ul class=\"list\">\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"nianjianAdd()\">新增</li>\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"nianjian()\">修改</li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P265')\">\r\n        <a style=\"color:#fff;\">合同冻结解冻</a>\r\n        <ul class=\"list\">\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dongjiexinzeng()\">新增</li>\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dongjiexiugai()\">修改</li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P266')\">\r\n        <a style=\"color:#fff;\">十级分类</a>\r\n        <ul class=\"list\">\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"tenAddZZ()\">新增</li>\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"tenUpdateZZ()\">修改</li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P267')\">\r\n        <a style=\"color:#fff;\">贷后检查</a>\r\n        <ul class=\"list\">\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dahouAddZZ()\">新增</li>\r\n          <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"daihouUpdateZZ()\">修改</li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P139_P259')\">\r\n        <a style=\"color:#fff;\">绿色贷款</a>\r\n        <ul class=\"list\">\r\n          <li class=\"bodyBgColor\" target=\"_blank\" (click)=\"greenloanAdd()\">新增</li>\r\n          <li class=\"bodyBgColor\" target=\"_blank\" (click)=\"greenloanUpdate()\">修改</li>\r\n        </ul>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P269')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" (click)=\"preApproval('1')\">手工生成合同</a>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P270')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" (click)=\"preApproval('2')\">查看</a>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P271')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" (click)=\"preApproval('3')\">撤销</a>\r\n      </div>\r\n      <!-- <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P272')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" (click)=\"preApproval('4')\">影像上传</a>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P144_P273')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" (click)=\"preApproval('5')\">影像查看</a>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- <div class=\"ui-g-12 title\">\r\n    <div id=\"zszw\">\r\n      <header-title [Info]=\"'自身债务'\"></header-title>\r\n    </div>\r\n    <a style=\"cursor:pointer;position:relative;z-index:0;\" (click)=\"toDKYW()\">贷款业务</a>\r\n    <a style=\"cursor:pointer;position:relative;z-index:0;\" (click)=\"toCDYW()\">承兑业务</a>\r\n    <a style=\"cursor:pointer;position:relative;z-index:0;\" (click)=\"toDJKYW()\">贷记卡业务</a>\r\n    <a style=\"cursor:pointer;position:relative;z-index:0;\" (click)=\"toBHYW()\">保函业务</a>\r\n    <a style=\"cursor:pointer;position:relative;z-index:0;\" (click)=\"toXYZYW()\">信用证业务</a>\r\n  </div> -->\r\n\r\n  <div class=\"ui-g-12 whiteback\" *ngIf=\"judgeField('X_CUST_M_P009_P136')\">\r\n    <div class=\"ui-g-12 title\" id=\"zszw\">\r\n      <header-title [Info]=\"'自身债务'\" *ngIf=\"loanBusinessItems.length>0||acceptanceBusinessItems.length > 0||djkItems.length > 0||guaranteeBusinessItems.length > 0||creditBusinessItems.length > 0||zgehtInfo.length > 0\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"loanBusinessItems.length>0\">\r\n      <!-- <div id=\"dkyw\">\r\n        <header-title [Info]=\"'贷款业务'\"></header-title>\r\n      </div> -->\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P137')\" id=\"dkyw\">贷款业务</span>\r\n      <span class=\"tit_Style\">贷款余额:{{(loanBalance/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P137')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"loanBusinessItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column>\r\n              <ng-template pTemplate=\"header\">\r\n                <p-checkbox name=\"groupname\" label=\"选择\" [(ngModel)]=\"checkAll\" binary=\"true\" (click)=\"checkAllClick()\"></p-checkbox>\r\n              </ng-template>\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <p-checkbox [(ngModel)]=\"col.checkBox\" (onChange)=\"checkBoxClick(ri,col)\" binary=\"true\"></p-checkbox>\r\n              </ng-template>\r\n            </p-column>\r\n            <!-- <p-column field=\"clientNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.loanBalance>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.loanBalance<=0))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n              </ng-template>\r\n            </p-column> -->\r\n            <p-column field=\"duebillNo\" header=\"借据编号\" *ngIf=\"judgeField('X_CUST_M_P009_P137_P250')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <a style=\"cursor: pointer;\" (click)='showDialog(col,91)'>{{col.duebillNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"duebillNo\" header=\"借据编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P137_P250')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P137_P251')\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P137_P251')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"bussType\" header=\"业务品种\">\r\n              <!-- <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.bussCode|codeValuePie:bussTypeOptions}}\r\n              </ng-template> -->\r\n            </p-column>\r\n            <p-column field=\"subBussCode\" header=\"子业务品种\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.subBussCode|codeValuePie:subBussTypesOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"startDate\" header=\"起贷日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.startDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"endDate\" header=\"止贷日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.endDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanAmt\" header=\"贷款金额\" *ngIf=\"judgeField('X_CUST_M_P009_P137_P252')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.loanAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanAmt\" header=\"贷款金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P137_P252')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanBalance\" header=\"贷款余额\" *ngIf=\"judgeField('X_CUST_M_P009_P137_P253')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.loanBalance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanBalance\" header=\"贷款余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P137_P253')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"intRate\" header=\"贷款利率（‰）\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.intRate/1.2)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenType\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenType|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"flag\" header=\"逾期标志\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.flag|codeValuePie:flagSignOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"payMode\" header=\"还款方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.payMode|codeValuePie:payModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P137_P249')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,1)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n\r\n        <p-paginator rows=\"{{loanBusinessItemspageSize}}\" totalRecords=\"{{loanBusinessItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateLoanBusinessItems($event)\"></p-paginator>\r\n      </div>\r\n      <div class=\"ui-g-12 tentypePage\" *ngIf=\"judgeField('X_CUST_M_P009_P137')\">\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P137_P311')\">\r\n          <a style=\"color:#fff;\">十级分类</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"tenAdd()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"tenType()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P137_P312')\">\r\n          <a style=\"color:#fff;\">贷后检查</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"daihuo()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"daihuotiaozheng()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P137_P313')\">\r\n          <a style=\"color:#fff;\">提前还款申请</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"tiqianhuankuan()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"TQhuaikuan()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P137_P314')\">\r\n          <a style=\"color:#fff;\">风险资产处置申请</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dangerMon()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"fengxian()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <!-- <a href=\"javascript:void(0);\" target=\"_blank\" (click)=\"tenType()\"><button pButton label=\"十级分类调整\"></button></a>\r\n        <a href=\"javascript:void(0);\" target=\"_blank\" (click)=\"daihuo()\"><button pButton label=\"贷后检查\"></button></a>\r\n        <a href=\"javascript:void(0);\" target=\"_blank\" (click)=\"tiqianhuankuan()\"><button pButton label=\"提前还款申请\"></button></a>\r\n        <a href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dangerMon()\"><button pButton label=\"风险资产处置申请\"></button></a> -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"acceptanceBusinessItems.length > 0\" id=\"cdyw\">\r\n      <!-- <div id=\"cdyw\">\r\n        <header-title [Info]=\"'承兑业务'\"></header-title>\r\n      </div> -->\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P138')\">承兑业务</span>\r\n      <span class=\"tit_Style\">未结清票面金额:{{(acceptBalance/1)|number:'1.2-2'}}元</span>\r\n      <span class=\"tit_Style\">敞口金额:{{(acceBalance/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P138')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"acceptanceBusinessItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column>\r\n              <ng-template pTemplate=\"header\">\r\n                <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" binary=\"true\" [(ngModel)]=\"CDisCheckAll\" (click)=\"checkAllCD()\"></p-checkbox>\r\n              </ng-template>\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <p-checkbox name=\"groupname\" [value]=\"ri\" binary=\"true\" [(ngModel)]=\"col.CDisBox\" (onChange)=\"checkBoxCD(ri,col)\"></p-checkbox>\r\n              </ng-template>\r\n            </p-column>\r\n            <!-- <p-column field=\"clientNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.balance>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.balance<=0))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n              </ng-template>\r\n            </p-column> -->\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P138_P257')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <a style=\"cursor: pointer;\" (click)='showDialog(col,92)'>{{col.contractNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P138_P257')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"billAmt\" header=\"票据金额\" *ngIf=\"judgeField('X_CUST_M_P009_P138_P258')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{(col.billAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"billAmt\" header=\"票据金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P138_P258')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"judgeField('X_CUST_M_P009_P138_P259')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{(col.gapAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P138_P259')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"余额\" *ngIf=\"judgeField('X_CUST_M_P009_P138_P260')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{(col.balance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P138_P260')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"billBankId\" header=\"签发行行号\"></p-column>\r\n            <p-column field=\"tenType\" header=\"十级分类\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.tenType|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"appDate\" header=\"经办日期\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.appDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"appUserId\" header=\"经办人\"></p-column>\r\n            <p-column field=\"contractStatus\" header=\"合同状态\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P138_P252')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,2,\"zishen\")'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{acceptanceBusinessItemspageSize}}\" totalRecords=\"{{acceptanceBusinessItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateAcceptanceBusinessItems($event)\"></p-paginator>\r\n      </div>\r\n      <!-- <div class=\"ui-g-12\">\r\n        <a href=\"javascript:void(0);\" target=\"_blank\" (click)=\"zhiya()\"><button pButton label=\"质押追加\"></button></a>\r\n      </div> -->\r\n      <div class=\"ui-g-12 chengdui\" *ngIf=\"judgeField('X_CUST_M_P009_P138')\">\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P138_P253')\">\r\n          <a style=\"color:#fff;\">质押追加</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"zhiya()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"zhiyaTiaoZheng()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P138_P254')\">\r\n          <a style=\"color:#fff;\">十级分类</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"CDshijiAdd()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"CDshijiUpdate()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <!-- <div *ngIf=\"judgeField('X_CUST_M_P009_P138_P255')\">\r\n          <a style=\"color:#fff;\">风险资产处置申请</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dangerAddCD()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dangerUpdateCD()\">修改</li>\r\n          </ul>\r\n        </div> -->\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P138_P256')\">\r\n          <a style=\"color:#fff;\">合同状态调整</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"hetongAddCDchexiao()\">撤销新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"hetongUpdateCDchexiao()\">撤销修改</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"hetongAddCDzhongzhi()\">中止新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"hetongUpdateCDzhongzhi()\">中止修改</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"djkItems.length > 0\">\r\n      <!-- <div id=\"djkyw\">\r\n        <header-title [Info]=\"'贷记卡业务'\"></header-title>\r\n      </div> -->\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P139')\" id=\"djkyw\">贷记卡业务</span>\r\n      <span class=\"tit_Style\">透支余额:{{(creditCardDebt/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P139')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"djkItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column>\r\n              <ng-template pTemplate=\"header\">\r\n                <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" binary=\"true\" [(ngModel)]=\"DJKisCheckAll\" (click)=\"DJKcheckAll()\"></p-checkbox>\r\n              </ng-template>\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <p-checkbox name=\"groupname\" [value]=\"ri\" binary=\"true\" [(ngModel)]=\"col.DJKisCheck\" (onChange)=\"DJKcheckbox(ri,col)\"></p-checkbox>\r\n              </ng-template>\r\n            </p-column>\r\n            <!-- <p-column field=\"custNo\" header=\"被担保人客户号\"></p-column>\r\n            <p-column field=\"custName\" header=\"被担保人姓名\"></p-column> -->\r\n            <!-- <p-column field=\"custNo\" header=\"客户号\"></p-column> -->\r\n            <p-column *ngIf=\"judgeField('X_CUST_M_P009_P139_P251')\" field=\"cardNum\" header=\"卡号\"></p-column>\r\n            <p-column *ngIf=\"!judgeField('X_CUST_M_P009_P139_P251')\" field=\"cardNum\" header=\"卡号\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"cardType\" header=\"卡类别\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.cardType|codeValuePie:cardTypeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"cardOwnerOrgId\" header=\"开卡机构\"></p-column>\r\n            <p-column field=\"guarantor\" header=\"担保人客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.cardStat!=17)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.guarantor)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.guarantor}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.cardStat==17))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.guarantor)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.guarantor}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guarantorName\" header=\"担保人名称\"></p-column>\r\n            <p-column *ngIf=\"judgeField('X_CUST_M_P009_P139_P252')\" field=\"authCrdtLimit\" header=\"授信额度\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.authCrdtLimit/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"!judgeField('X_CUST_M_P009_P139_P252')\" field=\"authCrdtLimit\" header=\"授信额度\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"judgeField('X_CUST_M_P009_P139_P253')\" field=\"odPrin\" header=\"透支余额\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.odPrin/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column *ngIf=\"!judgeField('X_CUST_M_P009_P139_P253')\" field=\"odPrin\" header=\"透支余额\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueCd\" header=\"是否逾期\"></p-column>\r\n            <p-column field=\"ovdueAmt\" header=\"逾期金额\" *ngIf=\"judgeField('X_CUST_M_P009_P139_P257')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.ovdueAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueAmt\" header=\"逾期金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P139_P257')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueTerm\" header=\"逾期期数\"></p-column>\r\n            <p-column field=\"cardStat\" header=\"卡状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.cardStat|codeValuePie:cardStatOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenLvlClass\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenLvlClass|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"openCardDate\" header=\"开卡日期\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.openCardDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"agent\" header=\"经办人\"></p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{djkItemspageSize}}\" totalRecords=\"{{djkItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\" (onPageChange)=\"paginateDjkItems($event)\"></p-paginator>\r\n      </div>\r\n      <div class=\"ui-g-12 tentenpage\" *ngIf=\"judgeField('X_CUST_M_P009_P139')\">\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P139_P254')\">\r\n          <a style=\"color:#fff;\">十级分类</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"daijiAdd()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"daijikatenXG()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P139_P255')\">\r\n          <a style=\"color:#fff;\">贷后检查</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"daihouAddDJK()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"daihouUpdateDJK()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P139_P256')\">\r\n          <a style=\"color:#fff;\">风险资产处置申请</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dangerAddDJK()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"dangerUpdateDJK()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P139_P259')\">\r\n          <a style=\"color:#fff;\" (click)=\"xinyongkaAddDJK()\">信用卡状态调整申请</a>\r\n          <!-- <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"xinyongkaAddDJK()\">新增</li> -->\r\n          <!-- <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"xinyongkaUpdateDJK()\">修改</li> -->\r\n          <!-- </ul> -->\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P139_P258')\">\r\n          <a style=\"color:#fff;\" (click)=\"creditUpdate()\">信用卡要素调整</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"guaranteeBusinessItems.length > 0\">\r\n      <!-- <div id=\"bhyw\">\r\n        <header-title [Info]=\"'保函业务'\"></header-title>\r\n      </div> -->\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P140')\" id=\"bhyw\">保函业务</span>\r\n      <span class=\"tit_Style\">敞口金额:{{(exposureBalance/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P140')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"guaranteeBusinessItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column>\r\n              <ng-template pTemplate=\"header\">\r\n                <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" binary=\"true\" [(ngModel)]=\"BHisCheckAll\" (click)=\"BHcheckAll()\"></p-checkbox>\r\n              </ng-template>\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <p-checkbox name=\"groupname\" [value]=\"ri\" binary=\"true\" [(ngModel)]=\"col.BHisBox\" (onChange)=\"BHcheckBox(col)\"></p-checkbox>\r\n              </ng-template>\r\n            </p-column>\r\n            <!-- <p-column field=\"clientNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.balance>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.balance<=0))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n              </ng-template>\r\n            </p-column> -->\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P140_P258')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <a style=\"cursor: pointer;\" (click)='showDialog(col,93)'>{{col.contractNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P140_P258')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"settleAcctNo\" header=\"结算账号\" *ngIf=\"judgeField('X_CUST_M_P009_P140_P259')\"></p-column>\r\n            <p-column field=\"settleAcctNo\" header=\"结算账号\" *ngIf=\"!judgeField('X_CUST_M_P009_P140_P259')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gtType\" header=\"保函类型\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.gtType|codeValuePie:baoHanClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gtAmt\" header=\"保函金额\" *ngIf=\"judgeField('X_CUST_M_P009_P140_P260')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.gtAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gtAmt\" header=\"保函金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P140_P260')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"judgeField('X_CUST_M_P009_P140_P261')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.balance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P140_P261')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"judgeField('X_CUST_M_P009_P140_P262')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.gapAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P140_P262')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"startDate\" header=\"开始日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.startDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"endDate\" header=\"到期日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.endDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenType\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenType|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractStatus\" header=\"合同状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P140_P254')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,3)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{guaranteeBusinessItemspageSize}}\" totalRecords=\"{{guaranteeBusinessItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateGuaranteeBusinessItems($event)\"></p-paginator>\r\n      </div>\r\n      <div class=\"ui-g-12 baohanpage\" *ngIf=\"judgeField('X_CUST_M_P009_P140')\">\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P140_P255')\">\r\n          <a style=\"color:#fff;\">注销</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"zhuxiao()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"zhuxiaotiaozhneg()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P140_P256')\">\r\n          <a style=\"color:#fff;\">补发</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"bufaxinzneg()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"bufatiaozheng()\">修改</li>\r\n          </ul>\r\n        </div>\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P140_P257')\">\r\n          <a style=\"color:#fff;\">十级分类</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"tenAddBH()\">新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"tenTypeBH()\">修改</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"creditBusinessItems.length > 0\">\r\n      <!-- <div id=\"xyzyw\">\r\n        <header-title [Info]=\"'信用证业务'\"></header-title>\r\n      </div> -->\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P141')\" id=\"xyzyw\">信用证业务</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P141')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"creditBusinessItems\" [emptyMessage]=\"tabMesg\">\r\n            <!-- <p-column>\r\n                  <ng-template pTemplate=\"header\">\r\n                    <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" [(ngModel)]=\"selectedValues\" (click)=\"clickCheck(5)\"></p-checkbox>\r\n                  </ng-template>\r\n                  <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                    <p-checkbox name=\"groupname\" [value]=\"ri\" [(ngModel)]=\"selectedValues\" (click)=\"clickCheck(5)\"></p-checkbox>\r\n                  </ng-template>\r\n                </p-column> -->\r\n            <!-- <p-column field=\"clientNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.balance>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.balance<=0))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n              </ng-template>\r\n            </p-column> -->\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P141_P213')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <a style=\"cursor: pointer;\" (click)='showDialog(col,94)'>{{col.contractNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P141_P213')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"signFlag\" header=\"签发类型\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.signFlag|codeValuePie:qianFaClass}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"shipmentDate\" header=\"预定装船日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.shipmentDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"paymentDate\" header=\"预定付汇日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.paymentDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"creditAmt\" header=\"开证金额\" *ngIf=\"judgeField('X_CUST_M_P009_P141_P214')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.creditAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"creditAmt\" header=\"开证金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P141_P214')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"judgeField('X_CUST_M_P009_P141_P215')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.balance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P141_P215')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P141_P211')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,4)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n\r\n        <p-paginator rows=\"{{creditBusinessItemspageSize}}\" totalRecords=\"{{creditBusinessItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateCreditBusinessItems($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12 boxShadow\" *ngIf=\"zgehtInfo.length > 0\">\r\n      <span class=\"secondMenu\" id=\"zgeht\" *ngIf=\"judgeField('X_CUST_M_P009_P136_P244')\">最高额合同</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P136_P244')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"zgehtInfo\" [emptyMessage]=\"tabMesg\">\r\n            <p-column>\r\n              <ng-template pTemplate=\"header\">\r\n                <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" binary=\"true\" [(ngModel)]=\"ZGCheck\" (click)=\"ZGCheckAll()\"></p-checkbox>\r\n              </ng-template>\r\n              <ng-template pTemplate=\"body\" let-col=\"rowData\" let-ri=\"rowIndex\">\r\n                <p-checkbox name=\"groupname\" [value]=\"ri\" binary=\"true\" [(ngModel)]=\"col.ZGbox\" (onChange)=\"ZGCheckbox(ri,col)\"></p-checkbox>\r\n              </ng-template>\r\n            </p-column>\r\n            <!-- <p-column field=\"clientNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&((col.contractStatus==01) || (col.contractStatus==02) || (col.contractStatus==07))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&((col.contractStatus!=01) && (col.contractStatus!=02) && (col.contractStatus!=07)))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.clientNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.clientNo}}</a>\r\n              </ng-template>\r\n            </p-column> -->\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P136_P244_P212')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <a style=\"cursor: pointer;\" (click)='showDialog(col,95)'>{{col.contractNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P136_P244_P212')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contracAmt\" header=\"合同金额\" *ngIf=\"judgeField('X_CUST_M_P009_P136_P244_P213')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.contracAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contracAmt\" header=\"合同金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P136_P244_P213')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contracBalance\" header=\"合同余额\" *ngIf=\"judgeField('X_CUST_M_P009_P136_P244_P214')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.contracBalance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contracBalance\" header=\"合同余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P136_P244_P214')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeStartDate\" header=\"担保起始日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeStartDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeEndDate\" header=\"担保到期日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeEndDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractStatus\" header=\"合同状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"appUserId\" header=\"经办人\"></p-column>\r\n          </p-dataTable>\r\n        </div>\r\n      </div>\r\n      <div class=\"adjust ui-g-12\" *ngIf=\"zgehtInfo.length != 0\">\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P136_P244_P211')\">\r\n          <a style=\"color:#fff;\">合同状态调整</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" (click)=\"zgCheXiao()\">撤销新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" (click)=\"zgCheXiaotiaozheng()\">撤销修改</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" (click)=\"zgZhongZhi()\">中止新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" (click)=\"zgZhongZhitiaozheng()\">中止修改</li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12 whiteback\" *ngIf=\"judgeField('X_CUST_M_P009_P149')\">\r\n    <!-- <div class=\"ui-g-12\" id=\"Zwgtjkr\">\r\n      <strong>作为共同借款人</strong>\r\n    </div> -->\r\n    <div class=\"ui-g-12 title\" id=\"Zwgtjkr\">\r\n      <header-title [Info]=\"'共借债务'\" *ngIf=\"borrowerBusinessItems.length>0||gjzwacceptanceBusinessItems.length > 0||guaranteeBusinessItemsGJZW.length > 0||creditBusinessItemsGJZW.length > 0\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12 boxShadow\" *ngIf=\"borrowerBusinessItems.length>0\">\r\n      <span class=\"secondMenu\" id=\"gjzw_dk\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P111')\">贷款业务</span>\r\n      <span class=\"tit_Style\">贷款余额:{{(loanBalance_one/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P111')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"borrowerBusinessItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column header=\"序号\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                {{ri+1}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"clientNo\" header=\"客户号\"></p-column>\r\n            <p-column field=\"clientName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P111_011')\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P111_011')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"duebillNo\" header=\"借据编号\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P111_012')\"></p-column>\r\n            <p-column field=\"duebillNo\" header=\"借据编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P111_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"bussCode\" header=\"业务品种\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.bussCode|codeValuePie:bussTypeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"subBussCode\" header=\"子业务品种\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.subBussCode|codeValuePie:subBussTypesOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanDateStart\" header=\"起贷日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.loanDateStart|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanDateEnd\" header=\"止贷日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.loanDateEnd|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanAmt\" header=\"贷款金额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P111_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.loanAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanAmt\" header=\"贷款金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P111_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanBalance\" header=\"贷款余额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P111_014')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.loanBalance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanBalance\" header=\"贷款余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P111_014')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"intRate\" header=\"正常利率（‰）\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.intRate/1.2)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"overRate\" header=\"逾期利率（‰）\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.overRate/1.2)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenType\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenType|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n            <p-column field=\"contractStatus\" header=\"合同状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{borrowerBusinessItemspageSize}}\" totalRecords=\"{{borrowerBusinessItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateBorrowerBusinessItems($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- <div class=\"ui-g-12  boxShadow\" *ngIf=\"gjzwacceptanceBusinessItems.length>0\">\r\n      <span class=\"secondMenu\" id=\"gjzw_cdyw\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P112')\">承兑业务</span>\r\n      <span class=\"tit_Style\">未结清票面金额:{{(acceptBalance_one/1)|number:'1.2-2'}}元</span>\r\n      <span class=\"tit_Style\">敞口金额:{{(acceBalance_one/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P112')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"gjzwacceptanceBusinessItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P112_011')\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P112_011')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"billAmt\" header=\"票据金额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P112_012')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{(col.billAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"billAmt\" header=\"票据金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P112_012')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P112_013')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{(col.gapAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P112_013')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"余额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P112_014')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{(col.balance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P112_014')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"billBankId\" header=\"签发行行号\"></p-column>\r\n            <p-column field=\"tenType\" header=\"十级分类\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.tenType|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"appDate\" header=\"经办日期\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.appDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"appUserId\" header=\"经办人\"></p-column>\r\n            <p-column field=\"contractStatus\" header=\"合同状态\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P112_015')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,22)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{gjzwacceptanceBusinessItemspageSize}}\" totalRecords=\"{{gjzwacceptanceBusinessItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateAcceptanceBusinessItemsGJZW($event)\"></p-paginator>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"ui-g-12  boxShadow\" id=\"gjzw_bhyw\" *ngIf=\"guaranteeBusinessItemsGJZW.length>0\">\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P113')\">保函业务</span>\r\n      <span class=\"tit_Style\">敞口金额:{{(exposureBalance_one/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P113')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"guaranteeBusinessItemsGJZW\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P113_011')\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P113_011')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"settleAcctNo\" header=\"结算账号\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P113_012')\"></p-column>\r\n            <p-column field=\"settleAcctNo\" header=\"结算账号\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P113_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gtType\" header=\"保函类型\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.gtType|codeValuePie:baoHanClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gtAmt\" header=\"保函金额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P113_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.gtAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gtAmt\" header=\"保函金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P113_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P113_014')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.balance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P113_014')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P113_015')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.gapAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P113_015')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"startDate\" header=\"开始日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.startDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"endDate\" header=\"到期日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.endDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenType\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenType|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractStatus\" header=\"合同状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P113_016')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,3)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{guaranteeBusinessItemspageSizeGJZW}}\" totalRecords=\"{{guaranteeBusinessItemstotalNumGJZW}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateGuaranteeBusinessItemsGJZW($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12  boxShadow\" id=\"gjzw_xyzyw\" *ngIf=\"creditBusinessItemsGJZW.length>0\">\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P114')\">信用证业务</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P114')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"creditBusinessItemsGJZW\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P114_011')\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P114_011')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"signFlag\" header=\"签发类型\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.signFlag|codeValuePie:qianFaClass}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"shipmentDate\" header=\"预定装船日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.shipmentDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"paymentDate\" header=\"预定付汇日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.paymentDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"creditAmt\" header=\"开证金额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P114_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.creditAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"creditAmt\" header=\"开证金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P114_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P114_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.balance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P149_P114_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P149_P114_014')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,4)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{creditBusinessItemspageSizeGJZW}}\" totalRecords=\"{{creditBusinessItemstotalNumGJZW}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateCreditBusinessItemsGJZW($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P142')\">\r\n    <div class=\"ui-g-12 title\" id=\"glgxzw\">\r\n      <header-title [Info]=\"'关联债务'\" *ngIf=\"asolciationLoanInfo.length>0||acceptanceBusinessItemsGLZW.length > 0||djkItemsGLZW.length > 0||guaranteeBusinessItemsGLZW.length > 0||creditBusinessItemsGLZW.length>0\"></header-title>\r\n    </div>\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"asolciationLoanInfo.length>0\">\r\n      <span class=\"secondMenu\" id=\"glzw_dk\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P111')\">贷款业务</span>\r\n      <span class=\"tit_Style\">贷款余额:{{(loanBalance_GLZW/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P111')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"asolciationLoanInfo\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"custNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.loanBalance>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n                <a *ngIf=\"(num!=2)||(num==2&&col.loanBalance<=0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"parentTypeName\" header=\"关联类型\"></p-column>\r\n            <p-column field=\"relationshipName\" header=\"关联关系\"></p-column>\r\n            <p-column field=\"bussType\" header=\"业务品种\"></p-column>\r\n            <p-column field=\"subBussCode\" header=\"子业务品种\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.subBussCode|codeValuePie:subBussTypesOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P111_012')\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P111_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"duebillNo\" header=\"借据编号\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P111_013')\"></p-column>\r\n            <p-column field=\"duebillNo\" header=\"借据编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P111_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanAmt\" header=\"贷款金额\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.loanAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanBalance\" header=\"贷款余额\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.loanBalance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanDateStart\" header=\"起贷日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.loanDateStart|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenType\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenType|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"flag\" header=\"逾期标志\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.flag|codeValuePie:flagSignOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P111_011')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,9)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{asolciationLoanInfopageSize}}\" totalRecords=\"{{asolciationLoanInfototalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateAsolciationLoanInfo($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"acceptanceBusinessItemsGLZW.length>0\">\r\n      <span class=\"secondMenu\" id=\"glzw_cd\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P112')\">承兑业务</span>\r\n      <span class=\"tit_Style\">未结清票面金额:{{(acceptBalance_GLZW/1)|number:'1.2-2'}}元</span>\r\n      <span class=\"tit_Style\">敞口金额:{{(acceBalance_GLZW/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P112')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"acceptanceBusinessItemsGLZW\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"custNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.balance>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n                <a *ngIf=\"(num!=2)||(num==2&&col.balance<=0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"parentTypeName\" header=\"关联类型\"></p-column>\r\n            <p-column field=\"relationshipName\" header=\"关联关系\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P112_011')\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P112_011')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"billAmt\" header=\"票据金额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P112_012')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{(col.billAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"billAmt\" header=\"票据金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P112_012')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P112_013')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{(col.gapAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P112_013')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"余额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P112_014')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{(col.balance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P112_014')\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"billBankId\" header=\"签发行行号\"></p-column>\r\n            <p-column field=\"tenType\" header=\"十级分类\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.tenType|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"appDate\" header=\"经办日期\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.appDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"appUserId\" header=\"经办人\"></p-column>\r\n            <p-column field=\"contractStatus\" header=\"合同状态\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P112_015')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,23)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{acceptanceBusinessItemspageSizeGLZW}}\" totalRecords=\"{{acceptanceBusinessItemstotalNumGLZW}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateAcceptanceBusinessItemsGLZW($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"djkItemsGLZW.length>0\">\r\n      <span class=\"secondMenu\" id=\"glzw_djk\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P115')\">贷记卡业务</span>\r\n      <span class=\"tit_Style\">透支余额:{{(creditCardDebt_GLZW/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P115')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"djkItemsGLZW\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"custNo\" header=\"客户号\"></p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"parentTypeName\" header=\"关联类型\"></p-column>\r\n            <p-column field=\"relationshipName\" header=\"关联关系\"></p-column>\r\n            <p-column field=\"cardNum\" header=\"卡号\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P115_011')\"></p-column>\r\n            <p-column field=\"cardNum\" header=\"卡号\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P115_011')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"cardType\" header=\"卡类别\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.cardType|codeValuePie:cardTypeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"cardOwnerOrgId\" header=\"开卡机构\"></p-column>\r\n            <p-column field=\"guarantor\" header=\"担保人客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.cardStat!=17)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.guarantor)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.guarantor}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.cardStat==17))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.guarantor)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.guarantor}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guarantorName\" header=\"担保人名称\"></p-column>\r\n            <p-column field=\"authCrdtLimit\" header=\"授信额度\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P115_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.authCrdtLimit/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"authCrdtLimit\" header=\"授信额度\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P115_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"odPrin\" header=\"透支余额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P115_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.odPrin/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"odPrin\" header=\"透支余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P115_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueCd\" header=\"是否逾期\"></p-column>\r\n            <p-column field=\"ovdueAmt\" header=\"逾期金额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P115_014')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.ovdueAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueAmt\" header=\"逾期金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P115_014')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueTerm\" header=\"逾期期数\"></p-column>\r\n            <p-column field=\"cardStat\" header=\"卡状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.cardStat|codeValuePie:cardStatOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenLvlClass\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenLvlClass|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"openCardDate\" header=\"开卡日期\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.openCardDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"agent\" header=\"经办人\"></p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{djkItemspageSizeGLZW}}\" totalRecords=\"{{djkItemstotalNumGLZW}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateDjkItemsGLZW($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"guaranteeBusinessItemsGLZW.length>0\">\r\n      <span class=\"secondMenu\" id=\"glzw_bh\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P113')\">保函业务</span>\r\n      <span class=\"tit_Style\">敞口金额:{{(exposureBalance_GLZW/1)|number:'1.2-2'}}元</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P113')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"guaranteeBusinessItemsGLZW\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"custNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.balance>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.balance<=0))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"parentTypeName\" header=\"关联类型\"></p-column>\r\n            <p-column field=\"relationshipName\" header=\"关联关系\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P113_011')\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P113_011')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"settleAcctNo\" header=\"结算账号\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P113_012')\"></p-column>\r\n            <p-column field=\"settleAcctNo\" header=\"结算账号\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P113_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gtType\" header=\"保函类型\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.gtType|codeValuePie:baoHanClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gtAmt\" header=\"保函金额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P113_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.gtAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gtAmt\" header=\"保函金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P113_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P113_014')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.balance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P113_014')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P113_015')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.gapAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmt\" header=\"敞口金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P113_015')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"startDate\" header=\"开始日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.startDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"endDate\" header=\"到期日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.endDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenType\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenType|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contractStatus\" header=\"合同状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P113_016')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,3)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{guaranteeBusinessItemspageSizeGLZW}}\" totalRecords=\"{{guaranteeBusinessItemstotalNumGLZW}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateGuaranteeBusinessItemsGLZW($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"ui-g-12  boxShadow\" *ngIf=\"creditBusinessItemsGLZW.length>0\">\r\n      <span class=\"secondMenu\" id=\"glzw_xyz\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P114')\">信用证业务</span>\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P114')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"creditBusinessItemsGLZW\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"custNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&((col.contractStatus==01) || (col.contractStatus==02) || (col.contractStatus==07))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&((col.contractStatus!=01) && (col.contractStatus!=02) && (col.contractStatus!=07)))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"parentTypeName\" header=\"关联类型\"></p-column>\r\n            <p-column field=\"relationshipName\" header=\"关联关系\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P114_011')\"></p-column>\r\n            <p-column field=\"contractNo\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P114_011')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"guaranteeMode\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.guaranteeMode|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"signFlag\" header=\"签发类型\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.signFlag|codeValuePie:qianFaClass}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"shipmentDate\" header=\"预定装船日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.shipmentDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"paymentDate\" header=\"预定付汇日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.paymentDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"creditAmt\" header=\"开证金额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P114_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.creditAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"creditAmt\" header=\"开证金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P114_012')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P114_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.balance/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"当前余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P142_P114_013')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"investigatorName\" header=\"经办人\"></p-column>\r\n            <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P142_P114_014')\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,4)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{creditBusinessItemspageSizeGLZW}}\" totalRecords=\"{{creditBusinessItemstotalNumGLZW}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateCreditBusinessItemsGLZW($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P148')\">\r\n    <div class=\"ui-g-12 title\" id=\"Whdb\">\r\n      <header-title [Info]=\"'担保债务'\" *ngIf=\"highestAmtGuarInfoItems.length != 0||loanGuarInfoItems.length != 0||lgGuarInfoItems.length != 0||acptGuarInfoItems.length != 0||cecardGuarInfoItems.length != 0\"></header-title>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12\" id=\"Whdb\">\r\n            <strong>作为担保人</strong>\r\n          </div> -->\r\n    <!-- <div class=\"ui-g-12 title\" style=\"position:relative\">\r\n            <header-title [Info]=\"'担保类型'\"></header-title>\r\n            <a class=\"cursor-mouse\" (click)=\"toZgdbe()\" *ngIf=\"highestAmtGuarInfoItems.length != 0\">最高额担保</a>\r\n            <a class=\"cursor-mouse\" (click)=\"toDkdb()\" *ngIf=\"loanGuarInfoItems.length != 0\">贷款担保</a>\r\n            <a class=\"cursor-mouse\" (click)=\"toCddb()\" *ngIf=\"lgGuarInfoItems.length != 0\">承兑担保</a>\r\n            <a class=\"cursor-mouse\" (click)=\"toBhdb()\" *ngIf=\"acptGuarInfoItems.length != 0\">保函担保</a>\r\n            <a class=\"cursor-mouse\" (click)=\"toXykdb()\" *ngIf=\"cecardGuarInfoItems.length != 0\">信用卡担保</a>\r\n          </div> -->\r\n    <!-- <div class=\"ui-g-12 title\" id=\"zgdbe\" *ngIf=\"highestAmtGuarInfoItems.length != 0\">\r\n            <div class=\"header-titleblank\">\r\n              <span class=\"line\"></span>\r\n              <span class=\"text\">\r\n              最高额担保\r\n              </span>\r\n            </div>\r\n          </div> -->\r\n    <div class=\"ui-g-12\" *ngIf=\"highestAmtGuarInfoItems.length != 0\">\r\n      <span class=\"secondMenu\" id=\"zgdbe\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P101')\">最高额担保</span>\r\n      <!-- <span class=\"tit_Style\">合同金额:{{(contrAmtTotal/1)|number:'1.2-2'}}元</span>\r\n        <span class=\"tit_Style\">合同未使用金额:{{(contrUnuseAmtTotal/1)|number:'1.2-2'}}元</span> -->\r\n      <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P101')\">\r\n        <p-dataTable [value]=\"highestAmtGuarInfoItems\" [emptyMessage]=\"tabMesg\">\r\n          <!-- <p-column>\r\n              <ng-template pTemplate=\"header\">\r\n                <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" binary=\"true\" [(ngModel)]=\"ZGCheck\" (click)=\"ZGCheckAll()\"></p-checkbox>\r\n              </ng-template>\r\n              <ng-template pTemplate=\"body\" let-col=\"rowData\" let-ri=\"rowIndex\">\r\n                <p-checkbox name=\"groupname\" [value]=\"ri\" binary=\"true\" [(ngModel)]=\"col.ZGbox\" (onChange)=\"ZGCheckbox(ri,col)\"></p-checkbox>\r\n              </ng-template>\r\n            </p-column> -->\r\n          <p-column field=\"custNo\" header=\"客户号\">\r\n            <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n              <a *ngIf=\"(num==2)&&(col.contrStat==01||col.contrStat==02||col.contrStat==07)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                target=\"_blank\">{{col.custNo}}</a>\r\n              <a *ngIf=\"(num!=2)||((num==2)&&(col.contrStat!=01&&col.contrStat!=02&&col.contrStat!=07))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}\"\r\n                target=\"_blank\">{{col.custNo}}</a>\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n          <p-column field=\"contrId\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P101_P102')\"></p-column>\r\n          <p-column field=\"contrId\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P101_P102')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"mainGuarMeth\" header=\"主担保方式\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.mainGuarMeth|codeValuePie:guaranteeModeOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"contrAmt\" header=\"合同金额\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P101_P103')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.contrAmt/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"contrAmt\" header=\"合同金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P101_P103')\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              ****\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"contrUnuseAmt\" header=\"合同未使用金额\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.contrUnuseAmt/1)|number:'1.2-2'}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"guarStartDay\" header=\"担保开始日期\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.guarStartDay|timeValuePie}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"guarEndDay\" header=\"担保到期日期\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.guarEndDay|timeValuePie}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"contrStat\" header=\"合同状态\">\r\n            <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.contrStat|codeValuePie:heTongZhuangTaiOptions}}\r\n            </ng-template>\r\n          </p-column>\r\n          <p-column field=\"agent\" header=\"经办人\"></p-column>\r\n        </p-dataTable>\r\n      </div>\r\n      <p-paginator rows=\"{{highestAmtGuarInfoItemsPageSize}}\" totalRecords=\"{{highestAmtGuarInfoItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"paginateHighestAmtGuarInfoItems($event)\"></p-paginator>\r\n    </div>\r\n    <!-- <div class=\"adjust ui-g-12\" *ngIf=\"highestAmtGuarInfoItems.length != 0\">\r\n        <div *ngIf=\"judgeField('X_CUST_M_P009_P148_P101')\">\r\n          <a style=\"color:#fff;\">合同状态调整</a>\r\n          <ul class=\"list\">\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"zgCheXiao()\">撤销新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"zgCheXiaotiaozheng()\">撤销修改</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"zgZhongZhi()\">中止新增</li>\r\n            <li class=\"bodyBgColor\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"zgZhongZhitiaozheng()\">中止修改</li>\r\n          </ul>\r\n        </div>\r\n      </div> -->\r\n\r\n    <div class=\"ui-g-12 boxShadow\" id=\"dkdb\" *ngIf=\"loanGuarInfoItems.length != 0\">\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P102')\">贷款担保</span>\r\n      <!-- <span class=\"tit_Style\">贷款金额:{{(loanAmtTotal/1)|number:'1.2-2'}}元</span> -->\r\n      <span class=\"tit_Style\">贷款余额:{{(loanBalTotal/1)|number:'1.2-2'}}元</span>\r\n      <!-- <header-title [Info]=\"'贷款担保'\"></header-title> -->\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P102')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"loanGuarInfoItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"custNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.loanBal>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.loanBal<=0))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"contrId\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P102_P102')\"></p-column>\r\n            <p-column field=\"contrId\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P102_P102')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"debentureId\" header=\"借据编号\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P102_P103')\"></p-column>\r\n            <p-column field=\"debentureId\" header=\"借据编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P102_P103')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"bizCateg\" header=\"业务品种\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.bizCateg|codeValuePie:bussTypeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"mainGuarMeth\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.mainGuarMeth|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"stCrdDt\" header=\"起贷日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.stCrdDt|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"endCrdDt\" header=\"止贷日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.endCrdDt|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanAmt\" header=\"贷款金额\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P102_P104')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.loanAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanAmt\" header=\"贷款金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P102_P104')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanBal\" header=\"贷款余额\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P102_P105')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.loanBal/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"loanBal\" header=\"贷款余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P102_P105')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"normIntRate\" header=\"贷款利率（‰）\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.normIntRate/1.2)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenLvlClass\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenLvlClass|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"overdueInd\" header=\"逾期标志\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.overdueInd|codeValuePie:flagSignOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"contrStat\" header=\"合同状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.contrStat|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"agent\" header=\"经办人\"></p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{loanGuarInfoItemspageSize}}\" totalRecords=\"{{loanGuarInfoItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateLoanGuarInfoItems($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" id=\"cddb\" *ngIf=\"lgGuarInfoItems.length != 0\">\r\n      <span class=\"secondMenu\">承兑担保</span>\r\n      <span *ngIf=\"judgeField('X_CUST_M_P009_P148_P103')\" class=\"tit_Style\">未结清票面金额:{{(parTotal/1)|number:'1.2-2'}}元</span>\r\n      <span *ngIf=\"judgeField('X_CUST_M_P009_P148_P103')\" class=\"tit_Style\">敞口金额:{{(gapAmountTotal/1)|number:'1.2-2'}}元</span>\r\n      <!-- <header-title [Info]=\"'承兑担保'\"></header-title> -->\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P103')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"lgGuarInfoItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"custNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.gapAmount>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.gapAmount<=0))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"contrId\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P103_P102')\"></p-column>\r\n            <p-column field=\"contrId\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P103_P102')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"par\" header=\"票面金额\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P103_P104')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.par/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"par\" header=\"票面金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P103_P104')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmount\" header=\"敞口金额\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P103_P105')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.gapAmount/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"gapAmount\" header=\"敞口金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P103_P105')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"balance\" header=\"余额\"></p-column>\r\n            <p-column field=\"signBankNo\" header=\"签发行行号\"></p-column>\r\n            <p-column field=\"tenLvlVlass\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenLvlClass|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"issueDate\" header=\"经办日期\"></p-column>\r\n            <p-column field=\"agent\" header=\"经办人\"></p-column>\r\n            <p-column field=\"\" header=\"合同状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.contractStatus|codeValuePie:heTongZhuangTaiOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column header=\"操作\">\r\n              <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n                <span class=\"tabelDetailIco\" (click)='showDialog(col,24)'>查看详情</span>\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n          <p-paginator rows=\"{{lgGuarInfoItemsPageSize}}\" totalRecords=\"{{lgGuarInfoItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginateLgGuarInfoItems($event)\"></p-paginator>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" id=\"bhdb\" *ngIf=\"acptGuarInfoItems.length != 0\">\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P104')\">保函担保</span>\r\n      <!-- <span class=\"tit_Style\">保函金额:{{(lgAmtTotal/1)|number:'1.2-2'}}元</span> -->\r\n      <!-- <span class=\"tit_Style\">敞口金额:{{(lgBalTotal/1)|number:'1.2-2'}}元</span> -->\r\n      <!-- <header-title [Info]=\"'保函担保'\"></header-title> -->\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P104')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"acptGuarInfoItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"custNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.lgBal>0)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.lgBal<=0))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"contrId\" header=\"合同编号\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P104_P102')\"></p-column>\r\n            <p-column field=\"contrId\" header=\"合同编号\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P104_P102')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"mainGuarMeth\" header=\"主担保方式\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.mainGuarMeth|codeValuePie:guaranteeModeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"sltAcctId\" header=\"结算账号\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P104_P103')\"></p-column>\r\n            <p-column field=\"sltAcctId\" header=\"结算账号\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P104_P103')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"lgType\" header=\"保函类型\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.lgType|codeValuePie:baoHanClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"lgAmt\" header=\"保函金额\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P104_P104')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.lgAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"lgAmt\" header=\"保函金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P104_P104')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"lgBal\" header=\"保函余额\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P104_P105')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.lgBal/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"lgBal\" header=\"保函余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P104_P105')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"startDt\" header=\"开始日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.startDt|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"endDt\" header=\"到期日期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.endDt|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenLvlClass\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenLvlClass|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"agent\" header=\"经办人\"></p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{acptGuarInfoItemsPageSize}}\" totalRecords=\"{{acptGuarInfoItemstotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateAcptGuarInfoItems($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"ui-g-12 boxShadow\" id=\"xykdb\" *ngIf=\"cecardGuarInfoItems.length != 0\">\r\n      <span class=\"secondMenu\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P105')\">贷记卡担保</span>\r\n      <!-- <span class=\"tit_Style\">授信额度:{{(authCrdtLimitTotal/1)|number:'1.2-2'}}元</span> -->\r\n      <span class=\"tit_Style\">透支余额:{{(acctBalTotal/1)|number:'1.2-2'}}元</span>\r\n      <!-- <span class=\"tit_Style\">逾期金额:{{(ovdueAmtTotal/1)|number:'1.2-2'}}元</span> -->\r\n      <!-- <header-title [Info]=\"'信用卡担保'\"></header-title> -->\r\n      <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P105')\">\r\n        <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n          <p-dataTable [value]=\"cecardGuarInfoItems\" [emptyMessage]=\"tabMesg\">\r\n            <p-column field=\"custNo\" header=\"客户号\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                <a *ngIf=\"(num==2)&&(col.cardStat!=17)\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}&scene=0303_XWZH_View\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n                <a *ngIf=\"(num!=2)||((num==2)&&(col.cardStat==17))\" href=\"/#/pages/custom-view?custNo={{compileStr(col.custNo)}}&pageNum={{num}}\"\r\n                  target=\"_blank\">{{col.custNo}}</a>\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n            <p-column field=\"cardType\" header=\"卡类别\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.cardType|codeValuePie:cardTypeOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"cardNum\" header=\"卡号\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P105_P102')\"></p-column>\r\n            <p-column field=\"cardNum\" header=\"卡号\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P105_P102')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"authCrdtLimit\" header=\"授信额度\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P105_P103')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.authCrdtLimit/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"authCrdtLimit\" header=\"授信额度\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P105_P103')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"odPrin\" header=\"透支余额\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P105_P104')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.odPrin/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"odPrin\" header=\"透支余额\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P105_P104')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueCd\" header=\"是否逾期\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.ovdueCd|codeValuePie:flagSignOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueAmt\" header=\"逾期金额\" *ngIf=\"judgeField('X_CUST_M_P009_P148_P105_P105')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{(col.ovdueAmt/1)|number:'1.2-2'}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueAmt\" header=\"逾期金额\" *ngIf=\"!judgeField('X_CUST_M_P009_P148_P105_P105')\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                ****\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"ovdueTerm\" header=\"逾期期数\"></p-column>\r\n            <p-column field=\"cardStat\" header=\"卡状态\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.cardStat|codeValuePie:cardStatOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"tenLvlClass\" header=\"十级分类\">\r\n              <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                {{col.tenLvlClass|codeValuePie2:tenClassOptions}}\r\n              </ng-template>\r\n            </p-column>\r\n            <p-column field=\"agent\" header=\"经办人\"></p-column>\r\n            <p-column field=\"openCardDate\" header=\"开卡日期\">\r\n              <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                {{col.openCardDate|timeValuePie}}\r\n              </ng-template>\r\n            </p-column>\r\n          </p-dataTable>\r\n        </div>\r\n        <p-paginator rows=\"{{cecardGuarInfoItemsPageSize}}\" totalRecords=\"{{cecardGuarInfoItemstotalnum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n          (onPageChange)=\"paginateCecardGuarInfoItems($event)\"></p-paginator>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"ui-g-12 boxShadow\">\r\n    <!-- <div class=\"ui-g-12\" id=\"Plysxed\">\r\n      <strong>批量预授信额度</strong>\r\n    </div> -->\r\n    <!-- 批量预授信 -->\r\n    <div class=\"ui-g-12 title\" *ngIf=\"judgeField('X_CUST_M_P009_P146')\" id=\"Plysxed\">\r\n      <header-title [Info]=\"'批量预授信查询'\"></header-title>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"ui-g-12\" *ngIf=\"judgeField('X_CUST_M_P009_P146')\">\r\n      <div class=\"ui-g-12\" style=\"padding:0;overflow-x:scroll;\">\r\n        <p-dataTable [value]=\"batchList\" [emptyMessage]=\"tabMesg\">\r\n          <!-- <p-column>\r\n            <ng-template pTemplate=\"header\">\r\n              <p-checkbox name=\"groupname\" value=\"all\" label=\"选择\" binary=\"true\" [(ngModel)]=\"PLCheck\" (click)=\"PLCheckAll()\"></p-checkbox>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-ri=\"rowIndex\">\r\n              <p-checkbox name=\"groupname\" [value]=\"ri\" binary=\"true\" [(ngModel)]=\"col.PLbox\" (onChange)=\"PLCheckbox(ri,col)\"></p-checkbox>\r\n            </ng-template>\r\n          </p-column> -->\r\n          <p-column field=\"groupName\" header=\"客群名称\"></p-column>\r\n          <p-column field=\"custName\" header=\"客户名称\"></p-column>\r\n          <p-column field=\"idenNum\" header=\"证件号\">\r\n            <!-- <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.bussCode|codeValuePie:bussTypeOptions}}\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column field=\"telNum\" header=\"手机号码\">\r\n            <!-- <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{(col.expCreditLmt/1)|number:'1.2-2'}}\r\n            </ng-template> -->\r\n          </p-column>\r\n\r\n          <p-column field=\"loanOfficerAdvises\" header=\"信贷员建议额度(元)\">\r\n            <!-- <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.effectDate|timeValuePie}}\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column field=\"loanSystemAdvises\" header=\"系统建议额度(元)\">\r\n            <!-- <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.invalidDate|timeValuePie}}\r\n            </ng-template> -->\r\n          </p-column>\r\n          <p-column field=\"endDate\" header=\"授信到期日\">\r\n            <!-- <ng-template let-ri=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n              {{col.statusType|codeValuePie:zhStatusTypeOptions}}\r\n            </ng-template> -->\r\n          </p-column>\r\n          <!-- <p-column field=\"threeResult\" header=\"第三方评价\"></p-column> -->\r\n          <p-column header=\"第三方评价结果\">\r\n            <ng-template pTemplate=\"body\" let-col=\"rowData\" let-i=\"rowIndex\">\r\n              <span class=\"groupNumStyle\" (click)=\"toThreeView(col)\" style=\"cursor:pointer;\">第三方评价</span>\r\n            </ng-template>\r\n          </p-column>\r\n          <!-- <p-column field=\"state\" header=\"状态\"></p-column> -->\r\n          <p-column field=\"state\" header=\"状态\">\r\n              <ng-template let-i=\"rowIndex\" let-col=\"rowData\" pTemplate=\"body\">\r\n                  <span>{{col.state | codeValuePie:approvalStatusList}}</span>\r\n              </ng-template>\r\n          </p-column>\r\n          \r\n         \r\n          <!-- <p-column header=\"操作\" *ngIf=\"judgeField('X_CUST_M_P009_P146_P003')\"> -->\r\n              <p-column header=\"操作\" >\r\n            <ng-template pTemplate=\"body\" let-ri=\"rowIndex\" let-col=\"rowData\">\r\n              <!-- <span class=\"tabelDetailIco\" (click)='showDialog(col,8)' *ngIf=\"col.statusType=='03'\">查看详情</span> -->\r\n              <!-- <span class=\"tabelDetailIco\" (click)='showDialog(col,8)' >查看详情</span> -->\r\n              <span class=\"tabelDetailIco\" (click)='showDialog(col,96)' >查看详情</span>\r\n              <span *ngIf=\"col.state == '0' || col.state == '1' || col.state == '2'\"  (click)='toUpdate(col)' class=\"tabelUpdateIco\">失效</span>\r\n              <span *ngIf=\"col.state == '1'\"  (click)='toTranslate(col)' class=\"tableApprove\">个人转授信</span>\r\n            </ng-template>\r\n          </p-column>\r\n        </p-dataTable>\r\n      </div>\r\n\r\n      <p-paginator rows=\"{{batchListPageSize}}\" totalRecords=\"{{batchListPageTotalNum}}\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n        (onPageChange)=\"paginateBtachSizeChange($event)\"></p-paginator>\r\n    </div>\r\n    <!-- <div class=\"ui-g-12 piliangPage\" *ngIf=\"judgeField('X_CUST_M_P009_P146')\">\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P146_P001')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"foujue()\">预授信额度否决</a>\r\n      </div>\r\n      <div *ngIf=\"judgeField('X_CUST_M_P009_P146_P002')\">\r\n        <a style=\"color:#fff;\" href=\"javascript:void(0);\" target=\"_blank\" (click)=\"foujue()\">申请提交</a>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n\r\n\r\n\r\n  <!-- <div class=\"ui-g-12 boxShadow\">\r\n    <div class=\"ui-g-12 title\" id=\"Zhsxfxbg\">\r\n      <div class=\"header-title\">\r\n        <span class=\"line\"></span>\r\n        <span class=\"text\">\r\n        综合授信分析报告\r\n        <a ><button pButton type=\"button\" label=\" 创建\"></button></a>\r\n      </span>\r\n        <div style=\"text-align:left\">\r\n          <p-multiSelect [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <p-dataTable [value]=\"items\" [emptyMessage]=\"tabMesg\">\r\n        <p-column *ngFor=\"let col of cols\" [field]=\"col.field\" [header]=\"col.header\"></p-column>\r\n      </p-dataTable>\r\n    </div>\r\n  </div> -->\r\n  <div *ngIf=\"judgeField('X_CUST_M_P009_009')\">\r\n    <report></report>\r\n  </div>\r\n\r\n\r\n  <p-growl [(value)]=\"msgs\"></p-growl>\r\n  <div *ngIf=\"display1\" class=\"dialog\">\r\n    <p-dialog *ngIf=\"display1\" [(visible)]=\"display1\" modal=\"modal\" (onHide)=\"addCall($event)\" [positionTop]=10>\r\n      <p-header>\r\n        {{showDetailTitle}}\r\n      </p-header>\r\n      <app-batch-cust-detail [inValue]=\"inValue\" *ngIf=\"showDialogNum==96\" (outValue)=\"addCall($event)\"></app-batch-cust-detail>\r\n      <loan-details [inValue]=\"inValue\" *ngIf=\"showDialogNum==1||showDialogNum==9\" (outValue)=\"addCall($event)\"></loan-details>\r\n      <acceptance-detail [inValue]=\"inValue\" *ngIf=\"showDialogNum==2||showDialogNum==22||showDialogNum==23||showDialogNum==24\"></acceptance-detail>\r\n      <guarantee-detail [inValue]=\"inValue\" *ngIf=\"showDialogNum==3\"></guarantee-detail>\r\n      <credit-business-detail [inValue]=\"inValue\" *ngIf=\"showDialogNum==4\"></credit-business-detail>\r\n      <credit-line-detail [inValue]=\"inValue\" *ngIf=\"showDialogNum==6||showDialogNum==7\"></credit-line-detail>\r\n      <bulkpercredit-detail [inValue]=\"inValue\" *ngIf=\"showDialogNum==8\"></bulkpercredit-detail>\r\n      <contract-detail [inValue]=\"inValue\" *ngIf=\"showDialogNum==91||showDialogNum==92||showDialogNum==93||showDialogNum==94||showDialogNum==95\"\r\n        (outValue)=\"addCall($event)\"></contract-detail>\r\n    </p-dialog>\r\n  </div>\r\n\r\n  <!-- 弹出窗 -->\r\n  <p-dialog *ngIf=\"Display\" [(visible)]=\"Display\" baseZIndex=\"1\" modal=\"modal\" [responsive]=\"true\" class=\"cardStatusAdjustmentOverf\">\r\n    <p-header>{{title}}</p-header>\r\n    <cardStatusAdjustment *ngIf=\"addDisplay\" [in-value]=\"addInvalue\" (outValue)=\"addcardCall($event)\"></cardStatusAdjustment>\r\n  </p-dialog>\r\n\r\n\r\n  <!-- 撤销 -->\r\n  <p-dialog styleClass=\"function\" [(visible)]=\"voteDisplay\" modal=\"modal\" [positionTop]=200 class=\"my-cust-overf\" *ngIf=\"voteDisplay\"\r\n    (onHide)=\"close()\">\r\n    <p-header>撤销</p-header>\r\n    <!-- 撤销 -->\r\n    <ul class=\"veto\" *ngIf=\"voteDisplay\">\r\n      <li class=\"\">\r\n        <span class=\"veto-tip\">一级原因：</span>\r\n        <div class=\"veto-select\">\r\n          <p-dropdown [options]=\"vetoFirsts\" [(ngModel)]=\"rejectFirstReason\" (onChange)=\"vetoChange($event)\"></p-dropdown>\r\n        </div>\r\n      </li>\r\n      <li class=\"\">\r\n        <span class=\"veto-tip\">二级原因：</span>\r\n        <div class=\"veto-select\">\r\n          <!-- 个人因素 -->\r\n          <p-dropdown [options]=\"vetoOption\" [(ngModel)]=\"rejectSecondReason\" (onChange)=\"vetoChangeTwoReson($event)\"></p-dropdown>\r\n        </div>\r\n\r\n      </li>\r\n      <li class=\"\" *ngIf=\"bzIsshow\">\r\n        <span class=\"veto-tip\">备注：</span>\r\n        <div class=\"veto-select\">\r\n          <!-- 个人因素 -->\r\n          <textarea rows=\"3\" pInputTextarea [(ngModel)]=\"comments\"></textarea>\r\n        </div>\r\n      </li>\r\n      <li class=\"btnVeto\">\r\n        <button pButton type=\"button\" label=\"撤销\" class=\"icoColor\" (click)=\"vetoClick()\"></button>\r\n        <button pButton type=\"button\" label=\"取消\" (click)=\"close()\"></button>\r\n      </li>\r\n    </ul>\r\n  </p-dialog>\r\n\r\n  <!-- 获取审批人 -->\r\n  <p-dialog *ngIf=\"dealPerShow\" header=\"提交给\" [(visible)]=\"dealPerShow\" class=\"dealPerShowov\" modal=\"modal\" (onHide)=\"dealPerShowClose()\">\r\n    <div *ngIf=\"listDisplay\">\r\n      <p-dataTable [value]=\"list\" emptyMessage=\"暂无数据...\" scrollable=\"true\" [style]=\"{'text-align':'center'}\">\r\n        <p-column header=\"序号\" [style]=\"{'width':'10%'}\">\r\n          <ng-template let-ri=\"rowIndex\" pTemplate=\"body\">\r\n            <span>{{ri+1}}</span>\r\n          </ng-template>\r\n        </p-column>\r\n        <p-column field=\"reminder\" header=\"例外审批检查规则\"></p-column>\r\n        <p-column header=\"查看详情\" [style]=\"{'width':'10%'}\">\r\n          <ng-template let-col=\"rowData\" pTemplate=\"body\">\r\n            <a href=\"/#/pages/custom-view?custNo={{compileStr(col.linkCustNo)}}&pageNum=1\">\r\n              <span *ngIf=\"col.linkCustNo\" class=\"tabelDetailIco\">查看</span>\r\n            </a>\r\n          </ng-template>\r\n        </p-column>\r\n      </p-dataTable>\r\n    </div>\r\n    <app-examine-approval *ngIf=\"dealPerShow\" [inValue]=\"outVal\" (outDisplay)=\"outDisplayCall($event)\" (outSelectedList)=\"outValueCall($event)\"></app-examine-approval>\r\n  </p-dialog>\r\n\r\n  <p-dialog *ngIf=\"imageShow\" [(visible)]=\"imageShow\" class=\"image-style\">\r\n    <p-header>{{title}}</p-header>\r\n    <iframe [src]=\"srcUrl_1\" class=\"iframe-style\">\r\n    </iframe>\r\n  </p-dialog>\r\n\r\n  <p-confirmDialog header=\"提示\" icon=\"fa fa-question-circle\" appendTo=\"body\" width=\"425\" #cd>\r\n    <p-footer>\r\n      <button type=\"button\" pButton icon=\"fa-check\" label=\"确定\" style=\"color:#fff;\" (click)=\"cd.accept()\"></button>\r\n      <button type=\"button\" pButton icon=\"fa-close\" label=\"取消\" style=\"color:#fff;\" (click)=\"cd.reject()\"></button>\r\n    </p-footer>\r\n  </p-confirmDialog>\r\n\r\n  <!-- 弹出窗 -->\r\n  <p-dialog *ngIf=\"Display2\" [(visible)]=\"Display2\" baseZIndex=\"1\" modal=\"modal\">\r\n    <p-header>{{title}}</p-header>\r\n    <green-loan-add *ngIf=\"addDisplay\" [in-value]=\"dataItem\" (outValue)=\"addcardCall($event)\"></green-loan-add>\r\n  </p-dialog>\r\n  <!-- 弹出窗 -->\r\n  <p-dialog *ngIf=\"Display3\" [(visible)]=\"Display3\" baseZIndex=\"1\" modal=\"modal\">\r\n    <p-header>{{title}}</p-header>\r\n    <green-loan-edit *ngIf=\"addDisplay\" [IValue]=\"dataUP\" (outValue)=\"addcardCall($event)\"></green-loan-edit>\r\n  </p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.scss ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".link {\n  padding: 0;\n  padding-top: 0px;\n  background: #fafafa; }\n  .link .tabelDetailIco {\n    background-position: center; }\n  .link .tab_style table {\n    border-collapse: collapse;\n    margin: 0 auto;\n    width: 100%; }\n  .link .tab_style table tr td {\n      height: 35px;\n      line-height: 35px;\n      text-align: center;\n      border: 1px solid #fff;\n      font-size: 14px; }\n  .link .tab_style table .first_tr {\n      background: #19b0c8 !important;\n      color: #fff; }\n  .link .tab_style table .second_tr td {\n      border: 1px solid #fff;\n      background: #e5e5e5; }\n  .link .tab_first table {\n    border-collapse: collapse;\n    width: 97%;\n    margin: 1em auto; }\n  .link .tab_first table tr td {\n      height: 30px;\n      line-height: 30px;\n      text-align: center;\n      border: 1px solid #c6c6c6;\n      background: #e5e5e5;\n      cursor: pointer;\n      font-size: 14px; }\n  .link .ui-g-12 > a {\n    margin-left: 10px; }\n  .link .ui-g-12 > strong {\n    margin-left: 10px; }\n  .link .tentypePage div,\n  .link .chengdui div,\n  .link .baohanpage div,\n  .link .piliangPage div,\n  .link .biangengPage div,\n  .link .tentenpage div,\n  .link .adjust div {\n    display: inline-block;\n    border-radius: 3px;\n    -moz-border-radius: 3px;\n    -webkit-border-radius: 3px;\n    -o-border-radius: 3px;\n    -ms-border-radius: 3px;\n    text-align: center;\n    position: relative;\n    padding: 3px 17px;\n    background: #d7e9e8;\n    color: #19b0c8;\n    box-shadow: none;\n    border: 1px solid #a7d3d9;\n    border-bottom: 3px solid #b5d8dd; }\n  .link .tentypePage div a,\n    .link .chengdui div a,\n    .link .baohanpage div a,\n    .link .piliangPage div a,\n    .link .biangengPage div a,\n    .link .tentenpage div a,\n    .link .adjust div a {\n      color: #29b1c1 !important;\n      cursor: pointer; }\n  .link .tentypePage div:hover .list,\n    .link .chengdui div:hover .list,\n    .link .baohanpage div:hover .list,\n    .link .piliangPage div:hover .list,\n    .link .biangengPage div:hover .list,\n    .link .tentenpage div:hover .list,\n    .link .adjust div:hover .list {\n      display: block; }\n  .link .tentypePage div:hover .list:hover,\n      .link .chengdui div:hover .list:hover,\n      .link .baohanpage div:hover .list:hover,\n      .link .piliangPage div:hover .list:hover,\n      .link .biangengPage div:hover .list:hover,\n      .link .tentenpage div:hover .list:hover,\n      .link .adjust div:hover .list:hover {\n        display: block; }\n  .link .tentypePage .list,\n  .link .chengdui .list,\n  .link .baohanpage .list,\n  .link .piliangPage .list,\n  .link .biangengPage .list,\n  .link .tentenpage .list,\n  .link .adjust .list {\n    position: absolute;\n    list-style-type: none;\n    top: 8px;\n    left: -15px;\n    z-index: 10000;\n    display: none; }\n  .link .tentypePage .list li,\n    .link .chengdui .list li,\n    .link .baohanpage .list li,\n    .link .piliangPage .list li,\n    .link .biangengPage .list li,\n    .link .tentenpage .list li,\n    .link .adjust .list li {\n      box-sizing: border-box;\n      width: 100px;\n      text-align: center;\n      border: 1px solid #ffffff;\n      cursor: pointer;\n      margin: 1px;\n      padding: 3px 0 3px 0;\n      border-radius: 6px;\n      -moz-border-radius: 6px;\n      -webkit-border-radius: 6px;\n      -o-border-radius: 6px;\n      -ms-border-radius: 6px;\n      box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n      -moz-box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n      -webkit-box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n      -o-box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n      -ms-box-shadow: 0 1px 7.5px 0 rgba(0, 0, 0, 0.5);\n      background: #eef3f6 !important;\n      color: #29b1c1 !important; }\n  .link .title {\n    padding: 0; }\n  .link .title .header-titleblank {\n      width: 100%;\n      height: 34px;\n      background-color: #fafafa;\n      padding: 7px 0 7px 20px;\n      box-sizing: border-box;\n      display: flex; }\n  .link .title .header-titleblank .line {\n        width: 5px;\n        height: 19px;\n        color: #fff;\n        display: inline-block;\n        margin-right: 7px; }\n  .link .title .header-titleblank .text {\n        flex: 1;\n        height: 20px;\n        font-size: 14px;\n        line-height: 20px;\n        display: block;\n        font-weight: bold; }\n  .link .title {\n    padding: 0; }\n  .link .title .header-title {\n      width: 100%;\n      height: 34px;\n      background-color: #f2f2f2;\n      padding: 7px 0 7px 20px;\n      box-sizing: border-box;\n      display: flex; }\n  .link .title .header-title .line {\n        width: 5px;\n        height: 19px;\n        color: #fff;\n        display: inline-block;\n        margin-right: 7px; }\n  .link .title .header-title .text {\n        flex: 1;\n        height: 20px;\n        font-size: 14px;\n        line-height: 20px;\n        display: block;\n        font-weight: bold; }\n  :host/deep/ .ui-datatable table {\n  text-align: center;\n  table-layout: inherit;\n  white-space: nowrap; }\n  :host/deep/ .debt .ui-dropdown {\n  width: 100% !important;\n  border: 0 none !important;\n  background: transparent !important; }\n  .boxShadow {\n  margin-bottom: 10px; }\n  .selectM {\n  position: relative; }\n  .selectM .nopointer {\n    padding: 0;\n    margin: 0;\n    display: none;\n    position: absolute;\n    list-style-type: none !important;\n    width: 100%;\n    z-index: 5; }\n  .selectM .nopointer li {\n      background: #f2f2f2; }\n  .selectM .nopointer li:hover {\n        background-color: #fafafa; }\n  .selectM:hover .nopointer {\n    display: block;\n    position: absolute;\n    list-style-type: none !important;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    z-index: 5; }\n  .selectM:hover .nopointer li {\n      background: #f2f2f2; }\n  .selectM:hover .nopointer li:hover {\n        background-color: #fafafa; }\n  .whiteback {\n  background: #fff; }\n  .cursor-mouse {\n  cursor: pointer;\n  color: #19b0c8;\n  width: 100%;\n  display: inline-block; }\n  .cursor-mouse:hover {\n  background-color: #fafafa; }\n  .td-box-yw {\n  width: 12%;\n  cursor: pointer; }\n  .show {\n  color: #b8b8b8; }\n  .groupNumStyle {\n  color: #19b0c8; }\n  :host/deep/ .cardStatusAdjustmentOverf .ui-inputtext {\n  width: 100% !important; }\n  :host/deep/ .ui-dialog .ui-dialog-content {\n  padding: 1em 1em;\n  height: 90% !important; }\n  :host /deep/ .cardStatusAdjustmentOverf .ui-dialog.ui-shadow {\n  height: 90% !important; }\n  :host/deep/ .cardStatusAdjustmentOverf .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  .tit_Style {\n  background: transparent !important;\n  color: #19b0c8 !important;\n  margin-right: 0.7em;\n  font-weight: bold;\n  font-size: 14px; }\n  .label {\n  text-align: right;\n  vertical-align: middle; }\n  .shouxin .ui-inputtext {\n  width: 100% !important; }\n  .veto {\n  width: 356px;\n  margin: auto;\n  margin-top: 10px;\n  list-style-type: none;\n  color: #000;\n  padding: 1em 0;\n  zoom: 1; }\n  .veto::after {\n    content: '';\n    clear: both; }\n  .veto li {\n    margin-top: 25px;\n    height: 26px;\n    line-height: 26px; }\n  .veto li:first-child {\n      margin-top: 0; }\n  .veto li .veto-tip {\n      display: block;\n      float: left;\n      text-align: right;\n      width: 75px;\n      font-size: 14px; }\n  .veto li .veto-tip.turn-tip {\n        width: 90px; }\n  .veto li .veto-select {\n      float: right;\n      width: 270px !important; }\n  .veto li .veto-select.turn-select {\n        width: 255px !important; }\n  .btnVeto {\n  text-align: center;\n  margin-left: 18px;\n  margin-top: 20px;\n  margin-bottom: 20px; }\n  .btnVeto .icoColor {\n    background: #ffc107; }\n  .btnVeto .icoColor:hover {\n      background: #ffc107; }\n  :host/deep/ .my-cust-overf .ui-dialog.ui-shadow {\n  width: 542px !important;\n  height: auto !important;\n  border-radius: 10px !important;\n  min-width: 0 !important;\n  min-height: 0 !important;\n  padding: 0 !important; }\n  :host /deep/ .image-style .ui-dialog.ui-shadow {\n  height: 85% !important;\n  top: 10% !important; }\n  :host/deep/ .image-style .ui-dialog .ui-dialog-content {\n  height: 90%; }\n  .iframe-style {\n  width: 100%;\n  height: 500px; }\n  :host/deep/ .dealPerShowov .ui-dialog.ui-shadow {\n  z-index: 1090 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9jcmVkaXQtbWFuYWdlcm1lbnQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xcY3JlZGl0LW1hbmFnZXJtZW50XFxjcmVkaXQtbWFuYWdlcm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0VBSHZCO0lBS1EsMkJBQTJCLEVBQUE7RUFMbkM7SUFVWSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFdBQVcsRUFBQTtFQVp2QjtNQWVvQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixzQkFBc0I7TUFDdEIsZUFBZSxFQUFBO0VBbkJuQztNQXVCZ0IsOEJBQThCO01BQzlCLFdBQVcsRUFBQTtFQXhCM0I7TUE0Qm9CLHNCQUFzQjtNQUN0QixtQkFBbUIsRUFBQTtFQTdCdkM7SUFxQ1kseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixnQkFBZ0IsRUFBQTtFQXZDNUI7TUEwQ29CLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGVBQWUsRUFBQTtFQWhEbkM7SUF1RFksaUJBQWlCLEVBQUE7RUF2RDdCO0lBMERZLGlCQUFpQixFQUFBO0VBMUQ3Qjs7Ozs7OztJQXFFWSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZ0NBQWdDLEVBQUE7RUFsRjVDOzs7Ozs7O01Bb0ZnQix5QkFBeUI7TUFDekIsZUFBZSxFQUFBO0VBckYvQjs7Ozs7OztNQTRGb0IsY0FBYyxFQUFBO0VBNUZsQzs7Ozs7OztRQTBGd0IsY0FBYyxFQUFBO0VBMUZ0Qzs7Ozs7OztJQWlHWSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFFBQVE7SUFDUixXQUFXO0lBQ1gsY0FBYztJQUNkLGFBQWEsRUFBQTtFQXRHekI7Ozs7Ozs7TUF3R2dCLHNCQUFzQjtNQUN0QixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsV0FBVztNQUNYLG9CQUFvQjtNQUNwQixrQkFBa0I7TUFDbEIsdUJBQXVCO01BQ3ZCLDBCQUEwQjtNQUMxQixxQkFBcUI7TUFDckIsc0JBQXNCO01BQ3RCLDRDQUE0QztNQUM1QyxpREFBaUQ7TUFDakQsb0RBQW9EO01BQ3BELCtDQUErQztNQUMvQyxnREFBZ0Q7TUFDaEQsOEJBQThCO01BQzlCLHlCQUF5QixFQUFBO0VBMUh6QztJQXlLUSxVQUFVLEVBQUE7RUF6S2xCO01BMktZLFdBQVc7TUFDWCxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLHVCQUF1QjtNQUN2QixzQkFBc0I7TUFDdEIsYUFBYSxFQUFBO0VBaEx6QjtRQWtMZ0IsVUFBVTtRQUNWLFlBQVk7UUFDWixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLGlCQUFpQixFQUFBO0VBdExqQztRQXlMZ0IsT0FBTztRQUNQLFlBQVk7UUFDWixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGNBQWM7UUFDZCxpQkFBaUIsRUFBQTtFQTlMakM7SUFtTVEsVUFBVSxFQUFBO0VBbk1sQjtNQXFNWSxXQUFXO01BQ1gsWUFBWTtNQUNaLHlCQUF5QjtNQUN6Qix1QkFBdUI7TUFDdkIsc0JBQXNCO01BQ3RCLGFBQWEsRUFBQTtFQTFNekI7UUE0TWdCLFVBQVU7UUFDVixZQUFZO1FBQ1osV0FBVztRQUNYLHFCQUFxQjtRQUNyQixpQkFBaUIsRUFBQTtFQWhOakM7UUFtTmdCLE9BQU87UUFDUCxZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsaUJBQWlCLEVBQUE7RUFNakM7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0ksc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixrQ0FBa0MsRUFBQTtFQUd0QztFQUNJLG1CQUFtQixFQUFBO0VBNEJ2QjtFQUNJLGtCQUFrQixFQUFBO0VBRHRCO0lBR1EsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQyxXQUFXO0lBQ1gsVUFBVSxFQUFBO0VBVGxCO01BV1ksbUJBQW1CLEVBQUE7RUFYL0I7UUFhZ0IseUJBQXlCLEVBQUE7RUFiekM7SUFtQlksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBekJ0QjtNQTJCZ0IsbUJBQW1CLEVBQUE7RUEzQm5DO1FBNkJvQix5QkFBeUIsRUFBQTtFQU83QztFQUNJLGdCQUFnQixFQUFBO0VBSXBCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxXQUFXO0VBQ1gscUJBQXFCLEVBQUE7RUFHekI7RUFDSSx5QkFBeUIsRUFBQTtFQUc3QjtFQUNJLFVBQVU7RUFDVixlQUFlLEVBQUE7RUFHbkI7RUFFSSxjQUFjLEVBQUE7RUFNbEI7RUFDSSxjQUFjLEVBQUE7RUFHbEI7RUFDSSxzQkFBc0IsRUFBQTtFQUcxQjtFQUNJLGdCQUFnQjtFQUNoQixzQkFBc0IsRUFBQTtFQUcxQjtFQUVJLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksV0FBVyxFQUFBO0VBR2Y7RUFDSSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZUFBZSxFQUFBO0VBR25CO0VBQ0ksaUJBQWlCO0VBQ2pCLHNCQUNKLEVBQUE7RUFFQTtFQUNJLHNCQUFzQixFQUFBO0VBRzFCO0VBQ0ksWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsT0FBTyxFQUFBO0VBUFg7SUFTUSxXQUFXO0lBQ1gsV0FBVyxFQUFBO0VBVm5CO0lBYVEsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQWZ6QjtNQWlCWSxhQUFhLEVBQUE7RUFqQnpCO01Bb0JZLGNBQWM7TUFDZCxXQUFXO01BQ1gsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxlQUFlLEVBQUE7RUF4QjNCO1FBMEJnQixXQUFXLEVBQUE7RUExQjNCO01BOEJZLFlBQVk7TUFDWix1QkFBdUIsRUFBQTtFQS9CbkM7UUFpQ2dCLHVCQUF1QixFQUFBO0VBTXZDO0VBQ0ksa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7RUFKdkI7SUFNUSxtQkFBbUIsRUFBQTtFQU4zQjtNQVFZLG1CQUFtQixFQUFBO0VBSy9CO0VBQ0ksdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QixxQkFBb0IsRUFBQTtFQUd4QjtFQUNJLHNCQUFzQjtFQUN0QixtQkFBbUIsRUFBQTtFQUd2QjtFQUNJLFdBQVcsRUFBQTtFQUdmO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTtFQUdqQjtFQUNHLHdCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9jcmVkaXQtbWFuYWdlcm1lbnQvY3JlZGl0LW1hbmFnZXJtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmsge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgLnRhYmVsRGV0YWlsSWNvIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGFiX3N0eWxlIHtcclxuICAgICAgICB0YWJsZSB7XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpcnN0X3RyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxOWIwYzggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWNvbmRfdHIge1xyXG4gICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWJfZmlyc3Qge1xyXG4gICAgICAgIHRhYmxlIHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICAgICAgd2lkdGg6IDk3JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICAgICAgdHIge1xyXG4gICAgICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M2YzZjNjtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWktZy0xMiB7XHJcbiAgICAgICAgPmEge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgPnN0cm9uZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZW50eXBlUGFnZSxcclxuICAgIC5jaGVuZ2R1aSxcclxuICAgIC5iYW9oYW5wYWdlLFxyXG4gICAgLnBpbGlhbmdQYWdlLFxyXG4gICAgLmJpYW5nZW5nUGFnZSxcclxuICAgIC50ZW50ZW5wYWdlLFxyXG4gICAgLmFkanVzdCB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvLyB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAtby1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggMTdweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Q3ZTllODtcclxuICAgICAgICAgICAgY29sb3I6ICMxOWIwYzg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhN2QzZDk7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjYjVkOGRkO1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliMWMxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdCB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICB0b3A6IDhweDtcclxuICAgICAgICAgICAgbGVmdDogLTE1cHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAvLyBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDAgM3B4IDA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDcuNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwIDFweCA3LjVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNy41cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAtby1ib3gtc2hhZG93OiAwIDFweCA3LjVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIC1tcy1ib3gtc2hhZG93OiAwIDFweCA3LjVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWYzZjYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjliMWMxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IC8vIC5hZGp1c3Qge1xyXG4gICAgLy8gICAgID5kaXYge1xyXG4gICAgLy8gICAgICAgICAvLyAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAvLyAgICAgICAgIC8vICAgICBtYXJnaW4tbGVmdDogMTUwcHg7XHJcbiAgICAvLyAgICAgICAgIC8vIH1cclxuICAgIC8vICAgICAgICAgLy8gJjpudGgtY2hpbGQoMykge1xyXG4gICAgLy8gICAgICAgICAvLyAgICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG4gICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAvLyAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5NEQyO1xyXG4gICAgLy8gICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIC8vICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIC8vICAgICAgICAgcGFkZGluZzogM3B4IDAgM3B4IDA7XHJcbiAgICAvLyAgICAgICAgIG1hcmdpbi1yaWdodDogOTBweDtcclxuICAgIC8vICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAvLyAgICAgICAgICAgICAubGlzdCB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAubGlzdCB7XHJcbiAgICAvLyAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAvLyAgICAgICAgICAgICB0b3A6IC0xN3B4O1xyXG4gICAgLy8gICAgICAgICAgICAgbGVmdDogODBweDtcclxuICAgIC8vICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgLy8gICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIC8vICAgICAgICAgICAgIGxpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAwIDNweCAwO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC5oZWFkZXItdGl0bGVibGFuayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAwIDdweCAyMHB4O1xyXG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5OTtcclxuICAgICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTlweDsgLy8gYmFja2dyb3VuZDogIzAwOTREMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAuaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDAgN3B4IDIwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE5cHg7IC8vIGJhY2tncm91bmQ6ICMwMDk0RDI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC51aS1kYXRhdGFibGUgdGFibGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGFibGUtbGF5b3V0OiBpbmhlcml0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmRlYnQgLnVpLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDAgbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJveFNoYWRvdyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4vLyAjWnR6dyxcclxuLy8gI1poc3hlZCxcclxuLy8gI1p6bHl3LFxyXG4vLyAjWndndGprcixcclxuLy8gI1BseXN4ZWQsXHJcbi8vICNXaGRiLFxyXG4vLyAjWmhzeGZ4YmcsXHJcbi8vICNjZHl3LFxyXG4vLyAjZGpreXcsXHJcbi8vICNiaHl3LFxyXG4vLyAjeHl6eXcsXHJcbi8vICN6c3p3LFxyXG4vLyAjZGt5dyxcclxuLy8gI2dsZ3h6dyxcclxuLy8gI2RrZGIsXHJcbi8vICNjZGRiLFxyXG4vLyAjYmhkYixcclxuLy8gI3h5a2RiLFxyXG4vLyAjemdlaHQge1xyXG4vLyAgICAgcGFkZGluZy10b3A6IDQzcHg7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAtNDNweDtcclxuLy8gICAgIHN0cm9uZyB7XHJcbi8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi5zZWxlY3RNIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5ub3BvaW50ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICAubm9wb2ludGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ud2hpdGViYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi8vIHN0eWxlPVwiY3Vyc29yOnBvaW50ZXJcIlxyXG4uY3Vyc29yLW1vdXNlIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgLy8gY29sb3I6ICM1NDU0NTQ7XHJcbiAgICBjb2xvcjogIzE5YjBjODtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY3Vyc29yLW1vdXNlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbn1cclxuXHJcbi50ZC1ib3gteXcge1xyXG4gICAgd2lkdGg6IDEyJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNob3cge1xyXG4gICAgLy8gICBiYWNrZ3JvdW5kOiAjY2NjOyAgXHJcbiAgICBjb2xvcjogI2I4YjhiODtcclxufVxyXG5cclxuLy8gOmhvc3QvZGVlcC8gLnVpLWlucHV0dGV4dCB7XHJcbi8vICAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5ncm91cE51bVN0eWxlIHtcclxuICAgIGNvbG9yOiAjMTliMGM4O1xyXG4gIH1cclxuXHJcbjpob3N0L2RlZXAvIC5jYXJkU3RhdHVzQWRqdXN0bWVudE92ZXJmIC51aS1pbnB1dHRleHQge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLnVpLWRpYWxvZyAudWktZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMWVtIDFlbTtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY2FyZFN0YXR1c0FkanVzdG1lbnRPdmVyZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICAvLyB3aWR0aDogOTAwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0L2RlZXAvIC5jYXJkU3RhdHVzQWRqdXN0bWVudE92ZXJmIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4udGl0X1N0eWxlIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzE5YjBjOCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjdlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbn1cclxuXHJcbi5zaG91eGluIC51aS1pbnB1dHRleHQge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZldG8ge1xyXG4gICAgd2lkdGg6IDM1NnB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgcGFkZGluZzogMWVtIDA7XHJcbiAgICB6b29tOiAxO1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgfVxyXG4gICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudmV0by10aXAge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAmLnR1cm4tdGlwIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52ZXRvLXNlbGVjdCB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICYudHVybi1zZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG5WZXRvIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAuaWNvQ29sb3Ige1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmMxMDc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdC9kZWVwLyAubXktY3VzdC1vdmVyZiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICB3aWR0aDogNTQycHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOjAgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5pbWFnZS1zdHlsZSAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgICBoZWlnaHQ6IDg1JSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAxMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QvZGVlcC8gLmltYWdlLXN0eWxlIC51aS1kaWFsb2cgLnVpLWRpYWxvZy1jb250ZW50IHtcclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uaWZyYW1lLXN0eWxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcblxyXG46aG9zdC9kZWVwLyAuZGVhbFBlclNob3dvdiAudWktZGlhbG9nLnVpLXNoYWRvdyB7XHJcbiAgIHotaW5kZXg6MTA5MCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: CreditManagermentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditManagermentComponent", function() { return CreditManagermentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/common/service/commonFun */ "./src/app/@uisftech/common/service/commonFun.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bean/tenType.bean */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/bean/tenType.bean.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/@uisftech/common/service/http.constant */ "./src/app/@uisftech/common/service/http.constant.ts");
/* harmony import */ var app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/@uisftech/common/constant/config */ "./src/app/@uisftech/common/constant/config.ts");
/* harmony import */ var _custom_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../custom-view.component */ "./src/app/pages/tzb/custom/custom-view/custom-view.component.ts");
/* harmony import */ var app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service */ "./src/app/pages/tzb/custom/credit-ccm/common/http/credit-ccm.http.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/@uisftech/view/http/uisftech-view.http.service */ "./src/app/@uisftech/view/http/uisftech-view.http.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/@uisftech/common/service/http.service */ "./src/app/@uisftech/common/service/http.service.ts");
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






// import { BussStatus, CardType, CardStat, Flag, ZhStatusType, PayMode, DraftState, TenClass, BussType, SubBussType, GuaranteeMode, FlagSign, BaoHanClass, QianFaClass, EDuPinZhong, StatusType, HeTongZhuangTai } from '../../constant/custView.codeValue';









var CreditManagermentComponent = /** @class */ (function () {
    function CreditManagermentComponent(sanitizer, httpService, commfunc, routeInfo, router, creditCcmService, customeHttpService, decimalPipe, confirmationService, httpService1, pagesNum) {
        this.sanitizer = sanitizer;
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.routeInfo = routeInfo;
        this.router = router;
        this.creditCcmService = creditCcmService;
        this.customeHttpService = customeHttpService;
        this.decimalPipe = decimalPipe;
        this.confirmationService = confirmationService;
        this.httpService1 = httpService1;
        this.pagesNum = pagesNum;
        this.stopFlag = true;
        this.display1 = false;
        this.escape = querystring__WEBPACK_IMPORTED_MODULE_6__["escape"];
        //提示信息
        this.msgs = [];
        this.display = false;
        // 复选框
        this.selectedValues = [];
        this.pageNum = 1;
        this.pageSize = 10;
        this.clientFlag = '0';
        this.tranType = '0';
        this.loanBusinessItems = []; //贷款业务
        this.acceptanceBusinessItems = []; //承兑业务
        this.guaranteeBusinessItems = []; //保函业务
        this.creditBusinessItems = []; //信用证业务
        this.creditLineItems = []; //综合授信额度
        this.bulkPreCreditItems = []; //批量预授信额度
        this.selfServiceBusinessItems = []; //自助类业务
        this.djkItems = []; //贷记卡业务
        this.borrowerBusinessItems = []; //作为共同借款人
        this.highestAmtGuarInfoItems = []; //最高额担保查询
        this.loanGuarInfoItems = []; //贷款担保查询
        this.lgGuarInfoItems = []; //承兑担保查询
        this.acptGuarInfoItems = []; //保函担保查询
        this.cecardGuarInfoItems = []; //信用卡担保查询 
        this.draftState = []; //汇票状态s
        //选择数据
        this.chooseData = [];
        this.checkAll = false;
        // checkBox: any = [];
        this.dataPL = [];
        this.PLCheck = false;
        // PLbox: any;
        this.CDisCheckAll = false;
        this.dataCD = [];
        this.BHisCheckAll = false;
        this.dataBH = [];
        this.ZHisCheckAll = false; //综合授信选择
        this.dataZH = [];
        this.ZZisAll = false; //自助类业务
        this.dataZZ = [];
        this.DJKisCheckAll = false; //贷记卡业务
        this.dataDJK = [];
        this.ZGCheck = false; //最高担保额（修改到最高额合同）
        this.dataZG = [];
        this.zgehtInfo = []; //最高额合同
        this.tenTypeBean = new _bean_tenType_bean__WEBPACK_IMPORTED_MODULE_4__["TenTypeBean"](); //十级分类调整
        this.orgId = '';
        this.userId = '';
        //跳转外系统
        // createLoanBean:CreateLoanBean = new CreateLoanBean();
        this.draftStateOptions = []; //汇票状态
        this.tenClassOptions = []; //十级分类
        this.bussTypeOptions = []; //贷款业务类型
        this.subBussTypesOptions = []; //子业务类型
        this.guaranteeModeOptions = []; //主担保方式
        this.flagSignOptions = []; //逾期标志
        this.baoHanClassOptions = []; //保函类型
        this.qianFaClass = []; //签发类型
        this.eDuPinZhong = []; //额度品种
        this.statusTypeOptions = []; //状态
        this.heTongZhuangTaiOptions = []; //合同状态
        this.payModeOptions = []; //支付方式
        this.asolciationLoanInfo = []; //关联关系债务
        this.tabMesg = app_uisftech_common_constant_config__WEBPACK_IMPORTED_MODULE_8__["tableMessage"]; //表格中无数据时显示的内容
        this.zhStatusTypeOptions = []; //综合授信额度状态
        this.flagOptions = []; //冻结标志
        this.cardTypeOptions = []; //卡类别
        this.cardStatOptions = []; //卡状态
        this.selfDebtOwn = '0';
        this.guaranteeDebtOwn = '0';
        this.bussStatusOptions = []; //业务状态
        this.showFlag1 = false;
        this.showFlag2 = false;
        this.showFlag3 = true; //自身
        this.showFlag4 = true; //共借债务
        this.showFlag5 = true; //关联债务
        this.showFlag6 = true; //担保
        this.showFlag7 = false;
        this.showFlag8 = false; //批量预授信
        this.gjzwacceptanceBusinessItems = []; //共借债务  承兑业务
        this.guaranteeBusinessItemsGJZW = []; //共借债务  保函业务
        this.creditBusinessItemsGJZW = []; //共借债务  信用证
        this.acceptanceBusinessItemsGLZW = []; //关联债务承兑
        this.djkItemsGLZW = []; //关联债务贷记卡
        this.guaranteeBusinessItemsGLZW = []; //关联债务保函
        this.creditBusinessItemsGLZW = []; //关联债务信用证
        this.batchList = []; //批量预授信数据
        this.batchListPageSize = 10;
        this.batchListPageNum = 1;
        this.Display = false;
        this.title = '';
        this.addDisplay = false;
        this.vetoFirsts = []; //否决的一级原因
        this.personVeto = [];
        this.financeVeto = [];
        this.manageVeto = [];
        this.serveVeto = [];
        this.otherVeto = [];
        this.vetoOption = [];
        this.bzIsshow = false;
        this.voteDisplay = false;
        this.aaaa = false;
        this.dealPerShow = false;
        this.operate = '';
        this.preApprovalArr = [];
        this.approvalStatusList = [];
        this.imageShow = false;
        this.info_num = ''; //客户个数
        this.info_numVal = ''; //共同借款人
        this.isExamine = false; //是否是查看操作
        // 例外信息
        this.listDisplay = true;
        this.dataItem = ''; // 新增绿色贷款合同号
        this.dataUP = ''; //绿色贷款修改
        this.clickBtn = false; // （手工生成合同、撤销）防止重复点击
        if (!this.pagesNum.num) {
            this.num = -1;
        }
        else {
            this.num = this.pagesNum.num * 1 + 1;
        }
        this.codeVal();
        this.draftState = this.code['DraftState'];
        this.draftStateOptions = this.code['DraftState'];
        this.tenClassOptions = this.code['TenClass'];
        this.bussTypeOptions = this.code['BussType'];
        this.subBussTypesOptions = this.code['SubBussType'];
        this.guaranteeModeOptions = this.code['GuaranteeMode'];
        this.flagSignOptions = this.code['FlagSign'];
        this.baoHanClassOptions = this.code['BaoHanClass'];
        this.qianFaClass = this.code['QianFaClass'];
        this.eDuPinZhong = this.code['EDuPinZhong'];
        this.statusTypeOptions = this.code['StatusType'];
        this.heTongZhuangTaiOptions = this.code['HeTongZhuangTai'];
        this.payModeOptions = this.code['PayMode'];
        this.zhStatusTypeOptions = this.code['ZhStatusType'];
        this.flagOptions = this.code['Flag'];
        this.cardTypeOptions = this.code['CardType'];
        this.cardStatOptions = this.code['CardStat'];
        this.bussStatusOptions = this.code['BussStatus'];
        this.vetoFirsts = this.code['VETOFIRDTS']; //一级原因
        this.personVeto = this.code['personVeto']; //二级原因-个人原因
        this.financeVeto = this.code['financeVeto']; //财务因素
        this.manageVeto = this.code['manageVeto']; //经营因素
        this.serveVeto = this.code['serveVeto']; //服务因素
        this.otherVeto = this.code['otherVeto']; //其他原因
        this.approvalStatusList = this.code['batchCaseStatus'];
        //------------------------------------------上面是码值
        this.custNo = this.commfunc.getSessionData('custNo');
        this.user = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (this.user.orgId) {
            this.orgId = this.user.orgId;
        }
        if (this.user.userId) {
            this.userId = this.user.userId;
        }
        if (this.user.userName) {
            this.userName = this.user.userName;
        }
    }
    CreditManagermentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.approvalStatusList = [
        //   { label: '待发起', value: '000' },
        //   { label: '撤销', value: '990' },
        //   { label: '追回', value: '991' },
        //   { label: '打回任意节点提交', value: '992' },
        //   { label: '已通过', value: '993' },
        //   { label: '转授信否决', value: '994' },
        //   { label: '打回到拟稿人并结束', value: '995' },
        //   { label: '打回到拟稿人并继续', value: '996' },
        //   { label: '通过(通过)', value: '997' },
        //   { label: '否决(不同意) ', value: '998' },
        //   { label: '审批中', value: '999' },
        // ]
        // this.approvalStatusList = [
        //   { label: '未申请', value: '0' },
        //   { label: '转授信待办', value: '1' },
        //   { label: '预授信否决', value: '2' },
        //   { label: '已发起', value: '3' },
        //   { label: '已通过', value: '4' },
        //   { label: '转授信否决', value: '5' },
        //   { label: '失效', value: '6' },
        //   { label: '撤销', value: '7' },
        // ]
        var param = {
            custNo: this.custNo
        };
        this.shouxin = [
            { a: 1, b: '张三', c: 22, d: 18530038464, e: 100000, f: 20000, g: '2025-09-01', h: '无', i: '1' },
            { a: 1, b: '李四', c: 22, d: 13939839364, e: 500000, f: 300000, g: '2030-05-01', h: '有', i: '2' }
        ];
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            _this.custName = data.custName;
            _this.principalLinkmanOrg = data.principalLinkmanOrg;
            if (data.dataSourceId == 'BR00A') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN"];
            }
            else if (data.dataSourceId == 'BR00B') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN_C"];
            }
            else if (!data.dataSourceId || data.dataSourceId == '') {
                _this.HTTPIPDress = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_XIN"];
            }
        });
        this.queryLoanBusinessItems();
        this.queryAcceptanceBusinessItems();
        this.queryGuaranteeBusinessItems();
        this.queryCreditBusinessItems();
        this.queryCreditLineItems();
        this.queryBulkPreCreditItems();
        this.querySelfServiceBusiness();
        this.selectCecardGuarInfoDJK();
        this.getBatchList();
        this.selectHighestAmtGuarInfo();
        this.selectLoanGuarInfo();
        this.selectLgGuarInfo();
        this.selectAcptGuarInfo();
        this.selectCecardGuarInfo();
        this.queryBorrower();
        this.selectPartyRelationshipLoan();
        this.queryZgehtItems();
        this.glzw_baohan();
        this.glzw_cd();
        this.glzw_djk();
        this.glzw_xyz();
        this.gjzw_bh();
        this.gjzw_cd();
        this.gjzw_xyzyw();
        this.moneny_all(); //自身债务
        this.moneny_all_one(); //共同借款人债务
        this.moneny_all_GLZW(); //关联债务
        //自身债务
        this.selfDebt = [
            // { label: '自身债务', value: '0' },
            { label: '贷款业务', value: '1' },
            { label: '承兑业务', value: '2' },
            { label: '贷记卡业务', value: '3' },
            { label: '保函业务', value: '4' },
            { label: '信用证业务', value: '5' },
            { label: '最高额合同', value: '6' }
        ];
        //担保债务
        this.guaranteeDebt = [
            // { label: '担保债务', value: '0' },
            { label: '最高额担保', value: '1' },
            { label: '贷款担保', value: '2' },
            { label: '承兑担保', value: '3' },
            { label: '保函担保', value: '4' },
            { label: '信用卡担保', value: '5' }
        ];
    };
    CreditManagermentComponent.prototype.opendetail = function () {
        this.display = true;
    };
    CreditManagermentComponent.prototype.clickCheck = function (type) {
    };
    //判断是否有数据-自身债务，没有数据按钮则置灰
    CreditManagermentComponent.prototype.queryDate = function () {
        if (this.loanBusinessItems.length > 0 ||
            this.acceptanceBusinessItems.length > 0 ||
            this.djkItems.length > 0 ||
            this.guaranteeBusinessItems.length > 0 ||
            this.creditBusinessItems.length > 0 ||
            this.zgehtInfo.length > 0) {
            this.showFlag3 = false; //自身债务类
        }
    };
    //担保债务
    CreditManagermentComponent.prototype.ensureBtn = function () {
        if (this.highestAmtGuarInfoItems.length != 0 ||
            this.loanGuarInfoItems.length != 0 ||
            this.lgGuarInfoItems.length != 0 ||
            this.acptGuarInfoItems.length != 0 ||
            this.cecardGuarInfoItems.length != 0) {
            this.showFlag6 = false;
        }
    };
    //贷款业务全选按钮
    CreditManagermentComponent.prototype.checkAllClick = function () {
        this.chooseData = [];
        for (var i = 0; i < this.loanBusinessItems.length; i++) {
            if (this.checkAll == true) {
                this.loanBusinessItems[i].checkBox = true;
                this.chooseData.push(this.loanBusinessItems[i]);
            }
            else {
                this.chooseData = [];
                this.loanBusinessItems[i].checkBox = false;
            }
        }
    };
    //贷款业务单选按钮
    CreditManagermentComponent.prototype.checkBoxClick = function (i, data) {
        var _this = this;
        if (data.checkBox) {
            this.chooseData.push(data);
        }
        else {
            this.chooseData.forEach(function (item, i) {
                if (item == data) {
                    _this.chooseData.splice(i, 1);
                }
            });
        }
        if (this.chooseData.length == this.loanBusinessItems.length) {
            this.checkAll = true;
        }
        else {
            this.checkAll = false;
        }
    };
    //贷款业务查询
    CreditManagermentComponent.prototype.queryLoanBusinessItems = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientNo: this.custNo,
            // clientNo: '1300002021',
            clientFlag: this.clientFlag,
            tranType: '2',
        };
        this.httpService.BZ_0200300000102_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_1 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_1(item);
                }
                _this.loanBusinessItems = data.infoList;
                _this.queryDate();
                // if (this.loanBusinessItems.length==0) {
                //   this.showFlag3=true;//自身债务类-贷款业务
                // }
                _this.loanBusinessItemspageSize = data.pageSize;
                _this.loanBusinessItemspageNum = data.pageNum;
                _this.loanBusinessItemstotalNum = data.totalNum;
                _this.checkAll = false;
                _this.chooseData = [];
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    CreditManagermentComponent.prototype.paginateLoanBusinessItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.queryLoanBusinessItems();
    };
    //贷款详情
    CreditManagermentComponent.prototype.showDialog = function (data, param, temp) {
        debugger;
        if (param == 1) {
            this.showDetailTitle = '贷款详情';
            this.inValue = data;
        }
        else if (param == 2) {
            this.showDetailTitle = '承兑详情';
            if (temp && temp == 'zishen') {
                data['temp'] = 'zishen';
            }
            this.inValue = data;
        }
        else if (param == 3) {
            this.showDetailTitle = '保函详情';
            this.inValue = data;
        }
        else if (param == 4) {
            this.showDetailTitle = '信用证详情';
            this.inValue = data;
        }
        else if (param == 6) {
            this.showDetailTitle = '综合授信额度详情';
            this.inValue = data;
        }
        else if (param == 7) {
            this.showDetailTitle = '自助类业务详情';
            this.inValue = data;
        }
        else if (param == 8) {
            this.showDetailTitle = '批量预授信详情';
            this.inValue = data;
        }
        else if (param == 9) {
            this.showDetailTitle = '关联关系债务详情';
            data['show'] = 'glgx';
            this.inValue = data;
        }
        else if (param == 22) { //共借债务-承兑业务
            this.showDetailTitle = '承兑详情';
            data['clientFlag'] = '2';
            this.inValue = data;
        }
        else if (param == 23) { //关联债务—承兑业务
            this.showDetailTitle = '承兑详情';
            data['clientFlag'] = '3';
            this.inValue = data;
        }
        else if (param == 24) { //担保债务—承兑担保
            this.showDetailTitle = '承兑担保';
            data['guaranteeFlag'] = 1;
            data['clientFlag'] = '3';
            this.inValue = data;
        }
        else if (param == 91) {
            data['dataFlag'] = '01'; //自助类  贷款
            this.showDetailTitle = '详情';
            this.inValue = data;
        }
        else if (param == 92) {
            data['dataFlag'] = '02'; //承兑
            this.showDetailTitle = '详情';
            this.inValue = data;
        }
        else if (param == 93) {
            data['dataFlag'] = '03'; //保函
            this.showDetailTitle = '详情';
            this.inValue = data;
        }
        else if (param == 94) {
            data['dataFlag'] = '04'; //信用证
            this.showDetailTitle = '详情';
            this.inValue = data;
        }
        else if (param == 95) {
            data['dataFlag'] = '05'; //最高额合同
            this.showDetailTitle = '详情';
            this.inValue = data;
        }
        else if (param == 96) {
            //批量预授信详情
            this.showDetailTitle = '批量预授信详情';
            this.inValue = data;
        }
        this.showDialogNum = param;
        this.display1 = true;
        document.body.style.overflow = 'hidden';
    };
    //承兑业务全选
    CreditManagermentComponent.prototype.checkAllCD = function () {
        this.dataCD = [];
        for (var i = 0; i < this.acceptanceBusinessItems.length; i++) {
            if (this.CDisCheckAll == true) {
                this.acceptanceBusinessItems[i].CDisBox = true;
                this.dataCD.push(this.acceptanceBusinessItems[i]);
            }
            else {
                this.dataCD = [];
                this.acceptanceBusinessItems[i].CDisBox = false;
            }
        }
    };
    //承兑业务单选
    CreditManagermentComponent.prototype.checkBoxCD = function (i, item) {
        var _this = this;
        if (item.CDisBox) {
            this.dataCD.push(item);
        }
        else {
            this.dataCD.forEach(function (param, i) {
                if (param == item) {
                    _this.dataCD.splice(i, 1);
                }
            });
        }
        if (this.dataCD.length == this.acceptanceBusinessItems.length) {
            this.CDisCheckAll = true;
        }
        else {
            this.CDisCheckAll = false;
        }
    };
    //承兑业务查询
    CreditManagermentComponent.prototype.queryAcceptanceBusinessItems = function () {
        var _this = this;
        var param = {
            // pageNum: this.pageNum,
            // pageSize: this.pageSize,
            // clientNo: this.custNo,
            // // clientNo: '5300002151',
            // tranType: this.tranType,
            // billCategory: '1'
            clientNo: this.custNo,
            contractStatus: '0',
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientFlag: '0',
        };
        this.httpService.BZ_0300300004417_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_2 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item['appUserId'] }).subscribe(function (data) {
                        if (data.tellerName != null) {
                            item['appUserId'] = data.tellerName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_2(item);
                }
                _this.acceptanceBusinessItems = data.infoList;
                _this.queryDate();
                // if ( this.acceptanceBusinessItems.length==0) {
                //   this.showFlag3=true;
                // }
                _this.acceptanceBusinessItemspageSize = data.pageSize;
                _this.acceptanceBusinessItemspageNum = data.pageNum;
                _this.acceptanceBusinessItemstotalNum = data.totalNum;
                _this.CDisCheckAll = false;
                _this.dataCD = [];
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    CreditManagermentComponent.prototype.paginateAcceptanceBusinessItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.queryAcceptanceBusinessItems();
    };
    //共借债务  承兑
    CreditManagermentComponent.prototype.gjzw_cd = function () {
        var _this = this;
        var param = {
            // clientNo: '5300002151',
            clientNo: this.custNo,
            contractStatus: '0',
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientFlag: '2',
        };
        this.httpService.BZ_0300300004417_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_3 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item['appUserId'] }).subscribe(function (data) {
                        if (data.tellerName != null) {
                            item['appUserId'] = data.tellerName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_3(item);
                }
                _this.gjzwacceptanceBusinessItems = data.infoList;
                _this.gjzw_choose();
                _this.gjzwacceptanceBusinessItemspageSize = data.pageSize;
                _this.gjzwacceptanceBusinessItemspageNum = data.pageNum;
                _this.gjzwacceptanceBusinessItemstotalNum = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //共借债务  承兑翻页
    CreditManagermentComponent.prototype.paginateAcceptanceBusinessItemsGJZW = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.gjzw_cd();
    };
    //共借债务  判断有无数据
    CreditManagermentComponent.prototype.gjzw_choose = function () {
        if (this.borrowerBusinessItems.length > 0
            || this.guaranteeBusinessItemsGJZW.length > 0
            || this.gjzwacceptanceBusinessItems.length > 0
            || this.creditBusinessItemsGJZW.length > 0) {
            this.showFlag4 = false; //自身债务类
        }
    };
    //关联债务 承兑
    CreditManagermentComponent.prototype.glzw_cd = function () {
        var _this = this;
        var param = {
            // custNo: '5300002151',
            custNo: this.custNo,
            contractStatus: '0',
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientFlag: '3',
        };
        this.httpService.selectRelationshipAccept(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_4 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item['appUserId'] }).subscribe(function (data) {
                        if (data.tellerName != null) {
                            item['appUserId'] = data.tellerName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_4(item);
                }
                _this.acceptanceBusinessItemsGLZW = data.infoList;
                _this.glzw_choose();
                _this.acceptanceBusinessItemspageSizeGLZW = data.pageSize;
                _this.acceptanceBusinessItemspageNumGLZW = data.pageNum;
                _this.acceptanceBusinessItemstotalNumGLZW = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //关联债务 承兑翻页
    CreditManagermentComponent.prototype.paginateAcceptanceBusinessItemsGLZW = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.glzw_cd();
    };
    //关联债务  
    CreditManagermentComponent.prototype.glzw_choose = function () {
        if (this.asolciationLoanInfo.length > 0
            || this.acceptanceBusinessItemsGLZW.length > 0
            || this.djkItemsGLZW.length > 0
            || this.guaranteeBusinessItemsGLZW.length > 0
            || this.creditBusinessItemsGLZW.length > 0) {
            this.showFlag5 = false;
        }
    };
    //贷记卡业务全选按钮
    CreditManagermentComponent.prototype.DJKcheckAll = function () {
        this.dataDJK = [];
        for (var i = 0; i < this.djkItems.length; i++) {
            if (this.DJKisCheckAll == true) {
                this.djkItems[i].DJKisCheck = true;
                this.dataDJK.push(this.djkItems[i]);
            }
            else {
                this.dataDJK = [];
                this.djkItems[i].DJKisCheck = false;
            }
        }
    };
    //贷记卡业务单选按钮
    CreditManagermentComponent.prototype.DJKcheckbox = function (col, data) {
        var _this = this;
        if (data.DJKisCheck) {
            this.dataDJK.push(data);
        }
        else {
            this.dataDJK.forEach(function (item, i) {
                if (item == data) {
                    _this.dataDJK.splice(i, 1);
                }
            });
        }
        if (this.dataDJK.length == this.djkItems.length) {
            this.DJKisCheckAll = true;
        }
        else {
            this.DJKisCheckAll = false;
        }
    };
    //贷记卡业务-自身债务
    CreditManagermentComponent.prototype.selectCecardGuarInfoDJK = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize,
        };
        this.httpService.selectCecardGuarInfo2(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_5 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.agent }).subscribe(function (data) {
                        if (data.tellerName && data.tellerName != null) {
                            item.agentVal = item.agent;
                            item.agent = data.tellerName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: item.cardOwnerOrgId }).subscribe(function (data) {
                        if (data.orgName && data.orgName != null) {
                            item.cardOwnerOrgId = data.orgName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_5(item);
                }
                _this.djkItems = data.infoList;
                _this.creditCardDebt = data.moneyMap.acctBalTotal; //贷记卡透支余额
                _this.djkItemstotalNum = data.totalNum;
                _this.djkItemspageSize = data.pageSize;
                _this.djkItemspageNum = data.pageNum;
                _this.queryDate();
                // if ( this.djkItems.length==0) {
                //   this.showFlag3=true;
                // }
                _this.DJKisCheckAll = false;
                _this.dataDJK = [];
            }
        });
    };
    CreditManagermentComponent.prototype.paginateDjkItems = function (event) {
        this.pageSize = event.rows * 1;
        this.pageNum = event.page + 1;
        this.selectCecardGuarInfoDJK();
    };
    //关联债务  贷记卡
    CreditManagermentComponent.prototype.glzw_djk = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            clientFlag: '3',
            pageSize: this.pageSize,
            pageNum: this.pageNum
        };
        this.httpService.selectRelationshipCecardGuar(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_6 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.agent }).subscribe(function (data) {
                        if (data.tellerName && data.tellerName != null) {
                            item.agent = data.tellerName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: item.cardOwnerOrgId }).subscribe(function (data) {
                        if (data.orgName && data.orgName != null) {
                            item.cardOwnerOrgId = data.orgName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_6(item);
                }
                _this.djkItemsGLZW = data.infoList;
                _this.creditCardDebt_GLZW = data.moneyMap.acctBalTotal; //贷记卡透支余额
                _this.djkItemspageNumGLZW = data.pageNum;
                _this.djkItemspageSizeGLZW = data.pageSize;
                _this.djkItemstotalNumGLZW = data.totalNum;
                _this.glzw_choose();
            }
        });
    };
    //关联债务 贷记卡翻页
    CreditManagermentComponent.prototype.paginateDjkItemsGLZW = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.glzw_djk();
    };
    //保函业务全选
    CreditManagermentComponent.prototype.BHcheckAll = function () {
        this.dataBH = [];
        for (var i = 0; i < this.guaranteeBusinessItems.length; i++) {
            if (this.BHisCheckAll == true) {
                this.guaranteeBusinessItems[i].BHisBox = true;
                this.dataBH.push(this.guaranteeBusinessItems[i]);
            }
            else {
                this.dataBH = [];
                this.guaranteeBusinessItems[i].BHisBox = false;
            }
        }
    };
    //保函业务单选
    CreditManagermentComponent.prototype.BHcheckBox = function (item) {
        var _this = this;
        if (item.BHisBox) {
            this.dataBH.push(item);
        }
        else {
            this.dataBH.forEach(function (param, i) {
                if (param == item) {
                    _this.dataBH.splice(i, 1);
                }
            });
        }
        if (this.dataBH.length == this.guaranteeBusinessItems.length) {
            this.BHisCheckAll = true;
        }
        else {
            this.BHisCheckAll = false;
        }
    };
    //保函业务查询
    CreditManagermentComponent.prototype.queryGuaranteeBusinessItems = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientNo: this.custNo,
            // clientNo: '5008896740',
            tranType: '2',
        };
        this.httpService.BZ_0200300000401_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_7 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_7(item);
                }
                _this.guaranteeBusinessItems = data.infoList;
                _this.queryDate();
                // if (this.guaranteeBusinessItems.length) {
                //   this.showFlag3=true;
                // }
                _this.guaranteeBusinessItemspageSize = data.pageSize;
                _this.guaranteeBusinessItemspageNum = data.pageNum;
                _this.guaranteeBusinessItemstotalNum = data.totalNum;
                _this.BHisCheckAll = false;
                _this.dataBH = [];
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //自身债务  保函翻页
    CreditManagermentComponent.prototype.paginateGuaranteeBusinessItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.queryGuaranteeBusinessItems();
    };
    //共借债务 保函业务
    CreditManagermentComponent.prototype.gjzw_bh = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientNo: this.custNo,
            tranType: '2',
            clientFlag: '2',
        };
        this.httpService.BZ_0200300000401_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_8 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_8(item);
                }
                _this.guaranteeBusinessItemsGJZW = data.infoList;
                _this.gjzw_choose();
                _this.guaranteeBusinessItemspageSizeGJZW = data.pageSize;
                _this.guaranteeBusinessItemspageNumGJZW = data.pageNum;
                _this.guaranteeBusinessItemstotalNumGJZW = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //共借债务  保函翻页
    CreditManagermentComponent.prototype.paginateGuaranteeBusinessItemsGJZW = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.gjzw_bh();
    };
    //关联债务  保函
    CreditManagermentComponent.prototype.glzw_baohan = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            custNo: this.custNo,
            tranType: '2',
        };
        this.httpService.selectRelationshipLetterGuar(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_9 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_9(item);
                }
                _this.guaranteeBusinessItemsGLZW = data.infoList;
                _this.glzw_choose();
                _this.guaranteeBusinessItemspageSizeGLZW = data.pageSize;
                _this.guaranteeBusinessItemspageNumGLZW = data.pageNum;
                _this.guaranteeBusinessItemstotalNumGLZW = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //关联债务 保函翻页
    CreditManagermentComponent.prototype.paginateGuaranteeBusinessItemsGLZW = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.glzw_baohan();
    };
    //信用证业务
    CreditManagermentComponent.prototype.queryCreditBusinessItems = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientNo: this.custNo,
            // clientNo: '5000022459',
            tranType: '2',
        };
        this.httpService.BZ_0200300000501_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_10 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_10(item);
                }
                _this.creditBusinessItems = data.infoList;
                _this.queryDate();
                // if (this.creditBusinessItems.length==0) {
                //   this.showFlag3=true;
                // }
                _this.creditBusinessItemspageSize = data.pageSize;
                _this.creditBusinessItemspageNum = data.pageNum;
                _this.creditBusinessItemstotalNum = data.totalNum;
            }
        });
    };
    CreditManagermentComponent.prototype.paginateCreditBusinessItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.queryCreditBusinessItems();
    };
    //共借债务 信用证
    CreditManagermentComponent.prototype.gjzw_xyzyw = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientNo: this.custNo,
            // clientNo: '5000022459',
            tranType: '2',
            clientFlag: '2'
        };
        this.httpService.BZ_0200300000501_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_11 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_11(item);
                }
                _this.creditBusinessItemsGJZW = data.infoList;
                _this.gjzw_choose();
                _this.creditBusinessItemspageSizeGJZW = data.pageSize;
                _this.creditBusinessItemspageNumGJZW = data.pageNum;
                _this.creditBusinessItemstotalNumGJZW = data.totalNum;
            }
        });
    };
    //共借债务 信用证翻页
    CreditManagermentComponent.prototype.paginateCreditBusinessItemsGJZW = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.gjzw_xyzyw();
    };
    //关联债务  信用证
    CreditManagermentComponent.prototype.glzw_xyz = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            custNo: this.custNo,
            // clientNo: '5000022459',
            tranType: '3',
        };
        this.httpService.selectRelationshipCredit(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_12 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_12(item);
                }
                _this.creditBusinessItemsGLZW = data.infoList;
                _this.glzw_choose();
                _this.creditBusinessItemspageSizeGLZW = data.pageSize;
                _this.creditBusinessItemspageNumGLZW = data.pageNum;
                _this.creditBusinessItemstotalNumGLZW = data.totalNum;
            }
        });
    };
    //关联债务 信用证翻页
    CreditManagermentComponent.prototype.paginateCreditBusinessItemsGLZW = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.glzw_xyz();
    };
    //综合授信额度全选按钮
    CreditManagermentComponent.prototype.ZHCheckAll = function () {
        this.dataZH = [];
        for (var i = 0; i < this.creditLineItems.length; i++) {
            if (this.ZHisCheckAll == true) {
                this.creditLineItems[i].ZHisCheck = true;
                this.dataZH.push(this.creditLineItems[i]);
            }
            else {
                this.dataZH = [];
                this.creditLineItems[i].ZHisCheck = false;
            }
        }
    };
    //综合授信额度单选按钮
    CreditManagermentComponent.prototype.ZHCheckbox = function (col, data) {
        var _this = this;
        if (data.ZHisCheck) {
            this.dataZH.push(data);
        }
        else {
            this.dataZH.forEach(function (item, i) {
                if (item == data) {
                    _this.dataZH.splice(i, 1);
                }
            });
        }
        if (this.dataZH.length == this.creditLineItems.length) {
            this.ZHisCheckAll = true;
        }
        else {
            this.ZHisCheckAll = false;
        }
    };
    //综合授信额度
    CreditManagermentComponent.prototype.queryCreditLineItems = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientNo: this.custNo,
        };
        this.httpService.BZ_0200300000201_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_13 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_13(item);
                }
                _this.creditLineItems = data.infoList;
                // this.queryDate();
                if (_this.creditLineItems.length == 0) {
                    _this.showFlag1 = true; //综合授信额度-没有数据就显示灰色
                }
                _this.creditLineItemspageSize = data.pageSize;
                _this.creditLineItemspageNum = data.pageNum;
                _this.creditLineItemstotalNum = data.totalNum;
                _this.ZHisCheckAll = false;
                _this.dataZH = [];
            }
        });
    };
    CreditManagermentComponent.prototype.paginateCreditLineItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.queryCreditLineItems();
    };
    //自助类业务全选按钮
    CreditManagermentComponent.prototype.ZZcheckAll = function () {
        this.dataZZ = [];
        for (var i = 0; i < this.selfServiceBusinessItems.length; i++) {
            if (this.ZZisAll == true) {
                this.selfServiceBusinessItems[i].ZZisBox = true;
                this.dataZZ.push(this.selfServiceBusinessItems[i]);
            }
            else {
                this.dataZZ = [];
                this.selfServiceBusinessItems[i].ZZisBox = false;
            }
        }
    };
    //自助类业务单选按钮
    CreditManagermentComponent.prototype.ZZcheckBox = function (i, data) {
        var _this = this;
        if (data.ZZisBox) {
            this.dataZZ.push(data);
            this.dataItem = data.contractNo;
            this.dataUP = data;
        }
        else {
            this.dataZZ.forEach(function (item, i) {
                if (item == data) {
                    _this.dataZZ.splice(i, 1);
                }
            });
        }
        if (this.dataZZ.length == this.selfServiceBusinessItems.length) {
            this.ZZisAll = true;
        }
        else {
            this.ZZisAll = false;
        }
    };
    //自助类业务查询
    CreditManagermentComponent.prototype.querySelfServiceBusiness = function () {
        var _this = this;
        var param = {
            inputParams: {
                custNo: this.custNo,
            }
        };
        this.httpService.queryContractLoanAndPreAppproved(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var tabelList = [];
                tabelList = data.outputParams.resultList;
                if (tabelList && tabelList.length > 0) {
                    for (var _i = 0, tabelList_1 = tabelList; _i < tabelList_1.length; _i++) {
                        var item = tabelList_1[_i];
                        if (item.contractStatus == '01') {
                            item.lastLoanDate = '';
                        }
                        // this.httpService.queryTellerById({ tellerId: item.tellerNo }).subscribe(data => {
                        //   item.tellerNo = data.tellerName;
                        // });
                    }
                    _this.selfServiceBusinessItems = tabelList;
                    if (_this.selfServiceBusinessItems.length == 0) {
                        _this.showFlag2 = true; // 自助类
                    }
                }
                else {
                    _this.selfServiceBusinessItems = [];
                }
                _this.ZZisAll = false;
                _this.dataZZ = [];
                _this.clickBtn = false; // 被点击
            }
            else {
                _this.clickBtn = false; // 被点击
            }
        });
        // let param = {
        //   clientNo: this.custNo,
        //   pageSize: this.pageSize,
        //   pageNum: this.pageNum
        // }
        // this.httpService.BZ_0200300000205_LOAN(param).subscribe(data => {
        //   if (data.returnCode.code == 'success') {
        //     for (let item of data.infoList) {
        //       if (item.contractStatus == '01') {
        //         item.lastLoanDate = '';
        //       }
        //       this.httpService.queryTellerById({ tellerId: item.appUserId }).subscribe(data => {
        //         item.appUserId = data.tellerName;
        //       });
        //     }
        //     this.selfServiceBusinessItems = data.infoList;
        //     // this.queryDate();
        //     if (this.selfServiceBusinessItems.length == 0) {
        //       this.showFlag2 = true;//自助类
        //     }
        //     this.selfServiceBusinessItemspageSize = data.pageSize;
        //     this.selfServiceBusinessItemspageNum = data.pageNum;
        //     this.selfServiceBusinessItemstotalNum = data.totalNum;
        //     this.ZZisAll = false;
        //     this.dataZZ = [];
        //   }
        // })
    };
    CreditManagermentComponent.prototype.paginateSelfServiceBusiness = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.querySelfServiceBusiness();
    };
    //批量预授信额度全选按钮
    //全选按钮
    CreditManagermentComponent.prototype.PLCheckAll = function () {
        this.dataPL = [];
        for (var i = 0; i < this.bulkPreCreditItems.length; i++) {
            if (this.PLCheck == true) {
                this.bulkPreCreditItems[i].PLbox = true;
                this.dataPL.push(this.bulkPreCreditItems[i]);
            }
            else {
                this.dataPL = [];
                this.bulkPreCreditItems[i].PLbox = false;
            }
        }
    };
    //批量预授信额度单选按钮
    CreditManagermentComponent.prototype.PLCheckbox = function (i, data) {
        var _this = this;
        if (data.PLbox) {
            this.dataPL.push(data);
        }
        else {
            this.dataPL.forEach(function (item, i) {
                if (item == data) {
                    _this.dataPL.splice(i, 1);
                }
            });
        }
        if (this.dataPL.length == this.bulkPreCreditItems.length) {
            this.PLCheck = true;
        }
        else {
            this.PLCheck = false;
        }
    };
    // 第三方评价结果
    CreditManagermentComponent.prototype.toThreeView = function (col) {
        this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/custom-evaluate', { yushouxin: '1', groupId: col.groupId, custNo: col.custNo, doorId: null, custGroupView: 1, pageNum: 1, groupName: col.groupName }]);
        // this.router.navigate(['/pages/tzb/custom/custom-group/third-party-evaluation/appraiser-evaluate', { groupId: col.groupId, groupName: col.groupName }]);
        // this.router.navigate(['/pages/tzb/custom/custom-group/custom-group-view/group-evaluator', { groupId: col.groupId }])
    };
    //批量预授信额度查询
    CreditManagermentComponent.prototype.queryBulkPreCreditItems = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientNo: this.custNo,
            // clientNo: '5000022459',
            queryType: '2',
        };
        this.httpService.BZ_0200300002015_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_14 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.appUserId }).subscribe(function (data) {
                        item.appUserId = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_14(item);
                }
                _this.bulkPreCreditItems = data.infoList;
                // this.queryDate();
                if (_this.bulkPreCreditItems.length == 0) {
                    _this.showFlag7 = true; //批量预授信
                }
                _this.bulkPreCreditItemspageSize = data.pageSize;
                _this.bulkPreCreditItemspageNum = data.pageNum;
                _this.bulkPreCreditItemstotalNum = data.totalNum;
                _this.PLCheck = false;
                _this.dataPL = [];
            }
        });
    };
    CreditManagermentComponent.prototype.paginateBulkPreCreditItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.queryBulkPreCreditItems();
    };
    //最高额合同查询
    CreditManagermentComponent.prototype.queryZgehtItems = function () {
        var _this = this;
        var param = {
            clientNo: this.custNo
            // clientNo:'1000789055'
        };
        this.httpService.BZ_0200300002614_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_15 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.appUserId }).subscribe(function (data) {
                        item.appUserId = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_15(item);
                }
                _this.zgehtInfo = data.infoList;
                _this.queryDate();
                // if (this.zgehtInfo.length==0) {
                //   this.showFlag3=true;
                // }
                _this.ZGCheck = false;
                _this.dataZG = [];
            }
        });
    };
    //最高额合同全选
    CreditManagermentComponent.prototype.ZGCheckAll = function () {
        this.dataZG = [];
        for (var i = 0; i < this.zgehtInfo.length; i++) {
            if (this.ZGCheck == true) {
                this.zgehtInfo[i].ZGbox = true;
                this.dataZG.push(this.zgehtInfo[i]);
            }
            else {
                this.dataZG = [];
                this.zgehtInfo[i].ZGbox = false;
            }
        }
    };
    //最高额合同单选
    CreditManagermentComponent.prototype.ZGCheckbox = function (i, data) {
        var _this = this;
        if (data.ZGbox) {
            this.dataZG.push(data);
        }
        else {
            this.dataZG.forEach(function (item, i) {
                if (item == data) {
                    _this.dataZG.splice(i, 1);
                }
            });
        }
        if (this.dataZG.length == this.zgehtInfo.length) {
            this.ZGCheck = true;
        }
        else {
            this.ZGCheck = false;
        }
        //console.log(this.dataZG)
    };
    // //最高担保额全选
    // ZGCheckAll() {
    //   this.dataZG = [];
    //   for (let i = 0; i < this.highestAmtGuarInfoItems.length; i++) {
    //     if (this.ZGCheck == true) {
    //       this.highestAmtGuarInfoItems[i].ZGbox = true;
    //       this.dataZG.push(this.highestAmtGuarInfoItems[i]);
    //     }
    //     else {
    //       this.dataZG = [];
    //       this.highestAmtGuarInfoItems[i].ZGbox = false;
    //     }
    //   }
    // }
    // //最高担保额单选
    // ZGCheckbox(i, data) {
    //   if (data.ZGbox) {
    //     this.dataZG.push(data)
    //   } else {
    //     this.dataZG.forEach((item, i) => {
    //       if (item == data) {
    //         this.dataZG.splice(i, 1)
    //       }
    //     });
    //   }
    //   if (this.dataZG.length == this.highestAmtGuarInfoItems.length) {
    //     this.ZGCheck = true;
    //   } else {
    //     this.ZGCheck = false;
    //   }
    // }
    //最高担保查询
    CreditManagermentComponent.prototype.selectHighestAmtGuarInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.httpService.selectHighestAmtGuarInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_16 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.agent }).subscribe(function (data) {
                        if (data.tellerName != null) {
                            item.agent = data.tellerName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_16(item);
                }
                _this.highestAmtGuarInfoItems = data.infoList;
                _this.contrAmtTotal = data.moneyMap.contrAmtTotal;
                _this.contrUnuseAmtTotal = data.moneyMap.contrUnuseAmtTotal;
                _this.highestAmtGuarInfoItemsPageSize = data.pageSize;
                _this.highestAmtGuarInfoItemsPageNum = data.pageNum;
                _this.highestAmtGuarInfoItemstotalNum = data.totalNum;
                _this.ensureBtn();
                // this.queryDate();
                // this.ZGCheck = false;
                // this.dataZG = [];
            }
        });
    };
    //最高额担保
    CreditManagermentComponent.prototype.paginateHighestAmtGuarInfoItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectHighestAmtGuarInfo();
    };
    //贷款担保查询
    CreditManagermentComponent.prototype.selectLoanGuarInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.httpService.selectLoanGuarInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_17 = function (item) {
                    item.normIntRate = item.normIntRate * 10;
                    _this.httpService.queryTellerById({ tellerId: item.agent }).subscribe(function (data) {
                        if (data.tellerName != null) {
                            item.agent = data.tellerName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_17(item);
                }
                _this.loanGuarInfoItems = data.infoList;
                _this.loanAmtTotal = data.moneyMap.loanAmtTotal;
                _this.loanBalTotal = data.moneyMap.loanBalTotal;
                _this.ensureBtn();
                _this.loanGuarInfoItemspageSize = data.pageSize;
                _this.loanGuarInfoItemstotalNum = data.totalNum;
                _this.loanGuarInfoItemspageNum = data.pageNum;
            }
        });
    };
    CreditManagermentComponent.prototype.paginateLoanGuarInfoItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectLoanGuarInfo();
    };
    //承兑担保查询
    CreditManagermentComponent.prototype.selectLgGuarInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.httpService.selectLgGuarInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_18 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.agent }).subscribe(function (data) {
                        if (data.tellerName != null) {
                            item.agent = data.tellerName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_18(item);
                }
                _this.lgGuarInfoItems = data.infoList;
                _this.parTotal = data.moneyMap.parTotal;
                _this.gapAmountTotal = data.moneyMap.gapAmountTotal;
                _this.lgGuarInfoItemsPageSize = data.pageSize;
                _this.lgGuarInfoItemsPageNum = data.pageNum;
                _this.lgGuarInfoItemstotalNum = data.totalNum;
                _this.ensureBtn();
            }
        });
    };
    //承兑担保翻页
    CreditManagermentComponent.prototype.paginateLgGuarInfoItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectLgGuarInfo();
    };
    //保函担保查询
    CreditManagermentComponent.prototype.selectAcptGuarInfo = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.httpService.selectAcptGuarInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_19 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.agent }).subscribe(function (data) {
                        if (data.tellerName != null) {
                            item.agent = data.tellerName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_19(item);
                }
                _this.acptGuarInfoItems = data.infoList;
                _this.lgAmtTotal = data.moneyMap.lgAmtTotal;
                _this.lgBalTotal = data.moneyMap.lgBalTotal;
                _this.acptGuarInfoItemsPageSize = data.pageSize;
                _this.acptGuarInfoItemstotalNum = data.totalNum;
                _this.acptGuarInfoItemsPageNum = data.pageNum;
                _this.ensureBtn();
            }
        });
    };
    //保函担保翻页
    CreditManagermentComponent.prototype.paginateAcptGuarInfoItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectAcptGuarInfo();
    };
    //信用卡担保查询
    CreditManagermentComponent.prototype.selectCecardGuarInfo = function () {
        var _this = this;
        var param = {
            guarantor: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize
        };
        this.httpService.selectCecardGuarInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_20 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.agent }).subscribe(function (data) {
                        if (data.tellerName && data.tellerName != null) {
                            item.agent = data.tellerName;
                        }
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_20(item);
                }
                _this.cecardGuarInfoItems = data.infoList;
                _this.acctBalTotal = data.moneyMap.acctBalTotal;
                _this.ovdueAmtTotal = data.moneyMap.ovdueAmtTotal;
                _this.authCrdtLimitTotal = data.moneyMap.authCrdtLimitTotal;
                _this.ensureBtn();
                _this.cecardGuarInfoItemsPageSize = data.pageSize;
                _this.cecardGuarInfoItemstotalnum = data.totalNum;
                _this.cecardGuarInfoItemsPageNum = data.pageNum;
            }
        });
    };
    /*
     批量预授信
    */
    // 批量预授信查询this.batchCreditBean.operType = "2";
    CreditManagermentComponent.prototype.getBatchList = function () {
        var _this = this;
        this.batchListPageNum = this.batchListPageNum || 1,
            this.batchListPageSize = this.batchListPageSize || 10;
        var param = {
            custNo: this.custNo,
            pageNum: this.batchListPageNum,
            pageSize: this.batchListPageSize,
            // pageNum:1,
            // pageSize:10,
            operType: "1"
        };
        this.httpService.queryBatchPreCreditDetailList(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.batchList = data.resultList;
                _this.batchList.forEach(function (element) {
                    element.loanOfficerAdvises = _this.transMony(element.loanOfficerAdvises * 10000);
                    element.loanSystemAdvises = _this.transMony(element.loanSystemAdvises * 10000);
                });
                if (_this.batchList.length < 1) {
                    _this.showFlag8 = true;
                }
                else {
                    _this.showFlag8 = false;
                }
                _this.batchListPageTotalNum = data.total;
            }
        });
    };
    // 金额格式转换
    CreditManagermentComponent.prototype.transMony = function (param) {
        var result = "";
        if (param) {
            result = this.commfunc.transform(param) + '';
        }
        result = this.decimalPipe.transform(param, '1.2-2'); //申请金额
        return result;
    };
    // 批量预授信失效
    CreditManagermentComponent.prototype.toUpdate = function (item) {
        var _this = this;
        var params = {
            operType: '1',
            serialNo: item.serialNo,
            state: "6"
        };
        this.httpService.vetoBatchPreCreditDetailInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.getBatchList();
                // this.batchCreditBean.pageNum = 1;
                // this.batchCreditBean.pageSize = 10;
                // this.first = 0;
                // this.reset();
                // this.queryBatchCreditList();
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 批量预授信个人转授信
    CreditManagermentComponent.prototype.toTranslate = function (data) {
        var _this = this;
        var params = {
            batchId: data.batchId,
            serialNo: data.serialNo
        };
        this.httpService.batchPreCreditSubmissionLetter(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.getBatchList();
                _this.msgs = [{ severity: 'success', summary: '提示', detail: data.returnCode.message }];
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    CreditManagermentComponent.prototype.paginateBtachSizeChange = function (event) {
        this.batchListPageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.batchListPageNum = currentPage;
        this.getBatchList();
    };
    //信用卡担保翻页
    CreditManagermentComponent.prototype.paginateCecardGuarInfoItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectCecardGuarInfo();
    };
    //贷款十级分类新增
    CreditManagermentComponent.prototype.tenAdd = function () {
        var _this = this;
        var HTcode;
        this.chooseData.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_1 = new Date().getTime();
            var target = "custLinkForm" + timestamp_1;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&khm=" + _this.custNo + "&suid=" + _this.userId + "&urlParam=/plats/credit/jsp/fiveclass/SortPrepare.jsp?ZCLB=001|ZCLBM=|moduleCode=MD_92ABDA14ED0315EB2297C9515DA65B61|moduleTable=92ABDA14ED0315EB2297C9515DA65B61|moduleProc=4|ActionCode=anyclasses|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=MD_92ABDA14ED0315EB2297C9515DA65B61|main_moduleTable=92ABDA14ED0315EB2297C9515DA65B61|SYS_FIX_WHERE=92ABDA14ED0315EB2297C9515DA65B61:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_1, features, closeOnLoseFocus);
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
    //贷款十级分类调整
    CreditManagermentComponent.prototype.tenType = function () {
        var _this = this;
        var HTcode;
        this.chooseData.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_2 = new Date().getTime();
            var target = "custLinkForm" + timestamp_2;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_DKDJPD.HTBH='" + HTcode + "')&urlParam=/plats/FrontController?commandType=9906|moduleTable=92ABDA14ED0315EB2297C9515DA65B61|main_moduleTable=92ABDA14ED0315EB2297C9515DA65B61|main_moduleCode=MD_92ABDA14ED0315EB2297C9515DA65B61|moduleCode=MD_92ABDA14ED0315EB2297C9515DA65B61|moduleProc=4|main_moduleName=|moduleName=|SYS_FIX_WHERE=92ABDA14ED0315EB2297C9515DA65B61:(state=%27000%27 or (state=%27991%27 and spjd=%27001%27 ) or state=%27996%27)";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_2, features, closeOnLoseFocus);
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
    //授信调查列表查询
    CreditManagermentComponent.prototype.creditQueryList = function () {
        var _this = this;
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
        var param = {
            custNo: this.custNo
        };
        this.httpService.selectCustBriefInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.custATTR = data.custAttribute;
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: '调用服务失败' });
        });
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
                var url = app_uisftech_common_service_http_constant__WEBPACK_IMPORTED_MODULE_7__["TZB_HTTP_SX"] + "ifs/visiturl.do?token_id=" + tokens + "&custcode=" + _this.custNo + "&custAttr=" + _this.custATTR + "&tranFlag=credit&user_id=" + _this.userId + "&domain_name=ywsn&url=http://10.1.39.140:8011/searchPaymentTool&bankCode=BR00A";
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp, features, closeOnLoseFocus);
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
    //贷后检查调整
    CreditManagermentComponent.prototype.daihuotiaozheng = function () {
        var _this = this;
        var HTcode;
        this.chooseData.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_3 = new Date().getTime();
            var target = "custLinkForm" + timestamp_3;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_DHJC_SQ.HTBH='" + HTcode + "')&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=F3A2AEB52BE77FD1EC6B1B0314471E6D:((state='000' or (state='991' and spjd='001' ) or state='996'))|isProcModule=no|moduleProc=9901|moduleName=|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleName=|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_3, features, closeOnLoseFocus);
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
    //贷后检查新增
    CreditManagermentComponent.prototype.daihuo = function () {
        var _this = this;
        var HTcode;
        this.chooseData.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_4 = new Date().getTime();
            var target = "custLinkForm" + timestamp_4;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=1640A50B86F75B504FF885F4727C9754|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleProc=990|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_4, features, closeOnLoseFocus);
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
    //提前还款新增
    CreditManagermentComponent.prototype.tiqianhuankuan = function () {
        var _this = this;
        var itemstype;
        var temp;
        var HTcode;
        this.chooseData.forEach(function (item) {
            HTcode = item.contractNo;
            itemstype = item.bussCode;
            temp = item.subBussCode;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            if (itemstype == '010006' || temp == '43' || temp == '41' || temp == '01' || temp == '02') {
                var timestamp_5 = new Date().getTime();
                var target = "custLinkForm" + timestamp_5;
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
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&khm=" + _this.custNo + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=0086C354F4AA43EDAAFF5EFE9971B2BA|moduleTable=C3C6404E9587F8FB97C1E93E748F0056|moduleProc=504|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=0086C354F4AA43EDAAFF5EFE9971B2BA|main_moduleTable=C3C6404E9587F8FB97C1E93E748F0056";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_5, features, closeOnLoseFocus);
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
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '该业务不能进行提前还款操作!' });
            }
        }
    };
    //提前还款调整
    CreditManagermentComponent.prototype.TQhuaikuan = function () {
        var _this = this;
        var itemstype;
        var temp;
        var HTcode;
        this.chooseData.forEach(function (item) {
            HTcode = item.contractNo;
            itemstype = item.bussCode;
            temp = item.subBussCode;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            if (itemstype == '010006' || temp == '43' || temp == '41' || temp == '01' || temp == '02') {
                var timestamp_6 = new Date().getTime();
                var target = "custLinkForm" + timestamp_6;
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
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&domainName=domaintest&casUrl=casurltest&suid=" + _this.userId + "&where=(CRD_TQHKSQ.HTBH='" + HTcode + "')&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=C3C6404E9587F8FB97C1E93E748F0056:(state='000' or (state='991' and spjd='001' ) or state='996')|isProcModule=no|moduleName=|moduleTable=C3C6404E9587F8FB97C1E93E748F0056|moduleCode=0086C354F4AA43EDAAFF5EFE9971B2BA|moduleProc=504|main_moduleCode=0086C354F4AA43EDAAFF5EFE9971B2BA|main_moduleName=|main_moduleTable=C3C6404E9587F8FB97C1E93E748F0056";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_6, features, closeOnLoseFocus);
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
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '该业务不能进行提前还款操作!' });
            }
        }
    };
    //贷款风险资产新增
    CreditManagermentComponent.prototype.dangerMon = function () {
        var _this = this;
        var jieju;
        var yewuType;
        this.chooseData.forEach(function (item) {
            jieju = item.duebillNo;
            yewuType = item.bussCode;
        });
        if (jieju == '' || jieju == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_7 = new Date().getTime();
            var target = "custLinkForm" + timestamp_7;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&MorefieldValue=" + yewuType + "&param=" + jieju + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|SYS_FIX_WHERE=F9B2E807758C7365FE7EE21FEABF7005:(state='000' or (state='991' and spjd='001' ) or state='996')|moduleName=|main_moduleName=|moduleTable=F9B2E807758C7365FE7EE21FEABF7005|moduleProc=629|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleTable=F9B2E807758C7365FE7EE21FEABF7005|MorefieldName=YWPZ";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_7, features, closeOnLoseFocus);
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
    //风险调整
    CreditManagermentComponent.prototype.fengxian = function () {
        var _this = this;
        var jieju;
        this.chooseData.forEach(function (item) {
            jieju = item.duebillNo;
        });
        if (jieju == '' || jieju == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_8 = new Date().getTime();
            var target = "custLinkForm" + timestamp_8;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&domainName=domaintest&casUrl=casurltest&where=(CRD_FXZC.YWBH='" + jieju + "' )&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=F9B2E807758C7365FE7EE21FEABF7001:(state='000' or (state='991' and spjd='001' ) or state='996')|isProcModule=no|moduleProc=629|moduleName=|moduleTable=F9B2E807758C7365FE7EE21FEABF7001|moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleName=|main_moduleTable=F9B2E807758C7365FE7EE21FEABF7001";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_8, features, closeOnLoseFocus);
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
    //质押新增
    CreditManagermentComponent.prototype.zhiya = function () {
        var _this = this;
        var HTcode;
        this.dataCD.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_9 = new Date().getTime();
            var target = "custLinkForm" + timestamp_9;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=11AE189E51C6F0E7541385122EB30258|moduleTable=B4C02A7693E58B3A6A9803AD45F85E77|moduleProc=510|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=11AE189E51C6F0E7541385122EB30258|main_moduleTable=B4C02A7693E58B3A6A9803AD45F85E77";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_9, features, closeOnLoseFocus);
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
    //质押调整
    CreditManagermentComponent.prototype.zhiyaTiaoZheng = function () {
        var _this = this;
        var HTcode;
        this.dataCD.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_10 = new Date().getTime();
            var target = "custLinkForm" + timestamp_10;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&where=( CRD_CDHPZJZYSQ.HTBH='" + HTcode + "' )&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=|isProcModule=no|moduleProc=510|moduleName=|moduleTable=B4C02A7693E58B3A6A9803AD45F85E77|moduleCode=11AE189E51C6F0E7541385122EB30258|main_moduleCode=11AE189E51C6F0E7541385122EB30258|main_moduleName=|main_moduleTable=B4C02A7693E58B3A6A9803AD45F85E77";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_10, features, closeOnLoseFocus);
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
    //承兑十级分类新增
    CreditManagermentComponent.prototype.CDshijiAdd = function () {
        var _this = this;
        var HTcode;
        this.dataCD.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined || this.dataCD.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_11 = new Date().getTime();
            var target = "custLinkForm" + timestamp_11;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&khm=" + _this.custNo + "&suid=" + _this.userId + "&urlParam=/plats/credit/jsp/fiveclass/SortPrepare.jsp?ZCLB=004|ZCLBM=|moduleCode=MD_67C98AD479DC347540371619BDC9E669|moduleTable=67C98AD479DC347540371619BDC9E669|moduleProc=4|ActionCode=anyclasses|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=MD_67C98AD479DC347540371619BDC9E669|main_moduleTable=67C98AD479DC347540371619BDC9E669|SYS_FIX_WHERE=67C98AD479DC347540371619BDC9E669:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_11, features, closeOnLoseFocus);
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
    //承兑十级分类修改
    CreditManagermentComponent.prototype.CDshijiUpdate = function () {
        var _this = this;
        var HTcode;
        this.dataCD.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined || this.dataCD.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_12 = new Date().getTime();
            var target = "custLinkForm" + timestamp_12;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_CDDJPD.HTBH='" + HTcode + "')&urlParam=/plats/FrontController?commandType=9906|moduleTable=67C98AD479DC347540371619BDC9E669|main_moduleTable=67C98AD479DC347540371619BDC9E669|main_moduleCode=MD_67C98AD479DC347540371619BDC9E669|moduleCode=MD_67C98AD479DC347540371619BDC9E669|moduleProc=4|main_moduleName=|moduleName=|SYS_FIX_WHERE=67C98AD479DC347540371619BDC9E669:(state=%27000%27 or (state=%27991%27 and spjd=%27001%27 ) or state=%27996%27)";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_12, features, closeOnLoseFocus);
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
    //承兑风险资产新增
    CreditManagermentComponent.prototype.dangerAddCD = function () {
        var _this = this;
        var jieju;
        this.dataCD.forEach(function (item) {
            jieju = item.duebillNo;
        });
        if (jieju == '' || jieju == undefined || this.dataCD.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_13 = new Date().getTime();
            var target = "custLinkForm" + timestamp_13;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&MorefieldValue=030001&param=" + jieju + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|SYS_FIX_WHERE=F9B2E807758C7365FE7EE21FEABF7001:(state='000' or (state='991' and spjd='001' ) or state='996')|moduleName=|main_moduleName=|moduleTable=F9B2E807758C7365FE7EE21FEABF7006|moduleProc=629|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleTable=F9B2E807758C7365FE7EE21FEABF7006|MorefieldName=YWPZ";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_13, features, closeOnLoseFocus);
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
    //承兑风险修改
    CreditManagermentComponent.prototype.dangerUpdateCD = function () {
        var _this = this;
        var jieju;
        this.dataCD.forEach(function (item) {
            jieju = item.duebillNo;
        });
        if (jieju == '' || jieju == undefined || this.dataCD.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_14 = new Date().getTime();
            var target = "custLinkForm" + timestamp_14;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&where=(CRD_FXZC.YWBH='" + jieju + "' )&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=F9B2E807758C7365FE7EE21FEABF7001:(state='000' or (state='991' and spjd='001' ) or state='996')|isProcModule=no|moduleProc=629|moduleName=|moduleTable=F9B2E807758C7365FE7EE21FEABF7001|moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleName=|main_moduleTable=F9B2E807758C7365FE7EE21FEABF7001";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_14, features, closeOnLoseFocus);
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
    //承兑合同撤销新增
    CreditManagermentComponent.prototype.hetongAddCDchexiao = function () {
        var _this = this;
        var HTcode;
        var busstype;
        this.dataCD.forEach(function (item) {
            HTcode = item.contractNo;
            busstype = item.bussType;
        });
        if (HTcode == '' || HTcode == undefined || this.dataCD.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_15 = new Date().getTime();
            var target = "custLinkForm" + timestamp_15;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&ywpz=" + busstype + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=216331A88E06FB55F148181E24E830DA|moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|moduleProc=658|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=216331A88E06FB55F148181E24E830DA|main_moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|SYS_FIX_WHERE=609DDCB9954EB734CCB57B5BBFD93AEB:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_15, features, closeOnLoseFocus);
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
    //承兑合同撤销修改
    CreditManagermentComponent.prototype.hetongUpdateCDchexiao = function () {
        var _this = this;
        var HTcode;
        this.dataCD.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined || this.dataCD.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_16 = new Date().getTime();
            var target = "custLinkForm" + timestamp_16;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_HTCXSQ.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=216331A88E06FB55F148181E24E830DA|moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|moduleProc=658|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=216331A88E06FB55F148181E24E830DA|main_moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|SYS_FIX_WHERE=609DDCB9954EB734CCB57B5BBFD93AEB:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_16, features, closeOnLoseFocus);
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
    //承兑中止新增
    CreditManagermentComponent.prototype.hetongAddCDzhongzhi = function () {
        var _this = this;
        var HTcode;
        var busstype;
        this.dataCD.forEach(function (item) {
            HTcode = item.contractNo;
            busstype = item.bussType;
        });
        if (HTcode == '' || HTcode == undefined || this.dataCD.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_17 = new Date().getTime();
            var target = "custLinkForm" + timestamp_17;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&ywpz=" + busstype + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=935FE2B6E3D677E06DA6C612F58EF040|moduleTable=DBB9198CFC04C35BA9731AA1940883EA|moduleProc=659|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=935FE2B6E3D677E06DA6C612F58EF040|main_moduleTable=DBB9198CFC04C35BA9731AA1940883EA|SYS_FIX_WHERE=DBB9198CFC04C35BA9731AA1940883EA:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_17, features, closeOnLoseFocus);
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
    //承兑中止修改
    CreditManagermentComponent.prototype.hetongUpdateCDzhongzhi = function () {
        var _this = this;
        var HTcode;
        this.dataCD.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined || this.dataCD.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_18 = new Date().getTime();
            var target = "custLinkForm" + timestamp_18;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_HTZZSQ.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=935FE2B6E3D677E06DA6C612F58EF040|moduleTable=DBB9198CFC04C35BA9731AA1940883EA|moduleProc=|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=935FE2B6E3D677E06DA6C612F58EF040|main_moduleTable=DBB9198CFC04C35BA9731AA1940883EA";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_18, features, closeOnLoseFocus);
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
    //贷记卡十级分类新增
    CreditManagermentComponent.prototype.daijiAdd = function () {
        var _this = this;
        var daijiCard;
        this.dataDJK.forEach(function (item) {
            daijiCard = item.cardNum;
        });
        if (daijiCard == '' || daijiCard == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_19 = new Date().getTime();
            var target = "custLinkForm" + timestamp_19;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&param=" + daijiCard + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=614FE34FFEA8377CDCA3C4D8313F2224|moduleTable=FE7144D353F53F5A7C14E05346DA9095|moduleProc=522|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=614FE34FFEA8377CDCA3C4D8313F2224|main_moduleTable=FE7144D353F53F5A7C14E05346DA9095|ActionCode=add|ActionType=UPDATEVIEW|SYS_FIX_WHERE=FE7144D353F53F5A7C14E05346DA9095:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_19, features, closeOnLoseFocus);
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
    //贷记卡十级分类修改
    CreditManagermentComponent.prototype.daijikatenXG = function () {
        var _this = this;
        var daijiCard;
        this.dataDJK.forEach(function (item) {
            daijiCard = item.cardNum;
        });
        if (daijiCard == '' || daijiCard == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_20 = new Date().getTime();
            var target = "custLinkForm" + timestamp_20;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|moduleCode=614FE34FFEA8377CDCA3C4D8313F2224|moduleTable=FE7144D353F53F5A7C14E05346DA9095|moduleProc=522|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=614FE34FFEA8377CDCA3C4D8313F2224|main_moduleTable=FE7144D353F53F5A7C14E05346DA9095|ActionCode=|ActionType=|SYS_FIX_WHERE=FE7144D353F53F5A7C14E05346DA9095:(state=%27000%27 or (state=%27991%27 and spjd=%27001%27 ) or state=%27996%27)|where=( DJK_QFDJ.CRNO='" + daijiCard + "' )";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_20, features, closeOnLoseFocus);
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
    //贷记卡贷后检查新增
    CreditManagermentComponent.prototype.daihouAddDJK = function () {
        var _this = this;
        var daijiCard;
        this.dataDJK.forEach(function (item) {
            daijiCard = item.cardNum;
        });
        if (daijiCard == '' || daijiCard == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_21 = new Date().getTime();
            var target = "custLinkForm" + timestamp_21;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + daijiCard + "&message=&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=1640A50B86F75B504FF885F4727C9754|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleProc=990|moduleName=|=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D";
                    // let url = this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + this.userId + "&khm=" + this.custNo + "&ywpz=070001&param=" + daijiCard + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|moduleTable=7E726E9E22689441D53EC2A1EFB8B941|moduleProc=522|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|main_moduleTable=7E726E9E22689441D53EC2A1EFB8B941|ActionCode=add|ActionType=UPDATEVIEW|SYS_FIX_WHERE=7E726E9E22689441D53EC2A1EFB8B941:((state='000' or (state='991' and spjd='001' ) or state='996') and zflx='10' )";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_21, features, closeOnLoseFocus);
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
    //贷记卡贷后检查修改
    CreditManagermentComponent.prototype.daihouUpdateDJK = function () {
        var _this = this;
        var daijiCard;
        this.dataDJK.forEach(function (item) {
            daijiCard = item.cardNum;
        });
        if (daijiCard == '' || daijiCard == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_22 = new Date().getTime();
            var target = "custLinkForm" + timestamp_22;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&param=" + daijiCard + "&urlParam=/plats/FrontController?commandType=9906|moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|moduleTable=7E726E9E22689441D53EC2A1EFB8B941|moduleProc=522|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=D80CB404952AFDFA3DF2C1C7CE9C7A18|main_moduleTable=7E726E9E22689441D53EC2A1EFB8B941|ActionCode=|ActionType=|SYS_FIX_WHERE=7E726E9E22689441D53EC2A1EFB8B941:((state='000' or (state='991' and spjd='001' ) or state='996') and (zflx='10'))|where=( CRM_KHZFJL.ZFKH='" + _this.custNo + "'  and  CRM_KHZFJL.YWPZ='070001' )";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_22, features, closeOnLoseFocus);
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
    //贷记卡风险新增
    CreditManagermentComponent.prototype.dangerAddDJK = function () {
        var _this = this;
        var daijiCard;
        this.dataDJK.forEach(function (item) {
            daijiCard = item.cardNum;
        });
        if (daijiCard == '' || daijiCard == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_23 = new Date().getTime();
            var target = "custLinkForm" + timestamp_23;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&MorefieldValue=999999&param=" + daijiCard + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|SYS_FIX_WHERE=F9B2E807758C7365FE7EE21FEABF7001:(state='000' or (state='991' and spjd='001' ) or state='996')|moduleName=|main_moduleName=|moduleTable=F9B2E807758C7365FE7EE21FEABF7007|moduleProc=629|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleTable=F9B2E807758C7365FE7EE21FEABF7007|MorefieldName=YWPZ";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_23, features, closeOnLoseFocus);
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
    //贷记卡风险修改
    CreditManagermentComponent.prototype.dangerUpdateDJK = function () {
        var _this = this;
        var daijiCard;
        this.dataDJK.forEach(function (item) {
            daijiCard = item.cardNum;
        });
        if (daijiCard == '' || daijiCard == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_24 = new Date().getTime();
            var target = "custLinkForm" + timestamp_24;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&where=(CRD_FXZC.YWBH='" + daijiCard + "' )&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=F9B2E807758C7365FE7EE21FEABF7001:(state='000' or (state='991' and spjd='001' ) or state='996')|isProcModule=no|moduleProc=629|moduleName=|moduleTable=F9B2E807758C7365FE7EE21FEABF7001|moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleCode=27548A5263C91D89A2D6B2D8EF5061FB|main_moduleName=|main_moduleTable=F9B2E807758C7365FE7EE21FEABF7001";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_24, features, closeOnLoseFocus);
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
    //信用卡状态调整申请新增
    CreditManagermentComponent.prototype.xinyongkaAddDJK = function () {
        var daijiCard;
        //console.log(this.dataDJK)
        if (this.dataDJK.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择单条记录" }];
            return;
        }
        this.dataDJK.forEach(function (item) {
            daijiCard = item.cardNum;
        });
        //yaoshenrong-2019-05-31添加校验
        if (this.dataDJK[0].agentVal == '' || this.dataDJK[0].agentVal == undefined || this.dataDJK[0].agentVal != this.userId) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "登录人不是该卡协储员" }];
            return;
        }
        if (daijiCard == '' || daijiCard == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.Display = true;
            this.addDisplay = true;
            this.addInvalue = this.dataDJK;
            this.title = '卡状态调整';
        }
    };
    // query() {
    //   let HTcode;
    //   this.dataZZ.forEach(item => {
    //     HTcode = item.contractNo;
    //   });
    //   let param = {
    //     contractNo: HTcode
    //   }
    //   let params = this.httpService1.handleParams(param)
    //   let erro = '';
    //   $.ajax({
    //     url: TZB_HTTP_CUS + API.queryContractEnergySavingLoanApproved,
    //     type: 'POST',
    //     data: JSON.stringify(params),
    //     async: false,
    //     headers: {
    //       'x-ajax': '1',
    //       'Content-Type': 'application/json'
    //     },
    //     dataType: 'json',
    //     success: (data) => {
    //       if (data.returnCode.code == 'success') {
    //         this.greenLoanA = data.energySavingFlag;
    //         console.log(this.greenLoanA, 'this.lists')
    //       } else {
    //         this.msgs = [];
    //         this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
    //       }
    //     },
    //     error: (erro) => {
    //       this.msgs = [];
    //       this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
    //     }
    //   })
    // }
    //绿色贷款新增
    CreditManagermentComponent.prototype.greenloanAdd = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        var param = {
            contractNo: HTcode
        };
        this.httpService.queryContractEnergySavingLoanApproved(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.greenLoanA = data.energySavingFlag;
                if (_this.greenLoanA == '0') {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: "此业务类型不可进行绿色贷款调整!" }];
                }
                else {
                    var HTcode_1;
                    _this.dataZZ.forEach(function (item) {
                        HTcode_1 = item.contractNo;
                    });
                    if (HTcode_1 == '' || HTcode_1 == undefined || _this.dataZZ.length > 1) {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
                        return;
                    }
                    _this.Display2 = true;
                    _this.addDisplay = true;
                    _this.title = '绿色贷款';
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    //绿色贷款修改
    CreditManagermentComponent.prototype.greenloanUpdate = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        var param = {
            contractNo: HTcode
        };
        this.httpService.queryContractEnergySavingLoanApproved(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.greenLoanA = data.energySavingFlag;
                if (_this.greenLoanA == '0') {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: "此业务类型不可进行绿色贷款调整!" }];
                }
                else {
                    var HTcode_2;
                    _this.dataZZ.forEach(function (item) {
                        HTcode_2 = item.contractNo;
                    });
                    if (HTcode_2 == '' || HTcode_2 == undefined || _this.dataZZ.length > 1) {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
                        return;
                    }
                    _this.Display3 = true;
                    _this.addDisplay = true;
                    _this.title = '绿色贷款';
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 新增-关闭
    CreditManagermentComponent.prototype.addcardCall = function () {
        this.addDisplay = false;
        this.Display = false;
    };
    //注销新增
    CreditManagermentComponent.prototype.zhuxiao = function () {
        var _this = this;
        var HTcode;
        this.dataBH.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_25 = new Date().getTime();
            var target = "custLinkForm" + timestamp_25;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=E5A12C4CE95385A67CA69A4EDC897757|moduleTable=D5F4880127DD7A035BA3C9895F473FC4|moduleProc=511|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=E5A12C4CE95385A67CA69A4EDC897757|main_moduleTable=D5F4880127DD7A035BA3C9895F473FC4";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_25, features, closeOnLoseFocus);
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
    //注销调整
    CreditManagermentComponent.prototype.zhuxiaotiaozhneg = function () {
        var _this = this;
        var HTcode;
        this.dataBH.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_26 = new Date().getTime();
            var target = "custLinkForm" + timestamp_26;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&domainName=domaintest&casUrl=casurltest&where=(CRD_BHZXDJB.HTBH='" + HTcode + "' )&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=|isProcModule=no|moduleProc=511|moduleName=|moduleTable=D5F4880127DD7A035BA3C9895F473FC4|moduleCode=E5A12C4CE95385A67CA69A4EDC897757|main_moduleCode=E5A12C4CE95385A67CA69A4EDC897757|main_moduleName=|main_moduleTable=D5F4880127DD7A035BA3C9895F473FC4";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_26, features, closeOnLoseFocus);
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
    //保函补发新增
    CreditManagermentComponent.prototype.bufaxinzneg = function () {
        var _this = this;
        var HTcode;
        this.dataBH.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_27 = new Date().getTime();
            var target = "custLinkForm" + timestamp_27;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=B5D2E3961B2B82B2F8F17BE9E3F511A6|moduleTable=65477244AB519CA81E86ACC5BECC6EA3|moduleProc=600|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=B5D2E3961B2B82B2F8F17BE9E3F511A6|main_moduleTable=65477244AB519CA81E86ACC5BECC6EA3";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_27, features, closeOnLoseFocus);
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
    //保函补发调整
    CreditManagermentComponent.prototype.bufatiaozheng = function () {
        var _this = this;
        var HTcode;
        this.dataBH.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_28 = new Date().getTime();
            var target = "custLinkForm" + timestamp_28;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&domainName=domaintest&casUrl=casurltestt&where=(CRD_BHBFDJB.HTBH='" + HTcode + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=B5D2E3961B2B82B2F8F17BE9E3F511A6|moduleTable=65477244AB519CA81E86ACC5BECC6EA3|moduleProc=600|moduleName=|main_moduleName=|ActionCode=|ActionType=|isProcModule=no|main_moduleCode=B5D2E3961B2B82B2F8F17BE9E3F511A6|main_moduleTable=65477244AB519CA81E86ACC5BECC6EA3";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_28, features, closeOnLoseFocus);
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
    //保函十级分类新增
    CreditManagermentComponent.prototype.tenAddBH = function () {
        var _this = this;
        var HTcode;
        this.dataBH.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_29 = new Date().getTime();
            var target = "custLinkForm" + timestamp_29;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&khm=" + _this.custNo + "&suid=" + _this.userId + "&urlParam=/plats/credit/jsp/fiveclass/SortPrepare.jsp?ZCLB=005|ZCLBM=|moduleCode=MD_E7A8C3907DFD65777BDB6DFD65C2BB0B|moduleTable=E7A8C3907DFD65777BDB6DFD65C2BB0B|moduleProc=4|ActionCode=anyclasses|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=MD_E7A8C3907DFD65777BDB6DFD65C2BB0B|main_moduleTable=E7A8C3907DFD65777BDB6DFD65C2BB0B|SYS_FIX_WHERE=E7A8C3907DFD65777BDB6DFD65C2BB0B:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_29, features, closeOnLoseFocus);
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
    //保函十级分类修改
    CreditManagermentComponent.prototype.tenTypeBH = function () {
        var _this = this;
        var HTcode;
        this.dataBH.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_30 = new Date().getTime();
            var target = "custLinkForm" + timestamp_30;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_BHDJPD.HTBH='" + HTcode + "')&urlParam=/plats/FrontController?commandType=9906|moduleTable=E7A8C3907DFD65777BDB6DFD65C2BB0B|main_moduleTable=E7A8C3907DFD65777BDB6DFD65C2BB0B|main_moduleCode=MD_E7A8C3907DFD65777BDB6DFD65C2BB0B|moduleCode=MD_E7A8C3907DFD65777BDB6DFD65C2BB0B|moduleProc=4|main_moduleName=|moduleName=|SYS_FIX_WHERE=E7A8C3907DFD65777BDB6DFD65C2BB0B:(state=%27000%27 or (state=%27991%27 and spjd=%27001%27 ) or state=%27996%27)";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_30, features, closeOnLoseFocus);
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
    //变更额度新增
    CreditManagermentComponent.prototype.changeEdu = function () {
        var _this = this;
        var timestamp = new Date().getTime();
        var target = "custLinkForm" + timestamp;
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
                var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&khm=" + _this.custNo + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=87F6DD8114EE1DBE14FD7CFBEE1C3B5811|moduleTable=DA2F7A330D11BA685825980EFB70A7FB|moduleProc=|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=87F6DD8114EE1DBE14FD7CFBEE1C3B5811|main_moduleTable=DA2F7A330D11BA685825980EFB70A7FB";
                var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                var closeOnLoseFocus = 'closeOnLoseFocus';
                _this.commfunc.openPostWindow(url, "custWindow" + timestamp, features, closeOnLoseFocus);
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
    //变更额度调整
    CreditManagermentComponent.prototype.biangengedu = function () {
        var _this = this;
        if (this.dataZH.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_31 = new Date().getTime();
            var target = "custLinkForm" + timestamp_31;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_EDSQ.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=993602|CRD_EDSQ.EDSQLX=03|SYS_MATCHWHOLE=true|SYS_MATCHCASE=true|SYS_RELTYPE=and|moduleName=|moduleTable=DA2F7A330D11BA685825980EFB70A7FB|moduleCode=87F6DD8114EE1DBE14FD7CFBEE1C3B5811|SYS_FIX_WHERE=DA2F7A330D11BA685825980EFB70A7FB:state='997'|isProcModule=no|ActionType=UPDATEVIEW|ActionCode=add|main_moduleCode=87F6DD8114EE1DBE14FD7CFBEE1C3B5811|main_moduleTable=DA2F7A330D11BA685825980EFB70A7FB|main_moduleName=";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_31, features, closeOnLoseFocus);
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
    //废除额度  客户码
    CreditManagermentComponent.prototype.chancelEdu = function () {
        var _this = this;
        if (this.dataZH.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_32 = new Date().getTime();
            var target = "custLinkForm" + timestamp_32;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&domainName=domaintest&casUrl=casurltest&where=(CRD_EDKZ_FX.KHM='" + _this.custNo + "' )&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=329EC61A6488D6359764D1EF6B96DED9:zt='01'|isProcModule=no|ActionType=|ActionCode=ddddd11111111111|moduleProc=|moduleName=|moduleTable=329EC61A6488D6359764D1EF6B96DED9|moduleCode=A5097AE1878EA52A4E9F4B030D8E9C5C|main_moduleCode=A5097AE1878EA52A4E9F4B030D8E9C5C|main_moduleName=|main_moduleTable=329EC61A6488D6359764D1EF6B96DED9";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_32, features, closeOnLoseFocus);
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
    //冻结额度  客户码
    CreditManagermentComponent.prototype.coldEdu = function () {
        var _this = this;
        if (this.dataZH.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_33 = new Date().getTime();
            var target = "custLinkForm" + timestamp_33;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&domainName=domaintest&casUrl=casurltest&where=(CRD_EDKZ_FX.KHM='" + _this.custNo + "' )&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=329EC61A6488D6359764D1EF6B96DED9:zt='01'|isProcModule=no|ActionType=|ActionCode=ddddd11111111111|moduleProc=|moduleName=|moduleTable=329EC61A6488D6359764D1EF6B96DED9|moduleCode=A5097AE1878EA52A4E9F4B030D8E9C5C|main_moduleCode=A5097AE1878EA52A4E9F4B030D8E9C5C|main_moduleName=|main_moduleTable=329EC61A6488D6359764D1EF6B96DED9";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_33, features, closeOnLoseFocus);
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
    //解冻额度  客户码
    CreditManagermentComponent.prototype.jiedongEdu = function () {
        var _this = this;
        if (this.dataZH.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_34 = new Date().getTime();
            var target = "custLinkForm" + timestamp_34;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&domainName=domaintest&casUrl=casurltest&where=(CRD_EDKZ_FX.KHM='" + _this.custNo + "' )&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=329EC61A6488D6359764D1EF6B96DED9:zt='01'|isProcModule=no|ActionType=|ActionCode=ddddd11111111111|moduleProc=|moduleName=|moduleTable=329EC61A6488D6359764D1EF6B96DED9|moduleCode=A5097AE1878EA52A4E9F4B030D8E9C5C|main_moduleCode=A5097AE1878EA52A4E9F4B030D8E9C5C|main_moduleName=|main_moduleTable=329EC61A6488D6359764D1EF6B96DED9";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_34, features, closeOnLoseFocus);
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
    //自助类 合同状态撤销新增
    CreditManagermentComponent.prototype.hetongCheXiao = function () {
        var _this = this;
        var HTcode;
        var busstype;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
            busstype = item.bussCode;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_35 = new Date().getTime();
            var target = "custLinkForm" + timestamp_35;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&ywpz=" + busstype + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=216331A88E06FB55F148181E24E830DA|moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|moduleProc=658|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=216331A88E06FB55F148181E24E830DA|main_moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|SYS_FIX_WHERE=609DDCB9954EB734CCB57B5BBFD93AEB:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_35, features, closeOnLoseFocus);
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
    //自助类 合同状态撤销修改
    CreditManagermentComponent.prototype.hetongCheXiaotiaozheng = function () {
        var _this = this;
        if (this.dataZZ.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_36 = new Date().getTime();
            var target = "custLinkForm" + timestamp_36;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_HTCXSQ.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=216331A88E06FB55F148181E24E830DA|moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|moduleProc=658|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=216331A88E06FB55F148181E24E830DA|main_moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|SYS_FIX_WHERE=609DDCB9954EB734CCB57B5BBFD93AEB:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_36, features, closeOnLoseFocus);
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
    //自助类 合同状态中止新增
    CreditManagermentComponent.prototype.hetongZhongZhi = function () {
        var _this = this;
        var HTcode;
        var busstype;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
            busstype = item.bussCode;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_37 = new Date().getTime();
            var target = "custLinkForm" + timestamp_37;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&ywpz=" + busstype + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=935FE2B6E3D677E06DA6C612F58EF040|moduleTable=DBB9198CFC04C35BA9731AA1940883EA|moduleProc=659|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=935FE2B6E3D677E06DA6C612F58EF040|main_moduleTable=DBB9198CFC04C35BA9731AA1940883EA|SYS_FIX_WHERE=DBB9198CFC04C35BA9731AA1940883EA:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_37, features, closeOnLoseFocus);
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
    // 自助类合同状态中止修改
    CreditManagermentComponent.prototype.hetongZhongZhitiaozheng = function () {
        var _this = this;
        if (this.dataZZ.length == 0) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_38 = new Date().getTime();
            var target = "custLinkForm" + timestamp_38;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_HTZZSQ.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=935FE2B6E3D677E06DA6C612F58EF040|moduleTable=DBB9198CFC04C35BA9731AA1940883EA|moduleProc=|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=935FE2B6E3D677E06DA6C612F58EF040|main_moduleTable=DBB9198CFC04C35BA9731AA1940883EA";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_38, features, closeOnLoseFocus);
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
    //合同要素修改
    CreditManagermentComponent.prototype.HTmaintiaozheng = function () {
        var _this = this;
        this.tenTypeBean.userId = this.userId;
        this.tenTypeBean.sysCode = '122';
        this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.tenTypeBean.serverName = 'ywsn';
        this.tenTypeBean.validateType = '0';
        this.tenTypeBean.extraInfo = 'ywsn';
        this.tenTypeBean.encryptType = 'HS256';
        var HTcode;
        var typeOptions;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
            typeOptions = item.subBussCode;
        });
        if (HTcode == '' || HTcode == undefined || this.dataZZ.length != 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            //自助卡
            if (typeOptions == '村聚易贷·兴农卡' || typeOptions == '存贷合一卡' || typeOptions == '兴福卡') {
                var timestamp_39 = new Date().getTime();
                var target = "custLinkForm" + timestamp_39;
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_ZZKYSXG.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=3BCE157756FED645499A39ABFFE419F6|moduleTable=D080107CD1E79C5883F281161DAF7C42|moduleProc=647|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=3BCE157756FED645499A39ABFFE419F6|main_moduleTable=D080107CD1E79C5883F281161DAF7C42|SYS_FIX_WHERE=D080107CD1E79C5883F281161DAF7C42:(state='000' or (state='991' and spjd='001' ) or state='996')";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custWindow" + timestamp_39, features, closeOnLoseFocus);
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
            else if (typeOptions == '信用易贷') {
                var timestamp_40 = new Date().getTime();
                var target = "custLinkForm" + timestamp_40;
                //自助类贷款
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_XYYDYSXG.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=18659D5F1CCC29DCC9760AF2D2901EEF|moduleTable=A219F35C78B560BE3B3F963F3FE6222F|moduleProc=665|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=18659D5F1CCC29DCC9760AF2D2901EEF|main_moduleTable=A219F35C78B560BE3B3F963F3FE6222F|SYS_FIX_WHERE=A219F35C78B560BE3B3F963F3FE6222F:(state='000' or (state='991' and spjd='001' ) or state='996')";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custWindow" + timestamp_40, features, closeOnLoseFocus);
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
            else if (typeOptions == '薪金贷' || typeOptions == '薪易贷') {
                var timestamp_41 = new Date().getTime();
                var target = "custLinkForm" + timestamp_41;
                //消费贷款
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_XFXZZKYSXG.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=3BCE157756FED645499A39ABFFE419F6A|moduleTable=B5FBBC48F7EB2C757A99A12B9DBE9E72|moduleProc=652|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=3BCE157756FED645499A39ABFFE419F6A|main_moduleTable=B5FBBC48F7EB2C757A99A12B9DBE9E72|SYS_FIX_WHERE=B5FBBC48F7EB2C757A99A12B9DBE9E72:(state='000' or (state='991' and spjd='001' ) or state='996')";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custWindow" + timestamp_41, features, closeOnLoseFocus);
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
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '此业务类型不可进行合同要素修改!' });
            }
        }
    };
    //合同要素新增
    CreditManagermentComponent.prototype.hetongMain = function () {
        var _this = this;
        this.tenTypeBean.userId = this.userId;
        this.tenTypeBean.sysCode = '122';
        this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
        this.tenTypeBean.serverName = 'ywsn';
        this.tenTypeBean.validateType = '0';
        this.tenTypeBean.extraInfo = 'ywsn';
        this.tenTypeBean.encryptType = 'HS256';
        var HTcode;
        var typeOptions;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
            typeOptions = item.subBussCode;
        });
        if (HTcode == '' || HTcode == undefined || this.dataZZ.length != 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            //自助卡
            if (typeOptions == '村聚易贷·兴农卡' || typeOptions == '存贷合一卡' || typeOptions == '兴福卡') {
                var timestamp_42 = new Date().getTime();
                var target = "custLinkForm" + timestamp_42;
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=3BCE157756FED645499A39ABFFE419F6|moduleTable=D080107CD1E79C5883F281161DAF7C42|moduleProc=647|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=3BCE157756FED645499A39ABFFE419F6|main_moduleTable=D080107CD1E79C5883F281161DAF7C42";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custWindow" + timestamp_42, features, closeOnLoseFocus);
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
            else if (typeOptions == '信用易贷') {
                var timestamp_43 = new Date().getTime();
                var target = "custLinkForm" + timestamp_43;
                //自助类贷款
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=18659D5F1CCC29DCC9760AF2D2901EEF|moduleTable=A219F35C78B560BE3B3F963F3FE6222F|moduleProc=665|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=|main_moduleCode=18659D5F1CCC29DCC9760AF2D2901EEF|main_moduleTable=A219F35C78B560BE3B3F963F3FE6222F|SYS_FIX_WHERE=A219F35C78B560BE3B3F963F3FE6222F:(state='000' or (state='991' and spjd='001' ) or state='996')";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custWindow" + timestamp_43, features, closeOnLoseFocus);
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
            else if (typeOptions == '薪金贷' || typeOptions == '薪易贷') {
                var timestamp_44 = new Date().getTime();
                var target = "custLinkForm" + timestamp_44;
                //消费贷款
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=3BCE157756FED645499A39ABFFE419F6A|moduleTable=B5FBBC48F7EB2C757A99A12B9DBE9E72|moduleProc=652|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=|main_moduleCode=3BCE157756FED645499A39ABFFE419F6A|main_moduleTable=B5FBBC48F7EB2C757A99A12B9DBE9E72|SYS_FIX_WHERE=B5FBBC48F7EB2C757A99A12B9DBE9E72:(state='000' or (state='991' and spjd='001' ) or state='996')";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custWindow" + timestamp_44, features, closeOnLoseFocus);
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
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '此业务类型不可进行合同要素修改!' });
            }
        }
    };
    //年检修改
    CreditManagermentComponent.prototype.nianjian = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_45 = new Date().getTime();
            var target = "custLinkForm" + timestamp_45;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&where=(CRD_ZZLDKNJSQ.HTBH='" + HTcode + "')&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=|isProcModule=no|ActionType=|ActionCode=|moduleProc=340|moduleName=|moduleTable=A0638C07DE5FFCF1F3FB627B882F1872|moduleCode=AABFC257800182EE525A79C362C641C9|main_moduleCode=AABFC257800182EE525A79C362C641C9|main_moduleName=|main_moduleTable=A0638C07DE5FFCF1F3FB627B882F1872|SYS_FIX_WHERE=A0638C07DE5FFCF1F3FB627B882F1872:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_45, features, closeOnLoseFocus);
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
    //年检新增
    CreditManagermentComponent.prototype.nianjianAdd = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            var timestamp_46 = new Date().getTime();
            var target = "custLinkForm" + timestamp_46;
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
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|isProcModule=no|ActionType=UPDATEVIEW|ActionCode=add|moduleProc=340|moduleName=|moduleTable=A0638C07DE5FFCF1F3FB627B882F1872|moduleCode=AABFC257800182EE525A79C362C641C9|main_moduleCode=AABFC257800182EE525A79C362C641C9|main_moduleName=|main_moduleTable=A0638C07DE5FFCF1F3FB627B882F1872";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custWindow" + timestamp_46, features, closeOnLoseFocus);
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
    //合同冻结解冻新增
    CreditManagermentComponent.prototype.dongjiexinzeng = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_47 = new Date().getTime();
            var target = "custLinkForm" + timestamp_47;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=531EEF4944909DF08AAC6254552BF169|moduleTable=146A7F24EEDC82813A3B4069C1D61CA6|moduleProc=513|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=531EEF4944909DF08AAC6254552BF169|main_moduleTable=146A7F24EEDC82813A3B4069C1D61CA6|SYS_FIX_WHERE=146A7F24EEDC82813A3B4069C1D61CA6:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_47, features, closeOnLoseFocus);
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
    //合同冻结解冻修改
    CreditManagermentComponent.prototype.dongjiexiugai = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_48 = new Date().getTime();
            var target = "custLinkForm" + timestamp_48;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_ZZDKDJDJB.HTBH='" + HTcode + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=531EEF4944909DF08AAC6254552BF169|moduleTable=146A7F24EEDC82813A3B4069C1D61CA6|moduleProc=513|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=531EEF4944909DF08AAC6254552BF169|main_moduleTable=146A7F24EEDC82813A3B4069C1D61CA6|SYS_FIX_WHERE=146A7F24EEDC82813A3B4069C1D61CA6:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_48, features, closeOnLoseFocus);
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
    //自助类十级分类新增  贷款十级分类
    CreditManagermentComponent.prototype.tenAddZZ = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined || this.dataZZ.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_49 = new Date().getTime();
            var target = "custLinkForm" + timestamp_49;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&khm=" + _this.custNo + "&suid=" + _this.userId + "&urlParam=/plats/credit/jsp/fiveclass/SortPrepare.jsp?ZCLB=001|ZCLBM=|moduleCode=MD_92ABDA14ED0315EB2297C9515DA65B61|moduleTable=92ABDA14ED0315EB2297C9515DA65B61|moduleProc=4|ActionCode=anyclasses|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=MD_92ABDA14ED0315EB2297C9515DA65B61|main_moduleTable=92ABDA14ED0315EB2297C9515DA65B61|SYS_FIX_WHERE=92ABDA14ED0315EB2297C9515DA65B61:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_49, features, closeOnLoseFocus);
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
    //自助类十级分类修改
    CreditManagermentComponent.prototype.tenUpdateZZ = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined || this.dataZZ.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_50 = new Date().getTime();
            var target = "custLinkForm" + timestamp_50;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_DKDJPD.HTBH='" + HTcode + "')&urlParam=/plats/FrontController?commandType=9906|moduleTable=92ABDA14ED0315EB2297C9515DA65B61|main_moduleTable=92ABDA14ED0315EB2297C9515DA65B61|main_moduleCode=MD_92ABDA14ED0315EB2297C9515DA65B61|moduleCode=MD_92ABDA14ED0315EB2297C9515DA65B61|moduleProc=4|main_moduleName=|moduleName=|SYS_FIX_WHERE=92ABDA14ED0315EB2297C9515DA65B61:(state=%27000%27 or (state=%27991%27 and spjd=%27001%27 ) or state=%27996%27)";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_50, features, closeOnLoseFocus);
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
    //自助贷后检查新增
    CreditManagermentComponent.prototype.dahouAddZZ = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined || this.dataZZ.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_51 = new Date().getTime();
            var target = "custLinkForm" + timestamp_51;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=1640A50B86F75B504FF885F4727C9754|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleProc=990|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_51, features, closeOnLoseFocus);
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
    //自助贷后检查修改
    CreditManagermentComponent.prototype.daihouUpdateZZ = function () {
        var _this = this;
        var HTcode;
        this.dataZZ.forEach(function (item) {
            HTcode = item.contractNo;
        });
        if (HTcode == '' || HTcode == undefined || this.dataZZ.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_52 = new Date().getTime();
            var target = "custLinkForm" + timestamp_52;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_DHJC_SQ.HTBH='" + HTcode + "')&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=F3A2AEB52BE77FD1EC6B1B0314471E6D:((state='000' or (state='991' and spjd='001' ) or state='996'))|isProcModule=no|moduleProc=9901|moduleName=|moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D|moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleCode=1640A50B86F75B504FF885F4727C9754|main_moduleName=|main_moduleTable=F3A2AEB52BE77FD1EC6B1B0314471E6D";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_52, features, closeOnLoseFocus);
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
    //预授信额度新增
    CreditManagermentComponent.prototype.yushouxinEdu = function () {
        var _this = this;
        var arr;
        this.dataPL.forEach(function (item) {
            arr = item.custGroupNo;
        });
        if (arr == '' || arr == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择社区客户群号" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_53 = new Date().getTime();
            var target = "custLinkForm" + timestamp_53;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + arr + "&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=7BB17110843F877BAB120C9F61DF45DE|moduleTable=BA727AC5494376BC0914E9183862DD56|moduleProc=599|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=7BB17110843F877BAB120C9F61DF45DE|main_moduleTable=BA727AC5494376BC0914E9183862DD56";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_53, features, closeOnLoseFocus);
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
    //预授信额度调整
    CreditManagermentComponent.prototype.yushouxintiaozheng = function () {
        var _this = this;
        var arr;
        this.dataPL.forEach(function (item) {
            arr = item.custGroupNo;
        });
        if (arr == '' || arr == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择社区客户群号" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_54 = new Date().getTime();
            var target = "custLinkForm" + timestamp_54;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&where=(CRD_PLYSX.SQKHQH='" + arr + "')&suid=" + _this.userId + "&urlParam=/plats/FrontController?commandType=9906|SYS_FIX_WHERE=|isProcModule=no|ActionType=|ActionCode=|moduleProc=599|moduleName=|moduleTable=BA727AC5494376BC0914E9183862DD56|moduleCode=7BB17110843F877BAB120C9F61DF45DE|main_moduleCode=7BB17110843F877BAB120C9F61DF45DE|main_moduleName=|main_moduleTable=BA727AC5494376BC0914E9183862DD56";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_54, features, closeOnLoseFocus);
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
    //预授信额度否决
    CreditManagermentComponent.prototype.foujue = function () {
        var _this = this;
        var arr;
        this.dataPL.forEach(function (item) {
            arr = item.custGroupNo;
        });
        if (arr == '' || arr == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择社区客户群号" }];
            return;
        }
        else {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_55 = new Date().getTime();
            var target = "custLinkForm" + timestamp_55;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_PLYSX_DJB.SQKHQH='" + arr + "' and CRD_PLYSX_DJB.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=88B9F736DA9226DB0BE01D5BEESREWR5|moduleTable=78BC5FCF8A8A8A305743E92C4C7B4623|moduleProc=|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=88B9F736DA9226DB0BE01D5BEESREWR5|main_moduleTable=78BC5FCF8A8A8A305743E92C4C7B4623";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_55, features, closeOnLoseFocus);
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
    //最高额度担保(换到最高额合同处) 合同状态撤销新增
    CreditManagermentComponent.prototype.zgCheXiao = function () {
        var _this = this;
        var HTcode;
        var statusShow;
        var bussCode;
        this.dataZG.forEach(function (item) {
            HTcode = item.contractNo;
            statusShow = item.contractStatus;
            bussCode = item.bussCode;
        });
        //console.log(HTcode + '    ' + this.dataZG)
        if (HTcode == '' || HTcode == undefined) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
            return;
        }
        else {
            if (statusShow == '01') {
                this.tenTypeBean.userId = this.userId;
                this.tenTypeBean.sysCode = '122';
                this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
                this.tenTypeBean.serverName = 'ywsn';
                this.tenTypeBean.validateType = '0';
                this.tenTypeBean.extraInfo = 'ywsn';
                this.tenTypeBean.encryptType = 'HS256';
                var timestamp_56 = new Date().getTime();
                var target = "custLinkForm" + timestamp_56;
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&ywpz=" + bussCode + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=216331A88E06FB55F148181E24E830DA|moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|moduleProc=658|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=216331A88E06FB55F148181E24E830DA|main_moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|SYS_FIX_WHERE=609DDCB9954EB734CCB57B5BBFD93AEB:(state='000' or (state='991' and spjd='001' ) or state='996')";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_56, features, closeOnLoseFocus);
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
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '该合同状态不可进行撤销新增' });
            }
        }
    };
    //最高额度担保(换到最高额合同处)  合同中止新增
    CreditManagermentComponent.prototype.zgZhongZhi = function () {
        var _this = this;
        var HTcode;
        var statusShow;
        var bussCode;
        this.dataZG.forEach(function (item) {
            HTcode = item.contractNo;
            statusShow = item.contractStatus;
            bussCode = item.bussCode;
        });
        if (statusShow == '02') {
            if (HTcode == '' || HTcode == undefined) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择一条记录" }];
                return;
            }
            else {
                this.tenTypeBean.userId = this.userId;
                this.tenTypeBean.sysCode = '122';
                this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
                this.tenTypeBean.serverName = 'ywsn';
                this.tenTypeBean.validateType = '0';
                this.tenTypeBean.extraInfo = 'ywsn';
                this.tenTypeBean.encryptType = 'HS256';
                var timestamp_57 = new Date().getTime();
                var target = "custLinkForm" + timestamp_57;
                this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                    if (data.returnCode.code == 'success') {
                        var tokens = data.tokenCode;
                        var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&param=" + HTcode + "&suid=" + _this.userId + "&ywpz=" + bussCode + "&urlParam=/plats/FrontController?commandType=9901|moduleCode=935FE2B6E3D677E06DA6C612F58EF040|moduleTable=DBB9198CFC04C35BA9731AA1940883EA|moduleProc=659|moduleName=|main_moduleName=|ActionCode=add|ActionType=UPDATEVIEW|isProcModule=no|main_moduleCode=935FE2B6E3D677E06DA6C612F58EF040|main_moduleTable=DBB9198CFC04C35BA9731AA1940883EA|SYS_FIX_WHERE=DBB9198CFC04C35BA9731AA1940883EA:(state='000' or (state='991' and spjd='001' ) or state='996')";
                        var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                        var closeOnLoseFocus = 'closeOnLoseFocus';
                        _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_57, features, closeOnLoseFocus);
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
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '该合同状态不可进行中止新增' });
        }
    };
    //最高额度担保(换到最高额合同处)  合同撤销修改
    CreditManagermentComponent.prototype.zgCheXiaotiaozheng = function () {
        var _this = this;
        var HTcode;
        var statusShow;
        this.dataZG.forEach(function (item) {
            HTcode = item.contractNo;
            statusShow = item.contractStatus;
        });
        if (statusShow == '01') {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp_58 = new Date().getTime();
            var target = "custLinkForm" + timestamp_58;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_HTCXSQ.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=216331A88E06FB55F148181E24E830DA|moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|moduleProc=658|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=216331A88E06FB55F148181E24E830DA|main_moduleTable=609DDCB9954EB734CCB57B5BBFD93AEB|SYS_FIX_WHERE=609DDCB9954EB734CCB57B5BBFD93AEB:(state='000' or (state='991' and spjd='001' ) or state='996')";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_58, features, closeOnLoseFocus);
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
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '该合同状态不可进行撤销修改' });
        }
    };
    //最高额度担保(换到最高额合同处)  合同中止修改
    CreditManagermentComponent.prototype.zgZhongZhitiaozheng = function () {
        var _this = this;
        var HTcode;
        var statusShow;
        this.dataZG.forEach(function (item) {
            HTcode = item.contractNo;
            statusShow = item.contractStatus;
        });
        if (statusShow == '02') {
            this.tenTypeBean.userId = this.userId;
            this.tenTypeBean.sysCode = '122';
            this.tenTypeBean.casServerLoginUrl = 'http://10.1.39.140:8011/searchPaymentTool';
            this.tenTypeBean.serverName = 'ywsn';
            this.tenTypeBean.validateType = '0';
            this.tenTypeBean.extraInfo = 'ywsn';
            this.tenTypeBean.encryptType = 'HS256';
            var timestamp = new Date().getTime();
            var target = "custLinkForm" + timestamp;
            this.httpService.tokenApply(this.tenTypeBean).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    var tokens = data.tokenCode;
                    var url = _this.HTTPIPDress + "plats/FrontController?token=" + tokens + "&suid=" + _this.userId + "&where=(CRD_HTZZSQ.KHM='" + _this.custNo + "')&urlParam=/plats/FrontController?commandType=9906|moduleCode=935FE2B6E3D677E06DA6C612F58EF040|moduleTable=DBB9198CFC04C35BA9731AA1940883EA|moduleProc=|moduleName=|main_moduleName=|isProcModule=no|main_moduleCode=935FE2B6E3D677E06DA6C612F58EF040|main_moduleTable=DBB9198CFC04C35BA9731AA1940883EA";
                    var features = 'top=80,left=50,width=1180,height=768,toolbar=no,location=no,directories=0,status=1,menubar=no,scrollbars=yes,resizable=yes';
                    var closeOnLoseFocus = 'closeOnLoseFocus';
                    var timestamp_59 = new Date().getTime();
                    _this.commfunc.openPostWindow(url, "custLinkForm" + timestamp_59, features, closeOnLoseFocus);
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
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: '该合同状态不可进行中止修改' });
        }
    };
    CreditManagermentComponent.prototype.toZtzw = function () {
        if (document.getElementById('Ztzw') != null) {
            var s = document.getElementById('Ztzw').offsetTop;
            document.getElementById('Ztzw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toZhsxed = function () {
        if (document.getElementById('Zhsxed') != null) {
            var s = document.getElementById('Zhsxed').offsetTop;
            document.getElementById('Zhsxed').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toZzlyw = function () {
        if (document.getElementById('Zzlyw') != null) {
            var s = document.getElementById('Zzlyw').offsetTop;
            document.getElementById('Zzlyw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toZwgtjkr = function () {
        if (document.getElementById('Zwgtjkr') != null) {
            var s = document.getElementById('Zwgtjkr').offsetTop;
            document.getElementById('Zwgtjkr').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //批量预授信
    CreditManagermentComponent.prototype.toPlysxed = function () {
        console.log(1);
        if (document.getElementById('Plysxed') != null) {
            console.log(2);
            var s = document.getElementById('Plysxed').offsetTop;
            document.getElementById('Plysxed').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toWhdb = function () {
        if (document.getElementById('Whdb') != null) {
            var s = document.getElementById('Whdb').offsetTop;
            document.getElementById('Whdb').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toZhsxfxbg = function () {
        if (document.getElementById('Zhsxfxbg') != null) {
            var s = document.getElementById('Zhsxfxbg').offsetTop;
            document.getElementById('Zhsxfxbg').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toZszw = function () {
        if (document.getElementById('zszw') != null) {
            var s = document.getElementById('zszw').offsetTop;
            document.getElementById('zszw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toGlgxzw = function () {
        if (document.getElementById('glgxzw') != null) {
            var s = document.getElementById('glgxzw').offsetTop;
            document.getElementById('glgxzw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toDKYW = function () {
        if (document.getElementById('dkyw') != null) {
            var s = document.getElementById('dkyw').offsetTop;
            document.getElementById('dkyw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toCDYW = function () {
        if (document.getElementById('cdyw') != null) {
            var s = document.getElementById('cdyw').offsetTop;
            document.getElementById('cdyw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toDJKYW = function () {
        if (document.getElementById('djkyw') != null) {
            var s = document.getElementById('djkyw').offsetTop;
            document.getElementById('djkyw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toBHYW = function () {
        if (document.getElementById('bhyw') != null) {
            var s = document.getElementById('bhyw').offsetTop;
            document.getElementById('bhyw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toXYZYW = function () {
        if (document.getElementById('xyzyw') != null) {
            var s = document.getElementById('xyzyw').offsetTop;
            document.getElementById('xyzyw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toZGEHT = function () {
        if (document.getElementById('zgeht') != null) {
            var s = document.getElementById('zgeht').offsetTop;
            document.getElementById('zgeht').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toZgdbe = function () {
        if (document.getElementById('zgdbe') != null) {
            var s = document.getElementById('zgdbe').offsetTop;
            document.getElementById('zgdbe').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toDkdb = function () {
        if (document.getElementById('dkdb') != null) {
            var s = document.getElementById('dkdb').offsetTop;
            document.getElementById('dkdb').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toCddb = function () {
        if (document.getElementById('cddb') != null) {
            var s = document.getElementById('cddb').offsetTop;
            document.getElementById('cddb').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    CreditManagermentComponent.prototype.toBhdb = function () {
        if (document.getElementById('bhdb') != null) {
            var s = document.getElementById('bhdb').offsetTop;
            document.getElementById('bhdb').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //共借债务  保函业务
    CreditManagermentComponent.prototype.toGJZW_BH = function () {
        if (document.getElementById('gjzw_bhyw') != null) {
            var s = document.getElementById('gjzw_bhyw').offsetTop;
            document.getElementById('gjzw_bhyw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //共借债务  信用证业务
    CreditManagermentComponent.prototype.toGJZW_XYK = function () {
        if (document.getElementById('gjzw_xyzyw') != null) {
            var s = document.getElementById('gjzw_xyzyw').offsetTop;
            document.getElementById('gjzw_xyzyw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //共借债务  贷款
    CreditManagermentComponent.prototype.toGJZW_DK = function () {
        if (document.getElementById('gjzw_dk') != null) {
            var s = document.getElementById('gjzw_dk').offsetTop;
            document.getElementById('gjzw_dk').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //共借债务 承兑
    CreditManagermentComponent.prototype.toGJZW_CD = function () {
        if (document.getElementById('gjzw_cdyw') != null) {
            var s = document.getElementById('gjzw_cdyw').offsetTop;
            document.getElementById('gjzw_cdyw').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //关联债务  贷记卡
    CreditManagermentComponent.prototype.toGLZW_DJK = function () {
        if (document.getElementById('glzw_djk') != null) {
            var s = document.getElementById('glzw_djk').offsetTop;
            document.getElementById('glzw_djk').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //关联债务  保函
    CreditManagermentComponent.prototype.toGLZW_BH = function () {
        if (document.getElementById('glzw_bh') != null) {
            var s = document.getElementById('glzw_bh').offsetTop;
            document.getElementById('glzw_bh').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //关联债务  信用证
    CreditManagermentComponent.prototype.toGLZW_XYZ = function () {
        if (document.getElementById('glzw_xyz') != null) {
            var s = document.getElementById('glzw_xyz').offsetTop;
            document.getElementById('glzw_xyz').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //关联债务 贷款
    CreditManagermentComponent.prototype.toGLZW_DK = function () {
        if (document.getElementById('glzw_dk') != null) {
            var s = document.getElementById('glzw_dk').offsetTop;
            document.getElementById('glzw_dk').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //关联债务 承兑
    CreditManagermentComponent.prototype.toGLZW_CD = function () {
        if (document.getElementById('glzw_cd') != null) {
            var s = document.getElementById('glzw_cd').offsetTop;
            document.getElementById('glzw_cd').scrollIntoView();
            window.scrollTo(100, s - 50);
        }
    };
    //作为共同借款人 共借债务
    CreditManagermentComponent.prototype.queryBorrower = function () {
        var _this = this;
        var param = {
            pageNum: this.pageNum,
            pageSize: this.pageSize,
            clientNo: this.custNo,
            // clientNo: '5100006072',
            clientFlag: '2',
            tranType: '0',
        };
        this.httpService.BZ_0200300000102_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_21 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_21(item);
                }
                _this.borrowerBusinessItems = data.infoList;
                _this.gjzw_choose();
                // if (this.borrowerBusinessItems.length == 0) {
                //   this.showFlag4 = true;//共借债务
                // }
                _this.borrowerBusinessItemspageSize = data.pageSize;
                _this.borrowerBusinessItemspageNum = data.pageNum;
                _this.borrowerBusinessItemstotalNum = data.totalNum;
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //共借债务  翻页
    CreditManagermentComponent.prototype.paginateBorrowerBusinessItems = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.queryBorrower();
    };
    CreditManagermentComponent.prototype.toXykdb = function () {
        document.getElementById('xykdb').scrollIntoView();
    };
    CreditManagermentComponent.prototype.addCall = function () {
        this.display1 = false;
        document.body.style.overflow = 'auto';
    };
    //关联关系债务
    CreditManagermentComponent.prototype.selectPartyRelationshipLoan = function () {
        var _this = this;
        var param = {
            custNo: this.custNo,
            pageNum: this.pageNum,
            pageSize: this.pageSize,
        };
        this.httpService.selectPartyRelationshipLoan(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                var _loop_22 = function (item) {
                    _this.httpService.queryTellerById({ tellerId: item.investigatorName }).subscribe(function (data) {
                        item.investigatorName = data.tellerName;
                    });
                };
                for (var _i = 0, _a = data.infoList; _i < _a.length; _i++) {
                    var item = _a[_i];
                    _loop_22(item);
                }
                _this.asolciationLoanInfo = data.infoList;
                _this.glzw_choose();
                // if (this.asolciationLoanInfo.length == 0) {
                //   this.showFlag5 = true;//关联债务
                // }
                _this.asolciationLoanInfopageNum = data.pageNum;
                _this.asolciationLoanInfopageSize = data.pageSize;
                _this.asolciationLoanInfototalNum = data.totalNum;
            }
        });
    };
    CreditManagermentComponent.prototype.paginateAsolciationLoanInfo = function (event) {
        this.pageSize = event.rows * 1;
        var currentPage = event.page + 1;
        this.pageNum = currentPage;
        this.selectPartyRelationshipLoan();
    };
    CreditManagermentComponent.prototype.totarget1 = function (data) {
        //console.log(data);
        // if(data=='0'){
        //   this.toZszw();
        // }else
        if (data == '0') {
            this.toDKYW();
        }
        else if (data == '1') {
            this.toCDYW();
        }
        else if (data == '2') {
            this.toDJKYW();
        }
        else if (data == '3') {
            this.toBHYW();
        }
        else if (data == '4') {
            this.toXYZYW();
        }
        else if (data == '5') {
            this.toZGEHT();
        }
    };
    CreditManagermentComponent.prototype.totarget2 = function (data) {
        // if(data=='0'){
        //   this.toWhdb();
        // }else 
        if (data == '0') {
            this.toZgdbe();
        }
        else if (data == '1') {
            this.toDkdb();
        }
        else if (data == '2') {
            this.toCddb();
        }
        else if (data == '3') {
            this.toBhdb();
        }
        else if (data == '4') {
            this.toXykdb();
        }
    };
    //共借债务
    CreditManagermentComponent.prototype.totargetGJZW = function (data) {
        if (data == '1') {
            this.toGJZW_BH();
        }
        else if (data == '2') {
            this.toGJZW_XYK();
        }
        else if (data == '3') {
            this.toGJZW_DK();
        }
        else if (data == '4') {
            this.toGJZW_CD();
        }
    };
    //关联债务
    CreditManagermentComponent.prototype.totargetGLZW = function (data) {
        if (data == '1') {
            this.toGJZW_DK();
        }
        else if (data == '2') {
            this.toGLZW_DJK();
        }
        else if (data == '3') {
            this.toGLZW_BH();
        }
        else if (data == '4') {
            this.toGLZW_XYZ();
        }
        else if (data == '5') {
            this.toGLZW_CD();
        }
    };
    //权限
    CreditManagermentComponent.prototype.judgeField = function (fId) {
        var ret = this.commfunc.permissionFiledCheck(fId);
        return ret;
        // return true
    };
    //码值
    CreditManagermentComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    //负债统计 自身债务
    CreditManagermentComponent.prototype.moneny_all = function () {
        var _this = this;
        var param = {
            clientNo: this.custNo,
            clientFlag: '0',
        };
        this.httpService.BZ_0200300000101_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.loanBalance = data.cnyLoanBal; //贷款余额
                _this.acceptBalance = data.acceptBalance; //承兑票面余额
                _this.acceBalance = data.acceBalance; //承兑敞口余额
                _this.exposureBalance = data.exposureBalance; //保函敞口金额
                // this.creditCardDebt = data.creditCardDebt;//贷记卡透支余额
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //共同借款人
    CreditManagermentComponent.prototype.moneny_all_one = function () {
        var _this = this;
        var param = {
            clientNo: this.custNo,
            clientFlag: '1',
        };
        this.httpService.BZ_0200300000101_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.loanBalance_one = data.cnyLoanBal; //贷款余额
                _this.acceptBalance_one = data.acceptBalance; //承兑票面余额
                _this.acceBalance_one = data.acceBalance; //承兑敞口金额
                // this.creditCardDebt_one = data.creditCardDebt;//贷记卡透支余额
                _this.exposureBalance_one = data.exposureBalance; //保函敞口金额
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    //关联债务
    CreditManagermentComponent.prototype.moneny_all_GLZW = function () {
        var _this = this;
        var param = {
            clientNo: this.custNo,
            clientFlag: '4',
        };
        this.httpService.BZ_0200300000101_LOAN(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                _this.loanBalance_GLZW = data.cnyLoanBal; //贷款余额
                _this.acceptBalance_GLZW = data.acceptBalance; //承兑票面余额
                _this.acceBalance_GLZW = data.acceBalance; //承兑敞口金额
                // this.creditCardDebt_GLZW = data.creditCardDebt;//贷记卡透支余额
                _this.exposureBalance_GLZW = data.exposureBalance; //保函敞口金额
            }
            else {
                data.returnCode.message ? data.returnCode.message : '调用服务失败';
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        });
    };
    // 1、卡要素调整-选择信用卡
    CreditManagermentComponent.prototype.creditUpdate = function () {
        var _this = this;
        if (this.dataDJK.length > 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "请选择单条记录" }];
            return;
        }
        //yaoshenrong-2019-05-31添加校验
        if (this.dataDJK[0].agentVal == '' || this.dataDJK[0].agentVal == undefined || this.dataDJK[0].agentVal != this.userId) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: "登录人不是该卡协储员" }];
            return;
        }
        this.creditCcmService.queryCreditDueDate({ creditCardNo: this.dataDJK[0].cardNum }).subscribe(function (res) {
            if (res.returnCode.code == 'success') {
                _this.queryCredit(res.timeLimit);
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: res.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // // 2、卡要素调整-查询卡信息
    // queryCredit(timeLimit) {
    //   let param = {
    //     custNo: this.dataDJK[0].custNo,
    //     loanAcctNo: this.dataDJK[0].cardNum
    //   }
    //   this.httpService.queryCreditResultInfoByCustNoAndAcctNo(param).subscribe(data => {
    //     if (data.returnCode.code == 'success') {
    //       if (data.resultList && data.resultList.length > 0) {
    //         this.queryViewRelations(data.resultList[0].custRequestNo, data.resultList[0].productNo, data.resultList[0].productName, data.resultList[0].creditBarCode, data.resultList[0].guaranteeType, timeLimit, data.resultList[0].endDate)
    //       } else {
    //         this.msgs = [{ severity: 'info', summary: '错误', detail: '未查到相关产品！' }];
    //       }
    //     } else {
    //       this.msgs = [{ severity: 'error', summary: '错误', detail: data.returnCode.message }];
    //     }
    //   })
    // }
    // 2、卡要素调整-查询卡信息
    CreditManagermentComponent.prototype.queryCredit = function (timeLimit) {
        var _this = this;
        var param = {
            creditCardNum: this.dataDJK[0].cardNum
        };
        this.httpService.queryCardProductInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.creditResultList && data.creditResultList.length > 0) {
                    _this.queryViewRelations(data.creditResultList[0].custRequestNo, data.creditResultList[0].productNo, data.creditResultList[0].productName, data.creditResultList[0].creditBarCode, data.creditResultList[0].guaranteeType, timeLimit, data.creditResultList[0].endDate);
                }
                else {
                    _this.msgs = [{ severity: 'info', summary: '错误', detail: '未查到相关产品！' }];
                }
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '错误', detail: data.returnCode.message }];
            }
        });
    };
    // 查询关联页面
    CreditManagermentComponent.prototype.queryViewRelations = function (custRequestNo, productNo, productName, creditBarCode, guarantType, timeLimit, endDate) {
        var _this = this;
        // let commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        // const params = {
        //   productNo,
        //   roleId: commonHeader['extParam'].postId,
        //   viewIndex: 1,
        //   viewSize: 100,
        // };
        var post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
        var params = {
            'productNo': productNo,
            'roleId': post_name,
            'viewIndex': 1,
            'viewSize': 100,
        };
        this.commfunc.clearSession('viewId');
        this.creditCcmService.queryViewRelations(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                if (data.list && data.list.length > 0) {
                    var viewId_1 = [];
                    data.list.forEach(function (e) {
                        if (e.viewName.match('卡要素')) {
                            viewId_1.push({ a: e.viewConfigId, b: e.viewName });
                        }
                    });
                    _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_1));
                    for (var i = 0; i < data.list.length; i++) {
                        if (data.list[i].viewName.match('卡要素')) {
                            _this.stopFlag = false;
                            var pageParams = {
                                viewConfigId: data.list[i]['viewConfigId'],
                                viewName: data.list[i]['viewName'],
                                custNo: _this.custNo,
                                data: _this.dataDJK,
                                custRequestNo: custRequestNo,
                                creditBarCode: creditBarCode,
                                guarantType: guarantType,
                                productNo: productNo,
                                productName: productName,
                                intoAdjustFlag: true,
                                taskType: data.list[i]['taskType'],
                                timeLimit: timeLimit,
                                endDate: endDate,
                                creditCardElement: 'creditCardElementSendCustRequestNo',
                                ckhs: 'Y',
                                varMap: {
                                    dataMap: {}
                                }
                            };
                            pageParams['operate'] = 'add';
                            _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify(pageParams)]);
                            break;
                        }
                    }
                    if (_this.stopFlag) {
                        _this.msgs = [];
                        _this.msgs = [{ severity: 'info', summary: '提示', detail: '产品和岗位未关联页面,请配置关联页面' }];
                    }
                }
                else {
                    _this.msgs = [];
                    _this.msgs = [{ severity: 'info', summary: '提示', detail: '产品和岗位未关联页面,请配置关联页面' }];
                }
            }
            else {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '错误', detail: data.returnCode.message }];
            }
        });
    };
    // 预审批登记簿-撤销
    CreditManagermentComponent.prototype.preApproval = function (item) {
        // 手工生成合同 + 撤销（防重复点击标志）
        if (item == '1' || item == '3') {
            if (this.clickBtn) {
                return;
            }
        }
        else {
            this.clickBtn = false;
        }
        this.vetoOption = [];
        this.rejectFirstReason = '';
        this.rejectSecondReason = '';
        this.comments = '';
        this.bzIsshow = false;
        // 数据长度校验
        if (this.dataZZ.length != 1) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择一条数据！' }];
            return;
        }
        // 清空
        this.preApprovalArr = [];
        this.commonMap = {};
        this.preApprovalArr.push(this.dataZZ[0]);
        this.operate = '';
        // 类型检验
        if (item == '1' || item == '2' || item == '3') {
            if (this.preApprovalArr[0].dataType != '1') {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '只支持对预处理数据进行该操作' }];
                return;
            }
        }
        if (item == '1') {
            this.operate = '1';
            this.create(); // 1、手工生成合同
        }
        else if (item == '2') {
            this.operate = '2';
            this.lookOver(); // 2、查看
        }
        else if (item == '3') {
            this.operate = '3';
            this.repealPre(); // 3、撤销
        }
        else if (item == '4') {
            this.operate = '4';
            this.queryCommonBorrowerInfo(); // 4、影像上传
        }
        else if (item == '5') {
            this.operate = '5';
            this.queryCommonBorrowerInfo(); // 5、影像查看
        }
    };
    // 1、预审批手工生成合同
    CreditManagermentComponent.prototype.create = function () {
        var _this = this;
        console.log('手工生成合同');
        var attributeMap = {};
        var creditMap = {};
        var bussiParam = {};
        var custRequestNo = this.preApprovalArr[0].custRequestNo;
        this.creditCcmService.queryCreditInfo({ custRequestNo: custRequestNo }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                attributeMap = data.attributeMap;
                creditMap = data.creditMap;
                bussiParam = Object.assign(attributeMap, creditMap);
                console.log(bussiParam);
            }
        });
        var param = {
            dedId: this.preApprovalArr[0].dedId,
            batchFlag: '2',
        };
        this.clickBtn = true; // 点击状态-置为true
        this.httpService.preAppprovedCreateContract(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') { // needApprove: 1-需要，0-不需要审批
                if (data.needApprove == '1') {
                    _this.confirmationService.confirm({
                        message: '原合同仍在执行中，需上报有权人审批！',
                        header: '提示',
                        accept: function () {
                            _this.waitSelUserList = _this.commfunc.query('RUM000501', bussiParam);
                            if (_this.waitSelUserList.waitSelUserList.length > 0 && _this.waitSelUserList.waitSelUserList[0].reminder) {
                                _this.commonMap['P_loanNum'] = JSON.parse(_this.waitSelUserList.waitSelUserList[0].reminder)[3];
                                _this.commonMap['OUT_MSGList'] = JSON.parse(_this.waitSelUserList.waitSelUserList[0].reminder)[0].toString();
                                _this.commonMap['OUT_exceptionalPosition'] = JSON.parse(_this.waitSelUserList.waitSelUserList[0].reminder)[2];
                                _this.commonMap['OUT_finalApprovalAmount'] = JSON.parse(_this.waitSelUserList.waitSelUserList[0].reminder)[1];
                                _this.commonMap['compreCreditFlag'] = JSON.parse(_this.waitSelUserList.waitSelUserList[0].reminder)[4];
                            }
                            _this.listDisplay = true;
                            console.log(_this.commonMap);
                            //例外审批检查规则
                            if (_this.waitSelUserList.waitSelUserList && _this.waitSelUserList.waitSelUserList.length != 0) {
                                var reg = /[\u4e00-\u9fa5]/g; //校验是否是汉字
                                if (!_this.waitSelUserList.waitSelUserList[0].reminder || !reg.test(_this.waitSelUserList.waitSelUserList[0].reminder)) {
                                    _this.listDisplay = false;
                                }
                                else {
                                    debugger;
                                    _this.list = [];
                                    var arrTemp = JSON.parse(_this.waitSelUserList.waitSelUserList[0].reminder)[0];
                                    if (arrTemp && arrTemp.length != 0) {
                                        arrTemp.forEach(function (element2) {
                                            var ind1, ind2;
                                            var arr2, arr3;
                                            var linkCustNo;
                                            if (element2.indexOf('(') != -1) {
                                                ind1 = element2.indexOf('(');
                                                ind2 = element2.indexOf(')');
                                                linkCustNo = element2.substring(ind1 + 1, ind2);
                                                arr2 = element2.split('');
                                                arr2.splice(ind1, ind2 - ind1 + 1);
                                                arr3 = arr2.join('');
                                            }
                                            else {
                                                arr3 = element2;
                                            }
                                            var arr = { reminder: arr3, linkCustNo: linkCustNo };
                                            _this.list.push(arr);
                                        });
                                    }
                                }
                            }
                            if (!_this.waitSelUserList.erro) {
                                _this.outVal = _this.waitSelUserList.waitSelUserList;
                                var chooseThis = _this.waitSelUserList.display;
                                var commonHeader = JSON.parse(_this.commfunc.getSessionData('commonHeader'));
                                var a2 = commonHeader.extParam.specifyNextOpers;
                                if (chooseThis == true) {
                                    _this.dealPerShow = true;
                                }
                                else {
                                    _this.clickBtn = false; // 点击状态-置为false
                                    _this.msgs = [];
                                    _this.msgs.push({ severity: 'error', summary: '提示', detail: '请配置审批人员!' });
                                }
                            }
                            else {
                                _this.clickBtn = false; // 点击状态-置为false
                                _this.msgs = [];
                                _this.msgs.push({ severity: 'error', summary: '提示', detail: _this.waitSelUserList.erro });
                            }
                        },
                        reject: function () {
                            _this.clickBtn = false; // 点击状态-置为false
                        }
                    });
                }
                else {
                    // this.doNext('2');
                    _this.close();
                    _this.querySelfServiceBusiness();
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '合同生成成功！' });
                }
            }
            else {
                _this.clickBtn = false; // 点击状态-置为false
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.clickBtn = false; // 点击状态-置为false
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    // 关闭选人框
    CreditManagermentComponent.prototype.dealPerShowClose = function () {
        this.dealPerShow = false;
        this.clickBtn = false;
    };
    // 撤销
    CreditManagermentComponent.prototype.repealPre = function () {
        var _this = this;
        var zlxrOrgId = '';
        this.httpService.queryTellerById({ tellerId: this.preApprovalArr[0].tellerNo }).subscribe(function (data) {
            zlxrOrgId = data.orgId;
            if (_this.principalLinkmanOrg != zlxrOrgId) {
                _this.msgs = [];
                _this.msgs = [{ severity: 'error', summary: '提示', detail: '经办人或主联系人所在机构与经办机构不一致' }];
                return;
            }
            _this.voteDisplay = true;
        });
    };
    // 手工生成合同触发工作流
    CreditManagermentComponent.prototype.doNext = function (type) {
        var _this = this;
        var param = {
            dedId: this.preApprovalArr[0].dedId,
            custRequestNo: this.preApprovalArr[0].custRequestNo,
            workType: type,
        };
        if (type == '1') {
            param['rejectSecondReason'] = this.rejectSecondReason;
            param['rejectFirstReason'] = this.rejectFirstReason;
            if (param['commonMap']) {
                delete param['commonMap'];
            }
        }
        else {
            param['commonMap'] = this.commonMap;
            if (param['rejectSecondReason']) {
                delete param['rejectSecondReason'];
            }
            if (param['rejectFirstReason']) {
                delete param['rejectFirstReason'];
            }
        }
        this.clickBtn = true; // 点击状态-置为true
        this.httpService.startPreWorkFlow(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') { // needApprove: 1-需要，0-不需要审批
                _this.close();
                _this.querySelfServiceBusiness();
            }
            else {
                _this.clickBtn = false; // 点击状态-置为false
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.clickBtn = false; // 点击状态-置为false
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
        var s = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        if (s.extParam.specifyNextOpers) {
            delete s.extParam.specifyNextOpers;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
        if (s.extParam.specifyNextNode) {
            delete s.extParam.specifyNextNode;
            var commonHeader = s;
            this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        }
    };
    // 查看
    CreditManagermentComponent.prototype.view = function (customerData, i) {
        console.log(customerData);
        this.Toview = i;
        customerData['productNo'] = customerData['currentProductNo'];
        console.log(customerData);
        this.bpmQueryTaskList(customerData, customerData.bpmFlowId, true);
        // this.queryViewRelations(customerData, false);
    };
    // 查询关联页面
    //查询工作流节点
    CreditManagermentComponent.prototype.bpmQueryTaskList = function (customerData, processId, toView) {
        var _this = this;
        this.customeHttpService.bpmQueryTaskList({ processId: processId }).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.pageData.result && data.pageData.result.length >= 1) {
                    _this.queryViewRelationsApply(customerData, false, data.pageData.result[0].workType, toView, data.pageData.result[0].taskType);
                }
                else {
                    _this.queryViewRelationsApply(customerData, false, '', toView);
                }
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    CreditManagermentComponent.prototype.queryViewRelationsApply = function (customerData, approve, workType, toView, taskType) {
        var _this = this;
        debugger;
        var post_name = JSON.parse(this.commfunc.getSessionDataCH('postIdList'));
        var params = {
            // 'businessType': data.varMap.dataMap.taskType,
            'productNo': customerData['productNo'],
            'roleId': post_name,
        };
        this.creditCcmService.queryViewRelations(params).subscribe(function (data) {
            if (data.returnCode.code === 'success') {
                if (data.list.length > 0) {
                    var viewId_2 = [];
                    data.list.forEach(function (e) {
                        if (!e.viewName.match('卡要素')) {
                            viewId_2.push({ a: e.viewConfigId, b: e.viewName });
                        }
                    });
                    _this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId_2));
                    // let viewId = [];
                    // data.list.forEach(e => {
                    // 	viewId.push({ a: e.viewConfigId, b: e.viewName });
                    // });
                    // this.commfunc.setSessionDataCH('viewId', JSON.stringify(viewId));
                    var pageParams = void 0, param = void 0;
                    for (var i = 0; i < data.list.length; i++) {
                        var str = '卡要素';
                        if (data.list[i].viewName.indexOf(str) == -1) {
                            var appro = '';
                            if (approve == 'approve') {
                                appro = 'approve';
                            }
                            else {
                                appro = customerData.taskType;
                            }
                            //当状态为待发起且为非打回拟稿人或追回时，使taskType的值不为approve或task
                            if ((customerData.taskName && customerData.taskName == '待发起' && workType != '4' && workType != '5') || !workType) {
                                appro = 'aaaa';
                            }
                            else {
                                appro = taskType;
                            }
                            if (toView)
                                appro = 'approve';
                            var varMap = JSON.parse(JSON.stringify(customerData));
                            varMap['dataMap'] = JSON.parse(JSON.stringify(customerData));
                            varMap['taskCategoryId'] = '';
                            // varMap['PROCESS_TASK_ID'] = customerData['bpmTaskId'];
                            _this.Toview == '1' ? _this.isExamine = true : _this.isExamine = false;
                            pageParams = {
                                'viewConfigId': data.list[i]['viewConfigId'],
                                'viewName': data.list[i]['viewName'],
                                'custNo': customerData['custNo'],
                                'custName': customerData['custName'],
                                'custRequestNo': customerData['custRequestNo'],
                                'productNo': customerData['productNo'],
                                'productName': customerData['productName'],
                                'isView': '',
                                'businessType': customerData['businessType'],
                                'processId': customerData.bpmFlowId,
                                'taskId': customerData.bpmTaskId,
                                'guaranteeType': customerData.guaranteeType,
                                'applyAmt': customerData.applyAmt,
                                varMap: varMap,
                                'custRequestId': customerData.custRequestId,
                                'endDate': customerData.endDate,
                                'requestSeqNo': customerData.requestSeqNo,
                                'workCreater': customerData.workCreater,
                                'taskRate': customerData.taskRate,
                                // 'stageType': customerData.varMap.stageType,
                                'taskName': customerData.taskName,
                                'taskType': appro,
                                'workType': workType,
                                "isExamine": _this.isExamine,
                                // 'flag': '2',
                                'flag': _this.operate == '2' ? '1' : '2',
                            };
                            param = {
                                'viewConfigId': data.list[i]['viewConfigId'],
                                'viewName': data.list[i]['viewName'],
                            };
                            break;
                        }
                    }
                    //console.log(customerData)
                    _this.commfunc.setSessionDataCH('creditDataWorkFlow', JSON.stringify(pageParams));
                    param['ckhs'] = 'Y';
                    if (_this.Toview) {
                        param['Toview'] = _this.Toview;
                    }
                    _this.router.navigate(['/pages/tzb/custom/credit-ccm/viewPage', JSON.stringify(param)]);
                }
                else {
                    _this.msgs = [{ severity: 'error', summary: '错误', detail: '产品和岗位未关联页面,请配置关联页面' }];
                }
            }
            else {
                _this.msgs = [{ severity: 'error', summary: '错误', detail: data.returnCode.message }];
            }
        });
    };
    // 2、查看
    CreditManagermentComponent.prototype.lookOver = function () {
        console.log('2、查看');
        this.view(this.preApprovalArr[0], '1');
    };
    //否决
    CreditManagermentComponent.prototype.vetoClick = function () {
        if (this.rejectFirstReason == '' || this.rejectFirstReason == undefined || this.rejectFirstReason == null) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择一级原因' }];
            return;
        }
        if (this.rejectSecondReason == '' || this.rejectSecondReason == undefined || this.rejectSecondReason == null) {
            this.msgs = [];
            this.msgs = [{ severity: 'error', summary: '提示', detail: '请选择二级原因' }];
            return;
        }
        // 判断是否是-其他
        if (this.rejectSecondReason == '4110') {
            if (this.comments == '' || this.comments == undefined || this.comments == null) {
                this.msgs = [];
                this.msgs = [{ severity: 'error', summary: '提示', detail: '备注不能为空' }];
                return;
            }
        }
        this.waitSelUserList = this.commfunc.query('RUM_0022', {});
        if (!this.waitSelUserList.erro) {
            this.outVal = this.waitSelUserList.waitSelUserList;
            var chooseThis = this.waitSelUserList.display;
            var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
            var a2 = commonHeader.extParam.specifyNextOpers;
            if (chooseThis == true) {
                this.voteDisplay = false;
                this.dealPerShow = true;
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: '提示', detail: '请配置审批人员!' });
            }
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: '提示', detail: this.waitSelUserList.erro });
        }
    };
    CreditManagermentComponent.prototype.repeal = function () {
        var _this = this;
        var param = {
            dedId: this.preApprovalArr[0].dedId,
            batchFlag: '2',
        };
        this.httpService.updateMatureStatus(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') { // needApprove: 1-需要，0-不需要审批
                if (data.needApprove == '1') {
                    _this.msgs = [];
                    _this.msgs.push({ severity: 'success', summary: '提示', detail: '需要审批' });
                }
                else {
                    _this.doNext('3');
                }
            }
            else {
                _this.msgs = [];
                _this.msgs.push({ severity: 'error', summary: '提示', detail: data.returnCode.message });
            }
        }, function (error) {
            _this.msgs = [];
            _this.msgs.push({ severity: 'error', summary: '提示', detail: "调用服务失败！" });
        });
    };
    //获取共同借款人的信息
    CreditManagermentComponent.prototype.queryCommonBorrowerInfo = function () {
        var _this = this;
        var param = {
            loanSeqNo: this.preApprovalArr[0].custRequestNo,
            questionType: '01',
        };
        this.creditCcmService.queryCreditQuestionInfo(param).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.resultList && data.resultList.length > 0) {
                    var param_1;
                    var tempArray = [];
                    for (var _i = 0, _a = data.resultList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        param_1 = JSON.parse(item.questionReslponse);
                        param_1['cqiId'] = item.cqiId;
                        param_1['custRequestNo'] = item.custRequestNo;
                        tempArray.push(param_1);
                    }
                    //共同借款人
                    for (var i = 0; i < tempArray.length; i++) {
                        var tempBookmarkOrder = i + 2 + '';
                        _this.info_numVal += '';
                        _this.info_numVal += '&info' + tempBookmarkOrder + "=TABSORDER:" + tempBookmarkOrder + ";BUSI_SERIAL_NO:IMP"
                            + tempArray[i].commonBorrowerCustNo + ";TABNAME:共同借款人-" + tempArray[i].commonBorrowerCustName
                            + ";PROSERIALNO:" + tempArray[i].custRequestNo + ";OBJECTNAME:APP1009;";
                    }
                    _this.queryGuarantorInfo(data.resultList.length);
                }
                else {
                    _this.queryGuarantorInfo(0);
                }
            }
            else {
                // this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                _this.queryGuarantorInfo(0);
            }
        }, function (error) {
            // this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
            _this.queryGuarantorInfo(0);
        });
    };
    //获取担保人的信息
    CreditManagermentComponent.prototype.queryGuarantorInfo = function (borrowerLength) {
        var _this = this;
        //获取担保人的信息
        var params = {
            loanSeqNo: this.preApprovalArr[0].custRequestNo,
            questionType: '02',
        };
        this.creditCcmService.queryCreditQuestionInfo(params).subscribe(function (data) {
            if (data.returnCode.code == 'success') {
                if (data.resultList && data.resultList.length > 0) {
                    var param = void 0;
                    var tempArray = [];
                    for (var _i = 0, _a = data.resultList; _i < _a.length; _i++) {
                        var item = _a[_i];
                        param = JSON.parse(item.questionReslponse);
                        param['cqiId'] = item.cqiId;
                        param['custRequestNo'] = item.custRequestNo;
                        tempArray.push(param);
                    }
                    //担保人
                    for (var i = 0; i < tempArray.length; i++) {
                        var tempBookmarkOrder = i + 2 + borrowerLength + '';
                        _this.info_num += '';
                        _this.info_num += '&info' + tempBookmarkOrder + "=TABSORDER:" + tempBookmarkOrder + ";BUSI_SERIAL_NO:IMP"
                            + tempArray[i].custNo + ";TABNAME:担保人-" + tempArray[i].custName + ";PROSERIALNO:dbr_"
                            + tempArray[i].custRequestNo + "_" + tempArray[i].custNo + ";OBJECTNAME:APP1009;";
                    }
                    //console.log(222, tempArray)
                    //console.log(333, this.info_num)
                    _this.imageUpload();
                }
                else {
                    _this.imageUpload();
                }
            }
            else {
                _this.imageUpload();
                // this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
            }
        }, function (error) {
            _this.imageUpload();
            // this.msgs = [{ severity: 'error', summary: '提示', detail: '调用服务失败' }];
        });
    };
    // 4、影像上传
    CreditManagermentComponent.prototype.imageUpload = function () {
        this.imageShow = true;
        if (this.operate == '4') {
            this.queryFlag = '0';
            this.title = '影像上传';
        }
        else if (this.operate == '5') {
            this.queryFlag = '1';
            this.title = '影像查看';
        }
        var info1 = "info1=TABSORDER:1;BUSI_SERIAL_NO:IMP" + this.custNo + ";TABNAME:借款人-" + this.custName + ";PROSERIALNO:" + this.custRequestId + ";OBJECTNAME:APP1009;" + this.info_num + this.info_numVal;
        var newurl = "http://10.1.97.166:9083" + "/SunIAP/SunIAPRequestController.do?UID=MOBILE&PWD=cyg&AppID=APP1009&UserID=" + this.userId + "&UserName=" + this.userName + "&OrgID=" + this.orgId + "&OrgOwner=CRM&QueryFlag=" + this.queryFlag + "&" + info1;
        this.srcUrl_1 = this.sanitizer.bypassSecurityTrustResourceUrl(newurl);
    };
    // 切换否决原因
    CreditManagermentComponent.prototype.vetoChange = function (event) {
        this.comments = '';
        this.bzIsshow = false;
        if (event.value == '06') {
            this.vetoOption = this.personVeto;
        }
        else if (event.value == '07') {
            this.vetoOption = this.financeVeto;
        }
        else if (event.value == '08') {
            this.vetoOption = this.manageVeto;
        }
        else if (event.value == '09') {
            this.vetoOption = this.serveVeto;
        }
        else if (event.value == '10') {
            this.vetoOption = this.otherVeto;
        }
        if (event.value == '') {
            this.rejectSecondReason = '';
            this.vetoOption = [];
        }
        else {
            this.rejectSecondReason = this.vetoOption[0].value;
        }
    };
    // 切换二级原因
    CreditManagermentComponent.prototype.vetoChangeTwoReson = function (event) {
        this.comments = '';
        if (event.value == '4110') {
            this.bzIsshow = true;
        }
        else {
            this.bzIsshow = false;
        }
    };
    CreditManagermentComponent.prototype.close = function () {
        this.voteDisplay = false;
        this.vetoOption = [];
        this.rejectFirstReason = '';
        this.rejectSecondReason = '';
        this.comments = '';
        this.bzIsshow = false;
    };
    CreditManagermentComponent.prototype.outDisplayCall = function (event) {
        this.dealPerShow = false;
        this.voteDisplay = false;
    };
    CreditManagermentComponent.prototype.outValueCall = function (event) {
        this.outVal = event;
        var ss = '';
        var specifyNextNode = '';
        this.outVal.forEach(function (item) {
            ss += item.tellerId + ',';
            specifyNextNode = item.outFlowId;
        });
        var commonHeader = JSON.parse(this.commfunc.getSessionData('commonHeader'));
        commonHeader.extParam['specifyNextOpers'] = ss;
        commonHeader.extParam['specifyNextNode'] = specifyNextNode;
        this.commfunc.setSessionData('commonHeader', JSON.stringify(commonHeader));
        if (this.operate == '1') {
            this.doNext('2');
        }
        else if (this.operate == '3') {
            this.doNext('1');
        }
    };
    CreditManagermentComponent.prototype.compileStr = function (cust) {
        return this.commfunc.compileStr(cust);
    };
    CreditManagermentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-credit-managerment',
            template: __webpack_require__(/*! ./credit-managerment.component.html */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.html"),
            styles: [__webpack_require__(/*! ./credit-managerment.component.scss */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"], app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"], app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_10__["CreditCcmService"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"], primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"]]
        }),
        __param(10, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _custom_view_component__WEBPACK_IMPORTED_MODULE_9__["CustomView"]; }))),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"],
            _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_1__["Commfunc"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_pages_tzb_custom_credit_ccm_common_http_credit_ccm_http_service__WEBPACK_IMPORTED_MODULE_10__["CreditCcmService"],
            app_uisftech_view_http_uisftech_view_http_service__WEBPACK_IMPORTED_MODULE_12__["CustomeHttpService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"],
            primeng_primeng__WEBPACK_IMPORTED_MODULE_3__["ConfirmationService"],
            app_uisftech_common_service_http_service__WEBPACK_IMPORTED_MODULE_14__["HttpService"],
            _custom_view_component__WEBPACK_IMPORTED_MODULE_9__["CustomView"]])
    ], CreditManagermentComponent);
    return CreditManagermentComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: CreditManagermentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditManagermentModule", function() { return CreditManagermentModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _credit_managerment_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./credit-managerment.routing */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.routing.ts");
/* harmony import */ var _credit_managerment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./credit-managerment.component */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.ts");
/* harmony import */ var _guarantee_detail_guarantee_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guarantee-detail/guarantee-detail.component */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/guarantee-detail/guarantee-detail.component.ts");
/* harmony import */ var _credit_line_detail_credit_line_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./credit-line-detail/credit-line-detail.component */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-line-detail/credit-line-detail.component.ts");
/* harmony import */ var _credit_business_detail_credit_business_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./credit-business-detail/credit-business-detail.component */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-business-detail/credit-business-detail.component.ts");
/* harmony import */ var _acceptance_detail_acceptance_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./acceptance-detail/acceptance-detail.component */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/acceptance-detail/acceptance-detail.component.ts");
/* harmony import */ var _bulkpercredit_detail_bulkpercredit_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bulkpercredit-detail/bulkpercredit-detail.component */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/bulkpercredit-detail/bulkpercredit-detail.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../report/report.component */ "./src/app/pages/tzb/custom/custom-view/report/report.component.ts");
/* harmony import */ var _contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contract-detail/contract-detail.component */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/contract-detail/contract-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 //客户运营平台 http











var CreditManagermentModule = /** @class */ (function () {
    function CreditManagermentModule() {
    }
    CreditManagermentModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_5__["FrameworkModule"],
                _credit_managerment_routing__WEBPACK_IMPORTED_MODULE_6__["CreditManagermentRouting"]
            ],
            declarations: [
                _credit_managerment_component__WEBPACK_IMPORTED_MODULE_7__["CreditManagermentComponent"],
                _guarantee_detail_guarantee_detail_component__WEBPACK_IMPORTED_MODULE_8__["GuaranteeDetailComponent"],
                _credit_line_detail_credit_line_detail_component__WEBPACK_IMPORTED_MODULE_9__["CreditLineDetailComponent"],
                _credit_business_detail_credit_business_detail_component__WEBPACK_IMPORTED_MODULE_10__["CreditBusinessDetailComponent"],
                _acceptance_detail_acceptance_detail_component__WEBPACK_IMPORTED_MODULE_11__["AcceptanceDetailComponent"],
                _bulkpercredit_detail_bulkpercredit_detail_component__WEBPACK_IMPORTED_MODULE_12__["BulkpercreditDetailComponent"],
                _report_report_component__WEBPACK_IMPORTED_MODULE_13__["ReportComponent"],
                _contract_detail_contract_detail_component__WEBPACK_IMPORTED_MODULE_14__["ContractDetailComponent"]
            ],
            providers: [
                _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_3__["CusViewHttpService"]
            ]
        })
    ], CreditManagermentModule);
    return CreditManagermentModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.routing.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.routing.ts ***!
  \***********************************************************************************************/
/*! exports provided: routes, CreditManagermentRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditManagermentRouting", function() { return CreditManagermentRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _credit_managerment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credit-managerment.component */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/credit-managerment.component.ts");


var routes = [
    {
        path: '', component: _credit_managerment_component__WEBPACK_IMPORTED_MODULE_1__["CreditManagermentComponent"]
    }
];
var CreditManagermentRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/guarantee-detail/guarantee-detail.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/guarantee-detail/guarantee-detail.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">交易日期：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.tranDate|timeValuePie}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">柜员流水号：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.tellSeqNo}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">经办机构：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.appBranchNo}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">管理机构：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.manageBranchId}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">客户号：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.clientNo}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">合同号：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.contractNo}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">业务类型：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.bussType|codeValuePie:bussTypeOptions}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">担保方式：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.guaranteeMode|codeValuePie:guaranteeModeOptions}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">结算账号：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.settleAcctNo}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">保函类型：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.gtType|codeValuePie:baoHanClassOptions}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">支付类型：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.payType|codeValuePie:payTypeOptions}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">说明：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.description}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">备注：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.remark}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">币种：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.ccy|codeValuePie:currencyOptions}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">保函金额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.gtAmt|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">开始日期：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.startDate|timeValuePie}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">终止日期：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.endDate|timeValuePie}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">商务合同名称：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.businessContractName}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">商务合同号：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.businessContractNo}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">受益人名称：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.beneficiaryName}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">保证金币种：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.guaranteeCcy|codeValuePie:currencyOptions}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">保证金：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.guaranteeAmt|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">保证金比率(%)：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.guaranteeRate}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">保证金账号：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.guaranteeAcctNo}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">质押金额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.pledgeAmt|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">质押率(%)：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.pledgeRate}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">敞口金额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.gapAmt|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">手续费比率(万分号)：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.commissionRate}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">状态：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.statusType|codeValuePie:statusTypeOptions}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">变更日期：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.changeDate|timeValuePie}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">催收签字日期：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.signDate|timeValuePie}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">垫款金额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.advancedAmt|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">垫款日期：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.advancedDate|timeValuePie}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">当前余额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.balance|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">正常余额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.normalLoanBalance|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">关注余额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.interestLoanBalance|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">次级余额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.secondaryLoanBalance|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">可疑余额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.doubtLoanBalance|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">损失余额：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.lossLoanBalance|number:'1.2-2'}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">清分日期：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.clearingDate|timeValuePie}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">注销日期：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.closeDate|timeValuePie}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">责任人：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.liablePersonName}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">调查人：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.investigatorName}}</span>\r\n</div>\r\n<div class=\"ui-g-4\" style=\"padding:0;\">\r\n    <span class=\"ui-g-6\" style=\"text-align:right;\">十级分类：</span>\r\n    <span class=\"ui-g-6\">{{guaranteeDetail.tenType|codeValuePie:tenClassOptions}}</span>\r\n</div>\r\n<p-growl [(value)]=\"msgs\"></p-growl>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/guarantee-detail/guarantee-detail.component.scss":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/guarantee-detail/guarantee-detail.component.scss ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R6Yi9jdXN0b20vY3VzdG9tLXZpZXcvY3JlZGl0LW1hbmFnZXJtZW50L2d1YXJhbnRlZS1kZXRhaWwvZ3VhcmFudGVlLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/credit-managerment/guarantee-detail/guarantee-detail.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/credit-managerment/guarantee-detail/guarantee-detail.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: GuaranteeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuaranteeDetailComponent", function() { return GuaranteeDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../bean/custom-view.bean */ "./src/app/pages/tzb/custom/custom-view/bean/custom-view.bean.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
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



// import {BhZt,StatusType,CURRENCY,BussType,GuaranteeMode,BaoHanClass,PayType,TenClass,PayTypeBH} from '../../../constant/custView.codeValue';

//保函详情
var GuaranteeDetailComponent = /** @class */ (function () {
    function GuaranteeDetailComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.msgs = [];
        this.guaranteeDetail = new _bean_custom_view_bean__WEBPACK_IMPORTED_MODULE_1__["GuaranteeDetailBean"]();
        this.bussTypeOptions = []; //业务类型
        this.guaranteeModeOptions = []; //担保方式
        this.baoHanClassOptions = []; //保函类型
        // payTypeOptions:any[]=PayType;//支付类型
        this.tenClassOptions = []; //十级分类
        this.currencyOptions = []; //币种
        this.statusTypeOptions = []; //保函状态
        this.payTypeOptions = []; //支付类型
        this.codeVal();
        this.bussTypeOptions = this.code['BussType'];
        this.guaranteeModeOptions = this.code['GuaranteeMode'];
        this.baoHanClassOptions = this.code['BaoHanClass'];
        this.tenClassOptions = this.code['TenClass'];
        this.currencyOptions = this.code['CURRENCY'];
        this.statusTypeOptions = this.code['BhZt'];
        this.payTypeOptions = this.code['PayTypeBH'];
        //---------------------------------------上面是码值
    }
    GuaranteeDetailComponent.prototype.ngOnInit = function () {
    };
    GuaranteeDetailComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.inValue) {
            this.httpService.BZ_0200300000402_LOAN({ contractNo: this.inValue.contractNo }).subscribe(function (data) {
                if (data.returnCode.code == 'success') {
                    _this.guaranteeDetail = data;
                    _this.httpService.queryTellerById({ tellerId: _this.guaranteeDetail.investigatorName }).subscribe(function (item) {
                        _this.guaranteeDetail.investigatorName = item.tellerName;
                    });
                    _this.httpService.queryTellerById({ tellerId: _this.guaranteeDetail.liablePersonName }).subscribe(function (item) {
                        _this.guaranteeDetail.liablePersonName = item.tellerName;
                    });
                    _this.httpService.queryOrgById({ orgId: data.appBranchNo }).subscribe(function (item) {
                        if (item.orgName != null) {
                            data.appBranchNo = item.orgName;
                        }
                    });
                    _this.httpService.queryOrgById({ orgId: data.manageBranchId }).subscribe(function (item) {
                        if (item.returnCode.code == 'success') {
                            if (item.orgName != null) {
                                data.manageBranchId = item.orgName;
                            }
                        }
                    });
                }
                else {
                    data.returnCode.message ? data.returnCode.message : '调用服务失败';
                    _this.msgs = [{ severity: 'error', summary: '提示', detail: data.returnCode.message }];
                }
            });
        }
    };
    //码值
    GuaranteeDetailComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GuaranteeDetailComponent.prototype, "inValue", void 0);
    GuaranteeDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guarantee-detail',
            template: __webpack_require__(/*! ./guarantee-detail.component.html */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/guarantee-detail/guarantee-detail.component.html"),
            styles: [__webpack_require__(/*! ./guarantee-detail.component.scss */ "./src/app/pages/tzb/custom/custom-view/credit-managerment/guarantee-detail/guarantee-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], GuaranteeDetailComponent);
    return GuaranteeDetailComponent;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/report/report.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/report/report.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g-12\">\r\n    <header-title [Info]=\"'综合授信报告列表'\"></header-title>\r\n    <div class=\"ui-g-12 content\">\r\n        <p-dataTable [value]=\"reportList\" [style]=\"{'text-align':'center'}\">\r\n            <p-column field=\"reportId\" header='报告编号'></p-column>\r\n            <p-column field=\"reportDate\" header=\"生成时间\"></p-column>\r\n            <p-column field=\"qryUser\" header=\"查询用户\"></p-column>\r\n            <p-column field=\"accessWay\" header=\"生成方式\">\r\n                <ng-template let-col=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    {{col.accessWay|codeValuePie:accessWay}}\r\n                </ng-template>\r\n            </p-column>\r\n            <p-column field=\"\" header=\"操作\">\r\n                <ng-template let-col let-item=\"rowData\" let-ri=\"rowIndex\" pTemplate=\"body\">\r\n                    <span class=\"tabelDetailIco\" (click)=\"reportDetail(item)\">详情</span>\r\n                </ng-template>\r\n            </p-column>\r\n        </p-dataTable>\r\n        <p-paginator [first]=\"first\" rows=\"{{pageSize}}\" totalRecords=\"{{total}}\" pageLinkSize=\"3\" [rowsPerPageOptions]=\"[10,20,50,200]\"\r\n            (onPageChange)=\"paginate($event)\"></p-paginator>\r\n    </div>\r\n</div>\r\n<p-dialog *ngIf=\"reportDetailDisplay\" width=\"900\" [(visible)]=\"reportDetailDisplay\" modal=\"true\" class=\"reportsxTitle\">\r\n    <p-header>综合信用报告</p-header>\r\n    <reportDetail [inValue]=\"reportDetailCustNm\" [inValueReportId]=\"inValueReportId\"></reportDetail>\r\n</p-dialog>"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/report/report.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/report/report.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".querytitle {\n  width: 30%;\n  float: left;\n  text-align: right;\n  height: 28px;\n  line-height: 28px; }\n\n.queryinput {\n  width: 60%;\n  float: left;\n  display: flex; }\n\n.queryinput .input-s {\n    width: 100% !important;\n    min-width: 69px !important; }\n\n.content {\n  min-height: 650px; }\n\n.content .table-s {\n    text-align: center; }\n\n:host /deep/ .reportsxTitle .ui-dialog .ui-dialog-titlebar {\n  text-align: center; }\n\n:host /deep/ .reportsxTitle .ui-dialog .ui-dialog-content {\n  background: #f3f3f4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9yZXBvcnQvRDpcXHdvcmtGb3JSdW5Ib1xcMjAxOTA4MDVUel9ual9ETFNcXGZyb250X2VuZC9zcmNcXGFwcFxccGFnZXNcXHR6YlxcY3VzdG9tXFxjdXN0b20tdmlld1xccmVwb3J0XFxyZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBSGpCO0lBS1Esc0JBQXNCO0lBQ3RCLDBCQUEwQixFQUFBOztBQUdsQztFQUNJLGlCQUFnQixFQUFBOztBQURwQjtJQUdRLGtCQUFrQixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdHpiL2N1c3RvbS9jdXN0b20tdmlldy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnF1ZXJ5dGl0bGUge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4ucXVlcnlpbnB1dCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLmlucHV0LXMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2OXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgICBtaW4taGVpZ2h0OjY1MHB4O1xyXG4gICAgLnRhYmxlLXN7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcbjpob3N0IC9kZWVwLyAucmVwb3J0c3hUaXRsZSAudWktZGlhbG9nIC51aS1kaWFsb2ctdGl0bGViYXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjpob3N0IC9kZWVwLyAucmVwb3J0c3hUaXRsZSAudWktZGlhbG9nIC51aS1kaWFsb2ctY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2Y0O1xyXG4gICAgLy8gb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tzb/custom/custom-view/report/report.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/tzb/custom/custom-view/report/report.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bean_report_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bean/report.bean */ "./src/app/pages/tzb/custom/custom-view/report/bean/report.bean.ts");
/* harmony import */ var _http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/custom-view/custom-view.http.service */ "./src/app/pages/tzb/custom/http/custom-view/custom-view.http.service.ts");
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
/**
 * @author 李聪 2018-05-14
 */




var ReportComponent = /** @class */ (function () {
    function ReportComponent(httpService, commfunc) {
        this.httpService = httpService;
        this.commfunc = commfunc;
        this.reportBean = new _bean_report_bean__WEBPACK_IMPORTED_MODULE_1__["ReportBean"]();
        this.pageSize = 10;
        this.first = 0;
        this.msgs = [];
        this.reportDetailDisplay = false;
        this.codeVal();
        this.accessWay = this.code['accessWay'];
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.reportBean.pageSize = 10;
        this.reportBean.pageNum = 1;
        this.queryReportList();
    };
    //分页
    ReportComponent.prototype.paginate = function (event) {
        //每页显示的条数
        this.reportBean.pageSize = event.rows;
        //当前页
        var currentPage = event.page + 1;
        this.reportBean.pageNum = currentPage;
        this.first = event.page * event.rows;
        //调用查询的方法
        this.queryReportList();
    };
    //查询报告列表
    ReportComponent.prototype.queryReportList = function () {
        var _this = this;
        this.custNo = this.commfunc.getSessionData('custNo');
        this.reportBean.custNo = this.custNo;
        this.httpService.compresiveCreditReportListQry(this.reportBean).subscribe(function (data) {
            if (data.returnCode.code == "success") {
                _this.reportList = data.reportList;
                _this.total = data.total;
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
    //查看详情按钮
    ReportComponent.prototype.reportDetail = function (item) {
        this.reportDetailDisplay = true;
        this.reportDetailCustNm = this.custNo;
        this.inValueReportId = item.reportId;
    };
    //码值
    ReportComponent.prototype.codeVal = function () {
        this.commfunc.codeValue();
        var ret = this.commfunc.codeDatas;
        return this.code = ret; //code是自己声明的变量
    };
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/pages/tzb/custom/custom-view/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/pages/tzb/custom/custom-view/report/report.component.scss")],
            providers: [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"]]
        }),
        __metadata("design:paramtypes", [_http_custom_view_custom_view_http_service__WEBPACK_IMPORTED_MODULE_2__["CusViewHttpService"],
            app_uisftech_common_service_commonFun__WEBPACK_IMPORTED_MODULE_3__["Commfunc"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ })

}]);
//# sourceMappingURL=tzb-custom-custom-view-credit-managerment-credit-managerment-module.js.map