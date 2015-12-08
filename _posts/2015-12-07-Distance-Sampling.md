---
layout: post
title: Distance Sampling
author: michael
post_image: /images/posts/MichaelTowsey/distance-sampling-logo-long.png
post_image_height: 320px
---


While visiting University of Sussex recently, 
I was talking with conservation biologist Mika Peck <http://www.sussex.ac.uk/profiles/76093>. 
They are interested in the use of acoustic recordings for species richness surveys which obtain information 
about presence/absence but not about species abundance. I made the comment that acoustic methods cannot 
easily deal with abundance because it is not easy to determine if a single individual is calling multiple 
times or many individuals are calling once only. 
Mika referred me to a protocol called _distance sampling_ <http://distancesampling.org/whatisds.html>.  

Quoting from the website, distance sampling is a widely used methodology for estimating animal density or abundance. 
Its name derives from the fact that the information used for inference are the recorded distances to objects of 
interest (usually animals) obtained by survey lines or points. 
In the case of point sampling (for example the often used five-minute point-count protocol for birds), 
the radial distances from the point to detected animals are recorded. A key underlying concept is that 
the probability of detecting an animal decreases as its distance from the observer increases. 
Much of distance sampling methodology is concentrated on detection functions, 
which model the probability of detecting an animal, given its distance from the transect.

The relevance of this to acoustics is that the signal-to-noise ratio (SNR) 
of a recorded bird call can be taken as a proxy for distance. One could then use distance sampling 
techniques to estimate abundance from SNR information. Also of significance is that distance sampling 
software is available in R and are open source (available [here](https://github.com/DistanceDevelopment)).
