import { type Locator, type Page } from '@playwright/test';
import { user } from '../../utils/variables/user';

export class FooterContactUs{
    readonly page: Page;
    readonly contactSection: Locator;
    readonly firstNameField: Locator;
    readonly emailField: Locator;
    readonly enquiryField: Locator;
    readonly resetButton: Locator;
    readonly submitButton: Locator;
    readonly contactSuccessAlert: Locator;

    constructor(page:Page){
      this.page = page;
      this.contactSection = page.locator('.contentpanel').filter({ hasText: 'Address:' });
      this.firstNameField = page.locator('#ContactUsFrm_first_name');
      this.emailField = page.locator('#ContactUsFrm_email');
      this.enquiryField = page.locator('#ContactUsFrm_enquiry');
      this.resetButton = page.getByRole('button', { name: 'Reset' });
      this.submitButton = page.getByRole('button', { name: 'Submit' });
      this.contactSuccessAlert = page.getByText('Your enquiry has been successfully sent to the store owner!');
    }

    async fillFirstNameField(){
      await this.firstNameField.fill(user.firstName);
    }

    async fillEmailField(){
      await this.emailField.fill(user.emailAddress);
    }

    async fillEnquiryField(){
      await this.enquiryField.fill('This is a test enquiry');
    }

    async clickResetButton(){
      await this.resetButton.click();
    }

    async clickSubmitButton(){
      await this.submitButton.click();
    }
}