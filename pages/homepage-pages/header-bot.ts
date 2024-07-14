import { type Locator, type Page } from '@playwright/test';

export class HomePageHeaderBot {
    readonly page: Page;
    readonly homeButton: Locator;
    readonly specialsLink: Locator;
    readonly accountLink: Locator;
    readonly cartLink: Locator;
    readonly checkoutLink: Locator;
    readonly apparelsButton: Locator;
    readonly shoesLink: Locator;
    readonly tshirtsLink: Locator;
    readonly makeupButton: Locator;
    readonly makeupCheeksLink: Locator;
    readonly makeupEyesLink: Locator;
    readonly makeupFaceLink: Locator;
    readonly makeupLipsLink: Locator;
    readonly makeupNailsLink: Locator;
    readonly makeupSetsLink: Locator;
    readonly skincareButton: Locator;
    readonly skincareEyesLink: Locator;
    readonly skincareFaceLink: Locator;
    readonly skincareGiftLink: Locator;
    readonly skincareHandsNailsLink: Locator;
    readonly skincareSunLink: Locator;
    readonly fragranceButton: Locator;
    readonly fragranceMenLink: Locator;
    readonly fragranceWomenLink: Locator;
    readonly menButton: Locator;
    readonly menBodyLink: Locator;
    readonly menFragranceLink: Locator;
    readonly menShaveLink: Locator;
    readonly menSkincareLink: Locator;
    readonly hairCareButton: Locator;
    readonly hairConditionerLink: Locator;
    readonly hairShampooLink: Locator;
    readonly booksButton: Locator;
    readonly booksAudioLink: Locator;
    readonly booksPaperback: Locator;

    constructor(page: Page){
      this.page = page;
      this.homeButton = page.getByRole('link', { name: 'Home' });
      this.specialsLink = page.locator('#main_menu').getByRole('link', { name: '  Specials' });
      this.accountLink = page.locator('#main_menu').getByRole('link', { name: '  Account' });
      this.cartLink = page.locator('#main_menu').getByRole('link', { name: '  Cart' });
      this.checkoutLink = page.locator('#main_menu').getByRole('link', { name: '  Checkout' });
      this.apparelsButton = page.getByRole('link', { name: 'Apparel & accessories' });
      this.shoesLink = page.getByRole('link', { name: 'Shoes', exact: true });
      this.tshirtsLink = page.getByRole('link', { name: 'T-shirts' });
      
    }

    async hoverHomeButton(){
      await this.homeButton.hover();
    }

    async clickSpecialsLink(){
      await this.specialsLink.click();
    }

    async clickAccountLink(){
      await this.accountLink.click();
    }

    async clickCartLink(){
      await this.cartLink.click();
    }

    async clickCheckoutLink(){
      await this.checkoutLink.click();
    }

    async hoverApparelsButton(){
      await this.apparelsButton.hover();
    }

    async clickShoesLink(){
      await this.shoesLink.click();
    }

    async clickTshirtsLink(){
      await this.tshirtsLink.click();
    }

}