module.exports = function (app) {
    var Case = require("../controllers/case");
  
    //Routes
    app.route("/api/case").get(Case.getAllCases).post(Case.createNewCase);
  
    app
      .route("/api/case/:caseId")
      .get(Case.getCase)
      .put(Case.updateCase)
      .delete(Case.deleteCase);
  };