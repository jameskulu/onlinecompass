---
title: "How to Align a Satellite Dish with a Compass and Inclinometer: Azimuth, Elevation & Skew Guide"
description: "Learn how to align a satellite dish or Starlink terminal using an online compass and phone inclinometer. Step-by-step calculations for Azimuth, Elevation, LNB Skew, and obstacle clearance."
pubDate: 2026-11-12
author: "True Online Compass"
keywords:
  - how to align satellite dish with compass
  - satellite dish azimuth and elevation angle
  - how to point satellite dish with phone
  - satellite dish elevation bubble level
  - satellite dish true south vs magnetic south
  - starlink dish alignment compass
  - satellite dish lnb skew angle calculator
  - satellite dish look angle calculation
  - how to find satellite dish direction
  - diy satellite dish installation guide
---

Pointing a satellite dish to link with a communications satellite orbiting in deep space sounds like rocket science, but it boils down to three fundamental angles: **Azimuth (compass direction)**, **Elevation (upward tilt)**, and **Polarization Skew (LNB rotation)**.

Geostationary satellites orbit at an altitude of approximately **$35,786 \text{ km}$ ($22,236 \text{ miles}$)** directly above Earth's equator along the Clarke Belt. Because they match Earth's rotational speed, they appear stationary in the sky from the ground. However, their signal beams are focused and operating at microwave frequencies (such as Ku-band $11\text{--}18 \text{ GHz}$ and Ka-band $20\text{--}30 \text{ GHz}$). Being off-target by just **1.5 to 2 degrees** can result in a complete loss of signal.

Whether setting up a fixed satellite TV dish (DirecTV, Dish Network, Freesat, FTA), aligning a portable RV dish in a campground, or planning a clear line of sight for a Starlink satellite internet terminal, you can achieve professional alignment using your smartphone's built-in sensors.

> **In short:** To align a satellite dish:
> 1. **Plumb the mast:** Place your phone flat against the mounting mast using our [free online bubble level](/level/) to ensure it is plumb at $90.0^\circ$ on both axes.
> 2. **Find True Azimuth:** Open our [online compass](/) with **True North** enabled to point the dish toward the satellite's exact azimuth bearing without [magnetic declination](/blog/magnetic-declination-explained/) errors.
> 3. **Set Elevation Tilt:** Use the bracket degree scale or place your phone along the LNB arm with our [digital inclinometer](/level/) to set the elevation angle. (Remember: offset dishes have an internal offset angle between $20^\circ$ and $26^\circ$).
> 4. **Set LNB Skew:** Rotate the feedhorn clockwise or counter-clockwise according to your longitude difference from the satellite.
> 5. **Check Obstructions:** Use the formula $H = D \times \tan(\text{Elevation})$ to ensure trees and rooftops clear the incoming microwave beam.

---

## 1. The 3 Look Angles Explained: Azimuth, Elevation & Skew

To lock onto any satellite, an antenna must be calibrated across three distinct geometric dimensions:

```
                  THE 3 SATELLITE LOOK ANGLES
  
         1. AZIMUTH (Horizontal)           2. ELEVATION (Vertical)
                 North (000°)                     Satellite Signal
                      ▲                                  ▲
                      │                                 / 
             West ◄───┼───► East                       / Elevation Angle (E)
             (270°)   │    (090°)                     / 
                      ▼                             ┌─────────────┐
                 South (180°)                       │    DISH     │───► Horizon (0°)
                                                    └─────────────┘
                                                    
                              3. POLARIZATION SKEW
                                   Rotated LNB
                                       ┌─┐
                                     /     \
                                    │  [+]  │ ◄─── LNB feedhorn rotated 
                                     \     /       to match beam wavefront
                                       └─┘
```

### 1. Azimuth (Horizontal Direction)
Azimuth is the horizontal compass bearing measured clockwise from True North ($000^\circ$ to $360^\circ$).
- In the **Northern Hemisphere**, geostationary satellites always sit in the **Southern sky** (ranging roughly between $110^\circ$ ESE and $250^\circ$ WSW depending on the satellite's orbital longitude).
- In the **Southern Hemisphere**, geostationary satellites sit in the **Northern sky** (between $290^\circ$ WNW and $070^\circ$ ENE).

**Crucial Warning on Compass Magnetic Declination:**  
A traditional magnetic compass needle points to Magnetic North, which diverges from geographic True North by up to $20^\circ$ in places like Maine, Washington, Alaska, or New Zealand. If your satellite requires an azimuth of $192^\circ$ True, and you point your dish using an uncalibrated magnetic needle with $-14^\circ$ West declination, you will aim at $206^\circ$ True—missing the satellite entirely. Always toggle **"True North"** on our [online compass](/) to automatically compensate for local magnetic declination via the World Magnetic Model.

### 2. Elevation (Vertical Angle Above Horizon)
Elevation is the vertical angle measured from the flat horizontal plane ($0^\circ$) up to the satellite in space ($90^\circ$ is zenith, straight overhead).
- Near the equator, geostationary satellites sit high in the sky (elevation $60^\circ$ to $85^\circ$).
- In temperate zones (US, Europe, Japan), elevations typically range from $25^\circ$ to $45^\circ$.
- In far northern regions (Canada, Alaska, Scandinavia), elevations can drop below $15^\circ$, making ground clearance and terrain obstacles critical.

### 3. Polarization Skew (LNB Rotation)
Geostationary satellites transmit polarized electromagnetic waves (horizontal, vertical, or circular). Because Earth is spherical, as you move east or west of the satellite's orbital longitude, the satellite appears tilted relative to your local horizon.

The LNB (Low-Noise Block downconverter at the end of the dish arm) must be rotated in its collar by a few degrees clockwise or counter-clockwise to match the incoming signal's polarization plane. If skew is misaligned, cross-polarization interference occurs, reducing signal quality by $10\text{--}15 \text{ dB}$.

---

## 2. Offset Dishes vs. Prime Focus: Understanding Dish Tilt

One of the most confusing aspects of DIY satellite dish alignment is the difference between **prime focus dishes** and modern residential **offset dishes**.

```
    PRIME FOCUS DISH                     OFFSET DISH (Modern Residential)
    
       Satellite Ray                        Satellite Ray (Incoming at 40° Elevation)
             \                                    \
              \                                    \
               \                                    \
          ┌─────\─────┐                        ┌─────\─────┐
          │      \    │                        │      \    │  Dish Face Tilt
          │       \   │                        │       \   │  appears almost
          │        ▼  │                        │        ▼  │  vertical! (≈ 15°)
          │      [LNB]│                        │      [LNB]│
          │     (Center)                       │    (Bottom Arm)
          └───────────┘                        └───────────┘
     Dish faces DIRECTLY                   Dish faces DOWNWARD from signal
     at the satellite in space.            by the built-in Offset Angle (≈ 25°).
```

### Why Does an Offset Dish Look Like It's Pointing at the Ground?
Almost all satellite TV and portable internet dishes are **offset paraboloids**:
1. The feedhorn and LNB are mounted on a lower support arm, keeping them out of the way of incoming rays (eliminating signal shadowing).
2. The reflective surface is cut from the top section of an imaginary larger paraboloid.
3. This creates a built-in **Offset Angle** (typically between **$20^\circ$ and $26^\circ$**, commonly $22.5^\circ$ or $24^\circ$).

**The Formula for Offset Dish Physical Tilt:**
$$\text{Physical Face Angle} = \text{Satellite Elevation} - \text{Built-in Offset Angle}$$

*Example:* If your satellite elevation is $38^\circ$ and your dish has a $24^\circ$ offset angle:
$$\text{Physical Dish Tilt} = 38^\circ - 24^\circ = 14^\circ \text{ above vertical}$$

If you mistakenly tilt the physical dish face back to $38^\circ$, the incoming reflection will actually aim at $62^\circ$ in the sky, completely overshooting the satellite!

> **Pro Tip:** If using our [digital inclinometer](/level/) to set elevation, place your smartphone along the **flat metal bracket on the back of the dish** or along the **straight underside of the LNB support arm**, rather than against the curved parabolic front face.

---

## 3. Calculating Obstruction Clearance (Trees & Rooflines)

Ku-band and Ka-band satellite signals cannot penetrate tree trunks, dense foliage, roof overhangs, or neighboring buildings. Before drilling any holes into your roof or fascia board, verify that your line of sight is completely unobstructed.

```
       LINE-OF-SIGHT OBSTRUCTION CLEARANCE
       
                                             Satellite (in space)
                                                    ▲
                                                   /
                                                  /   Incoming Beam
                                                 /   at Elevation (E)
                                         ┌─────┐/
                                         │TREE │ 
                                         │     │◄─── Obstacle Height (H)
                                         │     │
                                         │     │
                  ┌─────────┐            │     │
                  │  DISH   │────────────┴─────┴───►
                  └─────────┘
                       │◄───── Distance (D) ────►│
```

### The Obstruction Clearance Formula
The maximum allowable height ($H$) of an obstacle above your dish at a distance ($D$) is calculated using trigonometry:

$$H_{\text{clearance}} = D \times \tan(E)$$

Where:
- $E$ = Satellite Elevation Angle
- $D$ = Horizontal distance from dish to the obstacle
- $H_{\text{clearance}}$ = Maximum height the obstacle can extend above the dish

### Quick Obstacle Clearance Reference Table

| Distance to Tree / Obstacle ($D$) | Elevation $25^\circ$ ($\tan = 0.466$) | Elevation $35^\circ$ ($\tan = 0.700$) | Elevation $45^\circ$ ($\tan = 1.000$) |
|:---|:---|:---|:---|
| **$10 \text{ m}$ ($33 \text{ ft}$)** | $4.7 \text{ m}$ ($15.4 \text{ ft}$) | $7.0 \text{ m}$ ($23.0 \text{ ft}$) | $10.0 \text{ m}$ ($32.8 \text{ ft}$) |
| **$20 \text{ m}$ ($66 \text{ ft}$)** | $9.3 \text{ m}$ ($30.5 \text{ ft}$) | $14.0 \text{ m}$ ($46.0 \text{ ft}$) | $20.0 \text{ m}$ ($65.6 \text{ ft}$) |
| **$30 \text{ m}$ ($98 \text{ ft}$)** | $14.0 \text{ m}$ ($45.9 \text{ ft}$) | $21.0 \text{ m}$ ($68.9 \text{ ft}$) | $30.0 \text{ m}$ ($98.4 \text{ ft}$) |
| **$50 \text{ m}$ ($164 \text{ ft}$)** | $23.3 \text{ m}$ ($76.4 \text{ ft}$) | $35.0 \text{ m}$ ($114.8 \text{ ft}$) | $50.0 \text{ m}$ ($164.0 \text{ ft}$) |

> **How to Sight Line-of-Sight with Your Phone:**  
> Open our [online bubble level / inclinometer](/level/). Hold your phone up along the edge of your hand like a sight, tilted upward at your required elevation angle. Look along the top edge of the phone toward the azimuth direction: if you see open sky above the trees or roofline, your signal path is clear.

---

## 4. Step-by-Step Satellite Dish Alignment Guide

Follow this proven professional procedure to align your dish on the first attempt:

### Step 1: Plumb the Mounting Mast (The Most Critical Step)
Over 80% of DIY alignment failures stem from an unplumb mast. If the vertical pipe tilts even $2^\circ$ off perpendicular, adjusting your azimuth will simultaneously change your elevation, turning alignment into an impossible puzzle.
1. Mount the bracket securely to the wall, eave, or ground pole.
2. Open our [bubble level](/level/) on your phone.
3. Place the side edge of your phone vertically against the front of the pipe; adjust bracket bolts until it reads **$90.0^\circ$ vertical** (pitch $0.0^\circ$).
4. Move the phone $90^\circ$ around the pipe to check the side; adjust until it reads **$90.0^\circ$ vertical** (roll $0.0^\circ$).
5. Tighten all bracket support struts completely before mounting the dish reflector.

```
       PLUMBING THE MAST (90° Both Axes)
       
              [Phone]  Front Check                   [Phone]  Side Check
             ┌───────┐                              ┌───────┐
             │ 90.0° │                              │ 90.0° │
             │ Level │                              │ Level │
             └───────┘                              └───────┘
                 ││  ◄── Must be perfectly              ││  ◄── Must be perfectly
                 ││      vertical from front            ││      vertical from side
                 ││                                     ││
            ═════╧╧═════                           ═════╧╧═════
```

### Step 2: Determine Your Look Angles
Check your satellite provider's specifications or look-angle charts for your geographic location. For example, popular satellites include:
- **Astra 28.2°E** (UK / Europe Freesat & Sky)
- **Astra 19.2°E** / **Hotbird 13°E** (Continental Europe)
- **DirecTV 101°W / 103°W / 99°W** (North America)
- **Dish Network 110°W / 119°W / 129°W** (North America)
- **Optus D1 / D2** (Australia & New Zealand)

Record the three required values:
- **True Azimuth:** e.g., $142.5^\circ$
- **Elevation Angle:** e.g., $32.0^\circ$
- **LNB Polarization Skew:** e.g., $-11.0^\circ$

### Step 3: Preset LNB Polarization Skew
Before hoisting the dish into place:
1. Loosen the LNB collar clamp screws slightly.
2. Looking from the front of the dish into the LNB:
   - **Negative Skew (Counter-Clockwise):** If skew is negative, rotate the LNB slightly counter-clockwise (to the right when looking at the dish face).
   - **Positive Skew (Clockwise):** If skew is positive, rotate the LNB clockwise.
3. Tighten the collar clamp gently so the LNB stays fixed during mounting.

### Step 4: Preset the Elevation Angle
Most dish mounting brackets have stamped degree markings on the side pivot bracket.
1. Loosen the elevation pivot nuts on both sides of the bracket.
2. Tilt the dish until the stamped indicator pointer aligns with your calculated elevation degree mark (e.g., $32^\circ$).
3. Snug the elevation nuts firmly, but leave enough give for fine-tuning.

### Step 5: Acquire Azimuth with the Online Compass
1. Stand directly behind the dish, looking along the center line toward the LNB feed arm.
2. Open our [online compass](/) on your smartphone.
3. Ensure the mode is toggled to **True North** so that local declination is automatically compensated.
4. Rotate your body until the large numeric readout displays your target satellite azimuth (e.g., $142^\circ$ SE).
5. Sight a distant landmark (a distinct chimney, treetop, or ridge line) that falls exactly along this heading line.
6. Swing the dish horizontally until the LNB arm points directly along this line of sight.
7. Snug the mast collar clamps so the dish holds its heading but can still be nudged by hand.

```
       SIGHTING AZIMUTH WITH THE ONLINE COMPASS
       
                 Target Satellite Bearing (e.g., 142° SE)
                                 ▲
                                 │   Distant Landmark (Tree/Chimney)
                                 │
                           ┌───────────┐
                           │   DISH    │
                           └─────┬─────┘
                                 │
                          [Phone Compass] 
                           142° True SE
                                 │
                           [ Installer ]
```

### Step 6: Fine-Tuning with a Signal Meter or Receiver
1. Connect your satellite receiver or an inline digital satellite beeper/meter to the coax cable.
2. Set the receiver to a known active transponder frequency.
3. **Sweep Azimuth Slowly:** Slowly rotate the dish by $1^\circ$ (a movement of just a few millimeters at the dish rim). Wait 3 to 5 seconds for the digital receiver tuner to lock and decode.
4. When the signal tone sounds or the signal quality bar turns green, continue nudging slowly until maximum signal quality (Eb/N0 or SNR dB) is achieved.
5. **Fine-Tune Elevation:** Loosen the elevation bolts slightly and nudge the dish upward by $1^\circ$, then downward by $1^\circ$ to find the absolute peak signal.
6. **Final Tightening:** Tighten all nuts in an alternating criss-cross pattern. Monitor the signal meter continuously while tightening, as tightening one bolt can pull the dish off-target by a fraction of a degree.

---

## 5. Starlink Satellite Internet: Modern Phased-Array Alignment

Unlike traditional parabolic dishes that focus microwave signals onto a fixed LNB feedhorn, **Starlink user terminals** utilize electronic phased-array beamforming antennas.

```
      TRADITIONAL GEO DISH                  STARLINK PHASED ARRAY
      
        Parabolic Dish                       Flat Active Phased Array
              \                                      \
               \                                      \
              [LNB]                                ┌─────────────┐
          Single fixed                             │░░░░░░░░░░░░░│ Thousands of micro-antennas
          satellite target                         └─────────────┘ steer beam electronically
          (35,786 km Clarke Belt)                  (550 km Low-Earth Orbit Constellation)
```

### Key Differences When Aligning Starlink:
1. **Low Earth Orbit (LEO) vs. Geostationary:** Starlink satellites orbit at only **$550 \text{ km}$ ($340 \text{ miles}$)** altitude, zooming across the sky at $27,000 \text{ km/h}$ ($17,000 \text{ mph}$).
2. **Motorized Self-Alignment (Standard & High Performance):** Starlink V1 (round) and V2 (rectangular standard motorized) feature internal stepper motors. The terminal uses internal GPS and gyro sensors to point itself automatically.
3. **Gen 3 / Flat Terminals Require Manual Orientation:** The newer Gen 3 Starlink Standard (non-motorized kickstand model) and Flat High Performance terminals require manual horizontal orientation using the Starlink app and a compass.
4. **Why Does Starlink Face North in the Northern Hemisphere?**  
   Many new Starlink owners are surprised to find their dish pointing North rather than South. The International Telecommunication Union (ITU) mandates that LEO satellite constellations like Starlink must not beam radio frequency energy into the geostationary Clarke Belt located above the equator. To avoid jamming traditional TV and weather satellites, Starlink antennas in North America and Europe tilt toward the **Northern sky ($340^\circ\text{--}020^\circ$)**.
5. **Zero Obstruction Requirement:** Because Starlink handoffs occur every few minutes between low-orbit satellites traveling across the entire sky arc, even a single tree branch will cause dropped packets and video call freezing. Use our [online compass](/) and [bubble level](/level/) to pre-scan your rooftop and ensure a completely open $100^\circ\text{--}110^\circ$ cone of view to the north.

---

## 6. The Sun Outage Sighting Method (No Equipment Needed)

Did you know that twice a year, nature provides an exact visual pointer to any geostationary satellite?

During the **spring and autumn equinoxes** (early March and early October), the sun's apparent path across the sky passes directly behind the geostationary satellite arc. For a few minutes each day over a 5-day period, the sun sits at the **exact same azimuth and elevation** as your target satellite. This phenomenon is known as a **solar sun outage**.

```
       THE SUN SIGHTING METHOD (Equinox Alignment)
       
                                              Sun (Directly behind satellite)
                                                       ☼
                                                      /
                                                     /  Sunlight casts direct
                                                    /   shadow of LNB onto
                                              ┌────/──────┐
                                              │   /       │
                                              │ [LNB]     │
                                              │  Shadow   │
                                              └───────────┘
```

1. Look up your local "Sun Outage Time" for your target satellite (available on satellite tracking tables).
2. At the exact specified minute, go out to your dish.
3. The sun will be shining from the exact coordinates of the satellite in outer space.
4. If sunlight reaches your dish location, you are guaranteed **100% obstruction-free line of sight**.
5. If the shadow of the LNB feedhorn falls directly in the dead center of the dish face, your dish is pointed directly at the satellite!

You can also check live solar angles at any time using our [sun position calculator](/sun/) to verify seasonal sunlight trajectories around your roofline.

---

## 7. Troubleshooting Checklist: Common Alignment Pitfalls

If you have completed the steps above but your receiver displays **"No Signal"** or **"Signal 0%"**, run through this diagnostic checklist:

- [ ] **Is the mast truly plumb?** Recheck with the [digital level](/level/) on both front and side surfaces. A $2^\circ$ mast tilt throws off both azimuth and elevation calculations.
- [ ] **Are you using True North instead of Magnetic North?** Ensure your compass heading is corrected for local declination. If you used a handheld magnetic needle without declination adjustment, your azimuth is almost certainly off by $5^\circ$ to $20^\circ$.
- [ ] **Did you compensate for the offset angle?** If measuring tilt on an offset dish face with an inclinometer, remember to subtract the built-in offset angle (typically $\approx 22^\circ\text{--}25^\circ$).
- [ ] **Are nearby metal objects distorting your phone compass?** Metal roof sheeting, steel railings, gutters, and tools distort phone magnetometers. Stand 2 meters back from large steel structures when taking your azimuth reading on our [online compass](/), then sight forward to the dish.
- [ ] **Did you catch an adjacent satellite?** Geostationary satellites are spaced every $2^\circ$ or $3^\circ$ along the equatorial arc. It is very common to accidentally peak signal on a neighboring satellite with similar transponder frequencies. Confirm the Network ID (NID) on your receiver's signal diagnostic screen.
- [ ] **Are coax cable connectors clean?** Ensure the center copper conductor extends 2 mm past the F-connector rim and that no stray braided ground shield wires are touching the center pin.

---

## Recommended Navigation & Alignment Tools

- [**Live Online Compass**](/) — Real-time 360° heading with automatic True North declination correction.
- [**Online Bubble Level & Inclinometer**](/level/) — High-precision digital spirit level for mast plumbing and dish elevation angle measurement.
- [**GPS Coordinates & Altitude Finder**](/location/) — Instantly retrieve your latitude, longitude, and elevation for precise look angle calculation.
- [**Sun Position Calculator**](/sun/) — Live solar azimuth and elevation to verify line of sight and sun outage timing.
- [**Magnetic Declination Explained**](/blog/magnetic-declination-explained/) — Learn how Earth's magnetic field varies globally and why True North is essential for satellite positioning.

