import { type Locator, type Page } from '@playwright/test';

export class HomePageFooter {
    readonly page: Page;
    readonly footer: Locator;
    readonly aboutUsSection: Locator;
    readonly contactUsSection: Locator;
    readonly testimonialsSection: Locator;
    readonly newsletterSection: Locator;
    readonly testimonialsFirstButton: Locator;
    readonly testimonialsSecondButton: Locator;
    readonly testimonialsThirdButton: Locator;
    readonly testimonialsFourthButton: Locator;
    readonly testimonialsFirstSlide: Locator;
    readonly testimonialsSecondSlide: Locator;
    readonly testimonialsThirdSlide: Locator;
    readonly testimonialsFourthSlide: Locator;
    readonly subscribeNewsletterField: Locator;
    readonly subscribeNewsletterButton: Locator;
    readonly aboutUsButton: Locator;
    readonly privacyPolicyButton: Locator;
    readonly returnPolicyButton: Locator;
    readonly shippingButton: Locator;
    readonly contactUsButton: Locator;
    readonly siteMapButton: Locator;
    readonly loginButton: Locator;
    readonly goTopButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.footer = page.locator('#footer');
      this.aboutUsSection = page.locator('#block_frame_html_block_1775');
      this.contactUsSection = page.locator('#block_frame_html_block_1776');
      this.testimonialsSection = page.locator('#block_frame_html_block_1777');
      this.newsletterSection = page.locator('div').filter({ hasText: 'Newsletter Signup Sign up to' }).nth(3);
      this.testimonialsFirstButton = page.getByText('4', { exact: true });
      this.testimonialsSecondButton = page.locator('#testimonialsidebar').getByText('3');
      this.testimonialsThirdButton = page.locator('#testimonialsidebar').getByText('2');
      this.testimonialsFourthButton = page.locator('#testimonialsidebar').getByText('1');
      this.testimonialsFirstSlide = page.getByText('"Regular customer and').nth(1);
      this.testimonialsSecondSlide = page.getByText('"Returns were easy and my');
      this.testimonialsThirdSlide = page.getByText('"I found this store to be');
      this.testimonialsFourthSlide = page.getByText('"Really great products and').first();
      this.subscribeNewsletterField = page.getByPlaceholder('Subscribe to Newsletter');
      this.subscribeNewsletterButton = page.getByRole('button', { name: 'Subscribe' });
      this.aboutUsButton = page.getByRole('link', { name: 'About Us' });
      this.privacyPolicyButton = page.getByRole('link', { name: 'Privacy Policy' });
      this.returnPolicyButton = page.getByRole('link', { name: 'Return Policy' });
      this.shippingButton = page.getByRole('link', { name: 'Shipping' });
      this.contactUsButton = page.getByRole('link', { name: 'Contact Us' });
      this.siteMapButton = page.getByRole('link', { name: 'Site Map' });
      this.loginButton = page.getByRole('link', { name: 'Login', exact: true });
      this.goTopButton = page.getByRole('link', { name: 'Back to top' });
    }

    async clickFirstTestimonialButton(){
      await this.testimonialsFirstButton.click();
    }

    async clickSecondTestimonialButton(){
      await this.testimonialsSecondButton.click();
    }

    async clickThirdTestimonialButton(){
      await this.testimonialsThirdButton.click();
    }

    async clickFourthTestimonialButton(){
      await this.testimonialsFourthButton.click();
    }

    async fillSubscribeNewsletterField(){
      await this.subscribeNewsletterField.fill('email@example.com');
    }

    async clickAboutUsButton(){
      await this.aboutUsButton.click();
    }

    async clickPrivacyPolicyButton(){
      await this.privacyPolicyButton.click();
    }

    async clickReturnPolicyButton(){
      await this.returnPolicyButton.click();
    }

    async clickShippingButton(){
      await this.shippingButton.click();
    }

    async clickContactUsButton(){
      await this.contactUsButton.click();
    }

    async clickSiteMapButton(){
      await this.siteMapButton.click();
    }

    async clickLoginButton(){
      await this.loginButton.click();
    }

    async clickGoTopButton(){
      await this.goTopButton.click();
    }

}