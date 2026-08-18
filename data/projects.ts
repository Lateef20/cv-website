export const projects = [
  {
    slug: "house-of-agents",
    title: "House of Agents",
    summary: "A digital House of Lords where you pick a real UK bill and twelve specialist AI-agent peers convene to debate it with retrieval-backed evidence, question witnesses, vote, and produce a scrutiny report or a draft letter to your MP.",
    tags: ["AI", "Multi-Agent Systems", "MongoDB", "Hackathon"],
    technologies: ["MongoDB Atlas", "Vector Search", "Voyage AI", "Google Gemini", "ElevenLabs"],
    achievement: "Won $1,980 each in ElevenLabs credits at MongoDB.local London Hackathon (60+ teams).",
    github: "",
    demo: "https://youtu.be/PffFxw8usf8?si=2DzIgELd9BG37qEQ",
    image: "/images/houseofagents.jpg"
  },
  {
    slug: "iot-driving-tracker",
    title: "IoT Driving Tracker",
    summary: "An ESP32-based vehicle telemetry system that automatically detects journeys using GPS and accelerometer data, logs trips to an SD card, uploads over Wi-Fi, and lets you review routes and driving behaviour through a web dashboard.",
    tags: ["IoT", "Embedded Systems", "Hardware"],
    technologies: ["ESP32", "Neo-6M GPS", "LIS3DH", "SD card", "Arduino/C++", "HTTP"],
    achievement: "",
    github: "https://github.com/Lateef20/car-telemetry",
    image: "/images/iot-driving-tracker.png"
  },
  {
    slug: "basketball-ai-analytics",
    title: "Hooper Vision: Basketball AI Analytics",
    summary: "My university group dissertation: a computer vision system that analyses basketball footage using object detection, pose estimation, and tracking to automate stat keeping and officiating.",
    tags: ["Computer Vision", "AI", "Sports Analytics", "Dissertation"],
    technologies: ["Python", "OpenCV", "Ultralytics YOLOv8", "YOLO pose", "NumPy", "Cloudflare R2", "pytest"],
    achievement: "Final-year group dissertation at the University of Kent.",
    github: "https://github.com/Lateef20/hooper-vision-comp6030-group-dissertation",
    image: "/images/hooper-vision.png"
  },
  {
    slug: "rms-plus",
    title: "RMS+",
    summary: "A co-pilot for learners on RMS Technical Training's Skool platform, built at KentHackIt. Features a conversational AI creator powered by ElevenLabs, short-form video recap generation, and an AI interactive circuit simulator.",
    tags: ["AI", "Education", "Hackathon", "Small Business"],
    technologies: ["ElevenLabs", "AI agents", "Python"],
    achievement: "Won drones (main track) and earbuds (MLH ElevenLabs track) at KentHackIt.",
    github: "",
    demo: "https://drive.google.com/file/d/1tZ42RRK_fKmg6ShGgmq_dVpONGzo3fTo",
    videoEmbed: "https://drive.google.com/file/d/1tZ42RRK_fKmg6ShGgmq_dVpONGzo3fTo/preview",
    image: "/images/rms.png"
  }
];

export type Project = typeof projects[0];
