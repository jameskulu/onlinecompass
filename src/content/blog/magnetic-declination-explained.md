---
title: "Magnetic Declination Explained: True North vs Magnetic North"
description: "Magnetic declination is the gap between true north and magnetic north. Learn how to find it, when to add or subtract it, and how to keep bearings accurate."
pubDate: 2026-10-23
author: "True Online Compass"
keywords:
  - magnetic declination
  - true north vs magnetic north
  - what is magnetic declination
  - declination east vs west
  - how to calculate magnetic declination
  - compass declination
  - magnetic variation
  - agonic line
  - map declination
---

Your compass needle and your map rarely agree exactly. One points at **magnetic north**, a moving spot in the Arctic; the other is drawn around **true north**, the geographic pole. The angle between them is called **magnetic declination**, and it is the single most common reason a correctly read compass still sends people the wrong way.

This guide explains what declination is, how to find it for your location, which way to add or subtract it, and how an online compass removes the arithmetic entirely.

> **In short:** Magnetic declination is the angle between true north and magnetic north. Convert a magnetic heading to a true heading by adding east declination or subtracting west declination: **true = magnetic + declination**, with east positive and west negative. The [online compass](/compass/) can apply the correction automatically when you enable location and switch to true north.

## What is magnetic declination?

Magnetic declination — also called **magnetic variation** in marine and aviation navigation — is the horizontal angle between the direction a compass needle points and the direction of true north at your position.

It is measured in degrees, and it can lean either way:

- **East declination** means magnetic north lies east of true north.
- **West declination** means magnetic north lies west of true north.

The size of the angle depends entirely on where you are standing. Near the **agonic line**, the line where the two norths coincide, declination is zero. In other places it reaches 20° or more, which is enough to put you hundreds of metres off course over a short walk.

Declination is not a fixed property of the Earth. It changes slowly as the planet's magnetic field shifts, and it can change abruptly over small areas where local geology distorts the field.

## True north, magnetic north, and grid north

Three different "norths" show up in navigation, and mixing them up causes most bearing errors.

| North reference | What it is | Where you meet it |
| --- | --- | --- |
| **True north** | The direction of the geographic North Pole, along Earth's axis | Most maps, GPS, sun position, Qibla, satellite aiming |
| **Magnetic north** | The direction a magnetometer or compass needle points | Phone compasses, baseplate compasses, magnetic declination charts |
| **Grid north** | The direction of the vertical grid lines on a projected map | UTM and other grid maps, some topographic sheets |

On most web maps, north is true north. On a paper map, check the margin: many topographic maps print a small **declination diagram** showing true north, magnetic north, and grid north, together with the current declination and its annual change. If the map is several years old, that annual figure matters.

Grid north is a separate correction called **grid convergence**. It is usually small, but on large-scale projected maps or far from the central meridian it can be worth accounting for. For everyday phone navigation, true north versus magnetic north is the correction that matters.

## East versus west declination: which way do you add?

The sign convention trips people up, so keep one rule in mind:

**True bearing = magnetic bearing + declination**, where east declination is positive and west declination is negative.

That gives two practical cases:

- **East declination:** add it. A magnetic heading of 90° with 12° east declination is a true heading of 102°.
- **West declination:** subtract it. A magnetic heading of 90° with 13° west declination is a true heading of 77°.

Here is the same idea in a table:

| Declination | Magnetic heading | True heading | What happened |
| --- | --- | --- | --- |
| 12° east | 90° | 102° | Added 12° |
| 13° west | 90° | 77° | Subtracted 13° |
| 0° | 90° | 90° | No correction |
| 20° west | 180° | 160° | Subtracted 20° |

Going the other way — from a true bearing on a map to a heading you follow on a magnetic compass — reverse the operation:

**Magnetic bearing = true bearing − declination**

Suppose your map shows the destination at a true bearing of 180° and the local declination is 13° west. The magnetic heading to steer is 180° − (−13°) = **193°**. If you simply walked on 180° magnetic, you would drift west of the intended line.

If you use the [online compass](/compass/) in true north mode, it performs this conversion for you. You can then match the dial to the true bearing directly, without doing the sum by hand.

## How to find the declination for your location

There are three reliable ways to get the number.

### 1. Let the online compass calculate it

The [live compass tool](/compass/) includes a **true north** mode. Tap **Use location for declination**, allow location access, and the page applies the World Magnetic Model to your coordinates. The heading shown in true north mode is already corrected, so it lines up with maps and with bearings from the [bearing calculator](/bearing/).

This is the simplest option while you are outdoors, and it uses the same model that official navigation systems rely on. If you would rather not share GPS, the [GPS coordinates tool](/location/) can give you a position you can enter manually where a coordinate field is available.

### 2. Read the declination diagram on a map

Paper topographic maps usually print a declination diagram in the margin or legend. It shows:

- the angle between true north and magnetic north;
- whether the declination is east or west;
- the year the value was measured;
- the annual change, often in minutes of arc per year.

Add or subtract the annual change for the number of years since the map was published. A map printed a decade ago with a change of 6′ per year could be about 1° out of date — small, but worth knowing if you are navigating precisely.

### 3. Use an official magnetic model

National geophysical agencies publish the World Magnetic Model and declination calculators that return the current value for any latitude and longitude. These are the authoritative source when precision matters, and they are updated periodically as the field changes. For most walkers and drivers, the live correction in the compass is more than sufficient.

## A rough guide to declination around the world

The values below are illustrative for the mid-2020s. They are useful for understanding the scale of the correction, not for navigation — always use the live value for your exact position.

| Location | Approximate declination |
| --- | --- |
| London, United Kingdom | ≈ 0° |
| New York, United States | ≈ 13° west |
| Los Angeles, United States | ≈ 12° east |
| Toronto, Canada | ≈ 11° west |
| Sydney, Australia | ≈ 12° east |
| São Paulo, Brazil | ≈ 23° west |
| Cape Town, South Africa | ≈ 25° west |

Notice how quickly the picture changes. A compass used in London is nearly aligned with true north, while the same compass in Cape Town is more than 20° out. This is why memorising a single declination value is a bad idea: the correction belongs to a place and a date, not to a device.

## Why declination changes over time

Earth's magnetic field is generated by movement in the molten outer core, and the magnetic poles drift as that flow changes. The north magnetic pole has wandered from the Canadian Arctic toward Siberia over the past century, moving tens of kilometres a year in recent decades. The field also has local irregularities caused by magnetic minerals in the ground.

Two consequences follow:

- **Old declination values go stale.** A figure printed on a 1990s map may be several degrees out today.
- **The correction is location-specific.** Two towns an hour apart can have noticeably different declination, especially at high latitudes.

Official models such as the World Magnetic Model are revised every five years to keep pace, with out-of-cycle updates when the field changes faster than expected. The online compass ships with a current model, so its correction stays aligned with the present field rather than a historical average.

## How much error does declination actually cause?

A few degrees sounds harmless until you multiply it by distance. The lateral error grows with every kilometre you walk.

| Declination error | Drift after 1 km | Drift after 5 km |
| --- | --- | --- |
| 5° | ≈ 87 m | ≈ 436 m |
| 10° | ≈ 174 m | ≈ 868 m |
| 15° | ≈ 259 m | ≈ 1.3 km |
| 20° | ≈ 342 m | ≈ 1.7 km |

For a stroll to a beach or a landmark in sight, an uncorrected compass is usually good enough. For a forest trail, an open moor, a night crossing, or any route where you cannot see the destination, a 10° error can be the difference between arriving and becoming lost.

The error also compounds. Every time you take a fresh bearing from the map and forget the correction, you reset the same offset. Following a series of legs with a consistent declination error can bend a route into a curve rather than a straight line.

## When declination matters most

- **Map-and-compass navigation.** Any time you transfer a bearing between a map and a magnetic compass.
- **Hiking and orienteering.** Especially on featureless terrain, in fog, or at night.
- **Surveying and positioning.** Where a few degrees translates into a meaningful offset.
- **Solar and satellite aiming.** Panels and dishes are usually aligned to true south or a true azimuth, so the magnetic reading needs correcting.
- **Qibla direction.** The [Qibla finder](/qibla/) returns a true bearing to Makkah; follow it on a compass set to true north.
- **Aviation and marine navigation.** Runways and charts often use magnetic headings, which is why variation is printed prominently on charts.

For a quick "which way is the sea?" check, declination barely matters. For anything you will follow for kilometres, it does.

## Common declination mistakes

**Using a map bearing directly on a magnetic compass.** This is the classic error. Either correct the bearing or switch the compass to true north.

**Assuming declination is the same everywhere.** It is not. Recalculate when you travel, especially between regions with different magnetic geology.

**Trusting an old map's printed value.** Check the year and apply the annual change, or use a current model.

**Reversing east and west.** Write the rule down if you navigate rarely: east is positive, west is negative, true = magnetic + declination.

**Confusing declination with inclination.** Declination is horizontal — the gap between magnetic and true north. **Inclination**, or dip, is vertical — how steeply the field points into the ground. Phone compasses use inclination internally to compensate for tilt, but it is not the correction you apply to a bearing.

**Blaming the compass for local interference.** A magnetic case, a car mount, or a steel table can produce an error that looks like declination but changes when you move. Step into the open and recalibrate before adjusting any numbers.

## How the online compass handles declination

The [online compass](/compass/) shows both references so you can work in whichever one suits the task:

- **Magnetic north** matches what a traditional compass needle reads.
- **True north** applies the declination for your location so the heading matches a map.

When you tap **Use location for declination**, the tool computes the correction from your coordinates using the built-in magnetic model. The heading, the dial, and any bearing you compare it against then share the same reference. If the reading looks slightly off against a map, check which mode you are in before assuming the sensor is wrong.

You can cross-check the result in daylight against the [sun position tool](/sun/), which reports the sun's true azimuth. If the compass and the sun agree, your declination correction and calibration are both behaving.

## Frequently asked questions

**Is magnetic declination the same as magnetic variation?** Yes. "Declination" is the more common term on land, while "variation" is traditional in marine and aviation navigation. They describe the same angle.

**Why doesn't my compass point to true north?** A magnetometer follows Earth's magnetic field, which points toward magnetic north rather than the geographic pole. The difference is declination, and it has to be applied separately.

**Is east declination positive or negative?** In the convention used here, east is positive. True heading equals magnetic heading plus declination, so an east declination increases the number and a west declination decreases it.

**Does GPS use true north?** GPS gives you a position and a course over ground referenced to true north. That is why a phone's GPS course and its magnetic compass can disagree until declination is applied.

**How often should I update the declination?** Use a current value whenever you navigate. For paper maps, apply the annual change from the print date. For the phone compass, enabling location pulls a current correction automatically.

**What is the agonic line?** It is the line where magnetic declination is zero, so magnetic north and true north coincide. It shifts over time as the magnetic field changes.

**Can declination be negative?** Yes. A negative declination is simply west declination. The sign is a convention, so always check whether a source states east/west explicitly.

## The bottom line

Magnetic declination is a small angle with an outsized effect. Learn one rule — true equals magnetic plus declination, east positive — and check the value for your location before you trust a bearing. Or skip the arithmetic entirely: open the [online compass](/compass/), enable location, switch to true north, and let it apply the correction for you. For the full setup and calibration walkthrough, read the [complete online compass guide](/blog/how-to-use-online-compass/), and for turning a direction into a number you can follow, see [how to take a compass bearing](/blog/how-to-take-a-compass-bearing/).
