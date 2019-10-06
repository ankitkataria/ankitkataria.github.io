---
layout: post
title: "GSoC '19 - Final Report" 
author: "Ankit Kataria"
category: journal
image:
---

Howdy guys! We’re now in the final phase of coding for GSoC, I’ve been contributing to CircuitVerse since February and it’s been a wonderful experience. This whole period saw about 100+ commits, 7000+ lines of code merged, several awesome features executed and a lot more. 

<p align="center">
	<img src="/assets/img/gsoc-contrib.png" width="50%">
</p>

## Summary

This summer my aim was to do several feature additions to increase the overall user base of our platform. It involved working on and improving some pre-existing features and also working on several new ones from scratch.

Checkout out my proposal [here](https://drive.google.com/file/d/1CfuZy3gKnx52qWLfl0ARxzE2hcdc-Tmq/view?usp=sharing)!

Also, checkout the blog series I did on my awesome journey [here](https://ankitkataria.co/archive/)!

## Code

### Backend tests

I worked on adding an RSpec based test suite from scratch. The test coverage increased from 0 to 83%. With this, I also set up Coveralls for comprehensive coverage reports on contributions.

Pull Requests: 
[#148](https://github.com/CircuitVerse/CircuitVerse/pull/148), [#241](https://github.com/CircuitVerse/CircuitVerse/pull/241), [#391](https://github.com/CircuitVerse/CircuitVerse/pull/403), [#403](https://github.com/CircuitVerse/CircuitVerse/pull/403) (All merged)

Blog post: 
[GSoC ‘19 with CircuitVerse](https://ankitkataria.co/journal/gsoc-19-with-circuitverse.html)

Coveralls report: [github/CircuitVerse](https://coveralls.io/github/CircuitVerse/CircuitVerse)

<p align="center">
	<img src="/assets/img/backend-tests.gif" width="70%">
</p>

### Assignment Grading

This feature addition allowed group mentors to easily grade mentee submissions on a scale of 1-100, A-F or any other custom scale. The results of grading can be exported as a CSV for further usage.

Pull Requests: [#390](https://github.com/CircuitVerse/CircuitVerse/pull/390), [#395](https://github.com/CircuitVerse/CircuitVerse/pull/395) (All merged)

Blog post: [Init: Assignment Grading](https://ankitkataria.co/journal/week-2-gsoc.html)

<p align="center">
	<img src="/assets/img/assignment-grading.gif" width="100%">
</p>

### Restricting Circuit Elements

This feature addition gave mentors a way to restrict the circuit elements used inside assignments. Students will be shown a warning on using restricted elements which will also be visible to the mentor while grading. It involved work in both the front and back end. I gained a lot of insight into how the various front end components worked inside the javascript simulator while working on this task.

Pull Requests: 
Code merged in [#397](https://github.com/CircuitVerse/CircuitVerse/pull/397) ( [#392](https://github.com/CircuitVerse/CircuitVerse/pull/392) Original PR)

Blog post: [Init Restricted Circuit Elements](https://ankitkataria.co/journal/week-3-gsoc.html)

<p align="center">
	<img src="/assets/img/restricted-circuit-elements.gif" width="100%">
</p>

### Featured Circuit Management

This allowed the admins to feature noteworthy circuits on the platform. Featured circuits can be viewed by users on the landing page. The automation of featured circuit detection is a task that is yet to be explored. 

Pull request: [#261](https://github.com/CircuitVerse/CircuitVerse/pull/261) (Merged)


### SEO Improvements

There was a very basic SEO implementation in the present codebase. After extensive research, I added SEO improvements for Facebook, Twitter and Google. 

Pull request: [#406](https://github.com/CircuitVerse/CircuitVerse/pull/406)(Merged)

Blog post: [`rake search:begin`](https://ankitkataria.co/journal/search-engine-and-seo.html)

Research Doc: [SEO Analysis](https://docs.google.com/document/d/1twGajCuVEA3vTkbfBgS2Eiof7bnecj2qek5Fh67S8IU/edit?usp=sharing)


### Search Engine

A very basic Postgres based full-text existed for projects. I worked on extending this search to the User model and overhauled the search engine architecture using an Adapter based design. Support for `Solr` was also added using [`sunspot`](https://github.com/sunspot/sunspot). This task also involved extensive research. 

Pull Request: [#402](https://github.com/CircuitVerse/CircuitVerse/pull/402) (Merged)

Blog post: [Re-Searching Search](https://ankitkataria.co/journal/phase-2-init.html), [Adapters, Factories and Search](https://ankitkataria.co/journal/search-adapter-implementation.html)

Research Doc: [Search Analysis](https://docs.google.com/document/d/1VRNwmH76OQ6ayNwdr6yBoyPL3B-VcNENjogYEvAw8fY/edit?usp=sharing)


### Interactive Book CI

[Interactive Book](http://learn.circuitverse.org/) is an effort by [Aman Singla](https://github.com/amansingla97/) to make it easy for the young audience of our platform to get started with digital electronics. I worked on integrating the repo with CircleCI to check for jekyll builds. 

Pull Request: [#11](https://github.com/CircuitVerse/Interactive-Book/pull/11) (Merged)

### The Bucket List

The Bucket List issue [#412](https://github.com/CircuitVerse/CircuitVerse/issues/412) was opened in the final phase. I worked on a few tasks mentioned, one of which was user mail subscription and custom mails. 

Pull requests:

- *User mail subscription*: Code merged with [#423](https://github.com/CircuitVerse/CircuitVerse/pull/423) (Original PR [#419](https://github.com/CircuitVerse/CircuitVerse/pull/419))

<p align="center">
	<img src="/assets/img/custom-mails.gif" width="100%">
</p>

- *Commontator mail fixes*: [#427](https://github.com/CircuitVerse/CircuitVerse/pull/427), [#429](https://github.com/CircuitVerse/CircuitVerse/pull/429) (All merged)

- *Feature circuit botton and channel link fixes*: [#421](https://github.com/CircuitVerse/CircuitVerse/pull/421) (Merged)

Blog post: [Final Phase and Bucket Lists](http://ankitkataria.co/journal/final-phase-and-bucket-lists.html)

### Work left

Currently, I’m working on implementing a staging environment for CircuitVerse. It was an addition suggested by me in the proposal and is being actively worked on right now. The basic idea is having a special branch that deploys an image of the repository to a staging environment so that it can be tested by all the developers. It’s major application will be in testing simulator feature additions. 

### GSoC Experience

It’s been great working with CircuitVerse this summer. The overall experience for me has been nothing less that wonderful. I got to learn a lot for my mentors, [Satvik](https://www.linkedin.com/in/satvik-ramaprasad-2b0a48a8/) and [Aboobacker](https://www.linkedin.com/in/aboobacker-m-k/). I gained a lot of insight into ruby and software development in general. All of this wouldn’t have been possible without this awesome summer. I still plan to continue contributing to the platform. Looking forward to more awesome feature additions and contributions! Cheers!





