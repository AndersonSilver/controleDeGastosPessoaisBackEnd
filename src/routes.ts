import express from "express";
import { createUsers } from "./controllerUsers/createUsers";
import { searchUser } from "./controllerUsers/searchUser";
/* import { serve, setup } from "swagger-ui-express"; */
/* import * as swagger from "./swagger.json"; */

const router = express.Router();
const searchMovie = new createUsers();
const searchUsers= new searchUser();


/* router.use("/docs", serve, setup(swagger)); */
router.post("/createUser", searchMovie.createUsers);
router.get("/searchUser", searchUsers.searchUser);

export { router };
