import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  // Staggered parent container
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  // Fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

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
        {/* Button 1 → Activities */}
        <Link href="/activities">
          <button className="bg-cinnabar text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition">
            Explore TEI’s Work
          </button>
        </Link>

        {/* Button 2 → Contact Us */}
        <Link href="/contact-us">
          <button className="bg-cinnabar text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-600 transition">
            Join the TEI Community
          </button>
        </Link>

        {/* Announcement Button → Google Form (placeholder) */}
        <Link href="https://forms.gle/ZHEi2zn4mnc5PbUU7" target="_blank">
          <div className="uppercase border border-cinnabar text-cinnabar py-3 px-6 rounded-lg font-bold text-xl hover:bg-cinnabar hover:text-white transition cursor-pointer">
            Climate Teen Summit; click here to register!
          </div>
        </Link>
      </motion.div>

      {/* IMAGES */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-10"
        variants={fadeUp}
      >
        <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
          <img
            src="/images/climate-teen-hub-one.jpg"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="overflow-hidden rounded-xl shadow hover:shadow-lg transition">
          <img
            src="/images/climate-teen-hub-two.jpg"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </motion.div>

      {/* FOOTPRINT */}
      <motion.div className="mt-16 text-center" ref={ref} variants={fadeUp}>
        <h2 className="text-2xl md:text-3xl font-bold text-cinnabar">
          Our Footprint
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* COUNTER 1 */}
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

          {/* COUNTER 2 */}
          <motion.div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? <CountUp end={5000} duration={2} separator="," /> : "0"}
              +
            </h3>
            <p className="text-lg font-medium">Teens engaged across Africa</p>
          </motion.div>

          {/* COUNTER 3 */}
          <motion.div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? <CountUp end={3} duration={2} /> : "0"}+
            </h3>
            <p className="text-lg font-medium">Community climate actions</p>
          </motion.div>

          {/* COUNTER 4 */}
          <motion.div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">
              {inView ? <CountUp end={4} duration={2} /> : "0"}
            </h3>
            <p className="text-lg font-medium">Years at COP</p>
          </motion.div>

          {/* COUNTER 5 */}
          <motion.div className="hover:scale-105 transition-transform duration-300">
            <h3 className="text-4xl font-bold text-cinnabar">Multiple</h3>
            <p className="text-lg font-medium">Global & local partnerships</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
