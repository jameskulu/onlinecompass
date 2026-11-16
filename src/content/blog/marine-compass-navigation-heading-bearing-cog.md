---
title: "Marine Compass Navigation: Heading vs Bearing vs Course Over Ground (COG) Explained"
description: "Master coastal and offshore navigation. Learn the critical differences between Compass Heading, Bearing, Course Over Ground (COG), Speed Over Ground (SOG), and how to calculate Set, Drift, and Leeway."
pubDate: 2026-11-16
author: "True Online Compass"
keywords:
  - heading vs bearing vs course
  - course over ground vs heading
  - cog vs heading marine navigation
  - marine compass navigation guide
  - speed over ground vs speed through water
  - how to calculate set and drift
  - tvmdc compass rule explained
  - boat leeway wind drift navigation
  - course to steer calculation
  - gps cog vs magnetic heading
---

Ask a seasoned skipper which direction their boat is traveling, and they might give you three completely different numbers:
- *"Our bow is pointing at $090^\circ$ East."*
- *"The lighthouse bearing is $082^\circ$."*
- *"Our GPS Course Over Ground is $105^\circ$ ESE."*

To a beginner boater, sailor, or coastal kayaker, hearing three conflicting directions for a single vessel sounds alarming. Yet in marine navigation, these three numbers describe fundamentally different physical realities.

A boat travels through a fluid medium (water) that is itself moving across the planet's seabed (tidal currents and ocean rivers), while the wind pushes against the hull and superstructure (leeway). If you point your boat directly at a harbor entrance without accounting for cross-currents, you will miss the channel and run aground on a sandbar.

Understanding the relationship between **Compass Heading**, **Navigational Bearing**, and **Course Over Ground (COG)** is the cornerstone of safe coastal piloting, RYA Yachtmaster certifications, and US Coast Guard navigation exams.

> **In short:**
> - **Heading (HDG):** The compass direction your vessel's bow is pointing in real time. Measured by a magnetic or [online compass](/).
> - **Bearing (BRG):** The direction from your vessel toward a specific landmark, beacon, or waypoint. Calculated using our [bearing calculator](/bearing/).
> - **Course Over Ground (COG):** The actual track your vessel is moving across Earth's seabed after tidal currents and wind leeway push you sideways. Measured by satellite GPS with our [speedometer & COG tool](/speedometer/).
> - **Speed Over Ground (SOG) vs. Speed Through Water (STW):** A boat moving at 6 knots through the water against a 2-knot head current moves at an SOG of only 4 knots across the bottom.

---

## 1. The 4 Fundamental Marine Angles Defined

To safely navigate coastal waters, every mariner must distinguish between four distinct directional terms:

```
                  THE 4 NAVIGATIONAL ANGLES AT SEA
                  
                                           Heading (090° East)
                                           Where bow points
                                                  ▲
                                                 /│\
                                                / │ \
                                               │  │  │
                                               │  │  │ [Boat]
                                               └──┼──┘
                                                  │
                                                  │
            Bearing (082°) ◄──────────────────────┘
            Angle to Lighthouse Waypoint          │
                                                  │   Current Set & Drift
                                                  │   (Pushes boat South)
                                                  ▼      ════►
                                               . · ' 
                                         . · '
                                   . · '
                             . · '
                       . · '
                 ▼ · '
       Course Over Ground (105° ESE)
       Actual path over the seabed (COG)
```

### 1. Heading (HDG) — "Where the Bow Points"
Heading is the direction in which the centerline of your vessel (the bow) is oriented relative to North.
- **True Heading ($H_T$):** Referenced to geographic True North ($000^\circ$).
- **Magnetic Heading ($H_M$):** Referenced to Earth's Magnetic North pole.
- **Compass Heading ($H_C$):** The raw reading shown on your steering compass, which includes local magnetic deviation caused by onboard engines, iron keels, and electronics.

Your boat's heading dictates which way the propeller or sails are driving the hull through the water. However, **heading does NOT tell you where the boat is actually going over the seabed**.

### 2. Bearing (BRG) — "Where the Target Sits"
Bearing is the angular horizontal direction from your vessel's current position to a distant target—such as a harbor breakwater light, a navigation buoy, a rocky reef, or another ship.
- **Absolute Bearing:** The bearing measured from True North (e.g., *"The buoy bears $082^\circ$ True"*).
- **Relative Bearing:** The angle measured clockwise relative to your boat's bow (e.g., *"Ship spotted $030^\circ$ off our starboard bow"*).

When using our [bearing calculator](/bearing/), entering your boat's [GPS coordinates](/location/) and your waypoint coordinates calculates the exact Great Circle bearing and nautical distance.

### 3. Course Over Ground (COG) — "Where the Boat is Actually Moving"
Course Over Ground is the actual path that your vessel tracks across the bottom of the sea or lake. It is calculated by satellite navigation (GNSS/GPS) by comparing consecutive geographic position fixes over time.
- If you are cruising in calm, slack water with zero wind, your **Heading equals your COG**.
- If a 3-knot cross-tidal current flows from your port side, your bow may point at $090^\circ$ East, but your boat will crab sideways across the bottom at a COG of $110^\circ$ ESE!

You can monitor your live COG and ground velocity at any time with our [online GPS speedometer](/speedometer/).

### 4. Course to Steer (CTS) — "The Calculated Compass Target"
Course to Steer is the heading the navigator calculates on a paper or digital chart that the helmsman must maintain on the steering compass to counteract the anticipated set, drift, and wind leeway, ensuring the boat's actual COG hits the intended destination waypoint.

---

## 2. Set, Drift & Leeway: The Forces of Marine Displacement

A vessel at sea is simultaneously subjected to two independent displacement forces: **Hydrodynamic Currents** and **Aerodynamic Wind Leeway**.

```
                   THE CURRENT VECTOR TRIANGLE
                   
                        Water Track (Heading & STW: 6.0 kts @ 090°)
       Starting ──────────────────────────────────────────────────────────► (Dead Reckoning)
       Point                                                                    │
         │                                                                      │ Current Vector
         │                                                                      │ (Set 180° South,
         │                                                                      │  Drift 2.0 kts)
         │                                                                      ▼
         └─────────────────────────────────────────────────────────────────► Actual Fix
                         Ground Track (COG: 108° & SOG: 6.3 kts)
```

### 1. Tidal Current: Set and Drift
Water currents (tidal streams, river discharge, and ocean currents) push the entire mass of water—and everything floating in it—over the seabed:
- **Set:** The **direction TOWARD which** the water flows. (A current flowing toward the South has a Set of $180^\circ$. Note: this is the exact opposite of wind, which is named from the direction it blows *from*).
- **Drift:** The **speed** of the water current, measured in nautical miles per hour (**knots**).

### 2. Wind Leeway ($L$)
When wind blows against the side of a boat's hull, cabin top, and rigging, it pushes the vessel downwind sideways through the water. 
- In deep-keel sailing yachts, leeway is typically $3^\circ\text{ to }5^\circ$ when sailing close-hauled.
- In high-profile, shallow-draft powerboats, houseboats, and inflatable dinghies, leeway can push the vessel sideways by $10^\circ\text{ to }20^\circ$ in a stiff crosswind.

### The Ground Track Vector Equation
Mathematically, your actual movement across Earth is the vector sum of your water velocity and current velocity:

$$\vec{V}_{\text{COG}} = \vec{V}_{\text{Heading}} + \vec{V}_{\text{Current}} + \vec{V}_{\text{Leeway}}$$

If your boat is heading East ($090^\circ$) at $6.0 \text{ knots}$ Speed Through Water, and you encounter a tidal current setting South ($180^\circ$) at $2.0 \text{ knots}$:
- **Resulting COG:** $\arctan(2.0 / 6.0) = 18.4^\circ \implies 090^\circ + 18.4^\circ = 108.4^\circ$
- **Resulting SOG:** $\sqrt{6.0^2 + 2.0^2} = 6.32 \text{ knots}$

---

## 3. SOG vs. STW: Why Your Speedometer and Knotmeter Disagree

Just as Heading differs from COG, a boat's forward speed can be measured in two completely different ways:

```
            SPEED THROUGH WATER vs. SPEED OVER GROUND
            
         HEAD CURRENT (-2.0 kts)                    TAIL CURRENT (+2.0 kts)
         
            Water Flow ◄═══                            Water Flow ═══►
            
         ┌───────────────┐                          ┌───────────────┐
         │     BOAT      │───►                      │     BOAT      │───►
         └───────────────┘                          └───────────────┘
          Paddlewheel (STW): 6.0 kts                 Paddlewheel (STW): 6.0 kts
          GPS Speed (SOG):   4.0 kts                 GPS Speed (SOG):   8.0 kts
```

| Metric | Measured By | Reference Frame | Why It Matters |
|:---|:---|:---|:---|
| **Speed Through Water (STW)** | Paddlewheel transducer, pitot tube, or sonic impeller in hull | The water mass surrounding the hull | Governs rudder authority, sail trim, hull drag, and fuel economy. |
| **Speed Over Ground (SOG)** | Satellite GPS receiver | Fixed geographic coordinates on Earth's crust | Determines actual arrival time (ETA), headway over reefs, and anchor holding. |

If your vessel is motoring down a tidal river at $6 \text{ knots}$ STW against a $4\text{-knot}$ outgoing ebb tide, your boat moves forward at only $2 \text{ knots}$ SOG across the ground. A person walking briskly on the shore path will overtake your boat!

Conversely, if you turn around and ride that same ebb tide downstream, your hull still moves at $6 \text{ knots}$ through the water, but your [GPS speedometer](/speedometer/) will record **$10 \text{ knots}$ SOG**.

---

## 4. The TVMDC Rule: Converting Compass to True

One of the oldest mnemonics in maritime history is taught to every naval officer, merchant captain, and private pilot:

> **"True Virgins Make Dull Company — Add West, Subtract East"**  
> *(Converting True $\rightarrow$ Compass, working downwards)*
>
> **"Can Dead Men Vote Twice — Add East, Subtract West"**  
> *(Converting Compass $\rightarrow$ True, working upwards)*

```
       THE TVMDC CONVERSION CADENCE
       
         [ T ]  True Course (From Nautical Chart)
           │
           ┼─── Variation (Magnetic Declination from Compass Rose)
           │
         [ M ]  Magnetic Heading
           │
           ┼─── Deviation (Vessel's internal onboard magnetic field)
           │
         [ C ]  Compass Heading (Steering Compass on Helm)
```

### The 5 Terms Defined:
1. **[T] True Heading:** Measured relative to geographic True North. All paper charts, electronic vector charts (ENC), and navigation coordinates use True North.
2. **[V] Variation (Magnetic Declination):** The angular difference between True North and Magnetic North caused by Earth's core. Variation changes with geographic location and is printed in the center of nautical chart compass roses (e.g., *"Var $14^\circ\text{W } 2026$ (increasing $3'\text{ annually})$"*).
3. **[M] Magnetic Heading:** The heading of the vessel relative to Earth's magnetic field ($M = T \pm V$).
4. **[D] Deviation:** Magnetic distortion specific to your vessel, caused by iron keels, engines, alternators, electronics, and metal steering pedestals. Deviation changes depending on which direction the boat is pointed and is recorded on a **Vessel Deviation Card**.
5. **[C] Compass Heading:** What the steering compass needle at your helm actually reads ($C = M \pm D$).

### Step-by-Step TVMDC Example Calculation

Suppose your chart plotter indicates that the safe channel course from your waypoint to the harbor entrance is **$085^\circ$ True**. Local magnetic variation is **$12^\circ \text{ West}$**, and your boat's deviation card shows that on easterly headings, onboard engine distortion creates a **$+3^\circ \text{ East}$ deviation**:

$$\begin{array}{rll}
\text{True Course (T):} & 085^\circ & \\
\text{Variation (V):} & +12^\circ \text{ W} & \text{(Add West when going down)} \\
\hline
\text{Magnetic Heading (M):} & 097^\circ & \\
\text{Deviation (D):} & -3^\circ \text{ E} & \text{(Subtract East when going down)} \\
\hline
\mathbf{\text{Compass Heading to Steer (C):}} & \mathbf{094^\circ} & \text{(Helmsman steers 094° on compass)}
\end{array}$$

If the helmsman steered $085^\circ$ on the compass without applying the TVMDC calculation, the vessel would actually travel on a True course of **$076^\circ$**—missing the deep-water harbor entrance channel by almost two miles!

---

## 5. Practical Navigation: How to Keep a Straight Ground Track

In real coastal cruising, your goal is to hold your vessel along a straight track over the seabed (your intended COG) despite tidal cross-currents and wind.

```
       HOW SKIPPERS CRAB INTO A CROSS-CURRENT
       
                    Intended Course to Waypoint (090° East)
       ════════════════════════════════════════════════════════════► Target Waypoint
           ▲                       ▲                       ▲
           │                       │                       │
          /│\ Heading (078°)      /│\                     /│\
         / │ \ Bow angled        / │ \                   / │ \
        │  │  │ into current    │  │  │                 │  │  │
        └──┼──┘                 └──┼──┘                 └──┼──┘
           │                       │                       │
           │                       │                       │
       Cross-Current (2.0 kts South) pushes boat back onto 090° track line!
       ▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼
```

### The S-C-T-P Cross-Check Method:
1. **Sight a Transit / Range:** When leaving a harbor or navigating a channel, align two stationary objects in the distance (such as a lighthouse aligned with a mountain peak, or two day-markers). If the rear marker shifts to the right, your boat is drifting left of your intended track line.
2. **Compare Heading vs. COG in Real Time:**  
   - Look at your boat's steering [compass](/) heading (e.g., $078^\circ$).
   - Look at your [GPS speedometer](/speedometer/) Course Over Ground (e.g., $090^\circ$).
   - The angular difference ($12^\circ$) is your vessel's **crab angle** (leeway plus current set).
3. **Never Steer by COG Directly:** A common mistake made by novice boaters is attempting to steer the boat using the GPS COG readout like a steering compass. Because GPS calculates COG by looking backward at previous positions, COG suffers from a $2\text{--}4 \text{ second}$ latency. If you steer by COG, you will constantly over-correct, causing the boat to weave in an erratic S-curve across the water.
   - **The Rule:** *Use the GPS COG to determine the correct heading, but steer the boat by the instantaneous [compass](/)!*

---

## 6. Diagnostic Troubleshooting: 4 Common Marine Compass Errors

If your compass headings and GPS navigation tracks appear inconsistent, check these four common culprits:

### 1. The Mobile Phone Mount Magnetic Trap
Many modern boaters mount their smartphone running a chart app directly onto the helm pedestal or dashboard using a magnetic car-mount plate.  
*The Hazard:* A neodymium magnet located $15 \text{ cm}$ ($6 \text{ inches}$) from a ship's steering compass can introduce an enormous **$30^\circ\text{ to }50^\circ$ deviation error**, completely disabling the magnetic compass. Never place magnetic phone cases, radios, handheld VHF speakers, or steel tools near the steering station.

### 2. Heel Error (Sailing Vessels)
When a sailboat heels over under canvas, the iron engine block and metal keel swing out of the vessel's vertical centerline. This induces **Heeling Error**, causing the magnetic compass needle to oscillate and deviate toward high or low sides by $5^\circ\text{ to }10^\circ$. Quality marine compasses feature internal gimbal weights and compensating magnets to counteract this effect.

### 3. GPS COG Freezes at Zero Speed
When your boat is tied to a dock, anchored, or drifting at speeds under $0.5 \text{ knots}$, a GPS receiver cannot accurately determine which direction you are moving. The COG readout will either freeze on the last heading, spin wildly in random circles, or display dashed lines (`---°`).  
*The Fix:* When stationary or moving at dead slow speed, always rely on our [online digital compass](/) (which reads internal magnetometer flux sensors independently of speed) rather than satellite COG.

### 4. Chart Datum Discrepancies
When plotting bearings between older paper charts and modern GPS navigation apps, verify that both use the same geodetic datum. Older nautical charts often use regional datums (such as OSGB36 in the UK or ED50 in Europe), whereas modern satellite tools on our site use global **WGS84**. A datum mismatch can introduce position errors of several hundred meters near shallow coastlines.

---

## Recommended Navigation Tools & Field Guides

- [**Live Online Compass**](/) — Real-time 360° heading readout with automatic True North and Magnetic North switching.
- [**Satellite GPS Speedometer & COG**](/speedometer/) — Live Course Over Ground (COG), Speed Over Ground (SOG), and altitude for marine and overland travel.
- [**Bearing & Distance Calculator**](/bearing/) — Calculate true Great Circle courses and rhumb line bearings between offshore waypoints.
- [**GPS Coordinates Finder**](/location/) — High-accuracy latitude, longitude, and elevation readout in decimal degrees and nautical DMS.
- [**Dead Reckoning Navigation Guide**](/blog/dead-reckoning-navigation-guide/) — How to plot position lines using speed, time, and compass heading when GPS fails.
- [**Magnetic Declination Explained**](/blog/magnetic-declination-explained/) — The physics of Earth's magnetic core, secular variation, and how to read chart compass roses.
