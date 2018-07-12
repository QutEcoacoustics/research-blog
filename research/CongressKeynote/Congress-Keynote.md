---
layout: content
title: "Ecoacoustics"
subtitle: "A newly emerged discipline or come of age?"
redirect_from: "/2018Congress/"
---
<style>
 hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 2;
    border-top: 2px solid #eee;
    height: 0.25em;
    background-color: #555;
 }
</style>

__by Michael Towsey__

## Preface
{:.no_toc}

This page is a summary of a keynote talk given by Michael Towsey to the [2018 Ecoacoustics Congress](https://ecoacousticscongress.org/), a biennial event of the [International Society of Ecoacoustics](https://sites.google.com/site/ecoacousticssociety/). The Congress was hosted by Queensland University of Technology and Griffith University, Brisbane, Australia, 24-28 June 2018.

You can contact [Michael](http://staff.qut.edu.au/details?id=towsey) or our research group by going to the [contact us](https://www.ecosounds.org/contact_us) page.

## Contents
{:.no_toc}

- Will be replaced with the ToC
{:toc}

---

## Slide 1: Introduction  

{% include figure.html src="Slides/Slide1.png" caption="Slide 1." %}

A recent paper from an ecoacoustics laboratory introduced ecoacoustics as a "newly emerged discipline". I have also spent the last ten years introducing ecoacoustics as a "new discipline". It got me thinking - how long can we keep describing ecoacoustics as new? When does ecoacoustics stop being new and "come of age"? And how will we know that it has come of age? My presentation addresses these questions.
On the way I will describe some of our work being done in the [Eco-acoustics Laboratory](http://research.ecosounds.org/) at the [Queensland University of Technology (QUT)](https://www.qut.edu.au/). 

**Side Note:** For those new to the field, long-duration recordings obtained for ecoacoustic analysis are typically obtained from recording units attached to trees like the ones in the pictures above. To date the two most commonly used recording units are Song Meters manufactured by Wild Life Acoustics, Massachusetts (above left image) or BAR recording boxes manufactured by Frontier Laboratories, Brisbane (above right image). An interesting and cheaper new-comer to the field is the [AudioMoth](https://www.openacousticdevices.info/) 

---
## Slide 2: So just how old is ecoacoustics?

As far as I am aware, the earliest publication describing an acoustic index used for ecological purposes is a 2001 paper from the lab of Stuart Gage. This probably makes Stuart the "founding father" of ecoacoustics. Stuart published several other papers in subsequent years, but the next new index to be published was due to Boelman in 2007. It is interesting to note that both these indices are still being used today. Another two widely used indices were published in 2008 - the ACI index[^ACI] from Almo Farina's lab and the entropy index from Jerome Sueur's lab. 
{% include figure.html src="Slides/Slide2.png" caption="Slide 2." %}

The soundscape literature dates back to a seminal book by Murray Schaffer in 1994, well worth reading because it is a beautiful synthesis of sound, poetry and science. Another pioneer in soundscape recordings was Bernie Krause and the coming toegther of all these efforts was the 2011 paper by Pijanowski et al.  Our lab, the [QUT Ecosounds Research Group](https://www.ecosounds.org/), also published in 2008. Our research interest has always been to address the computational and "big data" problems presented by the accumulation of terrabytes of acoustic recordings. 

I like to think that, while the *conception* of eco-acoustics may have been in 1994 or 2001, the bumper crop of papers in 2008 suggests that that year marked the *birth* of ecoacoustics. 2008 to 2018 - ten years. In computing science, ten years is a long time, perhaps even three generations, enough time for a new discipline to come of age. So has it? 

---
## Slide 3: The information pyramid  

Before attempting to investigate the "come of age" question, I should place some boundaries around my claims. The well-known information pyramid is helpful in this regard. According to the pyramid, the synthesis of *data* produces *information*, the synthesis of *information* produces *knowledge* and the distillation of *knowledge* becomes *wisdom*.
{% include figure.html src="Slides/Slide3.png" caption="Slide 3." %}
In the case of ecocoustics, data is mostly derived from audio recordings of the environment. The transition from data to information requires *computation* which is generally the work of *computer scientists* and the transition from information to knowledge requires *interpretation* which, in the case of ecocoustics, is the work of ecologists. Ecoacoustics requires the close cooperation of computer scientists and ecologists, in the same way that bioinformatics requires the interweaving of computation and biology.

So, by way of a caveat, in attempting to answer the question "Has ecoacoustics come of age?", I admit to taking the perspective of a computer scientist. 
 
---
## Slide 4: The Universe of Ecoacoustics

At the first Ecoacoustics Congress, Michigan State University, 2016, Michael Scherer-Lorenzen from University of Freiburg put up this slide illustrating the relationship of ecoacoustics to the larger discipline of ecology. The bottom five circles illustrate his understanding of the interlocking components of ecological investigation. Each of these components produces sound, the collectivity of which is the *soundscape* produced at a given location.       
{% include figure.html src="Slides/Slide4.png" caption="Slide 4." %}

The most important feature of this diagram is the dotted line from the soundscape circle returning to the bottom of the diagram. This indicates that the production of a soundscape is a *dynamic system* because the *output* of the system returns to become an *input*.   

## Slide 5: Listening to the heartbeat of Nature
{% include figure.html src="Slides/Slide5.png" caption="Slide 5." %}

At the same Congress, Stuart Gage described ecoacoustics using the metaphor "listening to the heart-beat of nature". This is an elegant metaphor because, just as a doctor listens to your heart beating, your lungs breathing and your tummy gurgling and thereby tells you more about your state of health than you wish to know, so too, ecologists can derive a great understanding of the "health" of an ecosystem by listening to the sounds it produces. 

---

## Slide 6: The Standard Spectrogram
I will begin to address the question motivating this talk by describing a little of the work we have been doing in the Ecosounds Research Group over the past few years. Some of this is a review of slides already presented in the tutorial [Long-duration Audio-recordings of the Environment](http://research.ecosounds.org/research/eadm-towsey/long-duration-audio-recordings-of-the-environment). My apologies for that. 


{% include figure.html src="Slides/Slide6.png" caption="Slide 6." %}

Ecologists have long worked with spectrograms, two dimensional representations of sound, with time as the x-axis and frequency (Hertz or kilohertz) as the y-axis. Sound amplitude is coded by the grey-scale intensity. The typical spectrogram will be a few seconds long, or as long as required to demonstrate the animal call of interest. The above spectrogram illustrates the "kek-kek" call of the cryptic Lewin's Rail. The recording was made on the outskirts of Brisbane City in 2010. The sounds at 8 kHz and above are due to crickets. There are at least four other birds also calling. 

---

## Slide 7: .. but the standard spectrogram does not scale!
Unfortunately, if we want to prepare a spectrogram of a 24-hour recording at similar scale to that shown in the previous slide, we would require a computer screen 1.2 kilometers wide! If instead, we squeeze a 24-hour recording into a standard audio software tool such as Audacity, we end up with a smeared-looking image, like the one below. This is because Audacity averages over the recording in order to compress it into the available space. (Warning: do not try this unless you know how to avoid a constipated computer!)
{% include figure.html src="Slides/Slide7.png" caption="Slide 7." %} 

---
## Slide 8: Different indices - different views
In order to compress an audio recording and retain as much information as possible (that is, avoid the "smearing" problem), we can calculate a set of acoustic indices at one-minute resolution. In this example, we have calculated three indices at one-minute resolution: ACI, H(t) and CVR. The choice of acoustic indices is very important but outside the scope of this tutorial. 
Please go to the introductory tutorial [Long-duration Audio-recordings of the Environment](http://research.ecosounds.org/research/eadm-towsey/long-duration-audio-recordings-of-the-environment) for more detail on the preparation of long-duration, false-colour spectrograms. See also Towsey, 2017[^TOW] for details on the calculation of several acoustic indices that we regularly use.

{% include figure.html src="Slides/Slide8.png" caption="Slide 8." %}

 What *is* important to note in the above spectrograms is that each of them provides a different view of the four-hour soundscape. The three acoustic indices may be compared to different filters over a camera lens, offering different views of a landscape.  

---
## Slide 9: False-colour Spectrograms
{% include figure.html src="Slides/Slide9.png" caption="Slide 9." %}

The next step in the production of long-duration spectrograms was inspired by false-colour satellite imagery in which pictures of the earth’s surface are rendered in three colours by assigning the red, green and blue (RGB) colours to sensors that respond to different parts of the electromagnetic spectrum. In this case we assign RGB to the three different spectrograms and thereby produce the long-duration, false-colour spectrogram seen on the right-hand side of this slide. Note how the complexity of acoustic structure in the sound-space is clearly revealed.

This describes work being done in the [Eco-acoustics Laboratory](http://research.ecosounds.org/) at the [Queensland University of Technology (QUT)](https://www.qut.edu.au/). An important part of our research is the visualisation, navigation, and analysis of long-duration recordings of the environment. 

---

## Slide 10: The utility of 24-hour, false-colour Spectrograms
{% include figure.html src="Slides/Slide10.png" caption="Slide 10." %}

Here we see just how much extra acoustic structure can be seen in a false-colour spectrogram. We took a full 24-hour recording (starting at midnight and finishing the following midnight – this is the same recording from which the 4 hours of the previous slides were extracted) and processed them using a standard audio software tool (Audacity) and our false-colour technique. Ordinarily you would not ask Audacity to open a 24-hour recording but it can be done (with a lot of patience!) on a high performance computer. Audacity achieves the 3000-fold reduction by averaging over long segments of recording. However this smooths out the acoustic structure and makes most events invisible. 

The basic structure of the forest soundscape at SERF is easily interpreted. (Soundscape is a new word – it refers to the collectivity of acoustic events that occur in a sound-space. It is analogous to landscape in three dimensional space.) The morning chorus is clearly visible at 4:45am. It tends towards white in colour because all indices have high values. The onset of evening is indicated by the onset of acoustic tracks due to insects. But clearly there are many other events.

A colour chart is added at the top of the image to help with interpretation. For example, purple events have high values for ACI and CVR. Cyan events have high values for H(t) and CVR. This will depend on the characteristic distribution of acoustic energy in the animal calls that contribute to the event. With some experience you begin to recognise the different sounds of interest.

For convenience, we refer to these spectrograms as long-duration, false-colour spectrograms or LDFC spectrograms.

Different combinations of indices give different views of the soundscape. Here we see two LDFC spectrograms of the same recording. Note that more acoustic structure is visible in the bottom spectrogram than in the top, because two of the three indices used to construct the top spectrogram are correlated. So here we have an important “trick” in making this technique work. Each of the three indices used to construct an LDFC spectrogram should be independent of each other – or at least have the minimum correlation possible. In the top image the two indices AVG and CVR are highly correlated and therefore the third index (CVR) is not adding any new information to the other two. The EVN index in the second spectrogram is a measure of the acoustic events per second in each frequency bin.

---

## Slide 11: The Biophony revealed in 24-hour, false-colour Spectrograms
{% include figure.html src="Slides/Slide11.png" caption="Slide 11." %}

In this slide, we identify some of the birds that produced the acoustic events in the two spectrograms. While the top spectrogram is not as informative, it does show up the cicada chorus at 6pm. Note that much of the structure in these images comes about because a bird (or birds) tends to sit in the same tree for a few minutes and is likely to repeat the same song/call. Even though a bird may only call once or twice in a minute, one or other acoustic index will “detect” the call and calls over consecutive minutes will leave a clearly visible trace in the spectrogram. Note that these false-colour spectrograms were not designed to identify bird species. The fact that this is possible is “icing-on-the-cake”.

You can see an interactive version of this slide [here](http://www.ecosounds.org/Zoom/1-top). 

---

## Slide 12: comparing the LDFC spectrograms of three sites at different latitudes
{% include figure.html src="Slides/Slide12.png" caption="Slide 12." %}

This slide compares three 24-hour, false-colour spectrograms of three soundscapes from different latitudes. All these recordings were obtained in the first week of July (winter) 2015. The top PNG recording is dominated by insects. The middle Brisbane recording is dominated by birds and the bottom desert recording is dominated by wind. 

---

## References 
**Reminder delete unused references**

[^PHI]: Phillips, Y., Towsey, M., and Roe, P. (2017, 6-10 November). Visualisation of environmental audio using ribbon plots and acoustic state sequences. Paper presented at the IEEE International Symposium on Big Data Visual Analytics (BDVA), Adelaide, Australia. doi:10.1109/bdva.2017.8114628.

[^ACI]: N. Pieretti, A. Farina, D. Morri (2011). A new methodology to infer the singing activity of an avian community: The Acoustic Complexity Index (ACI), _Ecological Indicators_, Volume 11, Issue 3, May 2011, Pages 868-873, ISSN 1470-160X, <http://dx.doi.org/10.1016/j.ecolind.2010.11.005>.

[^SAN]: Sankupellay, Mangalam, Towsey, Michael W., Truskinger, Anthony, & Roe, Paul (2015) Visual fingerprints of the acoustic environment: The use of acoustic indices to characterise natural habitats. In _IEEE International Symposium on Big Data Visual Analytics (BDVA 2015)_, 22-25 September 2015, Hobart, Tas, <http://dx.doi.org/10.1109/BDVA.2015.7314306>.

[^FCS]: Towsey, M. et al., (2014). Visualization of long-duration acoustic recordings of the environment. _Proceedings of the International Conference on Computational Science (ICCS 2014)_, Cairns, Australia, 9-12 June 2014, <http://dx.doi.org/10.1016/j.procs.2014.05.063>.

[^ZOO]: Towsey, M., Truskinger, A. & Roe, P. (2015). The Navigation and Visualisation of Environmental Audio using Zooming Spectrograms. _IEEE International Conference on Data Mining, Workshop on Environmental Acoustic Data Mining_, Atlantic City, NJ, USA, 14-17 November, 2015, <http://eprints.qut.edu.au/91822/>.

[^TOW]: Towsey, M. (2017) The calculation of acoustic indices derived from long-duration recordings of the natural environment. QUT ePrints, Brisbane, Australia.  <https://eprints.qut.edu.au/110634>.

[^ZHA]: Zhang, L., Towsey, M., Zhang, J. & Roe, P. (2015). Computer-assisted Sampling of Acoustic Data for More Efficient Determination of Bird Species Richness. _IEEE International Conference on Data Mining workshop Environmental Acoustic Data Mining_, Atlantic City, NJ, USA, 14-17 November, 2015, <http://dx.doi.org/10.1109/ICDMW.2015.42>.
