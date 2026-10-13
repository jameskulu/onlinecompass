---
title: "How to Use an Online Compass: The Complete Guide"
description: "A practical guide to using an online compass on your phone — enabling sensors, calibrating the magnetometer, reading true vs magnetic north, and getting a heading you can trust."
pubDate: 2026-10-13
author: "True Online Compass"
keywords:
  - how to use an online compass
  - online compass
  - true north vs magnetic north
  - calibrate phone compass
  - find north without a compass
  - phone compass accuracy
---

An **online compass** turns the phone in your pocket into a real navigation instrument. There is nothing to install and no account to create: you open a page in your browser, allow it to read your device's sensors, and a live 360° dial appears with the direction you are facing in degrees.

This guide covers the whole process on our [live compass tool](/compass/) — how to get it running, how to calibrate it so the reading is trustworthy, how to read the dial, and how it behaves in the real world. If you only take one thing away, make it this: a phone compass is only as good as where you are standing.

> **In short:** Open the compass on your phone, tap **Enable live compass**, hold the device flat and away from metal, and read the heading. If the number drifts, trace a figure-eight to recalibrate. Turn on **true north** whenever you compare the reading to a map.

## What an online compass actually is

A digital compass is not a magnetised needle. Your phone contains a **magnetometer** that measures the strength and direction of Earth's magnetic field, plus an **accelerometer** (which way is down) and a **gyroscope** (how you are rotating). An online compass fuses those three streams into a single number: your heading, in degrees clockwise from north, corrected so it stays right even when the phone is tilted.

Because the browser does the maths locally, the reading never has to leave your device. Our tool computes everything on your phone and discards it when you close the tab — there is no server, no account, and no tracking. You can read more about that on the [about page](/about/).

## Before you start

You need three things:

- **A phone or tablet with a magnetometer.** Virtually every smartphone has one — every iPhone since the iPhone 3GS and almost all Android devices. If your phone's maps app rotates to match which way you are facing, it has the sensor.
- **A secure page.** Sensor access is only available over HTTPS, so open the compass on `https://`.
- **A few seconds of stillness.** The reading stabilises almost instantly, but it helps to start from a stable position.

You do **not** need an internet connection for the compass itself once the page is loaded, an app, or a sign-up.

## How to use the online compass, step by step

### 1. Open the compass on your phone

Load the [online compass](/compass/) in Safari, Chrome, or Firefox. The dial appears immediately in a demo state until the real sensors start reporting, so you always see what the tool looks like before you grant anything.

### 2. Enable the live compass

Tap **Enable live compass**. On iOS, the browser then asks for permission to access motion and orientation data — allow it once. On Android, sensor access is usually granted automatically. If you see a message about HTTPS, you are on an insecure connection; switch to `https://` and reload.

### 3. Hold the phone flat

Rest the phone in your palm, screen up, roughly parallel to the ground. This is the step that determines most of your accuracy. Keep the phone:

- away from your body and other devices;
- clear of magnets, including MagSafe cases and magnetic car mounts;
- away from metal tables, speaker magnets, and laptops.

Metal and magnets bend the local magnetic field, and the magnetometer faithfully reports the distortion.

### 4. Calibrate with a figure-eight

If the number drifts, jumps, or takes a long time to settle, trace a **figure-eight** in the air with the phone — a few slow loops — then hold it still. This exposes the magnetometer to a range of field directions so it can recalibrate. It is the single most useful fix for an unstable reading and takes only seconds.

### 5. Read your heading

The red end of the needle points north, and the fixed marker at the top of the dial points in the direction you are facing. Below the dial you will see the heading two ways: as a number from 0° to 359°, and as a compass point such as N, NE, E, SE, S, SW, W, or NW. A reading of **274° W** means you are facing almost due west.

### 6. Switch to true north

Your magnetometer points to **magnetic north**, but every map is drawn around **true north**. Tap **"Use location for declination"** and toggle to **True north** so the compass applies the World Magnetic Model for your coordinates. Do this before you follow any bearing or compare the reading with a map — it is the difference between a heading that is right and one that is quietly wrong.

### 7. Check the accuracy indicator

The status pill shows your live sensor source and how steady the reading is. A calm, consistent number is what you want. If it is bouncing around, step away from electronics and metal and run the figure-eight again.

## How to read a compass dial

A few terms make the rest of navigation much easier:

| Term | Meaning |
| --- | --- |
| **Heading** | The direction you are currently facing, in degrees from north. |
| **Bearing** | The direction from one point to another, also in degrees from north. |
| **Azimuth** | A bearing written as an angle between 0° and 360°. |
| **Back bearing** | The reverse direction — the bearing that points from your destination back to you. |
| **Declination** | The angle between magnetic north and true north at your location. |

To orient a paper map, lay the phone flat, note which way is north, and rotate the map until its north edge points the same way. To retrace your steps, take the bearing you walked on and reverse it: add 180° if it is under 180°, otherwise subtract 180°.

## True north vs magnetic north, and why it matters

This is the part most people get wrong. Magnetic north is a moving spot in the Arctic that Earth's magnetic field currently points toward; it wanders by several kilometres a year. True north is the geographic pole that all maps use. The angle between them — **declination** — depends entirely on where you are:

| Location (approximate, mid-2020s) | Declination |
| --- | --- |
| London, United Kingdom | ≈ 0° |
| New York, United States | ≈ 13° west |
| Los Angeles, United States | ≈ 12° east |
| Toronto, Canada | ≈ 11° west |
| Sydney, Australia | ≈ 12° east |
| São Paulo, Brazil | ≈ 23° west |
| Cape Town, South Africa | ≈ 25° west |

Near London the two norths have almost coincided for years, which is why many British maps ignore the difference. In Canada or South Africa the gap can exceed 20°, so an uncorrected compass can point you badly off course. The values above are illustrative — declination changes every year and by exact position — so always use the live correction for your GPS coordinates rather than memorising a number.

## How accurate is a phone compass, really?

Used carefully, a phone compass agrees with a physical compass within about one to five degrees. That is plenty for orienting a map, aligning a solar panel, setting a dish, or walking a marked trail. It is not surveying equipment, and it will not out-perform a calibrated professional instrument.

The main variable is interference, not the sensor. Indoors, wiring, steel beams, and furniture can knock the reading off by tens of degrees. Outdoors, in the open and away from a vehicle or metal railing, the reading settles quickly and stays reliable.

Want a second opinion? In daylight, compare your heading against the [sun position tool](/sun/), which gives the exact solar azimuth for your location and time. If the two agree, you can trust the compass.

## Calibrating for the best result

Calibration is worth doing whenever you arrive somewhere new, especially after travelling in a car or train (which expose the phone to strong magnetic fields).

1. **Hold the phone flat** on your palm or a stable surface.
2. **Trace a figure-eight** slowly, three or four times, keeping the screen up.
3. **Hold still** for a second so the reading stabilises.
4. **Move away from interference** — laptops, speakers, magnets, metal tables — before you take the final reading.

If the heading still drifts indoors, step outside or stand by an open window. A few degrees of wobble near metal is normal and expected.

## Common problems and fixes

**The number spins or climbs nonstop.** You are beside a strong magnetic source. Remove magnetic cases and mounts, move away from speakers and motors, then recalibrate.

**The reading is steady but a few degrees off.** That is almost always declination. Turn on true north and enable location so the correction matches your exact coordinates.

**Nothing happens when I tap the button.** Check that the page is HTTPS and that you allowed motion and orientation access. Some browsers require a fresh tap after you change the permission.

**It works on my phone but not my laptop.** Most laptops have no magnetometer, so there is no live heading to read. The computer will still show the demo dial and the sun and moon positions for your location.

**The needle lags when I turn quickly.** Smoothing keeps the number stable, so it trails fast movement slightly. Pause briefly and it catches up.

## Six ways to put the compass to work

Once it is calibrated and set to true north, the compass is the anchor for a small toolkit:

- **Orient a map** before a hike so the contours line up with the ground.
- **Plan a route** with the [bearing calculator](/bearing/), which gives the direction and great-circle distance between any two points.
- **Find the Qibla** using the [Qibla finder](/qibla/), which computes the bearing to the Kaaba and the distance to Makkah.
- **Track the sun and moon** with the [sun & moon tool](/sun-moon/), which plots their directions on the dial.
- **Capture your position** with the [GPS coordinates tool](/location/), including altitude and accuracy.
- **Check which way a room faces** for light, solar panels, plants, or photography.

## Does an online compass work without the internet?

The heading itself is generated purely on your device, so the dial keeps working offline once the page has loaded. Location-dependent features — declination, Qibla, and sun position — use a model that ships with the page and your GPS coordinates, so no network round-trip is required to get a corrected reading.

## Your location stays on your device

There is no backend, no analytics, and no account. Location access is optional and only used to compute declination, Qibla, and solar position in your browser. If you would rather not share your position at all, you can type coordinates in manually and every tool still works. Read the [privacy policy](/privacy/) for the full detail.

## Start using it

Open the [live online compass](/compass/), enable the sensors, hold the phone flat, and you will have a trustworthy heading in under a minute. If you want the quick-reference version, the [homepage](/compass/) includes a short calibration checklist and a full FAQ; for everything else, the toolkit pages above are one tap away.
