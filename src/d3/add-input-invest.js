var d3 = require('d3');
var $  = require('jquery');

var addDataList = require('./add-data-list');
var preFillName = require('./pre-fill-name');

var utils = require('../utilities');

var investingTmpl = require("../templates/investing.jade");

var addInputInvest = function (idx) {
  if ($('#investing-' + idx + ' input[name="invest"]').val() !== "") {
    d3.select('#investing-' + idx + ' input[name="invest"]').on(
      'keyup',
      function() {
        preFillName(this.value, '#investing-' + (idx - 1) + ' input[name="invest"]');
      }
    );
    idx++; // counter -> 2


    $("#investing-" + (idx - 1)).after(investingTmpl({ idx: idx }));

    addDataList('#investing-' + idx + ' datalist', utils.getSortedNameOptions());

    d3.select("#investing-" + idx + " input[name='invest']").on("keyup", function() {
      addInputInvest(idx);
    });
  }
};

module.exports = addInputInvest;
