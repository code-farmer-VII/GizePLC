"use client";
import Image from "next/image";
import Link from "next/link";

// Placeholder images
import bannerLeft from "../../Asset/Image/AboutImages/freight-forwarding.jpg"; // Replace with real image
import bannerTopRight from "../../Asset/Image/AboutImages/shipping.jpg"; // Replace with real image
import bannerBottomRight from "../../Asset/Image/AboutImages/transportation.jpg"; // Replace with real image

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-white ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Main Banner with Overlay */}
        <div className="relative h-[450px] lg:col-span-2 rounded-xl overflow-hidden bg-black/75">
          <Image
            src={bannerLeft}
            alt="Team working"
            fill
            className="object-cover"
          />
          {/* Orange Overlay Content */}
          <div className="absolute inset-0 bg-black/50">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-orange-500/65 bg-opacity-90 text-white p-6 md:p-10 rounded-xl max-w-md text-center md:ml-48">
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-left text-gray-200">
                        Ready To Start New Project With BANDRCE ?
                    </h3>
                    <p className="text-sm md:text-base mb-6 leading-relaxed text-left">
                        impact evaluation, baseline surveys, data collection, technical
                        assistance, capacity building, training, and consultancy
                        services
                    </p>
                    <div className="flex items-end justify-end">
                    <button className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition items-end">
                        Contact Us
                    </button>
                    </div>
                    </div>
                </div>
        </div>
        </div>

        {/* Right: Two stacked cards */}
        <div className="flex flex-col gap-6">
          {/* Top Right Card */}
          <div className="relative h-[210px] rounded-xl overflow-hidden">
            <Image
              src={bannerTopRight}
              alt="Laptop work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/75 p-6 flex flex-col justify-between rounded-xl text-white">
              <p className="text-sm leading-relaxed">
                We are dedicated on delivering high-quality services that meet
                the specific needs and objectives of our clients across a broad
                range of sectors.
              </p>
              <Link
                href="#"
                className="text-orange-400 font-semibold text-sm self-end hover:underline"
              >
                More About Us
              </Link>
            </div>
          </div>

          {/* Bottom Right Quote Box */}
          <div className="relative h-[100px] rounded-xl overflow-hidden">
            <Image
              src={bannerBottomRight}
              alt="Green field"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/75 flex items-center justify-center text-white text-lg font-medium italic text-center px-4 rounded-xl">
              “ Sustainable Solutions for Tomorrow’s Challenges. “
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
