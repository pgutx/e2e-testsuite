import { type Locator, type Page } from '@playwright/test';

export class HomePageBestsellers {
    readonly page: Page;
    readonly bestsellersSection: Locator;
    readonly firstItem: Locator;
    readonly firstItemName: Locator;
    readonly firstItemImg: Locator;
    readonly firstItemViewButton: Locator;
    readonly firstItemReviewButton: Locator;
    readonly firstItemPrice: Locator;
    readonly firstItemCartButton: Locator;
    readonly itemAddedToCart: Locator;
    readonly lastItem: Locator;
    readonly lastItemName: Locator;
    readonly lastItemImg: Locator;
    readonly lastItemViewButton: Locator;
    readonly lastItemReviewButton: Locator;
    readonly lastItemPrice: Locator;
    readonly lastItemCartButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.bestsellersSection = page.locator('#bestseller');
      this.firstItem = page.getByText('Casual 3/4 Sleeve Baseball T-Shirt View Write Review $');
      this.firstItemName = page.getByRole('link', { name: 'Casual 3/4 Sleeve Baseball T-' });
      this.firstItemImg = page.locator('.thumbnail > a').nth(8).locator('img');
      this.firstItemViewButton = page.getByRole('link', { name: 'View', exact: true });
      this.firstItemReviewButton = page.getByRole('link', { name: 'Write Review' });
      this.firstItemPrice = page.getByText('$14.00');
      this.firstItemCartButton = page.locator('#block_frame_bestsellers_1771').getByRole('link', { name: '' }).first();
      this.itemAddedToCart = page.locator('.added_to_cart');
      this.lastItem = page.locator('#block_frame_bestsellers_1771').getByText('Absolue Eye Precious Cells View Write Review $89.00 $');
      this.lastItemName = page.locator('#block_frame_bestsellers_1771').getByRole('link', { name: 'Absolue Eye Precious Cells' });
      this.lastItemImg = page.locator('.thumbnail > a').nth(11).locator('img');
      this.lastItemViewButton = page.getByRole('link', { name: 'View', exact: true });
      this.lastItemReviewButton = page.getByRole('link', { name: 'Write Review' });
      this.lastItemPrice = page.locator('#block_frame_bestsellers_1771').getByText('$89.00');
      this.lastItemCartButton = page.locator('#block_frame_bestsellers_1771').getByRole('link', { name: '' }).nth(3);
    }

    async clickFirstItemName(){
      await this.firstItemName.click();
    }

    async hoverFirstItem(){
      await this.firstItem.hover();
    }

    async clickFirstItemViewButton(){
      await this.firstItemViewButton.click();
    }

    async clickFirstItemReviewButton(){
      await this.firstItemReviewButton.click();
    }

    async clickFirstItemCartButton(){
      await this.firstItemCartButton.click();
    }

    async clickLastItemName(){
      await this.lastItemName.click();
    }

    async hoverLastItem(){
      await this.lastItem.hover();
    }
  
    async clickLastItemViewButton(){
      await this.lastItemViewButton.click();
    }
  
    async clickLastItemReviewButton(){
      await this.lastItemReviewButton.click();
    }
  
    async clickLastItemCartButton(){
      await this.lastItemCartButton.click();
    }

}