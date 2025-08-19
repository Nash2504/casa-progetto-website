'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from "../components/Footer"; // adjust the path if your Footer file is elsewhere
import Header from "../components/Header";


const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showAllFAQs, setShowAllFAQs] = useState(false); 

  
  return (
    <div className="font-inter overflow-x-hidden" id="hmpg">
      {/* Navigation Header */}
      <Header />


 {/* Hero Section - Responsive for Mobile and Desktop */}
 <main className="relative w-full overflow-hidden" style={{ backgroundColor: '#1A2B22', maxWidth: '100vw' }}>
 <div className="absolute top-52 right-200 w-8 h-44 z-10 hidden lg:block" style={{ backgroundColor: "#A21D22" }}></div>

  <div className="relative mx-auto" style={{ width: 'min(100vw, 1200px)' }}>
    <div className="absolute left-0 z-10 lg:hidden" style={{ top: 'calc(20vh - 20px)', width: 'calc(2vw + 10px)', height: 'calc(25vh - 10px)', backgroundColor: '#A21D22' }}></div>
    <div className="absolute right-0 z-10 lg:hidden" style={{ top: 'calc(20vh - 20px)', width: 'calc(2vw + 10px)', height: 'calc(25vh - 10px)', backgroundColor: '#A21D22' }}></div>

    <div className="lg:relative lg:mx-auto">
      <div className="hidden lg:block relative mx-auto" style={{ width: 'min(100vw, 1200px)', aspectRatio: '16 / 9' }}>
        <div className="absolute inset-0 flex items-center">
          <div className="flex flex-row items-center justify-between w-full min-w-0 px-[4vw]">
            <div className="flex-1 z-20 px-[2vw] md:pl-[8vw] flex flex-col items-start text-left">
              <h1 className="mt-[20px] leading-none mb-[2vh] font-playfair" style={{ fontSize: 'clamp(44px, 6cqw, 64px)' }}>
                <span className="text-casa-green font-bold">MARBLE</span>
                <span className="text-white font-bold lowercase">ous</span>
                <br />
                <span className="text-white">Creations for</span>
                <br />
                <span className="text-white">Every Space</span>
              </h1>
              <p className="text-white/80 font-inter mb-[4vh]" style={{ maxWidth: '38ch', fontSize: 'clamp(12px, 2.2cqw, 16px)' }}>
                Transforming Spaces with Excellence &amp; Precision
              </p>
              <Link href="/store">
              <button className="bg-black text-white hover:bg-white hover:text-black transition-all" style={{ padding: '12px 24px', fontSize: 'clamp(14px, 2.2cqw, 16px)' }}>
                Visit Store
              </button>
              </Link>
            </div>

            <div className="flex-1 z-10 hidden lg:flex justify-center">
              <div className="relative" style={{ width: '100%', maxWidth: '55vw', aspectRatio: '11 / 7.5' }}>
                <Image
                  src="/Images/Frame 4.png"
                  alt="Marble Design Desktop"
                  fill
                  sizes="(min-width: 1024px) 55vw, 0px"
                  style={{ objectFit: 'contain', transform: 'scale(1.4)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden relative px-[4vw] py-[2vh] mt-10 flex items-center overflow-hidden" style={{ backgroundColor: '#1A2B22' }}>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[90vw] mx-auto w-full min-w-0">
          <div className="flex-1 z-20 px-[2vw] md:pl-[8vw] flex flex-col items-center lg:items-start text-center lg:text-left mt-28 md:mt-[4vh]">
            <h1 className="mt-[20px] text-[11vw] sm:text-[9vw] lg:text-[3vw] leading-none mb-[2vh] font-playfair" style={{ fontSize: 'clamp(2.75rem, 9vw, 4rem)' }}>
              <span className="text-casa-green font-bold">MARBLE</span>
              <span className="text-white font-bold lowercase">ous</span>
              <br />
              <span className="text-white">Creations for</span>
              <br />
              <span className="text-white">Every Space</span>
            </h1>
            <p className="mt-[20px] text-white/80 max-w-[90vw] lg:max-w-[25vw] font-inter mb-[4vh] text-[2vw] lg:text-[0.65rem]" style={{ fontSize: 'clamp(0.65rem, 2vw, 0.9rem)' }}>
              Transforming Spaces with Excellence &amp; Precision
            </p>
            <Link href="/store">
            <button className="bg-black text-white px-[8vw] py-[18px] hover:bg-white hover:text-black transition-all" style={{ fontSize: 'clamp(1rem, 2vw, 1rem)' }}>
              Visit Store
            </button>
            </Link>
          </div>

          <div className="flex-1 mt-6 z-10 flex justify-center lg:hidden">
            <Image
              src="/Images/Rectangle 6.png"
              alt="Marble Design Mobile"
              width={1100}
              height={750}
              className="w-full h-auto max-w-[90vw] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</main>




{/* About Section */}
<section
  className="text-white py-16 relative flex flex-1 overflow-hidden"
  id="about"
  style={{ backgroundColor: '#1A2B22' }}
>
  {/* Red accent bar - hidden on mobile, visible on lg+ */}
  <div className="absolute top-32 right-0 w-8 h-44 z-10 hidden lg:block" style={{ backgroundColor: "#A21D22" }}></div>

  <div className="flex flex-1 flex-col lg:flex-row items-center lg:items-start gap-12 max-w-7xl mx-auto px-4 w-full min-w-0">
    {/* Image Gallery (Desktop only) */}
    <div className="hidden lg:flex flex-1 gap-4 flex-wrap ml-0 lg:ml-28 -mt-8 relative z-20 -translate-x-0 lg:-translate-x-10 justify-center lg:justify-start">
      <Image
        src="/Images/Rectangle 11.png"
        alt="Marble Sample 1"
        width={150}
        height={200}
        className="max-w-36 h-auto object-cover rounded-lg"
      />
      <Image
        src="/Images/Rectangle 13.png"
        alt="Marble Sample 2"
        width={150}
        height={200}
        className="max-w-36 h-auto object-cover rounded-lg relative -top-5"
      />
      <Image
        src="/Images/Rectangle 12.png"
        alt="Marble Sample 3"
        width={150}
        height={200}
        className="max-w-36 h-auto object-cover rounded-lg"
      />
    </div>

   {/* Content */}
<div className="flex flex-1 lg:flex-1 flex-col max-w-3xl mx-auto translate-y-3 text-center lg:text-left">
  {/* Mobile: smaller text; md+ keeps original sizing */}
  <h2 className="font-playfair text-casa-green text-sm md:text-base mb-3">About us</h2>

  <h1 className="font-playfair leading-tight mb-4 text-3xl sm:text-4xl md:text-6xl">
    Caption will
    <br /> be here
  </h1>

  <p className="text-white/80 font-inter leading-relaxed text-[11px] sm:text-sm md:text-base">
    Casa Progetto is a leading provider of premium marble and
    <br />
    construction materials, delivering high-quality craftsmanship
    <br />
    and innovative solutions for homes, offices, and commercial
    <br />
    spaces. With a commitment to elegance and durability, we
    <br />
    specialize in marble installations, gypsum partitions, glass
    <br />
    partitions, and comprehensive interior solutions. Whether you
    <br />
    seek a modern aesthetic or timeless luxury, our expert team
    <br />
    ensures impeccable results tailored to your vision.
  </p>

  {/* Mobile-only: two Images side by side, centered, below the text */}
  <div className="mt-8 flex lg:hidden justify-center">
    <div className="grid grid-cols-2 gap-4 place-items-center">
      <Image
        src="/Images/Group 60.png"
        alt="Showcase 1"
        width={160}
        height={160}
        className="w-32 sm:w-36 h-auto object-contain"
      />
      <Image
        src="/Images/Group 62.png"
        alt="Showcase 2"
        width={160}
        height={160}
        className="w-32 sm:w-36 h-auto object-contain"
      />
    </div>
  </div>
</div>

  </div>
</section>


      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" id="services">
        <div className="flex flex-1 flex-col items-center max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl mb-8 sm:mb-12 text-gray-800 font-playfair text-center">Our Services</h1>
          
          {/* Mobile: Single column (grid-cols-1), Desktop: 4 columns (lg:grid-cols-4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl">
            <div className="flex justify-center w-full">
              <Image 
                src="/Images/Group 55.png" 
                alt="Premium Marble Solutions" 
                width={250} 
                height={300} 
                className="w-48 sm:w-56 lg:w-60 h-auto" 
              />
            </div>
            
            <div className="flex justify-center w-full lg:transform lg:-translate-y-8">
              <Image 
                src="/Images/Group 56.png" 
                alt="Interior Solutions" 
                width={250} 
                height={300} 
                className="w-48 sm:w-56 lg:w-60 h-auto" 
              />
            </div>
            
            <div className="flex justify-center w-full">
              <Image 
                src="/Images/Group 57.png" 
                alt="Renovation" 
                width={250} 
                height={300} 
                className="w-48 sm:w-56 lg:w-60 h-auto" 
              />
            </div>
            
            <div className="flex justify-center w-full lg:transform lg:-translate-y-8">
              <Image 
                src="/Images/Group 58.png" 
                alt="Interior Design" 
                width={250} 
                height={300} 
                className="w-48 sm:w-56 lg:w-60 h-auto" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="flex flex-1 py-6 pb-36 px-4 bg-casa-brown text-white" id="why-us">
        <div className="flex flex-1 mt-[100px] mr-[0px]">
          <div className="flex flex-1 justify-center">
            <div className="w-full max-w-7xl pl-4 lg:pl-28 xl:pl-38 pr-4 relative">
              {/* Flex container: left intro + right icons */}
              <div className="flex flex-col lg:flex-row justify-between gap-16 items-center lg:items-start">
                {/* LEFT: Paragraph Section */}
                <div className="flex flex-col w-full lg:w-[380px] items-center lg:items-start">
                  {/* Heading */}
                  <h1 className="text-[38px] sm:text-[46px] lg:text-[50px] mb-4 font-playfair leading-[1] text-center lg:text-left">
  Why Choose<br />
  <span className="text-casa-yellow">Casa Progetto?</span>
</h1>

                  {/* Mobile Image */}
                  <div className="flex lg:hidden mb-6 justify-center">
                    <Image
                      src="/Images/Rectangle 25.png"
                      alt="Marble Sample"
                      width={300}
                      height={200}
                      className="object-cover shadow-lg rounded"
                    />
                  </div>

                  {/* Paragraphs */}
                  <p className="mb-4 text-white/80 font-inter text-[13px] leading-tight text-center lg:text-left">
                    At Casa Progetto, we are dedicated to providing world-class<br />
                    marble and construction solutions that combine beauty,<br />
                    functionality, and durability. Here’s why we are the trusted<br />
                    choice for clients across residential, commercial, and<br />
                    industrial projects:
                  </p>

                  <hr className="border-t-2 border-[#7B4B2A] my-4 w-full" />

                  <p className="text-white/80 font-inter text-[13px] leading-tight text-center lg:text-left">
                    At Casa Progetto, we don’t just build spaces, we create<br />
                    environments that inspire and endure. Partner with us for a<br />
                    seamless, stress-free experience and let’s turn your vision<br />
                    into reality.
                  </p>
                </div>

                {/* RIGHT: Icon + Text Features */}
                <div className="flex flex-1 flex-col w-full lg:w-[600px] text-[15px] lg:pl-12 xl:pl-20">
                  <div className="flex flex-col space-y-10 max-w-[500px] mx-auto lg:mx-0">
                    {/* Feature 1 */}
                    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 text-center lg:text-left">
                      <div className="w-9 h-9 flex-shrink-0">
                        <Image src="/Images/Quality 1.png" alt="Quality" width={36} height={36} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-casa-yellow font-semibold mb-1 text-[16px]">High-Quality Materials</h3>
                        <p className="text-white/75 text-sm leading-tight">Only the finest marble and<br />construction materials</p>
                      </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 text-center lg:text-left">
                      <div className="w-9 h-9 flex-shrink-0">
                        <Image src="/Images/Asset 1 1.png" alt="Craftsmanship" width={36} height={36} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-casa-yellow font-semibold mb-1 text-[16px]">Expert Craftsmanship</h3>
                        <p className="text-white/75 text-sm leading-tight">A team of skilled professionals<br />with years of experience</p>
                      </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 text-center lg:text-left">
                      <div className="w-9 h-9 flex-shrink-0">
                        <Image src="/Images/Custom 1.png" alt="Custom" width={36} height={36} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-casa-yellow font-semibold mb-1 text-[16px]">Custom Solutions</h3>
                        <p className="text-white/75 text-sm leading-tight">Tailored designs to match<br />your style and needs</p>
                      </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 text-center lg:text-left">
                      <div className="w-9 h-9 flex-shrink-0">
                        <Image src="/Images/Layer 1.png" alt="Delivery" width={36} height={36} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-casa-yellow font-semibold mb-1 text-[16px]">On-Time Delivery</h3>
                        <p className="text-white/75 text-sm leading-tight">We value your time and meet<br />project deadlines</p>
                      </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4 text-center lg:text-left">
                      <div className="w-9 h-9 flex-shrink-0">
                        <Image src="/Images/Layer 1 (1).png" alt="Affordable" width={36} height={36} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-casa-yellow font-semibold mb-1 text-[16px]">Affordable Luxury</h3>
                        <p className="text-white/75 text-sm leading-tight">Premium services at<br />competitive prices</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Desktop Version Images */}
              <div className="hidden lg:block">
                {/* Rectangle 24 */}
                <div className="absolute top-1/2 transform -translate-y-[100%] -right-4 lg:-right-8 xl:-right-12">
                  <Image
                    src="/Images/Rectangle 24.png"
                    alt="Marble Sample 1"
                    width={350}
                    height={300}
                    className="object-cover shadow-lg"
                  />
                </div>

                {/* Rectangle 25 */}
                <div className="absolute top-1/2 transform -translate-y-[-5%] -right-4 lg:-right-8 xl:-right-12">
                  <Image
                    src="/Images/Rectangle 25.png"
                    alt="Marble Sample 2"
                    width={350}
                    height={300}
                    className="object-cover shadow-lg"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Welcome to Casa Progetto Section */}
      <section
        id="welcome"
        className="relative flex flex-1 bg-no-repeat bg-cover bg-center  h-[100vw] lg:h-[620px]"
        style={{
          backgroundImage: "url('/Images/Rectangle 29.png')",
        }}
      >
        {/* Desktop override background using media query */}
        <style jsx>{`
          @media (min-width: 1024px) {
            #welcome {
              background-image: url('/Images/Bg image.png') !important;
            }
          }
        `}</style>

        {/* ===== Mobile Content (centered in square box) ===== */}
        <div className="absolute inset-0 flex items-center justify-center lg:hidden">
          <div className="w-72 h-72 bg-white/50 flex flex-col items-center justify-center text-center p-4">
            <h2 className="text-casa-green text-sm mb-1 font-semibold uppercase">Store</h2>
            <h1 className="text-xl font-semibold text-gray-800 mb-1 font-playfair">Welcome to</h1>
            <h1 className="text-xl font-bold text-casa-green mb-1 font-playfair">Casa Progetto</h1>
            <p className="text-sm text-gray-700 mb-4 font-inter">Where Elegance Meets Functionality</p>
            <Link href="/store">
            <button className="bg-casa-green text-white px-4 py-2 text-sm rounded hover:bg-green-700 transition-colors">
              Visit Store
            </button>
            </Link>
          </div>
        </div>

        {/* ===== Desktop Content ===== */}
        <div className="hidden lg:flex flex-1 flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto py-50 px-4">
          {/* Left Image */}
          <div className="flex flex-1">
            <div className="flex gap-4">
              <div className="flex flex-col space-y-4">
                <div className="absolute top-[50px] z-20 w-[454px] h-[622px] flex items-center justify-center overflow-hidden ml-[170px]">
                  <Image 
                    src="/Images/Rectangle 29.png" 
                    alt="Marble Sample 1" 
                    width={454} 
                    height={622} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="flex flex-1 flex-col ml-[300px] text-left">
            <h2 className="text-casa-green text-xl mb-4 font-inter leading-[1]">Store</h2>
            <h1 className="text-5xl mb-6 text-gray-800 leading-[0.5] font-playfair">Welcome to</h1>
            <h1 className="text-5xl mb-6 text-casa-green leading-[0.5] font-playfair">Casa Progetto</h1>
            <p className="text-gray-600 leading-[0] mb-6 font-inter">Where Elegance Meets Functionality</p>
            <Link href="/store">
            <button className="bg-casa-green text-white px-1 py-3 w-36 hover:bg-green-700 transition-colors">
              Visit Store
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Client Testimonial Section */}
      <section className="py-24 px-4 text-white flex flex-1 relative" style={{ backgroundColor: '#1A2B22' }}>
        <div className="flex flex-1 flex-col max-w-7xl mx-auto">
          {/* ===== Mobile Version ===== */}
          <div className="flex lg:hidden flex-col items-center justify-center space-y-6 mt-8">
            {/* Centered Text Content in Square Box */}
            <div className="w-[300px] h-[300px] bg-white/10 p-4 text-center rounded flex flex-col items-center justify-center">
              <h3 className="text-casa-green text-base mb-2 font-inter">Testimonial</h3>
              <h1 className="text-2xl text-white font-playfair mb-3">Our Client Say&apos;s</h1>
              <div className="text-casa-green text-2xl mb-2 font-serif">“</div>
              <blockquote className="text-sm text-white italic mb-3">
                Top-quality service, professional team, and excellent craftsmanship!
              </blockquote>
              <p className="text-white text-sm">- Client Name 2</p>
            </div>

            {/* Mobile Image Below Content */}
            <Image 
              src="/Images/Rectangle 33.png" 
              alt="Marble Sample 2" 
              width={300} 
              height={300} 
              className="rounded shadow-lg object-cover"
            />
          </div>

          {/* ===== Desktop Version ===== */}
          <div className="hidden lg:flex flex-1 flex-row items-start gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-md mt-24 ml-24">
              <div className="text-left mb-8">
                <h3 className="text-casa-green text-lg mb-2 font-inter">Testimonial</h3>
                <h1 className="text-4xl lg:text-5xl text-white font-playfair">Our Client Say&apos;s</h1>
              </div>

              {/* Testimonial Box */}
              <div 
                className="p-6 hover:opacity-90 transition-all duration-300 cursor-pointer group w-[400px] h-[200px] flex-shrink-0 flex flex-col overflow-hidden"
                style={{ backgroundColor: '#304A2A' }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="text-xl text-casa-green mb-3 font-serif flex-shrink-0">&quot;</div>
                <blockquote className="text-xs lg:text-sm leading-tight mb-3 text-white/90 italic flex-1 overflow-hidden">
                  {!isHovered ? 
                    "Casa Progetto transformed our living space with elegant marble flooring and seamless partitions. Highly recommend!" :
                    "Top-quality service, professional team, and excellent craftsmanship!"
                  }
                </blockquote>
                <div className="text-white text-base flex-shrink-0">
                  <p>- {!isHovered ? "Client Name" : "Client Name 2"}</p>
                </div>
              </div>
            </div>

            {/* Rectangle 33 - Desktop Version Only */}
            <div className="hidden lg:block">
              <div className="absolute bottom-0 transform translate-y-[75px] z-20 w-[454px] h-[622px] flex items-center justify-center overflow-hidden ml-[40px]">
                <Image 
                  src="/Images/Rectangle 33.png" 
                  alt="Marble Sample 1" 
                  width={454} 
                  height={622} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Any Question Section */}
      <section id="faq" className="bg-white py-32 px-4">
  <div className="mx-auto w-full max-w-4xl">
    <h6 className="text-casa-green text-xs mb-2 font-inter text-center lg:text-left lg:ml-[330px]">
      FAQ&apos;s
    </h6>
    <h1 className="text-3xl sm:text-4xl text-center mb-10 text-gray-800 font-playfair">
      Any Question?
    </h1>

    <div className="flex flex-col">
      {[
        {
          question: "What services does Casa Progetto offer?",
          answer:
            "Casa Progetto specializes in premium marble installations, interior design, glass partitions, gypsum partitions, 3D modeling, and comprehensive interior solutions for residential and commercial spaces.",
        },
        {
          question: "Do you offer customized interior solutions?",
          answer:
            "Yes, we provide fully customized solutions tailored to your specific needs, style preferences, and budget. Our team works closely with clients to create unique designs that reflect their vision.",
        },
        {
          question: "Can I visit your store to see material samples?",
          answer:
            "Absolutely! Our showroom features an extensive collection of marble samples, stone varieties, and design inspirations. Visit us to explore materials and discuss your project requirements with our experts.",
        },
        {
          question: "How do I get a price estimate for my project?",
          answer:
            "Contact us through our website, phone, or visit our showroom for a free consultation. We'll assess your requirements and provide a detailed quote based on materials, design complexity, and project scope.",
        },
      ].map((faq, index) => (
        <div key={index} className="border-t" style={{ borderTopColor: "#E8E8E8" }}>
          <button
            className="w-full flex justify-between items-center py-5 text-left focus:outline-none transition-colors hover:bg-gray-50 px-2 sm:px-3"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <h3 className="font-semibold text-base sm:text-lg text-gray-800 pr-4">
              {faq.question}
            </h3>
            <svg
              className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 flex-shrink-0 ${
                activeIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {activeIndex === index && (
            <div className="pb-5 pt-0 px-2 sm:px-3">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-left sm:text-left">
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}

      {showAllFAQs &&
        [
          {
            question: "Do you offer custom cutting and finishing for marble?",
            answer:
              "Yes, we specialize in custom cutting, polishing, and edge finishing to suit your project needs. Whether it's for flooring, countertops, or wall cladding, our team ensures precision and quality craftsmanship.",
          },
          {
            question: "Can I get assistance in selecting the right stone for my project?",
            answer:
              "Absolutely! Our experts are available to guide you through the selection process, based on your design vision, durability requirements, and budget. We're here to help you make the best choice.",
          },
          {
            question: "Do you provide delivery and installation services?",
            answer:
              "Yes, we offer reliable delivery and professional installation services to ensure your materials are handled and placed with the utmost care and expertise.",
          },
        ].map((faq, index) => {
          const adjustedIndex = index + 4;
          return (
            <div key={adjustedIndex} className="border-t" style={{ borderTopColor: "#E8E8E8" }}>
              <button
                className="w-full flex justify-between items-center py-5 text-left focus:outline-none transition-colors hover:bg-gray-50 px-2 sm:px-3"
                onClick={() => setActiveIndex(activeIndex === adjustedIndex ? null : adjustedIndex)}
              >
                <h3 className="font-semibold text-base sm:text-lg text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === adjustedIndex ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activeIndex === adjustedIndex && (
                <div className="pb-5 pt-0 px-2 sm:px-3">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-left sm:text-left">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
    </div>

    <div className="flex justify-center mt-10">
    <button
  className="bg-black text-white px-5 py-3 w-40 hover:bg-gray-700 transition-colors text-sm sm:text-base"
  onClick={() => {
    if (showAllFAQs) {
      // Scroll to the top of the FAQ section
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    }
    setShowAllFAQs(!showAllFAQs);
  }}
>
  {showAllFAQs ? "Show Less" : "View all FAQ's"}
</button>

    </div>
  </div>
</section>



      {/* Replace inline footer with Footer component */}
      <Footer />
    </div>
  );
};

export default Homepage;
