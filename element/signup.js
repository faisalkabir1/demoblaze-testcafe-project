import { Selector, t } from 'testcafe';
import { faker } from '@faker-js/faker';
class Signup {
    constructor() {
        this.signUP = Selector("#signin2");
        this.type = Selector("#sign-username");
        this.typepass = Selector("#sign-password");
        this.signUPbtn = Selector("button").withText("Sign up");


    }
    username = faker.name.fullName();
    pass = faker.internet.password();
    async signUPmethod() {

        await t.click(this.signUP);
        await t.typeText(this.type, this.username);
        await t.typeText(this.typepass, this.pass);
        await t
            .setNativeDialogHandler(() => true)
            .click(this.signUPbtn);

    }

}
export default Signup;
