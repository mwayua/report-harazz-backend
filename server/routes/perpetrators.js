module.exports = function (app) {
    var Perpetrator = require("../controllers/perpetrator");
  
    //Routes
    app.route("/api/perpetrator").get(Perpetrator.getAllPerpetrators).post(Perpetrator.createNewPerpetrator);
  
    app
      .route("/api/perpetrator/:perpetratorId")
      .get(Perpetrator.getPerpetrator)
      .put(Perpetrator.updatePerpetrator)
      .delete(Perpetrator.deletePerpetrator);
  };
  
