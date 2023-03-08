import express from "express";
import { createUsers } from "./controllerUsers/createUsers";
import { searchUser } from "./controllerUsers/searchUser";
/* import { createComents } from "./controllerComments/createComments";
import { searchAllComments } from "./controllerComments/searchAllComments";
import { searchCommentsIdmovies } from "./controllerComments/searchCommentsIdMovies";
import { destroyComments } from "./controllerComments/destroyComments"; */
/* import { serve, setup } from "swagger-ui-express"; */
/* import * as swagger from "./swagger.json"; */

const router = express.Router();
const searchMovie = new createUsers();
const searchUsers= new searchUser();
/* const saveComent = new createComents();
const searchComent = new searchAllComments();
const searchCommentId = new searchCommentsIdmovies();
const destroyCommentId = new destroyComments(); */

/* router.use("/docs", serve, setup(swagger)); */

router.post("/createUser", searchMovie.createUsers);
router.get("/searchUser", searchUsers.searchUser);
/* router.get("/searchMovieId/", searchId.searchMovieId);
router.post("/createComents", saveComent.createComents);
router.get("/searchAllComments", searchComent.searchAllComments);

router.delete("/destroyComment/:idComment", destroyCommentId.destroyComments); */

export { router };
