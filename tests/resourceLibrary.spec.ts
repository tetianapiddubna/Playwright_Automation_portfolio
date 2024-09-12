import { test, expect, devices } from '@playwright/test';
import  homePage from '../page/homePage'; 
import  hamburgerMenu from '../page/navigation'; 

test.beforeEach(async ({ page }) => {
  await page.goto('https://sitoo.com/');
  
  // Close cookies consent popup
  const acceptButton = page.locator('text=Allow all');
  if (await acceptButton.isVisible()) {
    await acceptButton.click();
  }
});

test.describe('Verify navigation from Home to Resources Library', () => {
    test('Verify navigation from Home to Resources Library', async ({ page, isMobile }) => {
        const home = new homePage(page);
        const menu = new hamburgerMenu(page);
                
        //Adding a if statement to make sure we use different variations for both Mobile and Desktop.
        if(isMobile) {
            await menu.navigateToResourcesMobile();
        } else {
            await menu.navigateToResources();
        }

        // Added a wait since it took longer for page to load after click
        await page.waitForLoadState('load');  
        
        // Verify that the URL is correct
        await expect(page).toHaveURL('https://sitoo.com/resources/library'); 
    });
});