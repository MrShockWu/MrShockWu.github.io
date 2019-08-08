/*!
 * jquery.base64.js 0.1 - https://github.com/yckart/jquery.base64.js
 * Makes Base64 en & -decoding simpler as it is.
 *
 * Based upon: https://gist.github.com/Yaffle/1284012
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/10
 * 调用方法
 * window.base64.方法名();
 **/
;
(function (window) {

    var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a256 = '',
        r64 = [256],
        r256 = [256],
        i = 0;

    var UTF8 = {

        /**
         * Encode multi-byte Unicode string into utf-8 multiple single-byte characters
         * (BMP / basic multilingual plane only)
         *
         * Chars in range U+0080 - U+07FF are encoded in 2 chars, U+0800 - U+FFFF in 3 chars
         *
         * @param {String} strUni Unicode string to be encoded as UTF-8
         * @returns {String} encoded string
         */
        encode: function (strUni) {
            // use regular expressions & String.replace callback function for better efficiency
            // than procedural approaches
            var strUtf = strUni.replace(/[\u0080-\u07ff]/g, // U+0080 - U+07FF => 2 bytes 110yyyyy, 10zzzzzz
                    function (c) {
                        var cc = c.charCodeAt(0);
                        return String.fromCharCode(0xc0 | cc >> 6, 0x80 | cc & 0x3f);
                    })
                .replace(/[\u0800-\uffff]/g, // U+0800 - U+FFFF => 3 bytes 1110xxxx, 10yyyyyy, 10zzzzzz
                    function (c) {
                        var cc = c.charCodeAt(0);
                        return String.fromCharCode(0xe0 | cc >> 12, 0x80 | cc >> 6 & 0x3F, 0x80 | cc & 0x3f);
                    });
            return strUtf;
        },

        /**
         * Decode utf-8 encoded string back into multi-byte Unicode characters
         *
         * @param {String} strUtf UTF-8 string to be decoded back to Unicode
         * @returns {String} decoded string
         */
        decode: function (strUtf) {
            // note: decode 3-byte chars first as decoded 2-byte strings could appear to be 3-byte char!
            var strUni = strUtf.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, // 3-byte chars
                    function (c) { // (note parentheses for precence)
                        var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
                        return String.fromCharCode(cc);
                    })
                .replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, // 2-byte chars
                    function (c) { // (note parentheses for precence)
                        var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
                        return String.fromCharCode(cc);
                    });
            return strUni;
        }
    };

    while (i < 256) {
        var c = String.fromCharCode(i);
        a256 += c;
        r256[i] = i;
        r64[i] = b64.indexOf(c);
        ++i;
    }

    function code(s, discard, alpha, beta, w1, w2) {
        s = String(s);
        var buffer = 0,
            i = 0,
            length = s.length,
            result = '',
            bitsInBuffer = 0;

        while (i < length) {
            var c = s.charCodeAt(i);
            c = c < 256 ? alpha[c] : -1;

            buffer = (buffer << w1) + c;
            bitsInBuffer += w1;

            while (bitsInBuffer >= w2) {
                bitsInBuffer -= w2;
                var tmp = buffer >> bitsInBuffer;
                result += beta.charAt(tmp);
                buffer ^= tmp << bitsInBuffer;
            }
            ++i;
        }
        if (!discard && bitsInBuffer > 0) result += beta.charAt(buffer << (w2 - bitsInBuffer));
        return result;
    }

    var Plugin = window.base64 = function (dir, input, encode) {
        return input ? Plugin[dir](input, encode) : dir ? null : this;
    };

    Plugin.btoa = Plugin.encode = function (plain, utf8encode) {
        plain = Plugin.raw === false || Plugin.utf8encode || utf8encode ? UTF8.encode(plain) : plain;
        plain = code(plain, false, r256, b64, 8, 6);
        return plain + '===='.slice((plain.length % 4) || 4);
    };

    Plugin.atob = Plugin.decode = function (coded, utf8decode) {
        coded = String(coded).split('=');
        var i = coded.length;
        do {
            --i;
            coded[i] = code(coded[i], true, r64, a256, 6, 8);
        } while (i > 0);
        coded = coded.join('');
        return Plugin.raw === false || Plugin.utf8decode || utf8decode ? UTF8.decode(coded) : coded;
    };


    // 加密方法。没有过滤首尾空格，即没有trim。
    // 可以加密N次，对应的需要解密N次。
    Plugin.encodeBase64 = Plugin.encodeBase64 = function (str, times) {
        var code = "";
        var num = 1;
        if (typeof times != 'undefined' && times != null && times != "") {
            var vt = times + "";
            num = parseInt(vt);
        }
        //$.base64.utf8encode = true;
        code = str;
        for (var i = 0; i < num; i++) {
            code = window.base64.encode(code);
            //code = $.base64.btoa(code);
        }
        return code;
    }

    // 解密方法。没有过滤首尾空格，即没有trim。
    // 可以加密N次，对应的需要解密N次。
    Plugin.decodeBase64 = Plugin.decodeBase64 = function (str, times) {
        var decode = "";
        var num = 1;
        if (typeof times != 'undefined' && times != null && times != "") {
            var vt = times + "";
            num = parseInt(vt);
        }
        //$.base64.utf8encode = true;
        decode = str;
        for (var i = 0; i < num; i++) {
            decode = window.base64.decode(decode);
            //decode = $.base64.atob(decode);
        }
        return decode;
    }

    // 新加密方法。没有过滤首尾空格，即没有trim。
    // 指定加密键值，对应的需要指定相同解密键值。
    // 可以加密N次，对应的需要解密N次。
    Plugin.encodeBase64New = Plugin.encodeBase64New = function (str, key, times) {
        var code = "";
        var num = 1;
        if (typeof times != 'undefined' && times != null && times != "") {
            var vt = times + "";
            num = parseInt(vt);
        }
        if (typeof key == 'undefined' || key == null) {
            key = "";
        }
        //$.base64.utf8encode = true;
        code = str;
        key = "\007" + key;
        for (var i = 0; i < num; i++) {
            code = code + key;
            code = window.base64.encode(code);
            //code = $.base64.btoa(code);
        }
        return code;
    }

    // 新解密方法。没有过滤首尾空格，即没有trim。
    // 指定加密键值，对应的需要指定相同解密键值。
    // 可以加密N次，对应的需要解密N次。
    Plugin.decodeBase64New = Plugin.decodeBase64New = function (str, key, times) {
        var decode = "";
        var num = 1;
        if (typeof times != 'undefined' && times != null && times != "") {
            var vt = times + "";
            num = parseInt(vt);
        }
        if (typeof key == 'undefined' || key == null) {
            key = "";
        }
        //$.base64.utf8encode = true;
        decode = str;
        key = "\007" + key;
        for (var i = 0; i < num; i++) {
            decode = window.base64.decode(decode);
            //decode = $.base64.atob(decode);
            decode = decode.replace(key, "");
        }
        return decode;
    }
}(window));