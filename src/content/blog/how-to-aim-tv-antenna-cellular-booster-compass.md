---
title: "How to Aim a TV Antenna and 4G/5G Cellular Booster with a Compass: Azimuth & Signal Guide"
description: "Maximize your signal bars and data speeds. Learn how to aim directional TV antennas and 4G/5G cellular boosters using an online compass, calculate tower azimuth, plumb the mast, and clear Fresnel zones."
pubDate: 2026-11-15
author: "True Online Compass"
keywords:
  - how to aim tv antenna with compass
  - how to point cell phone booster antenna with compass
  - how to find cell tower direction compass
  - yagi antenna azimuth alignment
  - directional antenna compass bearing
  - hdtv antenna pointing guide
  - cell booster yagi antenna angle
  - fresnel zone antenna clearance
  - cellmapper antenna compass orientation
  - 4g 5g directional antenna alignment
---

Whether cutting the cord to watch free high-definition broadcast television or setting up a 4G/5G cellular booster to get reliable high-speed internet in a rural home or RV, installing a high-gain directional antenna is the single most effective way to pull in weak signals.

However, directional antennas (such as **Yagi-Uda**, **Log-Periodic Dipole Arrays [LPDA]**, and **grid reflectors**) do not capture signals from every direction like simple rabbit ears or omnidirectional pucks. Instead, they focus electromagnetic reception into a narrow directional beam—often as tight as **$20^\circ$ to $40^\circ$**. 

If your antenna is aimed even **$10^\circ$ to $15^\circ$ off-target**, you can lose up to **90% of your incoming radio frequency (RF) signal power**, leading to pixelated TV channels, dropped calls, and sluggish cellular data speeds.

Using your smartphone's built-in sensors and our [online compass](/), you can calculate the exact azimuth bearing to your local transmission tower and aim your directional antenna with millimeter precision.

> **In short:** To aim a directional antenna:
> 1. **Find your tower's True Azimuth:** Locate your local broadcast or cellular tower coordinates on FCC AntennaWeb or CellMapper, and use our [bearing calculator](/bearing/) with your [GPS location](/location/) to find the exact compass degree.
> 2. **Plumb the mounting mast:** Place your phone against the pipe using our [online bubble level](/level/) to ensure the mast is straight at $90.0^\circ$ on both axes.
> 3. **Set the correct polarization:** Mount TV antenna elements **horizontally**; mount cellular booster Yagi/LPDA antennas **vertically** (or at $\pm 45^\circ$ slant for dual-feed MIMO cellular).
> 4. **Aim using True North:** Open our [online compass](/) with **True North** enabled to point the antenna directly along the tower bearing without [magnetic declination](/blog/magnetic-declination-explained/) error.
> 5. **Clear the Fresnel zone:** Ensure the direct line of sight plus the elliptical radio clearance zone is free of trees and metal buildings.

---

## 1. Directional Antennas & Beamwidth: Why Precision Aiming Matters

All antennas obey the fundamental physical law of antenna gain: **gain is achieved through directivity**. 

An omnidirectional antenna radiates and receives signal equally in a $360^\circ$ circle around the horizon. A directional antenna takes that same total electromagnetic energy and squeezes it into a narrow forward lobe, much like a flashlight reflector focuses a bulb's light into a concentrated beam.

```
       ANTENNA RADIATION PATTERNS & BEAMWIDTH
       
       OMNIDIRECTIONAL (Low Gain: 2–4 dBi)      DIRECTIONAL YAGI / LPDA (High Gain: 9–14 dBi)
                      ▲                                              ▲
                      │                                             /│\  Main Lobe (Target Beam)
               ◄──────┼──────►                                     / │ \ (Narrow 3dB Beamwidth)
                      │                                           │  │  │
                      ▼                                           │  │  │
             Receives 360° equally;                               └──┼──┘
             captures noise from all sides.                          │  ◄── Side & Back Lobes (Suppressed)
```

### The 3 dB Horizontal Beamwidth
Every directional antenna comes with a specification called the **Horizontal Beamwidth** (also called the Half-Power Beamwidth, or **HPBW**):
- **Wide Directional (Panel Antennas):** Typically $60^\circ$ to $75^\circ$ beamwidth ($7\text{--}9 \text{ dBi}$ gain). Forgiving to aim, but shorter range.
- **Medium Directional (LPDA Log-Periodic):** Typically $45^\circ$ to $55^\circ$ beamwidth ($9\text{--}11 \text{ dBi}$ gain). Excellent wideband coverage ($600\text{ MHz}$ to $2700\text{ MHz}$).
- **Narrow High-Gain (Long-Boom Yagi & Grid Antennas):** Typically $20^\circ$ to $35^\circ$ beamwidth ($12\text{--}15 \text{ dBi}$ gain). Highly sensitive; even a minor pointing error causes catastrophic signal drop.

```
         BEAMWIDTH SENSITIVITY CHART (Yagi Aiming Error)
         
                 Peak Signal (0 dB Loss)
                         ▲
                        /│\
                       / │ \   -1 dB (90% Power retained)
                      /  │  \
          -3 dB ◄─── /───┼───\ ───► -3 dB (50% Power Lost: Beamwidth Limit)
                    /    │    \
                   /     │     \
         -10 dB ◄─/──────┼──────\─► -10 dB (90% Power Lost: Unusable Channel)
                -20°    000°    +20°
                     Tower Bearing
```

If your high-gain Yagi has a $28^\circ$ beamwidth, moving the antenna just **$14^\circ$ off center cuts your received power in half (-3 dB)**. At $20^\circ$ off target, received power plummets by **-10 dB (a 90% loss of signal strength)**.

---

## 2. True Azimuth vs. Magnetic Azimuth (The Declination Trap)

The most common reason DIY installers fail to pull in distant TV stations or cellular towers is using an uncalibrated magnetic compass needle.

When you look up transmission tower locations on resources like:
- **FCC DTV Reception Maps / AntennaWeb.org** (for TV stations)
- **CellMapper.net / OpenSignal** (for 4G/5G cell towers)
- **Carrier coverage databases** (AT&T, Verizon, T-Mobile, Vodafone, Telstra)

**Every single azimuth angle provided in these databases is a TRUE BEARING (referenced to geographic True North, $000^\circ$).**

```
     Magnetic North (346°)            True North (000°)
              \                               │
               \                              │
                \   14° Magnetic Declination  │
                 \◄──────────────────────────►│
                  \                           │
                   \                          │
                    +-------------------------+
                                              │
                                              │  Target Tower Bearing: 090° True
                                              ▼
```

### How Magnetic Declination Ruins Antenna Aiming
Earth's magnetic field does not align with its rotational axis. The angular difference between Magnetic North and True North is known as **Magnetic Declination**:
- In **Seattle, Washington**, magnetic declination is approximately **$+15^\circ \text{ East}$**.
- In **Boston, Massachusetts**, declination is approximately **$-14^\circ \text{ West}$**.
- In **Denver, Colorado**, declination is approximately **$+8^\circ \text{ East}$**.

If a broadcast tower is located at **$090^\circ$ True (Due East)** in Boston, and you use an ordinary hardware magnetic compass pointing toward $090^\circ$ on the dial, your antenna is actually aimed at **$076^\circ$ True**—a massive $14^\circ$ pointing error that cuts right through the edge of a high-gain Yagi's beamwidth!

> **The Fix:** Open our [online compass](/) on your smartphone. The tool queries the World Magnetic Model (WMM) using your device's [GPS coordinates](/location/) and automatically computes your local declination. By default, the digital dial displays **True North**, ensuring that when you aim at $090^\circ$, your antenna points straight at the tower.

---

## 3. Polarization: Broadcast TV vs. 4G/5G Cellular

Radio waves propagate through space with an electric field oriented in a specific geometric plane. This is called **Polarization**. The receiving antenna elements must match the transmitting tower's polarization exactly.

```
       ANTENNA POLARIZATION ORIENTATION
       
   1. HORIZONTAL POLARIZATION            2. VERTICAL POLARIZATION            3. ±45° SLANT CROSS-POLARIZATION
        (Broadcast TV: ATSC)                 (Standard Cellular)                 (MIMO 2x2 4G/5G Cellular)
        
            ┌─────────┐                              │                                 \           /
      ══════╡  BOOM   ╞══════                        │ Elements                         \  +45°   /  -45°
            └─────────┘                              │ vertical                          \       /
         Elements lie FLAT                      ═════╪═════                             ═════╪═════
         parallel to ground.                         │ Boom                                  │
```

### 1. Broadcast Television (ATSC 1.0 & NextGen ATSC 3.0)
Over-the-air television signals in North America, Europe (DVB-T2), and most of the world use **Horizontal Polarization**:
- All dipole rods and reflector elements must lie **flat and parallel to the ground**.
- If you mount a TV Yagi with its elements standing vertically, cross-polarization isolation will cause an immediate **$15\text{--}20 \text{ dB}$ signal drop**, wiping out almost every channel.

### 2. Standard 4G/5G Cellular (Single Antenna)
Cellular base stations traditionally transmit using **Vertical Polarization**:
- If using a single Yagi or LPDA booster antenna, mount it so the cross-elements point **straight up and down** (perpendicular to the ground).

### 3. High-Speed 4G/5G MIMO ($2\times 2$ and $4\times 4$ Arrays)
Modern high-speed 5G cellular modems and gateways (such as Cradlepoint, Peplink, T-Mobile Home Internet, or Netgear Nighthawk) use **MIMO (Multiple-Input Multiple-Output)**:
- Two separate antennas (or a dual-feed cross-polarized antenna) are mounted on the mast.
- To prevent interference between the two channels, cellular carriers transmit on orthogonal **$\pm 45^\circ$ Slant Polarizations** (often called Cross-Pol or "X-Pol").
- When installing dual booster Yagis for MIMO, tilt the first antenna $45^\circ$ to the left and the second antenna $45^\circ$ to the right (forming an "X" shape when viewed from the front).

---

## 4. The Fresnel Zone: Clearing the Radio Line of Sight

Many people assume that if they can see a cell tower or broadcast mast in the distance, their signal will be pristine. However, radio frequencies do not travel in a razor-thin laser line; they expand outward into an elliptical volume of space known as the **1st Fresnel Zone** (pronounced *fra-NEL*).

```
                  THE 1ST FRESNEL ZONE CLEARANCE
                  
                           Top of Fresnel Ellipse
                             . - - - - - - .
                         . '        │        ' .
                      .             │             .
    ┌─────────┐   .                 │                 .    ┌───────────┐
    │ RECEIVE │─────────────────────┼──────────────────────│  TRANSMIT │
    │ ANTENNA │   .          Direct │ Line of Sight   .    │   TOWER   │
    └─────────┘       .             │ Radius (r)  .        └───────────┘
                         . '        │        ' .
                             . - - - - - - .
                          Bottom of Fresnel Zone
                                    │
                              ┌─────┴─────┐
                              │ Obstacle  │ ◄─── Trees, hills, or metal roofs
                              │  (Trees)  │      intruding into zone cause signal
                              └───────────┘      phase cancellation!
```

If an obstruction (such as a tree canopy, barn roof, or hilltop) penetrates into the **bottom 40% of the 1st Fresnel zone**, the radio waves bouncing off that obstacle arrive at your antenna slightly out of phase, canceling out the direct wave. This causes severe signal fading, even when direct visual line of sight appears open.

### The Fresnel Zone Radius Formula
The radius ($r$) of the 1st Fresnel zone at the midpoint between your antenna and the transmission tower is calculated as:

$$r = 8.65 \sqrt{\frac{D}{f}}$$

Where:
- $r$ = Fresnel zone radius in meters at the midpoint
- $D$ = Total link distance in kilometers
- $f$ = Transmitted frequency in Gigahertz (GHz)

*(In Imperial units: $r = 72.05 \sqrt{\frac{D}{4f}}$ with $D$ in miles, $f$ in MHz, and $r$ in feet).*

### Midpoint Fresnel Zone Radius Reference Table

| Distance to Tower ($D$) | Low-VHF TV ($60\text{ MHz}$) | UHF TV / Band 71 ($600\text{ MHz}$) | 4G LTE Mid-Band ($1.9\text{ GHz}$) | 5G C-Band ($3.5\text{ GHz}$) |
|:---|:---|:---|:---|:---|
| **$2 \text{ km}$ ($1.2 \text{ mi}$)** | $50.0 \text{ m}$ ($164 \text{ ft}$) | $15.8 \text{ m}$ ($52 \text{ ft}$) | $8.9 \text{ m}$ ($29 \text{ ft}$) | $6.5 \text{ m}$ ($21 \text{ ft}$) |
| **$5 \text{ km}$ ($3.1 \text{ mi}$)** | $79.0 \text{ m}$ ($259 \text{ ft}$) | $25.0 \text{ m}$ ($82 \text{ ft}$) | $14.0 \text{ m}$ ($46 \text{ ft}$) | $10.3 \text{ m}$ ($34 \text{ ft}$) |
| **$10 \text{ km}$ ($6.2 \text{ mi}$)**| $111.7 \text{ m}$ ($366 \text{ ft}$)| $35.3 \text{ m}$ ($116 \text{ ft}$)| $19.8 \text{ m}$ ($65 \text{ ft}$) | $14.6 \text{ m}$ ($48 \text{ ft}$) |
| **$20 \text{ km}$ ($12.4 \text{ mi}$)**| $158.0 \text{ m}$ ($518 \text{ ft}$)| $49.9 \text{ m}$ ($164 \text{ ft}$)| $28.1 \text{ m}$ ($92 \text{ ft}$) | $20.7 \text{ m}$ ($68 \text{ ft}$) |

> **Practical Takeaway:** Notice that higher frequencies (like 5G C-Band at $3.5\text{ GHz}$) have a much smaller Fresnel radius ($10\text{--}15\text{ meters}$) than lower frequencies (like TV or Band 12/71 LTE, which require $25\text{--}35\text{ meters}$ of clearance). Elevating your antenna mast by just **$2\text{ to }3 \text{ meters}$ ($6\text{ to }10 \text{ feet}$)** using a sturdy roof tripod or telescoping pole often clears the Fresnel boundary over local tree lines, turning an unstable signal into a rock-solid link.

---

## 5. Step-by-Step Antenna Sighting & Alignment Guide

Follow this standardized procedure to install and align your directional TV or cellular antenna:

### Step 1: Plumb the Mounting Mast with the Digital Level
Just like with [satellite dish alignment](/blog/how-to-align-satellite-dish-compass-elevation/), an unplumb mast will distort your antenna's elevation angle and skew as you rotate it horizontally.
1. Secure your mounting J-pole, chimney strap, or roof tripod.
2. Open our [bubble level](/level/) on your smartphone.
3. Hold the side of your phone vertically against the mast pipe on two sides ($90^\circ$ apart).
4. Adjust the bracket struts until both axes read **$90.0^\circ$ vertical** (pitch $0.0^\circ$ / roll $0.0^\circ$).

```
       PLUMBING THE ANTENNA MAST
       
            [Phone Level] Front                     [Phone Level] Side
             ┌───────────┐                           ┌───────────┐
             │   90.0°   │                           │   90.0°   │
             │   Plumb   │                           │   Plumb   │
             └───────────┘                           └───────────┘
                  ││ ◄── Must be vertical                 ││ ◄── Must be vertical
                  ││     from front                       ││     from side
                  ││                                      ││
             ═════╧╧═════                            ═════╧╧═════
```

### Step 2: Determine Tower Coordinates & Target Azimuth
1. Visit **AntennaWeb.org** (for TV) or **CellMapper.net** (for cellular).
2. Enter your street address or current [GPS coordinates](/location/).
3. Identify the optimal tower:
   - For TV: Look for the cluster of major network transmitters (ABC, CBS, NBC, FOX, PBS). They are often co-located on a single high ridge or antenna farm.
   - For Cellular: Locate the closest tower matching your mobile network operator with direct line of sight.
4. Note the **True Azimuth** (e.g., $248^\circ$ WSW) and the distance (e.g., $18.4 \text{ km}$).

### Step 3: Preset Antenna Polarization
- **For Broadcast TV:** Mount the antenna on the mast so that the reflector grid and cross-dipoles lie **horizontal**.
- **For 4G/5G Cellular Yagi/LPDA:** Mount with elements **vertical** (for single antenna) or **$\pm 45^\circ$ slant** (for dual MIMO antennas).
- Leave the U-bolt mounting clamps snug enough to hold the antenna, but loose enough to rotate by hand.

### Step 4: Sight the Compass Azimuth
1. Stand directly behind the antenna, sighting along the longitudinal central boom toward the front director elements.
2. Open our [online compass](/) on your smartphone. Ensure **True North** mode is active.
3. Hold your phone flat and turn until the large heading readout matches your target tower bearing (e.g., $248^\circ$).
4. Pick out a prominent landmark in the distance (a specific tree, hill crest, or water tower) that sits exactly along that heading line.
5. Aim the front tip of your antenna boom directly toward that landmark.
6. Snug the mast clamps so the antenna holds its position.

```
       SIGHTING AZIMUTH WITH THE ONLINE COMPASS
       
                 Target Tower Direction (e.g., 248° WSW)
                                 ▲
                                 │   Distant Landmark (Ridge/Tree)
                                 │
                          ┌─────────────┐
                          │   ANTENNA   │ Directional Boom
                          └──────┬──────┘
                                 │
                          [Phone Compass] 
                           248° True WSW
                                 │
                           [ Installer ]
```

### Step 5: Fine-Tune Using Live Signal Diagnostics
Never rely purely on "signal bars" on a phone or TV screen; bars are arbitrary and update slowly. Use real diagnostic numbers:

#### For Broadcast TV:
1. Run an initial digital channel scan on your television tuner.
2. Tune to your weakest desired station and open the TV's internal **Signal Diagnostics** menu (usually found under *Settings > Channels > Signal Strength / Quality*).
3. Monitor **Signal Quality (SNR / Signal-to-Noise Ratio)** rather than Signal Strength. High strength with low quality indicates amplifier noise or multipath reflection.
4. Rotate the antenna in **$3^\circ$ to $5^\circ$ increments**. Wait 5 seconds at each step for the digital tuner to settle.
5. Lock the mast bolts once peak SNR is achieved.

#### For 4G/5G Cellular Boosters:
Open your cellular router's admin portal (or use Field Test Mode on your phone: `*3001#12345#*` on iPhone, or apps like *Cellular-Z* on Android). Monitor:
- **RSRP (Reference Signal Received Power):** Target between $-70 \text{ dBm}$ (excellent) and $-95 \text{ dBm}$ (good). A reading of $-115 \text{ dBm}$ is weak.
- **SINR (Signal-to-Interference-plus-Noise Ratio):** This is the key to data speed. Target $> 10 \text{ dB}$ (great) to $> 20 \text{ dB}$ (maximum download speed).
- Rotate slowly until **SINR peaks**, then tighten the U-bolts firmly.

---

## 6. Diagnostic Troubleshooting: 5 Common Alignment Mistakes

If you have aligned your antenna according to the compass bearing but reception remains poor, inspect these five common pitfalls:

### 1. Magnetic Interference on the Roof
Metal roofing panels, steel chimney flashing, wire guy lines, and galvanized gutters create strong localized magnetic deviations. If you set your phone directly on a metal roof while reading the compass, the needle can swing off by $30^\circ$ or more.  
*Solution:* Stand on a wooden ladder or step 2 meters away from major metal structures when taking your initial heading reading on our [online compass](/), sight a distant landscape landmark, and then aim the antenna at that landmark.

### 2. High Coaxial Cable Signal Loss (Attenuation)
Thin coaxial cable (such as RG-59 or standard RG-6) suffers heavy signal attenuation at high cellular frequencies ($1.9\text{--}3.5\text{ GHz}$). Running $15 \text{ meters}$ ($50 \text{ ft}$) of cheap RG-59 cable will lose **$8\text{--}12 \text{ dB}$ of signal**—completely wiping out the gain provided by your expensive Yagi antenna!  
*Solution:* For cellular installations, use low-loss **LMR-400** or **KMR-400** double-shielded cable. For TV installations, use quality solid-copper **RG-6 quad-shield**.

### 3. Multipath Ghosting and Reflection
In urban or mountainous areas, the direct line-of-sight signal may be blocked by a cliff or tall building, but a powerful reflection bounces off a nearby rock face or commercial warehouse.  
*Solution:* If aiming directly at the tower produces low SNR, sweep the antenna $360^\circ$ around the horizon while watching your signal diagnostics. Occasionally, capturing a stable reflected beam ($40^\circ$ off the true bearing) produces a clearer signal than struggling through a direct obstacle.

### 4. Overdriving the Amplifier (Overload)
Adding a high-gain preamplifier to a TV antenna or turning booster gain to maximum when you live relatively close to a high-power transmitter will overload the receiver's front-end tuner, causing digital dropouts and intermodulation distortion.  
*Solution:* If channels disappear with an amplifier connected, remove the booster and test the antenna passive. A properly aimed high-gain directional antenna often requires zero electronic amplification.

### 5. Wind Loading and Mast Flex
A long-boom Yagi or high-gain grid antenna acts like a weather vane in heavy wind. If mounted on an unbraced lightweight pipe, strong wind gusts will deflect the antenna out of its $20^\circ$ beamwidth, causing intermittent signal buffering during storms.  
*Solution:* Ensure your mast is supported by a tripod or wall brackets spaced at least $1 \text{ meter}$ ($3 \text{ ft}$) apart vertically, and verify the pipe remains plumb using our [bubble level](/level/).

---

## Recommended Tools & Reference Guides

- [**Live Online Compass**](/) — Accurate 360° digital compass with automatic World Magnetic Model True North declination correction.
- [**Online Bubble Level & Inclinometer**](/level/) — Digital spirit level to verify plumb masts and set antenna tilt angles.
- [**Bearing & Distance Calculator**](/bearing/) — Compute exact Great Circle azimuth bearings between your location and remote broadcast towers.
- [**GPS Coordinates Finder**](/location/) — Instantly retrieve your high-precision latitude, longitude, and elevation for tower map plotting.
- [**Magnetic Declination Guide**](/blog/magnetic-declination-explained/) — Learn how Earth's magnetic variation works and why True North is critical for directional RF antennas.
- [**Satellite Dish Alignment Guide**](/blog/how-to-align-satellite-dish-compass-elevation/) — Sighting geostationary satellite look angles, elevation, and LNB polarization skew.

