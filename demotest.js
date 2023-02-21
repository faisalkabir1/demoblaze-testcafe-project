import { Selector } from 'testcafe'
import Signup from './element/signup';

const element_selector = new Element_selector();
fixture`Getting Started`
    .page`https://www.demoblaze.com/`


test('Sign up test', async t => {
    await element_selector.signUPmethod();
}
)
test('Log in test', async t => {
    await element_selector.LoginMethod();
})
test('Contact Test', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("a").withText("Contact"));
    await t.typeText("#recipient-email", "faisalk007@gmail.com");
    await t.typeText("#recipient-name", "faisalk");
    await t.typeText("#message-text", "Hello demo....!")
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("button").withText("Send message"));

})
test('Add to cart and order', async t => {
    await t
        // .setNativeDialogHandler(() => true)
        .click(Selector("a").withText("Samsung galaxy s6"));
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("a").withText("Add to cart"));
    await t
        // .setNativeDialogHandler(() => true)
        .click(Selector("a").withText("Cart"));
    await t
        .click(Selector("button").withText("Place Order"));
    await t.typeText("#name", "fkkabir");
    await t.typeText("#country", "Bangladesh");
    await t.typeText("#city", "Dhaka");
    await t.typeText("#month", "12");
    await t.typeText("#card", "1234567891011");
    await t.typeText("#year", "2025");
    await t
        //.setNativeDialogHandler(() => true)
        .click(Selector("button").withText("Purchase"));
    await t
        .click(Selector("button").withText("OK"));
    await t.debug();

})