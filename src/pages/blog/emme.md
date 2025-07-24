---
layout: ../../layout/MarkdownLayout.astro
title: "Emme"
description: "Emme is a smart birth control pill management app that pairs with a Cadence case via BLE. The system tracks pill usage, monitors adherence, and provides timely recommendations for maintaining effective birth control. User data is securely stored using Firestore for both online and offline access."
pubDate: July 24, 2025
tags: ["Project"]
---

![emme](/public/images/emme.png)

I’ve helped develop an app for birth control pills, which uses custom-made hardware, called Cadence case (now Emme), by implementing the BLE communication functionality into it. This app communicates with the Cadence case in order to keep track of when the user has: opened the case, taken the pill, closed the case, etc. By using data received from the hardware, the app does various calculations to determine whether the user is taking the pills properly or is at risk of getting pregnant. If the latter is true, the app suggests starting a new pack at a different time, and so on. User’s data history is stored both online and offline by using Firestore.