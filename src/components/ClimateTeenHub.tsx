import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ClimateTeenHub() {
  const images = [
    "/images/climate-champions.jpg",
    "/images/eco-warriors.jpg",
    "/images/greener-and-cooler.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="bg-white p-8 space-y-4">
      <h2 className="text-center text-2xl font-bold">
        <span className="text-mantis">Climate Teen </span>Hub
      </h2>
      <div className="lg:flex justify-center space-y-4 lg:space-x-8 lg:space-y-0">
        <div className="space-y-4">
          <p className="text-lg leading-8 lg:max-w-lg">
            Launched by The Ebaidebheki Initiative, Climate Teen Hub is a hub
            for young people from ages 10-19 to join their voices to climate
            change activities.
          </p>
          <ul className="text-lg space-y-4 font-semibold">
            <li>- We are Climate Champions.</li>
            <li>- We are Eco Warriors.</li>
            <li>- We are making the world greener and cooler.</li>
          </ul>
        </div>
        <Image
          src={images[currentImageIndex]}
          width={350}
          height={150}
          alt="Climate Champions"
        />
      </div>
      <div className="flex justify-center">
        <Link href="/climate-teen-hub" legacyBehavior>
          <a>
            <button className="bg-mallard hover:bg-mantis text-white font-bold py-2 px-4 rounded">
              See More
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
}
