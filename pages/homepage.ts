import { type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly account: Locator;
    readonly text: Locator;

    constructor(page: Page){
        this.page = page;
        this.account = page.getByRole('link', { name: '  Account' });
        this.text = page.locator('.subtext');
    }
};