import { dbContext } from "../db/DbContext.js"


class BurgersService {

    async getBurgers() {
        const burgers = await dbContext.Burgers.find()
        return burgers
    }

    async postBurger(burgerData) {
        const burger = await dbContext.Burgers.create(burgerData)
        return burger
    }

    async deleteBurger(burgerId) {
        const burger = await dbContext.Burgers.deleteOne({ _id: burgerId })
        return burger
    }

    async updateBurger(burgerId, burgerData) {
        const burger = await dbContext.Burgers.updateOne({ _id: burgerId }, burgerData)
        return burger
    }
}

export const burgersService = new BurgersService()