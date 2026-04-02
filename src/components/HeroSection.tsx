import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Report from "./Report";

export default function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  /* =============================
     ANIMATIONS
  ============================= */
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  /* =============================
     EVENT MEDIA
  ============================= */
  const eventMedia = [
    { type: "image", src: "/images/event-1.jpg" },
    { type: "image", src: "/images/event-2.jpg" },
    { type: "image", src: "/images/event-3.jpg" },
    { type: "image", src: "/images/event-4.jpg" },
    { type: "image", src: "/images/event-5.jpg" },
    { type: "video", src: "/images/event-highlight.mp4" },
  ];

  return (
    <motion.div
      className="mt-10 px-4 md:px-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* =============================
          HERO TEXT
      ============================= */}
      <motion.h1
        className="text-3xl md:text-5xl text-cinnabar font-bold text-center"
        variants={fadeUp}
      >
        Empowering Africa’s Next Generation of Climate Leaders.
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl font-medium text-center mt-4 max-w-3xl mx-auto"
        variants={fadeUp}
      >
        Through education, advocacy, and action, TEI equips teenagers with the
        knowledge, skills, and platforms to build a climate-resilient future.
      </motion.p>

      {/* =============================
          CTA BUTTONS
      ============================= */}
      <motion.div
        className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8"
        variants={fadeUp}
      >
        <Link href="/activities">
          <button className="bg-cinnabar text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition">
            Explore TEI’s Work
          </button>
        </Link>

        {/* JOIN COMMUNITY (GOOGLE FORM) */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScGiavc9hD2Ed117BinDtP7GLIrq9iI2PrZwhFrvR2-G3ijLQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-cinnabar text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition">
            Join Climate Teens Hub
          </button>
        </a>

        {/* VOLUNTEER */}
        <a
          href="https://forms.gle/bJycP7J6GZn3BSin9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition">
            Volunteer With Us
          </button>
        </a>
      </motion.div>

      {/* WHATSAPP COMMUNITY */}
      <motion.div className="text-center mt-6" variants={fadeUp}>
        <p className="text-sm text-gray-600 mb-2">Already filled the form?</p>

        <a
          href="https://chat.whatsapp.com/CTrs19fzTXPIrQoYRuZzJ5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 font-semibold hover:underline"
        >
          Join our WhatsApp Community →
        </a>
      </motion.div>

      {/* =============================
          EVENT HIGHLIGHTS
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

        {/* SEE MORE */}
        <Link
          href="/climate-teen-summit-2026"
          className="group relative inline-block"
        >
          <span className="text-cinnabar font-bold text-lg md:text-xl">
            See More Highlights
          </span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cinnabar transition-all duration-300 group-hover:w-full"></span>
        </Link>
      </motion.div>

      <Report />

      {/* =============================
          FOOTPRINT
      ============================= */}
      <motion.div className="mt-16 text-center" ref={ref} variants={fadeUp}>
        <h2 className="text-2xl md:text-3xl font-bold text-cinnabar">
          Our Footprint
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? (
                <CountUp end={5000000} duration={2} separator="," />
              ) : (
                "0"
              )}
              +
            </h3>
            <p className="text-lg font-medium">Advocacy reach across Africa</p>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? <CountUp end={5000} duration={2} separator="," /> : "0"}
              +
            </h3>
            <p className="text-lg font-medium">Teens engaged across Africa</p>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? <CountUp end={3} duration={2} /> : "0"}+
            </h3>
            <p className="text-lg font-medium">Community climate actions</p>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? <CountUp end={4} duration={2} /> : "0"}
            </h3>
            <p className="text-lg font-medium">Years at COP</p>
          </div>

          <div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">Multiple</h3>
            <p className="text-lg font-medium">Global & local partnerships</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
