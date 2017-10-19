---
layout: post
title: A little about our platform
author: anthony
post_image: /images/posts/generic_code.jpg
---

Recently at IBAC 2017 we got the chance to share our work with the bioacoustics
community. Phil Eichinski represented our research group and will write a blog
post soon about the experience.

Dan Stowell from Queen Mary University of London also attended and wrote about
his experiences on his blog. You can read his blog post here:
<http://mcld.co.uk/blog/2017/ibac-2017-india-bioacoustics-research.html>

Dan included our platform in his notes and had a few observations about our
chosen architecture. Recognizing that we have published little on the topic, we
thought this would be a good time to provide some general historical context for
our chosen software architecture.

# About Ecosounds

Ecosounds (<https://www.ecosounds.org>) is a website that facilitates the management,
access, visualization, and analysis of environmental acoustic data. This
software, named the Acoustic Workbench, is open source and available from GitHub
([QUT Ecoacoustics](https://github.com/QutBioacoustics/)). The website is run by the QUT
Ecoacoustics Research Group to support bioacoustics and ecoacoustics research.

The workbench is tailored specifically to store large amounts of passively
collected long-duration environmental audio recordings. Although our group and
software orginally had a bioacoustics focus, over the years we have trended
away from bioacoustcis datasets towards ecoacoustics and soundscape ecology
datasets. 

# Our chosen architecture

Principally the Acoustic Workbench is a web application. In 2011 when we rebuilt
our website, we had to choose a web application framework and language that would
benefit us the most. We considered PHP, Ruby (with Ruby on Rails), and Python
(with Django).

We quickly ruled out PHP for several reasons. Python was a strong candidate
because it was a language often used by academics. However, Ruby (and the Rails
framework) won out because the Rails framework was better supported globally,
did more as a framework, received constant updates, and because at the time we
employed developers familiar with the platform. On reflection, choosing Python
and Django would have been a better choice, if only for the appeal it would bring to
other academics. Practically however, we don’t think this decision limits us:

-   Ruby on Rails has worked well for us and is an ideal framework for a web
    application

-   Our estimation of the benefits of switching to another platform currently
    can't be justified by the associated cost

-   Our goal is to host data for scientists. We encourage open source
    contributions from the community but most of our users do not have the
    capability (or the spare time!) to contribute non-trivial code to the
    application (no matter the language). However, we value our users and
    regularly work with users to:

    -   Find, triage, and fix bugs

    -   To design better interfaces according to user feedback

Further, interviews with our users reveal most are interested in analysing their
data and are not interested in writing management software. Thus, our ideal goal
is for the Acoustic Workbench software to have the capability to run any
analysis provided to us by researchers, in any language (be it R, Python, or
something else entirely). This way, researchers write analysis code using their
skill and their understanding of their data, and we worry about running it over large
datasets.

While user submitted analysis is not ready yet, it is part of our long-term
goals. We currently can run analysis using any language or platform but for
simplicity, our current implementation is only secure enough to run trusted
code--that is code we have written.

# Our analysis

We write code to analyse our audio data. Our analyses include event recognisers
custom made for various species, acoustic indices generation, and acoustic
indices visualisation tools.

Currently all our production (professional) analysis is done with proprietary
C\# code. Our research students typically use R or MATLAB to research new
techniques, which when proven useful are adapted to C\#.

For anyone not familiar with C\# (and for most academics) using this programming
language is an odd choice. The research group was first established in 2007
under the name of the Microsoft QUT eResearch (MQUTeR) group with the help of a
substantial grant from Microsoft. This allowed us access to state of the art
programming tools and services we wouldn’t have been able to afford otherwise.

Over the last 10 years, we’ve slowly reduced our dependence on Microsoft
products but we never could justify the cost of transitioning our analysis code.
Some of our current reasoning for continuing to work with C\# includes:

-   C\# is an excellent language for maintainability, which is important given
    the age of our project

-   C\# has a decent performance profile. While it is certainly not as
    fast as C/C++, it does by design push you into the [pit of
    success](https://blog.codinghorror.com/falling-into-the-pit-of-success/)

-   The tooling is state of the art and now free

-   Thanks to the Mono project we can run our code on most platforms, including
    Unix systems

-   And the entire C\# stack has been rapidly become an open source development
    stack

As for why the code is proprietary: Our audio analysis code is proprietary
mainly because it always has been. When code is private by default, the
allowable content you can include is different. For example, currently there is
sensitive information, incomplete experiments, and mixed intellectual property
code in our code base. Currently our audio analysis code is the only significant
digital artefact that we maintain that isn’t open source. This is limiting us in
terms of collaboration and hinders open publishing efforts. We want to change
this and we have begun investigating open sourcing our analysis code.

# Summary

Lastly, more detail of our platform's archtiecture can be found in our
publication _Practical Analysis of Big Acoustic Sensor Data for Environmental Monitoring_
([DOI: 10.1109/BDCloud.2014.29](https://doi.org/10.1109/BDCloud.2014.29),
[QUT ePrints](http://eprints.qut.edu.au/79388/5/79388.pdf)).

We hope that by publishing some of our internal history it will make our
decision-making process more transparent. We’ve got several more blog posts
planned that explain recent and upcoming features so stay tuned.
