---
title: "How to Align Solar Panels with a Compass and Inclinometer: The Complete Azimuth & Tilt Guide"
description: "Maximize your solar kilowatt generation. Learn how to align solar panels using a compass and phone inclinometer, calculate optimal tilt angles by latitude, find True South, and avoid magnetic errors."
pubDate: 2026-11-10
author: "True Online Compass"
keywords:
  - how to align solar panels with a compass
  - solar panel tilt angle calculator
  - what direction should solar panels face
  - solar panel azimuth true south
  - how to set solar panel angle with phone
  - seasonal solar panel tilt adjustment
  - true south vs magnetic south solar panels
  - solar panel inclinometer angle
  - optimal solar panel orientation by latitude
  - diy solar panel alignment guide
---

When investing thousands of dollars in a rooftop photovoltaic array, an off-grid cabin power system, or an RV solar setup, every percentage point of solar conversion efficiency matters. 

Yet, studies by the National Renewable Energy Laboratory (NREL) show that **improper orientation and incorrect tilt angles can cost homeowners 10% to 25% of their total annual kilowatt-hour (kWh) generation**.

A solar photovoltaic panel produces peak electrical power when incoming sunlight strikes the tempered silicon glass at an exact **90-degree perpendicular angle**. Because Earth rotates from west to east while orbiting the sun on a tilted 23.5° axis, the sun's position changes continuously along two independent geometric axes:
1. **Solar Azimuth:** The horizontal compass bearing (direction around the horizon).
2. **Solar Elevation / Tilt:** The vertical angle above the horizon.

Aligning your panels to capture peak energy requires dialing in two precise angles: the **horizontal azimuth orientation** and the **vertical tilt angle**.

You don't need expensive solar site assessment transits or specialized laser tools. Using your smartphone's built-in sensors, you can find True South with our [online compass](/) and measure panel tilt down to 0.1° with our [free online inclinometer](/level/).

> **In short:** In the Northern Hemisphere, solar panels must face **True South (180° True Azimuth)**; in the Southern Hemisphere, they must face **True North (000° True Azimuth)**. Never align to a raw magnetic compass needle without adjusting for [magnetic declination](/blog/magnetic-declination-explained/), or you will miss true solar orientation by up to 15°–20°. For fixed year-round rooftop mounting, set your tilt angle equal to your **$\text{Latitude} \times 0.76 + 3.1^\circ$** (or simply your latitude). For seasonal adjustable mounts, tilt at **$\text{Latitude} - 15^\circ$ in summer** and **$\text{Latitude} + 15^\circ$ in winter**. You can measure both angles on-site with our [online compass](/) and [digital bubble level](/level/).

---

## 1. Azimuth Alignment: Why You Must Use True South (Not Magnetic South)

The most fundamental rule of solar installation is that photovoltaic arrays must face the **solar equator**:
- **Northern Hemisphere (US, Canada, Europe, Asia):** Panels must face **True South (180°)**.
- **Southern Hemisphere (Australia, New Zealand, South Africa, South America):** Panels must face **True North (000°)**.

```
   Northern Hemisphere Solar Geometry:
   
                Sunrise (East) ──► Noon (Due True South: 180°) ──► Sunset (West)
                                        │
                                        │  Peak Daily Irradiance
                                        ▼
                                ┌───────────────┐
                                │  SOLAR PANEL  │
                                │   Facing S    │
                                └───────────────┘
```

### The Costly Trap of Magnetic Declination
Many DIY installers take an ordinary magnetic compass, point their panels toward "South" according to the needle, and tighten the mounting bolts. **This is a critical mistake.**

A traditional magnetic needle points toward Earth's **Magnetic North Pole**, not geographic **True North**. The difference between the two is known as **Magnetic Declination** (or magnetic variation):
- In **Seattle, Washington**, magnetic declination is approximately **$+15^\circ \text{ East}$**. A standard compass needle pointing South actually points toward **$165^\circ$ True Azimuth**—a full 15 degrees off-target!
- In **Bangor, Maine**, declination is approximately **$-16^\circ \text{ West}$**. Magnetic South points toward **$196^\circ$ True Azimuth**.
- In **London, UK**, declination is near zero ($+0.2^\circ$), but in **western Canada or Alaska**, declination can exceed **$+20^\circ$**.

```
    Magnetic South (165°)             True South (180°)
             \                               │
              \                              │
               \   15° Declination Error     │
                \◄──────────────────────────►│
                 \                           │
                  \                          │
                   +-------------------------+
```

Failing to correct for declination can reduce your peak midday harvest by **5% to 12%**, costing hundreds of kilowatt-hours each year.

### How to Find True South with Your Phone
1. Open our [live online compass](/) in your mobile browser.
2. Tap the **"True North"** button. The application automatically accesses the NOAA / BGS World Magnetic Model (WMM) and applies your exact local declination offset using your device's GPS coordinates.
3. Turn your body until the large digital heading reads exactly **`180.0°` (South)**. The top edge of your phone is now pointing along true geographic South.
4. Align your solar panel mounting rails parallel to this line.

> **Warning on Metal Roofs and Aluminum Racking:** Smartphones use magnetometers that are sensitive to ferromagnetic interference. If you stand on a corrugated steel pole barn roof or place your phone against steel mounting struts, **soft-iron magnetic distortion** will warp the compass dial. To avoid this, stand 2 to 3 meters away from the metal roof on the ground to site your True South reference line, or use the **Solar Noon Shadow Method** described below.

---

## 2. The Solar Noon Shadow Method: Zero Magnetic Error

If you are working on a commercial steel building or metal standing-seam roof where magnetic compasses cannot be trusted, you can establish an infallible True North–South line using sunlight itself.

```
                         Sun at Local Solar Noon
                                   ▲
                                   │
                                   │
                              [ Stick ]
                                   │
                                   │ (Shadow points due True North)
                                   ▼
                           ═════════════════
```

At the exact instant of **Local Solar Noon**, the sun crosses your local celestial meridian. At that single second:
- In the Northern Hemisphere, the sun is at its highest point due **True South (180°)**.
- Every vertical object casts a shadow that points **due True North (000°)**.

### How to Use This Method:
1. Open our [Sun Position Tool](/sun/) to see the exact time of **Solar Noon** for your GPS location today (note: solar noon rarely falls at 12:00 PM clock time due to time zones and daylight saving).
2. Five minutes before solar noon, place a straight vertical dowel, square edge, or level rod on your roof or ground.
3. At the exact second of solar noon, mark the shadow cast by the dowel on the roof surface.
4. Draw a line along that shadow: this is your **True North–South baseline**. Any solar panel oriented perpendicular to this line will face **due True South** with astronomical precision and zero magnetic error.

---

## 3. Maximum Energy vs. Time-of-Use: Should Panels Ever Face West?

While facing True South ($180^\circ$) generates the maximum total kilowatt-hours over 365 days, modern grid billing structures have changed the economic equation for many homeowners.

```
 Azimuth (Bearing)   Primary Benefit                         Best For
 ─────────────────   ─────────────────────────────────────── ──────────────────────────────
 180° (Due South)    Maximum total kWh production per year   Off-grid, net metering 1:1, RVs
 200° – 215° (SW)    Boosts late afternoon peak generation   Time-of-Use (TOU) utility rates
 090° / 270° (E-W)   Smooth, wide bell-curve all day         Microinverters on hip/gable roofs
```

### Time-of-Use (TOU) Rate Optimization
Many electric utilities (such as California's PG&E/SCE under NEM 3.0 and utilities across Australia and Europe) charge dramatically higher rates for electricity consumed between **4:00 PM and 9:00 PM** (the evening peak), while paying almost nothing for solar exported at 12:00 PM.

If your utility operates on severe TOU pricing without battery storage:
- Orienting panels toward **South-Southwest (200° to 215°)** shifts the daily production peak into the late afternoon.
- While you lose roughly **3% to 5% of total gross kWh** compared to pure South, the value of the energy generated during the expensive 4 PM–7 PM window can result in **higher net electric bill savings**.

---

## 4. Calculating the Optimal Solar Panel Tilt Angle

The second critical setting is your **tilt angle ($\beta$)**—the vertical slope of the solar panel relative to a flat horizontal plane ($0^\circ = \text{flat}$, $90^\circ = \text{vertical}$).

```
        Horizontal Ground (0°)
         ────────────────────────────+
                                    /|
                                   / |
                      Panel Tilt  /  |
                       Angle (β) /   |
                                /θ   |
                               +-----+
```

### The Fundamental Rule: Latitude Matching
As a baseline rule of physics, the optimal year-round tilt angle for a fixed-mount solar panel is approximately equal to your **geographic latitude ($\phi$)**. 
- If you live in **Miami, Florida (Latitude 25.8° N)**, your panels should be tilted at roughly **26°**.
- If you live in **Denver, Colorado (Latitude 39.7° N)**, your panels should be tilted at roughly **40°**.
- If you live in **Seattle, Washington (Latitude 47.6° N)**, your panels should be tilted at roughly **48°**.

### The NREL Year-Round Fixed Formula
For maximum annual output on fixed rooftop racks, the National Renewable Energy Laboratory (NREL) uses a refined empirical formula that slightly adjusts for atmospheric air mass and low-angle winter sunlight:

$$\text{Fixed Tilt Angle} = (\text{Latitude} \times 0.76) + 3.1^\circ$$

For example, in **Chicago, IL (Latitude 41.9° N)**:
$$\text{Fixed Tilt} = (41.9 \times 0.76) + 3.1 = 31.84 + 3.1 \approx \mathbf{35.0^\circ}$$

### Seasonal Adjustable Mounts: The $\pm 15^\circ$ Rule
If your solar array is mounted on ground racks, an RV tilt kit, or pole mounts with adjustable seasonal legs, adjusting your panel tilt 2 to 4 times a year increases your annual solar yield by **5% to 15%** (and up to **25% in high-latitude winter conditions**):

```
 Season          Adjustment Formula         Chicago (42° N)    Miami (26° N)   Frankfurt (50° N)
 ──────────────  ────────────────────────── ────────────────   ─────────────   ─────────────────
 Summer          Latitude − 15°             27°                11°             35°
 Spring / Fall   Latitude                   42°                26°             50°
 Winter          Latitude + 15°             57°                41°             65°
```

- **In Summer:** The sun climbs high overhead. Tilting panels flatter ($\text{Latitude} - 15^\circ$) catches high-noon rays.
- **In Winter:** The sun stays low on the southern horizon. Tilting panels steeper ($\text{Latitude} + 15^\circ$) captures low-angle solar rays perpendicular to the glass.
- **The Winter Snow Bonus:** A steep winter tilt angle ($50^\circ\text{--}65^\circ$) allows accumulated snow to naturally slide off the slick tempered glass as soon as morning sunlight warms the dark silicon cells.

---

## 5. Master Solar Tilt Lookup Table by Latitude

Here is the exact tilt angle reference across key global latitudes:

| Latitude | Representative Cities | Summer Tilt ($\text{Lat} - 15^\circ$) | Fixed Annual Tilt (NREL Formula) | Winter Tilt ($\text{Lat} + 15^\circ$) |
| :--- | :--- | :--- | :--- | :--- |
| **20° N** | Honolulu, Mexico City, Mumbai | **10°** (min for rain self-cleaning) | **18.3°** | **35.0°** |
| **25° N** | Miami, Taipei, Dubai | **10.0°** | **22.1°** | **40.0°** |
| **30° N** | Houston, New Orleans, Cairo | **15.0°** | **25.9°** | **45.0°** |
| **35° N** | Los Angeles, Atlanta, Tokyo | **20.0°** | **29.7°** | **50.0°** |
| **40° N** | New York, Madrid, Beijing | **25.0°** | **33.5°** | **55.0°** |
| **45° N** | Minneapolis, Montreal, Milan | **30.0°** | **37.3°** | **60.0°** |
| **50° N** | Vancouver, London, Frankfurt | **35.0°** | **41.1°** | **65.0°** |
| **55° N** | Copenhagen, Moscow, Edinburgh | **40.0°** | **44.9°** | **70.0°** |

> **The 10-Degree Minimum Self-Cleaning Rule:** Never mount solar panels completely flat ($0^\circ$). Even near the equator or on flat RV roofs, always maintain a minimum tilt of at least **10 degrees**. At angles below 10°, rainwater pools in puddles on the glass, leaving behind dirt, pollen, and mineral soot that bakes into a crust and causes hotspot cell degradation.

---

## 6. How to Set Panel Tilt Using Your Phone's Inclinometer

Setting panel tilt with a digital tool eliminates guesswork. Here is the exact field protocol using our [online bubble level and inclinometer](/level/):

```
       [ Lay Phone Along Edge of Panel ]
                 ┌─────────────────────────────────┐
                 │          SOLAR PANEL            │
                 └─────────────────────────────────┘
                 ▲                                 ▲
                 │ Tilt Angle: 34.8°               │
                 └─────────────────────────────────┘
```

### Step 1: Open the Inclinometer
Open `trueonlinecompass.com/level/` in your phone browser. The tool activates your phone's triaxial capacitive accelerometer, reading surface inclination in decimal degrees.

### Step 2: Account for the Phone Case & Camera Bump
Smartphones have raised camera lenses on the back. If you lay the phone back-down directly on the panel glass, the camera bump creates a 1° to 2° angle error.
- **Best Practice:** Place the **long side edge** of your phone directly against the aluminum frame of the solar panel, or place the phone screen-side down on the glass.
- Alternatively, lay the phone on a known flat surface and tap **"Relative Zero"** to calibrate out the bevel.

### Step 3: Adjust the Panel Racking Legs
1. Loosen the adjustment bolts on your solar mount's telescoping rear legs.
2. Hold your phone firmly against the panel's aluminum side rail parallel to the slope.
3. Slide the mounting arm up or down until the digital readout matches your target angle (e.g., `35.0°`).
4. Tighten the locking bolts and lock washers.

---

## 7. Working on Sloped Roofs: Combining Roof Pitch with Racking

When installing solar on a residential pitched roof, your panels naturally adopt the roof's slope. In North America, roof slopes are expressed in **pitch** (inches of vertical rise per 12 inches of horizontal run, e.g., "4/12 pitch" or "8/12 pitch").

```
             Pitch = Rise / 12"
             Angle (θ) = arctan(Rise / 12) × (180 / π)
             
                     /|
             Rise   / |
             (e.g. /  |
              6") /θ  |
                 +----+
                  12" Run
```

### Roof Pitch to Degree Conversion Table:

| Roof Pitch Ratio | Angle in Degrees ($\theta$) | Grade Percentage (%) | Suitability for Fixed Solar (At 35°–42° Latitude) |
| :--- | :--- | :--- | :--- |
| **2/12** | **9.5°** | 16.7% | Too flat; needs tilt legs to reach 30°+ and shed rain/snow |
| **4/12** | **18.4°** | 33.3% | Good for summer; slightly flat for winter; acceptable compromise |
| **6/12** | **26.6°** | 50.0% | Excellent year-round angle for latitudes 28° to 38° |
| **8/12** | **33.7°** | 66.7% | Ideal fixed year-round tilt for northern US and central Europe |
| **10/12** | **39.8°** | 83.3% | Near-perfect year-round angle for latitudes 40° to 48° |
| **12/12** | **45.0°** | 100.0% | Steep; outstanding winter capture and automatic snow shedding |

If your south-facing roof pitch is already close to your latitude's fixed tilt (within $\pm 5^\circ$), installing panels **flush against the roof deck** using standard stand-off mounts is universally recommended:
- It maintains structural aerodynamic wind resistance (avoiding wind sail uplift).
- It preserves neighborhood aesthetics.
- The 1% to 2% theoretical gain from tilting panels up off a south-facing roof rarely justifies the cost of custom tilt racking and increased wind load.

---

## 8. Shading Analysis: The Silent Solar Killer

Even the most mathematically perfect azimuth and tilt angles are completely defeated if a shadow falls across your array.

Because individual photovoltaic cells within a solar panel are wired in series "strings," **shading just 10% of a panel can drop its electrical power output by more than 50%**. The unshaded cells attempt to push current through the shaded cell, which acts as a resistor, creating localized electrical bottlenecks and destructive overheating "hot spots."

```
 ┌───────────────────────────────────────────────────────────────┐
 │                       SOLAR PANEL                             │
 │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐   │
 │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │▓▓▓│ ◄─┼── Shading this ONE cell
 │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘   │    cripples the ENTIRE string!
 └───────────────────────────────────────────────────────────────┘
```

### Winter Solar Altitude Scouting
The sun's elevation angle is significantly lower in December than in June:
- At 40° N latitude, the sun reaches an elevation of **73.5° above the horizon on June 21** (Summer Solstice).
- On **December 21** (Winter Solstice), the sun barely rises to **26.5° above the horizon**.

Objects that cast tiny 2-foot shadows in summer cast massive **15-to-20-foot shadows** in the dead of winter!

Before securing mounting racks:
1. Open our [Sun & Moon Tracker](/sun-moon/) and [Solar Elevation Calculator](/sun/).
2. Look at the calculated solar elevation angle for **December 21 at 10:00 AM, 12:00 PM, and 2:00 PM**.
3. Sight across your roofline at neighboring chimneys, plumbing vent pipes, parapet walls, and dormant deciduous trees. Ensure no obstructions penetrate the solar line of sight.

---

## 9. Complete Step-by-Step Field Alignment Checklist

Follow this four-step checklist to align your solar installation:

### Step 1: Establish Your True South Baseline
- Stand on the ground 3 meters away from steel structures.
- Open the [online compass](/), ensure **True North** is toggled ON.
- Align to **180°** and sight an identifiable distant physical landmark (e.g., a specific tree or utility pole) along that line.
- Sight from the roof to that landmark to establish your True South roof axis, or verify using the solar noon shadow method.

### Step 2: Square and Bolt the Mounting Racks
- Align the lower aluminum mounting rail perpendicular ($90^\circ$) to your True South baseline.
- Fasten lag screws into structural roof rafters using approved waterproof flashing boots.

### Step 3: Dial in Tilt with the Online Inclinometer
- Place your phone's long edge along the rack rail or panel frame.
- Open the [online bubble level and inclinometer](/level/).
- Adjust rear tilt arms until the digital display matches your target latitude tilt angle (e.g., `34°`).
- Torque all hardware to manufacturer specification.

### Step 4: Verify with Live Telemetry
- Once wired through the charge controller or grid-tie inverter, check your real-time wattage generation.
- Cross-reference with our [Sun Position Tool](/sun/) at solar noon to confirm peak rated wattage output.

---

## Frequently Asked Questions

### Can I align my solar panels using a standard magnetic compass?
You can use a magnetic compass **only if you manually correct for magnetic declination**. If your local declination is $+12^\circ \text{ East}$, True South is at a magnetic compass heading of $180^\circ - 12^\circ = 168^\circ$. If you simply point to $180^\circ$ on a raw magnetic needle, your panels will face 12 degrees too far west. Our [online compass tool](/) applies this NOAA declination correction automatically.

### What happens if my roof faces Southeast or Southwest instead of due South?
A roof that faces Southeast ($135^\circ$) or Southwest ($225^\circ$) is $45^\circ$ off true south. Surprisingly, due to the geometric cosine law of solar irradiance, an orientation $45^\circ$ off South only results in an annual energy loss of approximately **5% to 8%**, provided there is no severe morning or afternoon shading. It is almost always better to mount panels flush on a Southeast/Southwest roof than to build complex tilted frames.

### How do I measure roof pitch if I don't have a carpenter's angle finder?
Open our [free online bubble level and inclinometer](/level/) on your phone. Lay the edge of your phone directly against the underside of an attic rafter or flat on a roof shingle. The screen will display the slope directly in decimal degrees, which you can compare to our roof pitch conversion table.

### Does seasonal tilt adjustment really make a noticeable difference?
For fixed residential rooftop arrays, seasonal adjustments are rarely practical. However, for **off-grid solar systems, cabins, and RV travelers**, winter tilt adjustment is crucial. In winter, increasing your panel tilt by $+15^\circ$ steepens the angle to catch low-hanging sun, frequently boosting winter daily amp-hour charging by **15% to 25%** while preventing snow build-up on the glass.

