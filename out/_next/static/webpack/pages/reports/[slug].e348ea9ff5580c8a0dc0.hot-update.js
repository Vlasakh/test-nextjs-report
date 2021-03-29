webpackHotUpdate_N_E("pages/reports/[slug]",{

/***/ "./components/Sidebar.js":
/*!*******************************!*\
  !*** ./components/Sidebar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AppPropsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppPropsContext */ \"./components/AppPropsContext.js\");\nvar _jsxFileName = \"/projects/test-nextjs-blog/components/Sidebar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Sidebar = function Sidebar() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_AppPropsContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      _useContext$slugs = _useContext.slugs,\n      slugs = _useContext$slugs === void 0 ? [] : _useContext$slugs,\n      slug = _useContext.slug;\n\n  console.log('slug', slug);\n  return __jsx(\"aside\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    className: 'header',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, \"Menu\"), slugs.map(function (path) {\n    return __jsx(\"div\", {\n      key: path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }\n    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: '/reports/' + path,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }\n    }, __jsx(\"a\", {\n      className: slug === path ? 'selected' : '',\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 46\n      }\n    }, path)));\n  }));\n};\n\n_s(Sidebar, \"Z/8Rt+NJmm+o7ETwaXZLb9C6Zqc=\");\n\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sidebar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLmpzPzg0MDMiXSwibmFtZXMiOlsiU2lkZWJhciIsInVzZUNvbnRleHQiLCJBcHBQcm9wc0NvbnRleHQiLCJzbHVncyIsInNsdWciLCJjb25zb2xlIiwibG9nIiwibWFwIiwicGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLG9CQUNTQyx3REFBVSxDQUFDQyx3REFBRCxDQURuQjtBQUFBLHNDQUNaQyxLQURZO0FBQUEsTUFDWkEsS0FEWSxrQ0FDSixFQURJO0FBQUEsTUFDQUMsSUFEQSxlQUNBQSxJQURBOztBQUVwQkMsU0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkYsSUFBcEI7QUFFQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUdHRCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQVU7QUFDbkIsV0FDRTtBQUFLLFNBQUcsRUFBRUEsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFNLFVBQUksRUFBRSxjQUFjQSxJQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlDO0FBQUcsZUFBUyxFQUFFSixJQUFJLEtBQUtJLElBQVQsR0FBZ0IsVUFBaEIsR0FBNkIsRUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnREEsSUFBaEQsQ0FBakMsQ0FERixDQURGO0FBS0QsR0FOQSxDQUhILENBREY7QUFhRCxDQWpCRDs7R0FBTVIsTzs7S0FBQUEsTztBQW1CU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IEFwcFByb3BzQ29udGV4dCBmcm9tICcuL0FwcFByb3BzQ29udGV4dCc7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgc2x1Z3MgPSBbXSwgc2x1ZyB9ID0gdXNlQ29udGV4dChBcHBQcm9wc0NvbnRleHQpO1xuICBjb25zb2xlLmxvZygnc2x1ZycsIHNsdWcpO1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlPlxuICAgICAgPGgyIGNsYXNzTmFtZT17J2hlYWRlcid9Pk1lbnU8L2gyPlxuXG4gICAgICB7c2x1Z3MubWFwKChwYXRoKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3BhdGh9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9yZXBvcnRzLycgKyBwYXRofT57PGEgY2xhc3NOYW1lPXtzbHVnID09PSBwYXRoID8gJ3NlbGVjdGVkJyA6ICcnfT57cGF0aH08L2E+fTwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvYXNpZGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Sidebar.js\n");

/***/ }),

/***/ "./node_modules/base64-js/index.js":
false,

/***/ "./node_modules/esprima/dist/esprima.js":
false,

/***/ "./node_modules/extend-shallow/index.js":
false,

/***/ "./node_modules/gray-matter/index.js":
false,

/***/ "./node_modules/gray-matter/lib/defaults.js":
false,

/***/ "./node_modules/gray-matter/lib/engine.js":
false,

/***/ "./node_modules/gray-matter/lib/engines.js":
false,

/***/ "./node_modules/gray-matter/lib/excerpt.js":
false,

/***/ "./node_modules/gray-matter/lib/parse.js":
false,

/***/ "./node_modules/gray-matter/lib/stringify.js":
false,

/***/ "./node_modules/gray-matter/lib/to-file.js":
false,

/***/ "./node_modules/gray-matter/lib/utils.js":
false,

/***/ "./node_modules/ieee754/index.js":
false,

/***/ "./node_modules/is-extendable/index.js":
false,

/***/ "./node_modules/isarray/index.js":
false,

/***/ "./node_modules/js-yaml/index.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/common.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/dumper.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/exception.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/loader.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/mark.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/schema.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/core.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/default_full.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/default_safe.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/failsafe.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/schema/json.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/binary.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/bool.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/float.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/int.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/js/function.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/js/regexp.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/js/undefined.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/map.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/merge.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/null.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/omap.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/pairs.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/seq.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/set.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/str.js":
false,

/***/ "./node_modules/js-yaml/lib/js-yaml/type/timestamp.js":
false,

/***/ "./node_modules/kind-of/index.js":
false,

/***/ "./node_modules/marked/src/InlineLexer.js":
false,

/***/ "./node_modules/marked/src/Lexer.js":
false,

/***/ "./node_modules/marked/src/Parser.js":
false,

/***/ "./node_modules/marked/src/Renderer.js":
false,

/***/ "./node_modules/marked/src/Slugger.js":
false,

/***/ "./node_modules/marked/src/TextRenderer.js":
false,

/***/ "./node_modules/marked/src/defaults.js":
false,

/***/ "./node_modules/marked/src/helpers.js":
false,

/***/ "./node_modules/marked/src/marked.js":
false,

/***/ "./node_modules/marked/src/rules.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/global.js":
false,

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
false,

/***/ "./node_modules/section-matter/index.js":
false,

/***/ "./node_modules/strip-bom-string/index.js":
false,

/***/ "./pages/reports/[slug].js":
/*!*********************************!*\
  !*** ./pages/reports/[slug].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\nvar _jsxFileName = \"/projects/test-nextjs-blog/pages/reports/[slug].js\",\n    _this = undefined;\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Post = function Post(_ref) {\n  var htmlString = _ref.htmlString,\n      _ref$data = _ref.data,\n      data = _ref$data === void 0 ? {} : _ref$data;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 5\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, data.title), __jsx(\"meta\", {\n    title: \"description\",\n    content: data.description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: htmlString\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  })));\n};\n\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVwb3J0cy9bc2x1Z10uanM/ZDg1ZSJdLCJuYW1lcyI6WyJQb3N0IiwiaHRtbFN0cmluZyIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiX19odG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFHQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLE1BQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLHVCQUFlQyxJQUFmO0FBQUEsTUFBZUEsSUFBZiwwQkFBc0IsRUFBdEI7QUFBQSxTQUNYLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUEsSUFBSSxDQUFDQyxLQUFiLENBREYsRUFFRTtBQUFNLFNBQUssRUFBQyxhQUFaO0FBQTBCLFdBQU8sRUFBRUQsSUFBSSxDQUFDRSxXQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssMkJBQXVCLEVBQUU7QUFBRUMsWUFBTSxFQUFFSjtBQUFWLEtBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUxGLENBRFc7QUFBQSxDQUFiOztLQUFNRCxJOztBQTJDU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9yZXBvcnRzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xuXG5jb25zdCBQb3N0ID0gKHsgaHRtbFN0cmluZywgZGF0YSA9IHt9IH0pID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57ZGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgdGl0bGU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2RhdGEuZGVzY3JpcHRpb259IC8+XG4gICAgPC9IZWFkPlxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbFN0cmluZyB9fSAvPlxuICAgIDwvTGF5b3V0PlxuICA8Lz5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZmlsZXMgPSBmcy5yZWFkZGlyU3luYygncmVwb3J0cycpO1xuICAvLyBjb25zb2xlLmxvZygnZmlsZXM6ICcsIGZpbGVzKTtcbiAgY29uc3QgcGF0aHMgPSBmaWxlcy5tYXAoKGZpbGVuYW1lKSA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgc2x1ZzogZmlsZW5hbWUucmVwbGFjZSgnLm1kJywgJycpLFxuICAgIH0sXG4gIH0pKTtcbiAgLy8gY29uc29sZS5sb2coJ3BhdGhzOiAnLCBwYXRocyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoeyBwYXJhbXM6IHsgc2x1ZyB9IH0pID0+IHtcbiAgY29uc3QgbWFya2Rvd25XaXRoTWV0YWRhdGEgPSBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKCdyZXBvcnRzJywgc2x1ZyArICcubWQnKSkudG9TdHJpbmcoKTtcblxuICBjb25zdCBwYXJzZWRNYXJrZG93biA9IG1hdHRlcihtYXJrZG93bldpdGhNZXRhZGF0YSk7XG5cbiAgY29uc3QgaHRtbFN0cmluZyA9IG1hcmtlZChwYXJzZWRNYXJrZG93bi5jb250ZW50KTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBodG1sU3RyaW5nLFxuICAgICAgZGF0YTogcGFyc2VkTWFya2Rvd24uZGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/reports/[slug].js\n");

/***/ }),

/***/ 1:
false

})