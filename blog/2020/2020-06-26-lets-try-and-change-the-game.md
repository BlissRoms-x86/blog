---
slug: 2020-06-26-lets-try-and-change-the-game
title: Let's try and change the game
authors: eric
date: 2020-06-26
---

We would like to announce a change to Bliss OS (our PC/x86/x86_64 builds) that we’ve been working on. Recently, the development on Bliss OS has taken a different turn towards something that can better benefit the entire community.

We’ve taken the concept of our Android-PC project, and started to rework the scripts to make things a whole lot smarter and easier to use. This allowed us to evolve Android-PC project into a toolkit that could also build multiple versions of a Bliss OS, along with AOSP. So seeing the potential there, we started working on the scripts, more and more. Adding the ability to create a PC .iso for just about any ROM out there, not just Bliss. After that we then boiled it all down to one vendor repo to clone into the AOSP or ROM source.

With that main groundwork laid out, we then added the treble (GSI) scripts based off the same PHH-Treble concept we started using in Android Pie, and updated those with all the new functionality added for the PC side of things. Making this project now require a new name, Android-Generic.

Next step was to make it smarter. So with multiple ROMs applying the same set of generic patches, we quickly figured out that we will need to split things up for the patches. So the process for both GSI & PC patches all start with a pre-patch phase to allow for any reverts or other preparation a ROM source might need, then after that we apply a generic patchset (usually the base set that applies straight to AOSP), then after that we have a second ROM specific patch set to add any conflict resolutions that occur from the initial process of configuring for you ROM. Then after that is all set, we also have a Customization patch set type. Think AOSP vs. AOSP-EX, or Lineage vs Lineage-EX. In this phase of patching, it will look for any rom add-ons, added patches for customizations, features, etc, on top of what the ROM has currently.

After that we set out to make the whole thing work more efficiently, adding the ability for new patch conflicts in one ROM to seek out other potential conflict resolutions on its own from the resolutions other ROMs have in the AG repo, so the more ROMs included in the main Android-Generic repo, the more ROMs that will be able to use it out of the box, benefiting the entire community.

Now for GSI, some may be thinking that PHH-Treble already uses a patching system and scripts, why would this be used? Since we are indeed using his work for the generic GSI patches, we don’t want to replace his work at all, we want to take the value-added approach and provide the community an easy to use system that incorporates his work and uses everyone’s solutions on top of it to grow and benefit everyone exponentially. 

For the PC side of things, this doesn’t mean the end of Bliss OS at all, in fact, Bliss OS is now part of all the PC ROMs that are built through AG. We will still be uploading Bliss OS builds too, but they will also be accompanied with  various other PC builds of different Android ROMs, and AOSP combinations.

This is where we need the Android community to start showing their support and try using the toolset. We’re not afraid of constructive criticism and are consistently working towards automating the entire process if possible. Help us help the community and git checkout Android-Generic today!

```
git clone https://gitlab.com/android-generic/vendor_android-generic vendor/android-generic
```