---
layout: post
title: "Final Phase and Bucket Lists" 
author: "Ankit Kataria"
category: journal
image:
---

<p align="center">
	<img src="/assets/img/ahoy.gif" width="50%">
</p>


It’s been a great ride so far and we’re into the final phase of coding. So brace yourself, a lot of awesome work is underway. 

In the past week, I was working on checking items off my bucket list [#412](https://github.com/CircuitVerse/CircuitVerse/issues/412). The first task I checked off was mail subscription. During GSoC, there are a lot of features that we’ve worked on. These features need to be made public to CircuitVerse’s user-base but currently, there is no way to send a custom email to the users. The flow that I came up in [#423](https://github.com/CircuitVerse/CircuitVerse/pull/423) and [#419](https://github.com/CircuitVerse/CircuitVerse/pull/419) is as follows.


User opens `/custom_mail/new` wherein the subject and body of custom mail can be added. The body is wysisyg.

<p align="center">
	<img src="/assets/img/user-mailer.png" width="80%">
</p>

Once saved, preview of the mail can be seen, from where the mail can either be sent or edited if required. 

<p align="center">
	<img src="/assets/img/user-mailer-2.png" width="80%">
</p>

Since `custom_mails`, has its own separate model, custom emails can be saved and sent whenever required. 


# <code style="font-size: 24px"> @project.count.improve </code>

Another PR that I worked on finishing was [#414](https://github.com/CircuitVerse/CircuitVerse/pull/414). This PR is meant for improving the view count of each project. It is based on the gem - [ahoy](https://github.com/ankane/ahoy). It is an event and visit based framework. 

**Event** - An event records the occurrence of something. In ahoy, events can be registered simply using `ahoy.track(“Something awesome just happened”)`. With each event, a visit is associated. 

**Visit** - A visit marks the user visiting a particular webpage. Its uniqueness is decided on the basis of a number of factors such as - traffic source, location, web browser in use. The `current_visit` variable gives the present visit and associated information about it. 

Other minor things I checked off the list were - 

- Duplication of tags  [#332](https://github.com/CircuitVerse/CircuitVerse/pull/322) - Reviewed and merged [#422](https://github.com/CircuitVerse/CircuitVerse/pull/422)

- Add feature circuit button and update channel links [#421](https://github.com/CircuitVerse/CircuitVerse/pull/421)


# <code style="font-size: 24px"> Week.next? </code>

In the coming week, I’ll be working on researching and proposing the deployment of branches to a pre-prod environment. It’ll make testing and shipping features super fast.


