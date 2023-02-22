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
    randomMonth = faker.datatype.number({ min: 1, max: 12 });
    async OrderMethod() {
        await t.click(this.orderbtn)
        await t.typeText("#name", faker.name.fullName());
        await t.typeText("#country", faker.address.country());
        await t.typeText("#city", faker.address.cityName());
        await t.typeText("#month", this.randomMonth);
        await t.typeText("#card", faker.finance.creditCardNumber());
        await t.typeText("#year", faker.date.future().getFullYear());
        await t.click(this.orderbtn);
        await t
            //.setNativeDialogHandler(() => true)
            .click(Selector("button").withText("Purchase"));
        await t
            .click(Selector("button").withText("OK"));
    }
}
export default AddtoCart;