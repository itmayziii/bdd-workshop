---
title: "Acceptance Criteria"
metaTitle: "Acceptance Criteria"
metaDescription: "Overview of what acceptance criteria is and why it is useful for establishing common understanding between people"
---

# What is a User Story
User stories are a method of capturing a feature in a simple description from the perspective of the person that needs
the new feature.

User stories usually come in the format:
```gherkin
As a _TYPE_OF_USER_
I want _SOMETHING_
So that _RESULT OF SOMETHING_
```

i.e.
```gherkin
As a landlord
I want a list of tenants that have not paid rent
So that I can follow up with those tenants
```

You can see above we didn't describe any specific instructions of how this should be implemented in the software. This is
intentional as these stories are meant to stay focused on the outcome not the implementation. We will talk about how we
describe implementation in the [acceptance criteria](./acceptance-criteria) section.

# Who Writes User Stories
Anyone can write a user story. It is up to the product owner to prioritize the user stories according to business needs.
A developer may write a user story to improve the experience of a checkout process but that doesn't mean it will be prioritized
by the product owner. Sometimes features work "well enough" for the business to have value and improving something would not
provide enough value for it to be worth the business's time.

# How Big Should Users Stories Be
It can be tempting to have a user story such as:

```gherkin
As a landlord
I want to manage my tenants who have not paid rent
So that I can make more money
```

The problem with the above user story is that there is no direct feature that can be gathered from it. In fact the "managing of
tenants who have not paid rent" is likely to include several different features such as:

```gherkin
As a landlord
I want to have emails go out to tenants who have not paid rent
So that they will be reminded
And so that I will not have to remind them myself
```

```gherkin
As a landlord
I want a list of tenants that have not paid rent
So that I can follow up with those tenants
```

```gherkin
As a landlord
I want to see the balance unpaid by tenants
So that I have an idea of how behind a tenant is
```

```gherkin
As a tenant
I want to receive reminders leading up to my due date
So that I am not late on payments
```

The user stories we just wrote are much more actionable thant simply "managing tenants who have not paid rent". We call
the big user stories like "managing tenants who have not paid rent" epics. Epics are user stories that are too big to deliver
in small increments. We want to break down these Epics into smaller stories to deliver value continuously. We should be able
to go live with the list of tenants who have not paid rent without having to deliver the other stories as well. This is
because each story **provides value** to somebody in our system, and by delivering that value we can get feedback which is
often the most important thing we can have.

> No business plan survives first contact with a customer

  \- Steve Blank
