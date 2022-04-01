const express =require("express");
// const connect = require("./configs/db");
const app =express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const {register, login} = require("./controllers/auth.controllers");
const usersControllers= require("./controllers/users.controllers");
app.use("/users",usersControllers);
app.post("/register",register);
app.get("/register",register);
app.post("/login",login);


module.exports =app;