import { type Locator, type Page } from '@playwright/test';

export class AccountDashboard{
  readonly page: Page;
  readonly mainDashboard: Locator;
  readonly mainDashboardNav: Locator;
  readonly mainDashboardTiles: Locator;
  readonly mainDashboardNavEditAccountTile: Locator;
  readonly mainDashboardNavChangePasswordTile: Locator;
  readonly mainDashboardNavManageAddressTile: Locator;
  readonly mainDashboardNavWishListTile: Locator;
  readonly mainDashboardNavOrderHistoryTile: Locator;
  readonly mainDashboardNavTransactionHistoryTile: Locator;
  readonly mainDashboardNavDownloadsTile: Locator;
  readonly mainDashboardNavNotificationsTile: Locator;
  readonly rightColumnButtonList: Locator;
  readonly rightColumnAccountDashboard: Locator;
  readonly rightColumnMyWishList: Locator;
  readonly rightColumnEditAccountDetails: Locator;
  readonly rightColumnChangePassword: Locator;
  readonly rightColumnManageAddressBook: Locator;
  readonly rightColumnOrderHistory: Locator;
  readonly rightColumnTransactionHistory: Locator;
  readonly rightColumnDownloads: Locator;
  readonly rightColumnNotifications: Locator;
  readonly homeBreadcrumb: Locator;

  constructor(page: Page){
    this.page = page;
    this.mainDashboard = page.locator('.ct_padding_right');
    this.mainDashboardNav = page.locator('.nav-dash');
    this.mainDashboardTiles = page.locator('.dash-tiles');
    this.mainDashboardNavEditAccountTile = page.locator('.nav-dash').getByRole('listitem').first();
    this.mainDashboardNavChangePasswordTile = page.locator('.nav-dash').getByRole('listitem').nth(1);
    this.mainDashboardNavManageAddressTile = page.locator('.nav-dash').getByRole('listitem').nth(2);
    this.mainDashboardNavWishListTile = page.locator('.nav-dash').getByRole('listitem').nth(3);
    this.mainDashboardNavOrderHistoryTile = page.locator('.nav-dash').getByRole('listitem').nth(4);
    this.mainDashboardNavTransactionHistoryTile = page.locator('.nav-dash').getByRole('listitem').nth(5);
    this.mainDashboardNavDownloadsTile = page.locator('.nav-dash').getByRole('listitem').nth(6);
    this.mainDashboardNavNotificationsTile = page.locator('.nav-dash').getByRole('listitem').nth(7);
    this.rightColumnButtonList = page.locator('.sidewidt');
    this.rightColumnAccountDashboard = page.getByRole('link', { name: '  Account Dashboard' });
    this.rightColumnMyWishList = page.getByRole('link', { name: '   My wish list' })
    this.rightColumnEditAccountDetails = page.getByRole('link', { name: '   Edit account details' });
    this.rightColumnChangePassword = page.getByRole('link', { name: '   Change password' });
    this.rightColumnManageAddressBook = page.getByRole('link', { name: '   Manage Address Book' });
    this.rightColumnOrderHistory = page.getByRole('link', { name: '   Order history' });
    this.rightColumnTransactionHistory = page.getByRole('link', { name: '   Transaction history' });
    this.rightColumnDownloads = page.getByRole('link', { name: '   Downloads' });
    this.rightColumnNotifications = page.getByRole('link', { name: '   Notifications' });
    this.homeBreadcrumb = page.locator('.breadcrumb').getByRole('link', { name: 'Home' });
  }

  async clickEditAccountTile(){
    await this.mainDashboardNavEditAccountTile.click();
  }

  async clickChangePasswordTile(){
    await this.mainDashboardNavChangePasswordTile.click();
  }

  async clickManageAddressTile(){
    await this.mainDashboardNavManageAddressTile.click();
  }

  async clickWishListTile(){
    await this.mainDashboardNavWishListTile.click();
  }

  async clickOrderHistoryTile(){
    await this.mainDashboardNavOrderHistoryTile.click();
  }

  async clickTransactionHistoryTile(){
    await this.mainDashboardNavTransactionHistoryTile.click();
  }

  async clickDownloadsTile(){
    await this.mainDashboardNavDownloadsTile.click();
  }

  async clickNotificationsTile(){
    await this.mainDashboardNavNotificationsTile.click();
  }

  async clickAccountDashboardButton(){
    await this.rightColumnAccountDashboard.click();
  }

  async clickWishListButton(){
    await this.rightColumnMyWishList.click();
  }

  async clickAccountDetailsButton(){
    await this.rightColumnEditAccountDetails.click();
  }

  async clickChangePasswordButton(){
    await this.rightColumnChangePassword.click();
  }

  async clickManageAddressBookButton(){
    await this.rightColumnManageAddressBook.click();
  }

  async clickOrderHistoryButton(){
    await this.rightColumnOrderHistory.click();
  }

  async clickTransactionHistoryButton(){
    await this.rightColumnTransactionHistory.click();
  }

  async clickDownloadsButton(){
    await this.rightColumnDownloads.click();
  }

  async clickNotificationsButton(){
    await this.rightColumnNotifications.click();
  }

  async clickHomeBreadcrumb(){
    await this.homeBreadcrumb.click();
  }

}