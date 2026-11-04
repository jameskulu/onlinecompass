---
title: "Why GPS Altitude Is Inaccurate: GPS Elevation vs. Barometric Altimeters Explained"
description: "Why does your phone altitude disagree with trail markers? Learn the physics of WGS84 ellipsoidal height vs mean sea level geoid, satellite VDOP geometry, and barometric altimeter math."
pubDate: 2026-11-04
author: "True Online Compass"
keywords:
  - why is gps altitude inaccurate
  - gps elevation vs barometric altimeter
  - height above ellipsoid vs mean sea level
  - wgs84 ellipsoid vs geoid
  - vertical dilution of precision vdop
  - how accurate is phone altitude
  - barometric formula elevation
  - qnh altimeter setting explained
  - orthometric height formula
  - gps altitude error margin
---

You hike to a mountain pass and reach a granite summit marker with a bronze geodetic benchmark plaque that reads: **"Elevation 2,450 m (8,038 ft) Above Sea Level"**. 

You pull out your smartphone, open a navigation app or check your [live GPS coordinates](/location/), and look at the altitude readout. It reads **2,492 meters**—a discrepancy of 42 meters (138 feet). Worse, if you stand completely still for five minutes, the number fluctuates up and down between 2,475 m and 2,510 m.

Why is satellite navigation—which can pinpoint your horizontal latitude and longitude to within the width of a sidewalk—so notoriously unreliable when measuring height? And why do high-end outdoor smartwatches, aircraft, and trail GPS units still rely on centuries-old atmospheric barometric pressure to measure altitude?

The answer lies in the fundamental geometry of orbital satellites, the complex gravitational shape of Earth, and the contrasting physics of **satellite trilateration** versus **barometric altimetry**.

> **In short:** Raw GPS does not measure elevation above sea level; it measures height above a smooth mathematical shape called the **WGS84 Reference Ellipsoid**. True geographic elevation (Orthometric Height, $H$) is height above Earth's true gravitational sea level (the **Geoid**, $N$), governed by the formula **$H = h - N$**. Furthermore, because all GPS satellites sit in the sky above you with none beneath your feet, vertical satellite geometry (**VDOP**) is inherently 1.5× to 3× less accurate than horizontal geometry. You can verify your real-time coordinates and raw altitude using our [GPS Location Tool](/location/).

---

## 1. The Geodetic Puzzle: What is "Sea Level"?

The biggest reason GPS altitude disagrees with topographic maps and trail markers is that **satellites and cartographers do not measure from the same baseline**.

When an official trail sign says a mountain peak is 2,450 meters above sea level, it refers to **Orthometric Height ($H$)**—the vertical distance above the theoretical surface that the ocean would take if allowed to flow beneath the continents through hypothetical frictionless canals.

However, satellites orbiting 20,200 kilometers above the planet have no concept of ocean water or local gravity. They measure from a geometric model called the **Reference Ellipsoid**.

```
                           Topographic Earth Surface (Mountain Peak)
                                            /\
                                           /  \
                                          /    \
       Orthometric Height (H) ---------> |      | <------- Ellipsoidal Height (h)
       [Height above Geoid / MSL]        |      |          [Raw GPS Altitude]
                                         |      |
  - - - - - - - - - - - - - - - - - - - -+------+ - - - - - - - - - - - - - - - -
  Geoid / Mean Sea Level (MSL)           |  N   | <------- Geoid Undulation (N)
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+~~~~~~+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  WGS84 Reference Ellipsoid
  ===============================================================================
```

### The Three Surfaces of Earth:
To understand elevation, geodesists distinguish between three separate surfaces:

1. **The Topographic Surface:** The actual physical ground we stand on (mountains, valleys, cliffs, ocean floors).
2. **The WGS84 Reference Ellipsoid:** A smooth, mathematically perfect, squashed sphere (an oblate spheroid) chosen by the United States Department of Defense as the coordinate framework for GPS. It has an equatorial radius of $6,378,137.0\text{ meters}$ and a flattening factor of $1 / 298.257223563$.
3. **The Geoid (Mean Sea Level):** An equipotential gravitational surface of Earth's gravity field. Because Earth's interior is inhomogeneous—with dense basalt oceanic plates, lighter granite continental crust, and deep molten mantle plumes—gravity is not uniform. The geoid undulates, dipping into gravitational troughs and swelling over dense subterranean mass concentrations.

### The Fundamental Geodetic Height Equation
The mathematical relationship connecting all three values is:

$$h = H + N$$

Rearranging to solve for real-world elevation above sea level:

$$H = h - N$$

Where:
* **$h$ = Ellipsoidal Height:** The raw vertical distance calculated by your phone's GPS chip above the WGS84 geometric ellipsoid.
* **$H$ = Orthometric Height:** The true elevation above Mean Sea Level (MSL) printed on topographic maps.
* **$N$ = Geoid Undulation (Separation):** The vertical distance between the reference ellipsoid and the geoid at your specific coordinates.

### The Real-World Impact of Geoid Undulation ($N$)
Geoid separation is not a minor millimeter adjustment; it varies globally from **$-106\text{ meters}$ to $+85\text{ meters}$**:
* In the **Indian Ocean south of Sri Lanka**, the geoid dips into a massive gravitational anomaly ($N \approx -105\text{ meters}$). If you stood at the water's edge on a beach with a raw GPS receiver without geoid correction, your phone would read an altitude of **$-105\text{ meters}$ below sea level** while ocean waves lapped at your toes!
* In the **North Atlantic and Europe**, the geoid bulges up to **$+50\text{ to }+70\text{ meters}$** above the ellipsoid.
* In the **Rocky Mountains of North America**, $N$ typically ranges from **$-10\text{ to }-35\text{ meters}$**.

Modern high-end mapping applications incorporate an embedded gravity lookup table (such as the **EGM96** or **EGM2008 Earth Gravitational Model**) to subtract $N$ automatically. But low-power mobile APIs, raw HTML5 Geolocation queries, and fitness trackers often return raw uncorrected ellipsoidal height ($h$), immediately injecting a **$10\text{ to }50\text{ meter}$ baseline error**.

---

## 2. Satellite Geometry: Why Vertical (VDOP) is Worse Than Horizontal (HDOP)

Even when geoid undulation is perfectly accounted for, satellite GPS altitude remains inherently **2 to 3 times less accurate than horizontal latitude and longitude**.

This limitation is not a defect of your phone's antenna; it is an unavoidable law of celestial geometry known as **Dilution of Precision (DOP)**.

```
       Horizontal Geometry (HDOP):               Vertical Geometry (VDOP):
       Satellites surround you from               All satellites are overhead;
       North, South, East, and West.              NONE can be below your feet!

                • Sat 1                                   • Sat 1
                                                             |
                                                             v
       • Sat 2    +    • Sat 3                     • Sat 2   +   • Sat 3
               (You)                                       (You)
                                                  =============================
                • Sat 4                                [ Solid Earth Blocks ]
                                                       [ Lower Satellites   ]
        Wide angular spread creates                Only half-sphere coverage;
        tight horizontal fix (±3 m).               poor vertical baseline (±10 m).
```

### The Missing Lower Hemisphere
To calculate a 3D position fix, a GPS receiver requires line-of-sight signals from at least **four satellites** to solve for four mathematical unknowns: Latitude ($X$), Longitude ($Y$), Altitude ($Z$), and Receiver Clock Bias ($t$).

* **For Horizontal Position (Latitude & Longitude):** Satellites are scattered all around the horizon: north, south, east, and west. When a receiver measures signals from opposing compass directions, positional uncertainty along the horizontal plane cancels out cleanly, yielding a low **Horizontal Dilution of Precision ($\text{HDOP} < 1.5$)**.
* **For Vertical Position (Altitude):** Earth is a solid rock sphere with a radius of $6,371\text{ kilometers}$. You can **never** receive a satellite signal originating from beneath your feet. Every available satellite is positioned in the upper hemisphere above the horizon plane.

Because all distance vectors originate from above, the intersection of the satellite timing spheres forms a vertically elongated ellipse of uncertainty. 

Mathematically:

$$\text{VDOP} \approx 1.5 \times \text{HDOP} \quad \text{to} \quad 3.0 \times \text{HDOP}$$

If your smartphone GPS reports a typical civilian horizontal accuracy of **$\pm 4\text{ meters}$**, your vertical elevation accuracy under the exact same open sky is automatically **$\pm 8\text{ to }\pm 15\text{ meters}$**. Under partial tree canopy or inside a valley, vertical error routinely expands past **$\pm 30\text{ to }\pm 50\text{ meters}$**.

---

## 3. Atmospheric Distortion: The Ionospheric Delay

GPS satellites do not transmit instantaneous laser beams; they broadcast radio frequency signals ($L1 = 1575.42\text{ MHz}$ and $L5 = 1176.45\text{ MHz}$) across 20,000 km of space.

Before reaching your phone, these microwave signals must penetrate Earth's **ionosphere** (a layer of electrically charged plasma 60 to 1,000 km above Earth) and the **troposphere** (the dense weather layer containing moisture and air molecules).

```
   Satellite Microwave Signal (c = 299,792 km/s in vacuum)
              \
               \
    ~~~~~~~~~~~~v~~~~~~~~~~~~~~~~~  Ionosphere (Free electrons refract signal)
                 \
                  \  (Signal slows down; pseudorange distance appears LONGER)
    ==============v===============  Troposphere (Water vapor & pressure variations)
                   \
                    \
                     v
                 [ Receiver ]
```

When solar radiation ionizes gases in the upper atmosphere, free electrons slow the propagation speed of satellite radio waves. Because the GPS receiver assumes the signal traveled at the constant speed of light in a vacuum ($c \approx 299,792,458\text{ m/s}$), any atmospheric deceleration makes the satellite appear **farther away than it actually is**.

Because satellites directly overhead cut through the shortest column of atmosphere while satellites near the horizon travel through up to 5 times more air mass, modeling errors affect vertical altitude calculations far more severely than horizontal positioning.

---

## 4. How Phone Barometric Altimeters Work

Because satellite GPS is fundamentally handicapped in the vertical axis, aircraft, outdoor GPS units, and modern smartphones (including iPhones and flagship Android devices) incorporate a secondary sensor: a **MEMS barometric pressure sensor**.

Rather than looking to space, a barometric altimeter looks at the weight of the air pressing against your device.

```
                  Atmospheric Column Weight:
    
       High Altitude (Low Pressure, e.g. 700 hPa)
             ^
             |   Fewer air molecules above you
             |   ---> Lower Barometric Pressure
             |
             v
       Sea Level (High Pressure, e.g. 1013.25 hPa)
                 Dense air column pressing down
                 ---> Higher Barometric Pressure
```

### The MEMS Pressure Sensor
Inside your phone is a microscopic silicon chamber sealed under a high vacuum. One wall of this chamber consists of a flexible silicon diaphragm only a few micrometers thick, embedded with piezoresistive strain gauges. 

As you ascend a hill or take an elevator:
1. Atmospheric air pressure decreases.
2. The silicon diaphragm flexes outward under the internal vacuum.
3. The electrical resistance of the piezoresistors changes by millivolts, providing an instantaneous air pressure reading with a resolution of **$0.01\text{ hPa}$ (equivalent to 8 cm of vertical height)**.

### The Barometric Altitude Formula
Air pressure decreases with height according to the **Barometric Formula** derived from hydrostatic equilibrium and the ideal gas law:

$$P = P_0 \cdot \left(1 - \frac{L \cdot H}{T_0}\right)^{\frac{g \cdot M}{R \cdot L}}$$

Where:
* $P$ = Measured atmospheric pressure
* $P_0$ = Sea level standard pressure ($1013.25\text{ hPa}$)
* $L$ = Temperature lapse rate ($-0.0065\text{ K/m}$ in standard atmosphere)
* $T_0$ = Sea level standard temperature ($288.15\text{ K}$ or $15^\circ\text{C}$)
* $g$ = Gravitational acceleration ($9.80665\text{ m/s}^2$)
* $M$ = Molar mass of Earth's dry air ($0.0289644\text{ kg/mol}$)
* $R$ = Universal gas constant ($8.3144598\text{ J/(mol}\cdot\text{K)}$)

Inverting this equation yields the standard hypsometric elevation formula used by flight computers and fitness trackers:

$$H = 44330.77 \cdot \left[ 1 - \left(\frac{P}{P_0}\right)^{0.190263} \right] \quad \text{[meters]}$$

### The Rule of Thumb:
In the lower atmosphere (from sea level up to $3,000\text{ meters}$):
$$\mathbf{1\text{ hPa (millibar) drop in pressure}} \approx \mathbf{8.4\text{ meters (27.5 feet) gain in altitude}}$$

---

## 5. The Barometer's Achilles' Heel: Weather Drift

While a barometric altimeter delivers exquisite short-term vertical sensitivity—able to detect whether you placed your phone on the floor or held it above your head—it possesses a critical vulnerability: **weather changes**.

Barometric pressure does not change only when you change altitude; it changes constantly as high-pressure systems and low-pressure weather fronts sweep across the continent.

```
       Overnight Weather Drift Example (Camping at fixed 2,000 m altitude):
    
       Evening: Clear skies, stable high pressure (800 hPa)  ---> Altimeter reads: 2,000 m
       ----------------------------------------------------------------------------------
       Midnight: Low-pressure storm front moves in
                 Ambient air pressure drops to 790 hPa (-10 hPa)
       ----------------------------------------------------------------------------------
       Morning: You wake up in the exact same tent
                Altimeter reads: 2,084 m (+84 m error without moving!)
```

A normal weather change can swing local atmospheric pressure by $10\text{ to }20\text{ hPa}$ in 12 hours. If your altimeter is uncalibrated, a falling barometer will fool your device into reporting that you climbed **80 to 160 meters higher**, even while sleeping in a tent.

### Aviation Altimeter Calibration Settings ($QNH$ vs $QFE$)
Because lives depend on barometric accuracy in aviation, pilots never rely on fixed factory calibrations. Instead, they continually calibrate their altimeters using broadcast radio pressure codes:

* **$QNH$:** The barometric pressure adjusted to mean sea level. When set to local $QNH$, the altimeter indicates elevation above sea level (reading the runway elevation when touching down).
* **$QFE$:** The barometric pressure measured at the airfield surface. When set to $QFE$, the altimeter reads exactly **0 meters** on the runway, measuring height above ground level (AGL).
* **Standard Pressure ($1013.25\text{ hPa} / 29.92\text{ inHg}$):** When climbing through the transition altitude (typically 18,000 ft in North America), all aircraft switch to standard pressure so every plane in the sky shares the same vertical reference (Flight Levels), preventing mid-air collisions regardless of regional weather fronts.

---

## 6. Sensor Fusion: How Modern Devices Combine GPS and Barometers

Neither sensor is sufficient on its own:
* **GPS Altitude** is noisy and inaccurate in the short term, but its long-term average never drifts with the weather.
* **Barometric Altimeter** has exquisite millimeter sensitivity and zero satellite noise, but drifts significantly over hours due to atmospheric weather systems.

Modern navigation devices, high-end avionics, and modern smartphones solve this dilemma through an **Extended Kalman Filter (EKF)** that fuses both data streams:

```
    Barometer (High precision, fast response, but drifts with weather) ---+
                                                                          |---> [ Kalman Filter ] ---> Accurate, Drift-Free
    GPS Altitude (Low precision, noisy, but NEVER drifts with weather) ---+      [ Sensor Fusion ]      Real-Time Elevation
```

1. **High-Frequency Tracking:** When you hike up a steep incline or climb stairs, the Kalman filter relies on the barometer to capture immediate vertical velocity with step-by-step resolution.
2. **Long-Term Drift Correction:** Over hours of continuous tracking, the algorithm calculates a slow, low-pass average of multi-satellite GPS fixes. If it detects that the barometer has drifted away from the multi-hour GPS baseline due to a storm front, it gently recalibrates the barometric sea-level reference ($P_0$) in the background.

---

## 7. Head-to-Head Comparison: Elevation Measurement Methods

| Measurement Technology | Real-World Vertical Accuracy | Strengths | Major Limitations |
| :--- | :---: | :--- | :--- |
| **Raw Phone GPS ($h$)** | $\pm 10\text{ m to } \pm 30\text{ m}$ | Completely immune to weather changes; works globally with zero calibration | Subject to poor satellite geometry (VDOP); requires geoid ($N$) conversion |
| **Phone Barometer ($H$)** | $\pm 0.5\text{ m}$ (short term)<br>$\pm 50\text{ m}$ (uncalibrated) | Instantaneous vertical response; detects stair-by-stair elevation; works indoors | Drifts continuously with atmospheric weather; requires frequent calibration |
| **Fused GPS + Barometer** | $\pm 2\text{ m to } \pm 5\text{ m}$ | Combines rapid barometric response with long-term GPS drift rejection | Requires continuous battery power and open-sky satellite lock |
| **Topographic Map Interpolation** | $\pm 5\text{ m to } \pm 20\text{ m}$ | Battery-free; verified by professional terrestrial land survey benchmarks | Requires manual landmark identification; contour intervals limit resolution |

---

## 8. Practical Guide: How to Get Accurate Altitude Outdoors

When navigating backcountry trails, flying drones, or logging vertical trail runs, follow these four practical rules to maximize elevation accuracy:

### 1. Calibrate at Known Benchmarks
Before starting an ascent, check your trail map for a trailhead benchmark, bridge elevation, or sea-level reference. If your outdoor watch or navigation app allows manual calibration, input the known elevation to reset the barometric reference pressure ($P_0$).

### 2. Wait for Multi-GNSS Constellation Lock
When you first launch an outdoor tool like our [GPS Location & Coordinate Tool](/location/), do not trust the altitude reported in the first 10 seconds. The receiver needs time to acquire ephemeris data from multiple satellite constellations (GPS, GLONASS, Galileo, and BeiDou). Wait until your horizontal accuracy drops below $3\text{ meters}$ before reading vertical altitude.

### 3. Move Away From Canyon Walls and Cliffs
Vertical dilution of precision deteriorates rapidly in narrow river canyons or beneath sheer rock cliffs that block half the sky. Step into open terrain away from vertical obstructions to maximize the angular spread of satellites overhead.

### 4. Cross-Reference Slope and Incline
If you are assessing terrain steepness for trail safety, water drainage, or roof pitch, rely on physical gravitational tilt rather than differential GPS elevation. Measure the true surface angle using our [online digital inclinometer and level](/level/), which measures gravitational acceleration directly with $0.1^\circ$ precision.

---

## 9. Frequently Asked Questions

### Does altitude affect compass headings?
No. The horizontal orientation of Earth's magnetic flux lines remains consistent whether you are at sea level or on an airliner at 10,000 meters. However, as altitude increases, magnetic inclination (dip angle) causes Earth's field lines to plunge more steeply downward toward the poles. Our [True Online Compass](/) uses triaxial tilt-compensation to eliminate magnetic dip distortion automatically.

### Why does Google Earth or AllTrails show different elevation than my phone?
Mapping applications frequently replace your phone's recorded GPS altitude with a **Digital Elevation Model (DEM)** derived from spaceborne radar topography (such as NASA's SRTM mission). The app takes your recorded latitude and longitude, looks up the ground height in a pre-compiled global topography database, and overwrites your device's raw vertical data.

### Can GPS altitude be used to land airplanes safely?
Standard civilian GPS is not accurate or fast enough to guide airplanes onto foggy runways. Aviation utilizes **WAAS** (Wide Area Augmentation System), **GBAS** (Ground-Based Augmentation System), and radar altimeters, which measure the round-trip travel time of radio pulses reflected off the runway asphalt to determine altitude above ground with centimeter accuracy.

---

### Related Tools and Navigation Guides
* **[GPS Location & Coordinate Finder](/location/)** — Read your live coordinates, altitude, and horizontal accuracy.
* **[True Online Compass](/)** — High-precision browser compass pointing to True and Magnetic North.
* **[GPS Speedometer & Odometer](/speedometer/)** — Track ground speed and distance using satellite Doppler shift.
* **[Online Inclinometer & Level](/level/)** — Measure true surface angles and slope grade percentages.
* **[How to Read and Convert GPS Coordinates](/blog/how-to-read-convert-gps-coordinates/)** — Complete guide to DD, DMS, and UTM notation.
* **[Why Your Speedometer Differs From GPS](/blog/why-car-speedometer-differs-from-gps/)** — The science of vehicle speed measurement.

