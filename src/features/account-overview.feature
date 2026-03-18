Feature: Account Overview

    Scenario: Check Account link and its contents
        Given User launch MAM page
        When User clicks on "Account" link
        Then verify that the page title is "Overview"
        Then verify that the container with text "Multi-factor authentication" has also the text "Not set up"
        Then verify that the container with text "Service card number" has also the value of variable "SERVICE_CARD_NUMBER"