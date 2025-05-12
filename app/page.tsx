"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import heroImage from "../public/images/hero2.png";

const DemoLandingPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#3300cc] via-[#6a00cc] to-[#9900cc] text-white flex flex-col items-center justify-center px-6 py-16">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
          Welcome to the Datadog Demo
        </h1>
        <p className="text-xl text-purple-200 mb-10">
          Today, we’re investigating a critical issue affecting our checkout
          flow.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 w-full">
          <Image
            src={heroImage}
            alt="Datadog x New Era Solutions Hero"
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <Link
          href="/demo-map"
          className="inline-block bg-white text-[#3300cc] font-semibold px-8 py-4 text-lg rounded-xl shadow hover:bg-gray-100 transition"
        >
          Start the Investigation
        </Link>
      </div>
    </main>
  );
};

export default DemoLandingPage;
