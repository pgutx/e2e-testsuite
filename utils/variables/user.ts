import { randomInt } from "crypto"

export const user = {
    firstName: 'testFirstName',
    lastName: 'testLastName',
    emailAddress: 'testEmail'+ randomInt(1, 200) +'@test.com',
    address1: 'testAddress',
    city: 'testCity',
    zipCode: '12345',
    loginName: 'testLoginNameE2EAuth' + randomInt(1, 200),
    password: 'testPassword123!',
    passwordConfirm: 'testPassword123!'
};