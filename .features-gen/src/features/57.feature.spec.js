// Generated from: src\features\57.feature
import { test } from "playwright-bdd";

test.describe('Login', () => {

  test('Login', { tag: ['@TestCaseKey=TAT-T1357'] }, async ({ Given, When, Then }) => { 
    await Given('the user is on the login page'); 
    await When('they enter valid credentials'); 
    await Then('they should be redirected to the dashboard'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('src\\features\\57.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@TestCaseKey=TAT-T1357"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given the user is on the login page"},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When they enter valid credentials"},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then they should be redirected to the dashboard"}]},
]; // bdd-data-end