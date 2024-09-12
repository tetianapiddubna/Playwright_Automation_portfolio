# sitoo-automation-testassignment
# Automated Test Suite for Sitoo website

## Overview
This project automates the testing of navigation from the homepage to the Resources Library on both desktop and mobile views for [Sitoo](https://sitoo.com). The tests are written using [Playwright](https://playwright.dev/), with the goal of verifying that the navigation works correctly on both platforms.

The test suite includes:
- **Desktop Test**: Validates the navigation on a standard desktop browser.
- **Mobile Test**: Simulates an `iPhone 12` to validate the navigation in a mobile environment.

## Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (version 14 or higher)
- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/) (optional but highlyrecommended)

### Install Playwright
To install Playwright, run the following command in your terminal:
```bash
npm install @playwright/latest - preferable option, since it includes latest options available

### In order to run test suit use following commands:
For visual run, please feel free to use 
npx playwright test --ui

For headless run use
npx playwright test 

While running specific test, please use 
npx playwright test <nameOfTheTest>

### Test Structure

Page Object Models (POM): Organized under /page-objects/, reusable functions to interact with different parts of the website.
Tests: Under /tests/, interact with POMs and contain assertions.

### GitHub CI Integration

GitHub Actions Workflow
The project is configured to run tests automatically using GitHub CI. The configuration file is located in .github/workflows/playwright.yml.

