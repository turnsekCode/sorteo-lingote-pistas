"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
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

/***/ 36:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: ./lib/db.js + 1 modules
var db = __webpack_require__(450);
;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./config/nodemailer.js

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const transporter = external_nodemailer_default().createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass
    }
});
const mailOptions = {
    from: email,
    to: "sem@quickgold.es, dev@quickgold.es"
};

;// CONCATENATED MODULE: ./pages/api/contact.js
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const CONTAC_MESSAGE_FIELDS = {
    name: "Nombre y Apellido",
    email: "Correo electr\xf3nico",
    subject: "Respuesta de Pistas",
    message: "Tel\xe9fono"
};
const generateEmailContent = (data)=>{
    const stringData = Object.entries(data).reduce((str, [key, val])=>str += `${CONTAC_MESSAGE_FIELDS[key]}: \n${val} \n \n`, "");
    const htmlData = Object.entries(data).reduce((str, [key, val])=>str += `<h1 class="form-heading" align="left">${CONTAC_MESSAGE_FIELDS[key]}</h1><p class="form-answer" align="left">${val}</p>`, "");
    return {
        text: stringData,
        html: `<!DOCTYPE html>
<html>
  <head>
    <title></title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
      table {
        border-collapse: collapse !important;
      }
      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
      }
      @media screen and (max-width: 525px) {
        .wrapper {
          width: 100% !important;
          max-width: 100% !important;
        }
        .responsive-table {
          width: 100% !important;
        }
        .padding {
          padding: 10px 5% 15px 5% !important;
        }
        .section-padding {
          padding: 0 15px 50px 15px !important;
        }
      }
      .form-container {
        margin-bottom: 24px;
        padding: 20px;
        border: 1px dashed #ccc;
      }
      .form-heading {
        color: #2a2a2a;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        text-align: left;
        line-height: 20px;
        font-size: 18px;
        margin: 0 0 8px;
        padding: 0;
      }
      .form-answer {
        color: #2a2a2a;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-weight: 300;
        text-align: left;
        line-height: 20px;
        font-size: 16px;
        margin: 0 0 24px;
        padding: 0;
      }
      div[style*="margin: 16px 0;"] {
        margin: 0 !important;
      }
    </style>
  </head>
  <body style="margin: 0 !important; padding: 0 !important; background: #fff">
    <div
      style="
        display: none;
        font-size: 1px;
        color: #fefefe;
        line-height: 1px;
        max-height: 0px;
        max-width: 0px;
        opacity: 0;
        overflow: hidden;
      "
    ></div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td
          bgcolor="#ffffff"
          align="center"
          style="padding: 10px 15px 30px 15px"
          class="section-padding"
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            width="100%"
            style="max-width: 500px"
            class="responsive-table"
          >
            <tr>
              <td>
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td>
                      <table
                        width="100%"
                        border="0"
                        cellspacing="0"
                        cellpadding="0"
                      >
                        <tr>
                          <td
                            style="
                              padding: 0 0 0 0;
                              font-size: 16px;
                              line-height: 25px;
                              color: #232323;
                            "
                            class="padding message-content"
                          >
                            <h2>Nuevo Mensaje de Contacto</h2>
                            <div class="form-container">${htmlData}</div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`
    };
};
const handler = async (req, res)=>{
    if (req.method === "POST") {
        const data = req.body;
        if (!data.name || !data.email || !data.subject || !data.message) {
            return res.status(400).json({
                message: "Bad request"
            });
        }
        try {
            await transporter.sendMail({
                ...mailOptions,
                ...generateEmailContent(data),
                subject: "Correo de Sorteo Pistas",
                text: "This is a test string"
            });
            return res.status(200).json({
                success: true
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message
            });
        }
    }
    return res.status(400).json({
        message: "Bad request"
    });
};
/* harmony default export */ const contact = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(36));
module.exports = __webpack_exports__;

})();