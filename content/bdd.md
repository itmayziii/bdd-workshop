---
title: "Behavior-Driven Development Overview"
metaTitle: "Overview of BDD"
metaDescription: "Overview of behavior-driven development (BDD)"
---

# Behavior-Driven Development (BDD) Overview
BDD is a way of developing software that aims to provide a shared understanding to technical people and business people.

You can think of BDD as a way to enhance your agile process by:
* Creating documentation like user stories and acceptance criteria that is tested against the software itself to ensure
it is working.
* Encouraging collaboration between team members to help establish a shared understanding of the system and solutions to
problems.

If you broke BDD down into a set of steps you would likely end up with something like:
1. First, take a small upcoming change to the system – a User Story – and talk about concrete examples of the new functionality to explore, discover and agree on the details of what’s expected to be done.
2. Next, document those examples in a way that can be automated, and check for agreement.
3. Finally, implement the behaviour described by each documented example, starting with an automated test to guide the development of the code.

## BDD and TDD
BDD is considered a practice of TDD (test-driven development) where the idea is you write your tests before you write your
code and when you have written enough code for your tests to pass then you know you are done with your work. The goal of
this approach is to make sure you don't spend time writing code for something that is not needed at this time. It can be
tempting as a developer to want engineer a solution to be perfect, but often it is more important we ship code consistently
to get business and customer feedback. This early feedback before perfecting is crucial otherwise we might end up perfecting
the wrong "something".

A typical TDD workflow would be

1. Write tests
2. Verify tests fail
3. Make small change to code
4. Run tests
5. If tests pass you are done, if tests fail repeat step 3 onward.

## What Does BDD Aim to Solve
Product teams have a hard time delivering working software in quick iterations. Usually by the time software is delivered
the requirements have changed because the business has learned something new. This inability to delivery quickly is often not
the fault of any one particular person, but the result of how complex creating the right software can be.

BDD's goal is to establish a shared understanding of the problems and solutions among team members.

> The hardest single part of building a software system is deciding precisely what to build.

  \- Fred Brooks, The mythical man-month

> having conversations is more important than capturing conversations is more important than automating conversations.

  \- Liz Keogh


### Software is Complex
Let us take a look at a very simple example of how complex developing software can be.

Let's say we get a requirement to "Create a contact us form on the companies' website". This requirement seems fairly
simple right? I would bet you that if you handed this to 100 different developers you would get 100 different results,
and I don't just mean how the form is styled.

It would not be outlandish to say:
* Some developers would include one "Name" field instead two "First Name" and "Last Name" fields. This may be important for
data integrity reasons, it's not always easy to parse a single "Name" field in the future with names like "Mary Ann Lou"
where "Mary Ann" is the first name.
* Some developers would disable the form's submit button until the form is entered correctly so that fewer people try to
submit incorrect data. While this seems reasonable recent UX studies have shown this is a bad user experience, and it is
often preferred to allow the submit button to be clicked and then provide error feedback. I would even wager to say some
developers would show errors on the form before any submitting of the form is finished.
* Some developers would assume this data needs to be stored in the companies' database while others would maybe email it
to a certain group of people.
* What do you think would happen after the form is submitted correctly? Some developers would probably refresh the form
page taking them back to the form. Other developers might try to send them to a "thank you" page.

The point is that there is 1000 different ways to create the same feature, and unless your team is hyper focused on collaboration
then your likely going to end up with different understandings of the same problem. Without a shared understanding of the
problem, you are likely to develop software that is not what the stakeholders wanted which will lead to re-work.


