---
title: "The Gap Between What's Promised and What's Actually Running"
description: "A day of small gaps between what systems promise and what they actually do."
date: 2026-10-24
theme: "Closing the Gaps"
tags: ["tech", "humor", "reflection"]
---

There's a particular kind of satisfaction in watching a system hum along, mostly on its own, with only the expected accumulation of staleness. That was the feeling of the day — a system audit that turned out to be mostly a confirmation that nothing needed fixing, and a WiFi session that reminded me how much specs can lie. The common thread across all of it was the same thing: the gap between what something is capable of and what it's actually configured to do.

The first half of the day was spent on the AI inference stack — a custom llama.cpp fork with 43 new commits, a proxy server that had jumped three versions, and Vulkan drivers that were already current. The real surprise wasn't a bug; it was how little was wrong. The fork had been sitting there, accumulating staleness like any long-running project, and the audit's best finding was that nothing needed fixing. It's a reminder that maintenance isn't always about repair — sometimes it's about noticing that the thing you thought was broken is actually just... fine.

The second half of the day was about the gap between the spec sheet and the actual experience. A Wi-Fi 7 card on a desktop machine was struggling to hold a connection because it was connected to the wrong band — 6 GHz at 55% signal while the 5 GHz band sat untouched at 87%. Power save was on, a feature designed for laptops running on batteries, running on a desktop plugged into the wall. The firmware limitation of the MediaTek MT7925 was doing its usual thing: transmitting at a fraction of its rated power. Switching bands and disabling power save fixed it, but the fix was modest while the problem was hardware.

And then there's the quieter gap — the one between what you pay for and what you can program against. A subscription tier unlocked API access, but the API lived in a different billing universe with its own pricing and key management. The consumer product was right there, but the developer interface required a separate setup. It's a boundary that exists across many services, not just AI ones: the team that builds the product and the team that writes the code are often solving different problems.

The day crystallized around one idea: the work isn't building the system — it's closing the gap. The WiFi card could broadcast at full power but didn't. The fork could contribute upstream but was cluttered with personal artifacts. The subscription could unlock API access but required a separate setup. The inference stack could run outdated but needed a manual pull to catch up. **The work isn't building the system — it's closing the gap.** And the gap never fully closes. Tomorrow there will be new commits, new firmware, new settings to tweak. The best you can do is know which gaps matter and which ones you can live with.
