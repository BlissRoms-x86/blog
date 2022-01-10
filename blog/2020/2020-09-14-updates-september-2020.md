---
slug: 2020-09-14-updates-september-2020
title: Updates (September 2020)
authors: eric
date: 2020-09-14
---

Hey everyone! Exciting time of the year. iOS 14 is coming out soon, right?

...I’m kidding! I know you guys are itching for the Android 11 builds, so before we start this month’s worth of announcements, I want to briefly touch on these points below.

# When will Android 11 come out?

Android 11 came out a couple of days ago, so obviously we should have a build ready to go for everyone, right?

Well, no. That’s not how this works. The bring-up for Android 11 will be a tedious and long process and it will definitely need help, in the form of people spamming our chats asking for the latest and greatest Android 11 BlissRoms build.

...I’m obviously being sarcastic. Don’t do this. Please!

Asking for ETAs is a big no-no in the Android community, and if you don’t know this already just try going to the forum on XDA-Developers and ask when a custom Android 11 build will be out. You’ll be banned before you can finish asking “ETA?!”

So don’t ask us.

That being said, we have a general timeline set for beta releases in a couple of months, and general releases after that. **This is not a concrete timeline and it is subject to change at any time.** So please don’t message us and say that we lied when we don’t ship builds in a couple of months. We didn’t. You just didn’t read our announcement fully.

# Will my device be supported in Android 11?

Right now, we cannot be sure. So please don’t ask about this, too.

Oh, speaking of device support…

# Unofficial builds are unofficial builds

We are happy to see that members of the community are adding support for devices that are not on the official roster, by building unofficial builds. However, we would like to remind you that as much as we are grateful to developers and maintainers helping to create a better ROM community, **we cannot endorse these builds in any capacity.**

This has particularly become an issue as some unofficial maintainers have begun to launch builds to “compete” with official builds, claiming more functionality and bug fixes. We have even received a number of abuse reports from maintainers, claiming that unofficial maintainers are encouraging users to threaten or harass the official maintainer, sometimes doing it themselves. We never condone this type of behavior and we are really saddened to see how abusive some members of the community have become. Please do not support this behavior yourself and steer clear of builds built by these toxic members of the community.

Another issue with unofficial builds is support. **We cannot support devices we don’t own.** We just can’t do it. Period. This means whatever bug or snag you run across while running an unofficial build should be forwarded to the unofficial builder, **not** us. Our public community chat on Telegram is only focused on providing support for official builds, and not unofficial builds. We just don’t have the capacity to do it. Sorry.

If you, as a developer, would like to build official builds, then please consider applying to our maintainer program at Team Bliss. We have instructions on how to do just that on our community chat.

Oh, right. Regarding the community chat…

# Spam moderation in community chat

In the past month we’ve seen an uptick in spam, particularly threatening and abusive messages from trolls. We are trying our best to filter them out, however we cannot be available 24/7 and some of these messages may slip through the cracks.

If you notice any bad messages on our community chat, use the `/report` flag while replying to the offending message to report the message to admins. Also, right click on the message and select “Report Message,” then select the appropriate abuse reason. This will alert the Telegram team to the abuse and they will be able to shut the spammer down.

We appreciate everyone’s patience and are working towards a solution that will preemptively block spammers before they even join. Further details will be announced soon. Thanks!

# Updated OTA announcement

We recently overhauled our downloads infrastructure and that caused some of our server API URLs to change. As a result, the old OTA app bundled with old builds of BlissRoms will no longer work.

To check if you have the old OTA app:

- If your BlissRoms build was released after **August 23rd**, then no need to worry! You already have the patched OTA app.
- If your BlissRoms build won’t update even if there is a new version listed online it’s possible your build does not have the patched OTA app.

If you are on a build before August 23rd, please update manually by downloading and flashing a new build `.zip`. You only need to do this once!

In the future, we are looking at OTA-OTA solutions (sounds weird, right?) so that users do not have to repeat this. We’re sorry for the inconvenience!

Great, so let’s see what changed this month for BlissRoms!

# Feature additions

- **The September security patch has been merged!** Thanks to @jackeagle for the merge 🙂
- Added toggle for carrier group visibility
- Added support for MiSound FX and DiracSound FX
- Improved lockscreen nav Pulse
- Added music card in volume panel
- Improved FOD
- Added centered R-style notification headers
- Added ambient screen Pulse
- Improved SystemUI
- Added volume plugins
- Added toggle for gradient background in QS panel
- Added setting to add minimum auto brightness value
- Face authentication now automatically blocks when the device is in a pocket
- Clicking on the QS data usage toggle now opens the data panel
- Aligned music card vertically to volume panel
- Added option to force custom Doze brightness
- Made ringer icon optional in volume panel
- Asus Longshot is now the default screenshot system!
- Moved Dark Mode to Blissify Settings
- Added dependencies to system themes

Bug fixes

- Fixed “Edit QS panel” icon touch issue
- Fixed battery QS tile icon not changing. The detail for it was also removed.
- Fixed “remove lockscreen default shortcuts”

And that’s it for this month! Have a good one and see you in the next update post!
