# Playwright Test Suite

This project contains end-to-end tests for form attributes functionality using Playwright.

## Overview

The test suite validates various form field types including:
- **Text fields**: Short text, validated text, long text, ACE editor, and Markdown editor
- **Number fields**: Integers, decimals, monetary values, percentages, euros, progress bars, and calculator inputs
- **Date/Time fields**: Date, datetime, time, and various granularity levels (to month, to year, to minute, etc.)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Simplicité instance running with the Features module installed

## Installation

Install dependencies:

```bash
npm install
```

## Configuration

Credentials and base url are configured in a .env file
```
BASE_URL=my.base.url
USER_NAME=user_name
PASSWORD=my_password
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run tests in headed mode (see the browser):

```bash
npx playwright test --headed
```

Launch UI and test in browser:

```bash
npx playwright test --ui
```

Run a specific test:

```bash
npx playwright test tests/ft_attributes.spec.ts -g "Text"
```

View test report:

```bash
npx playwright show-report
```

## Test Reports

Test reports are generated in the `playwright-report/` directory. View them by running:

```bash
npx playwright show-report
```

## Browser Support

Tests are configured to run on:
- Chromium (Chrome/Edge)
- Firefox
- WebKit (Safari)
