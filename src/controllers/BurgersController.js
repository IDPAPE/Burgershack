import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";


export class BurgersController extends BaseController {
    constructor() {
        super('api/BurgerMenu')
        this.router.get('/test', this.testBurgers)
        this.router.get('', this.getBurgers)
        this.router.post('', this.postBurger)
        this.router.delete('/:burgerId', this.deleteBurger)
        this.router.put('/:burgerId', this.updateBurger)
    }


    async getBurgers(request, response, next) {
        try {
            const burgers = await burgersService.getBurgers()
            response.send(burgers)
        } catch (error) {
            next(error)
            console.error(error)
        }
    }

    async postBurger(request, response, next) {
        try {
            const burgerData = request.body
            const burger = await burgersService.postBurger(burgerData)
            response.send(burger)
        } catch (error) {
            next(error)
            console.error(error)
        }
    }

    async deleteBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = await burgersService.deleteBurger(burgerId)
            response.send('removed burger')
        } catch (error) {
            next(error)
            console.error(error)
        }
    }

    async updateBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burgerData = request.body
            const burger = await burgersService.updateBurger(burgerId, burgerData)
            response.send('updating burger')
        } catch (error) {
            next(error)
            console.error(error)
        }
    }

    testBurgers(request, response, next) {
        response.send('burger time?')
    }
}