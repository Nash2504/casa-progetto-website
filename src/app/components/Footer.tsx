'use client';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // Handles form submission for both mobile and desktop
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const form = e.currentTarget; // typed as HTMLFormElement
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      tel: (form.elements.namedItem("tel") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value
    };
  
    try {
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
  
      if (res.ok) {
        alert("Email sent successfully!");
        form.reset();
      } else {
        const errorData = await res.json();
        alert(`Failed to send email: ${errorData.error || "Unknown error"}`);
      }
    } catch (error) {
      console.error(error);
      alert("Error sending email");
    }
  };
  

  return (
    <>
      {/* Let's Build Something MARBLEOUS Section */}
      <section
        className="py-28 px-4 text-white font-inter"
        style={{ backgroundColor: "#2B2B2B" }}
        id="contact"
      >
        <div className="mx-auto w-full max-w-[1100px]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left: Headline + Location */}
            <div className="flex-1 flex flex-col text-center lg:text-left items-center lg:items-start">
              <h1 className="text-xl lg:text-3xl leading-tight font-playfair">
                Let&apos;s Build Something<br />
              </h1>
              <h1 className="text-3xl lg:text-5xl mb-0 leading-tight font-playfair">
                <span className="text-casa-green font-bold">MARBLE</span>
                <span className="font-bold lowercase">ous!</span>
              </h1>

              <hr
                className="mt-4 mb-6 border-0 h-[0.5px] w-full max-w-[450px]"
                style={{ backgroundColor: "#616161" }}
              />

              {/* Mobile Form */}
              <div className="w-full max-w-md lg:hidden mb-12">
                <div className="rounded-lg p-8 w-full" style={{ backgroundColor: "#2B2B2B" }}>
                  <h2 className="pb-4 text-4xl font-bold text-white mb-6 text-center font-playfair">
                    Get a Quote
                  </h2>
                  <p className="text-white/80 mb-10 leading-relaxed font-inter text-center text-[12px]">
                    Our experts are here to help! Share your requirements,<br></br>
                    and we&apos;ll provide a personalized estimate tailored to<br></br>
                    your needs and budget.
                  </p>
                  <form className="flex flex-col space-y-4" autoComplete="on" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-[#1A1A1A] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-casa-green"
                      required
                    />
                    <input
                      type="tel"
                      name="tel"
                      autoComplete="tel"
                      placeholder="Contact Number"
                      className="w-full px-4 py-3 bg-[#1A1A1A] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-casa-green"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Mail Id"
                      className="w-full px-4 py-3 bg-[#1A1A1A] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-casa-green"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-casa-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>

              {/* Location Info */}
              <div className="flex flex-col space-y-4 mt-8 w-full max-w-[450px] text-center lg:text-left items-center lg:items-start">
  <Link href="/#hmpg">
    <Image
      src="/Images/Logo.png"
      alt="Casa Progetto Logo"
      width={150}
      height={50}
      className="mb-6"
    />
  </Link>



                <h3 className="text-casa-green text-lg font-playfair">Location</h3>
                <p className="text-white/80 text-sm font-inter leading-tight">
  <Link  
    href="https://share.google/Pv5lv4Gs1My99p8no" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:underline"
  >
    3rd floor, Hamsah A building, 3A street, near<br />
    Ansar gallery, Al Karama, Dubai
  </Link> 
</p>

                <h3 className="text-casa-green text-lg font-playfair">Phone</h3>
                <p className="text-white/80 text-sm font-inter leading-tight">
  <Link href="tel:+971543422444" className="hover:underline"> 
    +971 54 342 2444
  </Link>{" "} 
  |{" "}
  <Link href="tel:+971582924877" className="hover:underline"> 
    +971 58 292 4877
  </Link> 
</p>

                <h3 className="text-casa-green text-lg font-playfair">Mail</h3>
                <Link
  href="mailto:kanchan.casaprogetto@outlook.com"
  className="text-white/80 text-sm font-inter leading-tight hover:underline"
>
  kanchan.casaprogetto@outlook.com
</Link>
              </div>
            </div>

            {/* Desktop Form */}
            <div className="hidden lg:flex flex-1 w-full justify-end">
              <div className="rounded-lg p-8 w-full max-w-md" style={{ backgroundColor: "#2B2B2B" }}>
                <h1 className="pb-4 text-5xl font-bold text-white mb-6 text-center font-playfair">
                  Get a Quote
                </h1>
                <p className="text-white/80 mb-10 leading-relaxed font-inter text-center text-[14px]">
                  Our experts are here to help! Share your requirements,<br></br>
                  and we&apos;ll provide a personalized estimate tailored to<br></br>
                  your needs and budget.
                </p>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-[#1A1A1A] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-casa-green"
                    required
                  />
                  <input
                    type="tel"
                    name="tel"
                    placeholder="Contact Number"
                    className="w-full px-4 py-3 bg-[#1A1A1A] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-casa-green"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Mail Id"
                    className="w-full px-4 py-3 bg-[#1A1A1A] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-casa-green"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-casa-green text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#2B2B2B" }} className="relative">
        <div className="pt-0 px-4 text-white">
          <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center">
            {/* Quick Links */}
            <div className="p-2 rounded-lg mt-6" style={{ backgroundColor: "#2B2B2B" }}>
              <ul className="flex flex-wrap justify-center text-sm items-center gap-x-4">
                <li>
                  <Link href="#about" className="text-white/80 hover:text-casa-green font-inter">
                    About Us
                  </Link>
                </li>
                <li className="text-white/40">|</li>
                <li>
                  <Link href="#faq" className="text-white/80 hover:text-casa-green font-inter">
                    FAQ&apos;s
                  </Link>
                </li>
                <li className="text-white/40">|</li>
                <li>
                  <Link href="/services" className="text-white/80 hover:text-casa-green font-inter">
                    Services
                  </Link>
                </li>
                <li className="text-white/40">|</li>
                <li>
                  <Link href="/store" className="text-white/80 hover:text-casa-green font-inter">
                    Store
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-600 transition-colors"
                style={{ backgroundColor: "#2B2B2B" }}
              >
                <Image
                  src="/Images/objects.png"
                  alt="Social 1"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-600 transition-colors"
                style={{ backgroundColor: "#2B2B2B" }}
              >
                <Image
                  src="/Images/objects (1).png"
                  alt="Social 2"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </Link>
              <Link
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-600 transition-colors"
                style={{ backgroundColor: "#2B2B2B" }}
              >
                <Image
                  src="/Images/objects (2).png"
                  alt="Social 3"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 py-6 px-4 text-center text-white/60 text-sm">
          © 2025 - Casa Progetto
        </div>
      </footer>
    </>
  );
}
