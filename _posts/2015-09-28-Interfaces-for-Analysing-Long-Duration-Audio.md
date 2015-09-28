---
layout: post
title: Interfaces for Analysing Long Duration Audio
author: mark
post_image: /images/posts/workbench-listen.jpg 
---

I'm a PhD student at [Queensland University of Technology](https://www.qut.edu.au/). 
I'm approaching the end of my degree. 
My final seminar was in late July, and I'm revising my thesis before I submit it for external examination.
My work was in the discipline of [Human-Computer Interaction](http://www.sigchi.org/).
My research looked into computer interface designs for enabling [bird watchers](http://birdlife.org.au/) to 
analyse long duration audio recordings from the natural terrestrial environment. 

I did this because acoustic sensors are becoming more and more popular as a means of biodiversity monitoring.
However, they produce large amounts of data that need to be processed. 
Automated processing is advancing rapidly, although raw recordings of the environment can be complex with overlapping and distant sounds.
There is also the need for example sounds to train automated algorithms. 
Birdcalls are some of the target sounds, and dedicated bird watchers have a wealth of experience and knowledge that cannot be found anywhere else.
Therefore, it would be beneficial to enable bird watchers to share their knowledge by analysing audio recordings.

Common interfaces for audio playback, metadata, and organisation are not suitable for long duration audio that needs to be analysed. 
This presents more than just technical implementation hurdles: the everyday interactions with 
sound for most people are around communication, ambient sound, or music.

The interface for the [VLC media player](http://www.videolan.org/) is a good example:

{% include figure.html src="/images/posts/vlc-interface.jpg" caption="VLC media player interface" %}

VLC can play both audio and video. There are many other programs that can play multimedia.
They all have very similar interfaces. Some differ in the situation they will be used, for example media players on smart devices
need to be designed to be accessible in a pocket or attached to an arm. However, their purpose is to play music or for communication.
Most songs are between 3 to 5 minutes in duration. Radio and communication via Skype or other voice call software often gives only the duration of the
call from the beginning, or the point within the current program for radio.

Analysis of long duration audio recordings requires not only a playback interface that can deal with recordings up to a day in duration,
but also provide some means of seeking within a recording, and a method of adding metadata to the recording. Any metadata or annotations
need to remain attached to the recording. Current software simply is not appropriate for analysing long duration recordings.
There is software for audio editing, such as <a href="http://audacityteam.org/">Audacity</a>, which provides tools for modifying and visualising audio.
The visuals can be a waveform (a time-amplitude representation of sound) or a spectrogram (a time-frequency-amplitude representation of sound).

Here's an audio file loaded in Audcity showing the spectrogram:

{% include figure.html src="/images/posts/audacity-spectrogram.jpg" caption="Audacity interface showing spectrogram" %}

Audacity is an improvement, as the spectrogram visualisation and other tools make it easier to work with audio files.
However, many files are more than 1 gigabyte in size, which is often more than Audacity can handle. 
This screenshot also shows only 16 seconds of audio. For a day long recording (86400 seconds), there are another 5400 16-second segments.
The problem of how to associate metadata has still not been solved. There are software programs created 
specifically for analysis of environmental acoustic data, such as 
[Song Scope](http://wildlifeacoustics.com/products/song-scope-overview) and 
[Raven](http://www.birds.cornell.edu/brp/raven/RavenOverview.html).
While these programs do allow for annotation and automated analysis, they are not suited for many long duration 
audio files and concentrate on automated analysis. 

An interface that effectively enables birders to analyse long duration recordings needs a few things:

 - A visualisation, most likely a spectrogram, to provide visual context for the sound 
 - A way to deal with the long duration (seeking over hours, days, or months rather than minutes)
 - A method for attaching information about the identity of the birds that made calls (as metadata or annotations)
 - Information about the date and time, location, surroundings, and device used to record

For my research, I created two prototype websites to investigate how bird watchers could analyse many long duration audio recordings.
I looked at how bird watchers could navigate long duration recordings and attach metadata through annotations. 
This included information about the recordings, such as where and when they were recorded along with a photographs 
of the surrounding area. In a subsequent post I will go through the prototypes I created and how they were tested.

{% include repost.html source_url="http://www.anotherbyte.net/2015/09/27/interfaces-for-long-duration-audio-recordings-of-the-environment.html" source_name="Anotherbyte.net" %}