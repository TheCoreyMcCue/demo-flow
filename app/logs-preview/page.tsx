"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import logsImage from "../../public/images/Logging without Limits.png"; // Replace with your actual image

const LogsPreviewPage: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    // Replace with your next route in the demo flow (e.g., alerting, Watchdog, etc.)
    router.push("/monitor-preview");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#3300cc] via-[#6a00cc] to-[#9900cc] text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Logs You Can Trust
        </h1>
        <p className="text-xl text-purple-200 mb-10">
          Logs provide context to your traces and metrics. Correlate logs with
          APM data to accelerate debugging.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 w-full max-h-[600px]">
          <Image
            src={logsImage}
            alt="Logs Overview"
            className="w-auto max-h-[600px] mx-auto object-contain"
            priority
          />
        </div>

        <div className="flex justify-center gap-4">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="bg-transparent border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#3300cc] transition"
          >
            Back
          </button>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="bg-white text-[#3300cc] font-semibold px-8 py-4 text-lg rounded-xl shadow hover:bg-gray-100 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
};

export default LogsPreviewPage;
