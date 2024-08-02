import { type Locator, type Page } from '@playwright/test';
import { quantity } from '../purchase-flow-pages/basket';
import { user } from '../../utils/variables/user';

export class ProductSkinsheenBronzeStick{
    readonly page: Page;
    readonly latestProductsSection: Locator;
    readonly firstLatestSectionProduct: Locator;
    readonly productDetailsSection: Locator;
    readonly productName: Locator;
    readonly productImage: Locator;
    readonly imageZoom: Locator;
    readonly productQuantityField: Locator;
    readonly totalPriceField: Locator;
    readonly addToCartButton: Locator;
    readonly printButton: Locator;
    readonly addToWishlist: Locator;
    readonly descriptionSectionButton: Locator;
    readonly descriptionSection: Locator;
    readonly manufacturerButton: Locator;
    readonly reviewSectionButton: Locator;
    readonly reviewForm: Locator;
    readonly ratingFirstStar: Locator;
    readonly ratingSecondStar: Locator;
    readonly ratingThirdStar: Locator;
    readonly ratingFourthStar: Locator;
    readonly ratingFifthStar: Locator;
    readonly reviewName: Locator;
    readonly reviewText: Locator;
    readonly captchaField: Locator;
    readonly reviewSubmitButton: Locator;
    readonly captchaErrorAlert: Locator;
    readonly tagSectionButton: Locator;
    readonly tagSection: Locator;
    readonly tagCheeks: Locator;
    

    constructor(page: Page){
      this.page = page;
      this.latestProductsSection = page.locator('.column_left');
      this.firstLatestSectionProduct = page.locator('.side_prd_list').getByRole('listitem').first().locator('.productname');
      this.productDetailsSection = page.locator('#product_details');
      this.productName = page.getByRole('heading', { level: 1 });
      this.productImage = page.locator('.mainimage').locator('.local_image').nth(0).locator('img');
      this.imageZoom = page.locator('.easyzoom-flyout');
      this.productQuantityField = page.locator('#product_quantity');
      this.totalPriceField = page.locator('.total-price');
      this.addToCartButton = page.locator('.cart');
      this.printButton = page.locator('.productprint');
      this.addToWishlist = page.locator('.wishlist_add');
      this.descriptionSectionButton = page.getByRole('link', { name: 'Description' });
      this.descriptionSection = page.locator('#description');
      this.manufacturerButton = page.getByTitle('M·A·C');
      this.reviewSectionButton = page.getByRole('link', { name: 'Reviews (0)' });
      this.reviewForm = page.locator('#review');
      this.ratingFirstStar = page.locator('#rating1').filter({hasText: '1'});
      this.ratingSecondStar = page.locator('#rating2').filter({hasText: '2'});
      this.ratingThirdStar = page.locator('#rating3').filter({hasText: '3'});
      this.ratingFourthStar = page.locator('#rating4').filter({hasText: '4'});
      this.ratingFifthStar = page.locator('#rating5').filter({hasText: '5'});
      this.reviewName = page.locator('#name');
      this.reviewText = page.locator('#text');
      this.captchaField = page.locator('#captcha');
      this.reviewSubmitButton = page.locator('#review_submit');
      this.captchaErrorAlert = page.getByText('Human verification has failed! Please try again.');
      this.tagSectionButton = page.getByRole('link', { name: 'Tags:' });
      this.tagSection = page.locator('#producttag');
      this.tagCheeks = page.getByRole('link', { name: 'cheeks' });
    }

    async clickLatestSectionFirstProductName(){
      await this.firstLatestSectionProduct.click();
    }

    async fillQuantityField(){
      await this.productQuantityField.fill(`${quantity.quantityField}`);
    }

    async clickAddToCartButton(){
      await this.addToCartButton.click();
    }

    async clickPrintButton(){
      await this.printButton.click();
    }

    async clickAddToWishList(){
      await this.addToWishlist.click();
    }

    async clickDescriptionSectionButton(){
      await this.descriptionSectionButton.click();
    }

    async clickManufacturerButton(){
      await this.manufacturerButton.click();
    }

    async clickReviewSectionButton(){
      await this.reviewSectionButton.click();
    }

    async tickOneStarRating(){
      await this.ratingFirstStar.click();
    }

    async tickTwoStarRating(){
      await this.ratingSecondStar.click();
    }

    async tickThreeStarRating(){
      await this.ratingThirdStar.click();
    }

    async tickFourStarRating(){
      await this.ratingFourthStar.click();
    }

    async tickFiveStarRating(){
      await this.ratingFifthStar.click();
    }

    async fillNameField(){
      await this.reviewName.fill(user.firstName);
    }

    async fillReviewText(){
      await this.reviewText.fill('Test review');
    }

    async fillCaptchaField(){
      await this.captchaField.fill('test123');
    }

    async clickSubmitReviewButton(){
      await this.reviewSubmitButton.click();
    }

    async clickTagSectionButton(){
      await this.tagSectionButton.click();
    }

    async clickCheeksTag(){
      await this.tagCheeks.click();
    }

}