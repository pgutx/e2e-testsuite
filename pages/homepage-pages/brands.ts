import { type Locator, type Page } from '@playwright/test';

export class HomePageBrands {
    readonly page: Page;
    readonly brandsSection: Locator;
    readonly benefitBrand: Locator;
    readonly panteneBrand: Locator;
    readonly macBrand: Locator;
    readonly lancomeBrand: Locator;
    readonly gucciBrand: Locator;
    readonly armaniBrand: Locator;
    readonly doveBrand: Locator;
    readonly calvinBrand: Locator;
    readonly bulgariBrand: Locator;
    readonly sephoraBrand: Locator;

    constructor(page: Page){
      this.page = page;
      this.brandsSection = page.locator('#popularbrands');
      this.benefitBrand = page.getByRole('link', { name: 'Benefit', exact: true });
      this.panteneBrand = page.getByRole('link', { name: 'Pantene' });
      this.macBrand = page.getByRole('link', { name: 'M·A·C' });
      this.lancomeBrand = page.getByRole('link', { name: 'Lancôme' });
      this.gucciBrand = page.getByRole('link', { name: 'Gucci' });
      this.armaniBrand = page.getByRole('link', { name: 'Giorgio Armani' });
      this.doveBrand = page.getByRole('link', { name: 'Dove' });
      this.calvinBrand = page.getByRole('link', { name: 'Calvin Klein' });
      this.bulgariBrand = page.getByRole('link', { name: 'Bvlgari' });
      this.sephoraBrand = page.getByRole('link', { name: 'Sephora' });
    }

    async clickBenefitBrand(){
      await this.benefitBrand.click();
    }

    async clickPanteneBrand(){
      await this.panteneBrand.click();
    }

    async clickMacBrand(){
      await this.macBrand.click();
    }

    async clickLancomeBrand(){
      await this.lancomeBrand.click();
    }

    async clickGucciBrand(){
      await this.gucciBrand.click();
    }

    async clickArmaniBrand(){
      await this.armaniBrand.click();
    }

    async clickDoveBrand(){
      await this.doveBrand.click();
    }

    async clickCalvinKleinBrand(){
      await this.calvinBrand.click();
    }

    async clickBulgariBrand(){
      await this.bulgariBrand.click();
    }

    async clickSephoraBrand(){
      await this.sephoraBrand.click();
    }
}