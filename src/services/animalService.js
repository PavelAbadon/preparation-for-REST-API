import Animal from "../models/animal.js";

export function getAllAnimals (){
    return Animal.find();
}

export function getLatest (){
    return Animal.find().sort({_id:-1}).limit(3);
}

export function createAnimal(animalData, userId) {
    return Animal.create({
        ...animalData, 
        owner: userId}
)}

export function getOneById (animalId){
    return Animal.findById(animalId).populate('donations');
}

export function donate (animalId, userId){
    return Animal.findByIdAndUpdate( animalId, { $push:{donations:userId} });
}

export function deleteAnimal(animalId, userId){
    return Animal.findByIdAndDelete(animalId);
}

export function editAnimal(animalId, animalData, userId){
    return Animal.findByIdAndUpdate(animalId, animalData, {runValidators:true});

}