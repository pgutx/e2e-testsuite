import { type Locator, type Page } from '@playwright/test';

export class SearchPage{
    readonly page: Page;
    readonly searchCriteriaField: Locator;
    readonly categoryOption: Locator;
    readonly categoryAll: Locator;
    readonly categoryApparel: Locator;
    readonly categoryMakeup: Locator;
    readonly categorySkincare: Locator;
    readonly categoryFragrance: Locator;
    readonly categoryMen: Locator;
    readonly categoryHaircare: Locator;
    readonly categoryBooks: Locator;
    readonly productDescriptionSearchCheckbox: Locator;
    readonly productModelSearchCheckbox: Locator;
    readonly searchButton: Locator;
    readonly emptySearch: Locator;

    constructor(page: Page){
      this.page = page;
      this.searchCriteriaField = page.locator('#keyword');
      this.categoryOption = page.locator('#category_id');
      this.categoryAll = page.getByRole('option', { name: 'All Categories' });
      this.categoryApparel = page.getByRole('option', { name: 'Apparel & accessories', exact: true });
      this.categoryMakeup = page.getByRole('option', { name: 'Makeup' });
      this.categorySkincare = page.getByRole('option', { name: 'Skincare' });
      this.categoryFragrance = page.getByRole('option', { name: 'Fragrance' });
      this.categoryMen = page.getByRole('option', { name: 'Men' });
      this.categoryHaircare = page.getByRole('option', { name: 'Hair Care' });
      this.categoryBooks = page.getByRole('option', { name: 'Books' });
      this.productDescriptionSearchCheckbox = page.locator('#description');
      this.productModelSearchCheckbox = page.locator('#model');
      this.searchButton = page.locator('#search_button');
      this.emptySearch = page.getByText('There is no product that matches the search criteria.');
    }

    async fillSearchCriteriaField(){
      await this.searchCriteriaField.fill('shoe');
    }

    async clickCategoryOption(){
      await this.categoryOption.click();
    }

    async selectCategoryAllOption(){
      await this.categoryOption.selectOption('0');
    }

    async selectCategoryApparelOption(){
      await this.categoryOption.selectOption('0,68');
    }

    async selectCategoryMakeupOption(){
      await this.categoryOption.selectOption('0,36');
    }

    async selectCategorySkincareOption(){
      await this.categoryOption.selectOption('0,43');
    }

    async selectCategoryFragranceOption(){
      await this.categoryOption.selectOption('0,49');
    }

    async selectCategoryMenOption(){
      await this.categoryOption.selectOption('0,58');
    }

    async selectCategoryHaircareOption(){
      await this.categoryOption.selectOption('0,52');
    }

    async selectCategoryBooksOption(){
      await this.categoryOption.selectOption('0,65');
    }

    async tickProductDescriptionCheckbox(){
      await this.productDescriptionSearchCheckbox.check();
    }

    async tickProductModelCheckbox(){
      await this.productModelSearchCheckbox.check();
    }

    async clickSearchButton(){
      await this.searchButton.click();
    }
}