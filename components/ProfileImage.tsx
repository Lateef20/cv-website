"use client";

export default function ProfileImage() {
  return (
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-gray-200 overflow-hidden flex items-center justify-center bg-gray-100">
      <img
        src="/images/lateef-profile.jpg"
        alt="Lateef Jawando"
        className="w-full h-full object-cover"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
          if (target.parentElement) {
            target.parentElement.innerHTML =
              '<span class="text-2xl font-semibold text-gray-400">LJ</span>';
          }
        }}
      />
    </div>
  );
}
