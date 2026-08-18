export const projectContent: Record<string, string> = {
  "house-of-agents": `
    <h2>What it does</h2>
    <p>You pick a real UK bill. Twelve specialist AI-agent peers convene, speak to each other, and debate with citations and retrieval-backed evidence. The Bishop can call you to the Witness Box. Then they vote. After the division, you get a Scrutiny Report, or it drafts a letter to your MP.</p>
    <p>We wanted to see whether AI agents could simulate genuine multi-perspective debate on real legislation, grounded in actual evidence rather than hallucination.</p>

    <h2>How it works</h2>
    <p>Bills and supporting documents are stored and indexed in MongoDB Atlas. Before each peer speaks, they run a vector search query to pull relevant evidence from the index, so their arguments are grounded in what the documents actually say. Voyage AI handles the embeddings. Google Gemini drives the reasoning and language generation for each agent. ElevenLabs gives every peer agent a distinct voice, which makes the debate feel genuinely alive.</p>
    <p>Each of the twelve agents has a distinct political background, area of expertise, and personality. They are not just taking turns to speak; they respond to each other, challenge positions, and cite evidence. The Witness Box mechanic lets the Bishop call the user in directly, so you can be questioned by the Lords mid-debate.</p>

    <h2>Result</h2>
    <p>Out of 60+ teams at MongoDB.local London Hackathon, we won the Best Use of ElevenLabs track, each taking home $1,980 in ElevenLabs credits.</p>

    <h2>Links</h2>
    <ul>
      <li><a href="https://youtu.be/PffFxw8usf8?si=2DzIgELd9BG37qEQ" target="_blank" rel="noopener noreferrer">Live demo</a></li>
    </ul>
  `,
  "rms-plus": `
    <h2>What it does</h2>
    <p>RMS Technical Training runs a learning community on Skool, and the brief was to build something that would improve the experience for their students. We built RMS+ a co-pilot that sits alongside the existing platform rather than replacing it.</p>
    <p>The core features are: a conversational AI that lets students speak with course instructors, using ElevenLabs to recreate the instructor's own voice; auto-generated quizzes built from each lesson's transcript using Gemini; a dashboard so instructors can see all students' results; and a tool that produces short-form video recaps from longer lesson content.</p>
    <h2>Result</h2>
    <p>We won two prizes at KentHackIt: drones from the main track and earbuds from the MLH ElevenLabs track. Building for a real business with real users sharpens your decisions in a way that open-ended hackathon briefs do not.</p>

    <h2>Links</h2>
    <ul>
      <li><a href="https://drive.google.com/file/d/1tZ42RRK_fKmg6ShGgmq_dVpONGzo3fTo" target="_blank" rel="noopener noreferrer">emo</a></li>
    </ul>
  `,
  "basketball-ai-analytics": `
    <h2>Overview</h2>
    <p>Hooper Vision was my final-year group dissertation at the University of Kent: a computer vision system that analyses basketball footage to automate stat keeping and officiating. It detects players, the ball, and the rim using a custom-trained YOLOv8 model, tracks shooting attempts, flags double dribble violations, and gives players feedback to improve their skills. Professional basketball analytics relies on expensive multi-camera setups and proprietary tracking systems, so we wanted to see how far a single-camera setup with open-source tooling could get.</p>

    <h2>Training a custom detection model</h2>
    <p>I entered the project with no prior computer vision experience. The out-of-the-box COCO-trained YOLOv8 models proved insufficient: the generic "sports ball" class performed poorly on basketball footage and no "rim" class existed at all. I worked through the Ultralytics training pipeline and sourced domain-specific labelled datasets to train a custom model for players, ball, and rim. </p>

    <h2>Tracking: frame subsampling vs Kalman filters</h2>
    <p>YOLO detects objects per frame, but analysis requires linking detections across time. I implemented a frame subsampling optimisation that runs the detector on every third frame and reuses detections for intermediate frames. Before committing to that, I evaluated SORT-style Kalman filter tracking as an alternative. Testing showed the Kalman filter's linear constant-velocity model did not suit basketball footage since players change direction abruptly, causing bounding boxes to overshoot their targets. The simpler frame sampling approach was more predictable and produced better-looking output. I also exposed the trade-off directly to users with an option for full per-frame analysis, letting them choose speed or quality.</p>

    <h2>The speed estimation experiment</h2>
    <p>I implemented player speed estimation using bounding box height as a proxy for real-world scale, converting pixel displacement between frames into kilometres per hour. Testing exposed the flaw: a single calibration from the first detected player produced wildly inaccurate estimates for players at different depths, due to perspective effects. Rather than treating this as a failure, I documented the causes and specified what a proper solution would require: a homography mapping image coordinates onto real court coordinates. That analysis shaped the future work section of our group report.</p>

    <h2>Backend infrastructure and reliability</h2>
    <p>The original upload implementation risked loading large video files entirely into memory, which could destabilise the server under load. I refactored this with chunked upload streaming and added a file size limit, moving the system closer to something that could be deployed. I also implemented Cloudflare R2 storage with a time to live for access to uploaded videos and a local disk fallback so the application could fail gracefully when cloud credentials weren't configured, while still supporting a more production-ready architecture when they were configured.</p>

    <h2>Evaluation</h2>
    <p>The project achieved its core goal, but the system remains closer to a strong prototype than a complete officiating and coaching tool. Accurate per-player statistics would need more robust tracking through court calibration and validation across camera angles. Several features are still missing: reliable speed estimation, interception tracking, rebound detection, assists, and possession changes.</p>
    <p>The non-technical lessons were just as valuable: define a narrow initial scope with ambitious features as explicit stretch goals; don't invest in deployment configuration before the core system is stable and make passing tests a merge requirement rather than an afterthought.</p>

    
    <h2>Architecture</h2>

    <figure style="margin:1.5rem 0;">
      <img src="/images/travel detection ARCHITECTURE 1.png" alt="Sequence diagram" style="width:100%;border-radius:6px;border:1px solid #e5e7eb;" />
      <figcaption style="font-size:0.78rem;color:#6b7280;margin-top:0.4rem;text-align:center;">Sequence diagram</figcaption>
    </figure>

    <h2>Links</h2>
    <ul>
      <li><a href="https://github.com/Lateef20/hooper-vision-comp6030-group-dissertation" target="_blank" rel="noopener noreferrer">Source code on GitHub</a></li>
      <li><a href="/files/hooper-vision-poster.pdf" target="_blank">Project poster (PDF)</a></li>
      <li><a href="/files/comp6030-report.pdf" target="_blank">Dissertation report (PDF)</a></li>
    </ul>
  `,
  "iot-driving-tracker": `
    <h2>What it does</h2>
    <p>You put the device in the car, power it on with a USB power bank, and it handles everything else. When the vehicle starts moving, the GPS and accelerometer detect it and trip recording begins automatically. Location, speed, altitude, and acceleration are logged continuously. When the car stops, the trip is finalised and saved. The next time the device is near a known Wi-Fi network, it uploads the completed trip to a server where you can review your routes and driving behaviour through a web dashboard.</p>

    <h2>Hardware</h2>
    <p>Four components: an ESP32 as the controller, a NEO-6M GPS module communicating over UART for location and speed, a LIS3DH accelerometer over I2C for movement detection, and a microSD card module for local storage. The ESP32 coordinates all of them and handles the Wi-Fi connection for uploads. The whole thing runs on around £15 of hardware. Power comes from a USB power bank rather than the car's 12V supply, which would need a separate regulator (12v to 5 or 3.3v).</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
      <figure style="margin:0;">
        <img src="/images/esp before.jpg" alt="ESP32 assembly, initial breadboard prototype with loose wiring" style="width:100%;border-radius:6px;border:1px solid #e5e7eb;" />
        <figcaption style="font-size:0.78rem;color:#6b7280;margin-top:0.4rem;text-align:center;">Before: initial breadboard prototype</figcaption>
      </figure>
      <figure style="margin:0;">
        <img src="/images/esp after.jpg" alt="ESP32 assembly, cleaned up and optimised wiring" style="width:100%;border-radius:6px;border:1px solid #e5e7eb;" />
        <figcaption style="font-size:0.78rem;color:#6b7280;margin-top:0.4rem;text-align:center;">After: cleaned up and optimised</figcaption>
      </figure>
    </div>

    <h2>Trip detection</h2>
    <p>Journey detection runs on a finite state machine with states for idle, moving candidate, trip active, stopped candidate, trip ended, uploading, and sleeping. This approach prevents false recordings from brief movement or GPS drift. A trip starts when GPS speed exceeds a configurable threshold, or sustained accelerometer movement is detected, and that condition must hold for a confirmation window before the system commits to an active trip.</p>

    <h2>Logging and upload</h2>
    <p>During an active trip, telemetry is written to the SD card periodically in CSV format: timestamp, latitude, longitude, GPS speed, altitude, satellite count, and accelerometer G reading. Local storage means no data is lost if the network is unavailable. When a trip ends and the device is near a configured  geofence, it connects to Wi-Fi over HTTP and uploads the file. Trips stay on the card if the upload fails and retry on the next connection. The configurations are also pulled from the server, so parameters can be changed without having to reflashing the ESP32.</p>

    <figure style="margin:1.5rem 0;">
      <img src="/images/Ardunio IDE System Logs.png" alt="Arduino IDE Serial Monitor showing live system logs: GPS OK, LIS3DH OK, SD OK, Wi-Fi connected, state machine transitions" style="width:100%;border-radius:6px;border:1px solid #e5e7eb;" />
      <figcaption style="font-size:0.78rem;color:#6b7280;margin-top:0.4rem;text-align:center;">Arduino IDE Serial Monitor: live system logs showing sensor initialisation, Wi-Fi connection, and state machine transitions</figcaption>
    </figure>

    <h2>Power and reliability</h2>
    <p>Energy Optimisation and power saving capabilities are among the key pillars of IOT device design. A CO2 sensor or smart doorbell would be far less useful if its batteries needed replacing daily. To address this, the device enters deep sleep when no trip is active to conserve battery, and Wi-Fi is only enabled during uploads because as wireless communcation method go Wi-Fi is high power consumption. Further power saving measures (currently the accelerometer moudle is alawys on changing this to sleep with interrupt-based wakeup when movement is detected would save power, and GPS power mode switching) are planned as future work. I also added a fault LED that alerts to problems which would otherwise be invisible: GPS fix failures, SD card errors, and failed uploads, without needing serial debug access.The case features a button to manually trigger an SD card upload in case the automatic upload fails, and a hole for the LED light.</p>

    <figure style="margin:1.5rem 0;">
      <img src="/images/low-power-wireless.jpg" alt="Comparison chart of power consumption across wireless communication technologies including Wi-Fi, Bluetooth, Zigbee, LoRa, and others" style="width:100%;border-radius:6px;border:1px solid #e5e7eb;" />
      <figcaption style="font-size:0.78rem;color:#6b7280;margin-top:0.4rem;text-align:center;">
        Power consumption comparison of wireless communication technologies.
        <a href="https://promwad.com/sites/default/files/low-power-wireless-main.jpg" target="_blank" rel="noopener noreferrer" style="margin-left:0.3rem;">Source: Promwad</a>
      </figcaption>
    </figure>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1.5rem 0;">
      <figure style="margin:0;">
        <img src="/images/Case side.jpeg" alt="Finished enclosure, side view showing internal components fitted inside the laser-cut wooden case" style="width:100%;border-radius:6px;border:1px solid #e5e7eb;" />
        <figcaption style="font-size:0.78rem;color:#6b7280;margin-top:0.4rem;text-align:center;">Final device: case side (internal components)</figcaption>
      </figure>
      <figure style="margin:0;">
        <img src="/images/Case Front.jpeg" alt="Finished enclosure, front view of the laser-cut wooden case with USB port cutout" style="width:100%;border-radius:6px;border:1px solid #e5e7eb;" />
        <figcaption style="font-size:0.78rem;color:#6b7280;margin-top:0.4rem;text-align:center;">Final device: case front</figcaption>
      </figure>
    </div>

    <h2>Links</h2>
    <ul>
      <li><a href="https://github.com/Lateef20/car-telemetry" target="_blank" rel="noopener noreferrer">Source code on GitHub</a></li>
      <li><a href="/files/iot-project-details.pdf" target="_blank">Project technical details (PDF)</a></li>
    </ul>
  `
};
