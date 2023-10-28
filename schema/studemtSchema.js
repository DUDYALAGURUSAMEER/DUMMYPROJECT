const mongoose  = require("mongoose");

const studentSchema =  new mongoose.Schema({ //the name of string should match file name
    name:{type:String},
    email:{type:String},
    password:{type:String}
},
{
    collection:"Students", //the collection you created in mongodb atlas
}

);

//export the data to database
module.exports  = mongoose.model("Students",studentSchema);

