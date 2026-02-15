import Animal from "../models/animal.js";

export function getAllAnimals (){
    return Animal.find();
}

export function createAnimal(animalData, userId) {
    return Animal.create({
        ...animalData, 
        owner: userId}
    )}