---
title: "Phone Compass Wrong? How to Calibrate It and Fix a Drifting Heading"
description: "Is your phone compass stuck, jumpy, or pointing the wrong way? Learn why digital compasses drift, how to calibrate with the figure-eight method, and how to fix the most common accuracy problems."
pubDate: 2026-10-24
author: "True Online Compass"
keywords:
  - phone compass calibration
  - compass not working
  - phone compass wrong
  - calibrate compass on iphone
  - calibrate compass on android
  - compass keeps spinning
  - digital compass accuracy
  - magnetometer calibration
  - fix compass drift
  - why is my compass wrong
---

You open the compass, turn slowly, and watch the heading swing 40° the wrong way — or freeze entirely. A phone compass that points somewhere other than north is frustrating, but it is rarely broken. In most cases the **magnetometer** inside your phone has picked up a false reference from nearby metal, a magnetic case, or a stale calibration, and a short recalibration puts it right.

This guide explains what makes a digital compass drift, how to calibrate it in under a minute, and how to tell a sensor problem apart from the two other reasons a heading looks wrong: magnetic declination and local interference.

> **In short:** Open the [online compass](/compass/), tap **Enable live compass**, and move away from metal and electronics. If the heading still drifts, sweep the phone through a slow figure-eight two or three times, turning the screen to face outward as you go. If it remains wrong, remove the magnetic case and check that location and true-north settings are correct.

## How a phone compass works

Your phone has no needle. It uses a **magnetometer** — a tiny solid-state sensor that measures the direction and strength of Earth's magnetic field — alongside an **accelerometer** for tilt and a **gyroscope** for rotation. The compass app or web page fuses those readings into a heading in degrees clockwise from north.

That fusion is what makes the result convenient, and also what makes it go wrong. The magnetometer measures the *total* magnetic field around it, which includes Earth's field plus anything magnetic nearby: a speaker, a magnetic car mount, a steel desk, a laptop, a fridge door. The software cannot tell the difference between the planet and a magnet, so it averages them into a heading that is quietly incorrect.

Gyroscope help is another source of drift. When the magnetometer is noisy, the software leans on the gyroscope to smooth the movement. Gyroscopes measure rotation, not direction, so small errors accumulate over time. That is why a compass can look fine for a minute and then slowly creep away from north.

## Signs your compass needs calibrating

Not every odd reading is a calibration problem, but these symptoms are the usual giveaways:

- The heading **jumps tens of degrees** when you turn slowly.
- The dial **spins continuously** or hunts back and forth.
- The reading **drifts** while the phone is sitting still.
- The heading is consistently **30–90° off** from a known direction.
- The compass works in one room but not another.
- A map or direction app rotates in the wrong direction as you walk.

If the error is consistent in one location and disappears when you move, suspect interference. If it follows the phone everywhere, recalibrate.

## The figure-eight calibration method

This is the standard fix, and it works on iPhone, Android, and every browser-based compass:

1. **Take the phone out of any magnetic case or mount.** Folio covers with magnets, wallet cases, and car mounts are frequent culprits.
2. **Move away from metal.** Step outside or into an open part of the room, away from desks, speakers, appliances, and other phones.
3. **Open the [online compass](/compass/)** and enable the live compass.
4. **Hold the phone flat** and slowly trace a **figure-eight** in the air two or three times, rotating your wrist so the top of the phone sweeps around.
5. **Turn the phone over** and repeat the figure-eight with the screen facing down. This exercises the sensor across all three axes.
6. **Pause and check the heading.** It should settle within a second or two. If it is still unstable, wait a moment and repeat.

The motion matters more than speed. Fast shaking does not help; slow, wide arcs that point the phone in every direction do. Some compass apps show a calibration prompt or a small accuracy indicator — follow it if it appears.

### Calibrating on iPhone

The built-in Compass app can run its own calibration. Open it, and if iOS detects a problem it shows a figure-eight prompt. You can also open **Settings → Privacy & Security → Location Services → System Services → Compass Calibration** and make sure it is on. On iOS 17 and later, the Compass app can show a **true north** toggle in its settings; compare it with the [online compass](/compass/) if the two disagree.

### Calibrating on Android

Android uses Google's sensor stack, and many phones handle calibration automatically. If the reading is poor, open the **Google Maps** app, tap the location dot, and calibrate when prompted by moving the phone in a figure-eight. Some manufacturers include a hidden sensor test menu, but it is not needed for routine fixes.

## Calibration did not work — check these causes

If a figure-eight does not solve it, work through the list below in order. Most remaining problems are environmental rather than mechanical.

### 1. Magnetic interference

This is the number one cause of a wrong heading. Common offenders:

| Object | Typical effect |
| --- | --- |
| Magnetic phone case, wallet, or car mount | Large constant offset, often 30–90° |
| Laptop, speaker, or headphones nearby | Jumpy heading that changes with distance |
| Steel desk, filing cabinet, reinforced concrete | Local distortion that varies by spot |
| Car interior, especially near the dashboard | Strong distortion in every direction |
| Another phone or smartwatch | Small, variable error |
| Electric motor or transformer | Erratic readings within a metre or two |

Step two metres away and watch the heading. If it changes as you move, the environment is the problem, not the phone.

### 2. The wrong north reference

If the compass is consistently off by a fixed number of degrees that matches your region's **magnetic declination**, the sensor is likely fine. A magnetic compass points at magnetic north; most maps and GPS use true north. In New York the gap is around 13° west, in Cape Town around 25° west, and in parts of the Pacific it can exceed 20° east. That is enough to look like a broken compass.

Switch the [online compass](/compass/) to **true north** and enable location, or read our full explanation of [true north versus magnetic north and declination](/blog/magnetic-declination-explained/) to apply the correction by hand.

### 3. Tilt and grip

The heading describes the direction the **top edge of the phone** points, not where you are looking and not the camera's direction. Holding the phone at an angle, or letting the top edge point at the ground, produces a heading that feels wrong even when the sensor is accurate. Hold the device flat, top edge forward, and check again.

### 4. Interference from a case or accessory

A case with a magnetic clasp, a metal plate for a car mount, or a magnetic ring can sit millimetres from the sensor. Remove it completely — not just flip it open — and retest. This single step fixes a surprising share of "broken compass" complaints.

### 5. Software and sensor state

A phone that has been in a hot car, dropped, or running in low-power mode may report stale sensor data. Close the compass tab, lock and unlock the phone, and reopen it. Restarting the phone clears the sensor fusion state and helps if the heading has been stuck.

### 6. Location and permissions

Sensor-based heading works without GPS, but true-north correction, Qibla direction, and bearings need your position. If the compass asks for location and you decline, magnetic heading still works — but it will not match a map. Check that the browser has location permission for the site and that the page is loaded over HTTPS.

## How accurate should a phone compass be?

A healthy phone compass is typically accurate to within about **5°** when calibrated and held away from interference. Some devices manage 2–3°, and a few struggle to stay within 10°. That is good enough for walking, finding a street direction, orienting a room, or checking which way a window faces. It is not a substitute for a surveying instrument.

| Use case | Accuracy needed | Phone compass enough? |
| --- | --- | --- |
| Which way am I facing? | 10–15° | Yes |
| Finding a street or landmark | 5–10° | Yes |
| Hiking with a map | 2–5° | Yes, with true north applied |
| Aligning a satellite dish | 1–3° | Marginal — verify with another method |
| Precise surveying | < 1° | No |

A useful sanity check is the sun. The [sun position tool](/sun/) reports the sun's true azimuth for your coordinates, so you can compare it with the compass. If they disagree by a constant amount, check declination; if they disagree erratically, recalibrate or move away from interference. On a clear night you can do the same with the [sun and moon compass](/sun-moon/).

## How to test whether the fix worked

Once you have calibrated, run a quick verification:

1. Stand clear of metal and hold the phone flat.
2. Point the top edge at a known direction — a street that runs north, or the sun at a known time.
3. Compare the heading with the expected value, allowing roughly 5°.
4. Turn 90° and confirm the heading changes by about the same amount.
5. Walk a few steps and check the heading does not drift while moving.

If all five pass, the compass is working. If the heading still jumps, repeat the figure-eight and remove accessories one at a time to isolate the cause.

## When the compass is fine but the direction still feels wrong

A correct compass can still give a surprising answer, because direction is relative to place and season. Three things regularly confuse people:

- **Declination**, as covered above, shifts magnetic headings away from map bearings.
- **The sun's path** changes with latitude and season, so "the sun sets in the west" is only approximate outside the equinoxes. See [how to find direction using the sun](/blog/find-direction-using-the-sun/).
- **Street grids** are often rotated relative to true north. A road called "North Street" may run north-west.

Our guide on [what way am I facing](/blog/what-way-am-i-facing-online-compass/) covers how to translate a heading into a direction you can act on.

## Getting a bearing you can trust

Calibration makes the compass honest; a bearing makes it useful. If you want to walk toward a specific place rather than just know which way you face, open the [bearing calculator](/bearing/), enter your start and destination, and note the initial bearing. Then:

- switch the [compass](/compass/) to **true north** if you are comparing with a map;
- hold the phone flat and turn until the heading matches the bearing;
- recheck the bearing every few hundred metres, since a straight-line bearing from your origin is not the same as following a curve.

For a full walkthrough, read [how to take and follow a compass bearing](/blog/how-to-take-a-compass-bearing/).

## Frequently asked questions

**Why does my phone compass keep spinning?** A spinning or hunting dial usually means the magnetometer is picking up a moving or strong magnetic field, or the sensor needs calibration. Move away from metal and electronics, remove magnetic accessories, and trace a slow figure-eight.

**Does a phone compass need Wi-Fi or data?** No. The magnetic sensor works offline. Internet is only needed to load the page, and GPS is only needed for location-based corrections such as true north or Qibla.

**Why is my compass wrong in my car?** Car dashboards, speakers, and body panels distort the magnetic field badly. A phone compass in a vehicle is unreliable; use GPS navigation instead, which derives direction from movement rather than magnetism.

**Can a phone case really affect the compass?** Yes. Magnets in cases, mounts, and accessories sit close to the sensor and can shift the heading by tens of degrees. Remove the case entirely when testing.

**Is my phone compass broken if it is off by 15°?** Not necessarily. A 15° error can be declination, a case, or a nearby object. Compare with true north, move to an open area, and recalibrate before concluding the sensor has failed. If it remains off after all three, the sensor may be damaged.

**Why does the compass read differently indoors and outdoors?** Buildings contain steel, wiring, and appliances that warp the local magnetic field. Outdoor readings, away from vehicles and structures, are consistently more reliable.

**How often should I calibrate?** Calibrate when the heading drifts, after changing cases, after travelling, and after the phone has been near strong magnets. There is no harm in recalibrating before an important measurement.

**Does the compass work on a tablet or laptop?** Only devices with a magnetometer produce a heading. Many tablets have one; most laptops do not. If the compass reports that sensors are unavailable, the device lacks the hardware.

## The bottom line

A phone compass that points the wrong way is usually a calibration or interference problem, not a dead sensor. Remove magnetic accessories, step away from metal, trace a slow figure-eight, and check whether the remaining error is simply declination. With those steps, most headings settle within about 5° — accurate enough to answer "which way am I facing?" and to follow a bearing outdoors.

Ready to test it? Open the [online compass](/compass/), enable the live compass, and run through the calibration once before you rely on it. If you are new to the tool, start with the [complete guide to using an online compass](/blog/how-to-use-online-compass/).
