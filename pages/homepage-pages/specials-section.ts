import { type Locator, type Page } from '@playwright/test';

export class HomePageSpecials {
    readonly page: Page;
    readonly specialsSection: Locator;
    readonly firstItem: Locator;
    readonly firstItemName: Locator;
    readonly firstItemImg: Locator;
    readonly firstItemViewButton: Locator;
    readonly firstItemReviewButton: Locator;
    readonly firstItemNewPrice: Locator;
    readonly firstItemOldPrice: Locator;
    readonly firstItemSaleTag: Locator;
    readonly firstItemCartButton: Locator;
    readonly itemAddedToCart: Locator;
    readonly lastItem: Locator;
    readonly lastItemName: Locator;
    readonly lastItemImg: Locator;
    readonly lastItemViewButton: Locator;
    readonly lastItemReviewButton: Locator;
    readonly lastItemNewPrice: Locator;
    readonly lastItemOldPrice: Locator;
    readonly lastItemSaleTag: Locator;
    readonly lastItemCartButton: Locator;

    constructor(page: Page){
      this.page = page;
      this.specialsSection = page.locator('#special');
      this.firstItem = page.locator('#block_frame_special_1772').getByText('Absolue Eye Precious Cells View Write Review $89.00 $');
      this.firstItemName = page.locator('#block_frame_special_1772').getByRole('link', { name: 'Absolue Eye Precious Cells' });
      this.firstItemImg = page.locator('.thumbnail > a').nth(12).locator('img');
      this.firstItemViewButton = page.getByRole('link', { name: 'View', exact: true });
      this.firstItemReviewButton = page.getByRole('link', { name: 'Write Review' });
      this.firstItemNewPrice = page.locator('#block_frame_special_1772').getByText('$89.00');
      this.firstItemOldPrice = page.locator('#block_frame_special_1772').getByText('$105.00');
      this.firstItemSaleTag = page.locator('#block_frame_special_1772 > .thumbnails > div > .thumbnail > .sale').first();
      this.firstItemCartButton = page.locator('#block_frame_special_1772').getByRole('link', { name: '' });
      this.itemAddedToCart = page.locator('.added_to_cart');
      this.lastItem = page.getByText('Brunette expressions Conditioner View Write Review Out of Stock $24.00 $');
      this.lastItemName = page.getByRole('link', { name: 'Brunette expressions' });
      this.lastItemImg = page.locator('.thumbnail > a').nth(15).locator('img');
      this.lastItemViewButton = page.getByRole('link', { name: 'View', exact: true });
      this.lastItemReviewButton = page.getByRole('link', { name: 'Write Review' });
      this.lastItemNewPrice = page.getByText('$24.00');
      this.lastItemOldPrice = page.getByText('$27.00');
      this.lastItemSaleTag = page.locator('#block_frame_special_1772 > .thumbnails > div:nth-child(4) > .thumbnail > .sale');
      this.lastItemCartButton = page.locator('#block_frame_special_1772').getByText('Out of Stock').nth(2);
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
  
}