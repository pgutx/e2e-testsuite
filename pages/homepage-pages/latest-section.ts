import { type Locator, type Page } from '@playwright/test';

export class HomePageLatest {
    readonly page: Page;
    readonly latestSection: Locator;
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
      this.latestSection = page.locator('#latest');
      this.firstItem = page.getByText('Absolute Anti-Age Spot Replenishing Unifying TreatmentSPF 15 View Write Review Out of Stock $');
      this.firstitemName = page.getByRole('link', { name: 'Absolute Anti-Age Spot' });
      this.firstItemImg = page.locator('.thumbnail > a').nth(4).locator('img');
      this.firstItemViewButton = page.getByRole('link', { name: 'View', exact: true });
      this.firstItemReviewButton = page.getByRole('link', { name: 'Write Review' });
      this.firstItemPrice = page.getByText('$42.00');
      this.firstItemCartButton = page.locator('#block_frame_latest_1770').getByText('Out of Stock').first();
      this.lastItem = page.getByText('Flash Bronzer Body Gel View');
      this.lastItemName = page.getByRole('link', { name: 'Flash Bronzer Body Gel' });
      this.lastItemImg = page.locator('.thumbnail > a').nth(7).locator('img');
      this.lastItemViewButton = page.getByRole('link', { name: 'View', exact: true });
      this.lastItemReviewButton = page.getByRole('link', { name: 'Write Review' });
      this.lastItemPrice = page.getByText('$29.00');
      this.lastItemCartButton = page.locator('#block_frame_latest_1770').getByText('Out of Stock').nth(1);
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

}