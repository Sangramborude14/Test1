const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
username: {
    type: String,
    required: true
},
blogContent: {
    type: String,
    required: true
},
ContentType: {
    type: Boolean,
    required: true
}
});

module.exports = mongoose.model("Blog",blogSchema)
