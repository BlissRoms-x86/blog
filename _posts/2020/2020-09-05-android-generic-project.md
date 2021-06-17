---
layout: post
title: "Android-Generic Project"
date: 2020-09-05
---

For the longest time, the Android-x86 world has been plagued with not having a proper recovery toolset packaged with the OS. There have been a few attempts at such a solution in the past, but nothing that was able to coincide with the main Android system and work together. Until [Gearlock][gearlock] came into play. It started as a toolkit to do many of the underlying troubleshooting within a basic UI for Phoenix-OS, Remix-OS, etc. And by working together with the lead developer, Axon, we were able to work out a solution for all Android-x86 based projects. Just clone vendor-gearlock into your AOSP based project, run one command, and it’s ready to go. The result is a recovery/tweaking solution that can be run along side system, and also acts as a pre-bootloader for the main OS, so you can in fact choose to boot into Recovery first if you desire.

[gearlock]: https://supreme-gamers.com/threads/gearlock-custom-recovery-replacement-for-android-x86.169/

Here’s a little preview I tweeted, giving a quick glance of some of the options available.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Here&#39;s a little preview of a few things Gearlock is able to provide for <a href="https://twitter.com/hashtag/AndroidGenericProject?src=hash&amp;ref_src=twsrc%5Etfw">#AndroidGenericProject</a>&#39;s Android 10 builds Thanks goes out to Axon for all the work on Gearlock lately ;) <a href="https://twitter.com/hashtag/AllROMsAreBlissful?src=hash&amp;ref_src=twsrc%5Etfw">#AllROMsAreBlissful</a> <a href="https://t.co/loKR4IFzFa">pic.twitter.com/loKR4IFzFa</a></p>&mdash; Jon West (@electrikjesus) <a href="https://twitter.com/electrikjesus/status/1302032014636441605?ref_src=twsrc%5Etfw">September 4, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

We’ve also been further integrating more and more ROMs into Android-Generic Project, Lineage OS 17.1 being the latest. And [boringdroid][boringdroid] developer, @utzcoz (Also the newest member of Team Bliss!!!) has also been hard at work in the Android Desktop UI development world, so we’ve been mostly testing all the changes under the hood there with the recent Lineage OS test builds, but have plans on continuing the ROM bringup game soon.

[boringdroid]: https://github.com/boringdroid

Again, if you are interested in learning more about Android-Generic Project or Android-x86 development in general, be sure to check out our [project readme][project-readme]. It has quite a few learning resources as well as plenty of documentation on the process.

[project-readme]: https://gitlab.com/android-generic/vendor_android-generic

And as a gauge of interest, we would like to know how many of you out there would be interested in watching the entire bring up process for a ROM, maybe streamed on Twitch someplace we could interact with those watching, and if so, what ROM would you all like to see added? Let us know in the comments below.

Thanks again.