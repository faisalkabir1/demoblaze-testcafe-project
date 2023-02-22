import { Selector, t } from 'testcafe';
import { faker } from '@faker-js/faker';
class AddtoCart {
    constructor() {
        this.product = Selector("a").withText("Samsung galaxy s6");
        this.addtocartbtn = Selector("a").withText("Add to cart");
        this.cartbtn = Selector("a").withText("Cart");


    }
    async addtoCartMethod() {
        await t.click(this.product)
        await t.click(this.addtocartbtn)
        await t.click(this.cartbtn)
    }
    async OrderMethod() {

    }
}
export default AddtoCart;