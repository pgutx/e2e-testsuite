import { type Locator, type Page } from '@playwright/test';

export const newAddress = {
    newFirstName: 'newAddressFirstName',
    newLastName: 'newAddressLastName',
    newAddress: 'newAddress',
    newCity: 'newAddressCity',
    newZIP: '09876',
    newRegion: '1255',
    newCountry: '81'
}

export class PurchaseNewAddress{
    readonly page: Page;
    readonly actualAddressForm: Locator;
    readonly actualAddressFormContinueButton: Locator;
    readonly newAddressForm: Locator;
    readonly newAddressFirstNameField: Locator;
    readonly newAddressLastNameField: Locator;
    readonly newAddressAddressField: Locator;
    readonly newAddressCityField: Locator;
    readonly newAddressStateOption: Locator;
    readonly newAddressZipField: Locator;
    readonly newAddressCountryOption: Locator;
    readonly newAddressContinueButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.actualAddressForm = page.locator('#address_1');
      this.actualAddressFormContinueButton = page.locator('#address_1').filter({ has: page.getByTitle('Continue') });
      this.newAddressForm = page.locator('Address2Frm');
      this.newAddressFirstNameField = page.locator('Address2Frm_firstname');
      this.newAddressLastNameField = page.locator('Address2Frm_lastname');
      this.newAddressAddressField = page.locator('Address2Frm_address_1');
      this.newAddressCityField = page.locator('Address2Frm_city');
      this.newAddressStateOption = page.locator('Address2Frm_zone_id');
      this.newAddressZipField = page.locator('Address2Frm_postcode');
      this.newAddressCountryOption = page.locator('Address2Frm_country_id');
      this.newAddressContinueButton = page.locator('Address2Frm').filter({ has: page.getByTitle('Continue') });
    }

    async clickActualAddressFormContinueButton(){
      await this.actualAddressFormContinueButton.click();
    }

    async fillNewAddressFirstNameField(){
      await this.newAddressFirstNameField.fill(newAddress.newFirstName);
    }

    async fillNewAddressLastNameField(){
      await this.newAddressLastNameField.fill(newAddress.newLastName);
    }

    async fillNewAddressAddressField(){
      await this.newAddressAddressField.fill(newAddress.newAddress);
    }

    async fillNewAddressCityField(){
      await this.newAddressCityField.fill(newAddress.newCity);
    }

    async selectNewAddressRegionOption(){
      await this.newAddressStateOption.selectOption(newAddress.newRegion);
    }

    async fillNewAddressZipCodeField(){
      await this.newAddressZipField.fill(newAddress.newZIP);
    }

    async selectNewAddressCountryOption(){
      await this.newAddressCountryOption.selectOption(newAddress.newCountry);
    }

    async clickNewAddressContinueButton(){
      await this.newAddressContinueButton.click();
    }
}