import { type Locator, type Page } from '@playwright/test';

export class SearchPage{
    readonly page: Page;
    readonly searchCriteriaField: Locator;

    constructor(page: Page){
      this.page = page;
      this.searchCriteriaField = page.locator('#keyword');
    }
}