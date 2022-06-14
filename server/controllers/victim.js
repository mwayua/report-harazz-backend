const Victim = require("../models/victim");

exports.getAllVictims = function (req, res) {
    Victim.find({}, function (err, victim) {
      if (err) res.send(err);
      res.json(victim);
    });
  };

  exports.createNewVictim = function (req, res) {
    var new_victim = new Victim(req.body);
    new_victim.save(function (err, victim) {
      if (err) res.send(err);
      res.json(victim);
    });
  };

  exports.getVictim = function (req, res) {
    Victim.findById(req.params.victimId, function (err, victim) {
      if (err) res.send(err);
      res.json(victim);
    });
  };
  
  exports.updateVictim = function (req, res) {
    Victim.findOneAndUpdate(
      { _id: req.params.victimId },
      req.body,
      { new: true },
      function (err, victim) {
        if (err) res.send(err);
        res.json(victim);
      }
    );
  };
  
  exports.deleteVictim = function (req, res) {
    Victim.remove(
      {
        _id: req.params.victimId,
      },
      function (err, victim) {
        if (err) res.send(err);
        res.json({ message: "Victim successfully deleted" });
      }
    );
  };