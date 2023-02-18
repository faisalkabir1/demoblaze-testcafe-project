import { Selector } from 'testcafe'
import Element_selector from './element/Element_selector';
import { faker } from '@faker-js/faker';

const element_selector = new Element_selector();
fixture`Getting Started`
    .page`https://www.demoblaze.com/`


test.only('Sign up test', async t => {
    await element_selector.signUPmethod();
    await t.typeText("#sign-username", faker.name.fullName());
    await t.typeText("#sign-password", faker.internet.password());
    await t
        .click(Selector("button").withText("Sign up"));
    await t.debug();
}
)
test('Log in test', async t => {
    await t.click("#login2");
    await t.typeText("#loginusername", "faisalk007");
    await t.typeText("#loginpassword", "faisalk007");
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("button").withText("Log in"));
    await t.debug();

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
    await t.debug();
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