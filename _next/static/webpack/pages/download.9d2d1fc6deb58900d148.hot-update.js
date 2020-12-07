webpackHotUpdate_N_E("pages/download",{

/***/ "./pages/download.js":
/*!***************************!*\
  !*** ./pages/download.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar.jsx */ \"./components/navbar.jsx\");\n/* harmony import */ var _components_home_layout_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home.layout.jsx */ \"./components/home.layout.jsx\");\n/* harmony import */ var _components_title_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/title.jsx */ \"./components/title.jsx\");\n/* harmony import */ var _components_button_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/button.jsx */ \"./components/button.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/media/dragon/Archivos/Marcados/web/pages/download.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\nfunction Download() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var fetchStatus = fetch('https://api.github.com/repos/X-Store-App/client/releases');\n    fetchStatus.then(setData(fetchStatus));\n  });\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, \"Download\")), __jsx(_components_navbar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }), __jsx(_components_home_layout_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }, data.length > 0 ? data.map(function (element) {\n    return element;\n  }) : \"Loading....\"));\n}\n\n_s(Download, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = Download;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Download);\n\nvar _c;\n\n$RefreshReg$(_c, \"Download\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG93bmxvYWQuanM/NmNkOSJdLCJuYW1lcyI6WyJEb3dubG9hZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaFN0YXR1cyIsImZldGNoIiwidGhlbiIsImxlbmd0aCIsIm1hcCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ0tDLHNEQUFRLENBQUMsRUFBRCxDQURiO0FBQUEsTUFDWkMsSUFEWTtBQUFBLE1BQ05DLE9BRE07O0FBRW5CQyx5REFBUyxDQUFDLFlBQU07QUFDZixRQUFNQyxXQUFXLEdBQUdDLEtBQUssQ0FBQywwREFBRCxDQUF6QjtBQUNBRCxlQUFXLENBQUNFLElBQVosQ0FBaUJKLE9BQU8sQ0FBQ0UsV0FBRCxDQUF4QjtBQUNBLEdBSFEsQ0FBVDtBQUlBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQsQ0FERCxFQUlDLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpELEVBS0MsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VILElBQUksQ0FBQ00sTUFBTCxHQUFjLENBQWQsR0FBa0JOLElBQUksQ0FBQ08sR0FBTCxDQUFTLFVBQUFDLE9BQU87QUFBQSxXQUFJQSxPQUFKO0FBQUEsR0FBaEIsQ0FBbEIsR0FBaUQsYUFEbkQsQ0FMRCxDQUREO0FBV0E7O0dBakJRVixROztLQUFBQSxRO0FBbUJNQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Rvd25sb2FkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhci5qc3gnXG5pbXBvcnQgSG9tZUxheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUubGF5b3V0LmpzeCdcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL3RpdGxlLmpzeCdcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24uanN4J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5mdW5jdGlvbiBEb3dubG9hZCgpIHtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3QgZmV0Y2hTdGF0dXMgPSBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9YLVN0b3JlLUFwcC9jbGllbnQvcmVsZWFzZXMnKVxuXHRcdGZldGNoU3RhdHVzLnRoZW4oc2V0RGF0YShmZXRjaFN0YXR1cykpXG5cdH0pXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8dGl0bGU+RG93bmxvYWQ8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PE5hdmJhci8+XG5cdFx0XHQ8SG9tZUxheW91dD5cblx0XHRcdFx0e2RhdGEubGVuZ3RoID4gMCA/IGRhdGEubWFwKGVsZW1lbnQgPT4gZWxlbWVudCkgOiBcIkxvYWRpbmcuLi4uXCJ9XG5cdFx0XHQ8L0hvbWVMYXlvdXQ+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/download.js\n");

/***/ })

})