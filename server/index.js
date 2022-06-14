 require('dotenv').config();
 const express = require('express');
 const app = express();
 const cors = require("cors");
 const connection = require("./db");
 const userRoutes = require("./routes/users");
 const authRoutes = require("./routes/auth");
 const victimRoutes = require("./routes/victims");
 const perpetartorRoutes = require("./routes/perpetrators");
 const caseRoutes = require("./routes/cases");

 // database connection
 connection();
 
 //middleware
 app.use(express.json())
 app.use(cors());

 //routes
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);

  
  victimRoutes(app)
  perpetartorRoutes(app)
  caseRoutes(app)


  //app.use("/api/victim", victimRoutes);

 const port = process.env.PORT||8080;
 app.listen(port, () => console.log(`Listening on port ${port}...`));