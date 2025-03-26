---
title: "Emme"
description: "Birth control & cycle tracker"
date: "Jun 25 2019"
demoURL: "https://apps.apple.com/us/app/emme-health-pill-tracker/id1294152287?pt=118832974&ct=emme_website"
---

![Emme](/emme.png)

I've helped develop an app for birth control pills, which uses custom-made hardware, called Cadence case (now Emme), by implementing the BLE communication functionality into it. This app communicates with the Cadence case in order to keep track of when the user has: opened the case, taken the pill, closed the case, etc. By using data received from the hardware, the app does various calculations to determine whether the user is taking the pills properly or is at risk of getting pregnant. If the latter is true, the app suggests starting a new pack at a different time, and so on. User’s data history is stored both online and offline by using Firestore.