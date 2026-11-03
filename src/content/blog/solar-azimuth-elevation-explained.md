---
title: "Solar Azimuth and Elevation: How to Calculate Sun Position, Angles, and Shadows"
description: "A complete guide to solar position geometry. Learn the mathematics of solar azimuth, elevation, and zenith angles, calculate shadow lengths, and determine optimal solar panel tilt and orientation."
pubDate: 2026-11-03
author: "True Online Compass"
keywords:
  - solar azimuth angle
  - solar elevation angle
  - calculate sun position
  - solar panel tilt and azimuth
  - solar zenith angle
  - calculate shadow length from sun angle
  - sun position calculator math
  - equation of time solar noon
  - solar declination formula
  - golden hour sun angle
---

From setting up a high-efficiency rooftop photovoltaic array and designing passive solar overhangs to framing golden-hour landscape photography and navigating backcountry terrain without magnetic distortion, **the position of the sun in the sky is one of the most critical coordinates in physics and geography**.

Yet, the sun's journey across our sky is deceptively complex. It does not rise due east or set due west except on two specific days each year. Clock noon at 12:00 PM almost never matches the moment the sun reaches its highest point. And the angle of sunlight shifts constantly along two independent geometric axes: **horizontal compass direction (azimuth)** and **vertical height above the horizon (elevation)**.

Understanding how to calculate and interpret these two angles allows you to predict shadows, maximize solar energy production, forecast photographic lighting, and establish a true geographical north baseline with astronomical precision.

> **In short:** The sun's position is defined by two angular coordinates: **Solar Azimuth** ($\alpha$, compass bearing from 0° True North) and **Solar Elevation** ($\theta$, angle in degrees above the horizon). Solar Zenith ($\theta_z$) is the angle from directly overhead, where $\theta_z = 90^\circ - \theta$. You can calculate the length of any shadow using the trigonometric formula **$\text{Shadow Length} = \frac{\text{Height}}{\tan(\theta)}$**. To get real-time azimuth and elevation coordinates calculated automatically for your current GPS coordinates, open the [free online sun position calculator](/sun/) or the [sun and moon tracker](/sun-moon/).

---

## 1. The Celestial Coordinate System: Azimuth, Elevation, and Zenith

When observing the sky from anywhere on Earth, the atmosphere appears as a giant hemisphere—the **celestial dome**. To pinpoint the sun's exact location on this dome, scientists and navigators use a local horizontal coordinate system consisting of three related values:

```
                          Zenith (90° Straight Up)
                                    |
                                    |  • Sun
                                    | /
             Zenith Angle (θz) ---->|/  <---- Elevation Angle (θ)
                                    /---------\  Horizon Plane (0°)
                                   /           \
                                  /  Observer   \
                                 +---------------+
                                /                 \
                       West (270°)               East (90°)
                                       |
                                  South (180°)
                                       |
                     <---- Azimuth (α) measured clockwise from North (0°)
```

### A. Solar Elevation Angle ($\theta$ or $\alpha_s$)
**Solar elevation** (also known as solar altitude) is the vertical angle measured between the center of the sun's disk and the ideal horizontal observer horizon.
* **$\theta = 0^\circ$**: The center of the sun is sitting exactly on the horizon (sunrise or sunset).
* **$\theta = 90^\circ$**: The sun is directly overhead at the zenith (only occurs in the tropics between the Tropic of Cancer and Tropic of Capricorn).
* **$\theta < 0^\circ$**: The sun is below the horizon (civil, nautical, or astronomical twilight, and night).

### B. Solar Zenith Angle ($\theta_z$)
The **zenith angle** is the complementary angle to solar elevation. While elevation measures upward from the ground, the zenith angle measures downward from a theoretical plumb line pointed straight into space ($90^\circ$ vertical):

$$\theta_z = 90^\circ - \theta$$

If the sun's elevation is $35^\circ$ above the horizon, its zenith angle is $90^\circ - 35^\circ = 55^\circ$. In solar panel engineering and atmospheric physics, the zenith angle is frequently preferred because it directly represents the optical air mass ($AM$) that sunlight must penetrate to reach the ground:

$$\text{Air Mass (AM)} \approx \frac{1}{\cos(\theta_z)} = \frac{1}{\sin(\theta)}$$

### C. Solar Azimuth Angle ($\alpha$ or $\phi_s$)
**Solar azimuth** is the horizontal compass bearing of the sun along the horizon line. 

In standard modern navigation, land surveying, and geospatial software (including our [True Online Compass](/)), azimuth is expressed in **navigational notation**:
* **$0^\circ$ or $360^\circ$**: True North
* **$90^\circ$**: Due East
* **$180^\circ$**: Due South
* **$270^\circ$**: Due West

*(Note: Older astronomical and engineering texts occasionally set $0^\circ$ at due South, counting positive angles toward the west. Modern international standards, GIS systems, and WGS84 mapping tools strictly measure clockwise from True North.)*

---

## 2. Solar Noon vs. Clock Noon: The Equation of Time

Before computing angles, you must resolve the discrepancy between your wristwatch and the sun: **Solar Noon rarely happens at 12:00 PM**.

Solar noon is the exact second when the sun crosses your local celestial meridian—reaching its highest elevation of the day and pointing either due south (in the Northern Hemisphere) or due north (in the Southern Hemisphere). Two physical phenomena prevent your clock from matching this moment:

### 1. Longitude Offset Within Time Zones
Standard time zones are broad geopolitical bands spanning roughly $15^\circ$ of longitude wide (since Earth rotates $360^\circ / 24\text{ hours} = 15^\circ\text{ per hour}$). That equals:

$$\frac{60\text{ minutes}}{15^\circ} = 4\text{ minutes per degree of longitude}$$

If your town is located $4^\circ$ west of your time zone's reference meridian, solar noon will occur $(4^\circ \times 4\text{ min/deg}) = 16\text{ minutes}$ after standard clock noon.

### 2. The Equation of Time ($\text{EoT}$)
Earth does not orbit the sun in a perfect circle, nor is its spin axis upright:
1. **Orbital Eccentricity:** Kepler's second law dictates that Earth moves faster at perihelion (early January) and slower at aphelion (early July).
2. **Axial Obliquity:** Earth's rotational axis is tilted by $23.44^\circ$ relative to the plane of the ecliptic.

Because of this combination, the apparent solar day varies throughout the year. If you take a photo of the sun at exactly 12:00 PM standard clock time every week for a year, it traces a figure-eight loop called the **analemma**.

The mathematical difference between mean clock time and actual solar time is the **Equation of Time ($\text{EoT}$)**:

$$\Delta t_{\text{EoT}} = 9.87 \sin(2B) - 7.53 \cos(B) - 1.5 \sin(B) \quad \text{[minutes]}$$

Where $B$ is the orbital angle in radians for day of the year $n$ ($1 \le n \le 365$):

$$B = \frac{360^\circ}{365} \cdot (n - 81)$$

Across the calendar year, the Equation of Time causes true solar noon to drift by up to **$-14.2$ minutes in mid-February** to **$+16.4$ minutes in early November**.

```
  Equation of Time (EoT) Drift Across the Year:
  +15m |                     .-.
       |                    /   \
   +0m |---.-------.-------/-----\-------.-------
       |    \     / \     /       \     /
  -15m |     `---'   `---'         `---'
       +-----------------------------------------
          Jan   Mar   May   Jul   Sep   Nov   Dec
```

To find **Local Solar Time ($\text{LST}$)**:

$$\text{LST} = \text{Local Clock Time} + \frac{\text{EoT}}{60} + \frac{4 \times (\text{Longitude} - \text{LSTM})}{60} - \text{DST Adjustment}$$

*(where $\text{LSTM} = 15^\circ \times \Delta T_{\text{GMT}}$, and $\text{DST Adjustment} = 1\text{ hour}$ if Daylight Saving Time is active).*

---

## 3. The Core Mathematical Equations: Step-by-Step

To calculate the sun's azimuth and elevation manually for any latitude ($\phi$), longitude, and time of day, follow these four celestial mechanics equations.

### Step 1: Solar Declination Angle ($\delta$)
The declination angle is the latitude on Earth where the sun is directly overhead ($90^\circ$ elevation at solar noon). It varies from $+23.45^\circ$ at the summer solstice (June 21) to $-23.45^\circ$ at the winter solstice (December 21).

Using Cooper's standard approximation:

$$\delta = 23.45^\circ \cdot \sin\left(\frac{360^\circ}{365} \cdot (284 + n)\right)$$

* On the **Spring Equinox** (approx. Day 80, March 21): $\delta = 0^\circ$
* On the **Summer Solstice** (approx. Day 172, June 21): $\delta = +23.45^\circ$
* On the **Autumn Equinox** (approx. Day 266, September 23): $\delta = 0^\circ$
* On the **Winter Solstice** (approx. Day 355, December 21): $\delta = -23.45^\circ$

### Step 2: Solar Hour Angle ($H$ or $\omega$)
The hour angle converts local solar time into angular degrees of Earth rotation away from the solar noon meridian. Earth spins at $15^\circ$ per hour ($0.25^\circ$ per minute):

$$H = 15^\circ \cdot (\text{Local Solar Time in decimal hours} - 12)$$

* At **9:00 AM solar time**: $H = 15^\circ \times (9 - 12) = -45^\circ$ (negative before noon / morning)
* At **12:00 PM solar noon**: $H = 15^\circ \times (12 - 12) = 0^\circ$
* At **3:30 PM solar time**: $H = 15^\circ \times (15.5 - 12) = +52.5^\circ$ (positive after noon / afternoon)

### Step 3: Calculating Solar Elevation ($\theta$)
Using spherical trigonometry on the celestial triangle:

$$\sin(\theta) = \sin(\phi)\sin(\delta) + \cos(\phi)\cos(\delta)\cos(H)$$

Taking the inverse sine gives your elevation:

$$\theta = \arcsin\Big(\sin(\phi)\sin(\delta) + \cos(\phi)\cos(\delta)\cos(H)\Big)$$

#### Maximum Solar Elevation at Midday
At solar noon ($H = 0^\circ$, so $\cos(H) = 1$), the equation simplifies to:

$$\theta_{\text{noon}} = 90^\circ - \phi + \delta$$

For an observer in Chicago or Rome (Latitude $42^\circ\text{ N}$):
* **Summer Solstice Midday:** $\theta = 90^\circ - 42^\circ + 23.45^\circ = 71.45^\circ$ (high overhead, short shadows)
* **Winter Solstice Midday:** $\theta = 90^\circ - 42^\circ + (-23.45^\circ) = 24.55^\circ$ (low in sky, long shadows)

### Step 4: Calculating Solar Azimuth ($\alpha$)
The solar azimuth angle measures the horizontal bearing:

$$\cos(\alpha) = \frac{\sin(\delta)\cos(\phi) - \cos(\delta)\sin(\phi)\cos(H)}{\cos(\theta)}$$

Because the arccosine function only outputs values between $0^\circ$ and $180^\circ$, you must evaluate the hour angle ($H$) to establish the correct morning or afternoon quadrant:
* If $H < 0$ (**morning**): $\alpha = \arccos(\dots)$
* If $H > 0$ (**afternoon**): $\alpha = 360^\circ - \arccos(\dots)$

---

## 4. Trigonometry of Shadows: Length and Direction

One of the most immediate practical applications of solar elevation and azimuth is calculating shadows. Whether determining if a neighboring building will cast a shadow on your solar panels, planning a privacy hedge, or setting up a tent for morning shade, simple right-triangle trigonometry provides exact answers.

```
                  Sun Rays
                     \
                      \
                       \   Object Height (h)
                        \     |
                         \    |
                          \   |
                           \  |
   Horizon -----------------+ | <---- Elevation (θ)
   =========================+-+====================
   <------------------------>
        Shadow Length (L)
```

### The Shadow Length Formula
In any right-angled triangle formed by a vertical post of height $h$, the sun's elevation angle $\theta$, and the cast shadow length $L$:

$$\tan(\theta) = \frac{\text{Height } (h)}{\text{Shadow Length } (L)}$$

Rearranging to solve for shadow length:

$$L = \frac{h}{\tan(\theta)}$$

### Shadow Multiplier Reference Table
Use this table to quickly calculate the shadow cast by any structure or person:

| Solar Elevation ($\theta$) | Shadow Multiplier ($L / h$) | Shadow Length for a 6 ft (1.83 m) Person | Real-World Context |
| :---: | :---: | :---: | :--- |
| **$5^\circ$** | **11.43×** | 68.6 ft (20.9 m) | Just after sunrise / before sunset (golden hour) |
| **$10^\circ$** | **5.67×** | 34.0 ft (10.4 m) | Early morning / late afternoon photography |
| **$15^\circ$** | **3.73×** | 22.4 ft (6.8 m) | Standard winter afternoon sun |
| **$20^\circ$** | **2.75×** | 16.5 ft (5.0 m) | Low-angle solar panel shading limit |
| **$30^\circ$** | **1.73×** | 10.4 ft (3.2 m) | Mid-morning / mid-afternoon shoulder seasons |
| **$45^\circ$** | **1.00×** | **6.0 ft (1.83 m)** | **Elevation where shadow length equals object height** |
| **$60^\circ$** | **0.58×** | 3.5 ft (1.06 m) | High summer afternoon sun |
| **$75^\circ$** | **0.27×** | 1.6 ft (0.49 m) | High midday sun in southern temperate latitudes |
| **$90^\circ$** | **0.00×** | 0.0 ft (0.0 m) | Solar zenith (Lahaina Noon in the tropics; no shadow) |

> **Shadow Direction Rule:** A shadow always extends in the exact opposite direction of the sun's azimuth:
> $$\alpha_{\text{shadow}} = (\alpha_{\text{sun}} + 180^\circ) \bmod 360^\circ$$
> If the sun's azimuth is at $130^\circ$ (Southeast), the shadow points directly toward $310^\circ$ (Northwest). You can verify this in real time using the [Bearing Finder](/bearing/).

---

## 5. Solar Panel Optimization: Azimuth and Tilt

Photovoltaic (PV) cells produce maximum electrical power when sunlight strikes the silicon wafer at a perpendicular $90^\circ$ angle (the angle of incidence $\theta_i = 0^\circ$). As the sun moves, energy output decreases with the cosine of the angle of incidence:

$$\text{Power} = \text{Peak Power} \times \cos(\theta_i)$$

To maximize kilowatt-hours produced over an entire year, solar panels require careful alignment along two axes: **orientation (azimuth)** and **tilt (elevation)**.

```
   Photovoltaic Panel Alignment:
         
            Sun Rays  \
                       \
                        \   Normal Vector (Perpendicular)
                         \  |
                          \ |
                           \|
                 +----------\---------+   <--- Solar Panel
                 |           \        |
                 |            \       |  Tilt Angle (β)
                 +--------------------+ /
                 ======================/  Horizontal Roof / Ground
```

### 1. Optimal Panel Azimuth
* **Northern Hemisphere:** Point panels toward **True South ($180^\circ$ Azimuth)**.
* **Southern Hemisphere:** Point panels toward **True North ($0^\circ$ Azimuth)**.

#### Watch Out for Magnetic Declination!
A common installation mistake is aligning solar racking with an uncorrected handheld magnetic compass. Because the magnetic north pole does not coincide with the geographic rotational axis, magnetic compasses exhibit [magnetic declination](/blog/magnetic-declination-explained/). In places like Maine or Washington state, magnetic declination can exceed $15^\circ$ to $18^\circ$. Failing to adjust for declination means panels point southwest or southeast, reducing annual production by up to **4% to 8%**. Always use true north or check local declination on our [Online Compass](/).

### 2. Time-of-Use (TOU) Grid Tariffs: The Southwest Bias
While True South yields the maximum total gross kilowatt-hours across 365 days, many modern utility companies utilize **Time-of-Use (TOU) rates**, billing electricity at 2× or 3× higher prices during peak evening hours (typically 4:00 PM to 9:00 PM).

Consequently, many modern solar designers purposely orient arrays toward **South-Southwest or Southwest ($200^\circ \text{ to } 225^\circ\text{ Azimuth}$)**. While this slightly reduces morning generation when rates are cheap, it aligns peak panel production with the late afternoon sun when grid electricity is most valuable.

### 3. Optimal Fixed Tilt Angle ($\beta$)
For stationary racks that cannot adjust throughout the year, the optimal tilt angle depends on your latitude ($\phi$):

| Latitude Range | Recommended Fixed Tilt ($\beta$) | Formula / Rule of Thumb |
| :---: | :---: | :--- |
| **$0^\circ \text{ to } 15^\circ$** | **$15^\circ$** | Equal to latitude, or minimum $10^\circ–15^\circ$ for rainfall self-cleaning |
| **$15^\circ \text{ to } 25^\circ$** | **Latitude $\times 0.87$** | Optimizes for high summer overhead sun |
| **$25^\circ \text{ to } 50^\circ$** | **Latitude $\times 0.76 + 3.1^\circ$** | Standard mid-latitude year-round compromise |
| **$> 50^\circ$** | **Latitude $\times 0.80$** | Prevents excessive winter shading and wind load |

#### Seasonal Tilt Adjustments
If your mounting racking allows manual seasonal adjustment (typically twice or four times per year), use these adjustments to boost annual energy production by **5% to 12%**:
* **Summer Tilt (April to August):** $\text{Tilt} = \text{Latitude} - 15^\circ$ (lays flatter to face high summer midday sun).
* **Winter Tilt (October to February):** $\text{Tilt} = \text{Latitude} + 15^\circ$ (tilts steeply toward low southern horizon; also accelerates snow shedding).
* **Spring / Autumn:** $\text{Tilt} = \text{Latitude}$.

To verify and adjust your solar panel angle with 0.1° accuracy right on the roof, place your smartphone against the panel frame using our [free digital inclinometer & bubble level](/level/).

---

## 6. Solar Angles in Photography: Golden Hour and Twilight

In cinematography and landscape photography, lighting quality is dictated almost entirely by the solar elevation angle. As the sun sinks toward the horizon, its light travels through up to **10 to 38 times more atmosphere** than at midday. Shorter blue and violet wavelengths scatter away through Rayleigh scattering, leaving warm golden, orange, and red tones.

```
       Solar Elevation Phases in Photography & Aviation:

   +10° ----------------------------------------------------
        Broad Daylight (Hard, high-contrast shadows)
    +6° ----------------------------------------------------
        Golden Hour (Warm, diffused, flattering skin tones)
     0° ==================================================== Horizon (Sunrise/Sunset)
    -4° ----------------------------------------------------
        Blue Hour (Cool tones, ambient sky matches city lights)
    -6° ----------------------------------------------------
        Civil Twilight (Reading outdoors without lamps still possible)
   -12° ----------------------------------------------------
        Nautical Twilight (Horizon still visible at sea)
   -18° ----------------------------------------------------
        Astronomical Twilight (Sky is completely pitch black for astronomy)
```

### 1. Golden Hour: $\theta = 0^\circ \text{ to } +6^\circ$
* **Visual Characteristics:** Long, low-contrast shadows; warm color temperature ($3000\text{K}–3500\text{K}$); rim lighting on landscape contours.
* **Duration:** In the tropics, the sun plunges vertically into the horizon, making the golden hour last only 15–20 minutes. In northern latitudes (e.g., Scotland, Canada, Scandinavia), the sun cuts diagonally across the horizon, stretching the golden hour to over an hour in summer.

### 2. Blue Hour: $\theta = -4^\circ \text{ to } -6^\circ$
* **Visual Characteristics:** The sky displays deep cobalt blue hues with no direct sunlight. The intensity of natural sky illumination matches the dynamic range of city streetlights and lit building windows, producing vibrant architectural photos with balanced contrast.

### 3. Civil Twilight: $\theta = 0^\circ \text{ to } -6^\circ$
* The time between sunset and when artificial lighting is legally required for outdoor activities. The horizon is sharp, and brightest stars (like Sirius) and planets (Venus, Jupiter) become visible.

You can inspect the exact minutes for golden hour, blue hour, and twilight for any date and location using the [Sun & Moon Tracker](/sun-moon/).

---

## 7. Using Solar Azimuth as a High-Precision Compass

While magnetic sensors in smartphones and physical compass needles can be thrown off by car engines, iron bridges, power lines, and reinforced concrete rebar, **the sun's position is immune to electromagnetic interference**.

If you know your approximate location and local time, you can determine **True North** with laboratory-grade precision using the sun's azimuth:

1. **Find Current Solar Azimuth:** Open the [Sun Position Calculator](/sun/) on your mobile browser. Note the live sun azimuth (for example, $218^\circ$).
2. **Sight the Sun Safely:** Place a straight, slender vertical rod or pencil upright on a flat surface. Look at the crisp shadow cast across the ground.
3. **Determine Shadow Azimuth:** Since shadows project in the exact opposite direction:
   $$\alpha_{\text{shadow}} = 218^\circ - 180^\circ = 38^\circ$$
   The line from the shadow's tip back to the stick base points along a bearing of **$218^\circ$ (toward the sun)**, while the shadow itself points directly along **$38^\circ$ (Northeast)**.
4. **Establish True North:** Turn $38^\circ$ counter-clockwise from your shadow line. You now have a flawless True North reference line—unaffected by local magnetic anomalies or smartphone calibration drift.

For more techniques on combining celestial markers and compass navigation, read our guide on [How to Orient a Map With a Compass](/blog/how-to-orient-a-map-with-a-compass/) and [Finding Direction Using the Sun](/blog/find-direction-using-the-sun/).

---

## 8. Quick Reference Summary & FAQ

### Key Formulas at a Glance

| Parameter | Mathematical Formula |
| :--- | :--- |
| **Zenith Angle ($\theta_z$)** | $\theta_z = 90^\circ - \theta$ |
| **Shadow Length ($L$)** | $L = \frac{h}{\tan(\theta)}$ |
| **Solar Declination ($\delta$)** | $\delta = 23.45^\circ \cdot \sin\left(\frac{360^\circ}{365}(284 + n)\right)$ |
| **Solar Hour Angle ($H$)** | $H = 15^\circ \cdot (\text{Local Solar Time} - 12)$ |
| **Max Solar Elevation at Noon** | $\theta_{\text{max}} = 90^\circ - \text{Latitude} + \delta$ |
| **Shadow Direction** | $\alpha_{\text{shadow}} = (\alpha_{\text{sun}} + 180^\circ) \bmod 360^\circ$ |

---

### Frequently Asked Questions

#### Does the sun always rise exactly due East and set due West?
No. The sun rises due East ($90^\circ$) and sets due West ($270^\circ$) on only two days each year: the **Spring Equinox** and **Autumn Equinox**. During summer months, the sun rises to the north of east and sets to the north of west. During winter months, it rises south of east and sets south of west.

#### Why does solar noon not happen when the sun is directly overhead (at the zenith)?
Outside the tropical belt (between $23.45^\circ\text{ N}$ and $23.45^\circ\text{ S}$), the sun **never** reaches the zenith ($90^\circ$ elevation). In temperate locations like New York, London, Paris, or Tokyo, the midday sun always crosses the meridian at an angle tilted toward the south, never reaching straight overhead.

#### How does altitude above sea level affect solar angles?
Atmospheric refraction causes the sun to appear slightly higher in the sky near the horizon (by about $0.5^\circ$ at sunrise and sunset). Higher terrain and elevated viewpoints push the apparent horizon lower, extending daylight by a few minutes, but the theoretical solar azimuth and elevation geometry relative to the geoid remains unchanged.

---

### Related Guides and Free Tools
* **[Online Sun Position Calculator](/sun/)** — Calculate real-time azimuth, elevation, sunrise, solar noon, and sunset for any place on Earth.
* **[Sun & Moon Tracker](/sun-moon/)** — Complete ephemeris with golden hour, twilight phases, and moon phase information.
* **[True Online Compass](/)** — Real-time browser-based compass with live digital heading and true/magnetic north toggling.
* **[Online Inclinometer & Level](/level/)** — High-precision tool to measure roof pitch and solar panel tilt angles directly on your phone.
* **[How to Measure Slope, Pitch, and Grade](/blog/how-to-measure-slope-pitch-grade-phone/)** — Step-by-step inclinometer and leveling guide.
* **[How to Read and Convert GPS Coordinates](/blog/how-to-read-convert-gps-coordinates/)** — Comprehensive guide to DD, DMS, and UTM coordinates.

