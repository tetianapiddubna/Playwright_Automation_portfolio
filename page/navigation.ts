// sitooHamburgerMenuPage.ts
import { Page } from 'playwright';

class hamburgerMenu {
    private readonly page: Page;
    
    // Hamburger menu selectors
    private readonly hamburgerMenuButton = '.Hamburger_button__aDuFV';
    private readonly closeButton = '.MuiButton-root MegaMenuDesktop_close-button___hzPW'; 
    private readonly posOption = 'text="Point of sale"';
    private readonly platformOption = 'text="Platform"';
    private readonly customersOption = 'text="Customers"';
    private readonly partnersOption = 'text="Partners"';
    private readonly resourcesOption = '.MegaMenuItem_container__nJsmS .MegaMenuItem_link__G_2Xk';
    private readonly resourcesLibrary = 'text="Resource library"';
    private readonly contactOption = 'text="Contact"';

    // Hamburger mobile selectors
    private readonly mobileResourcesOption = 'div.MegaMenuMobile_megaMenuMobile__dRPQG > div:nth-child(2) > div:nth-child(4) > a > div.MegaMenuItem_link__G_2Xk';
    private readonly mobileResourcesLibrary = 'div.MegaMenuMobile_megaMenuMobile__dRPQG > div:nth-child(2) > div:nth-child(4) > div > div:nth-child(3) > a';

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
