import { type Locator, type Page } from '@playwright/test';
import { newAddressVariables } from '../../utils/variables/address';

export class AccountInsertNewAddress{
    readonly page: Page;
    readonly newAddressForm: Locator;
    readonly newAddressFirstNameField: Locator;
    readonly newAddressLastNameField: Locator;
    readonly newAddressAddressField: Locator;
    readonly newAddressCityField: Locator;
    readonly newAddressStateOption: Locator;
    readonly newAddressZipField: Locator;
    readonly newAddressCountryOption: Locator;
    readonly newAddressDefaultAddress: Locator;
    readonly newAddressContinueButton: Locator;
    readonly backButton: Locator;
    readonly successAddressAlert: Locator;

    constructor(page: Page){
      this.page = page;
      this.newAddressForm = page.locator('#AddressFrm');
      this.newAddressFirstNameField = page.locator('#AddressFrm_firstname');
      this.newAddressLastNameField = page.locator('#AddressFrm_lastname');
      this.newAddressAddressField = page.locator('#AddressFrm_address_1');
      this.newAddressCityField = page.locator('#AddressFrm_city');
      this.newAddressStateOption = page.locator('#AddressFrm_zone_id');
      this.newAddressZipField = page.locator('#AddressFrm_postcode');
      this.newAddressCountryOption = page.locator('#AddressFrm_country_id');
      this.newAddressDefaultAddress = page.locator('#AddressFrm_default1');
      this.newAddressContinueButton = page.locator('#AddressFrm').getByTitle('Continue');
      this.backButton = page.getByRole('link', { name: ' Back' });
      this.successAddressAlert = page.getByText('Your address has been successfully inserted');
    }

    async fillNewAddressFirstNameField(){
      await this.newAddressFirstNameField.fill(newAddressVariables.newFirstName);
    }

    async fillNewAddressLastNameField(){
      await this.newAddressLastNameField.fill(newAddressVariables.newLastName);
    }

    async fillNewAddressAddressField(){
      await this.newAddressAddressField.fill(newAddressVariables.newAddress);
    }

    async fillNewAddressCityField(){
      await this.newAddressCityField.fill(newAddressVariables.newCity);
    }

    async selectNewAddressRegionOption(){
      await this.newAddressStateOption.selectOption(newAddressVariables.newRegion);
    }

    async fillNewAddressZipCodeField(){
      await this.newAddressZipField.fill(newAddressVariables.newZIP);
    }

    async selectNewAddressCountryOption(){
      await this.newAddressCountryOption.selectOption(newAddressVariables.newCountry);
    }

    async clickBackButton(){
      await this.backButton.click();
    }

    async checkDefaultAddressRadioButton(){
      await this.newAddressDefaultAddress.check();
    }

    async clickNewAddressContinueButton(){
      await this.newAddressContinueButton.click();
    }
}