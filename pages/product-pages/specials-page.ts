import { type Locator, type Page } from '@playwright/test';

export class SpecialsPage{
    readonly page: Page;
    readonly homeBreadcrumb: Locator;
    readonly sortOption: Locator;
    readonly sortOptionDateAsc: Locator;
    readonly sortOptionNameAsc: Locator;
    readonly sortOptionNameDesc: Locator;
    readonly sortOptionPriceAsc: Locator;
    readonly sortOptionPriceDesc: Locator;
    readonly sortOptionRatingDesc: Locator;
    readonly sortOptionRatingAsc: Locator;
    readonly sortOptionDateDesc: Locator;
    readonly displayListButton: Locator;
    readonly displayGridButton: Locator;
    readonly limitItemOption: Locator;
    readonly limitTenOption: Locator;
    readonly limitTwentyOption: Locator;
    readonly limitThirtyOption: Locator;
    readonly limitFourtyOption: Locator;
    readonly limitFiftyOption: Locator;
    readonly itemSectionGrid: Locator;
    readonly itemSectionList: Locator;
    readonly itemName: Locator;
    readonly itemImage: Locator;
    readonly itemSaleTag: Locator;
    readonly itemViewButton: Locator;
    readonly itemReviewButton: Locator;
    readonly itemOldPrice: Locator;
    readonly itemNewPrice: Locator;
    readonly itemCartButton: Locator;

    constructor(page:Page){
      this.page = page;
      this.homeBreadcrumb = page.locator('.breadcrumb').getByRole('link', { name: 'Home' });
      this.sortOption = page.locator('#sort');
      this.sortOptionDateAsc = page.getByRole('option', { name: 'Date Old > New' });
      this.sortOptionNameAsc = page.getByRole('option', { name: 'Name A - Z' });
      this.sortOptionNameDesc = page.getByRole('option', { name: 'Name Z - A' });
      this.sortOptionPriceAsc = page.getByRole('option', { name: 'Price Low > High' });
      this.sortOptionPriceDesc = page.getByRole('option', { name: 'Price High > Low' });
      this.sortOptionRatingDesc = page.getByRole('option', { name: 'Rating Highest' });
      this.sortOptionRatingAsc = page.getByRole('option', { name: 'Rating Lowest' });
      this.sortOptionDateDesc = page.getByRole('option', { name: 'Date New > Old' });
      this.displayListButton = page.locator('#list');
      this.displayGridButton = page.locator('#grid');
      this.limitItemOption = page.locator('#limit');
      this.limitTenOption = page.getByRole('option', { name: '10' });
      this.limitTwentyOption = page.getByRole('option', { name: '20' });
      this.limitThirtyOption = page.getByRole('option', { name: '30' });
      this.limitFourtyOption = page.getByRole('option', { name: '40' });
      this.limitFiftyOption = page.getByRole('option', { name: '50' });
      this.itemSectionGrid = page.locator('.contentpanel').locator('div.thumbnails:nth-child(2)');
      this.itemSectionList = page.locator('.contentpanel').locator('div.thumbnails:nth-child(3)');
      this.itemName = page.getByTitle('Absolue Eye Precious Cells');
      this.itemImage = page.locator('div:nth-child(2) > .thumbnail > a');
      this.itemSaleTag = page.locator('div:nth-child(2) > .thumbnail > .sale');
      this.itemViewButton = page.getByRole('link', { name: 'View', exact: true });
      this.itemReviewButton = page.getByRole('link', { name: 'Write Review' });
      this.itemOldPrice = page.getByText('$105.00').first();
      this.itemNewPrice = page.getByText('$89.00').first();
      this.itemCartButton = page.getByRole('link', { name: '' }).first();
    }

    async clickHomeBreadcrumb(){
      await this.homeBreadcrumb.click();
    }

    async selectOptionDateAsc(){
      await this.sortOption.selectOption('Date Old > New');
    }

    async selectOptionNameAsc(){
      await this.sortOption.selectOption('Name A - Z');
    }

    async selectOptionNameDesc(){
      await this.sortOption.selectOption('Name Z - A');
    }

    async selectOptionPriceAsc(){
      await this.sortOption.selectOption('Price Low > High');
    }

    async selectOptionPriceDesc(){
      await this.sortOption.selectOption('Price High > Low');
    }

    async selectOptionRatingDesc(){
      await this.sortOption.selectOption('Rating Highest');
    }

    async selectOptionRatingAsc(){
      await this.sortOption.selectOption('Rating Lowest');
    }

    async selectOptionDateDesc(){
      await this.sortOption.selectOption('Date New > Old');
    }

    async clickListDisplayButton(){
      await this.displayListButton.click();
    }

    async clickGridDisplayButton(){
      await this.displayGridButton.click();
    }

    async selectLimitTenOption(){
      await this.limitItemOption.selectOption('10');
    }

    async selectLimitTwentyOption(){
      await this.limitItemOption.selectOption('20');
    }

    async selectLimitThirtyOption(){
      await this.limitItemOption.selectOption('30');
    }

    async selectLimitFourtyOption(){
      await this.limitItemOption.selectOption('40');
    }

    async selectLimitFiftyOption(){
      await this.limitItemOption.selectOption('50');
    }

    async clickItemName(){
      await this.itemName.click();
    }

    async hoverItem(){
      await this.itemImage.hover();
    }

    async clickViewButton(){
      await this.itemViewButton.click();
    }

    async clickReviewButton(){
      await this.itemReviewButton.click();
    }

    async clickAddToCartButton(){
      await this.itemCartButton.click();
    }
}