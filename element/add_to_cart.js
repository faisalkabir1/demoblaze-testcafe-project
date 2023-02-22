import { Selector, t } from 'testcafe';
import { faker } from '@faker-js/faker';
class AddtoCart {
    constructor() {
        this.product = Selector("a").withText("Samsung galaxy s6");
        this.addtocart = Selector("a").withText("Add to cart");
        this.cartbtn = Selector("a").withText("Cart");


    }
    async addtoCartMethod() {
        await t.click(this.product)
        await t.click(this.addtocart)
        await t.click(this.cartbtn)
    }
    async OrderMethod() {

    }
}