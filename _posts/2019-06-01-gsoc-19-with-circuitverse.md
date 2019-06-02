---
layout: post
title: "GSoC '19 with CircuitVerse!"
author: "Ankit Kataria"
category: journal
image:
  feature: gsoc-cover.jpeg
  teaser: gsoc-cover.jpeg
---


The mail on 6th of May, 2019 read “Congratulations, your proposal with CircuitVerse.org has been accepted!” and all the effort that had been since the past two months were worth it!

# <code style="font-size: 24px"> GSoC.inspect </code>

As the home page of the website aptly puts - 

> Google Summer of Code is a global program sponsored by Google Inc focused on introducing students to open source software development for the open source organizations. Students work on a 3-month development project with an open source organization under some mentors.

It’s been running for the past 14 years and has done a great job in reviving and promoting open source culture over the entire developer community. Being selected in GSoC is an awesome way to kick start your journey and give back to the community. 


# <code style="font-size: 24px"> Project.new </code>

This summer I’ll be working on the project - “Community Platform Improvements” with the organization [CircuitVerse.org](https://circuitverse.org/). CircuitVerse is an online simulator for digital circuits. It is designed to be easy to use for both teachers and students and contains most primary circuit elements from both combinational and sequential circuit design. It aligns very well with my major(Electronics) and also my interests(Software Development) giving me an awesome opportunity to contribute to my branch through my interests! I’ll be making several feature additions to the platform so as to develop its overall user base, which is already 4000+ and increasing. Several feature addition on the list includes - assignment grading, restricting circuit elements and a search. 

![circuitverse](/assets/img/cv-home.png)


# <code style="font-size: 24px"> Week.find(1) </code>

The backend of the platform has been written in rails. In the first week, I was working on writing RSpec tests for the backend. With so many developers working on the application, it becomes difficult for the maintainers to ensure that a new contribution doesn’t break the previous features of the application. Hence tests become extremely important. I had initiated the work of the test suite in [#148](https://github.com/CircuitVerse/CircuitVerse/pull/148) with the addition of tests for all the models. I had aimed to complete the test suite with the tests for the controllers, mailers and helpers. Work can be found at [#241](https://github.com/CircuitVerse/CircuitVerse/pull/241)

During the community bonding period I worked on fixing XSS issues ([#248](https://github.com/CircuitVerse/CircuitVerse/issues/248) and [#375](https://github.com/CircuitVerse/CircuitVerse/issues/375)) in the pull request [#383](https://github.com/CircuitVerse/CircuitVerse/pull/383). I also fixed the security issue [#250](https://github.com/CircuitVerse/CircuitVerse/issues/250) during which I came accross an awesome plugin [`bundler-audit`](https://github.com/rubysec/bundler-audit)

```
$ bundle audit check --update
```

The command updates `ruby-advisory-db` and gives out all the gems that have registered any security vulnerability. After this, I could easily update the vulnerable gems through: 

```
$ bundle update --patch --conservative <vulnerable-gem-name>
```

# <code style="font-size: 24px"> Week.next </code>

In the coming week, I'll be working on adding grading feature to the assignments. I have initiated the work in [#390](https://github.com/CircuitVerse/CircuitVerse/pull/390). Stay tuned for updates on how to use it!