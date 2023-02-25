import { Selector, t } from 'testcafe';
class Login {
    constructor() {
        this.login = Selector("#login2");
        this.typename = Selector("#loginusername");
        this.typepassw = Selector("#loginpassword");
        this.loginBtn = Selector("button").withText("Log in");
    }
    async LoginMethod(username, pass) {
        await t.click(this.login);
        await t.typeText(this.typename, username);
        await t.typeText(this.typepassw, pass);
        //console.log("username " + username + "pass " + pass);
        await t
            .setNativeDialogHandler(() => true)
            .click(this.loginBtn);
    }
}
export default Login;