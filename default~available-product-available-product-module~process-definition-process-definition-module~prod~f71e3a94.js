(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~available-product-available-product-module~process-definition-process-definition-module~prod~f71e3a94"],{

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/validator.constant.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/validator.constant.ts ***!
  \*********************************************************************************************/
/*! exports provided: COMMON_REGEXP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMON_REGEXP", function() { return COMMON_REGEXP; });
// 校验器 正则配置文件
var COMMON_REGEXP = {
    // 非法字符
    specialCharacters: '[~#$%^&~#￥%&<>@"{}\']',
    // 身份证
    card: '^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$',
    // 手机号
    phone: '^1[3|4|5|7|8][0-9]{9}$',
    // 邮箱
    email: '^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$',
    // 正整数
    positiveInt: '^[1-9]{1}[0-9]*$',
    // ip4
    ip4: '^((25[0-5]|2[0-4]\\d|[1]{1}\\d{1}\\d{1}|[1-9]{1}\\d{1}|\\d{1})($|(?!\\.$)\\.)){4}$',
    // 数字 字母（大小写）
    id: '^[A-Za-z0-9]+$',
    // 数字
    idno: '^[0-9]+$',
    // 密码全字符
    pwdAll: '^[0-9A-Za-z~!@#￥%^&*]+$',
    // 数字
    num: '.*\\d.*',
    // 大写字母
    powerCase: '.*[A-Z].*',
    // 小写字母
    lowerCase: '.*[a-z].*',
    // 特殊字符
    pwdSpecialCharacters: '.*[~!@#￥%^&*].*',
    // 弱密码校验
    easyPwd: '([0-9A-Za-z~!@#￥%^&*])\\1{1,}([0-9A-Za-z~!@#￥%^&*])\\2{1,}',
    // 密码重复校验
    pwdValid1: '^(?<k1>[0-9])\\k<k1>{{length}}$',
    // 密码必须含有数字和字母
    pwdValid2: '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$',
    // 密码校验正则  数字  字母（大小写）
    pwd: '^[A-Za-z0-9]+$',
    // 英文名称
    en: '^[A-Za-z]+$',
    // 军官证
    certificateOfficers: '^[a-zA-Z0-9]{7,21}$',
    // 港澳通行证
    hkAndMacaoPass: '^[HMhm]{1}([0-9]{10}|[0-9]{8})$',
    // 台湾通行证号
    taiwanPass: ['^[0-9]{8}$', '^[0-9]{10}$'],
    // 护照号  中华人民共和国因私护照
    privatePassport: '^(1[45][0-9]{7}|G[0-9]{8})+$',
    // 护照号 中华人民共和国因公护照
    passport: '^(P[0-9]{7}|S[0-9]{7,8})+$',
    // 护照号  外国护照
    foreignPassport: '^D[0-9]+$',
    // 外国人永久居留证
    residencePermit: '^[a-zA-Z]{3}\\d{12}$',
    // 中文字符
    flowCode: '^[a-zA-Z_][a-zA-Z0-9_-]+$'
};


/***/ }),

/***/ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/validator.utils.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/validator.utils.ts ***!
  \******************************************************************************************/
/*! exports provided: checkSpecialCharacter, checkSpecialCharacterStr, checkCard, checkMoreTel, checkTel, checkEmail, checkPositiveInt, checkSpace, checkSpaceStr, checkIp4, checkId, checkNoId, checkOldPwd, checkNewPwd, checkEn, checkCertificateOfficers, checkHkAndMacaoPass, checkTaiwanPass, checkPrivatePassport, checkPassport, checkForeignPassport, checkResidencePermit, checkhsmPort, checkFlowCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSpecialCharacter", function() { return checkSpecialCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSpecialCharacterStr", function() { return checkSpecialCharacterStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCard", function() { return checkCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkMoreTel", function() { return checkMoreTel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTel", function() { return checkTel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEmail", function() { return checkEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPositiveInt", function() { return checkPositiveInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSpace", function() { return checkSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSpaceStr", function() { return checkSpaceStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIp4", function() { return checkIp4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkId", function() { return checkId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNoId", function() { return checkNoId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOldPwd", function() { return checkOldPwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNewPwd", function() { return checkNewPwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEn", function() { return checkEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkCertificateOfficers", function() { return checkCertificateOfficers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkHkAndMacaoPass", function() { return checkHkAndMacaoPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkTaiwanPass", function() { return checkTaiwanPass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPrivatePassport", function() { return checkPrivatePassport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPassport", function() { return checkPassport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForeignPassport", function() { return checkForeignPassport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkResidencePermit", function() { return checkResidencePermit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkhsmPort", function() { return checkhsmPort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFlowCode", function() { return checkFlowCode; });
/* harmony import */ var _validator_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator.constant */ "./src/app/pages/tzb/workflow/activiti-work-flow/common/constant/validator.constant.ts");

// 校验特殊字符    form表单的校验
var checkSpecialCharacter = function (control) {
    var val = control.value;
    return checkSpecialCharacterStr(val);
};
// 校验特殊字符 单个input对value的校验
var checkSpecialCharacterStr = function (value) {
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].specialCharacters);
    return reg.test(value) ? { scError: { errorMsg: '非法字符:~#$%^&~#￥%&@<>"{}' } } : null;
};
// 身份证
var checkCard = function (control) {
    var val = control.value;
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].card);
    return reg.test(val) ? {} : { message: '身份证号不合法' };
};
// 手机号多个校验  多个手机号逗号隔开 空格算输入字符
var checkMoreTel = function (control) {
    var val = control.value;
    if (!val) {
        return { mobile: { message: '手机号不合法' } };
    }
    var telArray = val.split(',');
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].phone);
    for (var i = 0; i < telArray.length; i++) {
        if (!reg.test(telArray[i])) {
            return { mobile: { message: '手机号不合法' } };
        }
    }
    return null;
};
// 手机号单个校验  空格算输入字符  连续N个空格 校验不通过
var checkTel = function (control) {
    var val = control.value;
    if (val === undefined || val === null || val === '') {
        return null;
    }
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].phone);
    return reg.test(val) ? null : { mobile: { message: '手机号不合法' } };
};
// email校验  空格算输入字符  连续N个空格校验不通过
var checkEmail = function (control) {
    var val = control.value;
    if (val === undefined || val === null || val === '') {
        return null;
    }
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].email);
    return reg.test(val) ? null : { email: { message: '邮箱不合法' } };
};
// 校验正整数
var checkPositiveInt = function (control) {
    var val = control.value;
    if (val === undefined || val === null || val === '') {
        return null;
    }
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].positiveInt);
    return reg.test(val) ? null : { positiveInt: { message: '请输入正整数' } };
};
// 校验空格  前后空格  全空格非法   中间空格不非法
var checkSpace = function (control) {
    return checkSpaceStr(control.value);
};
// 校验空格  前后空格  全空格非法   中间空格不非法
var checkSpaceStr = function (val) {
    var res = null;
    if (val === undefined || val === null || val === '') {
        return res;
    }
    // trime后  长度和以前的不一样  非法
    if (val.length !== val.trim().length) {
        res = { spaceError: { message: '前后空格，全空格非法' } };
    }
    return res;
};
// 校验ip4
var checkIp4 = function (control) {
    var val = control.value;
    var res = null;
    if (val === undefined || val === null || val === '') {
        return res;
    }
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].ip4);
    return reg.test(val) ? null : { ip4: { message: 'ip格式错误' } };
};
// 校验id  只能数字  字母大小写
var checkId = function (control) {
    var val = control.value;
    var res = null;
    if (val === undefined || val === null || val === '') {
        return res;
    }
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].id);
    return reg.test(val) ? null : { id: { message: '只能输入数字，大小写字母' } };
};
// 校验id  只能数字
var checkNoId = function (control) {
    var val = control.value;
    var res = null;
    if (val === undefined || val === null || val === '') {
        return res;
    }
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].idno);
    return reg.test(val) ? null : { id: { message: '只能输入数字' } };
};
// 校验密码  只能数字  字母大小写
var checkOldPwd = function (control) {
    var val = control.value;
    var res = null;
    if (val === undefined || val === null || val === '') {
        return res;
    }
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].pwd);
    return reg.test(val) ? null : { pwd: { message: '只能输入数字，大小写字母' } };
};
// 校验密码  只能数字或只能数字+字母大小写
function checkNewPwd(pwdStrategy) {
    var pwdS = pwdStrategy;
    return function (control) {
        var val = control.value;
        var res = null;
        if (val === undefined || val === null || val === '') {
            return res;
        }
        else {
            var reg0 = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].num);
            var reg1 = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].powerCase);
            var reg2 = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].lowerCase);
            var reg3 = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].idno);
            var reg4 = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].easyPwd);
            var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].pwdAll);
            if (pwdS.indexOf('0') !== -1 && !reg0.test(val)) {
                return { pwd: { message: '密码必须含有数字' } };
            }
            if (pwdS.indexOf('1') !== -1 && !reg1.test(val)) {
                return { pwd: { message: '密码必须含有大写字母' } };
            }
            if (pwdS.indexOf('2') !== -1 && !reg2.test(val)) {
                return { pwd: { message: '密码必须含有小写字母' } };
            }
            if (pwdS.indexOf('3') !== -1 && !reg3.test(val)) {
                return { pwd: { message: '密码必须含有特殊字符【~!@#￥%^&*】' } };
            }
            if (reg4.test(val)) {
                return { pwd: { message: '密码过于简单，请重新设置' } };
            }
            if (pwdS) {
                return reg.test(val) ? null : { pwd: { message: '密码只能输入大小写字母数字或特殊字符【~!@#￥%^&*】' } };
            }
        }
    };
}
// 校验英文
var checkEn = function (control) {
    var val = control.value;
    var res = null;
    if (val === undefined || val === null || val === '') {
        return res;
    }
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].en);
    return reg.test(val) ? null : { en: { message: '只能输入英文字母' } };
};
// 军官证
var checkCertificateOfficers = function (control) {
    var val = control.value;
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].certificateOfficers);
    return reg.test(val) ? {} : { message: '军官证不合法' };
};
// 港澳通行证
var checkHkAndMacaoPass = function (control) {
    var val = control.value;
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].hkAndMacaoPass);
    return reg.test(val) ? {} : { message: '港澳通行证不合法' };
};
// 台湾通行证号
var checkTaiwanPass = function (control) {
    var val = control.value;
    var reg1 = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].taiwanPass[0]);
    var reg2 = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].taiwanPass[1]);
    return reg1.test(val) || reg2.test(val) ? {} : { message: '台湾通行证号不合法' };
};
// 护照号  中华人民共和国因私护照
var checkPrivatePassport = function (control) {
    var val = control.value;
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].privatePassport);
    return reg.test(val) ? {} : { message: '中华人民共和国因私护照不合法' };
};
// 中华人民共和国因公护照
var checkPassport = function (control) {
    var val = control.value;
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].passport);
    return reg.test(val) ? {} : { message: '中华人民共和国因公护照不合法' };
};
// 外国护照
var checkForeignPassport = function (control) {
    var val = control.value;
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].foreignPassport);
    return reg.test(val) ? {} : { message: '外国护照不合法' };
};
// 外国人永久居留证
var checkResidencePermit = function (control) {
    var val = control.value;
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].residencePermit);
    return reg.test(val) ? {} : { message: '外国人永久居留证不合法' };
};
// 机密机端口校验
var checkhsmPort = function (control) {
    var val = parseInt(control.value);
    if (val < 1 || val > 65535) {
        return { hsmPort: { message: '加密机端口不在范围内' } };
    }
    else {
        return null;
    }
};
// 流程编码校验（字母、数字、下划线）
var checkFlowCode = function (control) {
    var val = control.value;
    var reg = new RegExp(_validator_constant__WEBPACK_IMPORTED_MODULE_0__["COMMON_REGEXP"].flowCode);
    return reg.test(val) ? null : { message: '流程编码不合法' };
};


/***/ })

}]);
//# sourceMappingURL=default~available-product-available-product-module~process-definition-process-definition-module~prod~f71e3a94.js.map