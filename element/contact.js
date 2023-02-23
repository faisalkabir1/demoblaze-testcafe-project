import { Selector, t } from 'testcafe';
import { faker } from '@faker-js/faker';
class Contact {
    constructor() {
        this.emailadd = Selector("#recipient-email");
        this.nameadd = Selector("#recipient-name");
        this.message = ("#message-text")
        await t
    }
    async ContactInfo() {
        await t.typeText
        await t.typeText
        await t.typeText
    }
}