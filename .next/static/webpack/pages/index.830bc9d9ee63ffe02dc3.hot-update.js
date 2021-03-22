webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_USER_Desktop_Projects_NM_todolist_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "C:\\Users\\USER\\Desktop\\Projects\\NM\\todolist\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();



var Index = function Index() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      userInput = _useState[0],
      setUserInput = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      todoList = _useState2[0],
      setTodoList = _useState2[1];

  var handleChange = function handleChange(e) {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setTodoList([userInput].concat(Object(C_Users_USER_Desktop_Projects_NM_todolist_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList)));
    setUserInput('');
  };

  var handleDelete = function handleDelete(todo) {
    var updatedArr = todoList.filter(function (todoItem) {
      return todoList.indexOf(todoItem) != todoList.indexof(todo);
    });
    setTodoList(updatedArr);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
      children: "Next Js Todo List"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        value: userInput,
        placeholder: "Enter a todo item",
        onChange: handleChange
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 16
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        onClick: handleSubmit,
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 111
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 12
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: todoList.length >= 1 ? todoList.map(function (todo, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [todo, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            onClick: function onClick(e) {
              e.preventDefault();
              handleDelete(todo);
            },
            children: "Delete"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 50
          }, _this)]
        }, idx, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 30
        }, _this);
      }) : 'Enter a todo item'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 12
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, _this);
};

_s(Index, "63ki71aKu2H5oaDuBRPVZ2C19TU=");

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsInVzZXJJbnB1dCIsInNldFVzZXJJbnB1dCIsInRvZG9MaXN0Iiwic2V0VG9kb0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1Ym1pdCIsImhhbmRsZURlbGV0ZSIsInRvZG8iLCJ1cGRhdGVkQXJyIiwiZmlsdGVyIiwidG9kb0l0ZW0iLCJpbmRleE9mIiwiaW5kZXhvZiIsImxlbmd0aCIsIm1hcCIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBRWlCQyxzREFBUSxDQUFDLEVBQUQsQ0FGekI7QUFBQSxNQUVUQyxTQUZTO0FBQUEsTUFFQ0MsWUFGRDs7QUFBQSxtQkFHZUYsc0RBQVEsQ0FBQyxFQUFELENBSHZCO0FBQUEsTUFHVEcsUUFIUztBQUFBLE1BR0FDLFdBSEE7O0FBS2hCLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLENBQUQsRUFBTztBQUN4QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUFMLGdCQUFZLENBQUNJLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVo7QUFFSCxHQUxEOztBQU9BLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNKLENBQUQsRUFBTTtBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUFILGVBQVcsRUFDUEgsU0FETyw0SkFFSkUsUUFGSSxHQUFYO0FBS0FELGdCQUFZLENBQUMsRUFBRCxDQUFaO0FBQ0gsR0FURDs7QUFVSSxNQUFNUyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxJQUFELEVBQVU7QUFDM0IsUUFBTUMsVUFBVSxHQUFHVixRQUFRLENBQUNXLE1BQVQsQ0FBZ0IsVUFBQUMsUUFBUTtBQUFBLGFBQUlaLFFBQVEsQ0FBQ2EsT0FBVCxDQUFpQkQsUUFBakIsS0FBOEJaLFFBQVEsQ0FBQ2MsT0FBVCxDQUFpQkwsSUFBakIsQ0FBbEM7QUFBQSxLQUF4QixDQUFuQjtBQUVBUixlQUFXLENBQUNTLFVBQUQsQ0FBWDtBQUdQLEdBTkc7O0FBT0osc0JBQ0k7QUFBQSw0QkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILGVBRUc7QUFBQSw4QkFDSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLGFBQUssRUFBRVosU0FBMUI7QUFBcUMsbUJBQVcsRUFBQyxtQkFBakQ7QUFBcUUsZ0JBQVEsRUFBRUk7QUFBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLG9CQUNtRztBQUFRLGVBQU8sRUFBRUssWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkgsZUFLRztBQUFBLGdCQUVRUCxRQUFRLENBQUNlLE1BQVQsSUFBa0IsQ0FBbEIsR0FBc0JmLFFBQVEsQ0FBQ2dCLEdBQVQsQ0FBYSxVQUFDUCxJQUFELEVBQU9RLEdBQVAsRUFBZTtBQUM5Qyw0QkFBTTtBQUFBLHFCQUFlUixJQUFmLGVBQW9CO0FBQVEsbUJBQU8sRUFBRSxpQkFBQ04sQ0FBRCxFQUMxQztBQUFDQSxlQUFDLENBQUNDLGNBQUY7QUFDREksMEJBQVksQ0FBQ0MsSUFBRCxDQUFaO0FBRUMsYUFKd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXBCO0FBQUEsV0FBU1EsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFOO0FBS0gsT0FOcUIsQ0FBdEIsR0FPRTtBQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQWpERDs7R0FBTXJCLEs7O0tBQUFBLEs7QUFtRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgzMGJjOWQ5ZWU2M2ZmZTAyZGMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt1c2VySW5wdXQsc2V0VXNlcklucHV0XSA9IHVzZVN0YXRlKCcnKVxyXG4gICAgY29uc3QgW3RvZG9MaXN0LHNldFRvZG9MaXN0XSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcblxyXG4gICAgICAgIHNldFVzZXJJbnB1dChlLnRhcmdldC52YWx1ZSlcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PntcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgc2V0VG9kb0xpc3QoW1xyXG4gICAgICAgICAgICB1c2VySW5wdXQsXHJcbiAgICAgICAgICAgIC4uLnRvZG9MaXN0XHJcbiAgICAgICAgXSlcclxuICAgICAgICBcclxuICAgICAgICBzZXRVc2VySW5wdXQoJycpXHJcbiAgICB9XHJcbiAgICAgICAgY29uc3QgaGFuZGxlRGVsZXRlID0gKHRvZG8pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEFyciA9IHRvZG9MaXN0LmZpbHRlcih0b2RvSXRlbSA9PiB0b2RvTGlzdC5pbmRleE9mKHRvZG9JdGVtKSAhPSB0b2RvTGlzdC5pbmRleG9mKHRvZG8pKSBcclxuXHJcbiAgICAgICAgICAgIHNldFRvZG9MaXN0KHVwZGF0ZWRBcnIpXHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgPGgzPk5leHQgSnMgVG9kbyBMaXN0PC9oMz5cclxuICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3VzZXJJbnB1dH0gcGxhY2Vob2xkZXI9J0VudGVyIGEgdG9kbyBpdGVtJyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+IDxidXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fT5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICB0b2RvTGlzdC5sZW5ndGggPj0xID8gdG9kb0xpc3QubWFwKCh0b2RvLCBpZHgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICByZXR1cm48bGkga2V5PXtpZHh9Pnt0b2RvfTxidXR0b24gb25DbGljaz17KGUpPT4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZURlbGV0ZSh0b2RvKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX0+RGVsZXRlPC9idXR0b24+PC9saT5cclxuICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICA6ICdFbnRlciBhIHRvZG8gaXRlbSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleCJdLCJzb3VyY2VSb290IjoiIn0=