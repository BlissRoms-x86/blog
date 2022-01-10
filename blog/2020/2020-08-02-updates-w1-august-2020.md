---
slug: 2020-08-02-updates-w1-august-2020
title: Updates (W1, August 2020)
authors: eric
date: 2020-08-02
---

Welcome to the fast ring of BlissRoms “Updates” posts! This will be the first of many weekly update posts for BlissRoms. If you want to know which week it is, then check the W1, W2 tags in the title!

And with that out of the way, let’s get into this week’s worth of updates!

# BlissRoms

## Bug fixes

- Launcher fixes:
    - Fixed weird recent transition animation on swiping from navbar
    - Fixed no Google app in app drawer
    - Removed prediction row toggle
    - Fixed quick-switch padding in Recent apps
    - Removed column/row options (enable grid in launcher settings)
    - Fixed icon pack value not showing in settings
    - Fixed many miscellaneous things
- Fixed QS tint style issues ([see example here][qs-tint-style-issue-example])
- Fixed emergency button on power menu on first boot
- Improved Settings > Privacy UI for GApps users
- Fixed no permission bar chart for inbuilt GApps devices
- Improved handling no icon preferences
- Fixed maintainer name showing unofficial maintainer on other languages
- Set eleven as default music player
- Enabled media picker for ringtones
- Set default Dialer and no in call-UI on first boot
- Fixed button tint in SetupWizard
- Disabled Bliss clear primary overlay (use clear system theme)
- Removed similar packages (like Gallery, Calendar) for inbuilt GApps devices (if installing GApps externally, use scripts to override, if they do not override by default)
- Fixed navigation bar toggle showing for devices with no hardware keys

[qs-tint-style-issue-example]: https://drive.google.com/file/d/1-6X0s5TtOOecWsYaj_AbIW0VsnfBPirJ/view

## Feature additions

- Launcher:
    - Add scroll to remember position in app drawer.
- The following themes were added:
    - Clear theme (this was requested a lot! Finally added :D)
    - PitchBlack
    - Dark grey
    - Solarised dark
    - Material Ocean
- August Security Patch has been merged.
- Added iOS-like clipboard toast notification. See if apps are spying on your clipboard!
- Added option to show/hide rotation button on navbar and gestural mode
- Added partial screenshot to HW keys actions and edge swipe action
- Added backgrounds wallpaper app and Calculator (for non-GApps users)
- Optimized touch
- Added support for Boost Framework
- Added same NFC icon for statusbar as QS tile
- Added Linotte font
- Improved Settings > Wi-Fi animation
- Added a brand new animation for connected devices
- Added new animation for Settings > System
- Added battery health options (this needs to be enabled by your maintainer! But please don’t bug them to… they will do it if the device supports it.)
- Added a new Face Settings video
- Brought back SettingsIntelligenceGoogle
- Added default tiles on first boot
- Added wifi-ext (device-dependent)

Also, thanks to everybody [translating on our translation page][translation-page], we have more languages for everyone to enjoy!

[translation-page]: https://translate.blissroms.com/

If you would like to see the full developer commit changelog, [you can find that here.][developer-commit-changelog]

[developer-commit-changelog]: https://github.com/BlissRoms-Devices/Changelogs/blob/q/Changelog.txt

And that’s it! If you have any comments or questions, feel free to comment down below!
