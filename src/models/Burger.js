import { Schema } from "mongoose";

export const BurgerSchema = new Schema({

    name: { type: String, required: true },
    protein: { type: String, required: true },
    pattyCount: { type: Number, required: true },
    cheeseSlices: { type: Number, required: true },
    hasLettuce: { type: Boolean, required: true },
    sauce: { type: String, required: true },
    sauce2: { type: String },
    specialTopping1: { type: String },
    specialTopping2: { type: String },
    specialTopping3: { type: String },
    isGlutenFree: { type: Boolean, required: true },
    isVegetarian: { type: Boolean, required: true },
    calories: { type: Number, required: true }

})

// { name: 'Single Cheeseburger', protein: 'Beef', pattyCount: 1, cheeseSlices: 1, hasLettuce: true, sauce: 'mayonaise', isGlutenFree: false, isVegetarian: false}

// {
//     "_id": "66146259e12760f587c9eb22",
//     "name": "Single Cheeseburger",
//     "protein": "Beef",
//     "pattyCount": 1,
//     "cheeseSlices": 1,
//     "hasLettuce": true,
//     "sauce": "mayonaise",
//     "isGlutenFree": false,
//     "isVegetarian": false
// }