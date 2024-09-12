 import { Page, Locator } from '@playwright/test';

 export class ResourceLibraryPage {
  readonly page: Page;
  readonly firstDropdown: Locator;
  readonly secondDropdown: Locator;
  readonly mobileFilter: Locator;
  

  //Values of options to be chosen from dropdowns, this is better working option compating to text
  readonly resourceTypes = ['5048d8d6-5964-45e2-8a7b-62dcea566131', 'c101eb18-03ce-48fc-b826-dfe7f72ebecd', '621dea5e-001a-4afd-a669-bd84b15e6b0a', '36d996f7-5bfb-4ce1-8448-eebdb70fc377', 'bb88866f-b5bd-4655-8148-634e0cb670b2'];
  readonly topics = ['b822f90e-6ebd-4b1a-90d3-72e7acd31a18', '100163ae-a23a-4d99-aaf7-03a81522588c', 'c95f7c4f-907d-41be-9d6a-9583e6f78be6', 'c587c127-8b4b-4536-ad91-79ffc66531af', 'acb8cc46-8245-4227-9662-78843fb5a1e4', '4995b806-c8a1-42f6-9c51-4b0f1b59b91f', '66f506c7-49a5-42be-8075-f9d28dcac120', '5061c028-f97b-4bee-a2c7-d8d8acb97767'];

  constructor(page: Page) {
    this.page = page;

    this.firstDropdown = page.locator('select[name="plcf_resource_type_taxonomy"]');
    this.secondDropdown = page.locator('select[name="plcf_topic_taxonomy"]'); 
    this.mobileFilter = page.locator('.PostListClientFilters_postListClientFiltersHeader__CHXaQ');
  }
  async acceptCookies() {
    const acceptCookies = this.page.getByRole('button', { 
        name: 'Allow all',
    });
    await acceptCookies.click();
  }
  async activateMobileFilter() {
    await this.mobileFilter.click();
  }

  async selectResourceType(resourceTypeValue: string) {
    await this.firstDropdown.click();
    await this.firstDropdown.selectOption({value: resourceTypeValue});
  }

  async selectTopic(topicValue: string) {
    await this.secondDropdown.click();
    await this.secondDropdown.selectOption({ value: topicValue });
  }


  async filterByResourceTypeAndTopic(resourceTypeValue: string, topicValue: string) {
    await this.selectResourceType(resourceTypeValue);
    await this.selectTopic(topicValue);
  }
}
export default ResourceLibraryPage;