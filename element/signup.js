import { Selector, t } from 'testcafe';
import { faker } from '@faker-js/faker';
class Element_selector {
    constructor() {
        this.signUP = Selector("#signin2");
        this.type = Selector("#sign-username");
        this.typepass = Selector("#sign-password");
        this.signUPbtn = Selector("button").withText("Sign up");
        this.login = Selector("#login2");
        this.typename = Selector("#loginusername");
        this.typepassw = Selector("#loginpassword");
        this.loginBtn = Selector("button").withText("Log in");
    }
    async signUPmethod() {
        await t.click(this.signUP);
        await t.typeText(this.type, faker.name.fullName());
        await t.typeText(this.typepass, faker.internet.password());
        await t
            .setNativeDialogHandler(() => true)
            .click(this.signUPbtn);

    }
    async LoginMethod() {
        await t.click(this.login);
        await t.typeText(this.typename, "faisalk007");
        await t.typeText(this.typepassw, "faisalk007");
        await t
            .setNativeDialogHandler(() => true)
            .click(this.loginBtn);
    }
}
export default Element_selector;
