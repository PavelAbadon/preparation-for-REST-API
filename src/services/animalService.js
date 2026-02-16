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