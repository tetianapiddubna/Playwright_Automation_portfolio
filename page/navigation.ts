// sitooHamburgerMenuPage.ts
import { Page } from 'playwright';

class hamburgerMenu {
    readonly page: Page;
    
    // Hamburger menu selectors
    readonly hamburgerMenuButton = '.Hamburger_button__aDuFV';
    readonly closeButton = '.MuiButton-root MegaMenuDesktop_close-button___hzPW'; 
    readonly posOption = 'text="Point of sale"';
    readonly platformOption = 'text="Platform"';
    readonly customersOption = 'text="Customers"';
    readonly partnersOption = 'text="Partners"';
    readonly resourcesOption = 'div.MegaMenuDesktop_megaMenuDesktop__lNj3H > div > div.MegaMenuDesktop_primaryMenu__JFRRg > div > div:nth-child(4) > a';
    readonly resourcesLibrary = 'div.MegaMenuDesktop_secondaryMenu__FBqTC.MegaMenuDesktop_secondaryMenu--has-children__3Gokq > div > div:nth-child(3) > a > div.MegaMenuItem_link__G_2Xk';
    readonly contactOption = 'text="Contact"';

    // Hamburger mobile selectors
    readonly mobileResourcesOption = 'div.MegaMenuMobile_megaMenuMobile__dRPQG > div:nth-child(2) > div:nth-child(4) > a > div.MegaMenuItem_link__G_2Xk';
    readonly mobileResourcesLibrary = 'div.MegaMenuMobile_megaMenuMobile__dRPQG > div:nth-child(2) > div:nth-child(4) > div > div:nth-child(3) > a';

    constructor(page: Page) {
        this.page = page;
    }

    // Method to open the hamburger menu
    async openHamburgerMenu() {
        await this.page.click(this.hamburgerMenuButton);
    }

    // Method to close the hamburger menu
    async closeHamburgerMenu() {
        await this.page.click(this.closeButton);
    }

    // Navigation methods
    async navigateToPOS() {
        await this.page.click(this.posOption);
    }

    async navigateToPlatform() {
        await this.page.click(this.platformOption);
    }

    async navigateToCustomers() {
        await this.page.click(this.customersOption);
    }

    async navigateToPartners() {
        await this.page.click(this.partnersOption);
    }

    // Added method to navigate to Resources
    async navigateToResources() {
        await this.openHamburgerMenu();
        await this.page.waitForSelector(this.resourcesOption);
        await this.page.click(this.resourcesOption);
        await this.page.waitForSelector(this.resourcesLibrary);
        await this.page.click(this.resourcesLibrary);
    }

    async navigateToResourcesMobile() {
        await this.openHamburgerMenu();
        await this.page.click(this.mobileResourcesOption);
        await this.page.click(this.mobileResourcesLibrary);
    }

    async navigateToContact() {
        await this.page.click(this.contactOption);
    }

}

export default hamburgerMenu;
