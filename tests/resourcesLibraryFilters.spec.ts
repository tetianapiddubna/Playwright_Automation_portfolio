import { test, expect, devices } from '@playwright/test';
import { ResourceLibraryPage } from '../page/resourceLibraryPage';

// Randomise options that we have currently
function getRandomOption(options: string[]) {
    return options[Math.floor(Math.random() * options.length)];
}
test('Should select resource type and topic options', async ({ page, isMobile }) => {
  const resourceLibraryPage = new ResourceLibraryPage(page);

  await page.goto('https://sitoo.com/resources/library');

  await resourceLibraryPage.acceptCookies();

  if(isMobile) {
    await resourceLibraryPage.activateMobileFilter()
  } 
 // Randomly select from predefined values
  const randomResourceTypeValue = getRandomOption(resourceLibraryPage.resourceTypes);
  const randomTopicValue = getRandomOption(resourceLibraryPage.topics);

  // Select random Resource Type and Topic
  await resourceLibraryPage.filterByResourceTypeAndTopic(randomResourceTypeValue, randomTopicValue);

  // Verify the selected values
  const selectedResourceType = await resourceLibraryPage.firstDropdown.inputValue();
  const selectedTopic = await resourceLibraryPage.secondDropdown.inputValue();

  expect(selectedResourceType).toBe(randomResourceTypeValue);
  expect(selectedTopic).toBe(randomTopicValue);
});
