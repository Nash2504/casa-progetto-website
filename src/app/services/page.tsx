"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      image: "/Images/Rectangle 52.png",
      title: "Premium Marble & Stone Solutions",
      points: [
        "High-quality marble supply & installation",
        "Customized stone fabrication",
        "Polishing & restoration services",
      ],
    },
    {
      id: 2,
      image: "/Images/Rectangle 52.png",
      title: "Interior & Architectural Solutions",
      points: [
        "Gypsum & Glass Partitions – enhancing aesthetics",
        "Wallpaper & Wall Painting – elevate your walls",
        "Cabinet Making – bespoke furniture & storage",
      ],
    },
    {
      id: 3,
      image: "/Images/Rectangle 52.png",
      title: "Home & Office Renovation",
      points: [
        "Electrical & Plumbing – safe and top-notch",
        "Air Conditioning – cooling solutions",
        "Waterproofing & Soundproofing – best solutions",
        "Door Access Automation – secure entry systems",
      ],
    },
    {
      id: 4,
      image: "/Images/Rectangle 52.png",
      title: "Interior Design & 3D Modeling",
      points: [
        "Professional AutoCAD & 3D design services",
        "Visualize your dream space",
      ],
    },
  ];

  // Indices of the 4 cards to expand (0-based).
  const expandedIndices = new Set([0, 1, 2, 3]);

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-[330px] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/Images/Rectangle 47.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg z-10 mt-20">
          Services
        </h1>
      </section>

      {/* Our Services Section */}
      <main className="flex-grow bg-gray-100 px-2 py-8" style={{ background: "#F4F4F4" }}>
        {/* Container to center and lock layout width so cards don't shift on zoom */}
        <div className="mx-auto w-full max-w-[1100px] px-10">
          {/* Grid: 1 column on mobile, 2 on md+. Center items.
              Remove negative margins so card positions are stable.
              Use fixed column widths and gaps to avoid reflow on zoom. */}
          <div
            className="
              grid
              grid-cols-1 md:grid-cols-2
              gap-y-6 md:gap-y-8 md:gap-x-0
              justify-items-center
            "
            style={{
              // Prevent layout jitter on zoom by reserving space
              gridAutoRows: "1fr",
            }}
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white shadow-lg flex flex-col w-full max-w-[520px] md:max-w-[480px]"
              >
                {/* Image (kept fixed) */}
                <div style={{ height: "205px", width: "100%", position: "relative" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Content (increase height for 4 specific cards) */}
                <div
                  className={`p-5 flex flex-col gap-3 ${
                    expandedIndices.has(index) ? "min-h-[200px]" : ""
                  }`}
                >
                  <h3 className="text-base md:text-lg font-bold text-center md:text-left">
                    {service.title}
                  </h3>
                  <ul className="list-disc pl-5 text-gray-700 text-sm md:text-base">
                    {service.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
