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
- [TypeScript](https://www.typescriptlang.org/) (optional but recommended)

### Install Playwright
To install Playwright, run the following command in your terminal:
```bash
npm install @playwright/test

