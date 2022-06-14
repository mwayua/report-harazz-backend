module.exports = function (app) {
    var Victim = require("../controllers/victim");
  
    //Routes
    app.route("/api/victim").get(Victim.getAllVictims).post(Victim.createNewVictim);
  
    app
      .route("/api/victim/:victimId")
      .get(Victim.getVictim)
      .put(Victim.updateVictim)
      .delete(Victim.deleteVictim);
  };
  

