const Perpetrator = require("../models/perpetrator");

exports.getAllPerpetrators = function (req, res) {
    Perpetrator.find({}, function (err, perpetrator) {
      if (err) res.send(err);
      res.json(perpetartor);
    });
  };

  exports.createNewPerpetrator = function (req, res) {
    var new_perpetrator = new Perpetrator(req.body);
    new_perpetrator.save(function (err, perpetrator) {
      if (err) res.send(err);
      res.json(perpetrator);
    });
  };

  exports.getPerpetrator = function (req, res) {
    Perpetrator.findById(req.params.perpetratorId, function (err, perpetrator) {
      if (err) res.send(err);
      res.json(perpetrator);
    });
  };
  
  exports.updatePerpetrator = function (req, res) {
    Perpetrator.findOneAndUpdate(
      { _id: req.params.perpetratorId },
      req.body,
      { new: true },
      function (err, perpetrator) {
        if (err) res.send(err);
        res.json(perpetrator);
      }
    );
  };
  
  exports.deletePerpetrator = function (req, res) {
    Perpetrator.remove(
      {
        _id: req.params.perpetratorId,
      },
      function (err, perpetrator) {
        if (err) res.send(err);
        res.json({ message: "Perpetrator successfully deleted" });
      }
    );
  };