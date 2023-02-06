<<<<<<< Updated upstream
=======
import { Selector } from 'testcafe'

fixture`Getting Started`
    .page`https://www.demoblaze.com/`


test('Sign up test', async t => {
    await t.click("#signin2");
    await t.typeText("#sign-username", "faisalk007");
    await t.typeText("#sign-password", "faisalk007");
    //await t.click(Selector("button").withText("Sign up"));
    await t
        .setNativeDialogHandler(() => true)
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
>>>>>>> Stashed changes
