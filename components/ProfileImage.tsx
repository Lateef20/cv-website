"use client";

export default function ProfileImage() {
  return (
    <div
      className="w-32 h-32 md:w-40 md:h-40 rounded-full flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #111827 100%)" }}
    >
      <span
        style={{
          fontSize: "2.25rem",
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "0.05em",
          userSelect: "none",
        }}
      >
        LJ
      </span>
    </div>
  );
}
