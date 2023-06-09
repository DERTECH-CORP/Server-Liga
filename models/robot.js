const { Schema, model } = require("mongoose");


const RobotSchema = Schema({
    name:{
        type : String,
        required : true,
    },
    de:{
        type : Schema.Types.ObjectId,
        ref : 'User',
        required : true,
        captain : String,
    },
    description : {
        type : String,
        required : true,
    },
    score:{
        type : Number,
        required : true,
    },
    verify:{
        type : Boolean,
        required : true
    }
})

MessageSchema.method('toJSON', function(){
    const { __v, ...object} = this.toObject();
    return object;
})

module.exports = model('Robot', RobotSchema)