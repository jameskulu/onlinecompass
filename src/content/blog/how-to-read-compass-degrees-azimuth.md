---
title: "How to Read Compass Degrees: The Complete 360° Azimuth & Bearing Guide"
description: "Master reading compass degrees with confidence. Learn 360° azimuth angles, convert cardinal directions to exact degrees, calculate back-bearings, and master quadrant vs full-circle notation."
pubDate: 2026-11-07
author: "True Online Compass"
keywords:
  - how to read compass degrees
  - online compass reading
  - compass degrees online
  - 360 degree compass online
  - compass direction degrees
  - azimuth vs bearing
  - how to calculate back bearing
  - compass cardinal points to degrees
  - quadrant bearing to azimuth
  - online compass with directions
---

When most people glance at a compass, they look for the familiar letters: **N**, **S**, **E**, and **W**. But if you tell a pilot, surveyor, or wilderness navigator to "head Northeast," you give them an angle with a massive 45-degree margin of error. Walk 10 kilometers with a 5-degree mistake, and you will miss your destination by nearly a kilometer.

To navigate with real-world precision, you must speak the universal mathematical language of navigation: **compass degrees**.

Every modern navigational tool—from a liquid-filled sighting compass to our [live 360° online compass](/)—divides the horizon into **360 equal angular degrees**, running clockwise starting from North at 0.0°.

This guide covers everything you need to master compass degree readings: the sexagesimal 360° circle geometry, how to convert every cardinal point to exact degrees, the difference between azimuths and quadrant bearings, the mathematical back-bearing formula, and how to read degrees accurately on any mobile browser.

> **In short:** A compass circle has **360 degrees ($360^\circ$)**. North is **$0^\circ$ (or $360^\circ$)**, East is **$90^\circ$**, South is **$180^\circ$**, and West is **$270^\circ$**. Degrees increase clockwise. To find your direction, point your device at your target: the number aligned with the top index marker is your **azimuth bearing**. To return to your starting point, calculate your **back-bearing**: add $180^\circ$ if your bearing is under $180^\circ$, or subtract $180^\circ$ if it is over $180^\circ$. You can test this live with our [free online compass](/) and verify courses with our [bearing calculator](/bearing/).

---

## 1. The Geometry of the 360-Degree Compass Circle

Why does a compass have 360 degrees instead of 100 or 400?

The division of the horizon into 360 parts is a legacy of ancient Babylonian astronomy dating back over 4,000 years. Babylonian mathematicians operated on a **sexagesimal (base-60)** numeral system. They observed that the sun appeared to travel through the constellations against the celestial sphere by approximately one degree each day, completing a cycle in roughly 360 days.

```
                   000° / 360° (True North)
                          ▲
                          │
             315° NW      │      045° NE
                  \       │       /
                   \      │      /
                    \     │     /
270° West ───────────┼────┼────┼─────────── 090° East
                    /     │     \
                   /      │      \
                  /       │       \
             225° SW      │      135° SE
                          │
                          ▼
                     180° South
```

Beyond astronomical tradition, 360 is mathematically superior for navigation because it is a **superior highly composite number**. It possesses **24 distinct integer divisors**:

$$2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72, 90, 120, \text{ and } 180$$

This allows navigators to bisect the horizon into halves ($180^\circ$), quadrants ($90^\circ$), octants ($45^\circ$), and sixteenths ($22.5^\circ$) without generating cumbersome recurring decimal fractions.

### Degrees, Minutes, and Seconds (DMS)
For finer subdivisions, each single degree ($1^\circ$) is divided into **60 arcminutes** ($60'$), and each arcminute is divided into **60 arcseconds** ($60''$):

$$1^\circ = 60' = 3,600''$$

On Earth's surface at the equator, $1^\circ$ of latitude corresponds to roughly **111.1 kilometers (69 statute miles)**, 1 arcminute equals **1 nautical mile (1.852 km)**, and 1 arcsecond equals approximately **30.8 meters (101 feet)**.

---

## 2. Converting Cardinal Points to Compass Degrees

A standard nautical compass rose divides the 360° circle into 16 named points. Each point is separated from its neighbors by exactly **22.5 degrees** ($360^\circ / 16 = 22.5^\circ$).

Here is the authoritative conversion chart between cardinal directions, abbreviations, and degrees:

| Abbreviation | Full Cardinal Name | Exact Azimuth Degree | Angular Span / Bracket | Quadrant |
| :--- | :--- | :--- | :--- | :--- |
| **N** | **North** | **0.0° / 360.0°** | 348.75° – 011.25° | Cardinal |
| **NNE** | North-Northeast | 22.5° | 011.25° – 033.75° | Principal Intercardinal |
| **NE** | **Northeast** | **45.0°** | 033.75° – 056.25° | Intercardinal |
| **ENE** | East-Northeast | 67.5° | 056.25° – 078.75° | Principal Intercardinal |
| **E** | **East** | **90.0°** | 078.75° – 101.25° | Cardinal |
| **ESE** | East-Southeast | 112.5° | 101.25° – 123.75° | Principal Intercardinal |
| **SE** | **Southeast** | **135.0°** | 123.75° – 146.25° | Intercardinal |
| **SSE** | South-Southeast | 157.5° | 146.25° – 168.75° | Principal Intercardinal |
| **S** | **South** | **180.0°** | 168.75° – 191.25° | Cardinal |
| **SSW** | South-Southwest | 202.5° | 191.25° – 213.75° | Principal Intercardinal |
| **SW** | **Southwest** | **225.0°** | 213.75° – 236.25° | Intercardinal |
| **WSW** | West-Southwest | 247.5° | 236.25° – 258.75° | Principal Intercardinal |
| **W** | **West** | **270.0°** | 258.75° – 281.25° | Cardinal |
| **WNW** | West-Northwest | 292.5° | 281.25° – 303.75° | Principal Intercardinal |
| **NW** | **Northwest** | **315.0°** | 303.75° – 326.25° | Intercardinal |
| **NNW** | North-Northwest | 337.5° | 326.25° – 348.75° | Principal Intercardinal |

> **Pro Tip on 3-Digit Notation:** In formal maritime navigation, aviation, and cartography, azimuths are always written with three digits using leading zeroes: $005^\circ$ instead of $5^\circ$, and $045^\circ$ instead of $45^\circ$. This prevents disastrous miscommunication over radio frequencies (such as mistaking $45^\circ$ for $145^\circ$ or $245^\circ$).

---

## 3. Four Core Navigational Concepts: Heading, Bearing, Course, and Azimuth

Beginner navigators often use "heading," "bearing," "course," and "azimuth" interchangeably, but they represent four mathematically distinct concepts:

### 1. Heading (HDG)
The horizontal direction in which your body, vehicle, or phone is pointed right now. If your car is physically pointed toward $082^\circ$, your heading is $082^\circ$, even if your vehicle is sliding sideways on ice toward $110^\circ$.

### 2. Bearing (BRG)
The horizontal angle from your current position toward a distant target, landmark, or destination. If you are standing in a field and look at a distant mountain peak due East, the bearing to that mountain is $090^\circ$, regardless of which direction your feet are facing.

### 3. Course (CRS)
The planned, intended horizontal direction of travel across the terrain. Course is what you draw on a map before you set off. Due to crosswinds, water currents, or rough terrain detour, your actual heading may deviate from your planned course.

### 4. Azimuth (AZ)
The precise angular measurement of any celestial body or ground landmark measured clockwise from True North (or Magnetic North) along the horizon plane from $000^\circ$ to $359.9^\circ$. For instance, our [solar tracking tool](/sun/) calculates the sun's live solar azimuth angle.

---

## 4. Full-Circle Azimuths vs. Quadrant Bearings

In navigation, you will encounter two primary formats for recording angles: **Full-Circle Azimuths** and **Quadrant Bearings** (often used in land deed surveys, civil engineering, and legal boundary descriptions).

```
   Quadrant I (NE): N [θ] E         Quadrant IV (NW): N [θ] W
   Azimuth = θ                       Azimuth = 360° - θ
                \                          /
                 \                        /
                  \                      /
       ────────────┼────────────────────┼────────────
                  /                      \
                 /                        \
                /                          \
   Quadrant III (SW): S [θ] W       Quadrant II (SE): S [θ] E
   Azimuth = 180° + θ               Azimuth = 180° - θ
```

### Full-Circle Azimuths (The Modern Standard)
- Expressed as a single angle from $000^\circ$ to $360^\circ$ measured clockwise from North.
- **Examples:** $042^\circ$, $138^\circ$, $220^\circ$, $315^\circ$.

### Quadrant Bearings (The Surveyor's Standard)
- Expressed as an angle between $0^\circ$ and $90^\circ$ measured from either **North** or **South**, turning toward either **East** or **West**.
- Format: `[North or South] [Angle ≤ 90°] [East or West]`.

### Conversion Formulas Between Azimuth and Quadrant Bearings

| Azimuth Range | Quadrant Name | Quadrant Bearing Formula | Example Azimuth | Equivalent Quadrant Bearing |
| :--- | :--- | :--- | :--- | :--- |
| **000° to 090°** | Northeast (NE) | **$\text{N } [\text{Azimuth}] \text{ E}$** | 048° | **N 48° E** |
| **090° to 180°** | Southeast (SE) | **$\text{S } [180^\circ - \text{Azimuth}] \text{ E}$** | 135° | **S 45° E** |
| **180° to 270°** | Southwest (SW) | **$\text{S } [\text{Azimuth} - 180^\circ] \text{ W}$** | 215° | **S 35° W** |
| **270° to 360°** | Northwest (NW) | **$\text{N } [360^\circ - \text{Azimuth}] \text{ W}$** | 310° | **N 50° W** |

If you are examining old property survey maps or legal deed documents, knowing this conversion allows you to plug the boundaries directly into our [coordinate course tool](/bearing/).

---

## 5. The Back-Bearing (Reciprocal) Formula

One of the most vital safety skills in outdoor navigation is calculating a **back-bearing** (also known as a **reciprocal bearing** or **reverse azimuth**).

A back-bearing is the exact opposite direction ($180^\circ$ away). If you hike into a wilderness valley along a bearing of $065^\circ$, your return bearing back to your trailhead campsite is the reciprocal.

```
 Forward Bearing: 065°                      Back-Bearing: 245°
         ▲                                         ▲
        /                                         /
       /  (Angle < 180°)                         /  (Angle ≥ 180°)
      /   Formula: + 180°                       /   Formula: - 180°
     /                                         /
    • ───────────────────                     • ───────────────────
   Trailhead                                Campsite
```

### The $\pm 180^\circ$ Mathematical Rule

$$\text{Back-Bearing} = 
\begin{cases} 
\text{Forward Bearing} + 180^\circ, & \text{if Forward Bearing } < 180^\circ \\
\text{Forward Bearing} - 180^\circ, & \text{if Forward Bearing } \ge 180^\circ 
\end{cases}$$

### Practical Examples:
- **Example A (Forward bearing is $040^\circ$):**  
  Since $040^\circ < 180^\circ$:  
  $$\text{Back-Bearing} = 40^\circ + 180^\circ = \mathbf{220^\circ}$$
- **Example B (Forward bearing is $295^\circ$):**  
  Since $295^\circ \ge 180^\circ$:  
  $$\text{Back-Bearing} = 295^\circ - 180^\circ = \mathbf{115^\circ}$$
- **Example C (Forward bearing is $180^\circ$ - due South):**  
  $$\text{Back-Bearing} = 180^\circ - 180^\circ = \mathbf{000^\circ} \text{ (due North)}$$

Using back-bearings is also how you verify landmarks when conducting [triangulation resection](/blog/find-your-location-with-a-compass-resection/) or checking whether you are maintaining a [straight line through dense forest](/blog/how-to-walk-a-straight-line-compass/).

---

## 6. How to Read Degrees on an Online Compass (Step-by-Step)

Reading compass degrees on your phone using our [online compass tool](/) is fast, frictionless, and requires no downloaded apps. Here is the exact field protocol:

### Step 1: Open the Tool & Hold Phone Flat
Open `trueonlinecompass.com` in Safari, Google Chrome, or Samsung Internet. Hold your device **flat horizontally in your open palm**, parallel to the ground (chest height). If the phone is tilted excessively, dip error can distort readings. You can verify your surface angle with our [online bubble level](/level/).

### Step 2: Calibrate Your Sensor
If your phone has not been calibrated recently, perform the classic "figure-8" wave in the air for 5 seconds. This forces the triaxial magnetometer chip through Earth's magnetic flux sphere, allowing your phone's operating system to strip out hard-iron distortions from internal battery and speaker magnets. (Read our [calibration guide](/blog/phone-compass-calibration-fix/) for more details).

### Step 3: Align the Top Lubber Line with Your Target
Turn your whole body until the top edge of your phone points directly at the landmark, mountain pass, or door you want to measure. 

### Step 4: Read the Active Heading Index
Look at the top center of the compass display:
- **The Large Numeric Readout:** Shows your precise heading in degrees to a decimal place (e.g., **`127.4°`**).
- **The Cardinal Tag:** Displays the closest cardinal point (e.g., **`SE`**).
- **The Needle:** The red pointer indicates **North**. If the red needle points straight up to the top mark, you are facing North ($000^\circ$). If it points to the right ($090^\circ$), North is to your right.

### Step 5: Toggle True North vs. Magnetic North
Topographic maps and GPS coordinates use **True North**, while your phone's raw magnetometer detects **Magnetic North**. Tap the **"True North"** button on our tool. The software automatically queries the NOAA World Magnetic Model (WMM) and applies your local [magnetic declination](/blog/magnetic-declination-explained/), aligning your degree readout directly with satellite imagery and paper map grids.

---

## 7. Mils vs. Degrees: The Military Navigation System

While civilian navigators divide the circle into 360 degrees, NATO military forces and artillery units divide the compass into **mils** (short for milliradians):

```
       360° Civilian Circle                6,400 Mil NATO Circle
              0° / 360°                               0 / 6400 mils
                 ▲                                         ▲
                 │                                         │
        270° ────┼──── 090°                      4800 ─────┼───── 1600
                 │                                         │
                 ▼                                         ▼
                180°                                     3200 mils
```

### Why Do Armed Forces Use Mils?
A circle has $2\pi$ radians ($\approx 6,283.185$ milliradians). NATO standardizes this by rounding the circle up to exactly **6,400 NATO mils** (the Soviet/Russian military uses 6,000 mils, and Sweden historically used 6,300 mils).

Mils provide an extraordinary practical shortcut called the **Mil-Relation Formula**:

$$\text{Width} = \frac{\text{Range} \times \text{Angle in Mils}}{1,000}$$

At a distance of **1,000 meters**, an angle of **1 mil** corresponds almost exactly to **1 meter of width** on the ground. 

For instance, if an artillery spotter observes that a 10-meter-wide military truck subtends an angle of 5 mils in their binoculars, they calculate the distance instantly in their head:

$$\text{Range} = \frac{10 \text{ meters} \times 1,000}{5 \text{ mils}} = \mathbf{2,000 \text{ meters}}$$

To convert between NATO mils and civilian compass degrees:

$$\text{Mils} = \text{Degrees} \times \frac{6,400}{360} = \text{Degrees} \times 17.7778$$

$$\text{Degrees} = \text{Mils} \times \frac{360}{6,400} = \text{Mils} \times 0.05625$$

---

## 8. Five Common Mistakes When Reading Compass Degrees

Even experienced hikers and boaters make simple mathematical errors when reading degrees under fatigue or poor weather conditions. Avoid these five classic pitfalls:

### 1. Reading the "South" Needle (180° Inversion Error)
Traditional magnetic needles have two ends: a red magnetized tip (pointing North) and a silver/black tail (pointing South). In dim light or panic, navigators frequently read the tail instead of the pointer, sending them walking in the exact opposite direction ($180^\circ$ off course). On our [online compass](online-compass), the illuminated HUD clearly labels North in bright red to prevent this.

### 2. Forgetting Local Magnetic Declination
Assuming that "Magnetic North" equals "Map North" will drift you significantly off course. In places like Washington State (declination $\approx +15^\circ \text{ East}$) or Maine (declination $\approx -16^\circ \text{ West}$), failing to adjust your degree readings will steer you nearly 300 meters off target for every single kilometer traveled.

### 3. Holding the Phone at a Steep Tilt
When a phone is tilted upward like a camera, the 3D magnetometer sensor reads vertical gravity vectors rather than purely horizontal flux lines. Always hold your device flat in your palm, or place it on a level surface.

### 4. Electromagnetic Interference from Cases and Vehicles
If your phone is in a case with a magnetic kickstand, MagSafe ring, or steel credit card holder, your degree reading can easily be thrown off by $10^\circ$ to $45^\circ$. Likewise, taking a compass reading while sitting inside an automobile, leaning against structural steel handrails, or standing near high-voltage power lines will warp the magnetic field. Step 2 meters away from steel objects before reading degrees.

### 5. Sighting Parallax
When sighting a distant mountain peak across your phone, holding the device off-center from your eye line introduces angular parallax. Hold the phone directly along your body's centerline (navel to nose) and rotate your entire hips toward the target, rather than twisting just your wrist.

---

## 9. Interactive Tools to Practice Reading Degrees

Sharpen your navigational accuracy with our free, browser-based geodetic suite:

- **[Live Online Compass](/)** — Practice reading 360-degree headings, 16 cardinal points, and True vs. Magnetic North in real time.
- **[Full-Screen Compass](/compass/)** — Distraction-free, responsive 360° compass HUD ideal for field orientation.
- **[Online Bubble Level & Inclinometer](/level/)** — Check that your surface or sighting plane is perfectly level down to 0.1°.
- **[GPS Speedometer](/speedometer/)** — Monitor ground speed (km/h, mph, knots) alongside your travel heading.
- **[Sun and Moon Compass](/sun-moon/)** — Cross-reference your compass degree reading with live celestial solar and lunar azimuths.
- **[Great-Circle Bearing Calculator](/bearing/)** — Calculate exact forward bearings, back-bearings, and Haversine distances between any two GPS coordinates.

---

## Frequently Asked Questions

### Which degree is North, South, East, and West on a compass?
North is **0°** (or **360°**), East is **90°**, South is **180°**, and West is **270°**. Degrees progress clockwise around the circle.

### Why do some compasses show 0° to 360°, while others show 0° to 90°?
Full 0°–360° compasses use the **azimuth system**, which is the universal standard for hiking, aviation, maritime travel, and GPS mapping. Compasses that show 0°–90° in four quadrants use the **quadrant bearing system**, primarily used by civil land surveyors and legal property deeds (e.g., N 45° E or S 30° W).

### How do I calculate a back-bearing if my heading is 220°?
Because $220^\circ$ is greater than or equal to $180^\circ$, subtract $180^\circ$:  
$$220^\circ - 180^\circ = \mathbf{040^\circ}$$  
Your back-bearing is **040° (Northeast)**.

### Can an online compass give me exact degrees without downloading an app?
Yes. Modern web browsers (such as Google Chrome, Apple Safari, and Samsung Internet) support the W3C Device Orientation API. By accessing your phone's built-in triaxial magnetometer and accelerometer sensors, our [online compass tool](/) calculates live heading degrees at 60 frames per second directly in your browser.

### What is the difference between 0° and 360° on a compass?
Geometrically, **0° and 360° point in the exact same direction: True North**. Zero degrees represents the starting point of the circle, while 360 degrees represents the completion of a full rotation. Digital compasses typically display North as either 0° or 360°.

