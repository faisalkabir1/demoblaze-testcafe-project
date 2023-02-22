import { Selector, t } from 'testcafe';
import { faker } from '@faker-js/faker';
class AddtoCart {
    constructor() {
        this.product = Selector("a").withText("Samsung galaxy s6");
        this.addtocartbtn = Selector("a").withText("Add to cart");
        this.cartbtn = Selector("a").withText("Cart");
        this.orderbtn = Selector("button").withText("Place Order");

    }
    async addtoCartMethod() {
        await t.click(this.product)
        await t.click(this.addtocartbtn)
        await t.click(this.cartbtn)
    }
    async OrderMethod() {
        await t.click(this.orderbtn)
        await t.typeText("#name", "fkkabir");
        await t.typeText("#country", "Bangladesh");
        await t.typeText("#city", "Dhaka");
        await t.typeText("#month", "12");
        await t.typeText("#card", "1234567891011");
        await t.typeText("#year", "2025")

    }
}
export default AddtoCart;