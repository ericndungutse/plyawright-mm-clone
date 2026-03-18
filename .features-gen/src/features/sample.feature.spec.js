// Generated from: src\features\sample.feature
import { test } from "playwright-bdd";

test.describe('Playwright site', () => {

  test('Check Account link', async ({ Given, When, Then, page }) => { 
    await Given('User launch MAM page', null, { page }); 
    await When('User clicks on "Account" link', null, { page }); 
    await Then('verify that the page title is "Overview"', null, { page }); 
    await Then('verify that the container with text "Multi-factor authentication" has also the text "Not set up"', null, { page }); 
    await Then('verify that the container with text "Service card number" has also the value of variable "SERVICE_CARD_NUMBER"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\sample.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launch MAM page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks on \"Account\" link","stepMatchArguments":[{"group":{"start":15,"value":"\"Account\"","children":[{"start":16,"value":"Account","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then verify that the page title is \"Overview\"","stepMatchArguments":[{"group":{"start":30,"value":"\"Overview\"","children":[{"start":31,"value":"Overview","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then verify that the container with text \"Multi-factor authentication\" has also the text \"Not set up\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Multi-factor authentication\"","children":[{"start":37,"value":"Multi-factor authentication","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":84,"value":"\"Not set up\"","children":[{"start":85,"value":"Not set up","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then verify that the container with text \"Service card number\" has also the value of variable \"SERVICE_CARD_NUMBER\"","stepMatchArguments":[{"group":{"start":36,"value":"\"Service card number\"","children":[{"start":37,"value":"Service card number","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":89,"value":"\"SERVICE_CARD_NUMBER\"","children":[{"start":90,"value":"SERVICE_CARD_NUMBER","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end