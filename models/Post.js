const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },

    description:{
        type:String,
        required:true,

    },

    photo:{
        type:String,
        required:false,
        default:'',
    },

    username:{
        type:String,
        required:true,
    },

    category:{
        type:Array,
        required:false,
        enum:['Web Dev','Data analyst','Ethical Hacker','Cloud Engineer']
    }

},
    {timestamps:true}
);

module.exports = mongoose.model('Post',postSchema);
