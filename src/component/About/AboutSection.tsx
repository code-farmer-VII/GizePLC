'use client';

import Image from "next/image";
import img1 from "../../Asset/Image/AboutImages/Gize workers.jpg"
import img2 from "../../Asset/Image/AboutImages/Gize US.jpg"
import img3 from "../../Asset/Image/AboutImages/Gize CEO.jpg"
import img4 from "../../Asset/Image/AboutImages/Gize meeting.jpg"
export default function AboutUsSection() {
    return (
      <section className="py-16 px-4 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center justify-between">
                {/* Right Side - Image Grid */}
       <div
          className="grid grid-cols-2 grid-rows-5 gap-2 w-full md:w-1/2"
          style={{ gridAutoFlow: 'dense' }}
        >
          <Image src={img1} alt="Image 1" className="row-span-2 col-start-1 row-start-2 object-cover w-full h-full rounded-md" />
          <Image src={img2} alt="Image 2" className="row-span-2 col-start-2 row-start-1 object-cover w-full h-full rounded-md" />
          <Image src={img3} alt="Image 3" className="row-span-2 col-start-1 row-start-4 object-cover w-full h-full rounded-md" />
          <Image src={img4} alt="Image 4" className="row-span-2 col-start-2 row-start-3 object-cover w-full h-full rounded-md" />
        </div>

        {/* Left Side - Text Content */}
        <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
            CHIEF EXECUTIVE OFFICER
          </h2>
          <p className="text-gray-600 mb-1.5">
            Whether your company is a multination or a smaller enterprise serving international markets, our customer service department understands your needs and determined to make the seemingly impossible become possible. It takes a lot of passion to transfer ideas into effective solutions and even more to turn those in to products and services which contribute to your success. It is this passion for solution that has made us one of the leading company in East Africa
          </p>
          <p className="text-gray-600 mb-1.5">
            Rising to challenges like these is precisely what our team does every day, everywhere in the world. That’s because our passion is to find better and smaller ways of doing this is driving force behind our business.
          </p>
          <div className="mt-4">
            <p className="text-lg font-semibold text-black">GIZESHWORK TESSEMA</p>
            <p className="text-orange-600 font-medium">CEO</p>
          </div>
        </div>
  

      </section>
    );
  }