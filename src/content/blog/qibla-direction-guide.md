---
title: "Qibla Direction: How to Find the Qibla From Anywhere on Earth"
description: "A complete guide to finding the Qibla direction — why it is a great-circle bearing rather than a straight line on a map, how to use an online Qibla finder, how to handle declination and moving transport, and the mistakes that send people the wrong way."
pubDate: 2026-10-25
author: "True Online Compass"
keywords:
  - qibla direction
  - qibla finder
  - how to find the qibla
  - direction to kaaba
  - qibla from my location
  - qibla compass
  - great circle bearing qibla
  - qibla while travelling
  - qibla direction in hotel
  - quibla finder online
---

Five times a day, Muslims around the world turn toward the same point on the map. That point is the **Kaaba** in Makkah, and the direction toward it from wherever you happen to be standing is the **Qibla**. In a mosque it is obvious: the mihrab, the niche in the wall, marks it. Everywhere else — a hotel room in Tokyo, a hospital bed in Toronto, a campsite in Patagonia — you have to work it out.

The good news is that the Qibla is pure geometry. It does not depend on a special instrument, a particular school of thought, or a subscription. Given your coordinates, it is a calculable bearing. This guide explains what the Qibla really is, why it is not the direction you would draw on a flat map, how to find it in seconds with the [online Qibla finder](/qibla/), and how to put the answer into practice at home, on the road, and in the awkward cases that trip people up.

> **In short:** The Qibla is the initial great-circle bearing from your position to the Kaaba at 21.4225° N, 39.8262° E. Open the [Qibla finder](/qibla/), allow location access or type your coordinates, and it returns the bearing in degrees and as a compass point. Then either turn until the [online compass](/compass/) reads that bearing, or — for a fixed room — mark the direction once and keep it.

## What the Qibla is — and what it is not

The word *qibla* means "the direction one faces." In Islamic practice it is the direction of the Kaaba, the cube-shaped structure at the centre of the Masjid al-Haram in Makkah. The Qur'an instructs believers to turn their faces toward it in prayer, and it has served as the common orientation for Muslim communities since the early years of Islam.

Three clarifications save a lot of confusion:

- **The Qibla is a direction, not a place you must see.** You do not need a view of Makkah, and you do not need to know the distance. You need the bearing.
- **It is a bearing from *your* position.** Two people in the same city usually share a nearly identical Qibla, but the number changes as you move. A person in London and a person in New York face very different directions.
- **It is a great-circle bearing, not a flat-map line.** This is the single most important technical point in this article. The shortest path between two points on a sphere curves when drawn on a flat map, and the initial direction of that path is what a compass shows.

On the obligation itself, scholars generally emphasise turning toward the Kaaba with the best available knowledge and within one's capability. Precision is encouraged where it is easy to obtain, but the religion is not built on millimetre accuracy. If you have made a sincere, reasonable effort and your bearing is correct to within a few degrees, you have done what is asked. The anxiety that drives people to re-check a hotel room five times is usually unnecessary — though a quick check is cheap, and this guide makes it quick.

## Why the Qibla is not a straight line on a map

Open a standard web map, draw a straight line from Sydney to Makkah, and you will get a direction that is wrong by a wide margin. The reason is map projection: flat maps stretch and tear the curved surface of the Earth, so a ruler-straight line on paper is not the shortest path on the globe.

The shortest path on a sphere is a **great circle** — a circle on the surface whose centre is the centre of the Earth. The equator is a great circle; so is every meridian. Aircraft follow great circles because they are the shortest route, which is why a flight from Sydney to the Middle East may pass closer to the pole than you expect.

For the Qibla, what matters is the **initial bearing** of that great circle: the compass direction you would set off on from your current position. As you travel along the path, the bearing slowly changes, but for prayer you only need the first step — the direction from where you are standing.

### The formula, for the curious

The initial great-circle bearing from a point at latitude φ₁, longitude λ₁ to the Kaaba at φ₂ = 21.4225°, λ₂ = 39.8262° is:

```
θ = atan2( sin(Δλ) · cos(φ₂),
           cos(φ₁) · sin(φ₂) − sin(φ₁) · cos(φ₂) · cos(Δλ) )
```

Here Δλ is the difference in longitude, and the result is measured clockwise from true north. You do not need to evaluate this by hand — the [Qibla finder](/qibla/) runs exactly this calculation in your browser — but knowing it is spherical trigonometry, not a lookup table, explains why the answers can feel counter-intuitive.

### What the numbers actually look like

Here are real great-circle bearings from a spread of cities. They were calculated from the Kaaba's coordinates and rounded to the nearest degree. Notice how few of them point "south-east" in the tidy way people often assume.

| City | Qibla bearing | Nearest compass point | Distance to Makkah |
| --- | --- | --- | --- |
| London, UK | 119° | East-south-east | ≈ 4,790 km |
| Paris, France | 119° | East-south-east | ≈ 4,500 km |
| Berlin, Germany | 137° | South-east | ≈ 4,130 km |
| Istanbul, Türkiye | 152° | South-south-east | ≈ 2,400 km |
| Moscow, Russia | 176° | Almost due south | ≈ 3,820 km |
| Dubai, UAE | 258° | West-south-west | ≈ 1,630 km |
| Delhi, India | 267° | Almost due west | ≈ 3,840 km |
| Jakarta, Indonesia | 295° | West-north-west | ≈ 7,920 km |
| Beijing, China | 279° | West | ≈ 7,390 km |
| Tokyo, Japan | 293° | West-north-west | ≈ 9,470 km |
| Sydney, Australia | 277° | Almost due west | ≈ 13,240 km |
| New York, USA | 58° | East-north-east | ≈ 10,310 km |
| Toronto, Canada | 55° | North-east | ≈ 10,500 km |
| Los Angeles, USA | 24° | North-north-east | ≈ 13,420 km |
| Mexico City, Mexico | 47° | North-east | ≈ 13,650 km |
| Cape Town, South Africa | 23° | North-north-east | ≈ 6,560 km |
| São Paulo, Brazil | 69° | East-north-east | ≈ 10,600 km |
| Reykjavík, Iceland | 106° | East-south-east | ≈ 6,520 km |
| Anchorage, USA | 351° | Almost due north | ≈ 10,780 km |
| Tromsø, Norway | 154° | South-south-east | ≈ 5,540 km |

Two rows are worth pausing on. From **Anchorage**, the Qibla is almost due north — because the shortest path to Makkah runs over the Arctic. From **Moscow**, it is almost due south. Neither is a mistake. On a globe, north from Alaska and south from western Russia can both lead to the Arabian Peninsula. This is exactly the kind of result that a flat-map guess gets spectacularly wrong.

The distances are great-circle distances, which is why they are slightly shorter than road or flight distances. They are useful context, not part of the prayer itself.

## Finding your Qibla with the online tool

The [Qibla finder](/qibla/) is the fastest route from "where am I?" to "which way do I face?" It runs entirely in your browser, so your coordinates are not sent to a server.

1. **Open the finder.** Load [/qibla/](/qibla/) on the phone you will use. No app or account is required.
2. **Share your location, or enter coordinates.** Tapping the location button uses your device's GPS. If you would rather not share your position, type latitude and longitude manually — the [GPS coordinates tool](/location/) can give you a precise pair if you have a location but not the numbers.
3. **Read the bearing.** The tool returns the great-circle direction in degrees from **true north**, along with the compass point and the distance to Makkah.
4. **Turn toward it.** Open the [online compass](/compass/) and rotate until your heading matches the Qibla bearing. Make sure the compass is set to **true north**, since that is the reference the Qibla figure uses.
5. **Calibrate if the reading drifts.** Hold the phone flat, away from metal and magnets, and trace a figure-eight if the heading wanders. The [calibration guide](/blog/phone-compass-calibration-fix/) covers the fixes in detail.

If you are using a physical compass rather than a phone, you have one extra step: your compass needle points to **magnetic north**, while the Qibla bearing is measured from **true north**. Convert the bearing before you turn, or use a compass with an adjustable declination scale. The section below explains how.

## Qibla, true north, and magnetic declination

This is where many people lose a few degrees — or a lot more. The Qibla finder returns a bearing from true north. A traditional compass needle points to magnetic north. The angle between the two is **magnetic declination**, and it varies by location.

The conversion is:

**Magnetic bearing = true bearing − declination**

with east declination positive and west declination negative. Suppose the Qibla from your position is 119° true and the local declination is 13° west. Then the magnetic bearing is 119° − (−13°) = **132°**. If you simply steered 119° on the compass, you would be 13° off — enough to be noticeable over a room, and enough to matter in a large prayer hall or an open field.

A few practical notes:

- **Declination can be large.** In parts of Canada, South Africa, and the southern Indian Ocean it exceeds 20°. That is a real error, not a rounding detail.
- **It changes with place and time.** Do not reuse a correction from another city, and do not trust a value printed on an old map. Use a current value for your exact position.
- **The online compass can do the sum for you.** Enable location and switch it to true north, and it applies the correction from a current magnetic model. The Qibla bearing and the compass heading then share the same reference.
- **The sun is a useful sanity check.** The [sun position tool](/sun/) reports the sun's true azimuth. If the Qibla and the sun's position make sense together, your compass setup is probably sound.

For the full explanation of east versus west declination, including the add/subtract rule and a table of common errors, read [Magnetic Declination Explained](/blog/magnetic-declination-explained/).

## How to face the Qibla in a fixed room

Once you have the bearing, the practical challenge is often not the number but the room. Here is a method that takes a minute and gives you a permanent answer.

1. **Find the bearing at the room's location**, using the [Qibla finder](/qibla/) and your coordinates.
2. **Choose a reference wall or corner** and work out the angle between the Qibla and that reference. For example, if the Qibla is 119° and the wall you consider "north" runs 0°, the Qibla lies 119° clockwise from that wall.
3. **Mark it.** A small piece of tape on the floor, a prayer rug aligned once and left in place, or a discreet arrow on a wall is enough. In a hotel, a pencil mark on a sticky note costs nothing and removes the daily guesswork.
4. **Verify once with the compass**, standing away from the TV, fridge, door frame, and bed frame. Large metal objects and speakers distort a phone magnetometer, and a hotel room is full of both.
5. **Write the number down.** "Qibla 119°" on the note is more useful than a vague arrow, because you can re-check it later or apply the declination correction if you switch instruments.

If you travel often, keep a small note on your phone with the Qibla bearings for the cities you visit most. It is a thirty-second job with the finder and saves the same uncertainty every trip.

## Qibla while travelling: hotels, transport, and unfamiliar cities

Travel introduces three variables: an unfamiliar room, a moving vehicle, and a compass that may have been recalibrated by the journey. Handle them in that order.

### In a hotel or temporary room

Do not assume the previous occupant's arrow, the bedside "Qibla" sticker, or the direction of the building's façade is correct. Hotels sometimes install a single arrow for the whole building, which is close enough in a small city but wrong in a large one. Use your own coordinates and the finder. If the room has a window and you know which way it faces from the sun, that is an independent check worth making — the [sun tool](/sun/) can confirm the window's true azimuth.

### On a plane, train, or bus

The Qibla changes continuously as you move, and a phone compass in a metal vehicle is often unreliable. The practical approach is to recalculate at the time of prayer using your current coordinates — the finder accepts manual input, so you can enter the position shown by the vehicle's map or your phone's GPS. If the vehicle is turning, face the best estimate you can and do not agonise: the direction is approximate in a moving frame, and the intention is what the situation allows.

On a plane, the heading and the Qibla are both changing, and the aircraft's own systems may interfere with a magnetometer. Many travellers simply face the best available estimate after checking the finder. If you can, ask the crew or use the in-flight map for coordinates, then compute. The important thing is not to let an impossible standard make prayer difficult.

### When you cross the date line or travel far

Crossing hemispheres does not change the method, but it changes the answer dramatically. A bearing you memorised at home can be 90° or more wrong at your destination. Recalculate on arrival. The great-circle path can also pass over polar regions, which is why high-latitude bearings surprise people — as Anchorage and Tromsø show in the table above.

## High latitudes and the antipode

Two edge cases are worth knowing about, not because they are common but because they explain otherwise baffling compass readings.

**High latitudes.** Close to the poles, the shortest path to Makkah can run almost over the top of the world. From Anchorage, the Qibla is roughly 351° — nearly due north — even though Makkah is far to the south-east on a flat map. From northern Norway, the answer can swing sharply as you move east or west. Use the finder with precise coordinates rather than extrapolating from a neighbouring city.

**The antipode.** There is a point on the globe diametrically opposite Makkah, in the South Pacific. At that exact point, every direction is equally valid for a great circle to Makkah, so the initial bearing is undefined. In practice nobody prays exactly there, but if you are sailing the southern Pacific and the number seems erratic, it is geography, not a broken app.

**The poles themselves.** At the North or South Pole, "north" and "south" lose their usual meaning and every direction is south (or north). A compass is not the right instrument there. The finder will still produce a bearing from the coordinates, but local practice and expert guidance are the sensible authorities.

## Common Qibla mistakes

Most wrong Qibla readings come from a short list of avoidable errors.

**Using a flat-map bearing.** A straight line on a web map is not a great-circle bearing. Use a proper calculator, not a ruler on a screenshot.

**Forgetting declination.** A true bearing applied directly to a magnetic needle is off by the local declination — potentially 20° or more. Convert, or use true-north mode on the [online compass](/compass/).

**Trusting the phone case.** Magnetic cases, car mounts, and even some watch bands distort the magnetometer. Remove them or move the phone clear before taking a reading.

**Standing next to metal.** A steel door, a fridge, a radiator, or a reinforced wall can bend the field. Step into the open, or at least away from the largest metal object in the room.

**Assuming the mosque next door is exact.** Community mihrabs are usually carefully set, but they are not infallible, and a mihrab in one city may have been set for another. In a new place, verify with your own coordinates.

**Confusing the Qibla with the direction of sunrise or the "east" of a map.** The Qibla is a specific great-circle bearing, not a cardinal direction. In some cities it is nearly north; in others it is nearly west.

**Re-checking until doubt wins.** If your method is sound — correct coordinates, true north, calibrated sensor, away from metal — you have done the work. A few degrees of uncertainty is within normal instrument error and within the flexibility the tradition allows.

## A quick reference: Qibla bearing vs. compass point

If you only remember one thing, remember that the bearing is a number between 0° and 359° measured clockwise from **true north**. The compass point is a convenience, not a substitute for the number.

| Bearing range | Compass point |
| --- | --- |
| 337.5°–22.5° | North |
| 22.5°–67.5° | North-east |
| 67.5°–112.5° | East |
| 112.5°–157.5° | South-east |
| 157.5°–202.5° | South |
| 202.5°–247.5° | South-west |
| 247.5°–292.5° | West |
| 292.5°–337.5° | North-west |

A bearing of 119° falls in the south-east band, and more precisely east-south-east. A bearing of 295° is west-north-west. The table is useful for a quick sanity check: if the finder says 119° and you find yourself facing south-west, something in your setup is wrong.

## Frequently asked questions

**Do I need to face the exact Kaaba, or just its direction?** You need to face its direction, to the best of your ability. Scholars generally allow for the accuracy a person can reasonably achieve. A correct bearing from good coordinates is more than sufficient.

**Can I use a phone compass for the Qibla?** Yes. A phone magnetometer is accurate to a few degrees when calibrated and kept away from metal, which is plenty for prayer. Use the [Qibla finder](/qibla/) for the bearing and the [online compass](/compass/) to turn to it.

**Why is the Qibla different from the direction on Google Maps?** Google Maps draws a projected flat map. A straight line on that projection is not the great-circle initial bearing. The difference is largest at long distances and high latitudes.

**Why does my Qibla point north when Makkah is south-east?** Because the shortest path to Makkah runs over the Arctic from your position. This is normal in Alaska and parts of northern Canada and Russia.

**Does the Qibla change over time?** The Kaaba's coordinates are fixed, and so is the great-circle bearing from a fixed point. What changes is *your* position. If you move, recalculate.

**What if I am in a moving vehicle?** Recalculate with your current coordinates at prayer time and face the best estimate you can. Do not let a moving frame become a reason to delay prayer.

**Is it better to use true north or magnetic north?** Use true north for the Qibla bearing, then convert to magnetic if you are using a magnetic compass. The [online compass](/compass/) can handle the conversion when location is enabled.

**Do I need an internet connection?** The bearing calculation itself is local once the page has loaded. Location lookup and the page assets need a connection the first time, but the geometry does not depend on a live server.

## The bottom line

The Qibla is one of the oldest shared orientations in the world, and also one of the simplest to calculate: a great-circle bearing from your coordinates to a fixed point in Makkah. The two things that matter are using your **actual position** and measuring from **true north**. Get those right, and every other detail — declination, compass point, hotel-room arrow — falls into place.

Open the [Qibla finder](/qibla/), allow location or type your coordinates, note the bearing, and turn. If you want to understand the compass side more deeply, read [how to take a compass bearing](/blog/how-to-take-a-compass-bearing/) and [Magnetic Declination Explained](/blog/magnetic-declination-explained/). And if your phone's heading is behaving strangely, the [calibration guide](/blog/phone-compass-calibration-fix/) will sort it out before it costs you a degree.
