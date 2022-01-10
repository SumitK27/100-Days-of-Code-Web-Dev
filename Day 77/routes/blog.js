const express = require("express");

const blogController = require("../controllers/post-controller");
const guardRoute = require("../middlewares/auth-protection-middleware");

const router = express.Router();

router.get("/", blogController.getHome);

// Routes defined after this line will have 'guardRoute' middleware applied
router.use(guardRoute);

router.get("/admin", blogController.getAdmin);

router.post("/posts", blogController.createPost);

router.get("/posts/:id/edit", blogController.getSinglePost);

router.post("/posts/:id/edit", blogController.updatePost);

router.post("/posts/:id/delete", blogController.deletePost);

module.exports = router;
