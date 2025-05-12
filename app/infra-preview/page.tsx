"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import infrastructureImage from "../../public/images/infrastructure-monitoring-diagram.png";

const InfrastructurePage: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    window.open(
      "https://app.datadoghq.com/infrastructure/map?fillby=avg%3Acpuutilization&nometrichosts=true",
      "_blank",
      "noopener,noreferrer"
    );

    // Then navigate internally
    router.push("/apm-preview");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#3300cc] via-[#6a00cc] to-[#9900cc] text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Infrastructure Overview
        </h1>
        <p className="text-xl text-purple-200 mb-10">
          Datadog Infrastructure Monitoring is the foundation of unified
          observability—built to ensure uptime, optimize performance, and secure
          your entire environment. With deep integrations, intelligent alerts,
          and near real-time visibility from hardware to application, Datadog
          empowers teams to scale with confidence
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 w-full">
          <Image
            src={infrastructureImage}
            alt="Infrastructure Overview"
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

export default InfrastructurePage;
