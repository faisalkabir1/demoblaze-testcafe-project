import { Selector, t } from 'testcafe';
import { faker } from '@faker-js/faker';
class Contact {
    constructor() {
        this.emailadd = Selector("#recipient-email");
        this.nameadd = Selector("#recipient-name");
        this.message = ("#message-text");
    }
    email = faker.internet.email();
    name = faker.name.fullName();
    Message = faker.lorem.words();
    async ContactInfo() {
        await t.typeText(this.emailadd, this.email)
        await t.typeText(this.nameadd, this.name)
        await t.typeText(this.message, this.Message)
    }
}
export default Contact;