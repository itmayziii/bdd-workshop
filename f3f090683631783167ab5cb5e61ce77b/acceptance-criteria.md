---
title: "Acceptance Criteria"
metaTitle: "Acceptance Criteria"
metaDescription: "Overview of what acceptance criteria is and why it is useful for establishing common understanding between people"
---

# What is Acceptance Criteria
Acceptance criteria is the requirements that must be satisfied in order to mark a [user story](user-stories.md) complete.

Acceptance criteria usually comes in the format of:
```gherkin
Given SOME PRECONDITION
When SOMETHING HAPPENS
Then RESULTS HAPPEN
```

There may be multiple acceptance criteria written for any given user story.

# Acceptance Criteria and BDD
BDD would define acceptance criteria with a few traits:

* **It should be testable** - Engineers write tests to make sure these acceptance criteria pass and show the results of
the tests to the product owners to help establish trust between the software written and the business requirements.
* **Only specific enough to describe behaviour without details** - i.e. it is often clear enough to say:
```gherkin
Given a landlord is logged in
When they look at the list of tenants who have not paid rent
Then they should see the first and last name of everyone one the list
```

The above _correct_ acceptance criteria is correct in contrast to criteria that describes too much detail such as:
```gherkin
Given A landlord go to the login page
And the username "david123" is entered
And the password "Password" is entered
When I navigate to the tenants page
And I click the tab "delinquent tenants"
Then I should see the first and last name of everyone on the list
```

The former acceptance criteria is better than the latter acceptance criteria because if the implementation changes
then the wording of the test does not need to change, and you still do not sacrifice any understanding of what is happening
in the system.

# When to Write Acceptance Criteria
Acceptance criteria should be written as close to development as possible, which usually means before a scrum style sprint
starts. The delay in writing acceptance criteria until development is about to start is intentional. Writing acceptance
criteria can be a very time-consuming thing to do, so you want to make sure your only spending that time when your guaranteed to
be doing that work. If you were to write acceptance criteria for every user story that comes your way, it would be likely
a lot of those user stories never even went to production because business priorities changed. Keeping the acceptance
criteria close to development also keeps the work fresh in everyone's mind.
