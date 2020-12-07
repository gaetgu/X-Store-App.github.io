webpackHotUpdate_N_E("pages/download",{

/***/ "./pages/download.js":
/*!***************************!*\
  !*** ./pages/download.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar.jsx */ \"./components/navbar.jsx\");\n/* harmony import */ var _components_home_layout_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home.layout.jsx */ \"./components/home.layout.jsx\");\n/* harmony import */ var _components_title_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/title.jsx */ \"./components/title.jsx\");\n/* harmony import */ var _components_button_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/button.jsx */ \"./components/button.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_repo_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/repo.card */ \"./components/repo.card.jsx\");\n\n\n\nvar _jsxFileName = \"/media/dragon/Archivos/Marcados/web/pages/download.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction Download() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function PromiseCall() {\n      return _PromiseCall.apply(this, arguments);\n    }\n\n    function _PromiseCall() {\n      _PromiseCall = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var fetchStatus;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('https://api.github.com/repos/X-Store-App/client/releases');\n\n              case 2:\n                fetchStatus = _context.sent;\n                fetchStatus.json().then(function (res) {\n                  setData(res);\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _PromiseCall.apply(this, arguments);\n    }\n\n    PromiseCall();\n  }, []);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  }, \"Download\")), __jsx(_components_navbar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 4\n    }\n  }), __jsx(_components_home_layout_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }, data.length > 0 ? data.map(function (value) {\n    return __jsx(_components_repo_card__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      title: \"XStore Desktop\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    });\n  }) : \"Loading....\"));\n}\n\n_s(Download, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = Download;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Download);\n\nvar _c;\n\n$RefreshReg$(_c, \"Download\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG93bmxvYWQuanM/NmNkOSJdLCJuYW1lcyI6WyJEb3dubG9hZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJQcm9taXNlQ2FsbCIsImZldGNoIiwiZmV0Y2hTdGF0dXMiLCJqc29uIiwidGhlbiIsInJlcyIsImxlbmd0aCIsIm1hcCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEVBQUQsQ0FEYjtBQUFBLE1BQ1pDLElBRFk7QUFBQSxNQUNOQyxPQURNOztBQUVuQkMseURBQVMsQ0FBQyxZQUFNO0FBQUEsYUFDQUMsV0FEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxzTUFDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUMyQkMsS0FBSyxDQUFDLDBEQUFELENBRGhDOztBQUFBO0FBQ09DLDJCQURQO0FBRUNBLDJCQUFXLENBQUNDLElBQVosR0FBbUJDLElBQW5CLENBQXdCLFVBQUFDLEdBQUcsRUFBSTtBQUFDUCx5QkFBTyxDQUFDTyxHQUFELENBQVA7QUFBYSxpQkFBN0M7O0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEZTtBQUFBO0FBQUE7O0FBS2ZMLGVBQVc7QUFDWCxHQU5RLEVBTU4sRUFOTSxDQUFUO0FBT0EsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERCxDQURELEVBSUMsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkQsRUFLQyxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRUgsSUFBSSxDQUFDUyxNQUFMLEdBQWMsQ0FBZCxHQUFrQlQsSUFBSSxDQUFDVSxHQUFMLENBQVMsVUFBQUMsS0FBSyxFQUFJO0FBQ3BDLFdBQU8sTUFBQyw2REFBRDtBQUFXLFdBQUssRUFBQyxnQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0EsR0FGa0IsQ0FBbEIsR0FFSSxhQUhOLENBTEQsQ0FERDtBQWFBOztHQXRCUWIsUTs7S0FBQUEsUTtBQXdCTUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9kb3dubG9hZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXIuanN4J1xuaW1wb3J0IEhvbWVMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lLmxheW91dC5qc3gnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZS5qc3gnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLmpzeCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZXBvQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3JlcG8uY2FyZCdcblxuZnVuY3Rpb24gRG93bmxvYWQoKSB7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGFzeW5jIGZ1bmN0aW9uIFByb21pc2VDYWxsKCkge1xuXHRcdFx0Y29uc3QgZmV0Y2hTdGF0dXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy9YLVN0b3JlLUFwcC9jbGllbnQvcmVsZWFzZXMnKVxuXHRcdFx0ZmV0Y2hTdGF0dXMuanNvbigpLnRoZW4ocmVzID0+IHtzZXREYXRhKHJlcyl9KVxuXHRcdH1cblx0XHRQcm9taXNlQ2FsbCgpXG5cdH0sIFtdKVxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkRvd25sb2FkPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxOYXZiYXIvPlxuXHRcdFx0PEhvbWVMYXlvdXQ+XG5cdFx0XHRcdHtkYXRhLmxlbmd0aCA+IDAgPyBkYXRhLm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIDxSZXBvQ2FyZCAgdGl0bGU9XCJYU3RvcmUgRGVza3RvcFwiLz5cblx0XHRcdFx0fSkgOiBcIkxvYWRpbmcuLi4uXCJ9XG5cdFx0XHQ8L0hvbWVMYXlvdXQ+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG93bmxvYWRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/download.js\n");

/***/ })

})