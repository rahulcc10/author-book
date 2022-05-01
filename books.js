let express = require('express')

let mongoose = require('mongoose')

let bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/BooksDb")
.then(() =>{
    console.log("Database is connected.")
})
.catch(() =>{
    console.log("database is unable to connect")
})

let AuthorRoute = require("./src/route/Author.route")
app.use("/author",AuthorRoute)


let port = 2000

app.listen( port , () => {
    console.log("server is listening on port",port)
})