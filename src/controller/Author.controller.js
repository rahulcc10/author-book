let Author =  require("../model/Author.model")

// exports.addAuthor = (req ,res) => {
//     new Author(req.body).save()
//     .then((result) => {
//         res.jsonp({message: "Author added successfully",statusCode: 201 , status: true, data: result})
//     })
//     .catch((error) => {
//         res.jsonp({message: "unable to add",statusCode: 403 , status: false})

//     })
// }

// exports.getAllAuthor = (req ,res) => {
//     Author.find()
//     .then((result) => {
//         res.jsonp({message: "Author fetch successfully",statusCode: 200 , status: true, data: result})
//     })
//     .catch((error) => {
//         res.jsonp({message: "unable to add",statusCode: 403 , status: false})

//     })
// }


// exports.getAuthorById = (req ,res) => {
//     Author.findOne({_id : req.params.id})
//     .then((result) => {
//         res.jsonp({message: "Author fetch successfully",statusCode: 200 , status: true, data: result})
//     })
//     .catch((error) => {
//         res.jsonp({message: "unable to fetch",statusCode: 403 , status: false})
//     })
// }

// exports.deleteAuthorById = (req ,res) => {
//     Author.findOneAndDelete({_id : req.params.id})
//     .then((result) => {
//         res.jsonp({message: "Author deleted successfully",statusCode: 200 , status: true, data: result})
//     })
//     .catch((error) => {
//         res.jsonp({message: "unable to delete",statusCode: 403 , status: false})
//     })
// }


// exports.updateAuthorById = (req ,res) => {
//     Author.findOneAndUpdate({_id : req.params.id} , req.body)
//     .then((result) => {
//         res.jsonp({message: "Author updated successfully",statusCode: 200 , status: true, data: result})
//     })
//     .catch((error) => {
//         res.jsonp({message: "unable to update",statusCode: 403 , status: false})
//     })
// }



exports.addAuthor = async (req , res)=>{
    try {
        const result = await new Author(req.body).save()
        res.jsonp({message: "Author added successfully",statusCode: 201 , status: true, data: result})
    } catch (error) {
        res.jsonp({message: "unable to add",statusCode: 403 , status: false})
    }
}

exports.getAllAuthor = async (req , res)=>{
    try {
        const result = await Author.find()
        res.jsonp({message: "Author fetch successfully",statusCode: 200 , status: true, data: result})
    } catch (error) {
        res.jsonp({message: "unable to fetch",statusCode: 403 , status: false})

    }
}

exports.getAuthorById = async (req , res)=>{
    try {
        const result = await Author.find({_id : req.params.id})
        res.jsonp({message: "Author fetch successfully",statusCode: 200 , status: true, data: result})
    } catch (error) {
        res.jsonp({message: "unable to fetch",statusCode: 403 , status: false})

    }
}

exports.deleteAuthorById = async (req ,res) => {
    try {
        let result = await Author.findOneAndDelete({_id:req.params.id})
        res.jsonp({message: "Author deleted successfully",statusCode: 200 , status: true, data: result})
    } catch (error) {
        res.jsonp({message: "unable to delete",statusCode: 403 , status: false})
        
    }
}