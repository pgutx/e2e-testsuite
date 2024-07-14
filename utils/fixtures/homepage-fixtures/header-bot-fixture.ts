import { test as base } from './homepage-fixture';

import { HomePageHeaderBot } from '../../../pages/homepage-pages/header-bot';

type pageFixture = {
    headerBot: HomePageHeaderBot;
}

export const test = base.extend<pageFixture>({
    headerBot: async({ homepage, page }, use) => {
      const headerBot = new HomePageHeaderBot(page);
      await use(headerBot);
    }
});


