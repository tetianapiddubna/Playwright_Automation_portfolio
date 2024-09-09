import { Page } from 'playwright';

export class homePage {
    page: Page;

constructor(page: Page) {
    this.page = page;
}
 async navigateToBaseUrl() {
    await this.page.goto('/');
 }
 async acceptCookies() {
    const acceptCookies = this.page.getByRole('button', { 
        name: 'Allow all',
    });
    await acceptCookies.click();
 }
}
export default homePage;