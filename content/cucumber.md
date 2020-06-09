---
title: "Cucumber"
metaTitle: "Cucumber Overview"
metaDescription: "Overview of cucumber and how it relates to BDD, user stories, and acceptance criteria"
---

# Cucumber
We have reviewed [BDD](bdd), [user stories](user-stories), and [acceptance criteria](acceptance-criteria.md) at this point,
so where does [Cucumber](https://cucumber.io/docs/guides/overview/) fit in?

> Cucumber reads executable specifications written in plain text and validates that the software does what those specifications say.

  \- Cucumber.io

Cucumber specifications are called _scenarios_ which are written in a set of grammar rules called [Gherkin](https://cucumber.io/docs/guides/overview/#what-is-gherkin).

i.e.
```gherkin
Feature: Late Payment Tenant List
  As a landlord
  I want a list of tenants that have not paid rent
  So that I can follow up with those tenants

  Scenario: See First and Last Name
    Given a landlord is logged in
    When they look at the list of tenants who have not paid rent
    Then they should see the first and last name of everyone one the list

  Scenario: List is Alphabetized By Last Name
    Given a landlord is logged in
    When they look at the list of tenants who have not paid rent
    Then the list should be alphabetized by last
```

These grammar rules of Gherkin should be written in a way that anybody can read them. It should not matter if you are a product
owner, developer, or QA engineer, the above language should make sense to you. These human readable specifications are
taken by the developers and tests are written to make sure the software matches the specification. The underlying tests
written are called "step definitions", please see below.

## Step Definitions
Step definitions take the Gherkin specifications and connect them to the actual programming code.

i.e.
```javascript
Given('a landlord is logged in', () => {
  client
   .url('https://example.com/login')
   .waitForElementVisible('body')
   .setValue('input[name="username"]', 'landlord123')
   .setValue('input[name="password"]', 'PasswordABC')
   .click('button[type="submit"]')
   .env()
})
```

## Conclusion
Knowing the above we can conclude that Cucumber is a tool to help us practice BDD by giving us a framework to take our
software specifications and turn them into tests. These tests should help give our team confidence that the software is
doing what we are asking of it. If we see passing tests we have a large degree of confidence that our specification is
working as intended.
