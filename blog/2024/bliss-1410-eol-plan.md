---
slug: bliss-1410-eol-plan
title: "Info about BlissOS 14 end-of-life support"
authors: [electrikjesus, hmtheboy154]
description: When will BlissOS 14 will reach EoL ?
img: assets/bliss14-eol/bliss14-grayscale.png # Add image post (optional)
date: 2024-05-28
comments: true
tags: [blissos,bliss-x86]
---

# Info about BlissOS 14 end-of-life support

![alt text](assets/bliss14-eol/bliss14-grayscale.png "Info about BlissOS 14 end-of-life support")

BlissOS 14 is based on AOSP 11 and was officially revealed on December 22nd, 2020. After 4 years of supporting the OS, we are planning on the day that we officially pulled the plug & stop supporting this version of BlissOS.
https://fixupx.com/electrikjesus/status/1341183060713324547

In case you didn't know, the last security patch for AOSP 11 was officially released by Google on Feburary, 2024:
https://source.android.com/docs/security/bulletin/2024-02-01

Which mean any support from now on will have to completely handled by the community. And after discussion, we've decided to prolong the support for BlissOS 14 until April 2025. During this time, we will:

- Merging new security patches by using [unofficial Lineage backport](https://review.lineageos.org/q/topic:%22R_asb_2024-05%22)
- Bumping the kernel to at least 6.6.x LTS
- Updating Mesa to 24.0 and up
- Backporting changes from higher BlissOS version if possible.

While we will commit to support the OS until next year, **we will not guarantee the safety of the OS**. Which is why soon we will list this as "old stable" and we will encourage users to use higher versions of BlissOS if possible.

Support on our Telegram & Discord are also the same. When the version is reaching end-of-life, we will not providing support on those platform anymore.
