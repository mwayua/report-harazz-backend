const Case = require("../models/case");

exports.getAllCases = function (req, res) {
    Case.find({}, function (err, cases) {
      if (err) res.send(err);
      res.json(cases);
    });
  };

  exports.createNewCase = function (req, res) {
    var new_case = new Case(req.body);
    new_case.save(function (err, cases) {
      if (err) res.send(err);
      res.json(cases);
    });
  };

  exports.getCase = function (req, res) {
    Case.findById(req.params.caseId, function (err, cases) {
      if (err) res.send(err);
      res.json(cases);
    });
  };
  
  exports.updateCase = function (req, res) {
    Case.findOneAndUpdate(
      { _id: req.params.caseId },
      req.body,
      { new: true },
      function (err, cases) {
        if (err) res.send(err);
        res.json(cases);
      }
    );
  };
  
  exports.deleteCase = function (req, res) {
    Case.remove(
      {
        _id: req.params.caseId,
      },
      function (err, cases) {
        if (err) res.send(err);
        res.json({ message: "Case successfully deleted" });
      }
    );
  };