---
title: "Why Your Car Speedometer and GPS Disagree: The Science of Satellite Kinematics"
description: "Ever noticed your car speedometer shows 70 mph while phone GPS says 66? Learn why car speedometers intentionally read high, how GPS Doppler shift calculates true ground speed, and how altitude accuracy works."
pubDate: 2026-10-31
author: "True Online Compass"
keywords:
  - gps vs car speedometer
  - why speedometer different from gps
  - is gps speedometer accurate
  - car speedometer reads higher than gps
  - unece regulation 39
  - gps doppler shift speed
  - gps altitude accuracy
  - wgs84 vs sea level altitude
  - phone gps speed tracker
  - how car speedometers work
---

Set your cruise control to exactly 70 mph (or 100 km/h) on a straight, empty motorway. Now glance down at Google Maps, Waze, or an [online GPS speedometer](/speedometer/) on your phone. Almost without exception, the satellite reading shows 66–67 mph (or 95–96 km/h).

Every day, millions of drivers notice this 3 to 5 mph gap and wonder: **is my phone GPS lagging, or has my car dashboard been lying to me?**

The short answer: **your GPS is almost certainly right, and your car is deliberately designed to overestimate your speed.** 

This comprehensive guide unpacks the legal mandates forcing automakers to inflate dashboard speeds, the physics of tire wear and rotational sensors, the ingenious Doppler-shift math satellites use to track velocity, and why GPS vertical elevation behaves so differently from horizontal speed.

> **In short:** Automobile manufacturers are legally forbidden by international regulations (such as UNECE Regulation 39) from ever displaying a speed lower than your true velocity. To protect against legal liability, tire wear, and temperature fluctuations, manufacturers calibrate dashboard clusters to read 3% to 8% fast. Meanwhile, modern multi-constellation GNSS receivers measure true ground velocity directly via carrier-frequency Doppler shift with an accuracy of ±0.1 km/h.

---

## The Legal Trap: Why Speedometers Never Underreport

Automobile manufacturers do not inflate speedometer readings by accident or poor engineering. They do it because underreporting vehicle speed carries catastrophic legal penalties.

If a vehicle manufacturer sold cars whose speedometers read 68 mph when the vehicle was actually traveling at 72 mph, drivers caught by radar speed traps would face speeding tickets, penalty points, or reckless driving charges through no fault of their own. Class-action lawsuits would swiftly follow.

To prevent this, international transport bodies established strict calibration guidelines. The most influential standard across Europe, Asia, Australia, and much of the world is **UNECE Regulation 39** (United Nations Economic Commission for Europe).

The regulation specifies that the indicated speed ($V_1$) must relate to the true speed ($V_2$) according to this strict mathematical boundary:

$$0 \le (V_1 - V_2) \le 0.1 \times V_2 + 4\text{ km/h}$$

Let us translate that formula into real-world highway numbers:

| True Actual Speed ($V_2$) | Minimum Permitted Display | Maximum Legal Display ($V_1$) | Allowable Factory Buffer |
| :--- | :--- | :--- | :--- |
| **50 km/h** (~31 mph) | 50.0 km/h | 59.0 km/h | Up to +9.0 km/h (+18%) |
| **80 km/h** (~50 mph) | 80.0 km/h | 92.0 km/h | Up to +12.0 km/h (+15%) |
| **100 km/h** (~62 mph) | 100.0 km/h | 114.0 km/h | Up to +14.0 km/h (+14%) |
| **130 km/h** (~81 mph) | 130.0 km/h | 147.0 km/h | Up to +17.0 km/h (+13%) |

Notice the most crucial part of the inequality: **$V_1 - V_2 \ge 0$**. 

Under no circumstances may the indicated speed ever dip below the true speed by even 0.1 km/h under production testing. In the United States, Federal Motor Vehicle Safety Standard (FMVSS) No. 101 and SAE standards similarly enforce that commercial vehicle speedometers may have zero negative tolerance at highway speeds.

Because every mechanical component in a mass-produced vehicle has microscopic manufacturing tolerances, engineers cannot simply calibrate the needle to target 100.0% true speed. If they targeted 100%, random component variations, tire pressures, and manufacturing margins would cause roughly half of all cars to underreport by 1% or 2%. 

To guarantee that 100% of vehicles leaving the factory floor comply with the law under all conditions, automakers deliberately build in a **positive safety margin of +3% to +6%**.

---

## The Mechanical Variables: Tires and Rolling Circumference

While the instrument cluster software adds an intentional electronic buffer, physical mechanical factors further distort how a car computes its own speed.

Cars do not measure speed by observing how fast the landscape passes by. Instead, magnetic tone rings on the wheel hubs (the Anti-lock Braking System / ABS wheel speed sensors) count how many times the drive axles rotate per second. The vehicle's engine control module (ECM) multiplies wheel revolutions by the expected rolling circumference of the tire:

$$\text{Vehicle Speed} = \text{Wheel RPM} \times \text{Tire Circumference}$$

The flaw in this calculation is that **tire circumference is never constant**. Consider what changes the rolling radius of a tire during normal driving:

### 1. Tread Wear
A brand new passenger tire typically features 8 mm (10/32 inch) of rubber tread depth. When worn down to the legal minimum of 1.6 mm (2/32 inch), the tire's diameter has decreased by 12.8 mm across both sides. 

For a common 205/55R16 tire, this loss in diameter reduces the rolling circumference from roughly 1,985 mm to 1,945 mm—a reduction of approximately **2.0%**. Because the smaller tire must spin 2% more times to cover the same distance, the car's computer assumes the vehicle is traveling 2% faster than it actually is.

### 2. Inflation Pressure
An under-inflated tire sags under the weight of the chassis, shortening the distance between the axle center and the asphalt (the dynamic rolling radius). Just like worn tread, under-inflation causes the wheel to spin faster at a given road speed, driving the dashboard speedometer reading even higher.

### 3. Centrifugal Growth & Temperature
At sustained highway speeds of 70+ mph, centrifugal force pulls the tire carcass outward, slightly expanding the outer diameter, while internal air temperature increases pressure by 3 to 5 PSI. 

### 4. Aftermarket Wheels and Replacements
If you switch from 16-inch winter wheels with tall sidewalls to 18-inch low-profile summer rims, even a minor variance in overall rolling diameter of 1.5% will alter your speedometer calibration by 1 to 2 mph.

Automakers are acutely aware of these variables. Knowing that a customer might install brand-new oversized tires, they must ensure the speedometer *still* does not underreport. Consequently, the factory offset is biased upward from day one.

---

## How Phone GPS Measures Speed: Doppler Shift vs Delta-Position

Now let us examine the other side of the dashboard: the smartphone mounted to your air vent. How does an [online GPS speedometer](/speedometer/) calculate your velocity, and why is it so much more trustworthy than a mechanical wheel sensor?

Many people believe that GPS calculates speed by measuring how far you traveled between two coordinates over time:

$$\text{Speed} = \frac{\text{Distance between Point A and Point B}}{\Delta t}$$

While basic or older GPS units did rely on position differentiation as a crude fallback, that method is susceptible to positional jitter. If your calculated position randomly shifts by 3 meters east due to atmospheric interference, calculating speed purely from position differences would cause the speedometer needle to spike erratically.

Modern GNSS receivers (including the chips inside iPhones, Android devices, Apple Watches, and automotive navigation units) compute velocity using **carrier-phase Doppler shift**.

```
   [GPS Satellite: 20,200 km Orbit]
         \
          \ L1 Radio Signal (1575.42 MHz)
           \  
            \   Frequency increases as vehicle moves toward satellite (+Δf)
             \  Frequency decreases as vehicle moves away (-Δf)
              v
       [Moving Vehicle with Smartphone] ---> True Ground Velocity Vector (v_x, v_y, v_z)
```

Each satellite in the GPS, Galileo (Europe), GLONASS (Russia), and BeiDou (China) constellations continuously transmits high-frequency microwave radio signals on precise carrier bands (such as L1 at 1575.42 MHz and L5 at 1176.45 MHz), stabilized by on-board atomic clocks.

As your vehicle moves across the Earth's surface relative to these orbiting satellites (which are themselves moving at 3.9 km/s), the frequency of the incoming radio waves shifts slightly—the exact same Doppler effect that causes a passing ambulance siren to drop in pitch:

$$\Delta f = f_0 \frac{\mathbf{v}_{\text{rel}} \cdot \mathbf{u}}{c}$$

Where:
- $\Delta f$ is the measured Doppler frequency shift,
- $f_0$ is the known nominal carrier frequency,
- $\mathbf{v}_{\text{rel}}$ is the relative velocity vector between the satellite and your phone,
- $\mathbf{u}$ is the unit line-of-sight vector,
- $c$ is the speed of light.

Because the receiver already tracks the precise orbital velocity and trajectory of every satellite in view via its almanac data, your phone can isolate its own three-dimensional velocity vector ($\dot{x}, \dot{y}, \dot{z}$) directly from the combined Doppler shift of four or more satellites simultaneously.

Under clear sky conditions on open roads, carrier Doppler shift velocity measurements are accurate to **within 0.1 km/h (0.06 mph)**. The measurement is completely immune to tire wear, gear ratios, transmission slip, or wheel spin. It measures **true kinematic speed over ground**.

---

## The Speedometer Accuracy Comparison

To see why the discrepancy exists, compare the mechanics of both systems side-by-side:

| Feature | Vehicle Dashboard Speedometer | Smartphone GPS Speedometer |
| :--- | :--- | :--- |
| **Primary Sensor** | ABS wheel hub tone rings & transmission shaft sensors | Multi-constellation GNSS receiver (GPS, GLONASS, Galileo) |
| **Measurement Technique** | Rotational pulse counts multiplied by estimated tire circumference | Carrier-wave microwave Doppler shift + kinematic filtering |
| **Typical Accuracy** | +3% to +8% over actual road speed (deliberately high) | ±0.1 km/h (±0.06 mph) under open sky |
| **Tire Wear Impact** | Up to 2% error as tread wears down from 8 mm to 2 mm | **Zero** — completely independent of vehicle mechanics |
| **Tire Pressure Impact** | Under-inflation increases displayed speed error | **Zero** — measures true ground displacement |
| **Latency & Responsiveness** | Instantaneous (sub-50 millisecond electronic response) | 0.5 to 1.0 second smoothing latency |
| **Performance in Tunnels** | Works uninterrupted through tunnels, parking garages, and canyons | Loses signal or relies on phone dead-reckoning accelerometers |
| **Legal Constraint** | Forbidden by law from underreporting ($V_1 \ge V_2$) | Unbiased mathematical ground truth |

---

## The Elevation Paradox: Why GPS Altitude Is Less Accurate Than Speed

While an online GPS speedometer provides near-flawless horizontal speed, users frequently notice that the **altimeter reading** takes longer to stabilize and has an accuracy margin of ±5 to ±15 meters (±16 to ±50 feet).

Why can satellites calculate your speed down to a fraction of a mile per hour, yet struggle to pinpoint your exact elevation above sea level?

The explanation lies in two factors: **geometric satellite dilution** and the **mathematical definition of sea level**.

### 1. Satellite Geometry: HDOP vs VDOP
To calculate a 3D position, your phone solves for four unknowns: latitude ($x$), longitude ($y$), altitude ($z$), and receiver clock bias ($t$).

For horizontal position (latitude and longitude), satellites can surround your phone from all cardinal compass directions: North, South, East, and West. This balanced spread creates a low **Horizontal Dilution of Precision (HDOP)**.

```
       [Sat 1]       [Sat 2]       [Sat 3]
           \            |            /
            \           |           /
             \          |          /
              v         v         v
                     [Phone]
     --------------------------------------- Earth Surface
          (NO SATELLITES BENEATH YOUR FEET)
```

For vertical elevation, however, **every single satellite in space is above your horizon**. Earth itself is an opaque, solid sphere that blocks all radio signals from satellites on the other side of the globe. Because there are no satellites below your feet to counterbalance the satellites overhead, the geometry is fundamentally asymmetrical.

This geometric deficit makes **Vertical Dilution of Precision (VDOP)** roughly **1.5 to 2.5 times worse** than horizontal accuracy. If your phone achieves a horizontal accuracy radius of ±3 meters, its raw vertical accuracy is typically ±6 to ±10 meters.

### 2. WGS-84 Ellipsoid vs Mean Sea Level (The Geoid)
The second challenge is defining what "altitude" actually means:

```
  Topographic Surface (Mountains, Valleys)   /\_/\
                                           /     \
  Geoid / Mean Sea Level (MSL)  ~~~~~~~~~~~~~~~~~~~~~~~~~ (Gravitational Equipotential)
  
  WGS-84 Reference Ellipsoid   ------------------------- (Smooth Mathematical Model)
```

- **The WGS-84 Ellipsoid:** GPS coordinates are calculated relative to a smooth, idealized geometric ellipsoid (the World Geodetic System 1984).
- **The Geoid (Mean Sea Level):** True sea level is not a smooth ellipsoid. Variations in the density of Earth's crust and magma mantle cause local gravity to vary, pulling ocean water into gravitational hills and valleys. The **geoid** is the irregular equipotential surface that corresponds to true global mean sea level (MSL).
- **The Difference (Geoid Undulation):** The vertical separation between the smooth WGS-84 ellipsoid and true Mean Sea Level ranges from **-106 meters to +85 meters** depending on where you stand on Earth!

Modern web browsers query the device's native geolocation hardware via the W3C Geolocation API. High-end devices apply internal geoid compensation models (such as EGM96 or EGM2008) to convert raw ellipsoidal height into true height above mean sea level. You can see your live altitude and real-time accuracy margin directly using our [free GPS altimeter](/speedometer/).

---

## When Does GPS Speed Lose Its Accuracy?

Although GPS speed is superior to a dashboard speedometer 98% of the time, there are specific environmental scenarios where satellite speed tracking degrades:

### 1. Sudden, Violent Braking or Acceleration
Because GPS receivers apply an internal Kalman filter to smooth out radio noise, they typically update velocity 1 to 5 times per second. If you slam on the brakes in an emergency stop, your mechanical speedometer needle drops immediately, whereas the GPS display will take approximately 0.5 to 1.0 second to catch up.

### 2. Urban Canyons and Multipath Reflection
When driving through dense downtown city centers flanked by glass and steel skyscrapers (such as Manhattan, Chicago, or Tokyo), satellite signals bounce off building facades before reaching your phone antenna. These reflected paths travel farther, creating **multipath propagation delays** that can introduce temporary velocity blips.

### 3. Tunnels and Sub-Surface Roads
Radio waves at 1.5 GHz cannot penetrate rock, concrete, or dense earth. When you enter a highway tunnel, satellite reception cuts out entirely. 

### 4. Extreme Vertical Grade Transitions
GPS speed measures ground speed in three dimensions. However, on exceptionally steep mountain inclines (such as 15% to 20% alpine switchbacks), standard horizontal mapping software that ignores the vertical $z$-vector may calculate a slightly compressed velocity. You can verify your exact slope grade and tilt using the [digital spirit level / inclinometer](/level/).

---

## How to Test and Verify Your Speedometer

If you want to know the exact calibration offset of your personal vehicle, follow this simple calibration test:

```
+--------------------------------------------------------------------------+
|                       SPEEDOMETER CALIBRATION TEST                       |
|                                                                          |
| 1. Find a flat, open highway section with clear sky view.                |
| 2. Open https://trueonlinecompass.com/speedometer/ on your mobile phone. |
| 3. Stabilize your vehicle at steady cruise control (e.g. 60 or 70 mph).  |
| 4. Compare dashboard needle with the live digital GPS readout.           |
|                                                                          |
| Formula: Offset % = ((Dash Speed - GPS Speed) / GPS Speed) * 100         |
+--------------------------------------------------------------------------+
```

1. **Choose an Open Route:** Find a straight, flat stretch of interstate or dual carriageway away from tall overpasses or urban high-rises.
2. **Mount Your Phone Securely:** Place your smartphone in an eye-level dashboard cradle with an unobstructed view through the windshield.
3. **Open the GPS Speedometer:** Navigate to the [Online GPS Speedometer](/speedometer/) in your browser. Wait 5 to 10 seconds until the status badge displays **GPS Locked · High Precision**.
4. **Engage Cruise Control:** Set your vehicle's cruise control to a round number—such as **60 mph** (or **100 km/h**)—on flat terrain.
5. **Note the Steady-State Reading:** After holding speed for 15 seconds, observe the GPS display:
   - If your dash indicates **70 mph** while GPS reads **66.5 mph**, your vehicle has a **+5.2% factory buffer**.
   - If your dash indicates **100 km/h** while GPS reads **95 km/h**, your vehicle has a **+5.3% factory buffer**.

Understanding this buffer is practical: when passing speed cameras or police radar vans, knowing your vehicle's true GPS ground speed ensures you avoid both unintentional speeding tickets and unnecessarily crawling well below the posted limit.

---

## Frequently Asked Questions

### Can I get a speeding ticket if my GPS speedometer says I was within the limit?
Traffic enforcement radar and laser (LIDAR) guns measure true vehicle ground speed using the exact same Doppler shift principle as GPS satellites. If your vehicle was clocked speeding by police radar, your speedometer likely read even higher than what the officer recorded. However, GPS logs from consumer phones are rarely accepted in traffic court as definitive legal defense because consumer hardware does not possess certified chain-of-custody calibration seals.

### Do police speed cameras use GPS or radar?
Fixed speed cameras generally use Doppler radar, roadside laser pulses, or inductive piezoelectric loops cut into the road surface. Average speed check zones (SPECS / ANPR cameras) read your license plate at two distant gantries and compute average velocity over distance using synchronized atomic clocks:

$$\text{Average Speed} = \frac{\text{Distance between Gantries}}{\text{Time Elapsed}}$$

Because average speed cameras measure actual distance over time, your true GPS speed matches camera calculations far more closely than your dashboard speedometer.

### Why does my GPS speedometer show speed when I am sitting still?
When stationary, slight atmospheric fluctuations and ionospheric delays cause the calculated satellite pseudorange to shift by fractions of a meter from second to second. In cheaper apps without filtering, this creates "stationary drift" of 0.5 to 2 km/h. High-quality tools like our [GPS Speedometer](/speedometer/) integrate a **stationary jitter filter** that automatically snaps the gauge to zero whenever movement falls below walking threshold.

### How does magnetic heading relate to GPS course over ground?
A magnetic compass (like our [online digital compass](/compass/)) measures the physical direction your device chassis is pointing relative to Earth's magnetic field. A GPS speedometer, by contrast, measures your **Course Over Ground (COG)**—the direction your vehicle is actually moving across the landscape. 

If your car is parked facing North, the compass reads 0° (North). If your car slides sideways on black ice heading East, the compass still reads North, but the GPS course heading will report East (90°). At highway speeds on dry roads, your compass heading and GPS course generally align once adjusted for [magnetic declination](/blog/magnetic-declination-explained/).

---

## Explore More Navigation & Sensor Tools

- **[GPS Speedometer & Altimeter](/speedometer/):** Test your live velocity, peak speed, trip distance, and altitude above sea level in your browser.
- **[Digital Compass](/compass/):** Accurate live heading with true north vs. magnetic north toggle and magnetic declination calculation.
- **[Bubble Level & Inclinometer](/level/):** Measure surface level, roll, pitch, and slope grade percentage with your phone's gyroscope.
- **[Bearing & Distance Calculator](/bearing/):** Calculate Great-Circle routes, initial headings, and convert between DD, DMS, and UTM coordinates.

