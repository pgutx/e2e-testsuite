import { type Locator, type Page } from '@playwright/test';

export class HomePageFeatured {
    readonly page: Page;
    readonly featuredSection: Locator;
    readonly firstItem: Locator;
    readonly firstitemName: Locator;
    readonly firstItemImg: Locator;
    readonly firstItemViewButton: Locator;
    readonly firstItemReviewButton: Locator;
    readonly firstItemPrice: Locator;
    readonly firstItemCartButton: Locator;
    readonly lastItem: Locator;
    readonly lastItemName: Locator;
    readonly lastItemImg: Locator;
    readonly lastItemViewButton: Locator;
    readonly lastItemReviewButton: Locator;
    readonly lastItemPrice: Locator;
    readonly lastItemCartButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.featuredSection = page.locator('#featured');
      this.firstItem = page.locator('#block_frame_featured_1769').getByText('Skinsheen Bronzer Stick View');
      this.firstitemName = page.locator('#block_frame_featured_1769').getByRole('link', { name: 'Skinsheen Bronzer Stick' });
      this.firstItemImg = page.locator('.thumbnail > a').first().locator('img');
      this.firstItemViewButton = page.getByRole('link', { name: 'View', exact: true });
      this.firstItemReviewButton = page.getByRole('link', { name: 'Write Review' });
      this.firstItemPrice = page.locator('#block_frame_featured_1769').getByText('$29.50');
      this.firstItemCartButton = page.locator('#block_frame_featured_1769').getByRole('link', { name: '' }).first();
      this.lastItem = page.getByText('Tropiques Minerale Loose Bronzer View Write Review $');
      this.lastItemName = page.locator('#block_frame_featured_1769').getByRole('link', { name: 'Tropiques Minerale Loose Bronzer' });
      this.lastItemImg = page.locator('.thumbnail > a').nth(3).locator('img');
      this.lastItemViewButton = page.getByRole('link', { name: 'View', exact: true });
      this.lastItemReviewButton = page.getByRole('link', { name: 'Write Review' });
      this.lastItemPrice = page.locator('#block_frame_featured_1769').getByText('$38.50');
      this.lastItemCartButton = page.locator('#block_frame_featured_1769').getByRole('link', { name: '' }).last();
    }

    async clickFirstItemName(){
      await this.firstitemName.click();
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