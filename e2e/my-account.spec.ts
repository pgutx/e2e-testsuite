import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';
import { title } from '../utils/variables/title';
import { newAddressVariables } from '../utils/variables/address';

test('Scenario: Expanding Welcome back user field whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The field is interactable', async() => {
    await headerTop.hoverCustomerButton();
  });
    
  await test.step('AC: Correct options are listed', async() => {
    await expect(headerTop.accountDashboard).toBeVisible();
    await expect(headerTop.myWishList).toBeVisible();
    await expect(headerTop.editAccountDetails).toBeVisible();
    await expect(headerTop.changePassword).toBeVisible();
    await expect(headerTop.manageAddressBook).toBeVisible();
    await expect(headerTop.orderHistory).toBeVisible();
    await expect(headerTop.transactionHistory).toBeVisible();
    await expect(headerTop.downloads).toBeVisible();
    await expect(headerTop.notifications).toBeVisible();
    await expect(headerTop.customerLogout).toBeVisible();
  });

});

test('Scenario: Clicking Welcome back user field whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickCustomerButton();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.accountPage);
  });

});

test('Scenario: Clicking Account Dashboard button whilst hovering over the Welcome back button', async ({ headerTop }) => {

  await test.step('Hover over the Welcome Back user button', async() => {
    await headerTop.hoverCustomerButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickAccountDashboardButton();
  });
        
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.accountPage);
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.myAccount);
  });
    
});

test('Scenario: Clicking My Wish list button whilst hovering over the Welcome back button', async ({ headerTop }) => {

  await test.step('Hover over the Welcome Back user button', async() => {
    await headerTop.hoverCustomerButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickWishListButton();
  });
        
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.wishlistPage);
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.myWishList);
  });
    
});

test('Scenario: Clicking Edit Account Details button whilst hovering over the Welcome back button', async ({ headerTop }) => {

  await test.step('Hover over the Welcome Back user button', async() => {
    await headerTop.hoverCustomerButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickAccountDetailsButton();
  });
        
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.editAccountDetails);
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.myAccountInformation);
  });
    
});

test('Scenario: Clicking Change password button whilst hovering over the Welcome back button', async ({ headerTop }) => {

  await test.step('Hover over the Welcome Back user button', async() => {
    await headerTop.hoverCustomerButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickChangePasswordButton();
  });
        
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.changePassword);
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.changePassword);
  });
    
});

test('Scenario: Clicking Manage Address Book button whilst hovering over the Welcome back button', async ({ headerTop }) => {

  await test.step('Hover over the Welcome Back user button', async() => {
    await headerTop.hoverCustomerButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickManageAddressBookButton();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.manageAddressBook);
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.manageAddressBook);
  });
    
});

test('Scenario: Clicking Order History button whilst hovering over the Welcome back button', async ({ headerTop }) => {

  await test.step('Hover over the Welcome Back user button', async() => {
    await headerTop.hoverCustomerButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickOrderHistoryButton();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.orderHistory);
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.orderHistory);
  });
    
});

test('Scenario: Clicking Transaction History button whilst hovering over the Welcome back button', async ({ headerTop }) => {

  await test.step('Hover over the Welcome Back user button', async() => {
    await headerTop.hoverCustomerButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickTransactionHistoryButton();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.transactionHistory);
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.transactionHistory);
  });
    
});

test('Scenario: Clicking Downloads button whilst hovering over the Welcome back button', async ({ headerTop }) => {

  await test.step('Hover over the Welcome Back user button', async() => {
    await headerTop.hoverCustomerButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickDownloadsButton();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.downloads);
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.downloads);
  });
    
});

test('Scenario: Clicking Notifications button whilst hovering over the Welcome back button', async ({ headerTop }) => {

  await test.step('Hover over the Welcome Back user button', async() => {
    await headerTop.hoverCustomerButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickNotificationsButton();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.notifications);
  });

  await test.step('AC: The page has correct title', async() => {
    await expect(headerTop.page).toHaveTitle(title.notifications);
  });
    
});

test('Scenario: Expanding Account button whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The button is interactable', async() => {
    await headerTop.hoverAccountButton();
  });
      
  await test.step('AC: Correct options are listed', async() => {
    await expect(headerTop.order).toBeVisible();
    await expect(headerTop.accountLogout).toBeVisible();
  });
  
});

test('Scenario: Clicking Account button whilst on the homepage', async ({ headerTop }) => {

  await test.step('AC: The button can be clicked', async() => {
    await headerTop.clickAccountButton();
  });
        
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(headerTop.page).toHaveURL(urls.accountPage);
  });

});

test.describe('Account Dashboard Page', () => {

test('Scenario: Checking out account dashboard section whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });
          
  await test.step('AC: The section is displayed', async() => {
    await expect(dashboard.mainDashboard).toBeVisible();
  });
  
});

test('Scenario: Checking out navigation tiles section whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });
            
  await test.step('AC: The section is displayed', async() => {
    await expect(dashboard.mainDashboardNav).toBeVisible();
  });
    
});

test('Scenario: Checking out account option tiles section whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });
              
  await test.step('AC: The section is displayed', async() => {
    await expect(dashboard.mainDashboardTiles).toBeVisible();
  });
      
});

test('Scenario: Checking out right side navigation section whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });
                
  await test.step('AC: The section is displayed', async() => {
    await expect(dashboard.rightColumnButtonList).toBeVisible();
  });
        
});

test('Scenario: Clicking Edit account details tile whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickEditAccountTile();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.editAccountDetails);
  });
                        
});


test('Scenario: Clicking Change password tile whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickChangePasswordTile();
  });
    
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.changePassword);
  });
                          
});

test('Scenario: Clicking Manage address book tile whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickManageAddressTile();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.manageAddressBook);
  });
                    
});

test('Scenario: Clicking My wish list tile whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickWishListTile();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.wishlistPage);
  });
                    
});

test('Scenario: Clicking Order history tile whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickOrderHistoryTile();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.orderHistory);
  });
                    
});

test('Scenario: Clicking Transaction history tile whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickTransactionHistoryTile();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.transactionHistory);
  });
                    
});

test('Scenario: Clicking Downloads tile whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickDownloadsTile();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.downloads);
  });
                    
});

test('Scenario: Clicking Notifications tile whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickNotificationsTile();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.notifications);
  });
                    
});

test('Scenario: Clicking My wish list button whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickWishListButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.wishlistPage);
  });
                    
});

test('Scenario: Clicking Edit account details button whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickAccountDetailsButton();
  });
      
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.editAccountDetails);
  });
                        
});


test('Scenario: Clicking Change password button whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickChangePasswordButton();
  });
    
  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.changePassword);
  });
                          
});

test('Scenario: Clicking Manage address book button whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickManageAddressBookButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.manageAddressBook);
  });
                    
});

test('Scenario: Clicking Order history button whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickOrderHistoryButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.orderHistory);
  });
                    
});

test('Scenario: Clicking Transaction history button whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickTransactionHistoryButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.transactionHistory);
  });
                    
});

test('Scenario: Clicking Downloads button whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickDownloadsButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.downloads);
  });
                    
});

test('Scenario: Clicking Notifications button whilst on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickNotificationsButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL(urls.notifications);
  });
                    
});

test('Scenario: Clicking Home breadcrumb on the account dashboard', async ({ headerTop, dashboard }) => {

  await test.step('Navigate to the account dashboard', async() => {
    await headerTop.clickAccountButton();
  });
  
  await test.step('AC: The button can be clicked', async() => {
    await dashboard.clickHomeBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(dashboard.page).toHaveURL('/');
  });

});

});

test.describe('Wish List Page', () => {

  test.describe.configure({ mode: 'default' });

test('Scenario: Checking out populated wishlist page', async ({ featured, skinsheenBronzeStickProduct, headerTop, wishList }) => {

  await test.step('Navigate to the item page', async() => {
    await featured.hoverFirstItem();
    await featured.clickFirstItemViewButton();
  });
  
  await test.step('Add the item to the wishlist', async() => {
    await skinsheenBronzeStickProduct.clickAddToWishList();
  });

  await test.step('Navigate to the wishlist page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickWishListButton();
  });

  await test.step('AC: The item is visible', async() => {
    await expect(wishList.emptyWishList).not.toBeVisible();
    await expect(wishList.populatedWishList).toBeVisible();
  });

});

test('Scenario: Clicking Item name whilst on the wishlist page', async ({ featured, skinsheenBronzeStickProduct, headerTop, wishList }) => {

  await test.step('Navigate to the wishlist page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickWishListButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await wishList.clickItemName();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(wishList.page).toHaveURL(urls.firstFeaturedItem);
  });

});

test('Scenario: Clicking View Cart Action button whilst on the wishlist page', async ({ featured, skinsheenBronzeStickProduct, headerTop, wishList }) => {

  await test.step('Navigate to the wishlist page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickWishListButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await wishList.clickViewCartActionButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(wishList.page).toHaveURL(urls.cartPage);
  });

});

test('Scenario: Clicking Continue shopping button whilst on the wishlist page', async ({ featured, skinsheenBronzeStickProduct, headerTop, wishList }) => {

  await test.step('Navigate to the wishlist page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickWishListButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await wishList.clickContinueShoppingButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(wishList.page).toHaveURL('/');
  });

});

test('Scenario: Clicking View Cart button whilst on the wishlist page', async ({ featured, skinsheenBronzeStickProduct, headerTop, wishList }) => {

  await test.step('Navigate to the wishlist page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickWishListButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await wishList.clickViewCartButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(wishList.page).toHaveURL(urls.cartPage);
  });

});

test('Scenario: Clicking Account breadcrumb on the wishlist page', async ({ featured, skinsheenBronzeStickProduct, headerTop, wishList }) => {

  await test.step('Navigate to the wishlist page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickWishListButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await wishList.clickAccountBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(wishList.page).toHaveURL(urls.accountPage);
  });

});

test('Scenario: Clicking Remove button whilst on the wishlist page', async ({ featured, skinsheenBronzeStickProduct, headerTop, wishList }) => {

  await test.step('Navigate to the wishlist page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickWishListButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await wishList.clickRemoveItemActionButton();
  });

  await test.step('AC: The item is removed', async() => {
    await expect(wishList.tableRemovedItem).not.toBeVisible();
  });

});

});

test.describe('My Account Information Page', () => {

test('Scenario: Checking out account form section whilst on the my account information page', async ({ headerTop, accountInformation }) => {

  await test.step('Navigate to the my account information page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickAccountDetailsButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(accountInformation.accountFormSection).toBeVisible();
  });

});

test('Scenario: Editing First Name field whilst on the My account information page', async ({ headerTop, accountInformation }) => {

  await test.step('Navigate to the my account information page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickAccountDetailsButton();
  });

  await test.step('AC: The field is editable', async() => {
    await accountInformation.fillAccountFormFirstNameField();
  });

  await test.step('AC: Correct data is displayed', async() => {
    await expect(accountInformation.accountFormFirstNameField).toHaveValue('AccountInformationFirstName');
  });

});

test('Scenario: Editing Last Name field whilst on the My account information page', async ({ headerTop, accountInformation }) => {

  await test.step('Navigate to the my account information page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickAccountDetailsButton();
  });

  await test.step('AC: The field is editable', async() => {
    await accountInformation.fillAccountFormLastNameField();
  });

  await test.step('AC: Correct data is displayed', async() => {
    await expect(accountInformation.accountFormLastNameField).toHaveValue('AccountInformationLastName');
  });

});

test('Scenario: Editing Email field whilst on the My account information page', async ({ headerTop, accountInformation }) => {

  await test.step('Navigate to the my account information page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickAccountDetailsButton();
  });

  await test.step('AC: The field is editable', async() => {
    await accountInformation.fillAccountFormEmailField();
  });

  await test.step('AC: Correct data is displayed', async() => {
    await expect(accountInformation.accountFormEmailField).toHaveValue('AccountInformationEmail@test.com');
  });

});

test('Scenario: Clicking Back button whilst on the My account information page', async ({ headerTop, accountInformation }) => {

  await test.step('Navigate to the my account information page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickAccountDetailsButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountInformation.clickBackButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountInformation.page).toHaveURL(urls.accountPage);
  });

});

test('Scenario: Clicking Account breadcrumb on the My account information page', async ({ headerTop, accountInformation }) => {

  await test.step('Navigate to the my account information page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickAccountDetailsButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountInformation.clickAccountBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountInformation.page).toHaveURL(urls.accountPage);
  });

});

test('Scenario: Editing User information on the My account information page', async ({ headerTop, accountInformation }) => {

  await test.step('Navigate to the my account information page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickAccountDetailsButton();
  });

  await test.step('AC: The fields are editable', async() => {
    await accountInformation.fillAccountFormFirstNameField();
    await accountInformation.fillAccountFormLastNameField();
    await accountInformation.fillAccountFormEmailField();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountInformation.clickContinueButton();
  });

  await test.step('AC: Account details are updated', async() => {
    await expect(accountInformation.successAccountUpdateAlert).toBeVisible();
  });

});

});

test.describe('Change Password Page', () => {

test('Scenario: Checking out change password form whilst on the Change password page', async ({ headerTop, accountChangePassword }) => {

  await test.step('Navigate to the change password page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickChangePasswordButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(accountChangePassword.changePasswordForm).toBeVisible();
  });

});

test('Scenario: Editing Current password field whilst on the Change password page', async ({ headerTop, accountChangePassword }) => {

  await test.step('Navigate to the change password page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickChangePasswordButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await accountChangePassword.fillCurrentPasswordField();
  });

  await test.step('AC: The field is not empty', async() => {
    await expect(accountChangePassword.currentPasswordField).not.toBeEmpty();
  });

});

test('Scenario: Editing New password field whilst on the Change password page', async ({ headerTop, accountChangePassword }) => {

  await test.step('Navigate to the change password page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickChangePasswordButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await accountChangePassword.fillNewPasswordField();
  });

  await test.step('AC: The field is not empty', async() => {
    await expect(accountChangePassword.newPasswordField).not.toBeEmpty();
  });

});

test('Scenario: Editing New password confirm field whilst on the Change password page', async ({ headerTop, accountChangePassword }) => {

  await test.step('Navigate to the change password page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickChangePasswordButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await accountChangePassword.fillNewPasswordConfirmField();
  });

  await test.step('AC: The field is not empty', async() => {
    await expect(accountChangePassword.newPasswordConfirmField).not.toBeEmpty();
  });

});

test('Scenario: Clicking back button whilst on the Change password page', async ({ headerTop, accountChangePassword }) => {

  await test.step('Navigate to the change password page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickChangePasswordButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountChangePassword.clickBackButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountChangePassword.page).toHaveURL(urls.accountPage);
  });

});

test('Scenario: Clicking Account breadcrumb on the Change password page', async ({ headerTop, accountChangePassword }) => {

  await test.step('Navigate to the change password page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickChangePasswordButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountChangePassword.clickAccountBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountChangePassword.page).toHaveURL(urls.accountPage);
  });

});

test('Scenario: Editing password on the Change password page', async ({ headerTop, accountChangePassword }) => {

  await test.step('Navigate to the change password page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickChangePasswordButton();
  });

  await test.step('AC: The fields are editable', async() => {
    await accountChangePassword.fillCurrentPasswordField();
    await accountChangePassword.fillNewPasswordField();
    await accountChangePassword.fillNewPasswordConfirmField();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountChangePassword.clickContinueButton();
  });

  await test.step('AC: Account details are updated', async() => {
    await expect(accountChangePassword.successPasswordChangeAlert).toBeVisible();
  });

});

});

test.describe('Manage Address Book Page', () => {

test('Scenario: Checking out address book entries section whilst on the Address Book page', async ({ headerTop, accountAddressBook }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(accountAddressBook.addressBookEntries).toBeVisible();
  });

});

test('Scenario: Clicking Edit button whilst on the Address Book page', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountAddressBook.clickEditAddressButton();
  });

  await test.step('AC: The edit address form is visible', async() => {
    await expect(accountInsertNewAddress.newAddressForm).toBeVisible();
  });

});

test('Scenario: Clicking Account breadcrumb on the Address Book page', async ({ headerTop, accountAddressBook }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountAddressBook.clickAccountBreadcrumb();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountAddressBook.page).toHaveURL(urls.accountPage);
  });

});

test('Scenario: Clicking Back button on the Address Book page', async ({ headerTop, accountAddressBook }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountAddressBook.clickBackButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountAddressBook.page).toHaveURL(urls.accountPage);
  });

});

test('Scenario: Clicking New address button whilst on the Address book page', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountAddressBook.page).toHaveURL(urls.insertNewAddress);
  });

  await test.step('AC: The new address form is visible', async() => {
    await expect(accountInsertNewAddress.newAddressForm).toBeVisible();
  });

});

test('Scenario: Filling out First Name field whilst adding new address', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await accountInsertNewAddress.fillNewAddressFirstNameField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(accountInsertNewAddress.newAddressFirstNameField).toHaveValue(newAddressVariables.newFirstName);
  });

});

test('Scenario: Filling out Last Name field whilst adding new address', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await accountInsertNewAddress.fillNewAddressLastNameField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(accountInsertNewAddress.newAddressLastNameField).toHaveValue(newAddressVariables.newLastName);
  });

});

test('Scenario: Filling out Address 1 field whilst adding new address', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await accountInsertNewAddress.fillNewAddressAddressField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(accountInsertNewAddress.newAddressAddressField).toHaveValue(newAddressVariables.newAddress);
  });

});

test('Scenario: Filling out City field whilst adding new address', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The field can be filled out', async() => {
    await accountInsertNewAddress.fillNewAddressCityField();
  });

  await test.step('AC: The field is filled with correct data', async() => {
    await expect(accountInsertNewAddress.newAddressCityField).toHaveValue(newAddressVariables.newCity);
  });

});

test('Scenario: Choosing Country option whilst adding new address', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The options can be picked', async() => {
    await accountInsertNewAddress.selectNewAddressCountryOption();
  });

  await test.step('AC: Correct option is picked', async() => {
    await expect(accountInsertNewAddress.newAddressCountryOption).toHaveValue(newAddressVariables.newCountry);
  });

});

test('Scenario: Filling out ZIP field whilst adding new address', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The options can be picked', async() => {
    await accountInsertNewAddress.fillNewAddressZipCodeField();
  });

  await test.step('AC: Correct option is picked', async() => {
    await expect(accountInsertNewAddress.newAddressZipField).toHaveValue(newAddressVariables.newZIP);
  });

});

test('Scenario: Choosing Region/State option whilst adding new address', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The options can be picked', async() => {
    await accountInsertNewAddress.selectNewAddressCountryOption();

    await accountInsertNewAddress.selectNewAddressRegionOption();
  });

  await test.step('AC: Correct option is picked', async() => {
    await expect(accountInsertNewAddress.newAddressStateOption).toHaveValue(newAddressVariables.newRegion);
  });

});

test('Scenario: Clicking Default address radio button whilst adding new address', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The radio button can be clicked', async() => {
    await accountInsertNewAddress.checkDefaultAddressRadioButton();
  });

  await test.step('AC: The radio button is checked', async() => {
    await expect(accountInsertNewAddress.newAddressDefaultAddress).toBeChecked();
  });

});

test('Scenario: Clicking Back button whilst adding new address', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: The radio button can be clicked', async() => {
    await accountInsertNewAddress.clickBackButton();
  });

  await test.step('AC: The radio button is checked', async() => {
    await expect(accountInsertNewAddress.page).toHaveURL(urls.manageAddressBook);
  });

});

test('Scenario: Adding new address via the form', async ({ headerTop, accountAddressBook, accountInsertNewAddress }) => {

  await test.step('Navigate to the address book page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickManageAddressBookButton();
  });

  await test.step('Navigate to insert new address page', async() => {
    await accountAddressBook.clickNewAddressButton();
  });

  await test.step('AC: Each of the field is fillable', async() => {
    await accountInsertNewAddress.fillNewAddressFirstNameField();
    await accountInsertNewAddress.fillNewAddressLastNameField();
    await accountInsertNewAddress.fillNewAddressAddressField();
    await accountInsertNewAddress.fillNewAddressCityField();
    await accountInsertNewAddress.selectNewAddressCountryOption();
    await accountInsertNewAddress.selectNewAddressRegionOption();
    await accountInsertNewAddress.fillNewAddressZipCodeField();
    await accountInsertNewAddress.checkDefaultAddressRadioButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountInsertNewAddress.clickNewAddressContinueButton();
  });

  await test.step('AC: Clicking the button adds an address', async() => {
    await expect(accountInsertNewAddress.successAddressAlert).toBeVisible();
  });

});

});

test.describe('My Order History Page', () => {

  test.describe.configure({ mode: 'default' });

test('Scenario: Order is visible whilst on the My Order History page', async ({ featured, headerTop, checkout, accountOrderHistory }) => {

  await test.step('Add an item to the cart', async() => {
    await featured.clickFirstItemCartButton();
  });

  await test.step('Go to the checkout page', async() => {
    await headerTop.clickCheckoutButton();
  });

  await test.step('Complete the order', async() => {
    await checkout.clickConfirmOrderButton();
    await checkout.page.waitForTimeout(1000);
  });

  await test.step('Navigate to the Order History page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickOrderHistoryButton();
  });

  await test.step('The order is visible', async() => {
    await expect(accountOrderHistory.orderSection).toBeVisible();
  });

});

test('Scenario: Clicking View button whilst on the My Order History page', async ({ headerTop, accountOrderHistory }) => {

  await test.step('Navigate to the Order History page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickOrderHistoryButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountOrderHistory.clickViewButton();
  });

  await test.step('AC: The invoice details are visible', async() => {
    await expect(accountOrderHistory.invoice).toBeVisible();
  });

});

test('Scenario: Clicking Continue button whilst on the My Order History page', async ({ headerTop, accountOrderHistory }) => {

  await test.step('Navigate to the Order History page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickOrderHistoryButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountOrderHistory.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountOrderHistory.page).toHaveURL(urls.accountPage);
  });

});

});

test.describe('My Transactions Page', () => {

test('Scenario: Checking out the My Transactions section on the My Transaction page', async ({ headerTop, accountMyTransactions }) => {

  await test.step('Navigate to the My Transactions page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickTransactionHistoryButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(accountMyTransactions.transactionSection).toBeVisible();
  });

});

test('Scenario: Clicking Continue button whilst on the My Transactions page', async ({ headerTop, accountMyTransactions }) => {

  await test.step('Navigate to the My Transactions page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickTransactionHistoryButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountMyTransactions.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountMyTransactions.page).toHaveURL(urls.accountPage);
  });

});

});

test.describe('My Downloads Page', () => {

test('Scenario: Checking out the My Transactions section on the My Transaction page', async ({ headerTop, accountMyDownloads }) => {

  await test.step('Navigate to the My Transactions page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickDownloadsButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(accountMyDownloads.downloadsSection).toBeVisible();
  });

});

test('Scenario: Clicking Continue button whilst on the My Transactions page', async ({ headerTop, accountMyDownloads }) => {

  await test.step('Navigate to the My Transactions page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickDownloadsButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountMyDownloads.clickContinueButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountMyDownloads.page).toHaveURL(urls.accountPage);
  });

});

});

test.describe('Notifications and Newsletter Page', () => {

test('Scenario: Checking out the Notifications and Newsletter section on the Notifcations and Newsletter page', async ({ headerTop, accountNotifications }) => {

  await test.step('Navigate to the Notifications and Newsletter page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickNotificationsButton();
  });

  await test.step('AC: The section is displayed', async() => {
    await expect(accountNotifications.notificationSection).toBeVisible();
  });

});

test('Scenario: Clicking Newsletter checkbox whilst on the Notifications and Newsletter page', async ({ headerTop, accountNotifications }) => {

  await test.step('Navigate to the Notifications and Newsletter page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickNotificationsButton();
  });

  await test.step('AC: The checkbox can be interacted with', async() => {
    await accountNotifications.tickNewsletterCheckbox();
  });

  await test.step('AC: The checkbox is ticked', async() => {
    await expect(accountNotifications.newsletterCheckbox).toBeChecked();
  });

});

test('Scenario: Clicking Back button whilst on the Notifications and Newsletter page', async ({ headerTop, accountNotifications }) => {

  await test.step('Navigate to the Notifications and Newsletter page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickNotificationsButton();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountNotifications.clickBackButton();
  });

  await test.step('AC: The button should lead to correct page', async() => {
    await expect(accountNotifications.page).toHaveURL(urls.accountPage);
  });

});

test('Scenario: Updating Newsletter settings whilst on the Notifications and Newsletter page', async ({ headerTop, accountNotifications }) => {

  await test.step('Navigate to the Notifications and Newsletter page', async() => {
    await headerTop.hoverCustomerButton();
    await headerTop.clickNotificationsButton();
  });

  await test.step('Click the Newsletter checkbox', async() => {
    await accountNotifications.tickNewsletterCheckbox();
  });

  await test.step('AC: The button can be clicked', async() => {
    await accountNotifications.clickContinueButton();
  });

  await test.step('AC: The setting was updated', async() => {
    await expect(accountNotifications.successAlert).toBeVisible();
  });

});

});