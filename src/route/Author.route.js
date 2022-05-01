let router = require("express").Router()

let AuthorController = require("../controller/Author.controller")

router.post("/add",AuthorController.addAuthor)

router.get("/get",AuthorController.getAllAuthor)

router.get("/get/:id",AuthorController.getAuthorById)

router.delete("/delete/:id",AuthorController.deleteAuthorById)




module.exports = router