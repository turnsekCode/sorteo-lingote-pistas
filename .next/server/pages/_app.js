"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(930);
;// CONCATENATED MODULE: ./components/AppContainer.js


const AppContainer = ({ children  })=>{
    return /*#__PURE__*/ _jsx(Container, {
        textAlign: "center",
        fontSize: "2xl",
        p: "1em",
        children: children
    });
};
/* harmony default export */ const components_AppContainer = ((/* unused pure expression or super */ null && (AppContainer)));

;// CONCATENATED MODULE: ./config/theme.js

const config = {
    initialColorMode: "system",
    useSystemColorMode: true
};
const theme = (0,react_.extendTheme)({
    config
});
/* harmony default export */ const config_theme = ((/* unused pure expression or super */ null && (theme)));

;// CONCATENATED MODULE: ./pages/_app.js




function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "noindex"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(806));
module.exports = __webpack_exports__;

})();