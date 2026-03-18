# MaM4.0-BDD

This is a Playwright (TypeScript) version of MAMCOM Test Automation

- Use npm
- Use BDD Language (see https://vitalets.github.io/playwright-bdd/#/getting-started/installation)
- Export HTML report 
- Headless is deactivated to avoind issues with Cloudfare, you can activate it on playwright.config.ts:42
- Tee User is once authenticated before run the Scenarios (see src/setup-steps/auth.setup.ts and https://vitalets.github.io/playwright-bdd/#/configuration/multiple-projects?id=authentication)

TODO's:
- Setup Jira/Zepryn integration (see https://github.com/elaichenkov/playwright-zephyr)
- Add common Steps / Integrate with AI Flow (see https://flowise-dev.apps.mcp-nonprod-mmg.noris.de/v2/agentcanvas/21384dd0-9121-417e-b005-277fcdea216a and https://vitalets.github.io/playwright-bdd/#/writing-features/chatgpt)
- Connect to Jira and host the Reporter Tool (see https://playwright.dev/docs/best-practices#run-tests-on-ci)

## Project Structure

```
playwright.config.ts        # Test configuration
package.json
package-lock.json           # Or yarn.lock / pnpm-lock.yaml
src/
    features/
      sample.feature        # Example of Feature that open mamcom, click on Account and check if the page is open correctly.
    setup-steps/
      auth.setup.ts         # MAMCOM Login Step, including Cookie Concent.
    steps/
      steps.ts              # The set os Steps supported by this project. Do create only generic steps like "I click link", "I see the Text", etc. Avoid Use Case specific setps
```

And always follow the Best practices :)
https://playwright.dev/docs/best-practices

## Getting started


To start the test run:

``` npx bddgen && npx playwright test --trace on ```

To open last HTML report run:

```  npx playwright show-report ```

Optional: You can install the VS Code Plugin (see https://playwright.dev/docs/getting-started-vscode)