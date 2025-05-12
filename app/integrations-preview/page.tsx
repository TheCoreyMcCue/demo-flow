"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import integrationsPreviewImage from "../../public/images/integrations.png";

const IntegrationsPreviewPage: React.FC = () => {
  const router = useRouter();

  const handleContinue = () => {
    window.open(
      "https://app.datadoghq.com/fleet/install-agent/latest?platform=overview",
      "_blank",
      "noopener,noreferrer"
    );

    // Then navigate internally
    router.push("/infra-preview");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#3300cc] via-[#6a00cc] to-[#9900cc] text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Integrations in Action
        </h1>
        <p className="text-xl text-purple-200 mb-10">
          Datadog Integrations unify metrics, logs, and events from over 850
          technologies—giving you full visibility into every layer of your
          system, in one platform.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 w-full">
          <Image
            src={integrationsPreviewImage}
            alt="Integrations Overview"
            className="w-full h-auto object-cover"
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

export default IntegrationsPreviewPage;
