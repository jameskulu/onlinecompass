---
title: "How to Read, Convert, and Navigate with GPS Coordinates: DD, DMS, UTM, and Plus Codes"
description: "A complete guide to reading, understanding, and converting geographic coordinates. Learn the math behind Decimal Degrees, DMS, UTM Easting/Northing, and Plus Codes with conversion tables and emergency dispatch tips."
pubDate: 2026-11-02
author: "True Online Compass"
keywords:
  - how to read gps coordinates
  - decimal degrees to dms converter
  - utm coordinates explained
  - latitude and longitude format
  - how to convert coordinates
  - plus codes explained
  - wgs84 vs nad27
  - gps coordinates emergency dispatch
  - dms to dd formula
  - easting and northing explained
---

Whether you are coordinating a backcountry search-and-rescue team, configuring an autopilot waypoint on a maritime chartplotter, geocaching on a weekend trail, or reporting a highway accident to 911 dispatchers, geographic coordinates are the universal language of location on Earth.

Yet, anyone who has copied coordinates between Google Maps, a handheld GPS receiver, an aviation chart, or emergency dispatch software has run into the same frustrating barrier: **coordinates come in four fundamentally different notation systems**.

A single spot on the observation deck of the Empire State Building can be written as:
* **Decimal Degrees (DD):** `40.748817, -73.985428`
* **Degrees, Minutes, Seconds (DMS):** `40° 44' 55.74" N, 73° 59' 07.54" W`
* **Degrees Decimal Minutes (DDM):** `40° 44.9290' N, 73° 59.1257' W`
* **Universal Transverse Mercator (UTM):** `Zone 18T, 585672 m E, 4511317 m N`
* **Google Plus Code (OLC):** `87G8P2X7+GC`

Enter the wrong syntax, swap latitude and longitude, or misunderstand negative numbers, and you could pinpoint a location thousands of miles away in the middle of the Atlantic Ocean.

This comprehensive guide breaks down the mathematics, physical principles, conversion formulas, and practical field rules for every major coordinate system in modern use.

> **Quick Tool:** You can inspect your real-time coordinates, altitude, and sensor telemetry on our [live GPS location tool](/location/), or convert instantly between DD, DMS, UTM, and Plus Codes with great-circle distance math on our [coordinate converter & bearing calculator](/bearing/).

---

## 1. The Foundation: Latitude, Longitude, and the WGS84 Ellipsoid

Before understanding notation, it is vital to understand what the numbers actually measure.

Earth is not a perfect sphere; it is an **oblate spheroid**, flattened at the poles and bulging at the equator due to its centrifugal spin. Modern GPS technology relies on a standardized mathematical model of Earth called the **World Geodetic System 1984 (WGS84)**.

```
                  North Pole (90° N)
                      |   / Meridian (Longitude)
                      |  /
       Latitude       | /
       Parallel       |/
 ---------------------+--------------------- Equator (0°)
                     /|
                    / |
                   /  |
                      |
                  South Pole (90° S)
```

### Latitude ($\phi$): North vs. South
Latitude measures how far north or south a point is from the Equator ($0^\circ$).
* Lines of latitude are parallel circles running horizontally around the globe.
* The North Pole is $+90^\circ\text{ N}$, and the South Pole is $-90^\circ\text{ S}$.
* **Distance constant:** Because latitude lines are roughly parallel, **one degree of latitude is always approximately 111 kilometers (69 statute miles or 60 nautical miles)** everywhere on Earth.

### Longitude ($\lambda$): East vs. West
Longitude measures how far east or west a point is from the **Prime Meridian** ($0^\circ$), which passes through the Royal Observatory in Greenwich, England.
* Lines of longitude (meridians) converge at the poles and spread farthest apart at the equator.
* Longitude ranges from $0^\circ$ to $+180^\circ\text{ E}$ eastward, and $0^\circ$ to $-180^\circ\text{ W}$ westward.
* **Variable distance:** At the Equator, one degree of longitude equals ~111 km. But as meridians converge toward the poles, that distance shrinks according to the cosine of the latitude:

$$\text{Length of } 1^\circ \text{ Longitude} \approx 111.32 \text{ km} \times \cos(\text{Latitude})$$

* *At 0° (Quito, Ecuador):* $1^\circ \text{ Longitude} \approx 111.3 \text{ km}$
* *At 45° (Minneapolis or Bordeaux):* $1^\circ \text{ Longitude} \approx 111.3 \times \cos(45^\circ) \approx 78.7 \text{ km}$
* *At 60° (Oslo or Anchorage):* $1^\circ \text{ Longitude} \approx 111.3 \times \cos(60^\circ) \approx 55.7 \text{ km}$
* *At 90° (Poles):* $0 \text{ km}$ (all meridians intersect).

---

## 2. Format 1: Decimal Degrees (DD)

**Decimal Degrees** is the native language of computer code, databases, web mapping APIs (such as Google Maps, OpenStreetMap, and Mapbox), and GPS chips.

### Syntax
* Format: `±XX.XXXXXX, ±YY.YYYYYY`
* Example: `37.774929, -122.419416` (San Francisco, CA)
* First number: Latitude (positive for North, negative for South).
* Second number: Longitude (positive for East, negative for West).

### The +/- Cardinal Rule
| Hemisphere | Cardinal Letter | Mathematical Sign |
| :--- | :--- | :--- |
| **Northern** | N | Positive (`+` or omitted) |
| **Southern** | S | Negative (`-`) |
| **Eastern** | E | Positive (`+` or omitted) |
| **Western** | W | Negative (`-`) |

> ⚠️ **Common Trap:** Never write `-33.8688° S`. A double negative means North! Either write `-33.8688` or `33.8688° S`.

### How Much Does Each Decimal Place Matter?
A frequent question in geospatial work is how many decimal places are needed. Adding unnecessary digits implies false precision, while truncating too early creates massive error:

| Decimal Places | Degree Increment | Ground Precision at Equator | Real-World Resolution |
| :---: | :---: | :---: | :--- |
| **0** | $1.0^\circ$ | 111.32 km (69.2 mi) | Major country or state |
| **1** | $0.1^\circ$ | 11.13 km (6.9 mi) | Large city or metropolitan county |
| **2** | $0.01^\circ$ | 1.11 km (0.69 mi) | Town, suburb, or large neighborhood |
| **3** | $0.001^\circ$ | 111.3 m (365 ft) | Agricultural parcel, golf course, or airport runway |
| **4** | $0.0001^\circ$ | 11.13 m (36.5 ft) | Individual residential property boundary |
| **5** | $0.00001^\circ$ | 1.11 m (3.6 ft) | **Standard civilian smartphone GPS accuracy** |
| **6** | $0.000001^\circ$ | 11.1 cm (4.4 in) | Commercial land survey marker |
| **7** | $0.0000001^\circ$ | 1.1 cm (0.43 in) | Geodetic tectonic plate movement monitoring |

For virtually all hiking, navigation, and location-sharing tasks, **5 decimal places** ($\approx 1\text{ meter}$) is the sweet spot.

---

## 3. Format 2: Degrees, Minutes, Seconds (DMS)

**DMS** is the classic maritime, nautical, and aeronautical coordinate system. It dates back to ancient Babylonian sexagesimal (base-60) astronomy and navigation by the stars.

### Syntax
* Format: `DD° MM' SS.SS" [N/S], DDD° MM' SS.SS" [E/W]`
* Symbols:
  * `°` = Degrees (angle)
  * `'` = Minutes of arc ($1/60$ of a degree)
  * `"` = Seconds of arc ($1/60$ of a minute, or $1/3600$ of a degree)
* Example: `48° 51' 29.88" N, 2° 17' 40.20" E` (Eiffel Tower, Paris)

### The Step-by-Step Conversion Mathematics

#### A. Converting DMS to Decimal Degrees (DMS → DD)
To convert Degrees, Minutes, and Seconds to Decimal Degrees, divide the minutes by 60 and seconds by 3600, then sum them together:

$$\text{Decimal Degrees} = \text{Degrees} + \left(\frac{\text{Minutes}}{60}\right) + \left(\frac{\text{Seconds}}{3600}\right)$$

If the hemisphere is South (`S`) or West (`W`), multiply the final result by $-1$.

**Worked Example:** Convert `34° 03' 15" S, 18° 21' 36" E` (Cape Town, South Africa)
1. **Latitude:**
   $$\text{DD}_{\text{raw}} = 34 + \left(\frac{3}{60}\right) + \left(\frac{15}{3600}\right) = 34 + 0.05 + 0.004167 = 34.054167$$
   Because it is South, apply the negative sign: **$-34.054167^\circ$**.
2. **Longitude:**
   $$\text{DD}_{\text{raw}} = 18 + \left(\frac{21}{60}\right) + \left(\frac{36}{3600}\right) = 18 + 0.35 + 0.01 = 18.360000$$
   Because it is East, it stays positive: **$+18.360000^\circ$**.

---

#### B. Converting Decimal Degrees to DMS (DD → DMS)
To convert a decimal degree into DMS:
1. The whole integer number is the **Degrees**.
2. Multiply the remaining decimal by 60. The integer of that result is the **Minutes**.
3. Multiply the remaining decimal fraction by 60. That result is the **Seconds**.

**Worked Example:** Convert `−73.985428°` (Longitude)
1. Extract degrees: `73°` (West because of the negative sign).
2. Take the fractional part: $0.985428 \times 60 = 59.12568$.
   Extract minutes: `59'`.
3. Take the remaining fraction: $0.12568 \times 60 = 7.5408$.
   Round seconds: `07.54"`.
4. Final DMS notation: **`73° 59' 07.54" W`**.

---

## 4. Format 3: Degrees Decimal Minutes (DDM)

**Degrees Decimal Minutes (DDM)** is the preferred format in **marine navigation, maritime VHF distress reporting, and aviation**. 

Instead of dividing minutes into 60 seconds, it represents minutes as a decimal fraction:
* Format: `DD° MM.MMMM' [N/S], DDD° MM.MMMM' [E/W]`
* Example: `25° 11.8340' N, 55° 16.4820' E` (Burj Khalifa, Dubai)

### Why Sailors and Pilots Love DDM:
On a traditional nautical chart, **one minute of latitude ($1'$) corresponds precisely to one International Nautical Mile (1,852 meters or 6,076 feet)**. 

Therefore, if a maritime GPS reports that a ship is at latitude $32^\circ 14.500'\text{ N}$ and wants to reach waypoint $32^\circ 16.500'\text{ N}$ directly north:
$$\text{Distance} = 16.500' - 14.500' = 2.000 \text{ nautical miles}$$
A navigator can measure distance directly off the latitude scale on the side of the paper chart using a pair of dividers, with zero pocket calculator math.

---

## 5. Format 4: Universal Transverse Mercator (UTM)

While latitude and longitude use angles on a curved sphere, the **Universal Transverse Mercator (UTM)** system projects Earth onto a flat two-dimensional grid measured in **metric meters**.

UTM is the international standard for military topographical maps (MGRS), search-and-rescue grids, trail recreation topographic maps (USGS 7.5-minute quadrangles), and civil engineering.

```
                  Zone 17 | Zone 18 | Zone 19
                     |        |        |
                     | Central|        |
                     |Meridian|        |
                     | (500 km)|       |
                     |<------>|        |
                     |  6°    |        |
```

### How the UTM Grid Works
1. **60 Longitudinal Zones:** Earth is sliced vertically like an orange into 60 zones, each **6 degrees of longitude wide** (Zone 1 begins at $180^\circ\text{ W}$, Zone 60 ends at $180^\circ\text{ E}$).
2. **Easting (X axis):** Within each zone, a central meridian is assigned an artificial coordinate of **500,000 meters** (the *False Easting*). This guarantees that coordinates within the zone are always positive numbers.
   * An Easting of `500000 m` means you are standing precisely on the zone's center meridian.
   * An Easting of `450000 m` means you are 50 km west of the center meridian.
   * An Easting of `560000 m` means you are 60 km east of the center meridian.
3. **Northing (Y axis):** 
   * **Northern Hemisphere:** Northing is measured in meters directly north of the Equator ($0\text{ m N}$).
   * **Southern Hemisphere:** To prevent negative numbers, the Equator is assigned a *False Northing* of **10,000,000 meters**, and values count downward toward the South Pole.

### Reading a UTM Coordinate
* Example: `18T 585672m E 4511317m N`
  * `18`: UTM Longitudinal Zone (between $78^\circ\text{ W}$ and $72^\circ\text{ W}$).
  * `T`: Latitude band letter (identifying the north-south segment).
  * `585672m E`: Easting coordinate ($85,672\text{ meters}$ east of the central meridian).
  * `4511317m N`: Northing coordinate ($4,511,317\text{ meters}$ north of the Equator).

### The Tremendous Advantage of UTM for Hikers
Because UTM coordinates are pure metric distances, calculating the straight-line distance between two trail waypoints does not require complex spherical trigonometry. You simply use basic high-school **Pythagorean geometry**:

$$\text{Distance} = \sqrt{(E_2 - E_1)^2 + (N_2 - N_1)^2}$$

If Point A is `(500000, 4000000)` and Point B is `(503000, 4004000)`:
$$\Delta E = 3,000\text{ m}, \quad \Delta N = 4,000\text{ m}$$
$$\text{Distance} = \sqrt{3000^2 + 4000^2} = \sqrt{9000000 + 16000000} = 5,000\text{ meters (5.0 km)}$$

---

## 6. Format 5: Plus Codes (Open Location Code)

Over 50% of the world's population lives on unnamed roads, rural agrarian parcels, or dense informal settlements without formal street addresses. Even in developed countries, an address like "Central Park, New York" does not tell a delivery driver or ambulance which park bench or trail junction you are at.

To solve this, Google engineers developed the **Open Location Code (OLC)**, commonly known as **Plus Codes**.

### How Plus Codes Work
A Plus Code encodes latitude and longitude into a short alphanumeric string using a base-20 alphabet (`23456789CFGHJMPQRVWX`). 
* Vowels (`A, E, I, O, U`) and easily confused characters (`1, l, 0, O`) are deliberately omitted to prevent spelling profane words in any language and avoid transcription typos.
* A standard full Plus Code has 8 digits plus a 2-digit local specifier: `87G8P2X7+GC`.
* When used locally within a known city, the first four area characters can be dropped: **`P2X7+GC, New York`**.
* A 10-character code pinpoints a location down to a **$14 \times 14\text{ meter}$ square** (roughly half a tennis court).

You can paste any Plus Code directly into the search bar of Google Maps, Apple Maps, or our [bearing calculator](/bearing/) to immediately find the location.

---

## 7. Global Coordinate Benchmark Table

Here is how six of the world's most famous geographic landmarks look across all major coordinate systems:

| Landmark & City | Decimal Degrees (DD) | Degrees, Minutes, Seconds (DMS) | UTM Grid (WGS84) | Plus Code |
| :--- | :--- | :--- | :--- | :--- |
| **Royal Observatory**, Greenwich, UK | `51.476853, -0.000500` | `51° 28' 36.67" N, 00° 00' 01.80" W` | `30U 708304 E, 5707122 N` | `9C3XGVGR+PQ` |
| **Statue of Liberty**, New York, USA | `40.689249, -74.044500` | `40° 41' 21.30" N, 74° 02' 40.20" W` | `18T 580743 E, 4504689 N` | `87G7MXQ4+M6` |
| **Eiffel Tower**, Paris, France | `48.858370, 2.294481` | `48° 51' 30.13" N, 02° 17' 40.13" E` | `31U 448270 E, 5411933 N` | `8FW4V75V+8Q` |
| **Tokyo Skytree**, Tokyo, Japan | `35.710063, 139.810700` | `35° 42' 36.23" N, 139° 48' 38.52" E` | `54S 392349 E, 3952478 N` | `8Q7XPM66+27` |
| **Great Pyramid**, Giza, Egypt | `29.979235, 31.134202` | `29° 58' 45.25" N, 31° 08' 03.13" E` | `36R 320038 E, 3317709 N` | `8G3VXMHM+MM` |
| **Sydney Opera House**, Sydney, Australia | `-33.856784, 151.215296` | `33° 51' 24.42" S, 151° 12' 55.07" E` | `56H 334907 E, 6252431 N` | `4RRH46V8+74` |

---

## 8. Four Costly Mistakes to Avoid in the Field

Small misunderstandings in geographic coordinates can lead to severe errors during search and rescue, land sales, or aerial drone flights. Watch out for these four common pitfalls:

### Mistake 1: Swapping Latitude and Longitude (The X/Y Trap)
In mathematics, coordinates are listed as **(X, Y)**, where X is horizontal and Y is vertical.
In geographic notation, coordinates are listed as **(Latitude, Longitude)**, or **(Y, X)**:
* **Latitude is Y** (North-South vertical distance).
* **Longitude is X** (East-West horizontal distance).

Computer geoscientists working with GeoJSON often invert this convention, expecting `[Longitude, Latitude]`. If you swap them for New York City (`40.7, -73.9` into `-73.9, 40.7`), your point will land in the freezing sea ice off the coast of Antarctica. Always check:
* Latitude absolute values can **never exceed 90°**.
* Longitude absolute values can **never exceed 180°**.

### Mistake 2: Mixing Geodetic Datums (WGS84 vs. NAD27 vs. ED50)
A coordinate is meaningless without specifying the mathematical datum it belongs to.
* **WGS84:** The global satellite standard used by GPS, smartphones, and Google Maps.
* **NAD27 (North American Datum 1927):** Used on older USGS paper topo maps.
* **ED50 (European Datum 1950):** Used on classic European topographical maps.

Because NAD27 was tied to an earth-centered estimate centered at Meades Ranch, Kansas in 1927, **a WGS84 coordinate plotted directly onto a NAD27 map will be off by up to 100 meters (330 feet)**. Always set your handheld GPS receiver or mapping software to match the datum printed in the legend of your paper map.

### Mistake 3: Dropping Negative Signs in Favor of Cardinals
Writing `-118° 15' W` is an arithmetic double negative that confusingly represents East. 
* Use either algebraic signs: `-118.2500`
* Or cardinal directions: `118° 15' 00" W`
* Never combine both.

### Mistake 4: Reading Minutes as Hundredths of a Degree
A common rookie mistake is reading `40° 50'` as `40.50°`. 
* `40° 50'` means 40 degrees plus 50/60ths of a degree, which equals **`40.8333°`**.
* `40.50°` means 40 degrees plus 30 minutes, which is **`40° 30' 00"`**.
This 20-minute misinterpretation causes a position error of roughly **37 kilometers (23 miles)**!

---

## 9. How to Give Coordinates to Emergency Dispatch (911 / 112 / 999)

If you are stranded in the backcountry, injured on a trail, or witnessing a vehicle rollover on an unmarked forest service road, giving emergency services your exact coordinates can save lives.

Follow this standard dispatch protocol:

1. **Open your phone's browser** to our [live GPS coordinates tool](/location/) (which runs offline without cell towers once loaded, reading directly from the satellite hardware).
2. **State your format clearly:** Tell the dispatcher: *"I have GPS coordinates in Decimal Degrees"* (or Degrees, Minutes, Seconds).
3. **Read each digit individually with cardinal indicators:**
   * *Correct:* "Latitude: Four Zero point Seven Four Eight Eight North. Longitude: Seven Three point Nine Eight Five Four West."
   * *Avoid:* "Forty point seventy-four eighty-eight..." (can be misunderstood over static radio).
4. **Give the accuracy radius:** Modern phone chips calculate their horizontal dilution of precision (HDOP). If your phone says *"Accuracy: ±5 meters"*, relay that to the dispatcher so search teams know the search confidence perimeter.
5. **Report an identifiable landmark nearby:** Always confirm with a physical landmark (e.g., *"Approximately 2 miles north of Bear Creek ridge line"*).

---

## 10. Frequently Asked Questions

### Why does my phone GPS sometimes show coordinates hundreds of meters off?
Smartphones use **Assisted GPS (A-GPS)**. When cell signal is strong, the phone downloads satellite ephemeris data in seconds and uses local Wi-Fi router BSSIDs and cell towers to estimate position. In deep wilderness or between tall concrete skyscrapers (the "urban canyon effect"), satellite signals bounce off buildings (multipath interference) or take several minutes to acquire directly from the sky, temporarily degrading accuracy until 4+ direct satellite signals lock on.

### What is the difference between geographic coordinates and a street address?
A street address is a human administrative designation managed by local postal authorities and municipalities. It changes over time, requires language translation, and does not exist in open waters, wilderness areas, national parks, or undeveloped regions. Geographic coordinates are immutable physical descriptions of an exact point on Earth's ellipsoidal surface.

### How do I measure the distance and bearing between two coordinate pairs?
On a sphere, the shortest distance between two coordinates is the **Great-Circle arc** (geodesic path). To calculate it manually, you must use the **Haversine formula** or **Vincenty's formula** (which accounts for the Earth's ellipsoidal bulge). You can automatically calculate forward azimuth, back bearing, and distance between any two coordinates in real time using our [online bearing calculator](/bearing/).

### Can an online browser tool read my coordinates without internet?
Yes. The **W3C Geolocation API** communicates directly with your mobile device's onboard GPS/GLONASS/Galileo receiver chip. Once a Progressive Web App (PWA) or webpage like our [live GPS location tool](/location/) is cached in your browser storage, your phone can receive satellite telemetry and compute latitude, longitude, speed, and heading even in complete airplane mode.

---

### Related Navigation Guides & Tools
* **[Online Coordinate Converter & Bearing Calculator](/bearing/)** — Convert DD, DMS, UTM, and Plus Codes with great-circle formulas.
* **[Live GPS Location & Telemetry](/location/)** — Read your real-time latitude, longitude, elevation, and satellite accuracy.
* **[How to Take and Follow a Compass Bearing](/blog/how-to-take-a-compass-bearing/)** — Learn how to pair map coordinates with physical azimuth sightings.
* **[Magnetic Declination Explained](/blog/magnetic-declination-explained/)** — How to correct map coordinates for Earth's shifting magnetic field.
