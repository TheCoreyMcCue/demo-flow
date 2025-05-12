"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import apmImage from "../../public/images/apm.png"; // Replace with your actual image

const ApmPreviewPage: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    window.open(
      "https://app.datadoghq.com/software?env=prod&fromUser=false&hostGroup=%2A&lens=Ownership&view=map&start=1743400634345&end=1743404234345",
      "_blank",
      "noopener,noreferrer"
    );

    // Then navigate internally
    router.push("/logs-preview");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#3300cc] via-[#6a00cc] to-[#9900cc] text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          APM at a Glance
        </h1>
        <p className="text-xl text-purple-200 mb-10">
          Datadog Application Performance Monitoring (APM) provides deep
          visibility into your applications, enabling you to identify
          performance bottlenecks, troubleshoot issues, and optimize your
          services. With distributed tracing, out-of-the-box dashboards, and
          seamless correlation with other telemetry data, Datadog APM helps
          ensure the best possible performance and user experience for your
          applications.
        </p>

        <div className="relative w-full max-w-4xl aspect-video mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={apmImage}
            alt="APM Overview"
            fill
            className="object-contain"
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

export default ApmPreviewPage;
