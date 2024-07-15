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
    readonly booksPaperbackLink: Locator;
    readonly slideSection: Locator;
    readonly prevSlideButton: Locator;
    readonly nextSlideButton: Locator;
    readonly firstSlide: Locator;
    readonly secondSlide: Locator;
    readonly thirdSlide: Locator;
    readonly promotionalSection: Locator;

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
      this.makeupButton = page.getByRole('link', { name: 'Makeup' });
      this.makeupCheeksLink = page.getByRole('link', { name: 'Cheeks' });
      this.makeupEyesLink = page.getByRole('link', { name: 'Eyes' });
      this.makeupFaceLink = page.getByRole('link', { name: 'Face', exact: true });
      this.makeupLipsLink = page.getByRole('link', { name: 'Lips' });
      this.makeupNailsLink = page.getByRole('link', { name: 'Nails' });
      this.makeupSetsLink = page.getByRole('link', { name: 'Value Sets' });
      this.skincareButton = page.getByRole('link', { name: 'Skincare' });
      this.skincareEyesLink = page.getByRole('link', { name: 'Eyes' });
      this.skincareFaceLink = page.getByRole('link', { name: 'Face', exact: true });
      this.skincareGiftLink = page.getByRole('link', { name: 'Gift Ideas & Sets' });
      this.skincareHandsNailsLink = page.getByRole('link', { name: 'Hands & Nails' });
      this.skincareSunLink = page.getByRole('link', { name: 'Sun' });
      this.fragranceButton = page.getByRole('link', { name: 'Fragrance' });
      this.fragranceMenLink = page.getByRole('link', { name: 'Men' }).first();
      this.fragranceWomenLink = page.getByRole('link', { name: 'Women', exact: true });
      this.menButton = page.getByRole('link', { name: 'Men', exact: true });
      this.menBodyLink = page.getByRole('link', { name: 'Body & Shower' });
      this.menFragranceLink = page.getByRole('link', { name: 'Fragrance Sets' });
      this.menShaveLink = page.getByRole('link', { name: 'Pre-Shave & Shaving' });
      this.menSkincareLink = page.getByRole('link', { name: 'Skincare' }).nth(1);
      this.hairCareButton = page.getByRole('link', { name: 'Hair Care' });
      this.hairConditionerLink = page.getByRole('link', { name: 'Conditioner', exact: true });
      this.hairShampooLink = page.getByRole('link', { name: 'Shampoo' });
      this.booksButton = page.getByRole('link', { name: 'Books' });
      this.booksAudioLink = page.getByRole('link', { name: 'Audio CD' });
      this.booksPaperbackLink = page.getByRole('link', { name: 'Paperback' });
      this.slideSection = page.locator('.slider');
      this.prevSlideButton = page.locator('.prevArrow');
      this.nextSlideButton = page.locator('.nextArrow');
      this.firstSlide = page.getByText('Learn Automation Testing');
      this.secondSlide = page.getByText('Allowing students to');
      this.thirdSlide = page.getByText('Become familiar with');
      this.promotionalSection = page.locator('.promo_section');
    }

    async hoverHomeButton(){
      await this.homeButton.hover();
    }

    async clickHomeButton(){
      await this.homeButton.click();
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

    async clickApparelsButton(){
      await this.apparelsButton.click();
    }

    async clickShoesLink(){
      await this.shoesLink.click();
    }

    async clickTshirtsLink(){
      await this.tshirtsLink.click();
    }

    async hoverMakeupButton(){
      await this.makeupButton.hover();
    }

    async clickMakeupButton(){
      await this.makeupButton.click();
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

    async hoverSkincareButton(){
      await this.skincareButton.hover();
    }

    async clickSkincareButton(){
      await this.skincareButton.click();
    }

    async clickSkincareEyesLink(){
      await this.skincareEyesLink.click();
    }

    async clickSkincareFaceLink(){
      await this.skincareFaceLink.click();
    }

    async clickSkincareGiftLink(){
      await this.skincareGiftLink.click();
    }

    async clickSkincareHandsNailsLink(){
      await this.skincareHandsNailsLink.click();
    }

    async clickSkincareSunLink(){
      await this.skincareSunLink.click();
    }

    async hoverFragranceButton(){
      await this.fragranceButton.hover();
    }

    async clickFragranceButton(){
      await this.fragranceButton.click();
    }

    async clickFragranceMenLink(){
      await this.fragranceMenLink.click();
    }

    async clickFragranceWomenLink(){
      await this.fragranceWomenLink.click();
    }

    async hoverMenButton(){
      await this.menButton.hover();
    }

    async clickMenButton(){
      await this.menButton.click();
    }

    async clickMenBodyLink(){
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

    async hoverHaircareButton(){
      await this.hairCareButton.hover();
    }

    async clickHaircareButton(){
      await this.hairCareButton.click();
    }

    async clickHaircareConditionerLink(){
      await this.hairConditionerLink.click();
    }

    async clickHairCareShampooLink(){
      await this.hairShampooLink.click();
    }

    async hoverBooksButton(){
      await this.booksButton.hover();
    }

    async clickBooksButton(){
      await this.booksButton.click();
    }

    async clickBooksAudioLink(){
      await this.booksAudioLink.click();
    }

    async clickBooksPaperbackLink(){
      await this.booksPaperbackLink.click();
    }

    async hoverSlideSection(){
      await this.slideSection.hover();
    }

    async clickPreviousSlideButton(){
      await this.prevSlideButton.click();
    }

    async clickNextSlideButton(){
      await this.nextSlideButton.click();
    }

}