import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import MediaCarousel from "@/components/MediaCarousel"; // Import your carousel

export default function ClimateTeenSummit() {
  const mediaItems = [
    { type: "image", src: "/images/event1.jpg", alt: "Event image 1" },
    { type: "image", src: "/images/event2.jpg", alt: "Event image 2" },
    { type: "video", src: "/videos/event1.mp4" },
    { type: "image", src: "/images/event3.jpg", alt: "Event image 3" },
    { type: "video", src: "/videos/event2.mp4" },
  ];

  return (
    <>
      <Meta title="About Us" />
      <NavBar />
      <main className="p-8 pt-28 space-y-8 md:px-16 lg:px-32">
        <h1 className="text-center text-2xl text-flamingo font-bold md:text-4xl">
          Climate Teen Summit 2026
        </h1>

        {/* Media Carousel */}
        <MediaCarousel media={mediaItems} seeMoreLink="/gallery" />
      </main>
      <Footer />
    </>
  );
}