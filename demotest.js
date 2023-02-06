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
);