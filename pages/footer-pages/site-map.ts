import { type Locator, type Page } from '@playwright/test';

export class FooterSiteMap{
    readonly page: Page;
    readonly apparelLink: Locator;
    readonly shoesLink: Locator;
    readonly tshirtLink: Locator;
    readonly makeupLink: Locator;
    readonly makeupCheeksLink: Locator;
    readonly makeupEyesLink: Locator;
    readonly makeupFaceLink: Locator;
    readonly makeupLipsLink: Locator;
    readonly makeupNailsLink: Locator;
    readonly makeupSetsLink: Locator;
    readonly skincareLink: Locator;
    readonly skincareEyesLink: Locator;
    readonly skincareFaceLink: Locator;
    readonly skincareGiftsLink: Locator;
    readonly skincareHandsNailsLink: Locator;
    readonly skincareSunLink: Locator;
    readonly fragranceLink: Locator;
    readonly fragranceMenLink: Locator;
    readonly fragranceWomenLink: Locator;
    readonly menLink: Locator;
    readonly menBodyLink: Locator;
    readonly menFragranceLink: Locator;
    readonly menShaveLink: Locator;
    readonly menSkincareLink: Locator;
    readonly haircareLink: Locator;
    readonly haircareConditionerLink: Locator;
    readonly haircareShampooLink: Locator;
    readonly booksLink: Locator;
    readonly booksAudioLink: Locator;
    readonly booksPaperbackLink: Locator;
    readonly specialsLink: Locator;
    readonly accountLink: Locator;
    readonly accountInformationLink: Locator;
    readonly accountPasswordLink: Locator;
    readonly accountAddressBookLink: Locator;
    readonly accountOrderHistoryLink: Locator;
    readonly accountDownloadsLink: Locator;
    readonly shoppingCartLink: Locator;
    readonly checkoutLink: Locator;
    readonly searchLink: Locator;
    readonly aboutUsLink: Locator;
    readonly privacyPolicyLink: Locator;
    readonly returnPolicyLink: Locator;
    readonly shippingLink: Locator;
    readonly contactLink: Locator;

    constructor(page:Page){
      this.page = page;
      this.apparelLink = page.locator('.contentpanel').getByRole('link', { name: 'Apparel & accessories' });
      this.shoesLink = page.locator('.contentpanel').getByRole('link', { name: 'Shoes' });
      this.tshirtLink = page.locator('.contentpanel').getByRole('link', { name: 'T-shirts' });
      this.makeupLink = page.locator('.contentpanel').getByRole('link', { name: 'Makeup' });
      this.makeupCheeksLink = page.locator('.contentpanel').getByRole('link', { name: 'Cheeks' });
      this.makeupEyesLink = page.locator('.contentpanel').getByRole('link', { name: 'Eyes' }).first();
      this.makeupFaceLink = page.locator('.contentpanel').getByRole('link', { name: 'Face' }).first();
      this.makeupLipsLink = page.locator('.contentpanel').getByRole('link', { name: 'Lips' });
      this.makeupNailsLink = page.locator('.contentpanel').getByRole('link', { name: 'Nails', exact: true });
      this.makeupSetsLink = page.locator('.contentpanel').getByRole('link', { name: 'Value Sets' });
      this.skincareLink = page.locator('.contentpanel').getByRole('link', { name: 'Skincare' }).first();
      this.skincareEyesLink = page.locator('.contentpanel').getByRole('link', { name: 'Eyes' }).last();
      this.skincareFaceLink = page.locator('.contentpanel').getByRole('link', { name: 'Face' }).last();
      this.skincareGiftsLink = page.locator('.contentpanel').getByRole('link', { name: 'Gift Ideas & Sets' });
      this.skincareHandsNailsLink = page.locator('.contentpanel').getByRole('link', { name: 'Hands & Nails' });
      this.skincareSunLink = page.locator('.contentpanel').getByRole('link', { name: 'Sun' });
      this.fragranceLink = page.locator('.contentpanel').getByRole('link', { name: 'Fragrance', exact: true });
      this.fragranceMenLink = page.locator('.contentpanel').getByRole('link', { name: 'Men' }).first();
      this.fragranceWomenLink = page.locator('.contentpanel').getByRole('link', { name: 'Women' });
      this.menLink = page.locator('.contentpanel').getByRole('link', { name: 'Men' }).last();
      this.menBodyLink = page.locator('.contentpanel').getByRole('link', { name: 'Body & Shower' });
      this.menFragranceLink = page.locator('.contentpanel').getByRole('link', { name: 'Fragrance Sets' });
      this.menShaveLink = page.locator('.contentpanel').getByRole('link', { name: 'Pre-Shave & Shaving' });
      this.menSkincareLink = page.locator('.contentpanel').getByRole('link', { name: 'Skincare' }).last();
      this.haircareLink = page.locator('.contentpanel').getByRole('link', { name: 'Hair Care' });
      this.haircareConditionerLink = page.locator('.contentpanel').getByRole('link', { name: 'Conditioner' });
      this.haircareShampooLink = page.locator('.contentpanel').getByRole('link', { name: 'Shampoo' });
      this.booksLink = page.locator('.contentpanel').getByRole('link', { name: 'Books' });
      this.booksAudioLink = page.locator('.contentpanel').getByRole('link', { name: 'Audio CD' });
      this.booksPaperbackLink = page.locator('.contentpanel').getByRole('link', { name: 'Paperback' });
      this.specialsLink = page.locator('.contentpanel').getByRole('link', { name: 'Special Offers' });
      this.accountLink = page.locator('.contentpanel').getByRole('link', { name: 'My Account' });
      this.accountInformationLink = page.locator('.contentpanel').getByRole('link', { name: 'Account Information' });
      this.accountPasswordLink = page.locator('.contentpanel').getByRole('link', { name: 'Password' });
      this.accountAddressBookLink = page.locator('.contentpanel').getByRole('link', { name: 'Address Book' });
      this.accountOrderHistoryLink = page.locator('.contentpanel').getByRole('link', { name: 'Order History' });
      this.accountDownloadsLink = page.locator('.contentpanel').getByRole('link', { name: 'Downloads' });
      this.shoppingCartLink = page.locator('.contentpanel').getByRole('link', { name: 'Shopping Cart' });
      this.checkoutLink = page.locator('.contentpanel').getByRole('link', { name: 'Checkout' });
      this.searchLink = page.locator('.contentpanel').getByRole('link', { name: 'Search' });
      this.aboutUsLink = page.locator('.contentpanel').getByRole('link', { name: 'About Us' });
      this.privacyPolicyLink = page.locator('.contentpanel').getByRole('link', { name: 'Privacy Policy' });
      this.returnPolicyLink = page.locator('.contentpanel').getByRole('link', { name: 'Return Policy' });
      this.shippingLink = page.locator('.contentpanel').getByRole('link', { name: 'Shipping' });
      this.contactLink = page.locator('.contentpanel').getByRole('link', { name: 'Contact Us' });
    }

    async clickApparelLink(){
      await this.apparelLink.click();
    }

    async clickShoesLink(){
      await this.shoesLink.click();
    }

    async clickTshirtLink(){
      await this.tshirtLink.click();
    }

    async clickMakeupLink(){
      await this.makeupLink.click();
    }

    async clickMakeupCheeksLink(){
      await this.makeupCheeksLink.click();
    }

    async clickMakeupEyesLink(){
      await this.makeupEyesLink.click();
    }

    async clickMakeupFaceLink(){
      await this.makeupFaceLink.click();
    }

    async clickMakeupLipsLink(){
      await this.makeupLipsLink.click();
    }

    async clickMakeupNailsLink(){
      await this.makeupNailsLink.click();
    }

    async clickMakeupSetsLink(){
      await this.makeupSetsLink.click();
    }

    async clickSkincareLink(){
      await this.skincareLink.click();
    }

    async clickSkincareEyesLink(){
      await this.skincareEyesLink.click();
    }

    async clickSkincareFaceLink(){
      await this.skincareFaceLink.click();
    }

    async clickSkincareGiftIdeasLink(){
      await this.skincareGiftsLink.click();
    }

    async clickSkincareHandsNailsLink(){
      await this.skincareHandsNailsLink.click();
    }

    async clickSkincareSunLink(){
      await this.skincareSunLink.click();
    }

    async clickFragranceLink(){
      await this.fragranceLink.click();
    }

    async clickFragranceMenLink(){
      await this.fragranceMenLink.click();
    }

    async clickFragranceWomenLink(){
      await this.fragranceWomenLink.click();
    }

    async clickMenLink(){
      await this.menLink.click();
    }

    async clickMenBodyShowerLink(){
      await this.menBodyLink.click();
    }

    async clickMenFragranceLink(){
      await this.menFragranceLink.click();
    }

    async clickMenShaveLink(){
      await this.menShaveLink.click();
    }

    async clickMenSkincareLink(){
      await this.menSkincareLink.click();
    }

    async clickHaircareLink(){
      await this.haircareLink.click();
    }

    async clickHaircareConditionerLink(){
      await this.haircareConditionerLink.click();
    }

    async clickHaircareShampooLink(){
      await this.haircareShampooLink.click();
    }

    async clickBooksLink(){
      await this.booksLink.click();
    }

    async clickBooksAudioLink(){
      await this.booksAudioLink.click();
    }

    async clickBooksPaperbackLink(){
      await this.booksPaperbackLink.click();
    }

    async clickSpecialOffersLink(){
      await this.specialsLink.click();
    }

    async clickAccountLink(){
      await this.accountLink.click();
    }

    async clickAccountInformationLink(){
      await this.accountInformationLink.click();
    }

    async clickAccountPasswordLink(){
      await this.accountPasswordLink.click();
    }

    async clickAccountAddressBookLink(){
      await this.accountAddressBookLink.click();
    }

    async clickAccountOrderHistoryLink(){
      await this.accountOrderHistoryLink.click();
    }

    async clickAccountDownloadsLink(){
      await this.accountDownloadsLink.click();
    }

    async clickShoppingCartLink(){
      await this.shoppingCartLink.click();
    }

    async clickCheckoutLink(){
      await this.checkoutLink.click();
    }

    async clickSearchLink(){
      await this.searchLink.click();
    }

    async clickAboutUsLink(){
      await this.aboutUsLink.click();
    }

    async clickPrivacyPolicyLink(){
      await this.privacyPolicyLink.click();
    }

    async clickReturnPolicyLink(){
      await this.returnPolicyLink.click();
    }

    async clickShippingLink(){
      await this.shippingLink.click();
    }

    async clickContactUsLink(){
      await this.contactLink.click();
    }
    
}