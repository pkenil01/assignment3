//import mongoose module
let mongoose = require('mongoose');
//create book model
let bookModel = mongoose.Schema({
    title: String,
    author: String,
    description: String,
    status: String     
},
    {
        collection: "books"
    }
);
//export book model
module.exports = mongoose.model('Book', bookModel);