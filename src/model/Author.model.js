let mongoose = require('mongoose')

let Author = mongoose.Schema({
    title: {
        type :  String
    },
    description: {
        type : String
    }
})

module.exports = mongoose.model("Author",Author )