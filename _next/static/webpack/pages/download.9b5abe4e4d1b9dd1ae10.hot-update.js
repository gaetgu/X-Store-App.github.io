webpackHotUpdate_N_E("pages/download",{

/***/ "./components/blog.card.jsx":
false,

/***/ "./components/repo.card.jsx":
/*!**********************************!*\
  !*** ./components/repo.card.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/styled.browser.esm.js\");\n\n\nfunction RepoCard() {}\n\n_c = RepoCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RepoCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"RepoCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXBvLmNhcmQuanN4PzFjZjUiXSwibmFtZXMiOlsiUmVwb0NhcmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTs7QUFFQSxTQUFTQSxRQUFULEdBQW9CLENBRW5COztLQUZRQSxRO0FBSU1BLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9yZXBvLmNhcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnXG5cbmZ1bmN0aW9uIFJlcG9DYXJkKCkge1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9DYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/repo.card.jsx\n");

/***/ }),

/***/ "./node_modules/@emotion/styled/dist/styled.browser.esm.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@emotion/styled/dist/styled.browser.esm.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/styled-base */ \"./node_modules/@emotion/styled-base/dist/styled-base.browser.esm.js\");\n\n\nvar tags = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG\n'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];\n\nvar newStyled = _emotion_styled_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bind();\ntags.forEach(function (tagName) {\n  newStyled[tagName] = newStyled(tagName);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (newStyled);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL3N0eWxlZC9kaXN0L3N0eWxlZC5icm93c2VyLmVzbS5qcz9lNDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBMEM7O0FBRTFDO0FBQ0E7O0FBRUEsZ0JBQWdCLDREQUFNO0FBQ3RCO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHdFQUFTLEVBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vc3R5bGVkL2Rpc3Qvc3R5bGVkLmJyb3dzZXIuZXNtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQtYmFzZSc7XG5cbnZhciB0YWdzID0gWydhJywgJ2FiYnInLCAnYWRkcmVzcycsICdhcmVhJywgJ2FydGljbGUnLCAnYXNpZGUnLCAnYXVkaW8nLCAnYicsICdiYXNlJywgJ2JkaScsICdiZG8nLCAnYmlnJywgJ2Jsb2NrcXVvdGUnLCAnYm9keScsICdicicsICdidXR0b24nLCAnY2FudmFzJywgJ2NhcHRpb24nLCAnY2l0ZScsICdjb2RlJywgJ2NvbCcsICdjb2xncm91cCcsICdkYXRhJywgJ2RhdGFsaXN0JywgJ2RkJywgJ2RlbCcsICdkZXRhaWxzJywgJ2RmbicsICdkaWFsb2cnLCAnZGl2JywgJ2RsJywgJ2R0JywgJ2VtJywgJ2VtYmVkJywgJ2ZpZWxkc2V0JywgJ2ZpZ2NhcHRpb24nLCAnZmlndXJlJywgJ2Zvb3RlcicsICdmb3JtJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2JywgJ2hlYWQnLCAnaGVhZGVyJywgJ2hncm91cCcsICdocicsICdodG1sJywgJ2knLCAnaWZyYW1lJywgJ2ltZycsICdpbnB1dCcsICdpbnMnLCAna2JkJywgJ2tleWdlbicsICdsYWJlbCcsICdsZWdlbmQnLCAnbGknLCAnbGluaycsICdtYWluJywgJ21hcCcsICdtYXJrJywgJ21hcnF1ZWUnLCAnbWVudScsICdtZW51aXRlbScsICdtZXRhJywgJ21ldGVyJywgJ25hdicsICdub3NjcmlwdCcsICdvYmplY3QnLCAnb2wnLCAnb3B0Z3JvdXAnLCAnb3B0aW9uJywgJ291dHB1dCcsICdwJywgJ3BhcmFtJywgJ3BpY3R1cmUnLCAncHJlJywgJ3Byb2dyZXNzJywgJ3EnLCAncnAnLCAncnQnLCAncnVieScsICdzJywgJ3NhbXAnLCAnc2NyaXB0JywgJ3NlY3Rpb24nLCAnc2VsZWN0JywgJ3NtYWxsJywgJ3NvdXJjZScsICdzcGFuJywgJ3N0cm9uZycsICdzdHlsZScsICdzdWInLCAnc3VtbWFyeScsICdzdXAnLCAndGFibGUnLCAndGJvZHknLCAndGQnLCAndGV4dGFyZWEnLCAndGZvb3QnLCAndGgnLCAndGhlYWQnLCAndGltZScsICd0aXRsZScsICd0cicsICd0cmFjaycsICd1JywgJ3VsJywgJ3ZhcicsICd2aWRlbycsICd3YnInLCAvLyBTVkdcbidjaXJjbGUnLCAnY2xpcFBhdGgnLCAnZGVmcycsICdlbGxpcHNlJywgJ2ZvcmVpZ25PYmplY3QnLCAnZycsICdpbWFnZScsICdsaW5lJywgJ2xpbmVhckdyYWRpZW50JywgJ21hc2snLCAncGF0aCcsICdwYXR0ZXJuJywgJ3BvbHlnb24nLCAncG9seWxpbmUnLCAncmFkaWFsR3JhZGllbnQnLCAncmVjdCcsICdzdG9wJywgJ3N2ZycsICd0ZXh0JywgJ3RzcGFuJ107XG5cbnZhciBuZXdTdHlsZWQgPSBzdHlsZWQuYmluZCgpO1xudGFncy5mb3JFYWNoKGZ1bmN0aW9uICh0YWdOYW1lKSB7XG4gIG5ld1N0eWxlZFt0YWdOYW1lXSA9IG5ld1N0eWxlZCh0YWdOYW1lKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBuZXdTdHlsZWQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@emotion/styled/dist/styled.browser.esm.js\n");

/***/ }),

/***/ "./pages/download.js":
/*!***************************!*\
  !*** ./pages/download.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_navbar_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/navbar.jsx */ \"./components/navbar.jsx\");\n/* harmony import */ var _components_home_layout_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home.layout.jsx */ \"./components/home.layout.jsx\");\n/* harmony import */ var _components_title_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/title.jsx */ \"./components/title.jsx\");\n/* harmony import */ var _components_button_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/button.jsx */ \"./components/button.jsx\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_repo_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/repo.card */ \"./components/repo.card.jsx\");\n\n\n\nvar _jsxFileName = \"/media/dragon/Archivos/Marcados/web/pages/download.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\nfunction Download() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      data = _useState[0],\n      setData = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    var fetchStatus;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('https://api.github.com/repos/X-Store-App/client/releases');\n\n          case 2:\n            fetchStatus = _context.sent;\n            fetchStatus.json().then(function (res) {\n              setData(res);\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  })), []);\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 3\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, \"Download\")), __jsx(_components_navbar_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }\n  }), __jsx(_components_home_layout_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 4\n    }\n  }, data.length > 0 ? data.map(function (value) {}) : \"Loading....\"));\n}\n\n_s(Download, \"IEMTtLVFIuToo7X/raQbJAxzNQU=\");\n\n_c = Download;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Download);\n\nvar _c;\n\n$RefreshReg$(_c, \"Download\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZG93bmxvYWQuanM/NmNkOSJdLCJuYW1lcyI6WyJEb3dubG9hZCIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsImZldGNoU3RhdHVzIiwianNvbiIsInRoZW4iLCJyZXMiLCJsZW5ndGgiLCJtYXAiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxFQUFELENBRGI7QUFBQSxNQUNaQyxJQURZO0FBQUEsTUFDTkMsT0FETTs7QUFFbkJDLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2lCQyxLQUFLLENBQUMsMERBQUQsQ0FEdEI7O0FBQUE7QUFDSEMsdUJBREc7QUFFVEEsdUJBQVcsQ0FBQ0MsSUFBWixHQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQUMsR0FBRyxFQUFJO0FBQUNOLHFCQUFPLENBQUNNLEdBQUQsQ0FBUDtBQUFhLGFBQTdDOztBQUZTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHTixFQUhNLENBQVQ7QUFJQSxTQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELENBREQsRUFJQyxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRCxFQUtDLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFUCxJQUFJLENBQUNRLE1BQUwsR0FBYyxDQUFkLEdBQWtCUixJQUFJLENBQUNTLEdBQUwsQ0FBUyxVQUFBQyxLQUFLLEVBQUksQ0FFcEMsQ0FGa0IsQ0FBbEIsR0FFSSxhQUhOLENBTEQsQ0FERDtBQWFBOztHQW5CUVosUTs7S0FBQUEsUTtBQXFCTUEsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9kb3dubG9hZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9uYXZiYXIuanN4J1xuaW1wb3J0IEhvbWVMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lLmxheW91dC5qc3gnXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi4vY29tcG9uZW50cy90aXRsZS5qc3gnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uLmpzeCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZXBvQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3JlcG8uY2FyZCdcblxuZnVuY3Rpb24gRG93bmxvYWQoKSB7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuXHR1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuXHRcdGNvbnN0IGZldGNoU3RhdHVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvWC1TdG9yZS1BcHAvY2xpZW50L3JlbGVhc2VzJylcblx0XHRmZXRjaFN0YXR1cy5qc29uKCkudGhlbihyZXMgPT4ge3NldERhdGEocmVzKX0pXG5cdH0sIFtdKVxuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PHRpdGxlPkRvd25sb2FkPC90aXRsZT5cblx0XHRcdDwvSGVhZD5cblx0XHRcdDxOYXZiYXIvPlxuXHRcdFx0PEhvbWVMYXlvdXQ+XG5cdFx0XHRcdHtkYXRhLmxlbmd0aCA+IDAgPyBkYXRhLm1hcCh2YWx1ZSA9PiB7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdH0pIDogXCJMb2FkaW5nLi4uLlwifVxuXHRcdFx0PC9Ib21lTGF5b3V0PlxuXHRcdDwvZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IERvd25sb2FkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/download.js\n");

/***/ })

})