"use client";

import { useRouter } from "next/navigation";
import React from "react";

const SummaryPage: React.FC = () => {
  const router = useRouter();

  const handleRestart = () => {
    router.push("/"); // Or wherever your landing page lives
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#3300cc] via-[#6a00cc] to-[#9900cc] text-white flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">
          Demo Complete 🎉
        </h1>
        <p className="text-xl text-purple-200 mb-10">
          We’ve just explored how Datadog brings end-to-end visibility to every
          layer of your stack — from infrastructure to APM, logs, and alerts.
        </p>

        <p className="text-lg text-purple-100 mb-10">
          Ready to take the next step? Start a trial, dive into documentation,
          or replay the journey.
        </p>

        <div className="flex justify-center flex-wrap gap-4">
          {/* <a
            href="https://docs.datadoghq.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#3300cc] font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
          >
            View Documentation
          </a> */}
          <button
            onClick={handleRestart}
            className="bg-transparent border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-[#3300cc] transition"
          >
            Restart Demo
          </button>
        </div>
      </div>
    </main>
  );
};

export default SummaryPage;
