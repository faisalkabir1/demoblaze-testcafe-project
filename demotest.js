import { Selector } from 'testcafe'
import { faker } from '@faker-js/faker';
import Login from './element/login';
import Signup from './element/signup';
import AddtoCart from './element/add_to_cart';
import Contact from './element/contact';
const login = new Login();
const signup = new Signup();
const addtocart = new AddtoCart();
const contact = new Contact();
fixture`Getting Started`
    .page`https://www.demoblaze.com/`

const username = faker.name.fullName();
const pass = faker.internet.password();
test("Sign up test '@name'", async t => {
    await signup.signUPmethod(username, pass);
}
)
test("Log in test '@name'", async t => {
    await login.LoginMethod(username, pass);
    await t.click("#logout2");
})

test('Add to cart and order', async t => {
    await login.LoginMethod(username, pass);
    await addtocart.addtoCartMethod();
    await addtocart.OrderMethod();

})
test('Contact Test', async t => {
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("a").withText("Contact"));
    await contact.ContactInfo()
    await t
        .setNativeDialogHandler(() => true)
        .click(Selector("button").withText("Send message"));

})