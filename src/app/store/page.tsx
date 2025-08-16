// src/app/store/page.tsx
"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  { id: 1, title: "Product 1", Images: ["/Images/Rectangle 61.png", "/Images/Rectangle 61.png", "/Images/Rectangle 61.png"] },
  { id: 2, title: "Product 2", Images: ["/Images/Rectangle 62.png", "/Images/Rectangle 62.png", "/Images/Rectangle 62.png"] },
  { id: 3, title: "Product 3", Images: ["/Images/Rectangle 63.png", "/Images/Rectangle 63.png", "/Images/Rectangle 63.png"] },
  { id: 4, title: "Product 4", Images: ["/Images/Rectangle 64.png", "/Images/Rectangle 64.png", "/Images/Rectangle 64.png"] },
  { id: 5, title: "Product 5", Images: ["/Images/Rectangle 60.png", "/Images/Rectangle 60.png", "/Images/Rectangle 60.png"] },
  { id: 6, title: "Product 6", Images: ["/Images/Rectangle 15.png", "/Images/Rectangle 15.png", "/Images/Rectangle 15.png"] },
  { id: 7, title: "Product 7", Images: ["/Images/Rectangle 16.png", "/Images/Rectangle 16.png", "/Images/Rectangle 16.png"] },
  { id: 8, title: "Product 8", Images: ["/Images/Rectangle 17.png", "/Images/Rectangle 17.png", "/Images/Rectangle 17.png"] },
];

const projects = [
  { id: 1, title: "Project One", Images: ["/Images/Rectangle 141.png", "/Images/Rectangle 141.png", "/Images/Rectangle 141.png"] },
  { id: 2, title: "Project Two", Images: ["/Images/Rectangle 15 (1).png", "/Images/Rectangle 15 (1).png", "/Images/Rectangle 15 (1).png"] },
  { id: 3, title: "Project Three", Images: ["/Images/Rectangle 16 (1).png", "/Images/Rectangle 16 (1).png", "/Images/Rectangle 16 (1).png"] },
  { id: 4, title: "Project Four", Images: ["/Images/Rectangle 17 (1).png", "/Images/Rectangle 17 (1).png", "/Images/Rectangle 17 (1).png"] },
];

export default function StorePage() {
  const [showAllProjectsMobile, setShowAllProjectsMobile] = useState(false);
  const [showAllProductsMobile, setShowAllProductsMobile] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // ✅ Desktop → all always
  // ✅ Mobile → 3 by default unless toggled
  const visibleProjects =
    isMobile && !showAllProjectsMobile ? projects.slice(0, 3) : projects;
  const visibleProducts =
    isMobile && !showAllProductsMobile ? products.slice(0, 3) : products;

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />

      {/* Hero Section */}
      <section
        className="relative w-full h-[360px] flex items-center justify-center" id="store"
        style={{
          backgroundImage: "url('/Images/Rectangle 047.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-4xl md:text-5xl font-playfair font-bold">
            Store
          </h1>
          <p className="text-white/80 mt-2 max-w-2xl mx-auto">
            Explore premium marble slabs and curated materials.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative bg-white py-0 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12 hidden lg:block translate-y-20">
          <p className="text-gray-700 leading-relaxed">
            At Casa Progetto, we believe in blending luxury with practicality,
            ensuring that every product and service we offer meets the highest
            standards of durability and aesthetics. Whether you’re looking for a
            modern, sleek interior design or a classic, timeless marble finish,
            our store is your one-stop destination.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10 relative">
          {/* Text */}
          <div className="order-1 md:order-2 text-center md:text-left translate-y-20">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-snug">
              Come explore <br />
              <span className="text-casa-green">Casa Progetto</span>
            </h2>
            <p className="mt-3 text-gray-600 text-lg font-light">
              where every detail is crafted to perfection!
            </p>
          </div>

          {/* Image */}
          <div className="order-2 md:order-1 w-full h-[300px] md:h-[520px] relative overflow-hidden rounded shadow translate-y-20">
            <Image
              src="/Images/Rectangle 149.png"
              alt="Casa Progetto Showroom"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Yellow Accent Bars */}
        {/* Desktop */}
        <div className="absolute top-[400px] right-0 translate-x-1/2 w-16 h-44 bg-yellow-400 hidden lg:block z-10" />
        {/* Mobile */}
        <div className="absolute top-0 left-[-20px] right-[-20px] flex justify-between items-start md:hidden px-4 translate-y-[100px]">
          <div className="w-6 h-24 bg-yellow-400" />
          <div className="w-6 h-24 bg-yellow-400" />
        </div>
      </section>

      {/* Products Section */}
      <main className="flex-grow bg-gray-50 py-40 px-6" >
        <div className="max-w-7xl mx-auto text-center" id="product">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-12" >
            Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {visibleProducts.map((product) => (
              <div key={product.id} className="flex flex-col items-center">
                <div className="w-full aspect-[3/4] overflow-hidden rounded shadow">
                  <Slider {...sliderSettings}>
                    {product.Images.map((img, idx) => (
                      <div key={idx} className="relative w-full h-full">
                        <Image
                          src={img}
                          alt={product.title}
                          width={400}
                          height={500}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <p className="mt-2 font-medium">{product.title}</p>
              </div>
            ))}
          </div>

          {/* ✅ Toggle Button (only mobile) */}
          <div className="mt-12 md:hidden">
            <button
              onClick={() => setShowAllProductsMobile(!showAllProductsMobile)}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              {showAllProductsMobile ? "Hide Products" : "View All Products"}
            </button>
          </div>
        </div>
      </main>

      {/* Project Showcase Section */}
      <section
        className="bg-white py-40 px-6 md:px-12"
        id="project"
        style={{ background: "#F4F4F4" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-playfair font-bold mb-12">
            Project Showcase
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`flex flex-col items-center transition-transform duration-500 ${
                  idx % 2 === 0 ? "lg:-translate-y-6" : "lg:translate-y-6"
                }`}
              >
                {/* Image slider */}
                <div className="w-full shadow-md overflow-hidden">
                  <Slider {...sliderSettings}>
                    {project.Images.map((img, i) => (
                      <div key={i} className="relative w-full h-[350px]">
                        <Image
                          src={img}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                {/* Title */}
                <p className="mt-4 text-lg font-medium">{project.title}</p>
              </div>
            ))}
          </div>

          {/* ✅ Toggle Button (only mobile) */}
          <div className="mt-12 text-center md:hidden">
            <button
              onClick={() => setShowAllProjectsMobile(!showAllProjectsMobile)}
              className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              {showAllProjectsMobile ? "Hide Projects" : "View All Projects"}
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
