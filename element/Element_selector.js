import { Selector, t } from 'testcafe';
class Element_selector {
    constructor() {
        this.signUP = Selector("#signin2");
    }
    async signUPmethod() {
        await t.click(this.signUP);
    }
}
export default Element_selector;
