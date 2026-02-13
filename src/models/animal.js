import { Schema, Types, model } from "mongoose";

const animalSchema = new Schema({
    name:{
        type: String,
        required:[true, 'Name is required']
    },
    years:{
        type: String,
        required:[true, 'Years is required']
    },
    kind:{
        type: String,
        required:[true, 'Kind is required']
    },
    imageUrl:{
        type: String,
        required:[true, 'Image is required']
    },
    need:{
        type: String,
        required:[true, 'Need is required']
    },
    location:{
        type: String,
        required:[true, 'Location is required']
    },
    description:{
        type: String,
        required:[true, 'Description is required']
    },
    owner:{
        type: Types.ObjectId,
        ref: 'User', 
    },
});

const Animal = model('Animal', animalSchema);

export default Animal;