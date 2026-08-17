"use client";

import { useState } from "react";

export function ProfileImageSlot() {
  const [imageBroken, setImageBroken] = useState(false);

  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-slate-200/80 bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300 p-3 shadow-[0_35px_90px_rgba(15,23,42,0.15)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.9),_transparent_42%)]" />
      <div className="relative rounded-[1.5rem] border border-slate-300/70 bg-white/55 p-6 backdrop-blur-sm">
        <div className="mb-6 flex items-center justify-between text-[0.7rem] uppercase tracking-[0.22em] text-slate-500">
          <span>Portfolio</span>
          <span>Profile</span>
        </div>

        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-300 bg-gradient-to-br from-slate-50 to-slate-200 px-6 text-center">
          {!imageBroken ? (
            <img
              src="/images/profile.jpg"
              alt="Kuldeep profile placeholder"
              className="h-48 w-48 rounded-full object-cover shadow-md ring-4 ring-white/80"
              onError={() => setImageBroken(true)}
            />
          ) : (
            <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-slate-400 bg-slate-900 text-2xl font-semibold text-white shadow-md">
              K
            </div>
          )}

          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-slate-500">
            {imageBroken ? "Profile image" : "Profile preview"}
          </p>
          <p className="mt-3 text-sm text-slate-600">
            {imageBroken ? "Replace with /images/profile.jpg when ready" : "Ready for your personal photo"}
          </p>
        </div>
      </div>
    </div>
  );
}
