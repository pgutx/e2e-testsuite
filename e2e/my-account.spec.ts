import { test, expect } from '../utils/fixtures/fixtures';
import { urls } from '../utils/variables/url';
import { title } from '../utils/variables/title';

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
