import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  /* =============================
     👉 PUT YOUR EVENT MEDIA HERE
     ============================= */

  const eventMedia = [
    { type: "image", src: "/images/event-1.jpg" }, // Image 1
    { type: "image", src: "/images/event-2.jpg" }, // Image 2
    { type: "image", src: "/images/event-3.jpg" }, // Image 3
    { type: "image", src: "/images/event-4.jpg" }, // Image 4
    { type: "image", src: "/images/event-5.jpg" }, // Image 5
    { type: "video", src: "/images/event-highlight.mp4" }, // Highlight Video
  ];

  return (
    <motion.div
      className="mt-10 px-4 md:px-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* TITLE */}
      <motion.h1
        className="text-3xl md:text-5xl text-cinnabar font-bold text-center"
        variants={fadeUp}
      >
        Empowering Africa’s Next Generation of Climate Leaders.
      </motion.h1>

      {/* SUBTEXT */}
      <motion.p
        className="text-lg md:text-xl font-medium text-center mt-4 max-w-3xl mx-auto"
        variants={fadeUp}
      >
        Through education, advocacy, and action, TEI equips teenagers with the
        knowledge, skills, and platforms to build a climate-resilient future.
      </motion.p>

      {/* BUTTONS */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
        variants={fadeUp}
      >
        <Link href="/activities">
          <button className="bg-cinnabar text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition">
            Explore TEI’s Work
          </button>
        </Link>

        <Link href="/contact-us">
          <button className="bg-cinnabar text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition">
            Join the TEI Community
          </button>
        </Link>
      </motion.div>

      {/* =============================
          EVENT HIGHLIGHTS SECTION
         ============================= */}

      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center text-cinnabar mt-16"
        variants={fadeUp}
      >
        Highlights from Climate Teen Summit 2026
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10"
        variants={fadeUp}
      >
        {eventMedia.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
          >
            {item.type === "image" && (
              <Image
                src={item.src}
                alt="TEI Event"
                width={800}
                height={500}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            )}

            {item.type === "video" && (
              <video
                src={item.src}
                controls
                className="w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </motion.div>

      {/* FOOTPRINT */}
      <motion.div className="mt-16 text-center" ref={ref} variants={fadeUp}>
        <h2 className="text-2xl md:text-3xl font-bold text-cinnabar">
          Our Footprint
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <motion.div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? (
                <CountUp end={5000000} duration={2} separator="," />
              ) : (
                "0"
              )}
              +
            </h3>
            <p className="text-lg font-medium">Advocacy reach across Africa</p>
          </motion.div>

          <motion.div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? <CountUp end={5000} duration={2} separator="," /> : "0"}
              +
            </h3>
            <p className="text-lg font-medium">Teens engaged across Africa</p>
          </motion.div>

          <motion.div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? <CountUp end={3} duration={2} /> : "0"}+
            </h3>
            <p className="text-lg font-medium">Community climate actions</p>
          </motion.div>

          <motion.div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? <CountUp end={4} duration={2} /> : "0"}
            </h3>
            <p className="text-lg font-medium">Years at COP</p>
          </motion.div>

          <motion.div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">Multiple</h3>
            <p className="text-lg font-medium">Global & local partnerships</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
