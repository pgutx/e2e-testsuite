import { type Locator, type Page } from '@playwright/test';

export class HomePageHeaderTop {
    readonly page: Page;
    readonly logo: Locator;
    readonly customer: Locator;
    readonly accountDashboard: Locator;
    readonly myWishList: Locator;
    readonly editAccountDetails: Locator;
    readonly changePassword: Locator;
    readonly manageAddressBook: Locator;
    readonly orderHistory: Locator;
    readonly transactionHistory: Locator;
    readonly downloads: Locator;
    readonly notifications: Locator;
    readonly customerLogout: Locator;
    readonly specials: Locator;
    readonly account: Locator;
    readonly order: Locator;
    readonly accountLogout: Locator;
    readonly cart: Locator;
    readonly checkout: Locator;
    readonly searchField: Locator;
    readonly categorySelected: Locator;
    readonly categoryAll: Locator;
    readonly categoryApparel: Locator;
    readonly categoryMakeup: Locator;
    readonly categorySkincare: Locator;
    readonly categoryFragrance: Locator;
    readonly categoryMen: Locator;
    readonly categoryHairCare: Locator;
    readonly categoryBooks: Locator;
    readonly searchButton: Locator;
    readonly currencyField: Locator;
    readonly euro: Locator;
    readonly sterling: Locator;
    readonly dollar: Locator;
    readonly cartPopup: Locator;
    readonly emptyCartPopup: Locator;
    readonly itemNameLink: Locator;
    readonly itemTotalPrice: Locator;
    readonly viewCart: Locator;
    readonly viewCheckout: Locator;
    readonly facebook: Locator;
    readonly twitter: Locator;
    readonly linkedin: Locator

    constructor(page: Page){
      this.page = page;
      this.logo = page.locator('.logo');
      this.customer = page.locator('#customer_menu_top');
      this.accountDashboard = page.getByRole('link', { name: '  Account Dashboard' });
      this.myWishList = page.getByRole('link', { name: '   My wish list' })
      this.editAccountDetails = page.getByRole('link', { name: '   Edit account details' });
      this.changePassword = page.getByRole('link', { name: '   Change password' });
      this.manageAddressBook = page.getByRole('link', { name: '   Manage Address Book' });
      this.orderHistory = page.getByRole('link', { name: '   Order history' });
      this.transactionHistory = page.getByRole('link', { name: '   Transaction history' });
      this.downloads = page.getByRole('link', { name: '   Downloads' });
      this.notifications = page.getByRole('link', { name: '   Notifications' });
      this.customerLogout = page.locator('#customer_menu_top').getByRole('listitem').getByRole('list').getByRole('listitem').last().locator('a');
      this.specials = page.getByRole('link', { name: '  Specials' });
      this.account = page.getByRole('link', { name: '  Account' });
      this.order = page.getByRole('link', { name: '  Check Your Order' });
      this.accountLogout = page.locator('#main_menu_top').getByRole('list').locator('li').filter({ hasText: 'Logout' });
      this.cart = page.getByRole('link', { name: '  Cart' });
      this.checkout = page.getByRole('link', { name: '  Checkout' });
      this.searchField = page.getByPlaceholder('Search Keywords');
      this.categorySelected = page.locator('#category_selected');
      this.categoryAll = page.locator('#category_0');
      this.categoryApparel = page.locator('#category_68');
      this.categoryMakeup = page.locator('#category_36');
      this.categorySkincare = page.locator('#category_43');
      this.categoryFragrance = page.locator('#category_49');
      this.categoryMen = page.locator('#category_58');
      this.categoryHairCare = page.locator('#category_52');
      this.categoryBooks = page.locator('#category_65');
      this.searchButton = page.getByTitle('Go');
      this.currencyField = page.locator('.block_6').getByRole('list');
      this.euro = page.getByRole('link', { name: '€ Euro' });
      this.sterling = page.getByRole('link', { name: '£ Pound Sterling' });
      this.dollar = page.getByRole('link', { name: '$ US Dollar' });
      this.cartPopup = page.locator('.topcart').getByRole('listitem').filter({has: page.getByRole('link')});
      this.emptyCartPopup = page.locator('.empty_cart');
      this.itemNameLink = page.locator('.name').getByRole('link');
      this.itemTotalPrice = page.locator('.total');
      this.viewCart = page.getByTitle('View Cart');
      this.viewCheckout = page.getByTitle('Checkout');
      this.facebook = page.getByTitle('Facebook');
      this.twitter = page.getByTitle('Twitter');
      this.linkedin = page.getByTitle('Linkedin');
    }

    async clickHomepageLogo(){
      await this.logo.click();
    }

    async clickCustomerButton(){
      await this.customer.click();
    }

    async hoverCustomerButton(){
      await this.customer.hover();
    }

    async clickAccountDashboardButton(){
      await this.accountDashboard.click();
    }

    async clickWishListButton(){
      await this.myWishList.click();
    }

    async clickAccountDetailsButton(){
      await this.editAccountDetails.click();
    }

    async clickChangePasswordButton(){
      await this.changePassword.click();
    }

    async clickManageAddressBookButton(){
      await this.manageAddressBook.click();
    }

    async clickOrderHistoryButton(){
      await this.orderHistory.click();
    }

    async clickTransactionHistoryButton(){
      await this.transactionHistory.click();
    }

    async clickDownloadsButton(){
      await this.downloads.click();
    }

    async clickNotificationsButton(){
      await this.notifications.click();
    }

    async clickCustomerLogoffButton(){
      await this.customerLogout.click();
    }

    async clickSpecialsButton(){
      await this.specials.click();
    }

    async clickAccountButton(){
      await this.account.click();
    }

    async hoverAccountButton(){
      await this.account.hover();
    }

    async clickCartButton(){
      await this.cart.click();
    }

    async clickCheckoutButton(){
      await this.checkout.click();
    }

    async clickSearchField(){
      await this.searchField.click();
    }

    async clickCategoriesAll(){
      await this.categoryAll.click();
    }

    async clickCategoriesApparel(){
      await this.categoryApparel.click();
    }

    async clickCategoriesMakeup(){
      await this.categoryMakeup.click();
    }

    async clickCategoriesSkincare(){
      await this.categorySkincare.click();
    }

    async clickCategoriesFragrance(){
      await this.categoryFragrance.click();
    }

    async clickCategoriesMen(){
      await this.categoryMen.click();
    }

    async clickCategoriesHaircare(){
      await this.categoryHairCare.click();
    }

    async clickCategoriesBooks(){
      await this.categoryBooks.click();
    }

    async clickSearchButton(){
      await this.searchButton.click();
    }

    async hoverCurrencyField(){
      await this.currencyField.hover();
    }

    async clickEuroCurrency(){
      await this.euro.click();
    }

    async clickGBPCurrency(){
      await this.sterling.click();
    }

    async clickDollarCurrency(){
      await this.dollar.click();
    }

    async hoverCartPopup(){
      await this.cartPopup.hover();
    }

    async clickCartPopup(){
      await this.cartPopup.click();
    }

    async clickItemName(){
      await this.itemNameLink.click();
    }

    async clickViewCart(){
      await this.viewCart.click();
    }

    async clickViewCheckout(){
      await this.viewCheckout.click();
    }

    async clickFacebookButton(){
      await this.facebook.click();
    }

    async clickTwitterButton(){
      await this.twitter.click();
    }

    async clickLinkedinButton(){
      await this.linkedin.click();
    }
    
};