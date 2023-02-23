import { Selector } from 'testcafe'
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


test('Sign up test', async t => {
    await signup.signUPmethod();
}
)
test('Log in test', async t => {
    await login.LoginMethod();
    await t.click("#logout2");
})

test('Add to cart and order', async t => {
    await login.LoginMethod();
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