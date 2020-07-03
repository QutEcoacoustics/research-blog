---
layout: content
title: "Using AnalysisPrograms.exe (Practical)"
subtitle: "Ecoacoustics Congress 2018: Workshop 7"
redirect_from: "/AP/"
author: [anthony, michael]
page_image: /tutorials/AP/media/releases.png
excerpt: >
  This practical will guide you through: downloading a copy of
  AnalysisPrograms.exe, opening and using a terminal, calculating acoustic 
  indices for your data, and running an acoustic event recognizer on your data.
date: 2018-06-22
tags: ["resource", "practical"]
---
<style>
 hr {
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #555;
 }

.example-tab-set .panel {
    border-color: #428bca;
    border-radius: 0 4px 4px 4px;
    padding-top: 1em;
 }

.example-tab-set .nav-pills > li > a {
  border-radius: 4px 4px 0 0 ;
}

</style>

<script type="text/javascript">
document.onready = function() {
    // find all examples
    var examples = document.querySelectorAll(".example");

    var groupCounter = 0;
    var groups = [];
    examples.forEach(function (element) {
        if (!groups[groupCounter]) {
            groups[groupCounter] = new Set();
        }

        var group = groups[groupCounter];
        group.add(element);

        if (element.nextElementSibling.classList.contains("example")) {
            // continue;
        }
        else {
            // we've hit the end of this group, increment group counter,
            // start a new group
            groupCounter++;
        }
    });



    groups.forEach(function(group, index) {
        var [a, b, c] = Array.from(group);

        const template = `
<div  id="examples_${index}" class="example-tab-set">	
    <ul  class="nav nav-pills">
        <li class="active">
            <a  href="#${index}a" data-tab-type="windows" data-toggle="tab">Windows</a>
        </li>
        <li>
            <a href="#${index}b" data-tab-type="linux" data-toggle="tab">Linux</a>
        </li>
        <li>
            <a href="#${index}c" data-tab-type="macosx" data-toggle="tab">Mac</a>
        </li>
    </ul>

    <div class="tab-content clearfix panel">
        <div class="tab-pane windows-tab active" id="${index}a" >
            ${a.outerHTML}
        </div>
        <div class="tab-pane linux-tab" id="${index}b">
            ${b.outerHTML}
        </div>
        <div class="tab-pane macosx-tab" id="${index}c">
            ${c.outerHTML}
        </div>
    </div>
</div>
    `;

        var wrapper = document.createElement("div");
        wrapper.innerHTML = template;
        
        a.parentNode.insertBefore(wrapper, a);

        a.remove();
        b.remove();
        c.remove();
    });

    // synchronize tabs
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        //e.target // newly activated tab
        //e.relatedTarget // previous active tab
        var tabType = e.target.getAttribute("data-tab-type");
        var allTabs = document.querySelectorAll(`a[data-tab-type="${tabType}"]`);
        $(allTabs).tab('show');

        // the tabs resize the page, scroll our target element back into view
        e.target.scrollIntoView();
        // take into account the fixed header on this page
        window.scrollBy(0, -100);
    });
};
</script>

{:windows: .example .windows-tab}
{:linux:  .example .linux-tab}
{:macosx: .example .macosx-tab}
*[AP.exe]: AnalysisPrograms.exe

<div class="alert alert-danger" role="alert">
  <strong>This tutorial is out if date.
    <br> 
    Please refer to the newer version at 
    <a href="https://ap.qut.ecoacoustics.info/tutorials/01-usingap/practical?tabs=windows">https://ap.qut.ecoacoustics.info/tutorials/01-usingap/practical</a> 
    or to our documentation in general at 
    <a href="https://ap.qut.ecoacoustics.info/">https://ap.qut.ecoacoustics.info/</a>
  </strong>
</div>

## Preface
{:.no_toc}

This is the practical component for Workshop 7 at the 2018 Ecoacoustics
Congress.

This practical will guide you through:

-   Downloading a copy of AnalysisPrograms.exe
-   Opening and using a terminal
-   Calculating acoustic Indices for your data
-   Running an acoustic event recognizer on your data

After the completion of this practical you can find more documentation and
resources from our [documentation](https://github.com/QutEcoacoustics/audio-analysis/tree/master/docs#qut-ecoacoustics-analysisprogramsexe-manual)


**Please note**:
-  _AnalysisPrograms.exe_ will be frequently abbreviated to _AP.exe_
in this document.
- You **will** need a laptop to do this practical. If you don't have one please
find a buddy and work through the examples together.
- If you need help please let one of our helpers know.
- If your internet is slow or not working, our helpers have copies of this practical,
  AP.exe, and some test data on USB that they can share with you.
- There are also *Orchestrating*, *Tips and Tricks*, and *Glossary* sections at the end of this
  document.

---

## Contents
{:.no_toc}

- Will be replaced with the ToC
{:toc}

---


## Downloading AP.exe

1.  Go to the following link in a web browser:
    <https://github.com/QutEcoacoustics/audio-analysis>
    - Tip: it is a good idea to open links in a new tab so you don't lose this practical!
2.  Click the *Releases* link  
    ![The releases link highlighted](./media/releases.png)
3.  Find the latest release (it will be at the top)
4.  Under the *Assets* section, click on the Zip file that has *Release* in the
    name
    -  e.g. `Release.18.6.3.3`
5.  The file should now be downloading. You can close the tab once the download
    has finished.

## “Install” AP.exe

There is no installation process for AP.exe. Once downloaded it can be run from
anywhere on your computer.

However, for this practical you should follow these instructions:


1.  Open the folder containing the download (typically your *Downloads*
    folder)
2.  Right-click on the file and choose *Properties*
3.  Make sure the file is unblocked by clicking on the *Unblock* button
    - If you are on Windows 10, the _Unblock_ option will be a checkbox: check it.
4.  Close the properties window
5.  Extract the zip file by right clicking on the file and choosing
    _Extract All_
6.  Change the destination folder to `C:\AP`
7. Click _Finish_
{:windows }

1.  Make sure you have *unzip* installed
    -  `sudo apt-get install unzip`
2.  Unzip the file to your home directory (your download folder location may be different)
    -  `unzip ~/Downloads/Release.18.6.3.3.zip -d ~/AP`
{:linux}

1.  Open the folder containing the download (typically your *Downloads*
    folder)
2. Double click on the Zip file to extract it
    - The contents of the zip will be extracted to a folder next to the Zip file.
    - That folder will have the same name as the Zip file
3. Copy extracted folder 
4. Go to your home folder  
   ![The Finder Home folder](./media/finder_home.png)
5. Paste the folder
6. Finally rename the folder to `AP`
    - e.g. If it was named `Release.18.6.3.3` then rename it to `AP`
{:macosx}

## Installing Dependencies

-  If you are using Windows 10, you can skip this step
-  If you are using Windows 7, **may** need to install .NET 4.6.2
    - Skip this step for now. If AP.exe does need this install it will ask for it
{:windows}

-   You will need _Mono_ version 5.5 or greater
    -  Go to the Mono download website for instructions: <https://www.mono-project.com/download/stable/#download-lin>
- Since every Linux is different, you'll need to install these tools yourself
    - ffmpeg
    - wavpack
    - libsox-fmt-all
    - sox
    - shntool
    - [optional] mp3splt
    - libav-tools
- Here is an example that will work with `apt` package managers:
    ```shell
    apt-get update && apt-get install -y curl gnupg apt-transport-https unzip \
    readline-common  software-properties-common \
    wavpack libsox-fmt-all sox shntool libav-tools ffmpeg

    # link ffmpeg to /usr/bin/local
    ln -s /usr/bin/ffmpeg /usr/local/bin/ffmpeg
    ln -s /usr/bin/ffprobe /usr/local/bin/ffprobe
    ```
{:linux}

- You will need _Mono_ version 5.5 or greater
    1. Open this link in your browser: <https://www.mono-project.com/download/stable/#download-mac>
    1. Click the *Download Mono 5.12.0 (Stable channel)* button
    1. Download the application (a _.pkg_ file)
    1. Once downloaded, install the application
- If the download is too slow, our helpers have copies of the package on USB drives
they can share with you.
-   Please note: We do not support processing MP3 on Mac OS X at the moment
    - (This will be fixed in [#172](https://github.com/QutEcoacoustics/audio-analysis/issues/172_))
{:macosx}

## Preparing the data

### Our data
If you have not brought any data with you, don’t worry, you can use some of ours.
This data was generously donated for this workshop by Liz Znidersic
([@LizZnidersic](https://twitter.com/LizZnidersic)). Liz's data is licensed under
a [Creative Commons Attribution](https://creativecommons.org/licenses/by/3.0/au/)
license.

<!-- https://www.ecosounds.org/system/workshop/SM304256_0+1_20151114_030000+1100.wav -->
<!-- https://s3.console.aws.amazon.com/s3/buckets/workshop7/?region=us-east-1&tab=overview -->

1.  There are two options
    - [Required] One demo file (2 GB): Go [here](https://s3-ap-southeast-2.amazonaws.com/workshop7/SM304256_0%2B1_20151114_030000%2B1100.wav) to download the file
    - [Optional] A whole day of data (7.5GB) and pre-computed results: Go [here](https://s3-ap-southeast-2.amazonaws.com/workshop7/Workshop7Data.zip) to download the file
2.  Extract it to `C:\Temp\Workshop`
{:windows }

1.  There are two options
    - [Required] One demo file (2 GB): Go [here](https://s3-ap-southeast-2.amazonaws.com/workshop7/SM304256_0%2B1_20151114_030000%2B1100.wav) to download the file
    - [Optional] A whole day of data (7.5GB) and pre-computed results: Go [here](https://s3-ap-southeast-2.amazonaws.com/workshop7/Workshop7Data.zip) to download the file
2.  Extract it to `~/Workshop`
{:linux}

1.  There are two options
    - [Required] One demo file (2 GB): Go [here](https://s3-ap-southeast-2.amazonaws.com/workshop7/SM304256_0%2B1_20151114_030000%2B1100.wav) to download the file
    - [Optional] A whole day of data (7.5GB) and pre-computed results: Go [here](https://s3-ap-southeast-2.amazonaws.com/workshop7/Workshop7Data.zip) to download the file
2.  Extract it to `~/Workshop`
{:macosx}

If you are waiting for the data to download, you can skip to the next sections
and come back to this section when the download finishes.

**Important:** If the download is too slow, our helpers have copies of the data on USB drives
they can share with you.

### Your data

If you want to use your own data, then select one file to work with. We recommend
choosing a short (1-2 hour) WAVE file. It will take approximately 5 minutes to
process a 2-hour file.

Once you have chosen a file, copy it to a place that is easy to find. We
recommend `C:\Temp\Workshop` for Windows, or somewhere in your user folder for Linux and
Mac OS X (e.g. `~/Workshop`)

If you use your own data you'll need to substitute the filenames in the following
commands for your own filenames.


## Opening a Terminal

A terminal is a text-based interface for working with a computer. Instead of a
graphical user interface, where you interact with graphics using a mouse, in a
terminal you interact with your computer by reading text and typing commands.

Many of you would have seen or heard of terminals before. If you’ve ever seen a
DOS prompt, or CMD, PowerShell, Bash, or Terminal, then you have seen a
terminal.

AP.exe is a console program---that is it only works inside a terminal. It is
built this way because it is designed to be used by other programs. If AP.exe
had a graphical interface it would be hard for other programs to use it.

To open a terminal:

1.  Press the *Windows* key
2.  Type *PowerShell*
3.  Press *Enter* or click on the *Windows PowerShell* icon
{:windows }

-  The exact steps vary based on your distribution
- For example, in Ubuntu: <https://www.wikihow.com/Open-a-Terminal-Window-in-Ubuntu>
- Generally:
    1.  Open your application finder
    2.  Search for _Terminal_
    3.  Open the _Terminal_ app
{:linux}

1.  Click the _Finder_ icon in your dock.
2.  Click _Go_.
3.  Click _Utilities_.
4.  Double-click _Terminal_.
{:macosx}

You should now see a screen with some text on it. It should look like one of these
(don't worry if the colours are different):

![An example PowerShell terminal](media/windows_shell.png)
![An example CMD terminal](media/windows_shell2.png)
![An example Mac OS X terminal](media/mac_shell.png)

The last line shown is called a _prompt_. It is asking (prompting you) for a
command. On Windows machines the prompt will always end with a `>` 
(right angle bracket). On Linux and Mac OS X the prompt will always end with a `$`
(a dollar sign).

Try typing a command in the terminal:

1.  Type the following
    - `echo "Hello world"`
2.  To execute the command, press <kbd>Enter</kbd>

Important tip: You can run the previous command again by pressing the 
<kbd>&uarr;</kbd> (up arrow)
on your keyboard to recall the last command and then by pressing <kbd>Enter</kbd>
to run it again. You can edit the command before you run it again.

## Running AP.exe and getting help

In your terminal type the following and press <kbd>Enter</kbd>:

``` PowerShell
C:\AP\AnalysisPrograms.exe
```
{:windows}

``` Bash
mono ~/AP/AnalysisPrograms.exe
```
{:linux}

``` Bash
mono ~/AP/AnalysisPrograms.exe
``` 
{:macosx}

Congratulations! You’ve just run AP.exe for the first time. Because we did not
supply any parameters it defaulted to printing out the main help text.

AP.exe has many different commands of its own. Each one has its own specific help documentation.
Try getting help for a few of them by typing the command name and adding a
`--help` option afterwards. Read through the output to familiarise yourself
with what each command can do, however, don't worry if you don't understand it all.

Let's see how the `AudioCutter` command works:

``` PowerShell
C:\AP\AnalysisPrograms.exe AudioCutter --help
```
{:windows}

``` Bash
mono ~/AP/AnalysisPrograms.exe AudioCutter --help
```
{:linux}

``` Bash
mono ~/AP/AnalysisPrograms.exe AudioCutter --help
``` 
{:macosx}

Now, let's see how the `EventStatistics` command works:

``` PowerShell
C:\AP\AnalysisPrograms.exe EventStatistics --help
```
{:windows}

``` Bash
mono ~/AP/AnalysisPrograms.exe EventStatistics --help
```
{:linux}

``` Bash
mono ~/AP/AnalysisPrograms.exe EventStatistics --help
``` 
{:macosx}

Some of our commands like `audio2csv` can do many different types of analyses.
Try running the following:

``` PowerShell
C:\AP\AnalysisPrograms.exe AnalysesAvailable
```
{:windows}

``` Bash
mono ~/AP/AnalysisPrograms.exe AnalysesAvailable
```
{:linux}

``` Bash
mono ~/AP/AnalysisPrograms.exe AnalysesAvailable
``` 
{:macosx}

Unlike our other commands, the sole purpose of this command is to list what
AP.exe can do. That's why we didn't need a `--help` option. We call these
sorts of commands _meta commands_. The `AnalysesAvailable` command lists all the
analyses that can be run in the `audio2csv` command.


## Change directories

When you double click a folder in Windows Explorer (or Finder on Mac OS X), the
_current directory_ changes to the folder you clicked on. (_Directories_ and
_folders_ are synonyms).

You if you have used R you may have used the `setwd` function. It to changes the
current directory.

In your shell, change directory to our demo data folder:

``` PowerShell
cd C:\Temp\Workshop
```
{:windows}

``` Bash
cd ~/Workshop
```
{:linux}

``` Bash
cd ~/Workshop
``` 
{:macosx}

To prove you changed folder, try asking which directory you are currently. Run the
following command to print your current directory:

``` PowerShell
# If you're using PowerShell
pwd

# If you're using CMD
cd
```
{:windows}

``` Bash
pwd
```
{:linux}

``` Bash
pwd
``` 
{:macosx}



## Calculating Indices

The indices analysis uses the `audio2csv` command and the `Towsey.Acoustic.yml`[^towsey_acoustic]
config file. The `audio2csv` command is named internally _Analyse Long Recording_
(which is a much better name) because it aptly describes what it does: it
takes one long recording, splits it up into chunks, and runs an analysis of each chunk.

[^towsey_acoustic]:
    Why is our acoustic indices analysis named `Towsey.Acoustic`?
    Our naming format is `<author>.<analysis_name>`. In this case the author
    `Towsey` (Michael Towsey) created an analysis named `Acoustic`.
    We also
    abbreviated the name from `Towsey.AcousticIndices` to make it shorter. Don't
    worry we think the name is bad as well, it's just too late to change it!

Which analysis is run depends on which config file is used. The available analyses
that can be used are listed by the `AnalysesAvailable` command (you ran it just before).

Let's get some help on the `audio2csv` command:

``` PowerShell
C:\AP\AnalysisPrograms.exe audio2csv --help
```
{:windows}

``` Bash
mono ~/AP/AnalysisPrograms.exe audio2csv --help
```
{:linux}

``` Bash
mono ~/AP/AnalysisPrograms.exe audio2csv --help
``` 
{:macosx}

If you piece all the bits of the documentation together you can see how you might
use this command. But today, don't worry, we've done it for you! The command to
 generate indices looks like this:

``` PowerShell
C:\AP\AnalysisPrograms.exe audio2csv SM304256_0+1_20151114_030000+1100.wav Towsey.Acoustic.yml .\IndicesOutput
```
{:windows}

``` Bash
mono ~/AP/AnalysisPrograms.exe audio2csv SM304256_0+1_20151114_030000+1100.wav Towsey.Acoustic.yml ./IndicesOutput
```
{:linux}

``` Bash
mono ~/AP/AnalysisPrograms.exe audio2csv SM304256_0+1_20151114_030000+1100.wav Towsey.Acoustic.yml ./IndicesOutput
``` 
{:macosx}

To break that command down:

- First, we choose to run the `audio2csv` command
- Then, the first _argument_ is the path to the file we want to analyze
- Then, the second _argument_ specifies which configuration file to use
  - Remember, the configuration file determines which analysis is run
- And finally, the last _argument_ specifies a folder where we want to store the output

Go ahead and run that above command. You'll need to wait a few minutes while it runs.

- If the command works the last line printed should be a `SUCCESS` message.
- If the command does not work an error should will be printed.
    - If you do get an error ask one of our helpers for advice.

When the command has finished, you can see the results in _Windows Explorer_ (for Windows),
or in _Finder_ (for Mac OS X). You'll find the results in the `Workshop` folder.

### Understanding Indices Results

The output for the indices analysis is a series of files. You should find these
files in the `Towsey.Acoustic` directory.

There are, broadly speaking, four types of files in this folder:

1. Images
2. A Summary Indices CSV file
3. Spectral Indices CSV files
4. Metadata files

The most interesting category is the images. The image we always look at first is
the _2Maps_ image (for the demo file it should be named `SM304256_0+1_20151114_030000+1100__2Maps.png`).
The 2Maps image shows two false-color spectrograms, each with it's own color map
(hence "two maps"). A color map is a mapping of a spectral index to a color channel.

In our example:
- Color Map 1 maps ACI, ENT, and EVN to the Red, Green, and Blue colour channels respectively
- Color Map 2 maps BGN, PMN, and R3D to the Red, Green, and Blue colour channels respectively

Using all these different indices, in two images, is useful because the different
combinations of indices yield different views into the recording.
Sometimes one view is more useful than the other.

![The 2maps image](./media/SM304256_0+1_20151114_030000+1100__2Maps.png)

Most of the other images in this folder show either one color map, or just one
spectral index as an image.

If you're interested in analyzing your data then take note of the _Towsey.Acoustic.Indices.csv_
file (in this demo it should be named `SM304256_0+1_20151114_030000+1100__Towsey.Acoustic.Indices.csv`).
This file contains a variety of acoustic indices calculated for each minute of the
data. Each row has the values for the associated minute.

The spectral indices are also saved. Each spectral index is a matrix and given
the nature of CSV must be saved to its own file. For example `SM304256_0+1_20151114_030000+1100__Towsey.Acoustic.ACI.csv`
contains spectral ACI. Each row has the values for a minute of the data. The
columns have the data for each frequency band.

Tips:
- All results are calculated from the start of recording. Thus if your recording
  starts at 23 seconds past the minute, each result minute thereafter will also
  start at 23 seconds past the minute. There are options in `audio2csv` to change
  this behaviour.
- You can change `IndexCalculationDuration` parameter in the `Towsey.Acoustic.yml`
file to change the resolution at which the indices are calculated. For more
information on changing config files, see the _Config Files_ section below.
- Generally we expect people will need to post-process these files (e.g. in R)
- The images have no padding on their sides. Thus, in a pinch, images from
  consecutive files can be simply placed next to each other to simulate a single
  continuous image.
- We recommend you do not aggregate data files together to create a composite
  view of a day of data. A good general principle is to not obfuscate the provenance
  of your data.

## Running an Event Recogniser

Our Event Recognisers also use the `audio2csv` command[^event_recognisers]. This
means that to run an event recogniser we don't have to change much from our last
example:

[^event_recognisers]:
    There are some other commands, like `EventRecognizer` and
    `AED`, that can be used to run event recognisers but we recommend you **do
    not** use them. They are intended to be used for testing and debugging only.

``` PowerShell
C:\AP\AnalysisPrograms.exe audio2csv SM304256_0+1_20151114_030000+1100.wav Towsey.LewiniaPectoralis.yml .\EventOutput
```
{:windows}

``` Bash
mono ~/AP/AnalysisPrograms.exe audio2csv SM304256_0+1_20151114_030000+1100.wav Towsey.LewiniaPectoralis.yml ./EventOutput
```
{:linux}

``` Bash
mono ~/AP/AnalysisPrograms.exe audio2csv SM304256_0+1_20151114_030000+1100.wav Towsey.LewiniaPectoralis.yml ./EventOutput
``` 
{:macosx}

We changed the last two _arguments_ in this command:

- We have changed the config file from `Towsey.Acoustic.yml` to `Towsey.LewiniaPectoralis.yml`
    - This means `audio2csv` will now run the Lewin's Rail recogniser
- We changed the output directory so we could store the results somewhere else

Go ahead and run that command. You'll need to wait a few minutes for it to run.

When the command has finished, you can see the results in _Windows Explorer_ (for Windows),
or in _Finder_ (for Mac OS X). You'll find the results in the `Workshop` folder.

### Understanding Event Recogniser Results

Similarly to the indices analysis, you'll find the results of the recogniser in
a sub-directory, this time named `Towsey.LewiniaPectoralis`.

The output for this analysis is simpler:
- There is an Events CSV that contains all the acoustic events detected
- There are some "Event Indices" related files
- And there are detection files
    - For each minute where an event was found is:
        - A diagnostic spectrogram that shows the events
        - The segment, the minute of audio, where the event was found

Have a look through some of the diagnostic images. There are some true and false
positives in this data.

The Events CSV can be confusing. These tips should be helpful:
- Each row in the CSV is a separate event detection
- `EventStartSeconds` is left edge of the detected event. It is defined as the
  number of seconds from the start of the entire audio recording to the start of
  the detected event
- The `Score` column is a rough estimate of our confidence in the detection,
  from `0.0` to `1.0`

Tips:
- You can configure (in the config files) when (or if it all) the debug spectrograms
  and segmented WAVE files are saved. To save space, it is usually best to disable
  this extra output when analyzing a lot of files
- Most of our event recognisers have settings that can be tweaked. Tweaking these
  settings will usually result in better detection results, however, changing them
  can be cumbersome because each tweak requires the recogniser to be run again.
  We recommend automating a parameter sweep.

---

## End of practical

This is the end of the practical today. Thanks for coming to our workshop.

There are some optional additional sections below you can try out or read through if you
have finished early. Don't delete the demo data just yet though.

If you're finished you may want to delete the files and data we used today.

1.  To remove the demo data (and all results)
    - Delete `C:\Temp\Workshop` 
    - Delete `Workshop7Data.zip` or `SM304256_0+1_20151114_030000+1100.wav` from your downloads folder
1.  To remove AP.exe
    - Delete  `C:\Temp\AP`
    - Delete `Release.18.6.3.3.zip` 
{:windows }

1.  To remove the demo data (and all results)
    - Delete `~/Workshop` 
    - Delete `Workshop7Data.zip` or `SM304256_0+1_20151114_030000+1100.wav` from your downloads folder
1.  To remove AP.exe
    - Delete  `~/AP`
    - Delete `Release.18.6.3.3.zip` 
{:linux}

1.  To remove the demo data (and all results)
    - Delete `~/Workshop` 
    - Delete `Workshop7Data.zip` or `SM304256_0+1_20151114_030000+1100.wav` from your downloads folder
1.  To remove AP.exe
    - Delete  `~/AP`
    - Delete `Release.18.6.3.3.zip` 
{:macosx}

---

## Orchestrating AP.exe with scripts

Both the examples we looked at today only processed one file. In reality you will
want to process many files. AP.exe very specifically avoids batch processing of
files because we don't want to make assumptions about how your data is stored or
how it should be computed. This is especially important in universities that use
PBS (Portable Batch System) compute clusters---assumptions in how data is
processed vary a lot.

The solution is to script AP.exe. You can script AP.exe with any language you like.
This section will demo three examples of scripting AP.exe with PowerShell, R, and
Bash. Each of the examples does the same thing: they generate indices for the files
in a folder.

All of these examples (and languages) will work on Windows, Mac, or Linux.
This practical will not provide an in depth guide to using these languages. However,
even if you can't run them, reading through the examples should still prove useful.

We have a collection of scripts at <https://github.com/QutEcoacoustics/audio-analysis/tree/master/scripts>.
The collection is currently rather small, but if you need an example script, let
us know and we'll write one for you. We're also interested in gathering examples
from others!

### Scripting with PowerShell

```PowerShell
# Set the directory containing the files
$directory = "C:\Temp\Workshop"
# The directory to store the results
$base_output_directory = "C:\Temp\Workshop\BatchIndicesOutput"

# Get a list of audio files inside the directory
# (Get-ChildItem is just like ls, or dir)
$files = Get-ChildItem "$directory\*" -Include "*.mp3", "*.wav"

# iterate through each file
foreach($file in $files) {
    Write-Output ("Processing " + $file.FullName)

    # get just the name of the file
    $file_name = $file.Name

    # make a folder for results
    $output_directory = "$base_output_directory\$file_name"
    mkdir $output_directory

    # prepare command
    $command = "C:\AP\AnalysisPrograms.exe audio2csv `"$file`" `"Towsey.Acoustic.yml`" `"$output_directory`" -n"
    
    # finally, execute the command
    Invoke-Expression $command
}
```

### Scripting with R

```r
# Set the directory containing the files
directory <- "C:\\Temp\\Workshop"
# The directory to store the results
base_output_directory <- "C:\\Temp\\Workshop\\BatchIndicesOutput"

# Get a list of audio files inside the directory
# (Get-ChildItem is just like ls, or dir)
files <- list.files(directory, pattern = "*.wav", full.names = TRUE)

# iterate through each file
for(file in files) {
  message("Processing ", file) 
  
  # get just the name of the file
  file_name <- basename(file)
  
  # make a folder for results
  output_directory <- normalizePath(file.path(base_output_directory, file_name))
  dir.create(output_directory, recursive = TRUE)
  
  # prepare command
  command <- sprintf('audio2csv "%s" "Towsey.Acoustic.yml" "%s" ', file, output_directory)
  
  # finally, execute the command
  system2('C:\\AP\\AnalysisPrograms.exe', command)
}
```

### Scripting with Bash

```Bash
#!/usr/bin/env bash

# Set the directory containing the files
DIRECTORY=~/Workshop
# The directory to store the results
BASE_OUTPUT_DIRECTORY=~/Workshop/BatchIndicesOutput

# Get a list of audio files inside the directory
# The `-1` option outputs one file per line
FILES=$(ls -1 $DIRECTORY*.wav)

# iterate through each file
for file in FILES; do
    echo "Processing $file"

    # get just the name of the file
    filename=`basename $file`

    # make a folder for results
    output_directory="$BASE_OUTPUT_DIRECTORY/$filename"
    mkdir -p $output_directory

    # prepare and execute command
    mono ~/AP/AnalysisPrograms.exe audio2csv "$file" "Towsey.Acoustic.yml" "$output_directory"
done
```

## Tips & Tricks


### 1. Versioning of AP.exe

We release updates to AP.exe frequently. It is important that you check for updates
and can also understand the version numbers. Go to <https://github.com/QutEcoacoustics/audio-analysis/blob/master/docs/versioning.md>
to read more about how we version AP.exe.

### 2. Customising Config Files

Nearly every command and analysis can be customised with a config file. To read 
more about customising config files, please go to <https://github.com/QutEcoacoustics/audio-analysis/blob/master/docs/config_files.md>

### 3. Dates and Times in Filenames

We only support some date formats. For more information on what date formats we
support please go to <https://github.com/QutEcoacoustics/audio-analysis/blob/master/docs/dates.md>

### 4. Absolute Paths

To make this practical easier for you to type out, we used a lot of _relative paths_. A 
relative path is a filename that only points to the correct file if you are in
the correct folder. That is your _current directory_ is relative to the file.

An absolute path is filename that is always correct no matter what your _current
directory is_. On Windows, absolute paths always start with a drive letter (e.g.
`C:\…` or `D:\…` etc). On Linux and Max OS X absolute paths will always start
with a forward slash (e.g. `/…`).

We recommend you always use absolute paths for programming tasks. This is especially
important for scripting/orchestrating AP.exe. Using absolute paths helps to avoid
a whole class of easy to make mistakes---which can be amplified when you start
working at scale!

### 5. Recorder Schedules

For continuous recordings we recommend:

- 4 x 6 hour files, scheduled at
    - 00:00
    - 06:00
    - 12:00
    - 18:00
    
- OR 4 x 6 hour files, scheduled at
    - 03:00
    - 09:00
    - 15:00
    - 21:00

This schedule is the best format for creating long-duration false-color index spectrograms.
The second format is particularly good for ensuring the dawn-chorus is captured
as a whole recording.

The longer the deployment, the more we prefer longer files. Every additional file
creates overhead in processing and storage. This is especially true for Ecosounds
which manages over 500&thinsp;000 recordings!

There are drawbacks to creating longer files. The biggest is that it can be harder
to manipulate the files manually (say in Audacity which inefficiently requires 
an entire file to be loaded before processing can begin). It is best you 
design your protocol around what you need:

- If you intend to sample your data and analyze it manually, for small projects,
  then shorter files are fine
- If you're capturing months of data, go for larger files and find methods for
  dealing with the scale. Most audio collected at scale will never be listened to
  manually so it is important to optimize for automated processes rather than human
  listeners.

We also strongly recommend you test your schedules before your deploy. Dealing
with data that does not start at the zeroth second of a minute can be surprisingly
frustrating.


### 6. Adding AP.exe to PATH

If you plan to use AP.exe a lot, this extra "install" step will make it easier to use.
Please go to  
<https://github.com/QutEcoacoustics/audio-analysis/blob/master/docs/path.md>

### 7. Maintaining provenance with log files

AP.exe writes a log of all actions taken to `log.txt` file. We recommend you
always save this log along with your results because it contains important
information about the analysis.

For more information go to <https://github.com/QutEcoacoustics/audio-analysis/blob/master/docs/logs.md>

### 8. Bugs and support

AP.exe has many bugs. This is pretty normal for research software. If you find
something that doesn't work, please let us know by filing an issue at
<https://github.com/QutEcoacoustics/audio-analysis/issues>

We're interested in new features  however we primarily develop AP.exe for our own needs.
If a new feature is requested that is
not needed by us, where possible we'll consider implementing it. However we do
not have the capacity to fully support AP.exe as a product.


## Glossary


-   **AnalysisPrograms.exe**
    -   A program produced by QUT Ecoacoustics to analyse long duration
        recordings of the environment
    -   Often referred to as **AP.exe**
-   **Audio Recording**
    -   A single audio file. Typically, a WAVE file
-   **Acoustic Event**
    -   An interval of acoustic energy, above the background noise level,
        emitted from a single source
-   **Acoustic Index**
    -   A summary statistic that describes some feature of an audio recording,
        typically different aspects of the distribution of acoustic energy for a
        defined period
-   **Spectral Index**
    -   Same as an acoustic index, but produces a spectrum of values
-   **False colour spectrograms**
    -   Also known as False Colour Multi-Index Spectrograms, Index Spectrograms,
        Long Duration False Colour Spectrograms
    -   A visualisation of audio data, derived from a triplet of three spectral
        acoustic indices, each assigned to a particular colour channel

## Footnotes
