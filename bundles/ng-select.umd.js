(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs/operators'), require('rxjs'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@ng-select/ng-select', ['exports', '@angular/core', '@angular/common', 'rxjs/operators', 'rxjs', '@angular/forms'], factory) :
    (factory((global['ng-select'] = global['ng-select'] || {}, global['ng-select']['ng-select'] = {}),global.ng.core,global.ng.common,global.rxjs.operators,global.rxjs,global.ng.forms));
}(this, (function (exports,i0,common,operators,rxjs,forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgOptionTemplateDirective = /** @class */ (function () {
        function NgOptionTemplateDirective(template) {
            this.template = template;
        }
        NgOptionTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-option-tmp]' },] }
        ];
        /** @nocollapse */
        NgOptionTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgOptionTemplateDirective;
    }());
    var NgOptgroupTemplateDirective = /** @class */ (function () {
        function NgOptgroupTemplateDirective(template) {
            this.template = template;
        }
        NgOptgroupTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-optgroup-tmp]' },] }
        ];
        /** @nocollapse */
        NgOptgroupTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgOptgroupTemplateDirective;
    }());
    var NgLabelTemplateDirective = /** @class */ (function () {
        function NgLabelTemplateDirective(template) {
            this.template = template;
        }
        NgLabelTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-label-tmp]' },] }
        ];
        /** @nocollapse */
        NgLabelTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgLabelTemplateDirective;
    }());
    var NgMultiLabelTemplateDirective = /** @class */ (function () {
        function NgMultiLabelTemplateDirective(template) {
            this.template = template;
        }
        NgMultiLabelTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-multi-label-tmp]' },] }
        ];
        /** @nocollapse */
        NgMultiLabelTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgMultiLabelTemplateDirective;
    }());
    var NgHeaderTemplateDirective = /** @class */ (function () {
        function NgHeaderTemplateDirective(template) {
            this.template = template;
        }
        NgHeaderTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-header-tmp]' },] }
        ];
        /** @nocollapse */
        NgHeaderTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgHeaderTemplateDirective;
    }());
    var NgFooterTemplateDirective = /** @class */ (function () {
        function NgFooterTemplateDirective(template) {
            this.template = template;
        }
        NgFooterTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-footer-tmp]' },] }
        ];
        /** @nocollapse */
        NgFooterTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgFooterTemplateDirective;
    }());
    var NgNotFoundTemplateDirective = /** @class */ (function () {
        function NgNotFoundTemplateDirective(template) {
            this.template = template;
        }
        NgNotFoundTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-notfound-tmp]' },] }
        ];
        /** @nocollapse */
        NgNotFoundTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgNotFoundTemplateDirective;
    }());
    var NgTypeToSearchTemplateDirective = /** @class */ (function () {
        function NgTypeToSearchTemplateDirective(template) {
            this.template = template;
        }
        NgTypeToSearchTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-typetosearch-tmp]' },] }
        ];
        /** @nocollapse */
        NgTypeToSearchTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgTypeToSearchTemplateDirective;
    }());
    var NgLoadingTextTemplateDirective = /** @class */ (function () {
        function NgLoadingTextTemplateDirective(template) {
            this.template = template;
        }
        NgLoadingTextTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-loadingtext-tmp]' },] }
        ];
        /** @nocollapse */
        NgLoadingTextTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgLoadingTextTemplateDirective;
    }());
    var NgTagTemplateDirective = /** @class */ (function () {
        function NgTagTemplateDirective(template) {
            this.template = template;
        }
        NgTagTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-tag-tmp]' },] }
        ];
        /** @nocollapse */
        NgTagTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgTagTemplateDirective;
    }());
    var NgLoadingSpinnerTemplateDirective = /** @class */ (function () {
        function NgLoadingSpinnerTemplateDirective(template) {
            this.template = template;
        }
        NgLoadingSpinnerTemplateDirective.decorators = [
            { type: i0.Directive, args: [{ selector: '[ng-loadingspinner-tmp]' },] }
        ];
        /** @nocollapse */
        NgLoadingSpinnerTemplateDirective.ctorParameters = function () {
            return [
                { type: i0.TemplateRef }
            ];
        };
        return NgLoadingSpinnerTemplateDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ConsoleService = /** @class */ (function () {
        function ConsoleService() {
        }
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleService.prototype.warn = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                console.warn(message);
            };
        ConsoleService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ ConsoleService.ngInjectableDef = i0.defineInjectable({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
        return ConsoleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function isDefined(value) {
        return value !== undefined && value !== null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isObject(value) {
        return typeof value === 'object' && isDefined(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isPromise(value) {
        return value instanceof Promise;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function isFunction(value) {
        return value instanceof Function;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var diacritics = {
        '\u24B6': 'A',
        '\uFF21': 'A',
        '\u00C0': 'A',
        '\u00C1': 'A',
        '\u00C2': 'A',
        '\u1EA6': 'A',
        '\u1EA4': 'A',
        '\u1EAA': 'A',
        '\u1EA8': 'A',
        '\u00C3': 'A',
        '\u0100': 'A',
        '\u0102': 'A',
        '\u1EB0': 'A',
        '\u1EAE': 'A',
        '\u1EB4': 'A',
        '\u1EB2': 'A',
        '\u0226': 'A',
        '\u01E0': 'A',
        '\u00C4': 'A',
        '\u01DE': 'A',
        '\u1EA2': 'A',
        '\u00C5': 'A',
        '\u01FA': 'A',
        '\u01CD': 'A',
        '\u0200': 'A',
        '\u0202': 'A',
        '\u1EA0': 'A',
        '\u1EAC': 'A',
        '\u1EB6': 'A',
        '\u1E00': 'A',
        '\u0104': 'A',
        '\u023A': 'A',
        '\u2C6F': 'A',
        '\uA732': 'AA',
        '\u00C6': 'AE',
        '\u01FC': 'AE',
        '\u01E2': 'AE',
        '\uA734': 'AO',
        '\uA736': 'AU',
        '\uA738': 'AV',
        '\uA73A': 'AV',
        '\uA73C': 'AY',
        '\u24B7': 'B',
        '\uFF22': 'B',
        '\u1E02': 'B',
        '\u1E04': 'B',
        '\u1E06': 'B',
        '\u0243': 'B',
        '\u0182': 'B',
        '\u0181': 'B',
        '\u24B8': 'C',
        '\uFF23': 'C',
        '\u0106': 'C',
        '\u0108': 'C',
        '\u010A': 'C',
        '\u010C': 'C',
        '\u00C7': 'C',
        '\u1E08': 'C',
        '\u0187': 'C',
        '\u023B': 'C',
        '\uA73E': 'C',
        '\u24B9': 'D',
        '\uFF24': 'D',
        '\u1E0A': 'D',
        '\u010E': 'D',
        '\u1E0C': 'D',
        '\u1E10': 'D',
        '\u1E12': 'D',
        '\u1E0E': 'D',
        '\u0110': 'D',
        '\u018B': 'D',
        '\u018A': 'D',
        '\u0189': 'D',
        '\uA779': 'D',
        '\u01F1': 'DZ',
        '\u01C4': 'DZ',
        '\u01F2': 'Dz',
        '\u01C5': 'Dz',
        '\u24BA': 'E',
        '\uFF25': 'E',
        '\u00C8': 'E',
        '\u00C9': 'E',
        '\u00CA': 'E',
        '\u1EC0': 'E',
        '\u1EBE': 'E',
        '\u1EC4': 'E',
        '\u1EC2': 'E',
        '\u1EBC': 'E',
        '\u0112': 'E',
        '\u1E14': 'E',
        '\u1E16': 'E',
        '\u0114': 'E',
        '\u0116': 'E',
        '\u00CB': 'E',
        '\u1EBA': 'E',
        '\u011A': 'E',
        '\u0204': 'E',
        '\u0206': 'E',
        '\u1EB8': 'E',
        '\u1EC6': 'E',
        '\u0228': 'E',
        '\u1E1C': 'E',
        '\u0118': 'E',
        '\u1E18': 'E',
        '\u1E1A': 'E',
        '\u0190': 'E',
        '\u018E': 'E',
        '\u24BB': 'F',
        '\uFF26': 'F',
        '\u1E1E': 'F',
        '\u0191': 'F',
        '\uA77B': 'F',
        '\u24BC': 'G',
        '\uFF27': 'G',
        '\u01F4': 'G',
        '\u011C': 'G',
        '\u1E20': 'G',
        '\u011E': 'G',
        '\u0120': 'G',
        '\u01E6': 'G',
        '\u0122': 'G',
        '\u01E4': 'G',
        '\u0193': 'G',
        '\uA7A0': 'G',
        '\uA77D': 'G',
        '\uA77E': 'G',
        '\u24BD': 'H',
        '\uFF28': 'H',
        '\u0124': 'H',
        '\u1E22': 'H',
        '\u1E26': 'H',
        '\u021E': 'H',
        '\u1E24': 'H',
        '\u1E28': 'H',
        '\u1E2A': 'H',
        '\u0126': 'H',
        '\u2C67': 'H',
        '\u2C75': 'H',
        '\uA78D': 'H',
        '\u24BE': 'I',
        '\uFF29': 'I',
        '\u00CC': 'I',
        '\u00CD': 'I',
        '\u00CE': 'I',
        '\u0128': 'I',
        '\u012A': 'I',
        '\u012C': 'I',
        '\u0130': 'I',
        '\u00CF': 'I',
        '\u1E2E': 'I',
        '\u1EC8': 'I',
        '\u01CF': 'I',
        '\u0208': 'I',
        '\u020A': 'I',
        '\u1ECA': 'I',
        '\u012E': 'I',
        '\u1E2C': 'I',
        '\u0197': 'I',
        '\u24BF': 'J',
        '\uFF2A': 'J',
        '\u0134': 'J',
        '\u0248': 'J',
        '\u24C0': 'K',
        '\uFF2B': 'K',
        '\u1E30': 'K',
        '\u01E8': 'K',
        '\u1E32': 'K',
        '\u0136': 'K',
        '\u1E34': 'K',
        '\u0198': 'K',
        '\u2C69': 'K',
        '\uA740': 'K',
        '\uA742': 'K',
        '\uA744': 'K',
        '\uA7A2': 'K',
        '\u24C1': 'L',
        '\uFF2C': 'L',
        '\u013F': 'L',
        '\u0139': 'L',
        '\u013D': 'L',
        '\u1E36': 'L',
        '\u1E38': 'L',
        '\u013B': 'L',
        '\u1E3C': 'L',
        '\u1E3A': 'L',
        '\u0141': 'L',
        '\u023D': 'L',
        '\u2C62': 'L',
        '\u2C60': 'L',
        '\uA748': 'L',
        '\uA746': 'L',
        '\uA780': 'L',
        '\u01C7': 'LJ',
        '\u01C8': 'Lj',
        '\u24C2': 'M',
        '\uFF2D': 'M',
        '\u1E3E': 'M',
        '\u1E40': 'M',
        '\u1E42': 'M',
        '\u2C6E': 'M',
        '\u019C': 'M',
        '\u24C3': 'N',
        '\uFF2E': 'N',
        '\u01F8': 'N',
        '\u0143': 'N',
        '\u00D1': 'N',
        '\u1E44': 'N',
        '\u0147': 'N',
        '\u1E46': 'N',
        '\u0145': 'N',
        '\u1E4A': 'N',
        '\u1E48': 'N',
        '\u0220': 'N',
        '\u019D': 'N',
        '\uA790': 'N',
        '\uA7A4': 'N',
        '\u01CA': 'NJ',
        '\u01CB': 'Nj',
        '\u24C4': 'O',
        '\uFF2F': 'O',
        '\u00D2': 'O',
        '\u00D3': 'O',
        '\u00D4': 'O',
        '\u1ED2': 'O',
        '\u1ED0': 'O',
        '\u1ED6': 'O',
        '\u1ED4': 'O',
        '\u00D5': 'O',
        '\u1E4C': 'O',
        '\u022C': 'O',
        '\u1E4E': 'O',
        '\u014C': 'O',
        '\u1E50': 'O',
        '\u1E52': 'O',
        '\u014E': 'O',
        '\u022E': 'O',
        '\u0230': 'O',
        '\u00D6': 'O',
        '\u022A': 'O',
        '\u1ECE': 'O',
        '\u0150': 'O',
        '\u01D1': 'O',
        '\u020C': 'O',
        '\u020E': 'O',
        '\u01A0': 'O',
        '\u1EDC': 'O',
        '\u1EDA': 'O',
        '\u1EE0': 'O',
        '\u1EDE': 'O',
        '\u1EE2': 'O',
        '\u1ECC': 'O',
        '\u1ED8': 'O',
        '\u01EA': 'O',
        '\u01EC': 'O',
        '\u00D8': 'O',
        '\u01FE': 'O',
        '\u0186': 'O',
        '\u019F': 'O',
        '\uA74A': 'O',
        '\uA74C': 'O',
        '\u01A2': 'OI',
        '\uA74E': 'OO',
        '\u0222': 'OU',
        '\u24C5': 'P',
        '\uFF30': 'P',
        '\u1E54': 'P',
        '\u1E56': 'P',
        '\u01A4': 'P',
        '\u2C63': 'P',
        '\uA750': 'P',
        '\uA752': 'P',
        '\uA754': 'P',
        '\u24C6': 'Q',
        '\uFF31': 'Q',
        '\uA756': 'Q',
        '\uA758': 'Q',
        '\u024A': 'Q',
        '\u24C7': 'R',
        '\uFF32': 'R',
        '\u0154': 'R',
        '\u1E58': 'R',
        '\u0158': 'R',
        '\u0210': 'R',
        '\u0212': 'R',
        '\u1E5A': 'R',
        '\u1E5C': 'R',
        '\u0156': 'R',
        '\u1E5E': 'R',
        '\u024C': 'R',
        '\u2C64': 'R',
        '\uA75A': 'R',
        '\uA7A6': 'R',
        '\uA782': 'R',
        '\u24C8': 'S',
        '\uFF33': 'S',
        '\u1E9E': 'S',
        '\u015A': 'S',
        '\u1E64': 'S',
        '\u015C': 'S',
        '\u1E60': 'S',
        '\u0160': 'S',
        '\u1E66': 'S',
        '\u1E62': 'S',
        '\u1E68': 'S',
        '\u0218': 'S',
        '\u015E': 'S',
        '\u2C7E': 'S',
        '\uA7A8': 'S',
        '\uA784': 'S',
        '\u24C9': 'T',
        '\uFF34': 'T',
        '\u1E6A': 'T',
        '\u0164': 'T',
        '\u1E6C': 'T',
        '\u021A': 'T',
        '\u0162': 'T',
        '\u1E70': 'T',
        '\u1E6E': 'T',
        '\u0166': 'T',
        '\u01AC': 'T',
        '\u01AE': 'T',
        '\u023E': 'T',
        '\uA786': 'T',
        '\uA728': 'TZ',
        '\u24CA': 'U',
        '\uFF35': 'U',
        '\u00D9': 'U',
        '\u00DA': 'U',
        '\u00DB': 'U',
        '\u0168': 'U',
        '\u1E78': 'U',
        '\u016A': 'U',
        '\u1E7A': 'U',
        '\u016C': 'U',
        '\u00DC': 'U',
        '\u01DB': 'U',
        '\u01D7': 'U',
        '\u01D5': 'U',
        '\u01D9': 'U',
        '\u1EE6': 'U',
        '\u016E': 'U',
        '\u0170': 'U',
        '\u01D3': 'U',
        '\u0214': 'U',
        '\u0216': 'U',
        '\u01AF': 'U',
        '\u1EEA': 'U',
        '\u1EE8': 'U',
        '\u1EEE': 'U',
        '\u1EEC': 'U',
        '\u1EF0': 'U',
        '\u1EE4': 'U',
        '\u1E72': 'U',
        '\u0172': 'U',
        '\u1E76': 'U',
        '\u1E74': 'U',
        '\u0244': 'U',
        '\u24CB': 'V',
        '\uFF36': 'V',
        '\u1E7C': 'V',
        '\u1E7E': 'V',
        '\u01B2': 'V',
        '\uA75E': 'V',
        '\u0245': 'V',
        '\uA760': 'VY',
        '\u24CC': 'W',
        '\uFF37': 'W',
        '\u1E80': 'W',
        '\u1E82': 'W',
        '\u0174': 'W',
        '\u1E86': 'W',
        '\u1E84': 'W',
        '\u1E88': 'W',
        '\u2C72': 'W',
        '\u24CD': 'X',
        '\uFF38': 'X',
        '\u1E8A': 'X',
        '\u1E8C': 'X',
        '\u24CE': 'Y',
        '\uFF39': 'Y',
        '\u1EF2': 'Y',
        '\u00DD': 'Y',
        '\u0176': 'Y',
        '\u1EF8': 'Y',
        '\u0232': 'Y',
        '\u1E8E': 'Y',
        '\u0178': 'Y',
        '\u1EF6': 'Y',
        '\u1EF4': 'Y',
        '\u01B3': 'Y',
        '\u024E': 'Y',
        '\u1EFE': 'Y',
        '\u24CF': 'Z',
        '\uFF3A': 'Z',
        '\u0179': 'Z',
        '\u1E90': 'Z',
        '\u017B': 'Z',
        '\u017D': 'Z',
        '\u1E92': 'Z',
        '\u1E94': 'Z',
        '\u01B5': 'Z',
        '\u0224': 'Z',
        '\u2C7F': 'Z',
        '\u2C6B': 'Z',
        '\uA762': 'Z',
        '\u24D0': 'a',
        '\uFF41': 'a',
        '\u1E9A': 'a',
        '\u00E0': 'a',
        '\u00E1': 'a',
        '\u00E2': 'a',
        '\u1EA7': 'a',
        '\u1EA5': 'a',
        '\u1EAB': 'a',
        '\u1EA9': 'a',
        '\u00E3': 'a',
        '\u0101': 'a',
        '\u0103': 'a',
        '\u1EB1': 'a',
        '\u1EAF': 'a',
        '\u1EB5': 'a',
        '\u1EB3': 'a',
        '\u0227': 'a',
        '\u01E1': 'a',
        '\u00E4': 'a',
        '\u01DF': 'a',
        '\u1EA3': 'a',
        '\u00E5': 'a',
        '\u01FB': 'a',
        '\u01CE': 'a',
        '\u0201': 'a',
        '\u0203': 'a',
        '\u1EA1': 'a',
        '\u1EAD': 'a',
        '\u1EB7': 'a',
        '\u1E01': 'a',
        '\u0105': 'a',
        '\u2C65': 'a',
        '\u0250': 'a',
        '\uA733': 'aa',
        '\u00E6': 'ae',
        '\u01FD': 'ae',
        '\u01E3': 'ae',
        '\uA735': 'ao',
        '\uA737': 'au',
        '\uA739': 'av',
        '\uA73B': 'av',
        '\uA73D': 'ay',
        '\u24D1': 'b',
        '\uFF42': 'b',
        '\u1E03': 'b',
        '\u1E05': 'b',
        '\u1E07': 'b',
        '\u0180': 'b',
        '\u0183': 'b',
        '\u0253': 'b',
        '\u24D2': 'c',
        '\uFF43': 'c',
        '\u0107': 'c',
        '\u0109': 'c',
        '\u010B': 'c',
        '\u010D': 'c',
        '\u00E7': 'c',
        '\u1E09': 'c',
        '\u0188': 'c',
        '\u023C': 'c',
        '\uA73F': 'c',
        '\u2184': 'c',
        '\u24D3': 'd',
        '\uFF44': 'd',
        '\u1E0B': 'd',
        '\u010F': 'd',
        '\u1E0D': 'd',
        '\u1E11': 'd',
        '\u1E13': 'd',
        '\u1E0F': 'd',
        '\u0111': 'd',
        '\u018C': 'd',
        '\u0256': 'd',
        '\u0257': 'd',
        '\uA77A': 'd',
        '\u01F3': 'dz',
        '\u01C6': 'dz',
        '\u24D4': 'e',
        '\uFF45': 'e',
        '\u00E8': 'e',
        '\u00E9': 'e',
        '\u00EA': 'e',
        '\u1EC1': 'e',
        '\u1EBF': 'e',
        '\u1EC5': 'e',
        '\u1EC3': 'e',
        '\u1EBD': 'e',
        '\u0113': 'e',
        '\u1E15': 'e',
        '\u1E17': 'e',
        '\u0115': 'e',
        '\u0117': 'e',
        '\u00EB': 'e',
        '\u1EBB': 'e',
        '\u011B': 'e',
        '\u0205': 'e',
        '\u0207': 'e',
        '\u1EB9': 'e',
        '\u1EC7': 'e',
        '\u0229': 'e',
        '\u1E1D': 'e',
        '\u0119': 'e',
        '\u1E19': 'e',
        '\u1E1B': 'e',
        '\u0247': 'e',
        '\u025B': 'e',
        '\u01DD': 'e',
        '\u24D5': 'f',
        '\uFF46': 'f',
        '\u1E1F': 'f',
        '\u0192': 'f',
        '\uA77C': 'f',
        '\u24D6': 'g',
        '\uFF47': 'g',
        '\u01F5': 'g',
        '\u011D': 'g',
        '\u1E21': 'g',
        '\u011F': 'g',
        '\u0121': 'g',
        '\u01E7': 'g',
        '\u0123': 'g',
        '\u01E5': 'g',
        '\u0260': 'g',
        '\uA7A1': 'g',
        '\u1D79': 'g',
        '\uA77F': 'g',
        '\u24D7': 'h',
        '\uFF48': 'h',
        '\u0125': 'h',
        '\u1E23': 'h',
        '\u1E27': 'h',
        '\u021F': 'h',
        '\u1E25': 'h',
        '\u1E29': 'h',
        '\u1E2B': 'h',
        '\u1E96': 'h',
        '\u0127': 'h',
        '\u2C68': 'h',
        '\u2C76': 'h',
        '\u0265': 'h',
        '\u0195': 'hv',
        '\u24D8': 'i',
        '\uFF49': 'i',
        '\u00EC': 'i',
        '\u00ED': 'i',
        '\u00EE': 'i',
        '\u0129': 'i',
        '\u012B': 'i',
        '\u012D': 'i',
        '\u00EF': 'i',
        '\u1E2F': 'i',
        '\u1EC9': 'i',
        '\u01D0': 'i',
        '\u0209': 'i',
        '\u020B': 'i',
        '\u1ECB': 'i',
        '\u012F': 'i',
        '\u1E2D': 'i',
        '\u0268': 'i',
        '\u0131': 'i',
        '\u24D9': 'j',
        '\uFF4A': 'j',
        '\u0135': 'j',
        '\u01F0': 'j',
        '\u0249': 'j',
        '\u24DA': 'k',
        '\uFF4B': 'k',
        '\u1E31': 'k',
        '\u01E9': 'k',
        '\u1E33': 'k',
        '\u0137': 'k',
        '\u1E35': 'k',
        '\u0199': 'k',
        '\u2C6A': 'k',
        '\uA741': 'k',
        '\uA743': 'k',
        '\uA745': 'k',
        '\uA7A3': 'k',
        '\u24DB': 'l',
        '\uFF4C': 'l',
        '\u0140': 'l',
        '\u013A': 'l',
        '\u013E': 'l',
        '\u1E37': 'l',
        '\u1E39': 'l',
        '\u013C': 'l',
        '\u1E3D': 'l',
        '\u1E3B': 'l',
        '\u017F': 'l',
        '\u0142': 'l',
        '\u019A': 'l',
        '\u026B': 'l',
        '\u2C61': 'l',
        '\uA749': 'l',
        '\uA781': 'l',
        '\uA747': 'l',
        '\u01C9': 'lj',
        '\u24DC': 'm',
        '\uFF4D': 'm',
        '\u1E3F': 'm',
        '\u1E41': 'm',
        '\u1E43': 'm',
        '\u0271': 'm',
        '\u026F': 'm',
        '\u24DD': 'n',
        '\uFF4E': 'n',
        '\u01F9': 'n',
        '\u0144': 'n',
        '\u00F1': 'n',
        '\u1E45': 'n',
        '\u0148': 'n',
        '\u1E47': 'n',
        '\u0146': 'n',
        '\u1E4B': 'n',
        '\u1E49': 'n',
        '\u019E': 'n',
        '\u0272': 'n',
        '\u0149': 'n',
        '\uA791': 'n',
        '\uA7A5': 'n',
        '\u01CC': 'nj',
        '\u24DE': 'o',
        '\uFF4F': 'o',
        '\u00F2': 'o',
        '\u00F3': 'o',
        '\u00F4': 'o',
        '\u1ED3': 'o',
        '\u1ED1': 'o',
        '\u1ED7': 'o',
        '\u1ED5': 'o',
        '\u00F5': 'o',
        '\u1E4D': 'o',
        '\u022D': 'o',
        '\u1E4F': 'o',
        '\u014D': 'o',
        '\u1E51': 'o',
        '\u1E53': 'o',
        '\u014F': 'o',
        '\u022F': 'o',
        '\u0231': 'o',
        '\u00F6': 'o',
        '\u022B': 'o',
        '\u1ECF': 'o',
        '\u0151': 'o',
        '\u01D2': 'o',
        '\u020D': 'o',
        '\u020F': 'o',
        '\u01A1': 'o',
        '\u1EDD': 'o',
        '\u1EDB': 'o',
        '\u1EE1': 'o',
        '\u1EDF': 'o',
        '\u1EE3': 'o',
        '\u1ECD': 'o',
        '\u1ED9': 'o',
        '\u01EB': 'o',
        '\u01ED': 'o',
        '\u00F8': 'o',
        '\u01FF': 'o',
        '\u0254': 'o',
        '\uA74B': 'o',
        '\uA74D': 'o',
        '\u0275': 'o',
        '\u01A3': 'oi',
        '\u0223': 'ou',
        '\uA74F': 'oo',
        '\u24DF': 'p',
        '\uFF50': 'p',
        '\u1E55': 'p',
        '\u1E57': 'p',
        '\u01A5': 'p',
        '\u1D7D': 'p',
        '\uA751': 'p',
        '\uA753': 'p',
        '\uA755': 'p',
        '\u24E0': 'q',
        '\uFF51': 'q',
        '\u024B': 'q',
        '\uA757': 'q',
        '\uA759': 'q',
        '\u24E1': 'r',
        '\uFF52': 'r',
        '\u0155': 'r',
        '\u1E59': 'r',
        '\u0159': 'r',
        '\u0211': 'r',
        '\u0213': 'r',
        '\u1E5B': 'r',
        '\u1E5D': 'r',
        '\u0157': 'r',
        '\u1E5F': 'r',
        '\u024D': 'r',
        '\u027D': 'r',
        '\uA75B': 'r',
        '\uA7A7': 'r',
        '\uA783': 'r',
        '\u24E2': 's',
        '\uFF53': 's',
        '\u00DF': 's',
        '\u015B': 's',
        '\u1E65': 's',
        '\u015D': 's',
        '\u1E61': 's',
        '\u0161': 's',
        '\u1E67': 's',
        '\u1E63': 's',
        '\u1E69': 's',
        '\u0219': 's',
        '\u015F': 's',
        '\u023F': 's',
        '\uA7A9': 's',
        '\uA785': 's',
        '\u1E9B': 's',
        '\u24E3': 't',
        '\uFF54': 't',
        '\u1E6B': 't',
        '\u1E97': 't',
        '\u0165': 't',
        '\u1E6D': 't',
        '\u021B': 't',
        '\u0163': 't',
        '\u1E71': 't',
        '\u1E6F': 't',
        '\u0167': 't',
        '\u01AD': 't',
        '\u0288': 't',
        '\u2C66': 't',
        '\uA787': 't',
        '\uA729': 'tz',
        '\u24E4': 'u',
        '\uFF55': 'u',
        '\u00F9': 'u',
        '\u00FA': 'u',
        '\u00FB': 'u',
        '\u0169': 'u',
        '\u1E79': 'u',
        '\u016B': 'u',
        '\u1E7B': 'u',
        '\u016D': 'u',
        '\u00FC': 'u',
        '\u01DC': 'u',
        '\u01D8': 'u',
        '\u01D6': 'u',
        '\u01DA': 'u',
        '\u1EE7': 'u',
        '\u016F': 'u',
        '\u0171': 'u',
        '\u01D4': 'u',
        '\u0215': 'u',
        '\u0217': 'u',
        '\u01B0': 'u',
        '\u1EEB': 'u',
        '\u1EE9': 'u',
        '\u1EEF': 'u',
        '\u1EED': 'u',
        '\u1EF1': 'u',
        '\u1EE5': 'u',
        '\u1E73': 'u',
        '\u0173': 'u',
        '\u1E77': 'u',
        '\u1E75': 'u',
        '\u0289': 'u',
        '\u24E5': 'v',
        '\uFF56': 'v',
        '\u1E7D': 'v',
        '\u1E7F': 'v',
        '\u028B': 'v',
        '\uA75F': 'v',
        '\u028C': 'v',
        '\uA761': 'vy',
        '\u24E6': 'w',
        '\uFF57': 'w',
        '\u1E81': 'w',
        '\u1E83': 'w',
        '\u0175': 'w',
        '\u1E87': 'w',
        '\u1E85': 'w',
        '\u1E98': 'w',
        '\u1E89': 'w',
        '\u2C73': 'w',
        '\u24E7': 'x',
        '\uFF58': 'x',
        '\u1E8B': 'x',
        '\u1E8D': 'x',
        '\u24E8': 'y',
        '\uFF59': 'y',
        '\u1EF3': 'y',
        '\u00FD': 'y',
        '\u0177': 'y',
        '\u1EF9': 'y',
        '\u0233': 'y',
        '\u1E8F': 'y',
        '\u00FF': 'y',
        '\u1EF7': 'y',
        '\u1E99': 'y',
        '\u1EF5': 'y',
        '\u01B4': 'y',
        '\u024F': 'y',
        '\u1EFF': 'y',
        '\u24E9': 'z',
        '\uFF5A': 'z',
        '\u017A': 'z',
        '\u1E91': 'z',
        '\u017C': 'z',
        '\u017E': 'z',
        '\u1E93': 'z',
        '\u1E95': 'z',
        '\u01B6': 'z',
        '\u0225': 'z',
        '\u0240': 'z',
        '\u2C6C': 'z',
        '\uA763': 'z',
        '\u0386': '\u0391',
        '\u0388': '\u0395',
        '\u0389': '\u0397',
        '\u038A': '\u0399',
        '\u03AA': '\u0399',
        '\u038C': '\u039F',
        '\u038E': '\u03A5',
        '\u03AB': '\u03A5',
        '\u038F': '\u03A9',
        '\u03AC': '\u03B1',
        '\u03AD': '\u03B5',
        '\u03AE': '\u03B7',
        '\u03AF': '\u03B9',
        '\u03CA': '\u03B9',
        '\u0390': '\u03B9',
        '\u03CC': '\u03BF',
        '\u03CD': '\u03C5',
        '\u03CB': '\u03C5',
        '\u03B0': '\u03C5',
        '\u03C9': '\u03C9',
        '\u03C2': '\u03C3'
    };
    /**
     * @param {?} text
     * @return {?}
     */
    function stripSpecialChars(text) {
        /** @type {?} */
        var match = function (a) {
            return diacritics[a] || a;
        };
        return text.replace(/[^\u0000-\u007E]/g, match);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function newId() {
        // First character is an 'a', it's good practice to tag id to begin with a letter
        return 'axxxxxxxxxxx'.replace(/[x]/g, function (_) {
            /** @type {?} */
            var val = Math.random() * 16 | 0;
            return val.toString(16);
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ItemsList = /** @class */ (function () {
        function ItemsList(_ngSelect, _selectionModel) {
            this._ngSelect = _ngSelect;
            this._selectionModel = _selectionModel;
            this._items = [];
            this._filteredItems = [];
            this._markedIndex = -1;
        }
        Object.defineProperty(ItemsList.prototype, "items", {
            get: /**
             * @return {?}
             */ function () {
                return this._items;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "filteredItems", {
            get: /**
             * @return {?}
             */ function () {
                return this._filteredItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "markedIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this._markedIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "selectedItems", {
            get: /**
             * @return {?}
             */ function () {
                return this._selectionModel.value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "markedItem", {
            get: /**
             * @return {?}
             */ function () {
                return this._filteredItems[this._markedIndex];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "noItemsToSelect", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "maxItemsSelected", {
            get: /**
             * @return {?}
             */ function () {
                return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ItemsList.prototype, "lastSelectedItem", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var i = this.selectedItems.length - 1;
                for (; i >= 0; i--) {
                    /** @type {?} */
                    var item = this.selectedItems[i];
                    if (!item.disabled) {
                        return item;
                    }
                }
                return null;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} items
         * @return {?}
         */
        ItemsList.prototype.setItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                var _this = this;
                this._items = items.map(function (item, index) { return _this.mapItem(item, index); });
                if (this._ngSelect.groupBy) {
                    this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
                    this._items = this._flatten(this._groups);
                }
                else {
                    this._groups = new Map();
                    this._groups.set(undefined, this._items);
                }
                this._filteredItems = __spread(this._items);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (item.selected || this.maxItemsSelected) {
                    return;
                }
                /** @type {?} */
                var multiple = this._ngSelect.multiple;
                if (!multiple) {
                    this.clearSelected();
                }
                this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
                if (this._ngSelect.hideSelected) {
                    this._hideSelected(item);
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.unselect = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item.selected) {
                    return;
                }
                this._selectionModel.unselect(item, this._ngSelect.multiple);
                if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
                    this._showSelected(item);
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        ItemsList.prototype.findItem = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                /** @type {?} */
                var findBy;
                if (this._ngSelect.compareWith) {
                    findBy = function (item) { return _this._ngSelect.compareWith(item.value, value); };
                }
                else if (this._ngSelect.bindValue) {
                    findBy = function (item) { return !item.children && _this.resolveNested(item.value, _this._ngSelect.bindValue) === value; };
                }
                else {
                    findBy = function (item) {
                        return item.value === value ||
                            !item.children && item.label && item.label === _this.resolveNested(value, _this._ngSelect.bindLabel);
                    };
                }
                return this._items.find(function (item) { return findBy(item); });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.addItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                /** @type {?} */
                var option = this.mapItem(item, this._items.length);
                this._items.push(option);
                this._filteredItems.push(option);
                return option;
            };
        /**
         * @param {?=} keepDisabled
         * @return {?}
         */
        ItemsList.prototype.clearSelected = /**
         * @param {?=} keepDisabled
         * @return {?}
         */
            function (keepDisabled) {
                if (keepDisabled === void 0) {
                    keepDisabled = false;
                }
                this._selectionModel.clear(keepDisabled);
                this._items.forEach(function (item) {
                    item.selected = keepDisabled && item.selected && item.disabled;
                    item.marked = false;
                });
                if (this._ngSelect.hideSelected) {
                    this.resetFilteredItems();
                }
            };
        /**
         * @param {?} term
         * @return {?}
         */
        ItemsList.prototype.findByLabel = /**
         * @param {?} term
         * @return {?}
         */
            function (term) {
                term = stripSpecialChars(term).toLocaleLowerCase();
                return this.filteredItems.find(function (item) {
                    /** @type {?} */
                    var label = stripSpecialChars(item.label).toLocaleLowerCase();
                    return label.substr(0, term.length) === term;
                });
            };
        /**
         * @param {?} term
         * @return {?}
         */
        ItemsList.prototype.filter = /**
         * @param {?} term
         * @return {?}
         */
            function (term) {
                var e_1, _a;
                if (!term) {
                    this.resetFilteredItems();
                    return;
                }
                this._filteredItems = [];
                term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
                /** @type {?} */
                var match = this._ngSelect.searchFn || this._defaultSearchFn;
                /** @type {?} */
                var hideSelected = this._ngSelect.hideSelected;
                var _loop_1 = function (key) {
                    var e_2, _a, _b;
                    /** @type {?} */
                    var matchedItems = [];
                    try {
                        for (var _c = __values(this_1._groups.get(key)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var item = _d.value;
                            if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                                continue;
                            }
                            /** @type {?} */
                            var searchItem = this_1._ngSelect.searchFn ? item.value : item;
                            if (match(term, searchItem)) {
                                matchedItems.push(item);
                            }
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return))
                                _a.call(_c);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                    if (matchedItems.length > 0) {
                        var _e = __read(matchedItems.slice(-1), 1), last_1 = _e[0];
                        if (last_1.parent) {
                            /** @type {?} */
                            var head = this_1._items.find(function (x) { return x === last_1.parent; });
                            this_1._filteredItems.push(head);
                        }
                        (_b = this_1._filteredItems).push.apply(_b, __spread(matchedItems));
                    }
                };
                var this_1 = this;
                try {
                    for (var _b = __values(Array.from(this._groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _loop_1(key);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.resetFilteredItems = /**
         * @return {?}
         */
            function () {
                if (this._filteredItems.length === this._items.length) {
                    return;
                }
                if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
                    this._filteredItems = this._items.filter(function (x) { return !x.selected; });
                }
                else {
                    this._filteredItems = this._items;
                }
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.unmarkItem = /**
         * @return {?}
         */
            function () {
                this._markedIndex = -1;
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.markNextItem = /**
         * @return {?}
         */
            function () {
                this._stepToItem(+1);
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.markPreviousItem = /**
         * @return {?}
         */
            function () {
                this._stepToItem(-1);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype.markItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._markedIndex = this._filteredItems.indexOf(item);
            };
        /**
         * @param {?=} markDefault
         * @return {?}
         */
        ItemsList.prototype.markSelectedOrDefault = /**
         * @param {?=} markDefault
         * @return {?}
         */
            function (markDefault) {
                if (this._filteredItems.length === 0) {
                    return;
                }
                /** @type {?} */
                var indexOfLastSelected = this._ngSelect.hideSelected ? -1 : this._filteredItems.indexOf(this.lastSelectedItem);
                if (this.lastSelectedItem && indexOfLastSelected > -1) {
                    this._markedIndex = indexOfLastSelected;
                }
                else {
                    if (this._ngSelect.excludeGroupsFromDefaultSelection) {
                        this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled && !x.children; }) : -1;
                    }
                    else {
                        this._markedIndex = markDefault ? this.filteredItems.findIndex(function (x) { return !x.disabled; }) : -1;
                    }
                }
            };
        /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */
        ItemsList.prototype.resolveNested = /**
         * @param {?} option
         * @param {?} key
         * @return {?}
         */
            function (option, key) {
                if (!isObject(option)) {
                    return option;
                }
                if (key.indexOf('.') === -1) {
                    return option[key];
                }
                else {
                    /** @type {?} */
                    var keys = key.split('.');
                    /** @type {?} */
                    var value = option;
                    for (var i = 0, len = keys.length; i < len; ++i) {
                        if (value == null) {
                            return null;
                        }
                        value = value[keys[i]];
                    }
                    return value;
                }
            };
        /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        ItemsList.prototype.mapItem = /**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
            function (item, index) {
                /** @type {?} */
                var label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
                /** @type {?} */
                var value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
                return {
                    index: index,
                    label: isDefined(label) ? label.toString() : '',
                    value: value,
                    disabled: item.disabled,
                    htmlId: newId(),
                };
            };
        /**
         * @return {?}
         */
        ItemsList.prototype.mapSelectedItems = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var e_3, _a;
                /** @type {?} */
                var multiple = this._ngSelect.multiple;
                try {
                    for (var _b = __values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var selected = _c.value;
                        /** @type {?} */
                        var value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
                        /** @type {?} */
                        var item = isDefined(value) ? this.findItem(value) : null;
                        this._selectionModel.unselect(selected, multiple);
                        this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
                if (this._ngSelect.hideSelected) {
                    this._filteredItems = this.filteredItems.filter(function (x) { return _this.selectedItems.indexOf(x) === -1; });
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype._showSelected = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                var e_4, _a;
                this._filteredItems.push(item);
                if (item.parent) {
                    /** @type {?} */
                    var parent_1 = item.parent;
                    /** @type {?} */
                    var parentExists = this._filteredItems.find(function (x) { return x === parent_1; });
                    if (!parentExists) {
                        this._filteredItems.push(parent_1);
                    }
                }
                else if (item.children) {
                    try {
                        for (var _b = __values(item.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var child = _c.value;
                            child.selected = false;
                            this._filteredItems.push(child);
                        }
                    }
                    catch (e_4_1) {
                        e_4 = { error: e_4_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_4)
                                throw e_4.error;
                        }
                    }
                }
                this._filteredItems = __spread(this._filteredItems.sort(function (a, b) { return (a.index - b.index); }));
            };
        /**
         * @param {?} item
         * @return {?}
         */
        ItemsList.prototype._hideSelected = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this._filteredItems = this._filteredItems.filter(function (x) { return x !== item; });
                if (item.parent) {
                    /** @type {?} */
                    var children = item.parent.children;
                    if (children.every(function (x) { return x.selected; })) {
                        this._filteredItems = this._filteredItems.filter(function (x) { return x !== item.parent; });
                    }
                }
                else if (item.children) {
                    this._filteredItems = this.filteredItems.filter(function (x) { return x.parent !== item; });
                }
            };
        /**
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */
        ItemsList.prototype._defaultSearchFn = /**
         * @param {?} search
         * @param {?} opt
         * @return {?}
         */
            function (search, opt) {
                /** @type {?} */
                var label = stripSpecialChars(opt.label).toLocaleLowerCase();
                return label.indexOf(search) > -1;
            };
        /**
         * @param {?} steps
         * @return {?}
         */
        ItemsList.prototype._getNextItemIndex = /**
         * @param {?} steps
         * @return {?}
         */
            function (steps) {
                if (steps > 0) {
                    return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
                }
                return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
            };
        /**
         * @param {?} steps
         * @return {?}
         */
        ItemsList.prototype._stepToItem = /**
         * @param {?} steps
         * @return {?}
         */
            function (steps) {
                if (this._filteredItems.length === 0 || this._filteredItems.every(function (x) { return x.disabled; })) {
                    return;
                }
                this._markedIndex = this._getNextItemIndex(steps);
                if (this.markedItem.disabled) {
                    this._stepToItem(steps);
                }
            };
        /**
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */
        ItemsList.prototype._groupBy = /**
         * @param {?} items
         * @param {?} prop
         * @return {?}
         */
            function (items, prop) {
                var _this = this;
                var e_5, _a, e_6, _b;
                /** @type {?} */
                var groups = new Map();
                if (items.length === 0) {
                    return groups;
                }
                // Check if items are already grouped by given key.
                if (Array.isArray(items[0].value[ /** @type {?} */(prop)])) {
                    try {
                        for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
                            var item = items_1_1.value;
                            /** @type {?} */
                            var children = (item.value[ /** @type {?} */(prop)] || []).map(function (x, index) { return _this.mapItem(x, index); });
                            groups.set(item, children);
                        }
                    }
                    catch (e_5_1) {
                        e_5 = { error: e_5_1 };
                    }
                    finally {
                        try {
                            if (items_1_1 && !items_1_1.done && (_a = items_1.return))
                                _a.call(items_1);
                        }
                        finally {
                            if (e_5)
                                throw e_5.error;
                        }
                    }
                    return groups;
                }
                /** @type {?} */
                var isFnKey = isFunction(this._ngSelect.groupBy);
                /** @type {?} */
                var keyFn = function (item) {
                    /** @type {?} */
                    var key = isFnKey ? ( /** @type {?} */(prop))(item.value) : item.value[ /** @type {?} */(prop)];
                    return isDefined(key) ? key : undefined;
                };
                try {
                    // Group items by key.
                    for (var items_2 = __values(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
                        var item = items_2_1.value;
                        /** @type {?} */
                        var key = keyFn(item);
                        /** @type {?} */
                        var group = groups.get(key);
                        if (group) {
                            group.push(item);
                        }
                        else {
                            groups.set(key, [item]);
                        }
                    }
                }
                catch (e_6_1) {
                    e_6 = { error: e_6_1 };
                }
                finally {
                    try {
                        if (items_2_1 && !items_2_1.done && (_b = items_2.return))
                            _b.call(items_2);
                    }
                    finally {
                        if (e_6)
                            throw e_6.error;
                    }
                }
                return groups;
            };
        /**
         * @param {?} groups
         * @return {?}
         */
        ItemsList.prototype._flatten = /**
         * @param {?} groups
         * @return {?}
         */
            function (groups) {
                var e_7, _a;
                /** @type {?} */
                var isGroupByFn = isFunction(this._ngSelect.groupBy);
                /** @type {?} */
                var items = [];
                /** @type {?} */
                var withoutGroup = groups.get(undefined) || [];
                items.push.apply(items, __spread(withoutGroup));
                /** @type {?} */
                var i = withoutGroup.length;
                var _loop_2 = function (key) {
                    if (!isDefined(key)) {
                        return "continue";
                    }
                    /** @type {?} */
                    var isObjectKey = isObject(key);
                    /** @type {?} */
                    var parent_2 = {
                        label: isObjectKey ? '' : /** @type {?} */ (key),
                        children: undefined,
                        parent: null,
                        index: i++,
                        disabled: !this_2._ngSelect.selectableGroup,
                        htmlId: newId(),
                    };
                    /** @type {?} */
                    var groupKey = isGroupByFn ? this_2._ngSelect.bindLabel : /** @type {?} */ (this_2._ngSelect.groupBy);
                    /** @type {?} */
                    var groupValue = this_2._ngSelect.groupValue || (function () {
                        var _a;
                        if (isObjectKey) {
                            return ( /** @type {?} */(key)).value;
                        }
                        return _a = {}, _a[groupKey] = key, _a;
                    });
                    /** @type {?} */
                    var children = groups.get(key).map(function (x) {
                        x.parent = parent_2;
                        x.children = undefined;
                        x.index = i++;
                        return x;
                    });
                    parent_2.children = children;
                    parent_2.value = groupValue(key, children.map(function (x) { return x.value; }));
                    items.push(parent_2);
                    items.push.apply(items, __spread(children));
                };
                var this_2 = this;
                try {
                    for (var _b = __values(Array.from(groups.keys())), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _loop_2(key);
                    }
                }
                catch (e_7_1) {
                    e_7 = { error: e_7_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_7)
                            throw e_7.error;
                    }
                }
                return items;
            };
        return ItemsList;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var KeyCode = {
        Tab: 9,
        Enter: 13,
        Esc: 27,
        Space: 32,
        ArrowUp: 38,
        ArrowDown: 40,
        Backspace: 8,
    };
    KeyCode[KeyCode.Tab] = 'Tab';
    KeyCode[KeyCode.Enter] = 'Enter';
    KeyCode[KeyCode.Esc] = 'Esc';
    KeyCode[KeyCode.Space] = 'Space';
    KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
    KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
    KeyCode[KeyCode.Backspace] = 'Backspace';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var WindowService = /** @class */ (function () {
        function WindowService() {
        }
        /**
         * @param {?} fn
         * @return {?}
         */
        WindowService.prototype.requestAnimationFrame = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                return window.requestAnimationFrame(fn);
            };
        /**
         * @param {?} handler
         * @param {?} timeout
         * @return {?}
         */
        WindowService.prototype.setTimeout = /**
         * @param {?} handler
         * @param {?} timeout
         * @return {?}
         */
            function (handler, timeout) {
                return window.setTimeout(handler, timeout);
            };
        WindowService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ WindowService.ngInjectableDef = i0.defineInjectable({ factory: function WindowService_Factory() { return new WindowService(); }, token: WindowService, providedIn: "root" });
        return WindowService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var VirtualScrollService = /** @class */ (function () {
        function VirtualScrollService() {
        }
        /**
         * @param {?} d
         * @param {?} dropdownEl
         * @param {?} bufferAmount
         * @return {?}
         */
        VirtualScrollService.prototype.calculateItems = /**
         * @param {?} d
         * @param {?} dropdownEl
         * @param {?} bufferAmount
         * @return {?}
         */
            function (d, dropdownEl, bufferAmount) {
                /** @type {?} */
                var scrollHeight = d.childHeight * d.itemsLength;
                if (dropdownEl.scrollTop > scrollHeight) {
                    dropdownEl.scrollTop = scrollHeight;
                }
                /** @type {?} */
                var scrollTop = Math.max(0, dropdownEl.scrollTop);
                /** @type {?} */
                var indexByScrollTop = scrollTop / scrollHeight * d.itemsLength;
                /** @type {?} */
                var end = Math.min(d.itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerCol + 1));
                /** @type {?} */
                var maxStartEnd = end;
                /** @type {?} */
                var maxStart = Math.max(0, maxStartEnd - d.itemsPerCol - 1);
                /** @type {?} */
                var start = Math.min(maxStart, Math.floor(indexByScrollTop));
                /** @type {?} */
                var topPadding = d.childHeight * Math.ceil(start) - (d.childHeight * Math.min(start, bufferAmount));
                topPadding = !isNaN(topPadding) ? topPadding : 0;
                start = !isNaN(start) ? start : -1;
                end = !isNaN(end) ? end : -1;
                start -= bufferAmount;
                start = Math.max(0, start);
                end += bufferAmount;
                end = Math.min(d.itemsLength, end);
                return {
                    topPadding: topPadding,
                    scrollHeight: scrollHeight,
                    start: start,
                    end: end
                };
            };
        /**
         * @param {?} itemsLength
         * @param {?} index
         * @param {?} panelEl
         * @param {?} contentEl
         * @return {?}
         */
        VirtualScrollService.prototype.calculateDimensions = /**
         * @param {?} itemsLength
         * @param {?} index
         * @param {?} panelEl
         * @param {?} contentEl
         * @return {?}
         */
            function (itemsLength, index, panelEl, contentEl) {
                /** @type {?} */
                var panelRect = panelEl.getBoundingClientRect();
                /** @type {?} */
                var itemRect = contentEl.children[index] ? contentEl.children[index].getBoundingClientRect() : {
                    width: panelRect.width,
                    height: panelRect.height,
                    top: 0,
                };
                /** @type {?} */
                var itemsPerCol = Math.max(1, Math.floor(panelRect.height / itemRect.height));
                return {
                    itemsLength: itemsLength,
                    viewWidth: panelRect.width,
                    viewHeight: panelRect.height,
                    childWidth: itemRect.width,
                    childHeight: itemRect.height,
                    itemsPerCol: itemsPerCol,
                };
            };
        VirtualScrollService.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ VirtualScrollService.ngInjectableDef = i0.defineInjectable({ factory: function VirtualScrollService_Factory() { return new VirtualScrollService(); }, token: VirtualScrollService, providedIn: "root" });
        return VirtualScrollService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOP_CSS_CLASS = 'ng-select-top';
    /** @type {?} */
    var BOTTOM_CSS_CLASS = 'ng-select-bottom';
    var NgDropdownPanelComponent = /** @class */ (function () {
        function NgDropdownPanelComponent(_renderer, _zone, _virtualScrollService, _window, _elementRef, _document) {
            this._renderer = _renderer;
            this._zone = _zone;
            this._virtualScrollService = _virtualScrollService;
            this._window = _window;
            this._document = _document;
            this.items = [];
            this.position = 'auto';
            this.bufferAmount = 4;
            this.virtualScroll = false;
            this.filterValue = null;
            this.update = new i0.EventEmitter();
            this.scroll = new i0.EventEmitter();
            this.scrollToEnd = new i0.EventEmitter();
            this.outsideClick = new i0.EventEmitter();
            this._destroy$ = new rxjs.Subject();
            this._startupLoop = true;
            this._isScrolledToMarked = false;
            this._scrollToEndFired = false;
            this._disposeScrollListener = function () { };
            this._disposeDocumentResizeListener = function () { };
            this._dropdown = _elementRef.nativeElement;
        }
        Object.defineProperty(NgDropdownPanelComponent.prototype, "currentPosition", {
            get: /**
             * @return {?}
             */ function () {
                return this._currentPosition;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} $event
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.handleMousedown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                /** @type {?} */
                var target = /** @type {?} */ ($event.target);
                if (target.tagName === 'INPUT') {
                    return;
                }
                $event.preventDefault();
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._select = this._dropdown.parentElement;
                this._handleScroll();
                if (this._document) {
                    rxjs.merge(rxjs.fromEvent(this._document, 'touchstart', { capture: true }), rxjs.fromEvent(this._document, 'mousedown', { capture: true }))
                        .pipe(operators.takeUntil(this._destroy$))
                        .subscribe(function ($event) { return _this._handleOutsideClick($event); });
                }
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["items"]) {
                    this._isScrolledToMarked = false;
                    this._handleItemsChange(changes["items"]);
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._disposeDocumentResizeListener();
                this._disposeScrollListener();
                this._destroy$.next();
                this._destroy$.complete();
                this._destroy$.unsubscribe();
                if (this.appendTo) {
                    this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._whenContentReady().then(function () {
                    if (_this._destroy$.closed) {
                        return;
                    }
                    if (_this.appendTo) {
                        _this._appendDropdown();
                        _this._handleDocumentResize();
                    }
                    _this.updateDropdownPosition();
                });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.refresh = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(function (resolve) {
                    _this._zone.runOutsideAngular(function () {
                        _this._window.requestAnimationFrame(function () {
                            _this._updateItems().then(resolve);
                        });
                    });
                });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.scrollInto = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item) {
                    return;
                }
                /** @type {?} */
                var index = this.items.indexOf(item);
                if (index < 0 || index >= this.items.length) {
                    return;
                }
                /** @type {?} */
                var d = this._calculateDimensions(this.virtualScroll ? 0 : index);
                /** @type {?} */
                var scrollEl = this.scrollElementRef.nativeElement;
                /** @type {?} */
                var buffer = Math.floor(d.viewHeight / d.childHeight) - 1;
                if (this.virtualScroll) {
                    scrollEl.scrollTop = (index * d.childHeight) - (d.childHeight * Math.min(index, buffer));
                }
                else {
                    /** @type {?} */
                    var contentEl = this.contentElementRef.nativeElement;
                    /** @type {?} */
                    var childrenHeight = Array.from(contentEl.children).slice(0, index).reduce(function (c, n) { return c + n.clientHeight; }, 0);
                    scrollEl.scrollTop = childrenHeight - (d.childHeight * Math.min(index, buffer));
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.scrollIntoTag = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var el = this.scrollElementRef.nativeElement;
                /** @type {?} */
                var d = this._calculateDimensions();
                el.scrollTop = d.childHeight * (d.itemsLength + 1);
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype.updateDropdownPosition = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._window.setTimeout(function () {
                    _this._currentPosition = _this._calculateCurrentPosition(_this._dropdown);
                    if (_this._currentPosition === 'top') {
                        _this._renderer.addClass(_this._dropdown, TOP_CSS_CLASS);
                        _this._renderer.removeClass(_this._dropdown, BOTTOM_CSS_CLASS);
                        _this._renderer.addClass(_this._select, TOP_CSS_CLASS);
                        _this._renderer.removeClass(_this._select, BOTTOM_CSS_CLASS);
                    }
                    else {
                        _this._renderer.addClass(_this._dropdown, BOTTOM_CSS_CLASS);
                        _this._renderer.removeClass(_this._dropdown, TOP_CSS_CLASS);
                        _this._renderer.addClass(_this._select, BOTTOM_CSS_CLASS);
                        _this._renderer.removeClass(_this._select, TOP_CSS_CLASS);
                    }
                    if (_this.appendTo) {
                        _this._updateAppendedDropdownPosition();
                    }
                    _this._dropdown.style.opacity = '1';
                }, 0);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleOutsideClick = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this._select.contains($event.target)) {
                    return;
                }
                if (this._dropdown.contains($event.target)) {
                    return;
                }
                /** @type {?} */
                var path = $event.path || ($event.composedPath && $event.composedPath());
                if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
                    return;
                }
                this.outsideClick.emit();
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleScroll = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._disposeScrollListener = this._renderer.listen(this.scrollElementRef.nativeElement, 'scroll', function () {
                    _this.refresh();
                    _this._fireScrollToEnd();
                });
            };
        /**
         * @param {?} items
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleItemsChange = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                var _this = this;
                this._scrollToEndFired = false;
                this._previousStart = undefined;
                this._previousEnd = undefined;
                if (items !== undefined && items.previousValue === undefined ||
                    (items.previousValue !== undefined && items.previousValue.length === 0)) {
                    this._startupLoop = true;
                }
                this.items = items.currentValue || [];
                this.refresh().then(function () {
                    if (_this.appendTo && _this._currentPosition === 'top') {
                        _this._updateAppendedDropdownPosition();
                    }
                });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updateItems = /**
         * @return {?}
         */
            function () {
                var _this = this;
                i0.NgZone.assertNotInAngularZone();
                if (!this.virtualScroll) {
                    this._zone.run(function () {
                        _this.update.emit(_this.items.slice());
                        _this._scrollToMarked();
                    });
                    return Promise.resolve();
                }
                /** @type {?} */
                var loop = function (resolve) {
                    /** @type {?} */
                    var d = _this._calculateDimensions();
                    /** @type {?} */
                    var res = _this._virtualScrollService.calculateItems(d, _this.scrollElementRef.nativeElement, _this.bufferAmount || 0);
                    ( /** @type {?} */(_this.paddingElementRef.nativeElement)).style.height = res.scrollHeight + "px";
                    ( /** @type {?} */(_this.contentElementRef.nativeElement)).style.transform = 'translateY(' + res.topPadding + 'px)';
                    if (res.start !== _this._previousStart || res.end !== _this._previousEnd) {
                        _this._zone.run(function () {
                            _this.update.emit(_this.items.slice(res.start, res.end));
                            _this.scroll.emit({ start: res.start, end: res.end });
                        });
                        _this._previousStart = res.start;
                        _this._previousEnd = res.end;
                        if (_this._startupLoop === true) {
                            loop(resolve);
                        }
                    }
                    else if (_this._startupLoop === true) {
                        _this._startupLoop = false;
                        _this._scrollToMarked();
                        resolve();
                    }
                };
                return new Promise(function (resolve) { return loop(resolve); });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._fireScrollToEnd = /**
         * @return {?}
         */
            function () {
                if (this._scrollToEndFired) {
                    return;
                }
                /** @type {?} */
                var scroll = this.scrollElementRef.nativeElement;
                /** @type {?} */
                var padding = this.virtualScroll ?
                    this.paddingElementRef.nativeElement :
                    this.contentElementRef.nativeElement;
                if (scroll.scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
                    this.scrollToEnd.emit();
                    this._scrollToEndFired = true;
                }
            };
        /**
         * @param {?=} index
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._calculateDimensions = /**
         * @param {?=} index
         * @return {?}
         */
            function (index) {
                if (index === void 0) {
                    index = 0;
                }
                return this._virtualScrollService.calculateDimensions(this.items.length, index, this.scrollElementRef.nativeElement, this.contentElementRef.nativeElement);
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._handleDocumentResize = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.appendTo) {
                    return;
                }
                this._disposeDocumentResizeListener = this._renderer.listen('window', 'resize', function () {
                    _this._updateAppendedDropdownPosition();
                });
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._scrollToMarked = /**
         * @return {?}
         */
            function () {
                if (this._isScrolledToMarked || !this.markedItem) {
                    return;
                }
                this._isScrolledToMarked = true;
                this.scrollInto(this.markedItem);
            };
        /**
         * @param {?} dropdownEl
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._calculateCurrentPosition = /**
         * @param {?} dropdownEl
         * @return {?}
         */
            function (dropdownEl) {
                if (this.position !== 'auto') {
                    return this.position;
                }
                /** @type {?} */
                var selectRect = this._select.getBoundingClientRect();
                /** @type {?} */
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                /** @type {?} */
                var offsetTop = selectRect.top + window.pageYOffset;
                /** @type {?} */
                var height = selectRect.height;
                /** @type {?} */
                var dropdownHeight = dropdownEl.getBoundingClientRect().height;
                if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
                    return 'top';
                }
                else {
                    return 'bottom';
                }
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._appendDropdown = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = document.querySelector(this.appendTo);
                if (!parent) {
                    throw new Error("appendTo selector " + this.appendTo + " did not found any parent element");
                }
                parent.appendChild(this._dropdown);
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._updateAppendedDropdownPosition = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parent = document.querySelector(this.appendTo) || document.body;
                this._dropdown.style.display = 'none';
                /** @type {?} */
                var selectRect = this._select.getBoundingClientRect();
                /** @type {?} */
                var boundingRect = parent.getBoundingClientRect();
                this._dropdown.style.display = '';
                /** @type {?} */
                var offsetTop = selectRect.top - boundingRect.top;
                /** @type {?} */
                var offsetLeft = selectRect.left - boundingRect.left;
                /** @type {?} */
                var topDelta = this._currentPosition === 'bottom' ? selectRect.height : -this._dropdown.clientHeight;
                this._dropdown.style.top = offsetTop + topDelta + 'px';
                this._dropdown.style.bottom = 'auto';
                this._dropdown.style.left = offsetLeft + 'px';
                this._dropdown.style.width = selectRect.width + 'px';
                this._dropdown.style.minWidth = selectRect.width + 'px';
            };
        /**
         * @return {?}
         */
        NgDropdownPanelComponent.prototype._whenContentReady = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.items.length === 0) {
                    return Promise.resolve();
                }
                /** @type {?} */
                var ready = function (resolve) {
                    /** @type {?} */
                    var ngOption = _this._dropdown.querySelector('.ng-option');
                    if (ngOption) {
                        resolve();
                        return;
                    }
                    _this._zone.runOutsideAngular(function () {
                        setTimeout(function () { return ready(resolve); }, 5);
                    });
                };
                return new Promise(function (resolve) { return ready(resolve); });
            };
        NgDropdownPanelComponent.decorators = [
            { type: i0.Component, args: [{
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None,
                        selector: 'ng-dropdown-panel',
                        template: "\n        <div *ngIf=\"headerTemplate\" class=\"ng-dropdown-header\">\n            <ng-container [ngTemplateOutlet]=\"headerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n        <div #scroll class=\"ng-dropdown-panel-items scroll-host\">\n            <div #padding [class.total-padding]=\"virtualScroll\"></div>\n            <div #content [class.scrollable-content]=\"virtualScroll && items.length > 0\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div *ngIf=\"footerTemplate\" class=\"ng-dropdown-footer\">\n            <ng-container [ngTemplateOutlet]=\"footerTemplate\" [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\"></ng-container>\n        </div>\n    "
                    }] }
        ];
        /** @nocollapse */
        NgDropdownPanelComponent.ctorParameters = function () {
            return [
                { type: i0.Renderer2 },
                { type: i0.NgZone },
                { type: VirtualScrollService },
                { type: WindowService },
                { type: i0.ElementRef },
                { type: undefined, decorators: [{ type: i0.Optional }, { type: i0.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
        NgDropdownPanelComponent.propDecorators = {
            items: [{ type: i0.Input }],
            markedItem: [{ type: i0.Input }],
            position: [{ type: i0.Input }],
            appendTo: [{ type: i0.Input }],
            bufferAmount: [{ type: i0.Input }],
            virtualScroll: [{ type: i0.Input }],
            headerTemplate: [{ type: i0.Input }],
            footerTemplate: [{ type: i0.Input }],
            filterValue: [{ type: i0.Input }],
            update: [{ type: i0.Output }],
            scroll: [{ type: i0.Output }],
            scrollToEnd: [{ type: i0.Output }],
            outsideClick: [{ type: i0.Output }],
            contentElementRef: [{ type: i0.ViewChild, args: ['content', { read: i0.ElementRef },] }],
            scrollElementRef: [{ type: i0.ViewChild, args: ['scroll', { read: i0.ElementRef },] }],
            paddingElementRef: [{ type: i0.ViewChild, args: ['padding', { read: i0.ElementRef },] }],
            handleMousedown: [{ type: i0.HostListener, args: ['mousedown', ['$event'],] }]
        };
        return NgDropdownPanelComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgOptionComponent = /** @class */ (function () {
        function NgOptionComponent(elementRef) {
            this.elementRef = elementRef;
            this.stateChange$ = new rxjs.Subject();
            this._disabled = false;
        }
        Object.defineProperty(NgOptionComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () { return this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) { this._disabled = this._isDisabled(value); },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} changes
         * @return {?}
         */
        NgOptionComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["disabled"]) {
                    this.stateChange$.next({
                        value: this.value,
                        disabled: this._disabled
                    });
                }
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgOptionComponent.prototype._isDisabled = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return value != null && "" + value !== 'false';
            };
        NgOptionComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ng-option',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        NgOptionComponent.ctorParameters = function () {
            return [
                { type: i0.ElementRef }
            ];
        };
        NgOptionComponent.propDecorators = {
            value: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }]
        };
        return NgOptionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgSelectConfig = /** @class */ (function () {
        function NgSelectConfig() {
            this.notFoundText = 'No items found';
            this.typeToSearchText = 'Type to search';
            this.addTagText = 'Add item';
            this.loadingText = 'Loading...';
            this.clearAllText = 'Clear all';
            this.disableVirtualScroll = true;
            this.openOnEnter = true;
        }
        NgSelectConfig.decorators = [
            { type: i0.Injectable, args: [{ providedIn: 'root' },] }
        ];
        /** @nocollapse */ NgSelectConfig.ngInjectableDef = i0.defineInjectable({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
        return NgSelectConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SELECTION_MODEL_FACTORY = new i0.InjectionToken('ng-select-selection-model');
    var NgSelectComponent = /** @class */ (function () {
        function NgSelectComponent(classes, tabIndex, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
            var _this = this;
            this.classes = classes;
            this.tabIndex = tabIndex;
            this.autoFocus = autoFocus;
            this._cd = _cd;
            this._console = _console;
            this.markFirst = true;
            this.dropdownPosition = 'auto';
            this.loading = false;
            this.closeOnSelect = true;
            this.hideSelected = false;
            this.selectOnTab = false;
            this.bufferAmount = 4;
            this.selectableGroup = false;
            this.selectableGroupAsModel = true;
            this.searchFn = null;
            this.trackByFn = null;
            this.excludeGroupsFromDefaultSelection = false;
            this.clearOnBackspace = true;
            this.readonly = false;
            this.labelForId = null;
            this.autoCorrect = 'off';
            this.autoCapitalize = 'off';
            this.multiple = false;
            this.addTag = false;
            this.searchable = true;
            this.clearable = true;
            this.isOpen = false;
            // output events
            this.blurEvent = new i0.EventEmitter();
            this.focusEvent = new i0.EventEmitter();
            this.changeEvent = new i0.EventEmitter();
            this.openEvent = new i0.EventEmitter();
            this.closeEvent = new i0.EventEmitter();
            this.searchEvent = new i0.EventEmitter();
            this.clearEvent = new i0.EventEmitter();
            this.addEvent = new i0.EventEmitter();
            this.removeEvent = new i0.EventEmitter();
            this.scroll = new i0.EventEmitter();
            this.scrollToEnd = new i0.EventEmitter();
            this.disabled = false;
            this.viewPortItems = [];
            this.filterValue = null;
            this.dropdownId = newId();
            this._items = [];
            this._defaultLabel = 'label';
            this._pressedKeys = [];
            this._destroy$ = new rxjs.Subject();
            this._keyPress$ = new rxjs.Subject();
            this._onChange = function (_) { };
            this._onTouched = function () { };
            this.clearItem = function (item) {
                /** @type {?} */
                var option = _this.selectedItems.find(function (x) { return x.value === item; });
                _this.unselect(option);
            };
            this.trackByOption = function (_, item) {
                if (_this.trackByFn) {
                    return _this.trackByFn(item.value);
                }
                return null;
            };
            this._mergeGlobalConfig(config);
            this.itemsList = new ItemsList(this, newSelectionModel());
            this.element = _elementRef.nativeElement;
        }
        Object.defineProperty(NgSelectComponent.prototype, "items", {
            get: /**
             * @return {?}
             */ function () { return this._items; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._itemsAreUsed = true;
                this._items = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "compareWith", {
            get: /**
             * @return {?}
             */ function () { return this._compareWith; },
            set: /**
             * @param {?} fn
             * @return {?}
             */ function (fn) {
                if (!isFunction(fn)) {
                    throw Error('`compareWith` must be a function.');
                }
                this._compareWith = fn;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "clearSearchOnAdd", {
            get: /**
             * @return {?}
             */ function () { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._clearSearchOnAdd = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "filtered", {
            get: /**
             * @return {?}
             */ function () { return !!this.filterValue && this.searchable; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "selectedItems", {
            get: /**
             * @return {?}
             */ function () {
                return this.itemsList.selectedItems;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "selectedValues", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectedItems.map(function (x) { return x.value; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "hasValue", {
            get: /**
             * @return {?}
             */ function () {
                return this.selectedItems.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgSelectComponent.prototype, "currentPanelPosition", {
            get: /**
             * @return {?}
             */ function () {
                if (this.dropdownPanel) {
                    return this.dropdownPanel.currentPosition;
                }
                return undefined;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._handleKeyPresses();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes["multiple"]) {
                    this.itemsList.clearSelected();
                }
                if (changes["items"]) {
                    this._setItems(changes["items"].currentValue || []);
                }
                if (changes["isOpen"]) {
                    this._manualOpen = isDefined(changes["isOpen"].currentValue);
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                if (!this._itemsAreUsed) {
                    this._setItemsFromNgOptions();
                }
                if (isDefined(this.autoFocus)) {
                    this.focus();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._destroy$.next();
                this._destroy$.complete();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.handleKeyDown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (KeyCode[$event.which]) {
                    switch ($event.which) {
                        case KeyCode.ArrowDown:
                            this._handleArrowDown($event);
                            break;
                        case KeyCode.ArrowUp:
                            this._handleArrowUp($event);
                            break;
                        case KeyCode.Space:
                            this._handleSpace($event);
                            break;
                        case KeyCode.Enter:
                            this._handleEnter($event);
                            break;
                        case KeyCode.Tab:
                            this._handleTab($event);
                            break;
                        case KeyCode.Esc:
                            this.close();
                            $event.preventDefault();
                            break;
                        case KeyCode.Backspace:
                            this._handleBackspace();
                            break;
                    }
                }
                else if ($event.key && $event.key.length === 1) {
                    this._keyPress$.next($event.key.toLocaleLowerCase());
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.handleMousedown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                /** @type {?} */
                var target = /** @type {?} */ ($event.target);
                if (target.tagName !== 'INPUT') {
                    $event.preventDefault();
                }
                if (target.classList.contains('ng-clear-wrapper')) {
                    this.handleClearClick();
                    return;
                }
                if (target.classList.contains('ng-arrow-wrapper')) {
                    this.handleArrowClick();
                    return;
                }
                if (target.classList.contains('ng-value-icon')) {
                    return;
                }
                if (!this.focused) {
                    this.focus();
                }
                if (this.searchable) {
                    this.open();
                }
                else {
                    this.toggle();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.handleArrowClick = /**
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    this.close();
                }
                else {
                    this.open();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.handleClearClick = /**
         * @return {?}
         */
            function () {
                if (this.hasValue) {
                    this.itemsList.clearSelected(true);
                    this._updateNgModel();
                }
                this._clearSearch();
                this.focus();
                if (this._isTypeahead) {
                    this.typeahead.next(null);
                }
                this.clearEvent.emit();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.clearModel = /**
         * @return {?}
         */
            function () {
                if (!this.clearable) {
                    return;
                }
                this.itemsList.clearSelected();
                this._updateNgModel();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgSelectComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.itemsList.clearSelected();
                this._handleWriteValue(value);
                this._cd.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgSelectComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
                this._cd.markForCheck();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.toggle = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen) {
                    this.open();
                }
                else {
                    this.close();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.open = /**
         * @return {?}
         */
            function () {
                if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen || this.readonly) {
                    return;
                }
                if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
                    return;
                }
                this.isOpen = true;
                this.itemsList.markSelectedOrDefault(this.markFirst);
                this.openEvent.emit();
                if (!this.filterValue) {
                    this.focus();
                }
                this.detectChanges();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.close = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen || this._manualOpen) {
                    return;
                }
                this.isOpen = false;
                this._clearSearch();
                this._onTouched();
                this.closeEvent.emit();
                this._cd.markForCheck();
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.toggleItem = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item || item.disabled || this.disabled) {
                    return;
                }
                if (this.multiple && item.selected) {
                    this.unselect(item);
                }
                else {
                    this.select(item);
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.select = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item.selected) {
                    this.itemsList.select(item);
                    if (this.clearSearchOnAdd) {
                        this._clearSearch();
                    }
                    if (this.multiple) {
                        this.addEvent.emit(item.value);
                    }
                    this._updateNgModel();
                }
                if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
                    this.close();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                this.filterInput.nativeElement.focus();
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.unselect = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item) {
                    return;
                }
                this.itemsList.unselect(item);
                this.focus();
                this._updateNgModel();
                this.removeEvent.emit(item);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.selectTag = /**
         * @return {?}
         */
            function () {
                var _this = this;
                var _a;
                /** @type {?} */
                var tag;
                if (isFunction(this.addTag)) {
                    tag = ( /** @type {?} */(this.addTag))(this.filterValue);
                }
                else {
                    tag = this._primitive ? this.filterValue : (_a = {}, _a[this.bindLabel] = this.filterValue, _a);
                }
                /** @type {?} */
                var handleTag = function (item) { return _this._isTypeahead || !_this.isOpen ? _this.itemsList.mapItem(item, null) : _this.itemsList.addItem(item); };
                if (isPromise(tag)) {
                    tag.then(function (item) { return _this.select(handleTag(item)); }).catch(function () { });
                }
                else if (tag) {
                    this.select(handleTag(tag));
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showClear = /**
         * @return {?}
         */
            function () {
                return this.clearable && (this.hasValue || this.filterValue) && !this.disabled;
            };
        Object.defineProperty(NgSelectComponent.prototype, "showAddTag", {
            get: /**
             * @return {?}
             */ function () {
                if (!this.filterValue) {
                    return false;
                }
                /** @type {?} */
                var term = this.filterValue.toLowerCase();
                return this.addTag &&
                    (!this.itemsList.filteredItems.some(function (x) { return x.label.toLowerCase() === term; }) &&
                        (!this.hideSelected && this.isOpen || !this.selectedItems.some(function (x) { return x.label.toLowerCase() === term; }))) &&
                    !this.loading;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showNoItemsFound = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var empty = this.itemsList.filteredItems.length === 0;
                return ((empty && !this._isTypeahead && !this.loading) ||
                    (empty && this._isTypeahead && this.filterValue && !this.loading)) &&
                    !this.showAddTag;
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.showTypeToSearch = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var empty = this.itemsList.filteredItems.length === 0;
                return empty && this._isTypeahead && !this.filterValue && !this.loading;
            };
        /**
         * @param {?} term
         * @return {?}
         */
        NgSelectComponent.prototype.filter = /**
         * @param {?} term
         * @return {?}
         */
            function (term) {
                this.filterValue = term;
                if (this._isTypeahead) {
                    this.typeahead.next(this.filterValue);
                }
                else {
                    this.itemsList.filter(this.filterValue);
                    if (this.isOpen) {
                        this.itemsList.markSelectedOrDefault(this.markFirst);
                    }
                }
                this.searchEvent.emit({ term: term, items: this.itemsList.filteredItems.map(function (x) { return x.value; }) });
                this.open();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.onInputFocus = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.focused || this.readonly) {
                    return;
                }
                this.element.classList.add('ng-select-focused');
                this.focusEvent.emit($event);
                this.focused = true;
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype.onInputBlur = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.element.classList.remove('ng-select-focused');
                this.blurEvent.emit($event);
                if (!this.isOpen && !this.disabled) {
                    this._onTouched();
                }
                this.focused = false;
            };
        /**
         * @param {?} item
         * @return {?}
         */
        NgSelectComponent.prototype.onItemHover = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (item.disabled) {
                    return;
                }
                this.itemsList.markItem(item);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.detectChanges = /**
         * @return {?}
         */
            function () {
                if (!( /** @type {?} */(this._cd)).destroyed) {
                    this._cd.detectChanges();
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype.updateDropdownPosition = /**
         * @return {?}
         */
            function () {
                if (this.dropdownPanel) {
                    this.dropdownPanel.updateDropdownPosition();
                }
            };
        /**
         * @param {?} items
         * @return {?}
         */
        NgSelectComponent.prototype._setItems = /**
         * @param {?} items
         * @return {?}
         */
            function (items) {
                /** @type {?} */
                var firstItem = items[0];
                this.bindLabel = this.bindLabel || this._defaultLabel;
                this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
                this.itemsList.setItems(items);
                if (items.length > 0 && this.hasValue) {
                    this.itemsList.mapSelectedItems();
                }
                if (this.isOpen && isDefined(this.filterValue) && !this._isTypeahead) {
                    this.itemsList.filter(this.filterValue);
                }
                if (this._isTypeahead || this.isOpen) {
                    this.itemsList.markSelectedOrDefault(this.markFirst);
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._setItemsFromNgOptions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var handleNgOptions = function (options) {
                    _this.items = options.map(function (option) {
                        return ({
                            $ngOptionValue: option.value,
                            $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                            disabled: option.disabled
                        });
                    });
                    _this.itemsList.setItems(_this.items);
                    if (_this.hasValue) {
                        _this.itemsList.mapSelectedItems();
                    }
                    _this.detectChanges();
                };
                /** @type {?} */
                var handleOptionChange = function () {
                    /** @type {?} */
                    var changedOrDestroyed = rxjs.merge(_this.ngOptions.changes, _this._destroy$);
                    rxjs.merge.apply(void 0, __spread(_this.ngOptions.map(function (option) { return option.stateChange$; }))).pipe(operators.takeUntil(changedOrDestroyed))
                        .subscribe(function (option) {
                        /** @type {?} */
                        var item = _this.itemsList.findItem(option.value);
                        item.disabled = option.disabled;
                        _this._cd.markForCheck();
                    });
                };
                this.ngOptions.changes
                    .pipe(operators.startWith(this.ngOptions), operators.takeUntil(this._destroy$))
                    .subscribe(function (options) {
                    _this.bindLabel = _this._defaultLabel;
                    handleNgOptions(options);
                    handleOptionChange();
                });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NgSelectComponent.prototype._isValidWriteValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
                    return false;
                }
                /** @type {?} */
                var validateBinding = function (item) {
                    if (!isDefined(_this.compareWith) && isObject(item) && _this.bindValue) {
                        _this._console.warn("Binding object(" + JSON.stringify(item) + ") with bindValue is not allowed.");
                        return false;
                    }
                    return true;
                };
                if (this.multiple) {
                    if (!Array.isArray(value)) {
                        this._console.warn('Multiple select ngModel should be array.');
                        return false;
                    }
                    return value.every(function (item) { return validateBinding(item); });
                }
                else {
                    return validateBinding(value);
                }
            };
        /**
         * @param {?} ngModel
         * @return {?}
         */
        NgSelectComponent.prototype._handleWriteValue = /**
         * @param {?} ngModel
         * @return {?}
         */
            function (ngModel) {
                var _this = this;
                if (!this._isValidWriteValue(ngModel)) {
                    return;
                }
                /** @type {?} */
                var select = function (val) {
                    var _a;
                    /** @type {?} */
                    var item = _this.itemsList.findItem(val);
                    if (item) {
                        _this.itemsList.select(item);
                    }
                    else {
                        /** @type {?} */
                        var isValObject = isObject(val);
                        /** @type {?} */
                        var isPrimitive = !isValObject && !_this.bindValue;
                        if ((isValObject || isPrimitive)) {
                            _this.itemsList.select(_this.itemsList.mapItem(val, null));
                        }
                        else if (_this.bindValue) {
                            item = (_a = {},
                                _a[_this.bindLabel] = null,
                                _a[_this.bindValue] = val,
                                _a);
                            _this.itemsList.select(_this.itemsList.mapItem(item, null));
                        }
                    }
                };
                if (this.multiple) {
                    ( /** @type {?} */(ngModel)).forEach(function (item) { return select(item); });
                }
                else {
                    select(ngModel);
                }
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._handleKeyPresses = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.searchable) {
                    return;
                }
                this._keyPress$
                    .pipe(operators.takeUntil(this._destroy$), operators.tap(function (letter) { return _this._pressedKeys.push(letter); }), operators.debounceTime(200), operators.filter(function () { return _this._pressedKeys.length > 0; }), operators.map(function () { return _this._pressedKeys.join(''); }))
                    .subscribe(function (term) {
                    /** @type {?} */
                    var item = _this.itemsList.findByLabel(term);
                    if (item) {
                        if (_this.isOpen) {
                            _this.itemsList.markItem(item);
                            _this._cd.markForCheck();
                        }
                        else {
                            _this.select(item);
                        }
                    }
                    _this._pressedKeys = [];
                });
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._updateNgModel = /**
         * @return {?}
         */
            function () {
                var e_1, _a;
                /** @type {?} */
                var model = [];
                try {
                    for (var _b = __values(this.selectedItems), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var item = _c.value;
                        if (this.bindValue) {
                            /** @type {?} */
                            var value = null;
                            if (item.children) {
                                /** @type {?} */
                                var groupKey = this.groupValue ? this.bindValue : /** @type {?} */ (this.groupBy);
                                value = item.value[groupKey || /** @type {?} */ (this.groupBy)];
                            }
                            else {
                                value = this.itemsList.resolveNested(item.value, this.bindValue);
                            }
                            model.push(value);
                        }
                        else {
                            model.push(item.value);
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                /** @type {?} */
                var selected = this.selectedItems.map(function (x) { return x.value; });
                if (this.multiple) {
                    this._onChange(model);
                    this.changeEvent.emit(selected);
                }
                else {
                    this._onChange(isDefined(model[0]) ? model[0] : null);
                    this.changeEvent.emit(selected[0]);
                }
                this._cd.markForCheck();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._clearSearch = /**
         * @return {?}
         */
            function () {
                if (!this.filterValue) {
                    return;
                }
                this.filterValue = null;
                this.itemsList.resetFilteredItems();
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._scrollToMarked = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen || !this.dropdownPanel) {
                    return;
                }
                this.dropdownPanel.scrollInto(this.itemsList.markedItem);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._scrollToTag = /**
         * @return {?}
         */
            function () {
                if (!this.isOpen || !this.dropdownPanel) {
                    return;
                }
                this.dropdownPanel.scrollIntoTag();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleTab = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.isOpen === false && !isDefined(this.addTag)) {
                    return;
                }
                if (this.selectOnTab) {
                    if (this.itemsList.markedItem) {
                        this.toggleItem(this.itemsList.markedItem);
                        $event.preventDefault();
                    }
                    else if (this.showAddTag) {
                        this.selectTag();
                        $event.preventDefault();
                    }
                    else {
                        this.close();
                    }
                }
                else {
                    this.close();
                }
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleEnter = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.isOpen || this._manualOpen) {
                    if (this.itemsList.markedItem) {
                        this.toggleItem(this.itemsList.markedItem);
                    }
                    else if (this.showAddTag) {
                        this.selectTag();
                    }
                }
                else if (this.openOnEnter) {
                    this.open();
                }
                else {
                    return;
                }
                $event.preventDefault();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleSpace = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this.isOpen || this._manualOpen) {
                    return;
                }
                this.open();
                $event.preventDefault();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleArrowDown = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (this._nextItemIsTag(+1)) {
                    this.itemsList.unmarkItem();
                    this._scrollToTag();
                }
                else {
                    this.itemsList.markNextItem();
                    this._scrollToMarked();
                }
                this.open();
                $event.preventDefault();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NgSelectComponent.prototype._handleArrowUp = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                if (!this.isOpen) {
                    return;
                }
                if (this._nextItemIsTag(-1)) {
                    this.itemsList.unmarkItem();
                    this._scrollToTag();
                }
                else {
                    this.itemsList.markPreviousItem();
                    this._scrollToMarked();
                }
                $event.preventDefault();
            };
        /**
         * @param {?} nextStep
         * @return {?}
         */
        NgSelectComponent.prototype._nextItemIsTag = /**
         * @param {?} nextStep
         * @return {?}
         */
            function (nextStep) {
                /** @type {?} */
                var nextIndex = this.itemsList.markedIndex + nextStep;
                return this.addTag && this.filterValue
                    && this.itemsList.markedItem
                    && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
            };
        /**
         * @return {?}
         */
        NgSelectComponent.prototype._handleBackspace = /**
         * @return {?}
         */
            function () {
                if (this.filterValue || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
                    return;
                }
                if (this.multiple) {
                    this.unselect(this.itemsList.lastSelectedItem);
                }
                else {
                    this.clearModel();
                }
            };
        Object.defineProperty(NgSelectComponent.prototype, "_isTypeahead", {
            get: /**
             * @return {?}
             */ function () {
                return this.typeahead && this.typeahead.observers.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} config
         * @return {?}
         */
        NgSelectComponent.prototype._mergeGlobalConfig = /**
         * @param {?} config
         * @return {?}
         */
            function (config) {
                this.placeholder = this.placeholder || config.placeholder;
                this.notFoundText = this.notFoundText || config.notFoundText;
                this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
                this.addTagText = this.addTagText || config.addTagText;
                this.loadingText = this.loadingText || config.loadingText;
                this.clearAllText = this.clearAllText || config.clearAllText;
                this.virtualScroll = isDefined(this.virtualScroll)
                    ? this.virtualScroll
                    : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
                this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
            };
        NgSelectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ng-select',
                        template: "<div (mousedown)=\"handleMousedown($event)\" [class.ng-has-value]=\"hasValue\" class=\"ng-select-container\">\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\">{{item.label}}</span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #filterInput\n                   type=\"text\"\n                   [attr.autocomplete]=\"labelForId ? 'off' : dropdownId\"\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [attr.autocorrect]=\"autoCorrect\"\n                   [attr.autocapitalize]=\"autoCapitalize\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected || readonly\"\n                   [disabled]=\"disabled\"\n                   [value]=\"filterValue ? filterValue : ''\"\n                   (input)=\"filter(filterInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defautlLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defautlLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n    class=\"ng-dropdown-panel\"\n    [virtualScroll]=\"virtualScroll\"\n    [bufferAmount]=\"bufferAmount\"\n    [appendTo]=\"appendTo\"\n    [position]=\"dropdownPosition\"\n    [headerTemplate]=\"headerTemplate\"\n    [footerTemplate]=\"footerTemplate\"\n    [filterValue]=\"filterValue\"\n    [items]=\"itemsList.filteredItems\"\n    [markedItem]=\"itemsList.markedItem\"\n    (update)=\"viewPortItems = $event\"\n    (scroll)=\"scroll.emit($event)\"\n    (scrollToEnd)=\"scrollToEnd.emit($event)\"\n    (outsideClick)=\"close()\"\n    [class.ng-select-multiple]=\"multiple\"\n    [ngClass]=\"appendTo ? classes : null\"\n    [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\">{{item.label}}</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{filterValue}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: filterValue }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                        providers: [{
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return NgSelectComponent; }),
                                multi: true
                            }],
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        host: {
                            'role': 'listbox',
                            'class': 'ng-select',
                            '[class.ng-select-single]': '!multiple',
                        },
                        styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{color:#333;cursor:default;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
                    }] }
        ];
        /** @nocollapse */
        NgSelectComponent.ctorParameters = function () {
            return [
                { type: String, decorators: [{ type: i0.Attribute, args: ['class',] }] },
                { type: String, decorators: [{ type: i0.Attribute, args: ['tabindex',] }] },
                { type: undefined, decorators: [{ type: i0.Attribute, args: ['autofocus',] }] },
                { type: NgSelectConfig },
                { type: undefined, decorators: [{ type: i0.Inject, args: [SELECTION_MODEL_FACTORY,] }] },
                { type: i0.ElementRef },
                { type: i0.ChangeDetectorRef },
                { type: ConsoleService }
            ];
        };
        NgSelectComponent.propDecorators = {
            bindLabel: [{ type: i0.Input }],
            bindValue: [{ type: i0.Input }],
            markFirst: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            notFoundText: [{ type: i0.Input }],
            typeToSearchText: [{ type: i0.Input }],
            addTagText: [{ type: i0.Input }],
            loadingText: [{ type: i0.Input }],
            clearAllText: [{ type: i0.Input }],
            dropdownPosition: [{ type: i0.Input }],
            appendTo: [{ type: i0.Input }],
            loading: [{ type: i0.Input }],
            closeOnSelect: [{ type: i0.Input }],
            hideSelected: [{ type: i0.Input }],
            selectOnTab: [{ type: i0.Input }],
            openOnEnter: [{ type: i0.Input }],
            maxSelectedItems: [{ type: i0.Input }],
            groupBy: [{ type: i0.Input }],
            groupValue: [{ type: i0.Input }],
            bufferAmount: [{ type: i0.Input }],
            virtualScroll: [{ type: i0.Input }],
            selectableGroup: [{ type: i0.Input }],
            selectableGroupAsModel: [{ type: i0.Input }],
            searchFn: [{ type: i0.Input }],
            trackByFn: [{ type: i0.Input }],
            excludeGroupsFromDefaultSelection: [{ type: i0.Input }],
            clearOnBackspace: [{ type: i0.Input }],
            readonly: [{ type: i0.Input }],
            labelForId: [{ type: i0.Input }],
            autoCorrect: [{ type: i0.Input }],
            autoCapitalize: [{ type: i0.Input }],
            typeahead: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-typeahead',] }],
            multiple: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-multiple',] }],
            addTag: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-taggable',] }],
            searchable: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-searchable',] }],
            clearable: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-clearable',] }],
            isOpen: [{ type: i0.Input }, { type: i0.HostBinding, args: ['class.ng-select-opened',] }],
            items: [{ type: i0.Input }],
            compareWith: [{ type: i0.Input }],
            clearSearchOnAdd: [{ type: i0.Input }],
            blurEvent: [{ type: i0.Output, args: ['blur',] }],
            focusEvent: [{ type: i0.Output, args: ['focus',] }],
            changeEvent: [{ type: i0.Output, args: ['change',] }],
            openEvent: [{ type: i0.Output, args: ['open',] }],
            closeEvent: [{ type: i0.Output, args: ['close',] }],
            searchEvent: [{ type: i0.Output, args: ['search',] }],
            clearEvent: [{ type: i0.Output, args: ['clear',] }],
            addEvent: [{ type: i0.Output, args: ['add',] }],
            removeEvent: [{ type: i0.Output, args: ['remove',] }],
            scroll: [{ type: i0.Output, args: ['scroll',] }],
            scrollToEnd: [{ type: i0.Output, args: ['scrollToEnd',] }],
            optionTemplate: [{ type: i0.ContentChild, args: [NgOptionTemplateDirective, { read: i0.TemplateRef },] }],
            optgroupTemplate: [{ type: i0.ContentChild, args: [NgOptgroupTemplateDirective, { read: i0.TemplateRef },] }],
            labelTemplate: [{ type: i0.ContentChild, args: [NgLabelTemplateDirective, { read: i0.TemplateRef },] }],
            multiLabelTemplate: [{ type: i0.ContentChild, args: [NgMultiLabelTemplateDirective, { read: i0.TemplateRef },] }],
            headerTemplate: [{ type: i0.ContentChild, args: [NgHeaderTemplateDirective, { read: i0.TemplateRef },] }],
            footerTemplate: [{ type: i0.ContentChild, args: [NgFooterTemplateDirective, { read: i0.TemplateRef },] }],
            notFoundTemplate: [{ type: i0.ContentChild, args: [NgNotFoundTemplateDirective, { read: i0.TemplateRef },] }],
            typeToSearchTemplate: [{ type: i0.ContentChild, args: [NgTypeToSearchTemplateDirective, { read: i0.TemplateRef },] }],
            loadingTextTemplate: [{ type: i0.ContentChild, args: [NgLoadingTextTemplateDirective, { read: i0.TemplateRef },] }],
            tagTemplate: [{ type: i0.ContentChild, args: [NgTagTemplateDirective, { read: i0.TemplateRef },] }],
            loadingSpinnerTemplate: [{ type: i0.ContentChild, args: [NgLoadingSpinnerTemplateDirective, { read: i0.TemplateRef },] }],
            dropdownPanel: [{ type: i0.ViewChild, args: [i0.forwardRef(function () { return NgDropdownPanelComponent; }),] }],
            ngOptions: [{ type: i0.ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
            filterInput: [{ type: i0.ViewChild, args: ['filterInput',] }],
            disabled: [{ type: i0.HostBinding, args: ['class.ng-select-disabled',] }],
            filtered: [{ type: i0.HostBinding, args: ['class.ng-select-filtered',] }],
            handleKeyDown: [{ type: i0.HostListener, args: ['keydown', ['$event'],] }]
        };
        return NgSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NgOptionHighlightDirective = /** @class */ (function () {
        function NgOptionHighlightDirective(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.element = this.elementRef.nativeElement;
        }
        /**
         * @return {?}
         */
        NgOptionHighlightDirective.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                if (this._canHighlight) {
                    this._highlightLabel();
                }
            };
        /**
         * @return {?}
         */
        NgOptionHighlightDirective.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.label = this.element.innerHTML;
                if (this._canHighlight) {
                    this._highlightLabel();
                }
            };
        /**
         * @return {?}
         */
        NgOptionHighlightDirective.prototype._highlightLabel = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var label = this.label;
                if (!this.term) {
                    this._setInnerHtml(label);
                    return;
                }
                /** @type {?} */
                var indexOfTerm = stripSpecialChars(label)
                    .toLowerCase()
                    .indexOf(stripSpecialChars(this.term).toLowerCase());
                if (indexOfTerm > -1) {
                    this._setInnerHtml(label.substring(0, indexOfTerm)
                        + ("<span class=\"highlighted\">" + label.substr(indexOfTerm, this.term.length) + "</span>")
                        + label.substring(indexOfTerm + this.term.length, label.length));
                }
                else {
                    this._setInnerHtml(label);
                }
            };
        Object.defineProperty(NgOptionHighlightDirective.prototype, "_canHighlight", {
            get: /**
             * @return {?}
             */ function () {
                return isDefined(this.term) && isDefined(this.label);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} html
         * @return {?}
         */
        NgOptionHighlightDirective.prototype._setInnerHtml = /**
         * @param {?} html
         * @return {?}
         */
            function (html) {
                this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', html);
            };
        NgOptionHighlightDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[ngOptionHighlight]'
                    },] }
        ];
        /** @nocollapse */
        NgOptionHighlightDirective.ctorParameters = function () {
            return [
                { type: i0.ElementRef },
                { type: i0.Renderer2 }
            ];
        };
        NgOptionHighlightDirective.propDecorators = {
            term: [{ type: i0.Input, args: ['ngOptionHighlight',] }]
        };
        return NgOptionHighlightDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    /**
     * @return {?}
     */
    function DefaultSelectionModelFactory() {
        return new DefaultSelectionModel();
    }
    var DefaultSelectionModel = /** @class */ (function () {
        function DefaultSelectionModel() {
            this._selected = [];
        }
        Object.defineProperty(DefaultSelectionModel.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._selected;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
        DefaultSelectionModel.prototype.select = /**
         * @param {?} item
         * @param {?} multiple
         * @param {?} groupAsModel
         * @return {?}
         */
            function (item, multiple, groupAsModel) {
                item.selected = true;
                if (groupAsModel || !item.children) {
                    this._selected.push(item);
                }
                if (multiple) {
                    if (item.parent) {
                        /** @type {?} */
                        var childrenCount = item.parent.children.length;
                        /** @type {?} */
                        var selectedCount = item.parent.children.filter(function (x) { return x.selected; }).length;
                        item.parent.selected = childrenCount === selectedCount;
                    }
                    else if (item.children) {
                        this._setChildrenSelectedState(item.children, true);
                        this._removeChildren(item);
                        if (!groupAsModel) {
                            this._selected = __spread(this._selected, item.children);
                        }
                    }
                }
            };
        /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */
        DefaultSelectionModel.prototype.unselect = /**
         * @param {?} item
         * @param {?} multiple
         * @return {?}
         */
            function (item, multiple) {
                var _a;
                this._selected = this._selected.filter(function (x) { return x !== item; });
                item.selected = false;
                if (multiple) {
                    if (item.parent && item.parent.selected) {
                        /** @type {?} */
                        var children = item.parent.children;
                        this._removeParent(item.parent);
                        this._removeChildren(item.parent);
                        (_a = this._selected).push.apply(_a, __spread(children.filter(function (x) { return x !== item; })));
                        item.parent.selected = false;
                    }
                    else if (item.children) {
                        this._setChildrenSelectedState(item.children, false);
                        this._removeChildren(item);
                    }
                }
            };
        /**
         * @param {?} keepDisabled
         * @return {?}
         */
        DefaultSelectionModel.prototype.clear = /**
         * @param {?} keepDisabled
         * @return {?}
         */
            function (keepDisabled) {
                this._selected = keepDisabled ? this._selected.filter(function (x) { return x.disabled; }) : [];
            };
        /**
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */
        DefaultSelectionModel.prototype._setChildrenSelectedState = /**
         * @param {?} children
         * @param {?} selected
         * @return {?}
         */
            function (children, selected) {
                children.forEach(function (x) { return x.selected = selected; });
            };
        /**
         * @param {?} parent
         * @return {?}
         */
        DefaultSelectionModel.prototype._removeChildren = /**
         * @param {?} parent
         * @return {?}
         */
            function (parent) {
                this._selected = this._selected.filter(function (x) { return x.parent !== parent; });
            };
        /**
         * @param {?} parent
         * @return {?}
         */
        DefaultSelectionModel.prototype._removeParent = /**
         * @param {?} parent
         * @return {?}
         */
            function (parent) {
                this._selected = this._selected.filter(function (x) { return x !== parent; });
            };
        return DefaultSelectionModel;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ɵ0 = DefaultSelectionModelFactory;
    var NgSelectModule = /** @class */ (function () {
        function NgSelectModule() {
        }
        NgSelectModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [
                            NgDropdownPanelComponent,
                            NgOptionComponent,
                            NgSelectComponent,
                            NgOptionHighlightDirective,
                            NgOptgroupTemplateDirective,
                            NgOptionTemplateDirective,
                            NgLabelTemplateDirective,
                            NgMultiLabelTemplateDirective,
                            NgHeaderTemplateDirective,
                            NgFooterTemplateDirective,
                            NgNotFoundTemplateDirective,
                            NgTypeToSearchTemplateDirective,
                            NgLoadingTextTemplateDirective,
                            NgTagTemplateDirective,
                            NgLoadingSpinnerTemplateDirective
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            NgSelectComponent,
                            NgOptionComponent,
                            NgOptionHighlightDirective,
                            NgOptgroupTemplateDirective,
                            NgOptionTemplateDirective,
                            NgLabelTemplateDirective,
                            NgMultiLabelTemplateDirective,
                            NgHeaderTemplateDirective,
                            NgFooterTemplateDirective,
                            NgNotFoundTemplateDirective,
                            NgTypeToSearchTemplateDirective,
                            NgLoadingTextTemplateDirective,
                            NgTagTemplateDirective,
                            NgLoadingSpinnerTemplateDirective
                        ],
                        providers: [
                            { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                        ]
                    },] }
        ];
        return NgSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.NgSelectComponent = NgSelectComponent;
    exports.SELECTION_MODEL_FACTORY = SELECTION_MODEL_FACTORY;
    exports.NgSelectModule = NgSelectModule;
    exports.NgSelectConfig = NgSelectConfig;
    exports.ɵs = ConsoleService;
    exports.ɵo = NgDropdownPanelComponent;
    exports.ɵt = NgOptionHighlightDirective;
    exports.ɵr = NgOptionComponent;
    exports.ɵi = NgFooterTemplateDirective;
    exports.ɵh = NgHeaderTemplateDirective;
    exports.ɵf = NgLabelTemplateDirective;
    exports.ɵn = NgLoadingSpinnerTemplateDirective;
    exports.ɵl = NgLoadingTextTemplateDirective;
    exports.ɵg = NgMultiLabelTemplateDirective;
    exports.ɵj = NgNotFoundTemplateDirective;
    exports.ɵe = NgOptgroupTemplateDirective;
    exports.ɵd = NgOptionTemplateDirective;
    exports.ɵm = NgTagTemplateDirective;
    exports.ɵk = NgTypeToSearchTemplateDirective;
    exports.ɵc = DefaultSelectionModel;
    exports.ɵb = DefaultSelectionModelFactory;
    exports.ɵp = VirtualScrollService;
    exports.ɵq = WindowService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctc2VsZWN0LnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9uZy10ZW1wbGF0ZXMuZGlyZWN0aXZlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvY29uc29sZS5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvdmFsdWUtdXRpbHMudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9zZWFyY2gtaGVscGVyLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvaWQudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC9pdGVtcy1saXN0LnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0LnR5cGVzLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvd2luZG93LnNlcnZpY2UudHMiLCJuZzovL0BuZy1zZWxlY3Qvbmctc2VsZWN0L25nLXNlbGVjdC92aXJ0dWFsLXNjcm9sbC5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3QvbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50LnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctb3B0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L2NvbmZpZy5zZXJ2aWNlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0LmNvbXBvbmVudC50cyIsIm5nOi8vQG5nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0L25nLW9wdGlvbi1oaWdobGlnaHQuZGlyZWN0aXZlLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvc2VsZWN0aW9uLW1vZGVsLnRzIiwibmc6Ly9Abmctc2VsZWN0L25nLXNlbGVjdC9uZy1zZWxlY3Qvbmctc2VsZWN0Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLW9wdGlvbi10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nT3B0aW9uVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1vcHRncm91cC10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWxhYmVsLXRtcF0nIH0pXG5leHBvcnQgY2xhc3MgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbXVsdGktbGFiZWwtdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7IH1cbn1cblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25nLWhlYWRlci10bXBdJyB9KVxuZXhwb3J0IGNsYXNzIE5nSGVhZGVyVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy1mb290ZXItdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbm90Zm91bmQtdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy10eXBldG9zZWFyY2gtdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbG9hZGluZ3RleHQtdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG5cbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZy10YWctdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT4pIHsgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbbmctbG9hZGluZ3NwaW5uZXItdG1wXScgfSlcbmV4cG9ydCBjbGFzcyBOZ0xvYWRpbmdTcGlubmVyVGVtcGxhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PikgeyB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ29uc29sZVNlcnZpY2Uge1xuICAgIHdhcm4obWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKVxuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWU6IGFueSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3QodmFsdWU6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIGlzRGVmaW5lZCh2YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb21pc2UodmFsdWU6IGFueSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbjtcbn1cbiIsImNvbnN0IGRpYWNyaXRpY3MgPSB7XG4gICAgJ1xcdTI0QjYnOiAnQScsXG4gICAgJ1xcdUZGMjEnOiAnQScsXG4gICAgJ1xcdTAwQzAnOiAnQScsXG4gICAgJ1xcdTAwQzEnOiAnQScsXG4gICAgJ1xcdTAwQzInOiAnQScsXG4gICAgJ1xcdTFFQTYnOiAnQScsXG4gICAgJ1xcdTFFQTQnOiAnQScsXG4gICAgJ1xcdTFFQUEnOiAnQScsXG4gICAgJ1xcdTFFQTgnOiAnQScsXG4gICAgJ1xcdTAwQzMnOiAnQScsXG4gICAgJ1xcdTAxMDAnOiAnQScsXG4gICAgJ1xcdTAxMDInOiAnQScsXG4gICAgJ1xcdTFFQjAnOiAnQScsXG4gICAgJ1xcdTFFQUUnOiAnQScsXG4gICAgJ1xcdTFFQjQnOiAnQScsXG4gICAgJ1xcdTFFQjInOiAnQScsXG4gICAgJ1xcdTAyMjYnOiAnQScsXG4gICAgJ1xcdTAxRTAnOiAnQScsXG4gICAgJ1xcdTAwQzQnOiAnQScsXG4gICAgJ1xcdTAxREUnOiAnQScsXG4gICAgJ1xcdTFFQTInOiAnQScsXG4gICAgJ1xcdTAwQzUnOiAnQScsXG4gICAgJ1xcdTAxRkEnOiAnQScsXG4gICAgJ1xcdTAxQ0QnOiAnQScsXG4gICAgJ1xcdTAyMDAnOiAnQScsXG4gICAgJ1xcdTAyMDInOiAnQScsXG4gICAgJ1xcdTFFQTAnOiAnQScsXG4gICAgJ1xcdTFFQUMnOiAnQScsXG4gICAgJ1xcdTFFQjYnOiAnQScsXG4gICAgJ1xcdTFFMDAnOiAnQScsXG4gICAgJ1xcdTAxMDQnOiAnQScsXG4gICAgJ1xcdTAyM0EnOiAnQScsXG4gICAgJ1xcdTJDNkYnOiAnQScsXG4gICAgJ1xcdUE3MzInOiAnQUEnLFxuICAgICdcXHUwMEM2JzogJ0FFJyxcbiAgICAnXFx1MDFGQyc6ICdBRScsXG4gICAgJ1xcdTAxRTInOiAnQUUnLFxuICAgICdcXHVBNzM0JzogJ0FPJyxcbiAgICAnXFx1QTczNic6ICdBVScsXG4gICAgJ1xcdUE3MzgnOiAnQVYnLFxuICAgICdcXHVBNzNBJzogJ0FWJyxcbiAgICAnXFx1QTczQyc6ICdBWScsXG4gICAgJ1xcdTI0QjcnOiAnQicsXG4gICAgJ1xcdUZGMjInOiAnQicsXG4gICAgJ1xcdTFFMDInOiAnQicsXG4gICAgJ1xcdTFFMDQnOiAnQicsXG4gICAgJ1xcdTFFMDYnOiAnQicsXG4gICAgJ1xcdTAyNDMnOiAnQicsXG4gICAgJ1xcdTAxODInOiAnQicsXG4gICAgJ1xcdTAxODEnOiAnQicsXG4gICAgJ1xcdTI0QjgnOiAnQycsXG4gICAgJ1xcdUZGMjMnOiAnQycsXG4gICAgJ1xcdTAxMDYnOiAnQycsXG4gICAgJ1xcdTAxMDgnOiAnQycsXG4gICAgJ1xcdTAxMEEnOiAnQycsXG4gICAgJ1xcdTAxMEMnOiAnQycsXG4gICAgJ1xcdTAwQzcnOiAnQycsXG4gICAgJ1xcdTFFMDgnOiAnQycsXG4gICAgJ1xcdTAxODcnOiAnQycsXG4gICAgJ1xcdTAyM0InOiAnQycsXG4gICAgJ1xcdUE3M0UnOiAnQycsXG4gICAgJ1xcdTI0QjknOiAnRCcsXG4gICAgJ1xcdUZGMjQnOiAnRCcsXG4gICAgJ1xcdTFFMEEnOiAnRCcsXG4gICAgJ1xcdTAxMEUnOiAnRCcsXG4gICAgJ1xcdTFFMEMnOiAnRCcsXG4gICAgJ1xcdTFFMTAnOiAnRCcsXG4gICAgJ1xcdTFFMTInOiAnRCcsXG4gICAgJ1xcdTFFMEUnOiAnRCcsXG4gICAgJ1xcdTAxMTAnOiAnRCcsXG4gICAgJ1xcdTAxOEInOiAnRCcsXG4gICAgJ1xcdTAxOEEnOiAnRCcsXG4gICAgJ1xcdTAxODknOiAnRCcsXG4gICAgJ1xcdUE3NzknOiAnRCcsXG4gICAgJ1xcdTAxRjEnOiAnRFonLFxuICAgICdcXHUwMUM0JzogJ0RaJyxcbiAgICAnXFx1MDFGMic6ICdEeicsXG4gICAgJ1xcdTAxQzUnOiAnRHonLFxuICAgICdcXHUyNEJBJzogJ0UnLFxuICAgICdcXHVGRjI1JzogJ0UnLFxuICAgICdcXHUwMEM4JzogJ0UnLFxuICAgICdcXHUwMEM5JzogJ0UnLFxuICAgICdcXHUwMENBJzogJ0UnLFxuICAgICdcXHUxRUMwJzogJ0UnLFxuICAgICdcXHUxRUJFJzogJ0UnLFxuICAgICdcXHUxRUM0JzogJ0UnLFxuICAgICdcXHUxRUMyJzogJ0UnLFxuICAgICdcXHUxRUJDJzogJ0UnLFxuICAgICdcXHUwMTEyJzogJ0UnLFxuICAgICdcXHUxRTE0JzogJ0UnLFxuICAgICdcXHUxRTE2JzogJ0UnLFxuICAgICdcXHUwMTE0JzogJ0UnLFxuICAgICdcXHUwMTE2JzogJ0UnLFxuICAgICdcXHUwMENCJzogJ0UnLFxuICAgICdcXHUxRUJBJzogJ0UnLFxuICAgICdcXHUwMTFBJzogJ0UnLFxuICAgICdcXHUwMjA0JzogJ0UnLFxuICAgICdcXHUwMjA2JzogJ0UnLFxuICAgICdcXHUxRUI4JzogJ0UnLFxuICAgICdcXHUxRUM2JzogJ0UnLFxuICAgICdcXHUwMjI4JzogJ0UnLFxuICAgICdcXHUxRTFDJzogJ0UnLFxuICAgICdcXHUwMTE4JzogJ0UnLFxuICAgICdcXHUxRTE4JzogJ0UnLFxuICAgICdcXHUxRTFBJzogJ0UnLFxuICAgICdcXHUwMTkwJzogJ0UnLFxuICAgICdcXHUwMThFJzogJ0UnLFxuICAgICdcXHUyNEJCJzogJ0YnLFxuICAgICdcXHVGRjI2JzogJ0YnLFxuICAgICdcXHUxRTFFJzogJ0YnLFxuICAgICdcXHUwMTkxJzogJ0YnLFxuICAgICdcXHVBNzdCJzogJ0YnLFxuICAgICdcXHUyNEJDJzogJ0cnLFxuICAgICdcXHVGRjI3JzogJ0cnLFxuICAgICdcXHUwMUY0JzogJ0cnLFxuICAgICdcXHUwMTFDJzogJ0cnLFxuICAgICdcXHUxRTIwJzogJ0cnLFxuICAgICdcXHUwMTFFJzogJ0cnLFxuICAgICdcXHUwMTIwJzogJ0cnLFxuICAgICdcXHUwMUU2JzogJ0cnLFxuICAgICdcXHUwMTIyJzogJ0cnLFxuICAgICdcXHUwMUU0JzogJ0cnLFxuICAgICdcXHUwMTkzJzogJ0cnLFxuICAgICdcXHVBN0EwJzogJ0cnLFxuICAgICdcXHVBNzdEJzogJ0cnLFxuICAgICdcXHVBNzdFJzogJ0cnLFxuICAgICdcXHUyNEJEJzogJ0gnLFxuICAgICdcXHVGRjI4JzogJ0gnLFxuICAgICdcXHUwMTI0JzogJ0gnLFxuICAgICdcXHUxRTIyJzogJ0gnLFxuICAgICdcXHUxRTI2JzogJ0gnLFxuICAgICdcXHUwMjFFJzogJ0gnLFxuICAgICdcXHUxRTI0JzogJ0gnLFxuICAgICdcXHUxRTI4JzogJ0gnLFxuICAgICdcXHUxRTJBJzogJ0gnLFxuICAgICdcXHUwMTI2JzogJ0gnLFxuICAgICdcXHUyQzY3JzogJ0gnLFxuICAgICdcXHUyQzc1JzogJ0gnLFxuICAgICdcXHVBNzhEJzogJ0gnLFxuICAgICdcXHUyNEJFJzogJ0knLFxuICAgICdcXHVGRjI5JzogJ0knLFxuICAgICdcXHUwMENDJzogJ0knLFxuICAgICdcXHUwMENEJzogJ0knLFxuICAgICdcXHUwMENFJzogJ0knLFxuICAgICdcXHUwMTI4JzogJ0knLFxuICAgICdcXHUwMTJBJzogJ0knLFxuICAgICdcXHUwMTJDJzogJ0knLFxuICAgICdcXHUwMTMwJzogJ0knLFxuICAgICdcXHUwMENGJzogJ0knLFxuICAgICdcXHUxRTJFJzogJ0knLFxuICAgICdcXHUxRUM4JzogJ0knLFxuICAgICdcXHUwMUNGJzogJ0knLFxuICAgICdcXHUwMjA4JzogJ0knLFxuICAgICdcXHUwMjBBJzogJ0knLFxuICAgICdcXHUxRUNBJzogJ0knLFxuICAgICdcXHUwMTJFJzogJ0knLFxuICAgICdcXHUxRTJDJzogJ0knLFxuICAgICdcXHUwMTk3JzogJ0knLFxuICAgICdcXHUyNEJGJzogJ0onLFxuICAgICdcXHVGRjJBJzogJ0onLFxuICAgICdcXHUwMTM0JzogJ0onLFxuICAgICdcXHUwMjQ4JzogJ0onLFxuICAgICdcXHUyNEMwJzogJ0snLFxuICAgICdcXHVGRjJCJzogJ0snLFxuICAgICdcXHUxRTMwJzogJ0snLFxuICAgICdcXHUwMUU4JzogJ0snLFxuICAgICdcXHUxRTMyJzogJ0snLFxuICAgICdcXHUwMTM2JzogJ0snLFxuICAgICdcXHUxRTM0JzogJ0snLFxuICAgICdcXHUwMTk4JzogJ0snLFxuICAgICdcXHUyQzY5JzogJ0snLFxuICAgICdcXHVBNzQwJzogJ0snLFxuICAgICdcXHVBNzQyJzogJ0snLFxuICAgICdcXHVBNzQ0JzogJ0snLFxuICAgICdcXHVBN0EyJzogJ0snLFxuICAgICdcXHUyNEMxJzogJ0wnLFxuICAgICdcXHVGRjJDJzogJ0wnLFxuICAgICdcXHUwMTNGJzogJ0wnLFxuICAgICdcXHUwMTM5JzogJ0wnLFxuICAgICdcXHUwMTNEJzogJ0wnLFxuICAgICdcXHUxRTM2JzogJ0wnLFxuICAgICdcXHUxRTM4JzogJ0wnLFxuICAgICdcXHUwMTNCJzogJ0wnLFxuICAgICdcXHUxRTNDJzogJ0wnLFxuICAgICdcXHUxRTNBJzogJ0wnLFxuICAgICdcXHUwMTQxJzogJ0wnLFxuICAgICdcXHUwMjNEJzogJ0wnLFxuICAgICdcXHUyQzYyJzogJ0wnLFxuICAgICdcXHUyQzYwJzogJ0wnLFxuICAgICdcXHVBNzQ4JzogJ0wnLFxuICAgICdcXHVBNzQ2JzogJ0wnLFxuICAgICdcXHVBNzgwJzogJ0wnLFxuICAgICdcXHUwMUM3JzogJ0xKJyxcbiAgICAnXFx1MDFDOCc6ICdMaicsXG4gICAgJ1xcdTI0QzInOiAnTScsXG4gICAgJ1xcdUZGMkQnOiAnTScsXG4gICAgJ1xcdTFFM0UnOiAnTScsXG4gICAgJ1xcdTFFNDAnOiAnTScsXG4gICAgJ1xcdTFFNDInOiAnTScsXG4gICAgJ1xcdTJDNkUnOiAnTScsXG4gICAgJ1xcdTAxOUMnOiAnTScsXG4gICAgJ1xcdTI0QzMnOiAnTicsXG4gICAgJ1xcdUZGMkUnOiAnTicsXG4gICAgJ1xcdTAxRjgnOiAnTicsXG4gICAgJ1xcdTAxNDMnOiAnTicsXG4gICAgJ1xcdTAwRDEnOiAnTicsXG4gICAgJ1xcdTFFNDQnOiAnTicsXG4gICAgJ1xcdTAxNDcnOiAnTicsXG4gICAgJ1xcdTFFNDYnOiAnTicsXG4gICAgJ1xcdTAxNDUnOiAnTicsXG4gICAgJ1xcdTFFNEEnOiAnTicsXG4gICAgJ1xcdTFFNDgnOiAnTicsXG4gICAgJ1xcdTAyMjAnOiAnTicsXG4gICAgJ1xcdTAxOUQnOiAnTicsXG4gICAgJ1xcdUE3OTAnOiAnTicsXG4gICAgJ1xcdUE3QTQnOiAnTicsXG4gICAgJ1xcdTAxQ0EnOiAnTkonLFxuICAgICdcXHUwMUNCJzogJ05qJyxcbiAgICAnXFx1MjRDNCc6ICdPJyxcbiAgICAnXFx1RkYyRic6ICdPJyxcbiAgICAnXFx1MDBEMic6ICdPJyxcbiAgICAnXFx1MDBEMyc6ICdPJyxcbiAgICAnXFx1MDBENCc6ICdPJyxcbiAgICAnXFx1MUVEMic6ICdPJyxcbiAgICAnXFx1MUVEMCc6ICdPJyxcbiAgICAnXFx1MUVENic6ICdPJyxcbiAgICAnXFx1MUVENCc6ICdPJyxcbiAgICAnXFx1MDBENSc6ICdPJyxcbiAgICAnXFx1MUU0Qyc6ICdPJyxcbiAgICAnXFx1MDIyQyc6ICdPJyxcbiAgICAnXFx1MUU0RSc6ICdPJyxcbiAgICAnXFx1MDE0Qyc6ICdPJyxcbiAgICAnXFx1MUU1MCc6ICdPJyxcbiAgICAnXFx1MUU1Mic6ICdPJyxcbiAgICAnXFx1MDE0RSc6ICdPJyxcbiAgICAnXFx1MDIyRSc6ICdPJyxcbiAgICAnXFx1MDIzMCc6ICdPJyxcbiAgICAnXFx1MDBENic6ICdPJyxcbiAgICAnXFx1MDIyQSc6ICdPJyxcbiAgICAnXFx1MUVDRSc6ICdPJyxcbiAgICAnXFx1MDE1MCc6ICdPJyxcbiAgICAnXFx1MDFEMSc6ICdPJyxcbiAgICAnXFx1MDIwQyc6ICdPJyxcbiAgICAnXFx1MDIwRSc6ICdPJyxcbiAgICAnXFx1MDFBMCc6ICdPJyxcbiAgICAnXFx1MUVEQyc6ICdPJyxcbiAgICAnXFx1MUVEQSc6ICdPJyxcbiAgICAnXFx1MUVFMCc6ICdPJyxcbiAgICAnXFx1MUVERSc6ICdPJyxcbiAgICAnXFx1MUVFMic6ICdPJyxcbiAgICAnXFx1MUVDQyc6ICdPJyxcbiAgICAnXFx1MUVEOCc6ICdPJyxcbiAgICAnXFx1MDFFQSc6ICdPJyxcbiAgICAnXFx1MDFFQyc6ICdPJyxcbiAgICAnXFx1MDBEOCc6ICdPJyxcbiAgICAnXFx1MDFGRSc6ICdPJyxcbiAgICAnXFx1MDE4Nic6ICdPJyxcbiAgICAnXFx1MDE5Ric6ICdPJyxcbiAgICAnXFx1QTc0QSc6ICdPJyxcbiAgICAnXFx1QTc0Qyc6ICdPJyxcbiAgICAnXFx1MDFBMic6ICdPSScsXG4gICAgJ1xcdUE3NEUnOiAnT08nLFxuICAgICdcXHUwMjIyJzogJ09VJyxcbiAgICAnXFx1MjRDNSc6ICdQJyxcbiAgICAnXFx1RkYzMCc6ICdQJyxcbiAgICAnXFx1MUU1NCc6ICdQJyxcbiAgICAnXFx1MUU1Nic6ICdQJyxcbiAgICAnXFx1MDFBNCc6ICdQJyxcbiAgICAnXFx1MkM2Myc6ICdQJyxcbiAgICAnXFx1QTc1MCc6ICdQJyxcbiAgICAnXFx1QTc1Mic6ICdQJyxcbiAgICAnXFx1QTc1NCc6ICdQJyxcbiAgICAnXFx1MjRDNic6ICdRJyxcbiAgICAnXFx1RkYzMSc6ICdRJyxcbiAgICAnXFx1QTc1Nic6ICdRJyxcbiAgICAnXFx1QTc1OCc6ICdRJyxcbiAgICAnXFx1MDI0QSc6ICdRJyxcbiAgICAnXFx1MjRDNyc6ICdSJyxcbiAgICAnXFx1RkYzMic6ICdSJyxcbiAgICAnXFx1MDE1NCc6ICdSJyxcbiAgICAnXFx1MUU1OCc6ICdSJyxcbiAgICAnXFx1MDE1OCc6ICdSJyxcbiAgICAnXFx1MDIxMCc6ICdSJyxcbiAgICAnXFx1MDIxMic6ICdSJyxcbiAgICAnXFx1MUU1QSc6ICdSJyxcbiAgICAnXFx1MUU1Qyc6ICdSJyxcbiAgICAnXFx1MDE1Nic6ICdSJyxcbiAgICAnXFx1MUU1RSc6ICdSJyxcbiAgICAnXFx1MDI0Qyc6ICdSJyxcbiAgICAnXFx1MkM2NCc6ICdSJyxcbiAgICAnXFx1QTc1QSc6ICdSJyxcbiAgICAnXFx1QTdBNic6ICdSJyxcbiAgICAnXFx1QTc4Mic6ICdSJyxcbiAgICAnXFx1MjRDOCc6ICdTJyxcbiAgICAnXFx1RkYzMyc6ICdTJyxcbiAgICAnXFx1MUU5RSc6ICdTJyxcbiAgICAnXFx1MDE1QSc6ICdTJyxcbiAgICAnXFx1MUU2NCc6ICdTJyxcbiAgICAnXFx1MDE1Qyc6ICdTJyxcbiAgICAnXFx1MUU2MCc6ICdTJyxcbiAgICAnXFx1MDE2MCc6ICdTJyxcbiAgICAnXFx1MUU2Nic6ICdTJyxcbiAgICAnXFx1MUU2Mic6ICdTJyxcbiAgICAnXFx1MUU2OCc6ICdTJyxcbiAgICAnXFx1MDIxOCc6ICdTJyxcbiAgICAnXFx1MDE1RSc6ICdTJyxcbiAgICAnXFx1MkM3RSc6ICdTJyxcbiAgICAnXFx1QTdBOCc6ICdTJyxcbiAgICAnXFx1QTc4NCc6ICdTJyxcbiAgICAnXFx1MjRDOSc6ICdUJyxcbiAgICAnXFx1RkYzNCc6ICdUJyxcbiAgICAnXFx1MUU2QSc6ICdUJyxcbiAgICAnXFx1MDE2NCc6ICdUJyxcbiAgICAnXFx1MUU2Qyc6ICdUJyxcbiAgICAnXFx1MDIxQSc6ICdUJyxcbiAgICAnXFx1MDE2Mic6ICdUJyxcbiAgICAnXFx1MUU3MCc6ICdUJyxcbiAgICAnXFx1MUU2RSc6ICdUJyxcbiAgICAnXFx1MDE2Nic6ICdUJyxcbiAgICAnXFx1MDFBQyc6ICdUJyxcbiAgICAnXFx1MDFBRSc6ICdUJyxcbiAgICAnXFx1MDIzRSc6ICdUJyxcbiAgICAnXFx1QTc4Nic6ICdUJyxcbiAgICAnXFx1QTcyOCc6ICdUWicsXG4gICAgJ1xcdTI0Q0EnOiAnVScsXG4gICAgJ1xcdUZGMzUnOiAnVScsXG4gICAgJ1xcdTAwRDknOiAnVScsXG4gICAgJ1xcdTAwREEnOiAnVScsXG4gICAgJ1xcdTAwREInOiAnVScsXG4gICAgJ1xcdTAxNjgnOiAnVScsXG4gICAgJ1xcdTFFNzgnOiAnVScsXG4gICAgJ1xcdTAxNkEnOiAnVScsXG4gICAgJ1xcdTFFN0EnOiAnVScsXG4gICAgJ1xcdTAxNkMnOiAnVScsXG4gICAgJ1xcdTAwREMnOiAnVScsXG4gICAgJ1xcdTAxREInOiAnVScsXG4gICAgJ1xcdTAxRDcnOiAnVScsXG4gICAgJ1xcdTAxRDUnOiAnVScsXG4gICAgJ1xcdTAxRDknOiAnVScsXG4gICAgJ1xcdTFFRTYnOiAnVScsXG4gICAgJ1xcdTAxNkUnOiAnVScsXG4gICAgJ1xcdTAxNzAnOiAnVScsXG4gICAgJ1xcdTAxRDMnOiAnVScsXG4gICAgJ1xcdTAyMTQnOiAnVScsXG4gICAgJ1xcdTAyMTYnOiAnVScsXG4gICAgJ1xcdTAxQUYnOiAnVScsXG4gICAgJ1xcdTFFRUEnOiAnVScsXG4gICAgJ1xcdTFFRTgnOiAnVScsXG4gICAgJ1xcdTFFRUUnOiAnVScsXG4gICAgJ1xcdTFFRUMnOiAnVScsXG4gICAgJ1xcdTFFRjAnOiAnVScsXG4gICAgJ1xcdTFFRTQnOiAnVScsXG4gICAgJ1xcdTFFNzInOiAnVScsXG4gICAgJ1xcdTAxNzInOiAnVScsXG4gICAgJ1xcdTFFNzYnOiAnVScsXG4gICAgJ1xcdTFFNzQnOiAnVScsXG4gICAgJ1xcdTAyNDQnOiAnVScsXG4gICAgJ1xcdTI0Q0InOiAnVicsXG4gICAgJ1xcdUZGMzYnOiAnVicsXG4gICAgJ1xcdTFFN0MnOiAnVicsXG4gICAgJ1xcdTFFN0UnOiAnVicsXG4gICAgJ1xcdTAxQjInOiAnVicsXG4gICAgJ1xcdUE3NUUnOiAnVicsXG4gICAgJ1xcdTAyNDUnOiAnVicsXG4gICAgJ1xcdUE3NjAnOiAnVlknLFxuICAgICdcXHUyNENDJzogJ1cnLFxuICAgICdcXHVGRjM3JzogJ1cnLFxuICAgICdcXHUxRTgwJzogJ1cnLFxuICAgICdcXHUxRTgyJzogJ1cnLFxuICAgICdcXHUwMTc0JzogJ1cnLFxuICAgICdcXHUxRTg2JzogJ1cnLFxuICAgICdcXHUxRTg0JzogJ1cnLFxuICAgICdcXHUxRTg4JzogJ1cnLFxuICAgICdcXHUyQzcyJzogJ1cnLFxuICAgICdcXHUyNENEJzogJ1gnLFxuICAgICdcXHVGRjM4JzogJ1gnLFxuICAgICdcXHUxRThBJzogJ1gnLFxuICAgICdcXHUxRThDJzogJ1gnLFxuICAgICdcXHUyNENFJzogJ1knLFxuICAgICdcXHVGRjM5JzogJ1knLFxuICAgICdcXHUxRUYyJzogJ1knLFxuICAgICdcXHUwMEREJzogJ1knLFxuICAgICdcXHUwMTc2JzogJ1knLFxuICAgICdcXHUxRUY4JzogJ1knLFxuICAgICdcXHUwMjMyJzogJ1knLFxuICAgICdcXHUxRThFJzogJ1knLFxuICAgICdcXHUwMTc4JzogJ1knLFxuICAgICdcXHUxRUY2JzogJ1knLFxuICAgICdcXHUxRUY0JzogJ1knLFxuICAgICdcXHUwMUIzJzogJ1knLFxuICAgICdcXHUwMjRFJzogJ1knLFxuICAgICdcXHUxRUZFJzogJ1knLFxuICAgICdcXHUyNENGJzogJ1onLFxuICAgICdcXHVGRjNBJzogJ1onLFxuICAgICdcXHUwMTc5JzogJ1onLFxuICAgICdcXHUxRTkwJzogJ1onLFxuICAgICdcXHUwMTdCJzogJ1onLFxuICAgICdcXHUwMTdEJzogJ1onLFxuICAgICdcXHUxRTkyJzogJ1onLFxuICAgICdcXHUxRTk0JzogJ1onLFxuICAgICdcXHUwMUI1JzogJ1onLFxuICAgICdcXHUwMjI0JzogJ1onLFxuICAgICdcXHUyQzdGJzogJ1onLFxuICAgICdcXHUyQzZCJzogJ1onLFxuICAgICdcXHVBNzYyJzogJ1onLFxuICAgICdcXHUyNEQwJzogJ2EnLFxuICAgICdcXHVGRjQxJzogJ2EnLFxuICAgICdcXHUxRTlBJzogJ2EnLFxuICAgICdcXHUwMEUwJzogJ2EnLFxuICAgICdcXHUwMEUxJzogJ2EnLFxuICAgICdcXHUwMEUyJzogJ2EnLFxuICAgICdcXHUxRUE3JzogJ2EnLFxuICAgICdcXHUxRUE1JzogJ2EnLFxuICAgICdcXHUxRUFCJzogJ2EnLFxuICAgICdcXHUxRUE5JzogJ2EnLFxuICAgICdcXHUwMEUzJzogJ2EnLFxuICAgICdcXHUwMTAxJzogJ2EnLFxuICAgICdcXHUwMTAzJzogJ2EnLFxuICAgICdcXHUxRUIxJzogJ2EnLFxuICAgICdcXHUxRUFGJzogJ2EnLFxuICAgICdcXHUxRUI1JzogJ2EnLFxuICAgICdcXHUxRUIzJzogJ2EnLFxuICAgICdcXHUwMjI3JzogJ2EnLFxuICAgICdcXHUwMUUxJzogJ2EnLFxuICAgICdcXHUwMEU0JzogJ2EnLFxuICAgICdcXHUwMURGJzogJ2EnLFxuICAgICdcXHUxRUEzJzogJ2EnLFxuICAgICdcXHUwMEU1JzogJ2EnLFxuICAgICdcXHUwMUZCJzogJ2EnLFxuICAgICdcXHUwMUNFJzogJ2EnLFxuICAgICdcXHUwMjAxJzogJ2EnLFxuICAgICdcXHUwMjAzJzogJ2EnLFxuICAgICdcXHUxRUExJzogJ2EnLFxuICAgICdcXHUxRUFEJzogJ2EnLFxuICAgICdcXHUxRUI3JzogJ2EnLFxuICAgICdcXHUxRTAxJzogJ2EnLFxuICAgICdcXHUwMTA1JzogJ2EnLFxuICAgICdcXHUyQzY1JzogJ2EnLFxuICAgICdcXHUwMjUwJzogJ2EnLFxuICAgICdcXHVBNzMzJzogJ2FhJyxcbiAgICAnXFx1MDBFNic6ICdhZScsXG4gICAgJ1xcdTAxRkQnOiAnYWUnLFxuICAgICdcXHUwMUUzJzogJ2FlJyxcbiAgICAnXFx1QTczNSc6ICdhbycsXG4gICAgJ1xcdUE3MzcnOiAnYXUnLFxuICAgICdcXHVBNzM5JzogJ2F2JyxcbiAgICAnXFx1QTczQic6ICdhdicsXG4gICAgJ1xcdUE3M0QnOiAnYXknLFxuICAgICdcXHUyNEQxJzogJ2InLFxuICAgICdcXHVGRjQyJzogJ2InLFxuICAgICdcXHUxRTAzJzogJ2InLFxuICAgICdcXHUxRTA1JzogJ2InLFxuICAgICdcXHUxRTA3JzogJ2InLFxuICAgICdcXHUwMTgwJzogJ2InLFxuICAgICdcXHUwMTgzJzogJ2InLFxuICAgICdcXHUwMjUzJzogJ2InLFxuICAgICdcXHUyNEQyJzogJ2MnLFxuICAgICdcXHVGRjQzJzogJ2MnLFxuICAgICdcXHUwMTA3JzogJ2MnLFxuICAgICdcXHUwMTA5JzogJ2MnLFxuICAgICdcXHUwMTBCJzogJ2MnLFxuICAgICdcXHUwMTBEJzogJ2MnLFxuICAgICdcXHUwMEU3JzogJ2MnLFxuICAgICdcXHUxRTA5JzogJ2MnLFxuICAgICdcXHUwMTg4JzogJ2MnLFxuICAgICdcXHUwMjNDJzogJ2MnLFxuICAgICdcXHVBNzNGJzogJ2MnLFxuICAgICdcXHUyMTg0JzogJ2MnLFxuICAgICdcXHUyNEQzJzogJ2QnLFxuICAgICdcXHVGRjQ0JzogJ2QnLFxuICAgICdcXHUxRTBCJzogJ2QnLFxuICAgICdcXHUwMTBGJzogJ2QnLFxuICAgICdcXHUxRTBEJzogJ2QnLFxuICAgICdcXHUxRTExJzogJ2QnLFxuICAgICdcXHUxRTEzJzogJ2QnLFxuICAgICdcXHUxRTBGJzogJ2QnLFxuICAgICdcXHUwMTExJzogJ2QnLFxuICAgICdcXHUwMThDJzogJ2QnLFxuICAgICdcXHUwMjU2JzogJ2QnLFxuICAgICdcXHUwMjU3JzogJ2QnLFxuICAgICdcXHVBNzdBJzogJ2QnLFxuICAgICdcXHUwMUYzJzogJ2R6JyxcbiAgICAnXFx1MDFDNic6ICdkeicsXG4gICAgJ1xcdTI0RDQnOiAnZScsXG4gICAgJ1xcdUZGNDUnOiAnZScsXG4gICAgJ1xcdTAwRTgnOiAnZScsXG4gICAgJ1xcdTAwRTknOiAnZScsXG4gICAgJ1xcdTAwRUEnOiAnZScsXG4gICAgJ1xcdTFFQzEnOiAnZScsXG4gICAgJ1xcdTFFQkYnOiAnZScsXG4gICAgJ1xcdTFFQzUnOiAnZScsXG4gICAgJ1xcdTFFQzMnOiAnZScsXG4gICAgJ1xcdTFFQkQnOiAnZScsXG4gICAgJ1xcdTAxMTMnOiAnZScsXG4gICAgJ1xcdTFFMTUnOiAnZScsXG4gICAgJ1xcdTFFMTcnOiAnZScsXG4gICAgJ1xcdTAxMTUnOiAnZScsXG4gICAgJ1xcdTAxMTcnOiAnZScsXG4gICAgJ1xcdTAwRUInOiAnZScsXG4gICAgJ1xcdTFFQkInOiAnZScsXG4gICAgJ1xcdTAxMUInOiAnZScsXG4gICAgJ1xcdTAyMDUnOiAnZScsXG4gICAgJ1xcdTAyMDcnOiAnZScsXG4gICAgJ1xcdTFFQjknOiAnZScsXG4gICAgJ1xcdTFFQzcnOiAnZScsXG4gICAgJ1xcdTAyMjknOiAnZScsXG4gICAgJ1xcdTFFMUQnOiAnZScsXG4gICAgJ1xcdTAxMTknOiAnZScsXG4gICAgJ1xcdTFFMTknOiAnZScsXG4gICAgJ1xcdTFFMUInOiAnZScsXG4gICAgJ1xcdTAyNDcnOiAnZScsXG4gICAgJ1xcdTAyNUInOiAnZScsXG4gICAgJ1xcdTAxREQnOiAnZScsXG4gICAgJ1xcdTI0RDUnOiAnZicsXG4gICAgJ1xcdUZGNDYnOiAnZicsXG4gICAgJ1xcdTFFMUYnOiAnZicsXG4gICAgJ1xcdTAxOTInOiAnZicsXG4gICAgJ1xcdUE3N0MnOiAnZicsXG4gICAgJ1xcdTI0RDYnOiAnZycsXG4gICAgJ1xcdUZGNDcnOiAnZycsXG4gICAgJ1xcdTAxRjUnOiAnZycsXG4gICAgJ1xcdTAxMUQnOiAnZycsXG4gICAgJ1xcdTFFMjEnOiAnZycsXG4gICAgJ1xcdTAxMUYnOiAnZycsXG4gICAgJ1xcdTAxMjEnOiAnZycsXG4gICAgJ1xcdTAxRTcnOiAnZycsXG4gICAgJ1xcdTAxMjMnOiAnZycsXG4gICAgJ1xcdTAxRTUnOiAnZycsXG4gICAgJ1xcdTAyNjAnOiAnZycsXG4gICAgJ1xcdUE3QTEnOiAnZycsXG4gICAgJ1xcdTFENzknOiAnZycsXG4gICAgJ1xcdUE3N0YnOiAnZycsXG4gICAgJ1xcdTI0RDcnOiAnaCcsXG4gICAgJ1xcdUZGNDgnOiAnaCcsXG4gICAgJ1xcdTAxMjUnOiAnaCcsXG4gICAgJ1xcdTFFMjMnOiAnaCcsXG4gICAgJ1xcdTFFMjcnOiAnaCcsXG4gICAgJ1xcdTAyMUYnOiAnaCcsXG4gICAgJ1xcdTFFMjUnOiAnaCcsXG4gICAgJ1xcdTFFMjknOiAnaCcsXG4gICAgJ1xcdTFFMkInOiAnaCcsXG4gICAgJ1xcdTFFOTYnOiAnaCcsXG4gICAgJ1xcdTAxMjcnOiAnaCcsXG4gICAgJ1xcdTJDNjgnOiAnaCcsXG4gICAgJ1xcdTJDNzYnOiAnaCcsXG4gICAgJ1xcdTAyNjUnOiAnaCcsXG4gICAgJ1xcdTAxOTUnOiAnaHYnLFxuICAgICdcXHUyNEQ4JzogJ2knLFxuICAgICdcXHVGRjQ5JzogJ2knLFxuICAgICdcXHUwMEVDJzogJ2knLFxuICAgICdcXHUwMEVEJzogJ2knLFxuICAgICdcXHUwMEVFJzogJ2knLFxuICAgICdcXHUwMTI5JzogJ2knLFxuICAgICdcXHUwMTJCJzogJ2knLFxuICAgICdcXHUwMTJEJzogJ2knLFxuICAgICdcXHUwMEVGJzogJ2knLFxuICAgICdcXHUxRTJGJzogJ2knLFxuICAgICdcXHUxRUM5JzogJ2knLFxuICAgICdcXHUwMUQwJzogJ2knLFxuICAgICdcXHUwMjA5JzogJ2knLFxuICAgICdcXHUwMjBCJzogJ2knLFxuICAgICdcXHUxRUNCJzogJ2knLFxuICAgICdcXHUwMTJGJzogJ2knLFxuICAgICdcXHUxRTJEJzogJ2knLFxuICAgICdcXHUwMjY4JzogJ2knLFxuICAgICdcXHUwMTMxJzogJ2knLFxuICAgICdcXHUyNEQ5JzogJ2onLFxuICAgICdcXHVGRjRBJzogJ2onLFxuICAgICdcXHUwMTM1JzogJ2onLFxuICAgICdcXHUwMUYwJzogJ2onLFxuICAgICdcXHUwMjQ5JzogJ2onLFxuICAgICdcXHUyNERBJzogJ2snLFxuICAgICdcXHVGRjRCJzogJ2snLFxuICAgICdcXHUxRTMxJzogJ2snLFxuICAgICdcXHUwMUU5JzogJ2snLFxuICAgICdcXHUxRTMzJzogJ2snLFxuICAgICdcXHUwMTM3JzogJ2snLFxuICAgICdcXHUxRTM1JzogJ2snLFxuICAgICdcXHUwMTk5JzogJ2snLFxuICAgICdcXHUyQzZBJzogJ2snLFxuICAgICdcXHVBNzQxJzogJ2snLFxuICAgICdcXHVBNzQzJzogJ2snLFxuICAgICdcXHVBNzQ1JzogJ2snLFxuICAgICdcXHVBN0EzJzogJ2snLFxuICAgICdcXHUyNERCJzogJ2wnLFxuICAgICdcXHVGRjRDJzogJ2wnLFxuICAgICdcXHUwMTQwJzogJ2wnLFxuICAgICdcXHUwMTNBJzogJ2wnLFxuICAgICdcXHUwMTNFJzogJ2wnLFxuICAgICdcXHUxRTM3JzogJ2wnLFxuICAgICdcXHUxRTM5JzogJ2wnLFxuICAgICdcXHUwMTNDJzogJ2wnLFxuICAgICdcXHUxRTNEJzogJ2wnLFxuICAgICdcXHUxRTNCJzogJ2wnLFxuICAgICdcXHUwMTdGJzogJ2wnLFxuICAgICdcXHUwMTQyJzogJ2wnLFxuICAgICdcXHUwMTlBJzogJ2wnLFxuICAgICdcXHUwMjZCJzogJ2wnLFxuICAgICdcXHUyQzYxJzogJ2wnLFxuICAgICdcXHVBNzQ5JzogJ2wnLFxuICAgICdcXHVBNzgxJzogJ2wnLFxuICAgICdcXHVBNzQ3JzogJ2wnLFxuICAgICdcXHUwMUM5JzogJ2xqJyxcbiAgICAnXFx1MjREQyc6ICdtJyxcbiAgICAnXFx1RkY0RCc6ICdtJyxcbiAgICAnXFx1MUUzRic6ICdtJyxcbiAgICAnXFx1MUU0MSc6ICdtJyxcbiAgICAnXFx1MUU0Myc6ICdtJyxcbiAgICAnXFx1MDI3MSc6ICdtJyxcbiAgICAnXFx1MDI2Ric6ICdtJyxcbiAgICAnXFx1MjRERCc6ICduJyxcbiAgICAnXFx1RkY0RSc6ICduJyxcbiAgICAnXFx1MDFGOSc6ICduJyxcbiAgICAnXFx1MDE0NCc6ICduJyxcbiAgICAnXFx1MDBGMSc6ICduJyxcbiAgICAnXFx1MUU0NSc6ICduJyxcbiAgICAnXFx1MDE0OCc6ICduJyxcbiAgICAnXFx1MUU0Nyc6ICduJyxcbiAgICAnXFx1MDE0Nic6ICduJyxcbiAgICAnXFx1MUU0Qic6ICduJyxcbiAgICAnXFx1MUU0OSc6ICduJyxcbiAgICAnXFx1MDE5RSc6ICduJyxcbiAgICAnXFx1MDI3Mic6ICduJyxcbiAgICAnXFx1MDE0OSc6ICduJyxcbiAgICAnXFx1QTc5MSc6ICduJyxcbiAgICAnXFx1QTdBNSc6ICduJyxcbiAgICAnXFx1MDFDQyc6ICduaicsXG4gICAgJ1xcdTI0REUnOiAnbycsXG4gICAgJ1xcdUZGNEYnOiAnbycsXG4gICAgJ1xcdTAwRjInOiAnbycsXG4gICAgJ1xcdTAwRjMnOiAnbycsXG4gICAgJ1xcdTAwRjQnOiAnbycsXG4gICAgJ1xcdTFFRDMnOiAnbycsXG4gICAgJ1xcdTFFRDEnOiAnbycsXG4gICAgJ1xcdTFFRDcnOiAnbycsXG4gICAgJ1xcdTFFRDUnOiAnbycsXG4gICAgJ1xcdTAwRjUnOiAnbycsXG4gICAgJ1xcdTFFNEQnOiAnbycsXG4gICAgJ1xcdTAyMkQnOiAnbycsXG4gICAgJ1xcdTFFNEYnOiAnbycsXG4gICAgJ1xcdTAxNEQnOiAnbycsXG4gICAgJ1xcdTFFNTEnOiAnbycsXG4gICAgJ1xcdTFFNTMnOiAnbycsXG4gICAgJ1xcdTAxNEYnOiAnbycsXG4gICAgJ1xcdTAyMkYnOiAnbycsXG4gICAgJ1xcdTAyMzEnOiAnbycsXG4gICAgJ1xcdTAwRjYnOiAnbycsXG4gICAgJ1xcdTAyMkInOiAnbycsXG4gICAgJ1xcdTFFQ0YnOiAnbycsXG4gICAgJ1xcdTAxNTEnOiAnbycsXG4gICAgJ1xcdTAxRDInOiAnbycsXG4gICAgJ1xcdTAyMEQnOiAnbycsXG4gICAgJ1xcdTAyMEYnOiAnbycsXG4gICAgJ1xcdTAxQTEnOiAnbycsXG4gICAgJ1xcdTFFREQnOiAnbycsXG4gICAgJ1xcdTFFREInOiAnbycsXG4gICAgJ1xcdTFFRTEnOiAnbycsXG4gICAgJ1xcdTFFREYnOiAnbycsXG4gICAgJ1xcdTFFRTMnOiAnbycsXG4gICAgJ1xcdTFFQ0QnOiAnbycsXG4gICAgJ1xcdTFFRDknOiAnbycsXG4gICAgJ1xcdTAxRUInOiAnbycsXG4gICAgJ1xcdTAxRUQnOiAnbycsXG4gICAgJ1xcdTAwRjgnOiAnbycsXG4gICAgJ1xcdTAxRkYnOiAnbycsXG4gICAgJ1xcdTAyNTQnOiAnbycsXG4gICAgJ1xcdUE3NEInOiAnbycsXG4gICAgJ1xcdUE3NEQnOiAnbycsXG4gICAgJ1xcdTAyNzUnOiAnbycsXG4gICAgJ1xcdTAxQTMnOiAnb2knLFxuICAgICdcXHUwMjIzJzogJ291JyxcbiAgICAnXFx1QTc0Ric6ICdvbycsXG4gICAgJ1xcdTI0REYnOiAncCcsXG4gICAgJ1xcdUZGNTAnOiAncCcsXG4gICAgJ1xcdTFFNTUnOiAncCcsXG4gICAgJ1xcdTFFNTcnOiAncCcsXG4gICAgJ1xcdTAxQTUnOiAncCcsXG4gICAgJ1xcdTFEN0QnOiAncCcsXG4gICAgJ1xcdUE3NTEnOiAncCcsXG4gICAgJ1xcdUE3NTMnOiAncCcsXG4gICAgJ1xcdUE3NTUnOiAncCcsXG4gICAgJ1xcdTI0RTAnOiAncScsXG4gICAgJ1xcdUZGNTEnOiAncScsXG4gICAgJ1xcdTAyNEInOiAncScsXG4gICAgJ1xcdUE3NTcnOiAncScsXG4gICAgJ1xcdUE3NTknOiAncScsXG4gICAgJ1xcdTI0RTEnOiAncicsXG4gICAgJ1xcdUZGNTInOiAncicsXG4gICAgJ1xcdTAxNTUnOiAncicsXG4gICAgJ1xcdTFFNTknOiAncicsXG4gICAgJ1xcdTAxNTknOiAncicsXG4gICAgJ1xcdTAyMTEnOiAncicsXG4gICAgJ1xcdTAyMTMnOiAncicsXG4gICAgJ1xcdTFFNUInOiAncicsXG4gICAgJ1xcdTFFNUQnOiAncicsXG4gICAgJ1xcdTAxNTcnOiAncicsXG4gICAgJ1xcdTFFNUYnOiAncicsXG4gICAgJ1xcdTAyNEQnOiAncicsXG4gICAgJ1xcdTAyN0QnOiAncicsXG4gICAgJ1xcdUE3NUInOiAncicsXG4gICAgJ1xcdUE3QTcnOiAncicsXG4gICAgJ1xcdUE3ODMnOiAncicsXG4gICAgJ1xcdTI0RTInOiAncycsXG4gICAgJ1xcdUZGNTMnOiAncycsXG4gICAgJ1xcdTAwREYnOiAncycsXG4gICAgJ1xcdTAxNUInOiAncycsXG4gICAgJ1xcdTFFNjUnOiAncycsXG4gICAgJ1xcdTAxNUQnOiAncycsXG4gICAgJ1xcdTFFNjEnOiAncycsXG4gICAgJ1xcdTAxNjEnOiAncycsXG4gICAgJ1xcdTFFNjcnOiAncycsXG4gICAgJ1xcdTFFNjMnOiAncycsXG4gICAgJ1xcdTFFNjknOiAncycsXG4gICAgJ1xcdTAyMTknOiAncycsXG4gICAgJ1xcdTAxNUYnOiAncycsXG4gICAgJ1xcdTAyM0YnOiAncycsXG4gICAgJ1xcdUE3QTknOiAncycsXG4gICAgJ1xcdUE3ODUnOiAncycsXG4gICAgJ1xcdTFFOUInOiAncycsXG4gICAgJ1xcdTI0RTMnOiAndCcsXG4gICAgJ1xcdUZGNTQnOiAndCcsXG4gICAgJ1xcdTFFNkInOiAndCcsXG4gICAgJ1xcdTFFOTcnOiAndCcsXG4gICAgJ1xcdTAxNjUnOiAndCcsXG4gICAgJ1xcdTFFNkQnOiAndCcsXG4gICAgJ1xcdTAyMUInOiAndCcsXG4gICAgJ1xcdTAxNjMnOiAndCcsXG4gICAgJ1xcdTFFNzEnOiAndCcsXG4gICAgJ1xcdTFFNkYnOiAndCcsXG4gICAgJ1xcdTAxNjcnOiAndCcsXG4gICAgJ1xcdTAxQUQnOiAndCcsXG4gICAgJ1xcdTAyODgnOiAndCcsXG4gICAgJ1xcdTJDNjYnOiAndCcsXG4gICAgJ1xcdUE3ODcnOiAndCcsXG4gICAgJ1xcdUE3MjknOiAndHonLFxuICAgICdcXHUyNEU0JzogJ3UnLFxuICAgICdcXHVGRjU1JzogJ3UnLFxuICAgICdcXHUwMEY5JzogJ3UnLFxuICAgICdcXHUwMEZBJzogJ3UnLFxuICAgICdcXHUwMEZCJzogJ3UnLFxuICAgICdcXHUwMTY5JzogJ3UnLFxuICAgICdcXHUxRTc5JzogJ3UnLFxuICAgICdcXHUwMTZCJzogJ3UnLFxuICAgICdcXHUxRTdCJzogJ3UnLFxuICAgICdcXHUwMTZEJzogJ3UnLFxuICAgICdcXHUwMEZDJzogJ3UnLFxuICAgICdcXHUwMURDJzogJ3UnLFxuICAgICdcXHUwMUQ4JzogJ3UnLFxuICAgICdcXHUwMUQ2JzogJ3UnLFxuICAgICdcXHUwMURBJzogJ3UnLFxuICAgICdcXHUxRUU3JzogJ3UnLFxuICAgICdcXHUwMTZGJzogJ3UnLFxuICAgICdcXHUwMTcxJzogJ3UnLFxuICAgICdcXHUwMUQ0JzogJ3UnLFxuICAgICdcXHUwMjE1JzogJ3UnLFxuICAgICdcXHUwMjE3JzogJ3UnLFxuICAgICdcXHUwMUIwJzogJ3UnLFxuICAgICdcXHUxRUVCJzogJ3UnLFxuICAgICdcXHUxRUU5JzogJ3UnLFxuICAgICdcXHUxRUVGJzogJ3UnLFxuICAgICdcXHUxRUVEJzogJ3UnLFxuICAgICdcXHUxRUYxJzogJ3UnLFxuICAgICdcXHUxRUU1JzogJ3UnLFxuICAgICdcXHUxRTczJzogJ3UnLFxuICAgICdcXHUwMTczJzogJ3UnLFxuICAgICdcXHUxRTc3JzogJ3UnLFxuICAgICdcXHUxRTc1JzogJ3UnLFxuICAgICdcXHUwMjg5JzogJ3UnLFxuICAgICdcXHUyNEU1JzogJ3YnLFxuICAgICdcXHVGRjU2JzogJ3YnLFxuICAgICdcXHUxRTdEJzogJ3YnLFxuICAgICdcXHUxRTdGJzogJ3YnLFxuICAgICdcXHUwMjhCJzogJ3YnLFxuICAgICdcXHVBNzVGJzogJ3YnLFxuICAgICdcXHUwMjhDJzogJ3YnLFxuICAgICdcXHVBNzYxJzogJ3Z5JyxcbiAgICAnXFx1MjRFNic6ICd3JyxcbiAgICAnXFx1RkY1Nyc6ICd3JyxcbiAgICAnXFx1MUU4MSc6ICd3JyxcbiAgICAnXFx1MUU4Myc6ICd3JyxcbiAgICAnXFx1MDE3NSc6ICd3JyxcbiAgICAnXFx1MUU4Nyc6ICd3JyxcbiAgICAnXFx1MUU4NSc6ICd3JyxcbiAgICAnXFx1MUU5OCc6ICd3JyxcbiAgICAnXFx1MUU4OSc6ICd3JyxcbiAgICAnXFx1MkM3Myc6ICd3JyxcbiAgICAnXFx1MjRFNyc6ICd4JyxcbiAgICAnXFx1RkY1OCc6ICd4JyxcbiAgICAnXFx1MUU4Qic6ICd4JyxcbiAgICAnXFx1MUU4RCc6ICd4JyxcbiAgICAnXFx1MjRFOCc6ICd5JyxcbiAgICAnXFx1RkY1OSc6ICd5JyxcbiAgICAnXFx1MUVGMyc6ICd5JyxcbiAgICAnXFx1MDBGRCc6ICd5JyxcbiAgICAnXFx1MDE3Nyc6ICd5JyxcbiAgICAnXFx1MUVGOSc6ICd5JyxcbiAgICAnXFx1MDIzMyc6ICd5JyxcbiAgICAnXFx1MUU4Ric6ICd5JyxcbiAgICAnXFx1MDBGRic6ICd5JyxcbiAgICAnXFx1MUVGNyc6ICd5JyxcbiAgICAnXFx1MUU5OSc6ICd5JyxcbiAgICAnXFx1MUVGNSc6ICd5JyxcbiAgICAnXFx1MDFCNCc6ICd5JyxcbiAgICAnXFx1MDI0Ric6ICd5JyxcbiAgICAnXFx1MUVGRic6ICd5JyxcbiAgICAnXFx1MjRFOSc6ICd6JyxcbiAgICAnXFx1RkY1QSc6ICd6JyxcbiAgICAnXFx1MDE3QSc6ICd6JyxcbiAgICAnXFx1MUU5MSc6ICd6JyxcbiAgICAnXFx1MDE3Qyc6ICd6JyxcbiAgICAnXFx1MDE3RSc6ICd6JyxcbiAgICAnXFx1MUU5Myc6ICd6JyxcbiAgICAnXFx1MUU5NSc6ICd6JyxcbiAgICAnXFx1MDFCNic6ICd6JyxcbiAgICAnXFx1MDIyNSc6ICd6JyxcbiAgICAnXFx1MDI0MCc6ICd6JyxcbiAgICAnXFx1MkM2Qyc6ICd6JyxcbiAgICAnXFx1QTc2Myc6ICd6JyxcbiAgICAnXFx1MDM4Nic6ICdcXHUwMzkxJyxcbiAgICAnXFx1MDM4OCc6ICdcXHUwMzk1JyxcbiAgICAnXFx1MDM4OSc6ICdcXHUwMzk3JyxcbiAgICAnXFx1MDM4QSc6ICdcXHUwMzk5JyxcbiAgICAnXFx1MDNBQSc6ICdcXHUwMzk5JyxcbiAgICAnXFx1MDM4Qyc6ICdcXHUwMzlGJyxcbiAgICAnXFx1MDM4RSc6ICdcXHUwM0E1JyxcbiAgICAnXFx1MDNBQic6ICdcXHUwM0E1JyxcbiAgICAnXFx1MDM4Ric6ICdcXHUwM0E5JyxcbiAgICAnXFx1MDNBQyc6ICdcXHUwM0IxJyxcbiAgICAnXFx1MDNBRCc6ICdcXHUwM0I1JyxcbiAgICAnXFx1MDNBRSc6ICdcXHUwM0I3JyxcbiAgICAnXFx1MDNBRic6ICdcXHUwM0I5JyxcbiAgICAnXFx1MDNDQSc6ICdcXHUwM0I5JyxcbiAgICAnXFx1MDM5MCc6ICdcXHUwM0I5JyxcbiAgICAnXFx1MDNDQyc6ICdcXHUwM0JGJyxcbiAgICAnXFx1MDNDRCc6ICdcXHUwM0M1JyxcbiAgICAnXFx1MDNDQic6ICdcXHUwM0M1JyxcbiAgICAnXFx1MDNCMCc6ICdcXHUwM0M1JyxcbiAgICAnXFx1MDNDOSc6ICdcXHUwM0M5JyxcbiAgICAnXFx1MDNDMic6ICdcXHUwM0MzJ1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwU3BlY2lhbENoYXJzKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWF0Y2ggPSAoYTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIGRpYWNyaXRpY3NbYV0gfHwgYTtcbiAgICB9O1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1teXFx1MDAwMC1cXHUwMDdFXS9nLCBtYXRjaCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbmV3SWQoKSB7XG4gICAgLy8gRmlyc3QgY2hhcmFjdGVyIGlzIGFuICdhJywgaXQncyBnb29kIHByYWN0aWNlIHRvIHRhZyBpZCB0byBiZWdpbiB3aXRoIGEgbGV0dGVyXG4gICAgcmV0dXJuICdheHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4XS9nLCBmdW5jdGlvbiAoXykge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBjb25zdCB2YWwgPSBNYXRoLnJhbmRvbSgpICogMTYgfCAwO1xuICAgICAgICByZXR1cm4gdmFsLnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IE5nT3B0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QudHlwZXMnO1xuaW1wb3J0ICogYXMgc2VhcmNoSGVscGVyIGZyb20gJy4vc2VhcmNoLWhlbHBlcic7XG5pbXBvcnQgeyBOZ1NlbGVjdENvbXBvbmVudCB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBpc0RlZmluZWQsIGlzRnVuY3Rpb24sIGlzT2JqZWN0IH0gZnJvbSAnLi92YWx1ZS11dGlscyc7XG5pbXBvcnQgeyBuZXdJZCB9IGZyb20gJy4vaWQnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICcuL3NlbGVjdGlvbi1tb2RlbCc7XG5cbnR5cGUgT3B0aW9uR3JvdXBzID0gTWFwPHN0cmluZyB8IE5nT3B0aW9uLCBOZ09wdGlvbltdPjtcblxuZXhwb3J0IGNsYXNzIEl0ZW1zTGlzdCB7XG4gICAgcHJpdmF0ZSBfZ3JvdXBzOiBPcHRpb25Hcm91cHM7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfbmdTZWxlY3Q6IE5nU2VsZWN0Q29tcG9uZW50LFxuICAgICAgICBwcml2YXRlIF9zZWxlY3Rpb25Nb2RlbDogU2VsZWN0aW9uTW9kZWwpIHtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pdGVtczogTmdPcHRpb25bXSA9IFtdO1xuXG4gICAgZ2V0IGl0ZW1zKCk6IE5nT3B0aW9uW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbXM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlsdGVyZWRJdGVtczogTmdPcHRpb25bXSA9IFtdO1xuXG4gICAgZ2V0IGZpbHRlcmVkSXRlbXMoKTogTmdPcHRpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJlZEl0ZW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21hcmtlZEluZGV4ID0gLTE7XG5cbiAgICBnZXQgbWFya2VkSW5kZXgoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcmtlZEluZGV4O1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZEl0ZW1zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2VsZWN0aW9uTW9kZWwudmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0IG1hcmtlZEl0ZW0oKTogTmdPcHRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fZmlsdGVyZWRJdGVtc1t0aGlzLl9tYXJrZWRJbmRleF07XG4gICAgfVxuXG4gICAgZ2V0IG5vSXRlbXNUb1NlbGVjdCgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCAmJiB0aGlzLl9pdGVtcy5sZW5ndGggPT09IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IG1heEl0ZW1zU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZSAmJiB0aGlzLl9uZ1NlbGVjdC5tYXhTZWxlY3RlZEl0ZW1zIDw9IHRoaXMuc2VsZWN0ZWRJdGVtcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0IGxhc3RTZWxlY3RlZEl0ZW0oKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIGZvciAoOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbXNbaV07XG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRJdGVtcyhpdGVtczogYW55W10pIHtcbiAgICAgICAgdGhpcy5faXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB0aGlzLm1hcEl0ZW0oaXRlbSwgaW5kZXgpKTtcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0Lmdyb3VwQnkpIHtcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwcyA9IHRoaXMuX2dyb3VwQnkodGhpcy5faXRlbXMsIHRoaXMuX25nU2VsZWN0Lmdyb3VwQnkpO1xuICAgICAgICAgICAgdGhpcy5faXRlbXMgPSB0aGlzLl9mbGF0dGVuKHRoaXMuX2dyb3Vwcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9ncm91cHMgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICB0aGlzLl9ncm91cHMuc2V0KHVuZGVmaW5lZCwgdGhpcy5faXRlbXMpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IFsuLi50aGlzLl9pdGVtc107XG4gICAgfVxuXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmIChpdGVtLnNlbGVjdGVkIHx8IHRoaXMubWF4SXRlbXNTZWxlY3RlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5fbmdTZWxlY3QubXVsdGlwbGU7XG4gICAgICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGl0ZW0sIG11bHRpcGxlLCB0aGlzLl9uZ1NlbGVjdC5zZWxlY3RhYmxlR3JvdXBBc01vZGVsKTtcbiAgICAgICAgaWYgKHRoaXMuX25nU2VsZWN0LmhpZGVTZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5faGlkZVNlbGVjdGVkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKCFpdGVtLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwudW5zZWxlY3QoaXRlbSwgdGhpcy5fbmdTZWxlY3QubXVsdGlwbGUpO1xuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkICYmIGlzRGVmaW5lZChpdGVtLmluZGV4KSAmJiB0aGlzLl9uZ1NlbGVjdC5tdWx0aXBsZSkge1xuICAgICAgICAgICAgdGhpcy5fc2hvd1NlbGVjdGVkKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmluZEl0ZW0odmFsdWU6IGFueSk6IE5nT3B0aW9uIHtcbiAgICAgICAgbGV0IGZpbmRCeTogKGl0ZW06IE5nT3B0aW9uKSA9PiBib29sZWFuO1xuICAgICAgICBpZiAodGhpcy5fbmdTZWxlY3QuY29tcGFyZVdpdGgpIHtcbiAgICAgICAgICAgIGZpbmRCeSA9IGl0ZW0gPT4gdGhpcy5fbmdTZWxlY3QuY29tcGFyZVdpdGgoaXRlbS52YWx1ZSwgdmFsdWUpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlKSB7XG4gICAgICAgICAgICBmaW5kQnkgPSBpdGVtID0+ICFpdGVtLmNoaWxkcmVuICYmIHRoaXMucmVzb2x2ZU5lc3RlZChpdGVtLnZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kVmFsdWUpID09PSB2YWx1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmluZEJ5ID0gaXRlbSA9PiBpdGVtLnZhbHVlID09PSB2YWx1ZSB8fFxuICAgICAgICAgICAgICAgICFpdGVtLmNoaWxkcmVuICYmIGl0ZW0ubGFiZWwgJiYgaXRlbS5sYWJlbCA9PT0gdGhpcy5yZXNvbHZlTmVzdGVkKHZhbHVlLCB0aGlzLl9uZ1NlbGVjdC5iaW5kTGFiZWwpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmZpbmQoaXRlbSA9PiBmaW5kQnkoaXRlbSkpO1xuICAgIH1cblxuICAgIGFkZEl0ZW0oaXRlbTogYW55KSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHRoaXMubWFwSXRlbShpdGVtLCB0aGlzLl9pdGVtcy5sZW5ndGgpO1xuICAgICAgICB0aGlzLl9pdGVtcy5wdXNoKG9wdGlvbik7XG4gICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChvcHRpb24pO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIGNsZWFyU2VsZWN0ZWQoa2VlcERpc2FibGVkID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuY2xlYXIoa2VlcERpc2FibGVkKTtcbiAgICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBrZWVwRGlzYWJsZWQgJiYgaXRlbS5zZWxlY3RlZCAmJiBpdGVtLmRpc2FibGVkO1xuICAgICAgICAgICAgaXRlbS5tYXJrZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRGaWx0ZXJlZEl0ZW1zKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kQnlMYWJlbCh0ZXJtOiBzdHJpbmcpIHtcbiAgICAgICAgdGVybSA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyh0ZXJtKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5maWx0ZXJlZEl0ZW1zLmZpbmQoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IHNlYXJjaEhlbHBlci5zdHJpcFNwZWNpYWxDaGFycyhpdGVtLmxhYmVsKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGxhYmVsLnN1YnN0cigwLCB0ZXJtLmxlbmd0aCkgPT09IHRlcm07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpbHRlcih0ZXJtOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0ZXJtKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RmlsdGVyZWRJdGVtcygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IFtdO1xuICAgICAgICB0ZXJtID0gdGhpcy5fbmdTZWxlY3Quc2VhcmNoRm4gPyB0ZXJtIDogc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRlcm0pLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IG1hdGNoID0gdGhpcy5fbmdTZWxlY3Quc2VhcmNoRm4gfHwgdGhpcy5fZGVmYXVsdFNlYXJjaEZuO1xuICAgICAgICBjb25zdCBoaWRlU2VsZWN0ZWQgPSB0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQ7XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgQXJyYXkuZnJvbSh0aGlzLl9ncm91cHMua2V5cygpKSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlZEl0ZW1zID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5fZ3JvdXBzLmdldChrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGhpZGVTZWxlY3RlZCAmJiAoaXRlbS5wYXJlbnQgJiYgaXRlbS5wYXJlbnQuc2VsZWN0ZWQgfHwgaXRlbS5zZWxlY3RlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaEl0ZW0gPSB0aGlzLl9uZ1NlbGVjdC5zZWFyY2hGbiA/IGl0ZW0udmFsdWUgOiBpdGVtO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCh0ZXJtLCBzZWFyY2hJdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbGFzdF0gPSBtYXRjaGVkSXRlbXMuc2xpY2UoLTEpO1xuICAgICAgICAgICAgICAgIGlmIChsYXN0LnBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkID0gdGhpcy5faXRlbXMuZmluZCh4ID0+IHggPT09IGxhc3QucGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcy5wdXNoKGhlYWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goLi4ubWF0Y2hlZEl0ZW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0RmlsdGVyZWRJdGVtcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLl9pdGVtcy5maWx0ZXIoeCA9PiAheC5zZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zID0gdGhpcy5faXRlbXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bm1hcmtJdGVtKCkge1xuICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IC0xO1xuICAgIH1cblxuICAgIG1hcmtOZXh0SXRlbSgpIHtcbiAgICAgICAgdGhpcy5fc3RlcFRvSXRlbSgrMSk7XG4gICAgfVxuXG4gICAgbWFya1ByZXZpb3VzSXRlbSgpIHtcbiAgICAgICAgdGhpcy5fc3RlcFRvSXRlbSgtMSk7XG4gICAgfVxuXG4gICAgbWFya0l0ZW0oaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgdGhpcy5fbWFya2VkSW5kZXggPSB0aGlzLl9maWx0ZXJlZEl0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgfVxuXG4gICAgbWFya1NlbGVjdGVkT3JEZWZhdWx0KG1hcmtEZWZhdWx0PzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fZmlsdGVyZWRJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleE9mTGFzdFNlbGVjdGVkID0gdGhpcy5fbmdTZWxlY3QuaGlkZVNlbGVjdGVkID8gLTEgOiB0aGlzLl9maWx0ZXJlZEl0ZW1zLmluZGV4T2YodGhpcy5sYXN0U2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgaWYgKHRoaXMubGFzdFNlbGVjdGVkSXRlbSAmJiBpbmRleE9mTGFzdFNlbGVjdGVkID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gaW5kZXhPZkxhc3RTZWxlY3RlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5leGNsdWRlR3JvdXBzRnJvbURlZmF1bHRTZWxlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IG1hcmtEZWZhdWx0ID8gdGhpcy5maWx0ZXJlZEl0ZW1zLmZpbmRJbmRleCh4ID0+ICF4LmRpc2FibGVkICYmICF4LmNoaWxkcmVuKSA6IC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXJrZWRJbmRleCA9IG1hcmtEZWZhdWx0ID8gdGhpcy5maWx0ZXJlZEl0ZW1zLmZpbmRJbmRleCh4ID0+ICF4LmRpc2FibGVkKSA6IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVzb2x2ZU5lc3RlZChvcHRpb246IGFueSwga2V5OiBzdHJpbmcpOiBhbnkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KG9wdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0aW9uW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQga2V5czogc3RyaW5nW10gPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVba2V5c1tpXV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXBJdGVtKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlcik6IE5nT3B0aW9uIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBpc0RlZmluZWQoaXRlbS4kbmdPcHRpb25MYWJlbCkgPyBpdGVtLiRuZ09wdGlvbkxhYmVsIDogdGhpcy5yZXNvbHZlTmVzdGVkKGl0ZW0sIHRoaXMuX25nU2VsZWN0LmJpbmRMYWJlbCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gaXNEZWZpbmVkKGl0ZW0uJG5nT3B0aW9uVmFsdWUpID8gaXRlbS4kbmdPcHRpb25WYWx1ZSA6IGl0ZW07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBsYWJlbDogaXNEZWZpbmVkKGxhYmVsKSA/IGxhYmVsLnRvU3RyaW5nKCkgOiAnJyxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBpdGVtLmRpc2FibGVkLFxuICAgICAgICAgICAgaHRtbElkOiBuZXdJZCgpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG1hcFNlbGVjdGVkSXRlbXMoKSB7XG4gICAgICAgIGNvbnN0IG11bHRpcGxlID0gdGhpcy5fbmdTZWxlY3QubXVsdGlwbGU7XG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWQgb2YgdGhpcy5zZWxlY3RlZEl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX25nU2VsZWN0LmJpbmRWYWx1ZSA/IHRoaXMucmVzb2x2ZU5lc3RlZChzZWxlY3RlZC52YWx1ZSwgdGhpcy5fbmdTZWxlY3QuYmluZFZhbHVlKSA6IHNlbGVjdGVkLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGlzRGVmaW5lZCh2YWx1ZSkgPyB0aGlzLmZpbmRJdGVtKHZhbHVlKSA6IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25Nb2RlbC51bnNlbGVjdChzZWxlY3RlZCwgbXVsdGlwbGUpO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0aW9uTW9kZWwuc2VsZWN0KGl0ZW0gfHwgc2VsZWN0ZWQsIG11bHRpcGxlLCB0aGlzLl9uZ1NlbGVjdC5zZWxlY3RhYmxlR3JvdXBBc01vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9uZ1NlbGVjdC5oaWRlU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcmVkSXRlbXMuZmlsdGVyKHggPT4gdGhpcy5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoeCkgPT09IC0xKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3Nob3dTZWxlY3RlZChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnQ7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnRFeGlzdHMgPSB0aGlzLl9maWx0ZXJlZEl0ZW1zLmZpbmQoeCA9PiB4ID09PSBwYXJlbnQpO1xuICAgICAgICAgICAgaWYgKCFwYXJlbnRFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9maWx0ZXJlZEl0ZW1zLnB1c2gocGFyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMucHVzaChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IFsuLi50aGlzLl9maWx0ZXJlZEl0ZW1zLnNvcnQoKGEsIGIpID0+IChhLmluZGV4IC0gYi5pbmRleCkpXTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oaWRlU2VsZWN0ZWQoaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmlsdGVyKHggPT4geCAhPT0gaXRlbSk7XG4gICAgICAgIGlmIChpdGVtLnBhcmVudCkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGRyZW4gPSBpdGVtLnBhcmVudC5jaGlsZHJlbjtcbiAgICAgICAgICAgIGlmIChjaGlsZHJlbi5ldmVyeSh4ID0+IHguc2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsdGVyZWRJdGVtcyA9IHRoaXMuX2ZpbHRlcmVkSXRlbXMuZmlsdGVyKHggPT4geCAhPT0gaXRlbS5wYXJlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXMgPSB0aGlzLmZpbHRlcmVkSXRlbXMuZmlsdGVyKHggPT4geC5wYXJlbnQgIT09IGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZGVmYXVsdFNlYXJjaEZuKHNlYXJjaDogc3RyaW5nLCBvcHQ6IE5nT3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKG9wdC5sYWJlbCkudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxhYmVsLmluZGV4T2Yoc2VhcmNoKSA+IC0xXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ2V0TmV4dEl0ZW1JbmRleChzdGVwczogbnVtYmVyKSB7XG4gICAgICAgIGlmIChzdGVwcyA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fbWFya2VkSW5kZXggPT09IHRoaXMuX2ZpbHRlcmVkSXRlbXMubGVuZ3RoIC0gMSkgPyAwIDogKHRoaXMuX21hcmtlZEluZGV4ICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICh0aGlzLl9tYXJrZWRJbmRleCA8PSAwKSA/ICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCAtIDEpIDogKHRoaXMuX21hcmtlZEluZGV4IC0gMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc3RlcFRvSXRlbShzdGVwczogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0aGlzLl9maWx0ZXJlZEl0ZW1zLmxlbmd0aCA9PT0gMCB8fCB0aGlzLl9maWx0ZXJlZEl0ZW1zLmV2ZXJ5KHggPT4geC5kaXNhYmxlZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX21hcmtlZEluZGV4ID0gdGhpcy5fZ2V0TmV4dEl0ZW1JbmRleChzdGVwcyk7XG4gICAgICAgIGlmICh0aGlzLm1hcmtlZEl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBUb0l0ZW0oc3RlcHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZ3JvdXBCeShpdGVtczogTmdPcHRpb25bXSwgcHJvcDogc3RyaW5nIHwgRnVuY3Rpb24pOiBPcHRpb25Hcm91cHMge1xuICAgICAgICBjb25zdCBncm91cHMgPSBuZXcgTWFwPHN0cmluZyB8IE5nT3B0aW9uLCBOZ09wdGlvbltdPigpO1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXBzO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgaXRlbXMgYXJlIGFscmVhZHkgZ3JvdXBlZCBieSBnaXZlbiBrZXkuXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1zWzBdLnZhbHVlWzxzdHJpbmc+cHJvcF0pKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgaXRlbXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IChpdGVtLnZhbHVlWzxzdHJpbmc+cHJvcF0gfHwgW10pLm1hcCgoeCwgaW5kZXgpID0+IHRoaXMubWFwSXRlbSh4LCBpbmRleCkpO1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5zZXQoaXRlbSwgY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzRm5LZXkgPSBpc0Z1bmN0aW9uKHRoaXMuX25nU2VsZWN0Lmdyb3VwQnkpO1xuICAgICAgICBjb25zdCBrZXlGbiA9IChpdGVtOiBOZ09wdGlvbikgPT4ge1xuICAgICAgICAgICAgbGV0IGtleSA9IGlzRm5LZXkgPyAoPEZ1bmN0aW9uPnByb3ApKGl0ZW0udmFsdWUpIDogaXRlbS52YWx1ZVs8c3RyaW5nPnByb3BdO1xuICAgICAgICAgICAgcmV0dXJuIGlzRGVmaW5lZChrZXkpID8ga2V5IDogdW5kZWZpbmVkO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdyb3VwIGl0ZW1zIGJ5IGtleS5cbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIGl0ZW1zKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0ga2V5Rm4oaXRlbSk7XG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGdyb3Vwcy5nZXQoa2V5KTtcbiAgICAgICAgICAgIGlmIChncm91cCkge1xuICAgICAgICAgICAgICAgIGdyb3VwLnB1c2goaXRlbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdyb3Vwcy5zZXQoa2V5LCBbaXRlbV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBncm91cHM7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmxhdHRlbihncm91cHM6IE9wdGlvbkdyb3Vwcykge1xuICAgICAgICBjb25zdCBpc0dyb3VwQnlGbiA9IGlzRnVuY3Rpb24odGhpcy5fbmdTZWxlY3QuZ3JvdXBCeSk7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW107XG4gICAgICAgIGNvbnN0IHdpdGhvdXRHcm91cCA9IGdyb3Vwcy5nZXQodW5kZWZpbmVkKSB8fCBbXTtcbiAgICAgICAgaXRlbXMucHVzaCguLi53aXRob3V0R3JvdXApO1xuICAgICAgICBsZXQgaSA9IHdpdGhvdXRHcm91cC5sZW5ndGg7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIEFycmF5LmZyb20oZ3JvdXBzLmtleXMoKSkpIHtcbiAgICAgICAgICAgIGlmICghaXNEZWZpbmVkKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGlzT2JqZWN0S2V5ID0gaXNPYmplY3Qoa2V5KTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudDogTmdPcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGlzT2JqZWN0S2V5ID8gJycgOiA8c3RyaW5nPmtleSxcbiAgICAgICAgICAgICAgICBjaGlsZHJlbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHBhcmVudDogbnVsbCxcbiAgICAgICAgICAgICAgICBpbmRleDogaSsrLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5fbmdTZWxlY3Quc2VsZWN0YWJsZUdyb3VwLFxuICAgICAgICAgICAgICAgIGh0bWxJZDogbmV3SWQoKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBncm91cEtleSA9IGlzR3JvdXBCeUZuID8gdGhpcy5fbmdTZWxlY3QuYmluZExhYmVsIDogPHN0cmluZz50aGlzLl9uZ1NlbGVjdC5ncm91cEJ5O1xuICAgICAgICAgICAgY29uc3QgZ3JvdXBWYWx1ZSA9IHRoaXMuX25nU2VsZWN0Lmdyb3VwVmFsdWUgfHwgKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXNPYmplY3RLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8TmdPcHRpb24+a2V5KS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgW2dyb3VwS2V5XToga2V5IH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gZ3JvdXBzLmdldChrZXkpLm1hcCh4ID0+IHtcbiAgICAgICAgICAgICAgICB4LnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICB4LmNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHguaW5kZXggPSBpKys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHg7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICAgICAgICAgICAgcGFyZW50LnZhbHVlID0gZ3JvdXBWYWx1ZShrZXksIGNoaWxkcmVuLm1hcCh4ID0+IHgudmFsdWUpKTtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gocGFyZW50KTtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goLi4uY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIE5nT3B0aW9uIHtcbiAgICBbbmFtZTogc3RyaW5nXTogYW55O1xuICAgIGluZGV4PzogbnVtYmVyO1xuICAgIGh0bWxJZD86IHN0cmluZztcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gICAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICAgIG1hcmtlZD86IGJvb2xlYW47XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgdmFsdWU/OiBzdHJpbmcgfCBPYmplY3Q7XG4gICAgcGFyZW50PzogTmdPcHRpb247XG4gICAgY2hpbGRyZW4/OiBOZ09wdGlvbltdO1xufVxuXG5leHBvcnQgZW51bSBLZXlDb2RlIHtcbiAgICBUYWIgPSA5LFxuICAgIEVudGVyID0gMTMsXG4gICAgRXNjID0gMjcsXG4gICAgU3BhY2UgPSAzMixcbiAgICBBcnJvd1VwID0gMzgsXG4gICAgQXJyb3dEb3duID0gNDAsXG4gICAgQmFja3NwYWNlID0gOFxufVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFdpbmRvd1NlcnZpY2Uge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmbikge1xuICAgICAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmbik7XG4gICAgfVxuXG4gICAgc2V0VGltZW91dChoYW5kbGVyOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQsIHRpbWVvdXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbXNEaW1lbnNpb25zIHtcbiAgICBpdGVtc0xlbmd0aDogbnVtYmVyO1xuICAgIHZpZXdXaWR0aDogbnVtYmVyO1xuICAgIHZpZXdIZWlnaHQ6IG51bWJlcjtcbiAgICBjaGlsZFdpZHRoOiBudW1iZXI7XG4gICAgY2hpbGRIZWlnaHQ6IG51bWJlcjtcbiAgICBpdGVtc1BlckNvbDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEl0ZW1zUmFuZ2VSZXN1bHQge1xuICAgIHNjcm9sbEhlaWdodDogbnVtYmVyO1xuICAgIHRvcFBhZGRpbmc6IG51bWJlcjtcbiAgICBzdGFydDogbnVtYmVyO1xuICAgIGVuZDogbnVtYmVyO1xufVxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFZpcnR1YWxTY3JvbGxTZXJ2aWNlIHtcblxuICAgIGNhbGN1bGF0ZUl0ZW1zKGQ6IEl0ZW1zRGltZW5zaW9ucywgZHJvcGRvd25FbDogSFRNTEVsZW1lbnQsIGJ1ZmZlckFtb3VudDogbnVtYmVyKTogSXRlbXNSYW5nZVJlc3VsdCB7XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9IGQuY2hpbGRIZWlnaHQgKiBkLml0ZW1zTGVuZ3RoO1xuICAgICAgICBpZiAoZHJvcGRvd25FbC5zY3JvbGxUb3AgPiBzY3JvbGxIZWlnaHQpIHtcbiAgICAgICAgICAgIGRyb3Bkb3duRWwuc2Nyb2xsVG9wID0gc2Nyb2xsSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgZHJvcGRvd25FbC5zY3JvbGxUb3ApO1xuICAgICAgICBjb25zdCBpbmRleEJ5U2Nyb2xsVG9wID0gc2Nyb2xsVG9wIC8gc2Nyb2xsSGVpZ2h0ICogZC5pdGVtc0xlbmd0aDtcbiAgICAgICAgbGV0IGVuZCA9IE1hdGgubWluKGQuaXRlbXNMZW5ndGgsIE1hdGguY2VpbChpbmRleEJ5U2Nyb2xsVG9wKSArIChkLml0ZW1zUGVyQ29sICsgMSkpO1xuXG4gICAgICAgIGNvbnN0IG1heFN0YXJ0RW5kID0gZW5kO1xuICAgICAgICBjb25zdCBtYXhTdGFydCA9IE1hdGgubWF4KDAsIG1heFN0YXJ0RW5kIC0gZC5pdGVtc1BlckNvbCAtIDEpO1xuICAgICAgICBsZXQgc3RhcnQgPSBNYXRoLm1pbihtYXhTdGFydCwgTWF0aC5mbG9vcihpbmRleEJ5U2Nyb2xsVG9wKSk7XG5cbiAgICAgICAgbGV0IHRvcFBhZGRpbmcgPSBkLmNoaWxkSGVpZ2h0ICogTWF0aC5jZWlsKHN0YXJ0KSAtIChkLmNoaWxkSGVpZ2h0ICogTWF0aC5taW4oc3RhcnQsIGJ1ZmZlckFtb3VudCkpO1xuICAgICAgICB0b3BQYWRkaW5nID0gIWlzTmFOKHRvcFBhZGRpbmcpID8gdG9wUGFkZGluZyA6IDA7XG4gICAgICAgIHN0YXJ0ID0gIWlzTmFOKHN0YXJ0KSA/IHN0YXJ0IDogLTE7XG4gICAgICAgIGVuZCA9ICFpc05hTihlbmQpID8gZW5kIDogLTE7XG4gICAgICAgIHN0YXJ0IC09IGJ1ZmZlckFtb3VudDtcbiAgICAgICAgc3RhcnQgPSBNYXRoLm1heCgwLCBzdGFydCk7XG4gICAgICAgIGVuZCArPSBidWZmZXJBbW91bnQ7XG4gICAgICAgIGVuZCA9IE1hdGgubWluKGQuaXRlbXNMZW5ndGgsIGVuZCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRvcFBhZGRpbmc6IHRvcFBhZGRpbmcsXG4gICAgICAgICAgICBzY3JvbGxIZWlnaHQ6IHNjcm9sbEhlaWdodCxcbiAgICAgICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICAgICAgICAgIGVuZDogZW5kXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVEaW1lbnNpb25zKGl0ZW1zTGVuZ3RoOiBudW1iZXIsIGluZGV4OiBudW1iZXIsIHBhbmVsRWw6IEhUTUxFbGVtZW50LCBjb250ZW50RWw6IEhUTUxFbGVtZW50KTogSXRlbXNEaW1lbnNpb25zIHtcbiAgICAgICAgY29uc3QgcGFuZWxSZWN0ID0gcGFuZWxFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgaXRlbVJlY3QgPSBjb250ZW50RWwuY2hpbGRyZW5baW5kZXhdID8gY29udGVudEVsLmNoaWxkcmVuW2luZGV4XS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHtcbiAgICAgICAgICAgIHdpZHRoOiBwYW5lbFJlY3Qud2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHBhbmVsUmVjdC5oZWlnaHQsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGl0ZW1zUGVyQ29sID0gTWF0aC5tYXgoMSwgTWF0aC5mbG9vcihwYW5lbFJlY3QuaGVpZ2h0IC8gaXRlbVJlY3QuaGVpZ2h0KSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW1zTGVuZ3RoOiBpdGVtc0xlbmd0aCxcbiAgICAgICAgICAgIHZpZXdXaWR0aDogcGFuZWxSZWN0LndpZHRoLFxuICAgICAgICAgICAgdmlld0hlaWdodDogcGFuZWxSZWN0LmhlaWdodCxcbiAgICAgICAgICAgIGNoaWxkV2lkdGg6IGl0ZW1SZWN0LndpZHRoLFxuICAgICAgICAgICAgY2hpbGRIZWlnaHQ6IGl0ZW1SZWN0LmhlaWdodCxcbiAgICAgICAgICAgIGl0ZW1zUGVyQ29sOiBpdGVtc1BlckNvbCxcbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgUmVuZGVyZXIyLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIE91dHB1dCxcbiAgICBWaWV3Q2hpbGQsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbiAgICBOZ1pvbmUsXG4gICAgVGVtcGxhdGVSZWYsXG4gICAgVmlld0VuY2Fwc3VsYXRpb24sXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBPbkluaXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIEhvc3RMaXN0ZW5lcixcbiAgICBPcHRpb25hbCxcbiAgICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IE5nT3B0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QudHlwZXMnO1xuaW1wb3J0IHsgRHJvcGRvd25Qb3NpdGlvbiB9IGZyb20gJy4vbmctc2VsZWN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaW5kb3dTZXJ2aWNlIH0gZnJvbSAnLi93aW5kb3cuc2VydmljZSc7XG5pbXBvcnQgeyBWaXJ0dWFsU2Nyb2xsU2VydmljZSB9IGZyb20gJy4vdmlydHVhbC1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFRPUF9DU1NfQ0xBU1MgPSAnbmctc2VsZWN0LXRvcCc7XG5jb25zdCBCT1RUT01fQ1NTX0NMQVNTID0gJ25nLXNlbGVjdC1ib3R0b20nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHNlbGVjdG9yOiAnbmctZHJvcGRvd24tcGFuZWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgKm5nSWY9XCJoZWFkZXJUZW1wbGF0ZVwiIGNsYXNzPVwibmctZHJvcGRvd24taGVhZGVyXCI+XG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImhlYWRlclRlbXBsYXRlXCIgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInsgc2VhcmNoVGVybTogZmlsdGVyVmFsdWUgfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAjc2Nyb2xsIGNsYXNzPVwibmctZHJvcGRvd24tcGFuZWwtaXRlbXMgc2Nyb2xsLWhvc3RcIj5cbiAgICAgICAgICAgIDxkaXYgI3BhZGRpbmcgW2NsYXNzLnRvdGFsLXBhZGRpbmddPVwidmlydHVhbFNjcm9sbFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiAjY29udGVudCBbY2xhc3Muc2Nyb2xsYWJsZS1jb250ZW50XT1cInZpcnR1YWxTY3JvbGwgJiYgaXRlbXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdJZj1cImZvb3RlclRlbXBsYXRlXCIgY2xhc3M9XCJuZy1kcm9wZG93bi1mb290ZXJcIj5cbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZm9vdGVyVGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyBzZWFyY2hUZXJtOiBmaWx0ZXJWYWx1ZSB9XCI+PC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgTmdEcm9wZG93blBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50SW5pdCB7XG5cbiAgICBASW5wdXQoKSBpdGVtczogTmdPcHRpb25bXSA9IFtdO1xuICAgIEBJbnB1dCgpIG1hcmtlZEl0ZW06IE5nT3B0aW9uO1xuICAgIEBJbnB1dCgpIHBvc2l0aW9uOiBEcm9wZG93blBvc2l0aW9uID0gJ2F1dG8nO1xuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYnVmZmVyQW1vdW50ID0gNDtcbiAgICBASW5wdXQoKSB2aXJ0dWFsU2Nyb2xsID0gZmFsc2U7XG4gICAgQElucHV0KCkgaGVhZGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQElucHV0KCkgZm9vdGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQElucHV0KCkgZmlsdGVyVmFsdWU6IHN0cmluZyA9IG51bGw7XG5cbiAgICBAT3V0cHV0KCkgdXBkYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgICBAT3V0cHV0KCkgc2Nyb2xsID0gbmV3IEV2ZW50RW1pdHRlcjx7IHN0YXJ0OiBudW1iZXI7IGVuZDogbnVtYmVyIH0+KCk7XG4gICAgQE91dHB1dCgpIHNjcm9sbFRvRW5kID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICAgIEBPdXRwdXQoKSBvdXRzaWRlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgICBAVmlld0NoaWxkKCdjb250ZW50JywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGNvbnRlbnRFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3Njcm9sbCcsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBzY3JvbGxFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuICAgIEBWaWV3Q2hpbGQoJ3BhZGRpbmcnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgcGFkZGluZ0VsZW1lbnRSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZHJvcGRvd246IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgX3NlbGVjdDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBfcHJldmlvdXNTdGFydDogbnVtYmVyO1xuICAgIHByaXZhdGUgX3ByZXZpb3VzRW5kOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfc3RhcnR1cExvb3AgPSB0cnVlO1xuICAgIHByaXZhdGUgX2lzU2Nyb2xsZWRUb01hcmtlZCA9IGZhbHNlO1xuICAgIHByaXZhdGUgX3Njcm9sbFRvRW5kRmlyZWQgPSBmYWxzZTtcbiAgICBwcml2YXRlIF9jdXJyZW50UG9zaXRpb246IERyb3Bkb3duUG9zaXRpb247XG4gICAgcHJpdmF0ZSBfZGlzcG9zZVNjcm9sbExpc3RlbmVyID0gKCkgPT4geyB9O1xuICAgIHByaXZhdGUgX2Rpc3Bvc2VEb2N1bWVudFJlc2l6ZUxpc3RlbmVyID0gKCkgPT4geyB9O1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgIHByaXZhdGUgX3pvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJpdmF0ZSBfdmlydHVhbFNjcm9sbFNlcnZpY2U6IFZpcnR1YWxTY3JvbGxTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF93aW5kb3c6IFdpbmRvd1NlcnZpY2UsXG4gICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIF9kb2N1bWVudDogYW55XG4gICAgKSB7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duID0gX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFBvc2l0aW9uKCk6IERyb3Bkb3duUG9zaXRpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFBvc2l0aW9uO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXG4gICAgaGFuZGxlTW91c2Vkb3duKCRldmVudDogTW91c2VFdmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSAkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ID0gdGhpcy5fZHJvcGRvd24ucGFyZW50RWxlbWVudDtcbiAgICAgICAgdGhpcy5faGFuZGxlU2Nyb2xsKCk7XG4gICAgICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xuICAgICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICAgICAgZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCAndG91Y2hzdGFydCcsIHsgY2FwdHVyZTogdHJ1ZSB9KSxcbiAgICAgICAgICAgICAgICBmcm9tRXZlbnQodGhpcy5fZG9jdW1lbnQsICdtb3VzZWRvd24nLCB7IGNhcHR1cmU6IHRydWUgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKCRldmVudCkgPT4gdGhpcy5faGFuZGxlT3V0c2lkZUNsaWNrKCRldmVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlcy5pdGVtcykge1xuICAgICAgICAgICAgdGhpcy5faXNTY3JvbGxlZFRvTWFya2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVJdGVtc0NoYW5nZShjaGFuZ2VzLml0ZW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlRG9jdW1lbnRSZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLl9kaXNwb3NlU2Nyb2xsTGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5fZGVzdHJveSQubmV4dCgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5jb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLl9kZXN0cm95JC51bnN1YnNjcmliZSgpO1xuICAgICAgICBpZiAodGhpcy5hcHBlbmRUbykge1xuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5fZHJvcGRvd24ucGFyZW50Tm9kZSwgdGhpcy5fZHJvcGRvd24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLl93aGVuQ29udGVudFJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGVzdHJveSQuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmREcm9wZG93bigpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZURvY3VtZW50UmVzaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVmcmVzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUl0ZW1zKCkudGhlbihyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHNjcm9sbEludG8oaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGQgPSB0aGlzLl9jYWxjdWxhdGVEaW1lbnNpb25zKHRoaXMudmlydHVhbFNjcm9sbCA/IDAgOiBpbmRleCk7XG4gICAgICAgIGNvbnN0IHNjcm9sbEVsOiBFbGVtZW50ID0gdGhpcy5zY3JvbGxFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IE1hdGguZmxvb3IoZC52aWV3SGVpZ2h0IC8gZC5jaGlsZEhlaWdodCkgLSAxO1xuICAgICAgICBpZiAodGhpcy52aXJ0dWFsU2Nyb2xsKSB7XG4gICAgICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgPSAoaW5kZXggKiBkLmNoaWxkSGVpZ2h0KSAtIChkLmNoaWxkSGVpZ2h0ICogTWF0aC5taW4oaW5kZXgsIGJ1ZmZlcikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgY29udGVudEVsOiBIVE1MRWxlbWVudCA9IHRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuSGVpZ2h0ID0gQXJyYXkuZnJvbShjb250ZW50RWwuY2hpbGRyZW4pLnNsaWNlKDAsIGluZGV4KS5yZWR1Y2UoKGMsIG4pID0+IGMgKyBuLmNsaWVudEhlaWdodCwgMCk7XG4gICAgICAgICAgICBzY3JvbGxFbC5zY3JvbGxUb3AgPSBjaGlsZHJlbkhlaWdodCAtIChkLmNoaWxkSGVpZ2h0ICogTWF0aC5taW4oaW5kZXgsIGJ1ZmZlcikpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2Nyb2xsSW50b1RhZygpIHtcbiAgICAgICAgY29uc3QgZWw6IEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuX2NhbGN1bGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgZWwuc2Nyb2xsVG9wID0gZC5jaGlsZEhlaWdodCAqIChkLml0ZW1zTGVuZ3RoICsgMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpIHtcbiAgICAgICAgdGhpcy5fd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBvc2l0aW9uID0gdGhpcy5fY2FsY3VsYXRlQ3VycmVudFBvc2l0aW9uKHRoaXMuX2Ryb3Bkb3duKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50UG9zaXRpb24gPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJvcGRvd24sIFRPUF9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2Ryb3Bkb3duLCBCT1RUT01fQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3QsIFRPUF9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3NlbGVjdCwgQk9UVE9NX0NTU19DTEFTUylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZHJvcGRvd24sIEJPVFRPTV9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX2Ryb3Bkb3duLCBUT1BfQ1NTX0NMQVNTKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9zZWxlY3QsIEJPVFRPTV9DU1NfQ0xBU1MpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuX3NlbGVjdCwgVE9QX0NTU19DTEFTUyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlQXBwZW5kZWREcm9wZG93blBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZU91dHNpZGVDbGljaygkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5fc2VsZWN0LmNvbnRhaW5zKCRldmVudC50YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5fZHJvcGRvd24uY29udGFpbnMoJGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhdGggPSAkZXZlbnQucGF0aCB8fCAoJGV2ZW50LmNvbXBvc2VkUGF0aCAmJiAkZXZlbnQuY29tcG9zZWRQYXRoKCkpO1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldCAmJiAkZXZlbnQudGFyZ2V0LnNoYWRvd1Jvb3QgJiYgcGF0aCAmJiBwYXRoWzBdICYmIHRoaXMuX3NlbGVjdC5jb250YWlucyhwYXRoWzBdKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2suZW1pdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVNjcm9sbCgpIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZVNjcm9sbExpc3RlbmVyID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XG4gICAgICAgICAgICB0aGlzLl9maXJlU2Nyb2xsVG9FbmQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlSXRlbXNDaGFuZ2UoaXRlbXM6IHsgcHJldmlvdXNWYWx1ZTogTmdPcHRpb25bXSwgY3VycmVudFZhbHVlOiBOZ09wdGlvbltdIH0pIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9FbmRGaXJlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wcmV2aW91c1N0YXJ0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLl9wcmV2aW91c0VuZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGl0ZW1zICE9PSB1bmRlZmluZWQgJiYgaXRlbXMucHJldmlvdXNWYWx1ZSA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICAgICAgICAoaXRlbXMucHJldmlvdXNWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIGl0ZW1zLnByZXZpb3VzVmFsdWUubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5fc3RhcnR1cExvb3AgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXMgPSBpdGVtcy5jdXJyZW50VmFsdWUgfHwgW107XG4gICAgICAgIHRoaXMucmVmcmVzaCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBwZW5kVG8gJiYgdGhpcy5fY3VycmVudFBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF91cGRhdGVJdGVtcygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgTmdab25lLmFzc2VydE5vdEluQW5ndWxhclpvbmUoKTtcblxuICAgICAgICBpZiAoIXRoaXMudmlydHVhbFNjcm9sbCkge1xuICAgICAgICAgICAgdGhpcy5fem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5pdGVtcy5zbGljZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zY3JvbGxUb01hcmtlZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb29wID0gKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLl9jYWxjdWxhdGVEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB0aGlzLl92aXJ0dWFsU2Nyb2xsU2VydmljZS5jYWxjdWxhdGVJdGVtcyhkLCB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5idWZmZXJBbW91bnQgfHwgMCk7XG5cbiAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5wYWRkaW5nRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zdHlsZS5oZWlnaHQgPSBgJHtyZXMuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICg8SFRNTEVsZW1lbnQ+dGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgcmVzLnRvcFBhZGRpbmcgKyAncHgpJztcblxuICAgICAgICAgICAgaWYgKHJlcy5zdGFydCAhPT0gdGhpcy5fcHJldmlvdXNTdGFydCB8fCByZXMuZW5kICE9PSB0aGlzLl9wcmV2aW91c0VuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLml0ZW1zLnNsaWNlKHJlcy5zdGFydCwgcmVzLmVuZCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbC5lbWl0KHsgc3RhcnQ6IHJlcy5zdGFydCwgZW5kOiByZXMuZW5kIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzU3RhcnQgPSByZXMuc3RhcnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNFbmQgPSByZXMuZW5kO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXJ0dXBMb29wID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvb3AocmVzb2x2ZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc3RhcnR1cExvb3AgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGFydHVwTG9vcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Njcm9sbFRvTWFya2VkKCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IGxvb3AocmVzb2x2ZSkpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZmlyZVNjcm9sbFRvRW5kKCkge1xuICAgICAgICBpZiAodGhpcy5fc2Nyb2xsVG9FbmRGaXJlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNjcm9sbDogSFRNTEVsZW1lbnQgPSB0aGlzLnNjcm9sbEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgcGFkZGluZzogSFRNTEVsZW1lbnQgPSB0aGlzLnZpcnR1YWxTY3JvbGwgP1xuICAgICAgICAgICAgdGhpcy5wYWRkaW5nRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IDpcbiAgICAgICAgICAgIHRoaXMuY29udGVudEVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICBpZiAoc2Nyb2xsLnNjcm9sbFRvcCArIHRoaXMuX2Ryb3Bkb3duLmNsaWVudEhlaWdodCA+PSBwYWRkaW5nLmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0VuZC5lbWl0KCk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb0VuZEZpcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZURpbWVuc2lvbnMoaW5kZXggPSAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU2Nyb2xsU2VydmljZS5jYWxjdWxhdGVEaW1lbnNpb25zKFxuICAgICAgICAgICAgdGhpcy5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgICAgdGhpcy5jb250ZW50RWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVEb2N1bWVudFJlc2l6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFwcGVuZFRvKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fZGlzcG9zZURvY3VtZW50UmVzaXplTGlzdGVuZXIgPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4oJ3dpbmRvdycsICdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl91cGRhdGVBcHBlbmRlZERyb3Bkb3duUG9zaXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9NYXJrZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc1Njcm9sbGVkVG9NYXJrZWQgfHwgIXRoaXMubWFya2VkSXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzU2Nyb2xsZWRUb01hcmtlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc2Nyb2xsSW50byh0aGlzLm1hcmtlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NhbGN1bGF0ZUN1cnJlbnRQb3NpdGlvbihkcm9wZG93bkVsOiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiAhPT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWxlY3RSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5fc2VsZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBzY3JvbGxUb3AgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wIHx8IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wO1xuICAgICAgICBjb25zdCBvZmZzZXRUb3AgPSBzZWxlY3RSZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gc2VsZWN0UmVjdC5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duSGVpZ2h0ID0gZHJvcGRvd25FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIGlmIChvZmZzZXRUb3AgKyBoZWlnaHQgKyBkcm9wZG93bkhlaWdodCA+IHNjcm9sbFRvcCArIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiAndG9wJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnYm90dG9tJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2FwcGVuZERyb3Bkb3duKCkge1xuICAgICAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuYXBwZW5kVG8pO1xuICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBhcHBlbmRUbyBzZWxlY3RvciAke3RoaXMuYXBwZW5kVG99IGRpZCBub3QgZm91bmQgYW55IHBhcmVudCBlbGVtZW50YClcbiAgICAgICAgfVxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5fZHJvcGRvd24pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3VwZGF0ZUFwcGVuZGVkRHJvcGRvd25Qb3NpdGlvbigpIHtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLmFwcGVuZFRvKSB8fCBkb2N1bWVudC5ib2R5O1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBjb25zdCBzZWxlY3RSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5fc2VsZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCBib3VuZGluZ1JlY3QgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgY29uc3Qgb2Zmc2V0VG9wID0gc2VsZWN0UmVjdC50b3AgLSBib3VuZGluZ1JlY3QudG9wO1xuICAgICAgICBjb25zdCBvZmZzZXRMZWZ0ID0gc2VsZWN0UmVjdC5sZWZ0IC0gYm91bmRpbmdSZWN0LmxlZnQ7XG4gICAgICAgIGNvbnN0IHRvcERlbHRhID0gdGhpcy5fY3VycmVudFBvc2l0aW9uID09PSAnYm90dG9tJyA/IHNlbGVjdFJlY3QuaGVpZ2h0IDogLXRoaXMuX2Ryb3Bkb3duLmNsaWVudEhlaWdodDtcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUudG9wID0gb2Zmc2V0VG9wICsgdG9wRGVsdGEgKyAncHgnO1xuICAgICAgICB0aGlzLl9kcm9wZG93bi5zdHlsZS5ib3R0b20gPSAnYXV0byc7XG4gICAgICAgIHRoaXMuX2Ryb3Bkb3duLnN0eWxlLmxlZnQgPSBvZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUud2lkdGggPSBzZWxlY3RSZWN0LndpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5fZHJvcGRvd24uc3R5bGUubWluV2lkdGggPSBzZWxlY3RSZWN0LndpZHRoICsgJ3B4JztcbiAgICB9XG5cbiAgICBwcml2YXRlIF93aGVuQ29udGVudFJlYWR5KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWFkeSA9IChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZ09wdGlvbiA9IHRoaXMuX2Ryb3Bkb3duLnF1ZXJ5U2VsZWN0b3IoJy5uZy1vcHRpb24nKTtcbiAgICAgICAgICAgIGlmIChuZ09wdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl96b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJlYWR5KHJlc29sdmUpLCA1KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHJlYWR5KHJlc29sdmUpKVxuICAgIH1cbn1cbiIsImltcG9ydCB7XG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgSW5wdXQsXG4gICAgT25DaGFuZ2VzLFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmctb3B0aW9uJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIE5nT3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIEBJbnB1dCgpIHZhbHVlOiBhbnk7XG4gICAgQElucHV0KClcbiAgICBnZXQgZGlzYWJsZWQoKSB7IHJldHVybiB0aGlzLl9kaXNhYmxlZDsgfVxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYW55KSB7IHRoaXMuX2Rpc2FibGVkID0gdGhpcy5faXNEaXNhYmxlZCh2YWx1ZSkgfVxuXG4gICAgcmVhZG9ubHkgc3RhdGVDaGFuZ2UkID0gbmV3IFN1YmplY3Q8eyB2YWx1ZTogYW55LCBkaXNhYmxlZDogYm9vbGVhbiB9PigpO1xuICAgIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikgeyB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXRlQ2hhbmdlJC5uZXh0KHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogdGhpcy5fZGlzYWJsZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaXNEaXNhYmxlZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBOZ1NlbGVjdENvbmZpZyB7XG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgICBub3RGb3VuZFRleHQgPSAnTm8gaXRlbXMgZm91bmQnO1xuICAgIHR5cGVUb1NlYXJjaFRleHQgPSAnVHlwZSB0byBzZWFyY2gnO1xuICAgIGFkZFRhZ1RleHQgPSAnQWRkIGl0ZW0nO1xuICAgIGxvYWRpbmdUZXh0ID0gJ0xvYWRpbmcuLi4nO1xuICAgIGNsZWFyQWxsVGV4dCA9ICdDbGVhciBhbGwnO1xuICAgIGRpc2FibGVWaXJ0dWFsU2Nyb2xsID0gdHJ1ZTtcbiAgICBvcGVuT25FbnRlciA9IHRydWU7XG59XG4iLCJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25DaGFuZ2VzLFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgZm9yd2FyZFJlZixcbiAgICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBJbnB1dCxcbiAgICBPdXRwdXQsXG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBUZW1wbGF0ZVJlZixcbiAgICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBIb3N0TGlzdGVuZXIsXG4gICAgSG9zdEJpbmRpbmcsXG4gICAgVmlld0NoaWxkLFxuICAgIEVsZW1lbnRSZWYsXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gICAgSW5qZWN0LFxuICAgIFNpbXBsZUNoYW5nZXMsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBJbmplY3Rpb25Ub2tlbixcbiAgICBBdHRyaWJ1dGVcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwsIHN0YXJ0V2l0aCwgdGFwLCBkZWJvdW5jZVRpbWUsIG1hcCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3ViamVjdCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtcbiAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nRm9vdGVyVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ1RhZ1RlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZVxufSBmcm9tICcuL25nLXRlbXBsYXRlcy5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBDb25zb2xlU2VydmljZSB9IGZyb20gJy4vY29uc29sZS5zZXJ2aWNlJztcbmltcG9ydCB7IGlzRGVmaW5lZCwgaXNGdW5jdGlvbiwgaXNQcm9taXNlLCBpc09iamVjdCB9IGZyb20gJy4vdmFsdWUtdXRpbHMnO1xuaW1wb3J0IHsgSXRlbXNMaXN0IH0gZnJvbSAnLi9pdGVtcy1saXN0JztcbmltcG9ydCB7IE5nT3B0aW9uLCBLZXlDb2RlIH0gZnJvbSAnLi9uZy1zZWxlY3QudHlwZXMnO1xuaW1wb3J0IHsgbmV3SWQgfSBmcm9tICcuL2lkJztcbmltcG9ydCB7IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vbmctZHJvcGRvd24tcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE5nT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsRmFjdG9yeSB9IGZyb20gJy4vc2VsZWN0aW9uLW1vZGVsJztcbmltcG9ydCB7IE5nU2VsZWN0Q29uZmlnIH0gZnJvbSAnLi9jb25maWcuc2VydmljZSc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxTZWxlY3Rpb25Nb2RlbEZhY3Rvcnk+KCduZy1zZWxlY3Qtc2VsZWN0aW9uLW1vZGVsJyk7XG5leHBvcnQgdHlwZSBEcm9wZG93blBvc2l0aW9uID0gJ2JvdHRvbScgfCAndG9wJyB8ICdhdXRvJztcbmV4cG9ydCB0eXBlIEF1dG9Db3JyZWN0ID0gJ29mZicgfCAnb24nO1xuZXhwb3J0IHR5cGUgQXV0b0NhcGl0YWxpemUgPSAnb2ZmJyB8ICdvbic7XG5leHBvcnQgdHlwZSBBZGRUYWdGbiA9ICgodGVybTogc3RyaW5nKSA9PiBhbnkgfCBQcm9taXNlPGFueT4pO1xuZXhwb3J0IHR5cGUgQ29tcGFyZVdpdGhGbiA9IChhOiBhbnksIGI6IGFueSkgPT4gYm9vbGVhbjtcbmV4cG9ydCB0eXBlIEdyb3VwVmFsdWVGbiA9IChrZXk6IHN0cmluZyB8IG9iamVjdCwgY2hpbGRyZW46IGFueVtdKSA9PiBzdHJpbmcgfCBvYmplY3Q7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmctc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmctc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZy1zZWxlY3QuY29tcG9uZW50LnNjc3MnXSxcbiAgICBwcm92aWRlcnM6IFt7XG4gICAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ1NlbGVjdENvbXBvbmVudCksXG4gICAgICAgIG11bHRpOiB0cnVlXG4gICAgfV0sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBob3N0OiB7XG4gICAgICAgICdyb2xlJzogJ2xpc3Rib3gnLFxuICAgICAgICAnY2xhc3MnOiAnbmctc2VsZWN0JyxcbiAgICAgICAgJ1tjbGFzcy5uZy1zZWxlY3Qtc2luZ2xlXSc6ICchbXVsdGlwbGUnLFxuICAgIH1cbn0pXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuXG4gICAgQElucHV0KCkgYmluZExhYmVsOiBzdHJpbmc7XG4gICAgQElucHV0KCkgYmluZFZhbHVlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbWFya0ZpcnN0ID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIG5vdEZvdW5kVGV4dDogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHR5cGVUb1NlYXJjaFRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBhZGRUYWdUZXh0OiBzdHJpbmc7XG4gICAgQElucHV0KCkgbG9hZGluZ1RleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBjbGVhckFsbFRleHQ6IHN0cmluZztcbiAgICBASW5wdXQoKSBkcm9wZG93blBvc2l0aW9uOiBEcm9wZG93blBvc2l0aW9uID0gJ2F1dG8nO1xuICAgIEBJbnB1dCgpIGFwcGVuZFRvOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbG9hZGluZyA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGNsb3NlT25TZWxlY3QgPSB0cnVlO1xuICAgIEBJbnB1dCgpIGhpZGVTZWxlY3RlZCA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIHNlbGVjdE9uVGFiID0gZmFsc2U7XG4gICAgQElucHV0KCkgb3Blbk9uRW50ZXI6IGJvb2xlYW47XG4gICAgQElucHV0KCkgbWF4U2VsZWN0ZWRJdGVtczogbnVtYmVyO1xuICAgIEBJbnB1dCgpIGdyb3VwQnk6IHN0cmluZyB8IEZ1bmN0aW9uO1xuICAgIEBJbnB1dCgpIGdyb3VwVmFsdWU6IEdyb3VwVmFsdWVGbjtcbiAgICBASW5wdXQoKSBidWZmZXJBbW91bnQgPSA0O1xuICAgIEBJbnB1dCgpIHZpcnR1YWxTY3JvbGw6IGJvb2xlYW47XG4gICAgQElucHV0KCkgc2VsZWN0YWJsZUdyb3VwID0gZmFsc2U7XG4gICAgQElucHV0KCkgc2VsZWN0YWJsZUdyb3VwQXNNb2RlbCA9IHRydWU7XG4gICAgQElucHV0KCkgc2VhcmNoRm4gPSBudWxsO1xuICAgIEBJbnB1dCgpIHRyYWNrQnlGbiA9IG51bGw7XG4gICAgQElucHV0KCkgZXhjbHVkZUdyb3Vwc0Zyb21EZWZhdWx0U2VsZWN0aW9uID0gZmFsc2U7XG4gICAgQElucHV0KCkgY2xlYXJPbkJhY2tzcGFjZSA9IHRydWU7XG4gICAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIGxhYmVsRm9ySWQgPSBudWxsO1xuICAgIEBJbnB1dCgpIGF1dG9Db3JyZWN0OiBBdXRvQ29ycmVjdCA9ICdvZmYnO1xuICAgIEBJbnB1dCgpIGF1dG9DYXBpdGFsaXplOiBBdXRvQ2FwaXRhbGl6ZSA9ICdvZmYnO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LXR5cGVhaGVhZCcpIHR5cGVhaGVhZDogU3ViamVjdDxzdHJpbmc+O1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LW11bHRpcGxlJykgbXVsdGlwbGUgPSBmYWxzZTtcbiAgICBASW5wdXQoKSBASG9zdEJpbmRpbmcoJ2NsYXNzLm5nLXNlbGVjdC10YWdnYWJsZScpIGFkZFRhZzogYm9vbGVhbiB8IEFkZFRhZ0ZuID0gZmFsc2U7XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3Qtc2VhcmNoYWJsZScpIHNlYXJjaGFibGUgPSB0cnVlO1xuICAgIEBJbnB1dCgpIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LWNsZWFyYWJsZScpIGNsZWFyYWJsZSA9IHRydWU7XG4gICAgQElucHV0KCkgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3Qtb3BlbmVkJykgaXNPcGVuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBpdGVtcygpIHsgcmV0dXJuIHRoaXMuX2l0ZW1zIH07XG4gICAgc2V0IGl0ZW1zKHZhbHVlOiBhbnlbXSkge1xuICAgICAgICB0aGlzLl9pdGVtc0FyZVVzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9pdGVtcyA9IHZhbHVlO1xuICAgIH07XG5cbiAgICBASW5wdXQoKVxuICAgIGdldCBjb21wYXJlV2l0aCgpIHsgcmV0dXJuIHRoaXMuX2NvbXBhcmVXaXRoOyB9XG4gICAgc2V0IGNvbXBhcmVXaXRoKGZuOiBDb21wYXJlV2l0aEZuKSB7XG4gICAgICAgIGlmICghaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdgY29tcGFyZVdpdGhgIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb21wYXJlV2l0aCA9IGZuO1xuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgZ2V0IGNsZWFyU2VhcmNoT25BZGQoKSB7IHJldHVybiBpc0RlZmluZWQodGhpcy5fY2xlYXJTZWFyY2hPbkFkZCkgPyB0aGlzLl9jbGVhclNlYXJjaE9uQWRkIDogdGhpcy5jbG9zZU9uU2VsZWN0OyB9O1xuICAgIHNldCBjbGVhclNlYXJjaE9uQWRkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoT25BZGQgPSB2YWx1ZTtcbiAgICB9O1xuXG4gICAgLy8gb3V0cHV0IGV2ZW50c1xuICAgIEBPdXRwdXQoJ2JsdXInKSBibHVyRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnZm9jdXMnKSBmb2N1c0V2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ29wZW4nKSBvcGVuRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnY2xvc2UnKSBjbG9zZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ3NlYXJjaCcpIHNlYXJjaEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7dGVybTogc3RyaW5nLCBpdGVtczogYW55W119PigpO1xuICAgIEBPdXRwdXQoJ2NsZWFyJykgY2xlYXJFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdhZGQnKSBhZGRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdyZW1vdmUnKSByZW1vdmVFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdzY3JvbGwnKSBzY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyPHsgc3RhcnQ6IG51bWJlcjsgZW5kOiBudW1iZXIgfT4oKTtcbiAgICBAT3V0cHV0KCdzY3JvbGxUb0VuZCcpIHNjcm9sbFRvRW5kID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgLy8gY3VzdG9tIHRlbXBsYXRlc1xuICAgIEBDb250ZW50Q2hpbGQoTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBvcHRpb25UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBvcHRncm91cFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBtdWx0aUxhYmVsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gICAgQENvbnRlbnRDaGlsZChOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGhlYWRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBmb290ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nTm90Rm91bmRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBub3RGb3VuZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0eXBlVG9TZWFyY2hUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsb2FkaW5nVGV4dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSB0YWdUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgICBAQ29udGVudENoaWxkKE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBsb2FkaW5nU3Bpbm5lclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gICAgQFZpZXdDaGlsZChmb3J3YXJkUmVmKCgpID0+IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudCkpIGRyb3Bkb3duUGFuZWw6IE5nRHJvcGRvd25QYW5lbENvbXBvbmVudDtcbiAgICBAQ29udGVudENoaWxkcmVuKE5nT3B0aW9uQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIG5nT3B0aW9uczogUXVlcnlMaXN0PE5nT3B0aW9uQ29tcG9uZW50PjtcbiAgICBAVmlld0NoaWxkKCdmaWx0ZXJJbnB1dCcpIGZpbHRlcklucHV0OiBFbGVtZW50UmVmO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uZy1zZWxlY3QtZGlzYWJsZWQnKSBkaXNhYmxlZCA9IGZhbHNlO1xuICAgIEBIb3N0QmluZGluZygnY2xhc3Mubmctc2VsZWN0LWZpbHRlcmVkJykgZ2V0IGZpbHRlcmVkKCkgeyByZXR1cm4gISF0aGlzLmZpbHRlclZhbHVlICYmIHRoaXMuc2VhcmNoYWJsZSB9O1xuXG4gICAgaXRlbXNMaXN0OiBJdGVtc0xpc3Q7XG4gICAgdmlld1BvcnRJdGVtczogTmdPcHRpb25bXSA9IFtdO1xuICAgIGZpbHRlclZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICAgIGRyb3Bkb3duSWQgPSBuZXdJZCgpO1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGZvY3VzZWQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIF9pdGVtcyA9IFtdO1xuICAgIHByaXZhdGUgX2l0ZW1zQXJlVXNlZDogYm9vbGVhbjtcbiAgICBwcml2YXRlIF9kZWZhdWx0TGFiZWwgPSAnbGFiZWwnO1xuICAgIHByaXZhdGUgX3ByaW1pdGl2ZTtcbiAgICBwcml2YXRlIF9tYW51YWxPcGVuOiBib29sZWFuO1xuICAgIHByaXZhdGUgX3ByZXNzZWRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuICAgIHByaXZhdGUgX2NvbXBhcmVXaXRoOiBDb21wYXJlV2l0aEZuO1xuICAgIHByaXZhdGUgX2NsZWFyU2VhcmNoT25BZGQ6IGJvb2xlYW47XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IF9kZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfa2V5UHJlc3MkID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICAgIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4geyB9O1xuICAgIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHsgfTtcblxuICAgIGNsZWFySXRlbSA9IChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5zZWxlY3RlZEl0ZW1zLmZpbmQoeCA9PiB4LnZhbHVlID09PSBpdGVtKTtcbiAgICAgICAgdGhpcy51bnNlbGVjdChvcHRpb24pO1xuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgQEF0dHJpYnV0ZSgnY2xhc3MnKSBwdWJsaWMgY2xhc3Nlczogc3RyaW5nLFxuICAgICAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIHB1YmxpYyB0YWJJbmRleDogc3RyaW5nLFxuICAgICAgICBAQXR0cmlidXRlKCdhdXRvZm9jdXMnKSBwcml2YXRlIGF1dG9Gb2N1czogYW55LFxuICAgICAgICBjb25maWc6IE5nU2VsZWN0Q29uZmlnLFxuICAgICAgICBASW5qZWN0KFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZKSBuZXdTZWxlY3Rpb25Nb2RlbDogU2VsZWN0aW9uTW9kZWxGYWN0b3J5LFxuICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICBwcml2YXRlIF9jb25zb2xlOiBDb25zb2xlU2VydmljZVxuICAgICkge1xuICAgICAgICB0aGlzLl9tZXJnZUdsb2JhbENvbmZpZyhjb25maWcpO1xuICAgICAgICB0aGlzLml0ZW1zTGlzdCA9IG5ldyBJdGVtc0xpc3QodGhpcywgbmV3U2VsZWN0aW9uTW9kZWwoKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkSXRlbXMoKTogTmdPcHRpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zTGlzdC5zZWxlY3RlZEl0ZW1zO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZFZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoeCA9PiB4LnZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgaGFzVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFBhbmVsUG9zaXRpb24oKTogRHJvcGRvd25Qb3NpdGlvbiB7XG4gICAgICAgIGlmICh0aGlzLmRyb3Bkb3duUGFuZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRyb3Bkb3duUGFuZWwuY3VycmVudFBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUtleVByZXNzZXMoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGlmIChjaGFuZ2VzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXMuaXRlbXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEl0ZW1zKGNoYW5nZXMuaXRlbXMuY3VycmVudFZhbHVlIHx8IFtdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmdlcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX21hbnVhbE9wZW4gPSBpc0RlZmluZWQoY2hhbmdlcy5pc09wZW4uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pdGVtc0FyZVVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldEl0ZW1zRnJvbU5nT3B0aW9ucygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRGVmaW5lZCh0aGlzLmF1dG9Gb2N1cykpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLl9kZXN0cm95JC5uZXh0KCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgaGFuZGxlS2V5RG93bigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKEtleUNvZGVbJGV2ZW50LndoaWNoXSkge1xuICAgICAgICAgICAgc3dpdGNoICgkZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQXJyb3dEb3duOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVBcnJvd0Rvd24oJGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLkFycm93VXA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUFycm93VXAoJGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBLZXlDb2RlLlNwYWNlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVTcGFjZSgkZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRW50ZXI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVudGVyKCRldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgS2V5Q29kZS5UYWI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZVRhYigkZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuRXNjOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEtleUNvZGUuQmFja3NwYWNlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVCYWNrc3BhY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoJGV2ZW50LmtleSAmJiAkZXZlbnQua2V5Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5fa2V5UHJlc3MkLm5leHQoJGV2ZW50LmtleS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZU1vdXNlZG93bigkZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gJGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaWYgKHRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnKSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduZy1jbGVhci13cmFwcGVyJykpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2xlYXJDbGljaygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25nLWFycm93LXdyYXBwZXInKSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBcnJvd0NsaWNrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbmctdmFsdWUtaWNvbicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZm9jdXNlZCkge1xuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlQXJyb3dDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUNsZWFyQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5jbGVhclNlbGVjdGVkKHRydWUpO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKCk7XG4gICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzVHlwZWFoZWFkKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGVhaGVhZC5uZXh0KG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xlYXJFdmVudC5lbWl0KCk7XG4gICAgfVxuXG4gICAgY2xlYXJNb2RlbCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsZWFyYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LmNsZWFyU2VsZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xuICAgIH1cblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LmNsZWFyU2VsZWN0ZWQoKTtcbiAgICAgICAgdGhpcy5faGFuZGxlV3JpdGVWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gICAgfVxuXG4gICAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5pc09wZW4gfHwgdGhpcy5pdGVtc0xpc3QubWF4SXRlbXNTZWxlY3RlZCB8fCB0aGlzLl9tYW51YWxPcGVuIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5faXNUeXBlYWhlYWQgJiYgIXRoaXMuYWRkVGFnICYmIHRoaXMuaXRlbXNMaXN0Lm5vSXRlbXNUb1NlbGVjdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcbiAgICAgICAgdGhpcy5vcGVuRXZlbnQuZW1pdCgpO1xuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3BlbiB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2xlYXJTZWFyY2goKTtcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgICAgIHRoaXMuY2xvc2VFdmVudC5lbWl0KCk7XG4gICAgICAgIHRoaXMuX2NkLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRvZ2dsZUl0ZW0oaXRlbTogTmdPcHRpb24pIHtcbiAgICAgICAgaWYgKCFpdGVtIHx8IGl0ZW0uZGlzYWJsZWQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUgJiYgaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy51bnNlbGVjdChpdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmICghaXRlbS5zZWxlY3RlZCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJTZWFyY2hPbkFkZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NsZWFyU2VhcmNoKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudC5lbWl0KGl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fdXBkYXRlTmdNb2RlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY2xvc2VPblNlbGVjdCB8fCB0aGlzLml0ZW1zTGlzdC5ub0l0ZW1zVG9TZWxlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvY3VzKCkge1xuICAgICAgICB0aGlzLmZpbHRlcklucHV0Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbikge1xuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbXNMaXN0LnVuc2VsZWN0KGl0ZW0pO1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU5nTW9kZWwoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudC5lbWl0KGl0ZW0pO1xuICAgIH1cblxuICAgIHNlbGVjdFRhZygpIHtcbiAgICAgICAgbGV0IHRhZztcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhpcy5hZGRUYWcpKSB7XG4gICAgICAgICAgICB0YWcgPSAoPEFkZFRhZ0ZuPnRoaXMuYWRkVGFnKSh0aGlzLmZpbHRlclZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhZyA9IHRoaXMuX3ByaW1pdGl2ZSA/IHRoaXMuZmlsdGVyVmFsdWUgOiB7IFt0aGlzLmJpbmRMYWJlbF06IHRoaXMuZmlsdGVyVmFsdWUgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhbmRsZVRhZyA9IChpdGVtKSA9PiB0aGlzLl9pc1R5cGVhaGVhZCB8fCAhdGhpcy5pc09wZW4gPyB0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKGl0ZW0sIG51bGwpIDogdGhpcy5pdGVtc0xpc3QuYWRkSXRlbShpdGVtKTtcbiAgICAgICAgaWYgKGlzUHJvbWlzZSh0YWcpKSB7XG4gICAgICAgICAgICB0YWcudGhlbihpdGVtID0+IHRoaXMuc2VsZWN0KGhhbmRsZVRhZyhpdGVtKSkpLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdChoYW5kbGVUYWcodGFnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93Q2xlYXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsZWFyYWJsZSAmJiAodGhpcy5oYXNWYWx1ZSB8fCB0aGlzLmZpbHRlclZhbHVlKSAmJiAhdGhpcy5kaXNhYmxlZDtcbiAgICB9XG5cbiAgICB0cmFja0J5T3B0aW9uID0gKF86IG51bWJlciwgaXRlbTogTmdPcHRpb24pID0+IHtcbiAgICAgICAgaWYgKHRoaXMudHJhY2tCeUZuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50cmFja0J5Rm4oaXRlbS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgZ2V0IHNob3dBZGRUYWcoKSB7XG4gICAgICAgIGlmICghdGhpcy5maWx0ZXJWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMuZmlsdGVyVmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVGFnICYmXG4gICAgICAgICAgICAoIXRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMuc29tZSh4ID0+IHgubGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gdGVybSkgJiZcbiAgICAgICAgICAgICAgICAoIXRoaXMuaGlkZVNlbGVjdGVkICYmIHRoaXMuaXNPcGVuIHx8ICF0aGlzLnNlbGVjdGVkSXRlbXMuc29tZSh4ID0+IHgubGFiZWwudG9Mb3dlckNhc2UoKSA9PT0gdGVybSkpKSAmJlxuICAgICAgICAgICAgIXRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICBzaG93Tm9JdGVtc0ZvdW5kKCkge1xuICAgICAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwO1xuICAgICAgICByZXR1cm4gKChlbXB0eSAmJiAhdGhpcy5faXNUeXBlYWhlYWQgJiYgIXRoaXMubG9hZGluZykgfHxcbiAgICAgICAgICAgIChlbXB0eSAmJiB0aGlzLl9pc1R5cGVhaGVhZCAmJiB0aGlzLmZpbHRlclZhbHVlICYmICF0aGlzLmxvYWRpbmcpKSAmJlxuICAgICAgICAgICAgIXRoaXMuc2hvd0FkZFRhZztcbiAgICB9XG5cbiAgICBzaG93VHlwZVRvU2VhcmNoKCkge1xuICAgICAgICBjb25zdCBlbXB0eSA9IHRoaXMuaXRlbXNMaXN0LmZpbHRlcmVkSXRlbXMubGVuZ3RoID09PSAwO1xuICAgICAgICByZXR1cm4gZW1wdHkgJiYgdGhpcy5faXNUeXBlYWhlYWQgJiYgIXRoaXMuZmlsdGVyVmFsdWUgJiYgIXRoaXMubG9hZGluZztcbiAgICB9XG5cbiAgICBmaWx0ZXIodGVybTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSB0ZXJtO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc1R5cGVhaGVhZCkge1xuICAgICAgICAgICAgdGhpcy50eXBlYWhlYWQubmV4dCh0aGlzLmZpbHRlclZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LmZpbHRlcih0aGlzLmZpbHRlclZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtTZWxlY3RlZE9yRGVmYXVsdCh0aGlzLm1hcmtGaXJzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlYXJjaEV2ZW50LmVtaXQoeyB0ZXJtLCBpdGVtczogdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5tYXAoeCA9PiB4LnZhbHVlKSB9KTtcblxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICBvbklucHV0Rm9jdXMoJGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzZWQgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ25nLXNlbGVjdC1mb2N1c2VkJyk7XG4gICAgICAgIHRoaXMuZm9jdXNFdmVudC5lbWl0KCRldmVudCk7XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25JbnB1dEJsdXIoJGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCduZy1zZWxlY3QtZm9jdXNlZCcpO1xuICAgICAgICB0aGlzLmJsdXJFdmVudC5lbWl0KCRldmVudCk7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIG9uSXRlbUhvdmVyKGl0ZW06IE5nT3B0aW9uKSB7XG4gICAgICAgIGlmIChpdGVtLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya0l0ZW0oaXRlbSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0Q2hhbmdlcygpIHtcbiAgICAgICAgaWYgKCEoPGFueT50aGlzLl9jZCkuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aGlzLl9jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVEcm9wZG93blBvc2l0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kcm9wZG93blBhbmVsKSB7XG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duUGFuZWwudXBkYXRlRHJvcGRvd25Qb3NpdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0SXRlbXMoaXRlbXM6IGFueVtdKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0SXRlbSA9IGl0ZW1zWzBdO1xuICAgICAgICB0aGlzLmJpbmRMYWJlbCA9IHRoaXMuYmluZExhYmVsIHx8IHRoaXMuX2RlZmF1bHRMYWJlbDtcbiAgICAgICAgdGhpcy5fcHJpbWl0aXZlID0gaXNEZWZpbmVkKGZpcnN0SXRlbSkgPyAhaXNPYmplY3QoZmlyc3RJdGVtKSA6IHRoaXMuX3ByaW1pdGl2ZSB8fCB0aGlzLmJpbmRMYWJlbCA9PT0gdGhpcy5fZGVmYXVsdExhYmVsO1xuICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZXRJdGVtcyhpdGVtcyk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuaGFzVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcFNlbGVjdGVkSXRlbXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc09wZW4gJiYgaXNEZWZpbmVkKHRoaXMuZmlsdGVyVmFsdWUpICYmICF0aGlzLl9pc1R5cGVhaGVhZCkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QuZmlsdGVyKHRoaXMuZmlsdGVyVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9pc1R5cGVhaGVhZCB8fCB0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1NlbGVjdGVkT3JEZWZhdWx0KHRoaXMubWFya0ZpcnN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX3NldEl0ZW1zRnJvbU5nT3B0aW9ucygpIHtcbiAgICAgICAgY29uc3QgaGFuZGxlTmdPcHRpb25zID0gKG9wdGlvbnM6IFF1ZXJ5TGlzdDxOZ09wdGlvbkNvbXBvbmVudD4pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMgPSBvcHRpb25zLm1hcChvcHRpb24gPT4gKHtcbiAgICAgICAgICAgICAgICAkbmdPcHRpb25WYWx1ZTogb3B0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICRuZ09wdGlvbkxhYmVsOiBvcHRpb24uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmlubmVySFRNTCxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogb3B0aW9uLmRpc2FibGVkXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC5zZXRJdGVtcyh0aGlzLml0ZW1zKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhc1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFwU2VsZWN0ZWRJdGVtcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGFuZGxlT3B0aW9uQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlZE9yRGVzdHJveWVkID0gbWVyZ2UodGhpcy5uZ09wdGlvbnMuY2hhbmdlcywgdGhpcy5fZGVzdHJveSQpO1xuICAgICAgICAgICAgbWVyZ2UoLi4udGhpcy5uZ09wdGlvbnMubWFwKG9wdGlvbiA9PiBvcHRpb24uc3RhdGVDaGFuZ2UkKSlcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlVW50aWwoY2hhbmdlZE9yRGVzdHJveWVkKSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKG9wdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zTGlzdC5maW5kSXRlbShvcHRpb24udmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmRpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5nT3B0aW9ucy5jaGFuZ2VzXG4gICAgICAgICAgICAucGlwZShzdGFydFdpdGgodGhpcy5uZ09wdGlvbnMpLCB0YWtlVW50aWwodGhpcy5fZGVzdHJveSQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZShvcHRpb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRMYWJlbCA9IHRoaXMuX2RlZmF1bHRMYWJlbDtcbiAgICAgICAgICAgICAgICBoYW5kbGVOZ09wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgaGFuZGxlT3B0aW9uQ2hhbmdlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc1ZhbGlkV3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGlmICghaXNEZWZpbmVkKHZhbHVlKSB8fCAodGhpcy5tdWx0aXBsZSAmJiB2YWx1ZSA9PT0gJycpIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGVCaW5kaW5nID0gKGl0ZW06IGFueSk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgaWYgKCFpc0RlZmluZWQodGhpcy5jb21wYXJlV2l0aCkgJiYgaXNPYmplY3QoaXRlbSkgJiYgdGhpcy5iaW5kVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zb2xlLndhcm4oYEJpbmRpbmcgb2JqZWN0KCR7SlNPTi5zdHJpbmdpZnkoaXRlbSl9KSB3aXRoIGJpbmRWYWx1ZSBpcyBub3QgYWxsb3dlZC5gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NvbnNvbGUud2FybignTXVsdGlwbGUgc2VsZWN0IG5nTW9kZWwgc2hvdWxkIGJlIGFycmF5LicpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5ldmVyeShpdGVtID0+IHZhbGlkYXRlQmluZGluZyhpdGVtKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVCaW5kaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVdyaXRlVmFsdWUobmdNb2RlbDogYW55IHwgYW55W10pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1ZhbGlkV3JpdGVWYWx1ZShuZ01vZGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3QgPSAodmFsOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc0xpc3QuZmluZEl0ZW0odmFsKTtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KGl0ZW0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1ZhbE9iamVjdCA9IGlzT2JqZWN0KHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNQcmltaXRpdmUgPSAhaXNWYWxPYmplY3QgJiYgIXRoaXMuYmluZFZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICgoaXNWYWxPYmplY3QgfHwgaXNQcmltaXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0LnNlbGVjdCh0aGlzLml0ZW1zTGlzdC5tYXBJdGVtKHZhbCwgbnVsbCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5iaW5kVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFt0aGlzLmJpbmRMYWJlbF06IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBbdGhpcy5iaW5kVmFsdWVdOiB2YWxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3Quc2VsZWN0KHRoaXMuaXRlbXNMaXN0Lm1hcEl0ZW0oaXRlbSwgbnVsbCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgKDxhbnlbXT5uZ01vZGVsKS5mb3JFYWNoKGl0ZW0gPT4gc2VsZWN0KGl0ZW0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdChuZ01vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZUtleVByZXNzZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaGFibGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2tleVByZXNzJFxuICAgICAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kkKSxcbiAgICAgICAgICAgICAgICB0YXAobGV0dGVyID0+IHRoaXMuX3ByZXNzZWRLZXlzLnB1c2gobGV0dGVyKSksXG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKDIwMCksXG4gICAgICAgICAgICAgICAgZmlsdGVyKCgpID0+IHRoaXMuX3ByZXNzZWRLZXlzLmxlbmd0aCA+IDApLFxuICAgICAgICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLl9wcmVzc2VkS2V5cy5qb2luKCcnKSkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKHRlcm0gPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zTGlzdC5maW5kQnlMYWJlbCh0ZXJtKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLl9wcmVzc2VkS2V5cyA9IFtdO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdXBkYXRlTmdNb2RlbCgpIHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuc2VsZWN0ZWRJdGVtcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmluZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBncm91cEtleSA9IHRoaXMuZ3JvdXBWYWx1ZSA/IHRoaXMuYmluZFZhbHVlIDogPHN0cmluZz50aGlzLmdyb3VwQnk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gaXRlbS52YWx1ZVtncm91cEtleSB8fCA8c3RyaW5nPnRoaXMuZ3JvdXBCeV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLml0ZW1zTGlzdC5yZXNvbHZlTmVzdGVkKGl0ZW0udmFsdWUsIHRoaXMuYmluZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9kZWwucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vZGVsLnB1c2goaXRlbS52YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoeCA9PiB4LnZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHRoaXMuX29uQ2hhbmdlKG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnQuZW1pdChzZWxlY3RlZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9vbkNoYW5nZShpc0RlZmluZWQobW9kZWxbMF0pID8gbW9kZWxbMF0gOiBudWxsKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRXZlbnQuZW1pdChzZWxlY3RlZFswXSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9jbGVhclNlYXJjaCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpbHRlclZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pdGVtc0xpc3QucmVzZXRGaWx0ZXJlZEl0ZW1zKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVG9NYXJrZWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW4gfHwgIXRoaXMuZHJvcGRvd25QYW5lbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZHJvcGRvd25QYW5lbC5zY3JvbGxJbnRvKHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3Njcm9sbFRvVGFnKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuIHx8ICF0aGlzLmRyb3Bkb3duUGFuZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRyb3Bkb3duUGFuZWwuc2Nyb2xsSW50b1RhZygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVRhYigkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuID09PSBmYWxzZSAmJiAhaXNEZWZpbmVkKHRoaXMuYWRkVGFnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdE9uVGFiKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbSh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKTtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93QWRkVGFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWcoKTtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlRW50ZXIoJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3BlbiB8fCB0aGlzLl9tYW51YWxPcGVuKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pdGVtc0xpc3QubWFya2VkSXRlbSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlSXRlbSh0aGlzLml0ZW1zTGlzdC5tYXJrZWRJdGVtKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93QWRkVGFnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RUYWcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wZW5PbkVudGVyKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2hhbmRsZVNwYWNlKCRldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4gfHwgdGhpcy5fbWFudWFsT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9oYW5kbGVBcnJvd0Rvd24oJGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9uZXh0SXRlbUlzVGFnKCsxKSkge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QudW5tYXJrSXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9UYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNMaXN0Lm1hcmtOZXh0SXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlQXJyb3dVcCgkZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX25leHRJdGVtSXNUYWcoLTEpKSB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zTGlzdC51bm1hcmtJdGVtKCk7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxUb1RhZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pdGVtc0xpc3QubWFya1ByZXZpb3VzSXRlbSgpO1xuICAgICAgICAgICAgdGhpcy5fc2Nyb2xsVG9NYXJrZWQoKTtcbiAgICAgICAgfVxuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9uZXh0SXRlbUlzVGFnKG5leHRTdGVwOiBudW1iZXIpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gdGhpcy5pdGVtc0xpc3QubWFya2VkSW5kZXggKyBuZXh0U3RlcDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVGFnICYmIHRoaXMuZmlsdGVyVmFsdWVcbiAgICAgICAgICAgICYmIHRoaXMuaXRlbXNMaXN0Lm1hcmtlZEl0ZW1cbiAgICAgICAgICAgICYmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA9PT0gdGhpcy5pdGVtc0xpc3QuZmlsdGVyZWRJdGVtcy5sZW5ndGgpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfaGFuZGxlQmFja3NwYWNlKCkge1xuICAgICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZSB8fCAhdGhpcy5jbGVhcmFibGUgfHwgIXRoaXMuY2xlYXJPbkJhY2tzcGFjZSB8fCAhdGhpcy5oYXNWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHRoaXMudW5zZWxlY3QodGhpcy5pdGVtc0xpc3QubGFzdFNlbGVjdGVkSXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTW9kZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9pc1R5cGVhaGVhZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHlwZWFoZWFkICYmIHRoaXMudHlwZWFoZWFkLm9ic2VydmVycy5sZW5ndGggPiAwO1xuICAgIH1cblxuICAgIHByaXZhdGUgX21lcmdlR2xvYmFsQ29uZmlnKGNvbmZpZzogTmdTZWxlY3RDb25maWcpIHtcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IHRoaXMucGxhY2Vob2xkZXIgfHwgY29uZmlnLnBsYWNlaG9sZGVyO1xuICAgICAgICB0aGlzLm5vdEZvdW5kVGV4dCA9IHRoaXMubm90Rm91bmRUZXh0IHx8IGNvbmZpZy5ub3RGb3VuZFRleHQ7XG4gICAgICAgIHRoaXMudHlwZVRvU2VhcmNoVGV4dCA9IHRoaXMudHlwZVRvU2VhcmNoVGV4dCB8fCBjb25maWcudHlwZVRvU2VhcmNoVGV4dDtcbiAgICAgICAgdGhpcy5hZGRUYWdUZXh0ID0gdGhpcy5hZGRUYWdUZXh0IHx8IGNvbmZpZy5hZGRUYWdUZXh0O1xuICAgICAgICB0aGlzLmxvYWRpbmdUZXh0ID0gdGhpcy5sb2FkaW5nVGV4dCB8fCBjb25maWcubG9hZGluZ1RleHQ7XG4gICAgICAgIHRoaXMuY2xlYXJBbGxUZXh0ID0gdGhpcy5jbGVhckFsbFRleHQgfHwgY29uZmlnLmNsZWFyQWxsVGV4dDtcbiAgICAgICAgdGhpcy52aXJ0dWFsU2Nyb2xsID0gaXNEZWZpbmVkKHRoaXMudmlydHVhbFNjcm9sbClcbiAgICAgICAgICAgID8gdGhpcy52aXJ0dWFsU2Nyb2xsXG4gICAgICAgICAgICA6IGlzRGVmaW5lZChjb25maWcuZGlzYWJsZVZpcnR1YWxTY3JvbGwpID8gIWNvbmZpZy5kaXNhYmxlVmlydHVhbFNjcm9sbCA6IGZhbHNlO1xuICAgICAgICB0aGlzLm9wZW5PbkVudGVyID0gaXNEZWZpbmVkKHRoaXMub3Blbk9uRW50ZXIpID8gdGhpcy5vcGVuT25FbnRlciA6IGNvbmZpZy5vcGVuT25FbnRlcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgKiBhcyBzZWFyY2hIZWxwZXIgZnJvbSAnLi9zZWFyY2gtaGVscGVyJztcbmltcG9ydCB7XG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNEZWZpbmVkIH0gZnJvbSAnLi92YWx1ZS11dGlscyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW25nT3B0aW9uSGlnaGxpZ2h0XSdcbn0pXG5leHBvcnQgY2xhc3MgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuXG4gICAgQElucHV0KCduZ09wdGlvbkhpZ2hsaWdodCcpIHRlcm06IHN0cmluZztcblxuICAgIHByaXZhdGUgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgcHJpdmF0ZSBsYWJlbDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKCkge1xuICAgICAgICBpZiAodGhpcy5fY2FuSGlnaGxpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLl9oaWdobGlnaHRMYWJlbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5lbGVtZW50LmlubmVySFRNTDtcbiAgICAgICAgaWYgKHRoaXMuX2NhbkhpZ2hsaWdodCkge1xuICAgICAgICAgICAgdGhpcy5faGlnaGxpZ2h0TGFiZWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2hpZ2hsaWdodExhYmVsKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMubGFiZWw7XG4gICAgICAgIGlmICghdGhpcy50ZXJtKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwobGFiZWwpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXhPZlRlcm0gPSBzZWFyY2hIZWxwZXIuc3RyaXBTcGVjaWFsQ2hhcnMobGFiZWwpXG4gICAgICAgICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgLmluZGV4T2Yoc2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzKHRoaXMudGVybSkudG9Mb3dlckNhc2UoKSk7XG4gICAgICAgIGlmIChpbmRleE9mVGVybSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRJbm5lckh0bWwoXG4gICAgICAgICAgICAgICAgbGFiZWwuc3Vic3RyaW5nKDAsIGluZGV4T2ZUZXJtKVxuICAgICAgICAgICAgICAgICsgYDxzcGFuIGNsYXNzPVwiaGlnaGxpZ2h0ZWRcIj4ke2xhYmVsLnN1YnN0cihpbmRleE9mVGVybSwgdGhpcy50ZXJtLmxlbmd0aCl9PC9zcGFuPmBcbiAgICAgICAgICAgICAgICArIGxhYmVsLnN1YnN0cmluZyhpbmRleE9mVGVybSArIHRoaXMudGVybS5sZW5ndGgsIGxhYmVsLmxlbmd0aCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0SW5uZXJIdG1sKGxhYmVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0IF9jYW5IaWdobGlnaHQoKSB7XG4gICAgICAgIHJldHVybiBpc0RlZmluZWQodGhpcy50ZXJtKSAmJiBpc0RlZmluZWQodGhpcy5sYWJlbCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfc2V0SW5uZXJIdG1sKGh0bWwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2lubmVySFRNTCcsIGh0bWwpO1xuICAgIH1cbn0gICBcbiIsImltcG9ydCB7IE5nT3B0aW9uIH0gZnJvbSAnLi9uZy1zZWxlY3QudHlwZXMnO1xuXG5leHBvcnQgdHlwZSBTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgPSAoKSA9PiBTZWxlY3Rpb25Nb2RlbDtcblxuZXhwb3J0IGZ1bmN0aW9uIERlZmF1bHRTZWxlY3Rpb25Nb2RlbEZhY3RvcnkoKSB7XG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0U2VsZWN0aW9uTW9kZWwoKTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25Nb2RlbCB7XG4gICAgdmFsdWU6IE5nT3B0aW9uW107XG4gICAgc2VsZWN0KGl0ZW06IE5nT3B0aW9uLCBtdWx0aXBsZTogYm9vbGVhbiwgc2VsZWN0YWJsZUdyb3VwQXNNb2RlbDogYm9vbGVhbik7XG4gICAgdW5zZWxlY3QoaXRlbTogTmdPcHRpb24sIG11bHRpcGxlOiBib29sZWFuKTtcbiAgICBjbGVhcihrZWVwRGlzYWJsZWQ6IGJvb2xlYW4pO1xufVxuXG5leHBvcnQgY2xhc3MgRGVmYXVsdFNlbGVjdGlvbk1vZGVsIGltcGxlbWVudHMgU2VsZWN0aW9uTW9kZWwge1xuICAgIHByaXZhdGUgX3NlbGVjdGVkOiBOZ09wdGlvbltdID0gW107XG5cbiAgICBnZXQgdmFsdWUoKTogTmdPcHRpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzZWxlY3QoaXRlbTogTmdPcHRpb24sIG11bHRpcGxlOiBib29sZWFuLCBncm91cEFzTW9kZWw6IGJvb2xlYW4pIHtcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgIGlmIChncm91cEFzTW9kZWwgfHwgIWl0ZW0uY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGlsZHJlbkNvdW50ID0gaXRlbS5wYXJlbnQuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQ291bnQgPSBpdGVtLnBhcmVudC5jaGlsZHJlbi5maWx0ZXIoeCA9PiB4LnNlbGVjdGVkKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQuc2VsZWN0ZWQgPSBjaGlsZHJlbkNvdW50ID09PSBzZWxlY3RlZENvdW50O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0Q2hpbGRyZW5TZWxlY3RlZFN0YXRlKGl0ZW0uY2hpbGRyZW4sIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUNoaWxkcmVuKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmICghZ3JvdXBBc01vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkID0gWy4uLnRoaXMuX3NlbGVjdGVkLCAuLi5pdGVtLmNoaWxkcmVuXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bnNlbGVjdChpdGVtOiBOZ09wdGlvbiwgbXVsdGlwbGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtKTtcbiAgICAgICAgaXRlbS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnBhcmVudCAmJiBpdGVtLnBhcmVudC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gaXRlbS5wYXJlbnQuY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlUGFyZW50KGl0ZW0ucGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVDaGlsZHJlbihpdGVtLnBhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQucHVzaCguLi5jaGlsZHJlbi5maWx0ZXIoeCA9PiB4ICE9PSBpdGVtKSk7XG4gICAgICAgICAgICAgICAgaXRlbS5wYXJlbnQuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXRlbS5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldENoaWxkcmVuU2VsZWN0ZWRTdGF0ZShpdGVtLmNoaWxkcmVuLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlQ2hpbGRyZW4oaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhcihrZWVwRGlzYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSBrZWVwRGlzYWJsZWQgPyB0aGlzLl9zZWxlY3RlZC5maWx0ZXIoeCA9PiB4LmRpc2FibGVkKSA6IFtdO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3NldENoaWxkcmVuU2VsZWN0ZWRTdGF0ZShjaGlsZHJlbjogTmdPcHRpb25bXSwgc2VsZWN0ZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCh4ID0+IHguc2VsZWN0ZWQgPSBzZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfcmVtb3ZlQ2hpbGRyZW4ocGFyZW50OiBOZ09wdGlvbikge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX3NlbGVjdGVkLmZpbHRlcih4ID0+IHgucGFyZW50ICE9PSBwYXJlbnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX3JlbW92ZVBhcmVudChwYXJlbnQ6IE5nT3B0aW9uKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQuZmlsdGVyKHggPT4geCAhPT0gcGFyZW50KVxuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdTZWxlY3RDb21wb25lbnQsIFNFTEVDVElPTl9NT0RFTF9GQUNUT1JZIH0gZnJvbSAnLi9uZy1zZWxlY3QuY29tcG9uZW50JztcbmltcG9ydCB7XG4gICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdNdWx0aUxhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxuICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgTmdUeXBlVG9TZWFyY2hUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICBOZ0xvYWRpbmdTcGlubmVyVGVtcGxhdGVEaXJlY3RpdmVcbn0gZnJvbSAnLi9uZy10ZW1wbGF0ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5nT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE5nT3B0aW9uSGlnaGxpZ2h0RGlyZWN0aXZlIH0gZnJvbSAnLi9uZy1vcHRpb24taGlnaGxpZ2h0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQgfSBmcm9tICcuL25nLWRyb3Bkb3duLXBhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZWZhdWx0U2VsZWN0aW9uTW9kZWxGYWN0b3J5IH0gZnJvbSAnLi9zZWxlY3Rpb24tbW9kZWwnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBOZ0Ryb3Bkb3duUGFuZWxDb21wb25lbnQsXG4gICAgICAgIE5nT3B0aW9uQ29tcG9uZW50LFxuICAgICAgICBOZ1NlbGVjdENvbXBvbmVudCxcbiAgICAgICAgTmdPcHRpb25IaWdobGlnaHREaXJlY3RpdmUsXG4gICAgICAgIE5nT3B0Z3JvdXBUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdPcHRpb25UZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ011bHRpTGFiZWxUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdIZWFkZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdGb290ZXJUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdOb3RGb3VuZFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ1R5cGVUb1NlYXJjaFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xvYWRpbmdUZXh0VGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nVGFnVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTG9hZGluZ1NwaW5uZXJUZW1wbGF0ZURpcmVjdGl2ZVxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmdTZWxlY3RDb21wb25lbnQsXG4gICAgICAgIE5nT3B0aW9uQ29tcG9uZW50LFxuICAgICAgICBOZ09wdGlvbkhpZ2hsaWdodERpcmVjdGl2ZSxcbiAgICAgICAgTmdPcHRncm91cFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ09wdGlvblRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0xhYmVsVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTXVsdGlMYWJlbFRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0hlYWRlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ0Zvb3RlclRlbXBsYXRlRGlyZWN0aXZlLFxuICAgICAgICBOZ05vdEZvdW5kVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nVHlwZVRvU2VhcmNoVGVtcGxhdGVEaXJlY3RpdmUsXG4gICAgICAgIE5nTG9hZGluZ1RleHRUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdUYWdUZW1wbGF0ZURpcmVjdGl2ZSxcbiAgICAgICAgTmdMb2FkaW5nU3Bpbm5lclRlbXBsYXRlRGlyZWN0aXZlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBTRUxFQ1RJT05fTU9ERUxfRkFDVE9SWSwgdXNlVmFsdWU6IERlZmF1bHRTZWxlY3Rpb25Nb2RlbEZhY3RvcnkgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgTmdTZWxlY3RNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiVGVtcGxhdGVSZWYiLCJJbmplY3RhYmxlIiwic2VhcmNoSGVscGVyLnN0cmlwU3BlY2lhbENoYXJzIiwidHNsaWJfMS5fX3ZhbHVlcyIsIkV2ZW50RW1pdHRlciIsIlN1YmplY3QiLCJtZXJnZSIsImZyb21FdmVudCIsInRha2VVbnRpbCIsIk5nWm9uZSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJSZW5kZXJlcjIiLCJFbGVtZW50UmVmIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJET0NVTUVOVCIsIklucHV0IiwiT3V0cHV0IiwiVmlld0NoaWxkIiwiSG9zdExpc3RlbmVyIiwiSW5qZWN0aW9uVG9rZW4iLCJzdGFydFdpdGgiLCJ0YXAiLCJkZWJvdW5jZVRpbWUiLCJmaWx0ZXIiLCJtYXAiLCJOR19WQUxVRV9BQ0NFU1NPUiIsImZvcndhcmRSZWYiLCJBdHRyaWJ1dGUiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkhvc3RCaW5kaW5nIiwiQ29udGVudENoaWxkIiwiQ29udGVudENoaWxkcmVuIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLHNCQTRGeUIsQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxPQUFPLE1BQU0sS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixPQUFPO1lBQ0gsSUFBSSxFQUFFO2dCQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTTtvQkFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQzNDO1NBQ0osQ0FBQztJQUNOLENBQUM7QUFFRCxvQkFBdUIsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJO1lBQ0EsT0FBTyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSTtnQkFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM5RTtRQUNELE9BQU8sS0FBSyxFQUFFO1lBQUUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQUU7Z0JBQy9CO1lBQ0osSUFBSTtnQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO29CQUNPO2dCQUFFLElBQUksQ0FBQztvQkFBRSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFBRTtTQUNwQztRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztBQUVEO1FBQ0ksS0FBSyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDOUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDOzs7Ozs7QUMxSUQ7UUFJSSxtQ0FBbUIsUUFBMEI7WUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7U0FBSzs7b0JBRnJEQSxZQUFTLFNBQUMsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUU7Ozs7O3dCQUZ0QkMsY0FBVzs7O3dDQUEvQjs7O1FBU0kscUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOzs7Ozt3QkFQeEJDLGNBQVc7OzswQ0FBL0I7OztRQWNJLGtDQUFtQixRQUEwQjtZQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtTQUFLOztvQkFGckRELFlBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRTs7Ozs7d0JBWnJCQyxjQUFXOzs7dUNBQS9COzs7UUFtQkksdUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFOzs7Ozt3QkFqQjNCQyxjQUFXOzs7NENBQS9COzs7UUF3QkksbUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7Ozt3QkF0QnRCQyxjQUFXOzs7d0NBQS9COzs7UUE2QkksbUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFOzs7Ozt3QkEzQnRCQyxjQUFXOzs7d0NBQS9COzs7UUFrQ0kscUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFOzs7Ozt3QkFoQ3hCQyxjQUFXOzs7MENBQS9COzs7UUF1Q0kseUNBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHVCQUF1QixFQUFFOzs7Ozt3QkFyQzVCQyxjQUFXOzs7OENBQS9COzs7UUE0Q0ksd0NBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFOzs7Ozt3QkExQzNCQyxjQUFXOzs7NkNBQS9COzs7UUFpREksZ0NBQW1CLFFBQTBCO1lBQTFCLGFBQVEsR0FBUixRQUFRLENBQWtCO1NBQUs7O29CQUZyREQsWUFBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRTs7Ozs7d0JBL0NuQkMsY0FBVzs7O3FDQUEvQjs7O1FBc0RJLDJDQUFtQixRQUEwQjtZQUExQixhQUFRLEdBQVIsUUFBUSxDQUFrQjtTQUFLOztvQkFGckRELFlBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRTs7Ozs7d0JBcEQ5QkMsY0FBVzs7O2dEQUEvQjs7Ozs7OztBQ0FBOzs7Ozs7O1FBSUksNkJBQUk7Ozs7WUFBSixVQUFLLE9BQWU7Z0JBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7YUFDeEI7O29CQUpKQyxhQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7NkJBRmxDOzs7Ozs7Ozs7OztBQ0FBLHVCQUEwQixLQUFVO1FBQ2hDLE9BQU8sS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDO0tBQ2hEOzs7OztBQUVELHNCQUF5QixLQUFVO1FBQy9CLE9BQU8sT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN4RDs7Ozs7QUFFRCx1QkFBMEIsS0FBVTtRQUNoQyxPQUFPLEtBQUssWUFBWSxPQUFPLENBQUM7S0FDbkM7Ozs7O0FBRUQsd0JBQTJCLEtBQVU7UUFDakMsT0FBTyxLQUFLLFlBQVksUUFBUSxDQUFDO0tBQ3BDOzs7Ozs7O0lDZEQsSUFBTSxVQUFVLEdBQUc7UUFDZixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7UUFD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