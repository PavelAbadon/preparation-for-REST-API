import Animal from "../models/animal.js";

export function createAnimal(animalData, userId) {
    return Animal.create({
        ...animalData, 
        owner: userId}
    )}