---
title: "Find Your Location With a Compass: Back Bearings and Resection Explained"
description: "A complete field guide to fixing your own position without GPS — how back bearings work, how to run a two-point and three-point resection, how to judge the accuracy of the result, and the mistakes that put you hundreds of metres off."
pubDate: 2026-10-26
author: "True Online Compass"
keywords:
  - resection compass
  - back bearing
  - find your location with a compass
  - three point resection
  - triangulation with a compass
  - reciprocal bearing
  - navigation without gps
  - compass navigation
  - map and compass skills
  - cocked hat navigation
---

Most compass questions are about *direction*: which way is north, which way is the trailhead, which way is the Qibla. This one is different. It is about **position** — the other half of navigation, and the half that people abandon the moment their phone battery drops.

If you can see two or three identifiable features on the horizon, a compass alone can tell you where you are standing to within a few dozen metres on a map. The technique is called **resection**, and it rests on one small piece of arithmetic that almost everyone gets wrong at least once: the **back bearing**.

This guide covers the whole method — the arithmetic, the geometry that decides whether your answer will be good or useless, the difference between resection and the things people usually call triangulation, and what to do when you have only one landmark or no map at all. The [online compass](/compass/) and the [bearing calculator](/bearing/) handle the numbers; the judgement is yours.

> **In short:** Take a compass bearing to a known landmark, add or subtract 180° to get the **back bearing**, and draw that line from the landmark on your map. Do it with a second landmark and the two lines cross at your position. A third line turns the crossing into a small triangle whose size tells you how much to trust the answer. Best results come from landmarks 60°–120° apart, taken while standing still, with the compass away from metal and set to the same north reference as your map.

## The back bearing: one sum, three ways to get it wrong

A bearing is measured clockwise from north. If a landmark lies at 052° from you, then you lie at 052° + 180° = 232° from the landmark. That reversed angle is the back bearing, also called the reciprocal bearing. It is the direction the landmark would read if it could take a bearing on you.

The arithmetic is small enough to do in your head:

- **Under 180°:** add 180. A bearing of 052° becomes 232°.
- **180° or more:** subtract 180. A bearing of 311° becomes 131°.
- **Exactly 180°:** the answer is 0° (due north), not 180° again.

Written as a formula that works for any input:

```
back bearing = (bearing + 180) mod 360
```

The `mod 360` simply rolls the answer back into the 0°–359° range, so 311° + 180° = 491° becomes 131°. A quick reference table covers the common cases:

| Forward bearing | Back bearing |
| --- | --- |
| 0° (north) | 180° (south) |
| 30° | 210° |
| 45° (north-east) | 225° (south-west) |
| 90° (east) | 270° (west) |
| 120° | 300° |
| 135° (south-east) | 315° (north-west) |
| 180° (south) | 0° (north) |
| 225° (south-west) | 45° (north-east) |
| 270° (west) | 90° (east) |
| 315° (north-west) | 135° (south-east) |
| 350° | 170° |

Three mistakes account for nearly every bad back bearing.

**Adding 180 to a bearing already over 180.** This gives a number above 360, which people then either misread or clamp to 360. Subtract instead.

**Mixing true and magnetic.** If your map is oriented to true north and your compass reads magnetic, the 180° reversal is still valid, but the azimuth you plot will be wrong by the local declination. Convert once, deliberately, and write down which reference you used. The [declination guide](/blog/magnetic-declination-explained/) has the full add/subtract rule; most phone compasses can be switched to true north and skip the problem entirely.

**Reversing the wrong end of the line.** In resection you stand at the *unknown* end and sight the *known* end. So the line is drawn *from the landmark* toward you — that is, along the back bearing. Drawing the forward bearing from the landmark is the single most common resection error, and it is invisible on the page: the line looks perfectly reasonable, just in the wrong place.

A worked conversion makes the order of operations concrete. Suppose the magnetic declination is 12° east and your compass reads 064° to a church tower:

1. True bearing = 064° + 12° = **076°**.
2. Back bearing = 076° + 180° = **256°**.
3. The line you draw on the map starts at the church tower and runs along **256°**.

Converting the back bearing instead gives 244° magnetic, then 244° + 12° = 256° true — the same answer, because a constant offset commutes with a 180° flip. That is convenient, but it also means a sign error can hide until the lines fail to meet. Pick one order and stick to it.

## What resection actually does

Here is the geometry in one sentence: **each bearing to a known landmark constrains you to a line, and two lines constrain you to a point.**

That is all there is to it. You are not measuring distance, and you are not measuring signal travel time. You are intersecting two directional observations.

The corollary matters just as much: **the quality of the fix depends entirely on the angle between the lines.** If two landmarks are close together in the sky, their back-bearing lines cross at a shallow angle, and a two-degree reading error can slide your position a long way along the pair. If they are roughly at right angles, the same two-degree error barely moves the intersection.

### Resection, intersection, and triangulation

These three words get used interchangeably, and they are not the same thing. It is worth keeping them straight, because the difference decides which method you reach for.

| Technique | What you know | What you find | Minimum observations |
| --- | --- | --- | --- |
| **Resection** | Two or three known landmarks | Your own position | 2 bearings |
| **Intersection** | Two known observation points | The position of an unknown object | 2 bearings from 2 places |
| **Triangulation** | One measured baseline | Distances and positions by geometry | 1 measured length + angles |
| **Dead reckoning** | A start point, a heading, a distance | An estimated position | 1 bearing + 1 distance |

Resection is the one that saves you when you are the thing that is lost. Intersection is what a survey team does to map a distant peak. Triangulation is the surveyor's classical method, and it needs a baseline you have actually measured. Dead reckoning is what you do between fixes — and it is why the fix matters, since every step taken on a dead-reckoned heading compounds its error.

## A two-point resection, step by step

Imagine you are on open moorland with a paper map, a baseplate compass, and no phone signal. You can see a church spire to your east-south-east and a radio mast on a ridge to your north-west, and both are marked on the map. You have no idea where on the moor you stand.

### Step 1: Prepare the compass and yourself

Stand still. Hold the compass flat, level, and away from your body. Take off gloves with magnetic closures, move away from fence wire, a car, a steel gate, or a phone in your chest pocket. If you are using a phone, hold it flat and keep the top edge pointed at the target; the [online compass](/compass/) shows a live heading, and the [calibration guide](/blog/phone-compass-calibration-fix/) covers the figure-eight routine if the reading drifts.

Decide your north reference now. If the map has a magnetic north diagram, you can work in magnetic and adjust later, but it is far easier to set the compass to **true north** and keep everything in one frame.

### Step 2: Take the first bearing

Sight the church spire, aligning the direction-of-travel arrow (or the top edge of the phone) with it. Read the bearing without moving the compass: let us say **052°**.

Repeat the measurement two or three times. If the readings scatter by more than about 3°, your hand is unsteady, the target is indistinct, or something magnetic is nearby. A tight cluster of readings is worth more than a single confident one.

### Step 3: Convert to a back bearing

052° + 180° = **232°**. Write it down. Do not carry the number in your head, and do not convert it twice.

### Step 4: Plot the line from the landmark

Place the compass on the map with its centre mark on the church spire. Rotate the whole compass (not the bezel) until the meridian lines line up with the map's north lines — or, with a phone, place a straight edge through the landmark at 232° using the map's north as zero. Draw the line.

Every point on that line is a place you could be standing while seeing the spire at 052°.

### Step 5: Repeat with the second landmark

The radio mast gives **311°**. Back bearing: 311° − 180° = **131°**. Plot from the mast along 131°.

### Step 6: Read the intersection

The two lines cross at one point — that is your fix. Mark it, note the time, and use it as the starting point for your next leg. Two-point resection is quick and, when the geometry is good, accurate to better than a hundred metres on a 1:25,000 map.

### The numbers, side by side

| Landmark | Observed bearing | Back bearing | Line drawn |
| --- | --- | --- | --- |
| Church spire | 052° | 232° | From the spire, 232° |
| Radio mast | 311° | 131° | From the mast, 131° |
| Angle between bearings | 101° | — | Good geometry |

That 101° separation is close to ideal. Landmarks 60°–120° apart give a clean, well-conditioned cross. Landmarks 20° apart give a long, thin sliver of uncertainty that can be a kilometre wide in real terrain.

## Three-point resection and the triangle of error

Add a third landmark and something useful happens: in practice the three lines almost never meet at a single point. They form a small triangle — traditionally called the **cocked hat** — and that triangle is a visual error bar.

- **Tiny triangle, sides roughly equal:** your readings are consistent and the fix is good. Take the centre of the triangle.
- **Large triangle:** something systematic is wrong. Suspect the north reference first, then the arithmetic, then the target identification.
- **Triangle elongated along one direction:** usually a misidentified landmark. One wrong object rotates exactly one line, and the triangle stretches along the axis that line controls.
- **Triangle where all three lines miss in the same rotational sense:** a classic sign of a constant offset — a declination applied in the wrong direction, or a map whose north lines you misread. A pure rotation error leaves the size of the triangle roughly constant however far you are from the landmarks, which is a strong hint.

With a third bearing you can also sanity-check by eye. Stand at the fix you plotted, look at the three landmarks, and ask whether the angles between them match what you see. If the church and the mast appear about 100° apart from the plotted point and only 60° apart in the field, the plot is wrong — regardless of how tidy the lines look.

### A three-point example

You are somewhere in a valley with a 1:25,000 map, and you can identify three features: a trig pillar on a summit, a bridge over a river, and a comms mast. All bearings below are true.

| # | Landmark | Bearing | Back bearing | Separation from previous |
| --- | --- | --- | --- | --- |
| 1 | Trig pillar | 042° | 222° | — |
| 2 | Bridge | 118° | 298° | 76° |
| 3 | Comms mast | 340° | 160° | 138° (or 222° the long way) |

The three back bearings — 222°, 298°, and 160° — enclose a small triangle near the valley floor. The fix is the triangle's centre. Note the separation between landmarks 2 and 3: 138° is a good spread, while 1 and 2 at 76° is also healthy. This is the configuration you want to design for when you choose which features to sight.

## Choosing landmarks that give you a good fix

Not all landmarks are equal. The bearing is only as trustworthy as the thing you pointed at.

**Prefer sharp, unambiguous points.** A church spire, a trig pillar, a radio mast, a water tower, a distinctive summit cairn, the end of a pier, a lighthouse, a bridge's centre line. These have a single defensible centre.

**Avoid anything wide or vague.** A long ridge, a forest edge, a whole village, "the hill over there" — each of these has metres or kilometres of ambiguity built in before you even raise the compass.

**Spread them out.** Aim for 60°–120° between landmark pairs. Two landmarks at right angles is the textbook case; 90° is optimal for a two-point fix because the error ellipse becomes a circle.

**Do not pick a near and a far landmark in the same direction.** A fence post 30 m away and a mountain 8 km away, both on a bearing of 090°, are a single line, not two.

**Watch for the collinearity trap.** If all your landmarks lie on one line — a row of pylons along a valley, or features strung along a ridge — their back bearings all pass through nearly the same point and the fix is worthless in the direction of the line. This is the geometry that fools people most often, because the lines do cross, and the crossing looks decisive.

**Check what moved.** Reservoirs, quarries, new buildings, and felled plantations change a map, and a landmark that no longer exists is worse than no landmark at all.

## How accurate is your fix?

A bearing error of a few degrees becomes a positional error proportional to distance. The relationship is simple: **position error ≈ distance × tan(angle error)**.

| Distance to landmark | 2° error | 5° error | 10° error |
| --- | --- | --- | --- |
| 500 m | 17 m | 44 m | 88 m |
| 1 km | 35 m | 87 m | 176 m |
| 2 km | 70 m | 175 m | 353 m |
| 5 km | 175 m | 437 m | 882 m |
| 10 km | 349 m | 874 m | 1,760 m |

Two conclusions follow, and they are the practical heart of resection.

**Distance is a multiplier on your mistakes.** A 3° slip reading a summit 500 m away costs about 26 m. The same slip reading a mountain 10 km away costs about 520 m. Whenever you have a choice, favour closer landmarks — provided you can identify them precisely.

**Aim for precision in the reading, not in the drawing.** A 2° bearing error is roughly the width of your thumbnail at arm's length. Any error in the plot itself is tiny by comparison: at 1:25,000, one millimetre on paper is 25 m on the ground, and most people plot to within half a millimetre.

Realistic outcomes: with a good phone magnetometer, careful sighting, and well-chosen landmarks, expect 50–150 m. With a cheap baseplate compass, no declination correction, and a hazy horizon, expect several hundred metres — still enough to relocate yourself on a path junction or a ridge, which is usually all you need.

## One landmark, no map, and other awkward cases

### You can only see one landmark

One bearing gives you a line, and a line is not a point. But a line plus *any* other constraint is a fix:

- **A linear feature.** If you know you are somewhere on a trail, a river bank, a ridge line, or a fence, plot the back bearing and see where it crosses that feature. This is the fastest fix in real hillwalking and needs no third landmark.
- **A known distance.** If you have paced, timed, or estimated the distance from a known point, mark that distance along the line.
- **A contour or elevation.** If your altimeter reads 480 m and the map shows the 480 m contour crossing your bearing line twice, you have narrowed the answer to two candidates — and the terrain will usually decide between them.

### You have no map at all

Without a map, resection in the surveyor's sense is impossible: there is nothing to draw lines on. What still works is **terrain association plus a bearing**. Take bearings to two features you can name from local knowledge, and use the angles between them to match the view against a mental or photographed panorama. If you know the bearing from a village to the summit you can see, the back bearing tells you the direction from the summit to the village, and you can reason about where you must be relative to both.

In practice, the no-map fix is usually: establish north, take one bearing to a known feature, follow the line until terrain association confirms it. A compass is a direction instrument; without a map it narrows the possibilities rather than solving them.

### You are in a city

Urban resection is easier than you would think, because cities are full of well-defined vertical edges. Church towers, monument spires, clock towers, and tall distinctive buildings substitute neatly for hills. Use the street grid as your linear feature: a bearing to a tower plus the knowledge that you are on a particular avenue already gives a fix. Beware of steel-framed buildings, parked cars, and phone mounts, all of which bend a magnetometer; step into an open junction before reading.

### You have a phone with GPS

Then use it — but use it properly. A GPS fix is the fastest cross-check available, and the [GPS coordinates tool](/location/) turns your position into decimal degrees you can drop onto a map. The reason to keep the compass skill is not nostalgia: batteries fail, screens crack, canyons and dense forest block signals, and a fix you did not verify is a fix you cannot trust when the screen goes dark.

### You are using the sun as a reference

If you know the time and your approximate position, the sun's azimuth is a known bearing. A shadow tip gives you a rough line to compare against, and the [sun position tool](/sun/) reports the true azimuth for any coordinates. This is a last-resort check rather than a precision method — a minute of time error shifts the sun's azimuth by about a quarter of a degree, and your latitude estimate shifts it further — but it will catch a 90° blunder.

## Using the online tools for the same job

The mathematics of resection is identical to the mathematics of a bearing calculator, just run in reverse. Here is how to use this site's tools when you have coordinates but no paper map.

1. **Get a rough idea of your position** — a grid reference from memory, a trailhead, a junction, a lake you are beside. It does not need to be accurate.
2. **Take a bearing to a landmark** with the [online compass](/compass/), set to true north. Write down the number and the landmark.
3. **Look up the landmark's coordinates** — from a map, a gazetteer, or a previous trip.
4. **Run the [bearing calculator](/bearing/)** from the landmark's coordinates to your rough position. The initial bearing it returns should match your observed back bearing.
5. **Iterate.** If the calculator says 246° and you observed 232°, your assumed position is wrong by about 14° of azimuth — shift your guess and try again. Two landmarks converge in a couple of iterations, which is perfectly adequate for navigation.
6. **Cross-check the distance** the calculator reports. If it claims 1.8 km to a landmark that is obviously 300 m away, the coordinates are for a different object with a similar name.

That iteration loop is not a substitute for a map and a straight edge when you have both. It is a way to get a real fix from a phone alone, and it is surprisingly effective because you are comparing angles rather than trusting a single number.

## Ten mistakes that ruin a resection

1. **Drawing the forward bearing from the landmark** instead of the back bearing. The line looks fine and is 180° wrong.
2. **Forgetting declination** between a magnetic compass and a true-north map — a 15° offset that quietly rotates every line.
3. **Plotting from the wrong landmark.** Two summits with similar names, or two masts on the same ridge, will do it.
4. **Sighting along the wrong edge of the compass.** The direction-of-travel arrow, the sighting notch, and the top edge of the phone all give slightly different answers if you are careless.
5. **Reading the bezel instead of the needle index.** On a baseplate compass, the number under the index line is the bearing; the bezel numbers are a convenience, not the measurement.
6. **Choosing landmarks too close together.** Under about 30° apart, a two-point fix can be off by a kilometre.
7. **Taking bearings while walking.** A moving observer, a swinging arm, and a tilting compass produce a scatter that looks like precision when averaged badly.
8. **Standing beside metal.** A gate, a car, a pylon, a steel watch strap, or a magnetic phone case can bias a magnetometer by tens of degrees.
9. **Trusting a single reading.** Take two or three; the spread tells you how much the answer is worth.
10. **Ignoring the triangle's shape.** A cocked hat that is large and consistent is information, not noise. Investigate it before you commit to the centre.

## A five-minute practice drill

Resection is a skill that disappears without use. This drill works in a park, on a walk, or in a city, and it needs nothing but a phone and a map printout.

1. Pick a bench or a junction you can identify on the map. That is the answer key.
2. Standing at it, take bearings to three landmarks at least 500 m away and well spread.
3. Convert each to a back bearing on paper — no calculator.
4. Plot all three and mark the triangle.
5. Compare the triangle's centre to the known point. Note the error in metres.
6. Repeat at a second spot with landmarks at a poor angle — deliberately close together. Compare the two errors.

The comparison is the lesson. The same hands, the same compass, the same day, and yet one fix is three times better than the other, purely because of geometry. Once you have felt that difference, you will never again accept a fix from two landmarks stacked on the same horizon without looking for a third.

## Frequently asked questions

**Is resection the same as triangulation?** Not quite. Resection fixes *your* position from known landmarks. Triangulation fixes positions using measured baselines and angles. In everyday speech the words blur, but the distinction matters when you are reading instructions: resection needs no measured distance at all.

**Do I need three landmarks?** No. Two give a fix. A third gives you a check on that fix, and the check is worth the extra minute when the terrain is confusing or the landmarks are far away.

**What if the lines form a big triangle?** Assume a systematic error before you assume bad luck. Check, in order: the north reference, the back bearings, the landmark identification, then the plotting. If the triangle is large but roughly equilateral, suspect a constant offset applied in the wrong direction.

**Can I do this with a phone compass?** Yes, and the phone has one advantage: it can display true bearings directly, removing the declination step. Its disadvantage is interference — magnetic cases, mounts, and nearby steel. Calibrate, step clear of metal, and take two readings. The [calibration guide](/blog/phone-compass-calibration-fix/) covers the failure modes.

**How far away should landmarks be?** Far enough to be precisely identifiable, close enough that a two-degree error stays small. As a rule, 500 m to 5 km is the sweet spot. Beyond 10 km, a small reading slip becomes a large positional error, unless the landmark is needle-sharp and the air is clear.

**Does the back bearing change if I move?** Yes. The bearing to a landmark changes as you walk, which is why a fix is a snapshot, not a permanent answer. Fix, walk a leg, fix again. This is exactly how compass navigation is meant to be used, and it is why the [bearing guide](/blog/how-to-take-a-compass-bearing/) pairs naturally with this one.

**Why do my three lines meet at a point — is that suspicious?** Slightly. Perfect concurrence is rare in the field; a small triangle is the honest result. If three lines meet exactly, check that you have not accidentally reused one bearing or copied a number.

**What if I have only a compass and no landmarks I can name?** Then you cannot resection. Establish north, take a bearing to the most distinctive feature you can see, and move along that line until terrain association confirms where you are. A compass narrows the search; it does not replace the map.

## The bottom line

Resection turns a compass from a direction-finder into a position-finder, and it costs nothing but a little arithmetic. Take a bearing, add or subtract 180°, draw the line from the landmark, and repeat. Two lines put you on the map; three lines tell you how much to believe it.

The two things that decide whether the answer is good are **geometry** and **reference frame**. Choose landmarks 60°–120° apart, favour nearby features you can identify without doubt, and keep your compass and your map on the same north. Get those right and the triangle will be small, the fix will be honest, and the moment your phone dies will stop being a navigation emergency.

If you are new to bearings, start with [how to take and follow a compass bearing](/blog/how-to-take-a-compass-bearing/); if your readings wander, the [calibration guide](/blog/phone-compass-calibration-fix/) is the first thing to read. And when you are ready to practise, open the [online compass](/compass/) and the [bearing calculator](/bearing/) side by side and run the drill above once. Five minutes now is worth a great deal more than five minutes of uncertainty later.
