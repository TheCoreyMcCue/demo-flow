"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import subwayMap from "../../public/images/Subway.png";

const DemoMapPage: React.FC = () => {
  const router = useRouter();

  const handleLaunchDemo = () => {
    window.open("https://shopist.io/cart", "_blank", "noopener,noreferrer");

    // Then navigate internally
    router.push("/integrations-preview");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#3300cc] via-[#6a00cc] to-[#9900cc] text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Explore the Demo Journey
        </h1>
        <p className="text-xl text-purple-200 mb-10">
          This subway map outlines the key stages of your Datadog demo flow.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 w-full">
          <Image
            src={subwayMap}
            alt="Demo Subway Map"
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

          {/* Launch Demo Button */}
          <button
            onClick={handleLaunchDemo}
            className="bg-white text-[#3300cc] font-semibold px-8 py-4 text-lg rounded-xl shadow hover:bg-gray-100 transition"
          >
            Launch the Demo
          </button>
        </div>
      </div>
    </main>
  );
};

export default DemoMapPage;
