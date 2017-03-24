var server = require("../controllers/controller.js");

module.exports = function(app){
  app.post("/login",server.login);
  app.post("/register",server.register);
  app.get("/dashboard",server.dashboard);
  app.get("/logout",server.logout);
  app.post("/addq",server.addq);
  app.get("/getqs",server.getqs);
  app.get("/question/:id",server.getsingle);
  app.get("/answer/:id",server.getanswer);
  app.post("/answer/:id",server.subanswer);
  app.post("/like/:id",server.addlike);
}
