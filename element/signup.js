import { Selector, t } from 'testcafe';

class Signup {
    constructor() {
        this.signUP = Selector("#signin2");
        this.type = Selector("#sign-username");
        this.typepass = Selector("#sign-password");
        this.signUPbtn = Selector("button").withText("Sign up");


    }

    async signUPmethod(username, pass) {

        await t.click(this.signUP);
        await t.typeText(this.type, username);
        await t.typeText(this.typepass, pass);
        console.log("username " + username + "pass " + pass);
        await t
            .setNativeDialogHandler(() => true)
            .click(this.signUPbtn);

    }

}
export default Signup;
