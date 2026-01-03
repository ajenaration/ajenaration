const { onRequest } = require("firebase-functions/v2/https");
const app = require("./server");
exports.app = onRequest({ region: "us-east1" }, app);
