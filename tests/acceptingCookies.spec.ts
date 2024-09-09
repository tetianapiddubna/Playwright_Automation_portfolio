import { test, expect, devices } from '@playwright/test';
import  homePage from '../page/homePage'; 
import  hamburgerMenu from '../page/navigation'; 

test.describe('Verify navigation from Home to Resources Library', () => {
    test('Desktop - Verify navigation from Home to Resources Library', async ({ page }) => {
        const home = new homePage(page);
        const menu = new hamburgerMenu(page);

        await home.navigateToBaseUrl();

        await home.acceptCookies();

        await menu.navigateToResources();

        // Added a wait since it took longer for page to load after click
        await page.waitForLoadState('load');  
        
        // Verify that the URL is correct
        await expect(page).toHaveURL('https://sitoo.com/resources/library'); 
    });
    test('Mobile - Verify navigation from Home to Resources Library', async ({ page }) => {
        const home = new homePage(page);
        const menu = new hamburgerMenu(page);

        await home.navigateToBaseUrl();

        await home.acceptCookies();

        await menu.navigateToResourcesMobile();

        // // Added a wait since it took longer for page to load after click
        // await page.waitForLoadState('load');  

        await expect(page).toHaveURL('https://sitoo.com/resources/library'); 
    });    
});