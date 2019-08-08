(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eventcenter-eventcenter-module"],{

/***/ "./src/app/pages/tzb/custom/eventcenter/eventcenter.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/eventcenter/eventcenter.module.ts ***!
  \********************************************************************/
/*! exports provided: EventCenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventCenterModule", function() { return EventCenterModule; });
/* harmony import */ var app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/sharedBasis.module */ "./src/app/sharedBasis.module.ts");
/* harmony import */ var app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/@uisftech/framework.module */ "./src/app/@uisftech/framework.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _eventcenter_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventcenter.routing */ "./src/app/pages/tzb/custom/eventcenter/eventcenter.routing.ts");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @author yuanzhenghe
 */






var EventCenterModule = /** @class */ (function () {
    function EventCenterModule() {
    }
    EventCenterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                app_sharedBasis_module__WEBPACK_IMPORTED_MODULE_0__["SharedBasisModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _eventcenter_routing__WEBPACK_IMPORTED_MODULE_4__["EventcenterRouting"],
                app_uisftech_framework_module__WEBPACK_IMPORTED_MODULE_1__["FrameworkModule"],
            ],
            declarations: [],
            providers: []
        })
    ], EventCenterModule);
    return EventCenterModule;
}());



/***/ }),

/***/ "./src/app/pages/tzb/custom/eventcenter/eventcenter.routing.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tzb/custom/eventcenter/eventcenter.routing.ts ***!
  \*********************************************************************/
/*! exports provided: routes, EventcenterRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventcenterRouting", function() { return EventcenterRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");

var routes = [
    {
        path: '',
        children: [
            { path: 'eventcenter-activite', loadChildren: './eventcenter-activite/eventcenter-activite.module#EventcenterActiviteModule' },
        ]
    }
];
var EventcenterRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=eventcenter-eventcenter-module.js.map