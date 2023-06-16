"use strict";
(() => {
var exports = {};
exports.id = 415;
exports.ids = [415];
exports.modules = {

/***/ 450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "d": () => (/* binding */ pool)
});

;// CONCATENATED MODULE: external "mysql2/promise"
const promise_namespaceObject = require("mysql2/promise");
;// CONCATENATED MODULE: ./lib/db.js

/*export async function pool({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
  });

  try {
    const [results] = await dbconnection.execute(query, values);
    dbconnection.end();
    return results;
  } catch (error) {
    throw Error(error.message);
    return { error };
  }
}*/ const pool = (0,promise_namespaceObject.createPool)({
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});



/***/ }),

/***/ 660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(450);

async function handler(req, res) {
    if (req.method === "GET") {
        const [sorteo] = await _lib_db__WEBPACK_IMPORTED_MODULE_0__/* .pool.query */ .d.query("SELECT * FROM sorteo");
        res.status(200).json({
            sorteo
        });
    }
    if (req.method === "POST") {
        const result = await _lib_db__WEBPACK_IMPORTED_MODULE_0__/* .pool.query */ .d.query("INSERT INTO sorteo SET ?", {
            nombre: req.body.name,
            correo: req.body.email,
            telefono: req.body.subject,
            pista: req.body.subject
        });
        res.status(200).json({
            result: result
        });
    //res.status(200).json({ response: { message1, sorteo1: sorteo1 } });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(660));
module.exports = __webpack_exports__;

})();