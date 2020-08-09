const reportRoutr = require("express").Router();
var appController = require('./oderController');
const resHndlr = require("../global/responder");
reportRoutr.route("/oder")
    .post([], function(req, res) {
      appController.oder(req, res);
 })
module.exports = reportRoutr