import { useNavbarSize } from "../../hooks/useNavBarSize";
import Image from "next/image";
import Link from "next/link";
import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import ClimateTeenHub from "@/components/ClimateTeenHub";
import { useInView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-red-600 transition ease transform duration-1000`;
  const { isOpen, setIsOpen, menuRef } = useNavbarSize();

  const [ref1, inView1] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };

  return (
    <>
      <Meta title="Home" />
      <AnimatePresence>
        <motion.header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen grid grid-cols-1 lg:grid-cols-2"
        >
          <div className="flex flex-col justify-between p-8 space-y-16 bg-bianca md:space-y-0 md:p-16">
            <div className="">
              <div className="flex justify-between">
                <Link href="/" legacyBehavior>
                  <a>
                    <Image
                      src="/images/tei-logo-removebg.png"
                      alt="The Ebaidebheki Initiative Logo"
                      className="h-14 w-24"
                      width={200}
                      height={100}
                      priority={true}
                    />
                  </a>
                </Link>
                <Link href="/climate-teen-hub" legacyBehavior>
                  <a>
                    <Image
                      src="/images/climate-teen-hub-member.jpg"
                      alt="The Ebaidebheki Initiative Logo"
                      className="h-14 w-14"
                      width={200}
                      height={100}
                      priority={true}
                    />
                  </a>
                </Link>
                <Link href="/" legacyBehavior>
                  <a>
                    <Image
                      src="/images/sustainable-17-goals.webp"
                      alt="The Ebaidebheki Initiative Logo"
                      className="h-14 w-14"
                      width={200}
                      height={100}
                      priority={true}
                    />
                  </a>
                </Link>
                <button
                  className="flex flex-col h-12 w-12 rounded justify-center items-center group lg:hidden"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div
                    className={`${genericHamburgerLine} ${
                      isOpen
                        ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                  />
                  <div
                    className={`${genericHamburgerLine} ${
                      isOpen
                        ? "opacity-0"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                  />
                  <div
                    className={`${genericHamburgerLine} ${
                      isOpen
                        ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                    }`}
                  />
                </button>
              </div>
              <ul
                ref={menuRef}
                className={`text-center space-y-2 text-emperor bg-white text-lg overflow-hidden transition-max-height duration-1000 lg:hidden absolute top-24 left-0 w-full z-50 ${
                  isOpen ? "max-h-screen" : "max-h-0"
                }`}
              >
                <li className="pt-4">
                  <Link href="/" legacyBehavior>
                    <a>Home</a>
                  </Link>
                </li>
                <p>.</p>
                <li className="pt-4">
                  <Link href="about-us" legacyBehavior>
                    <a>About Us</a>
                  </Link>
                </li>
                <p>.</p>
                <li className="pt-4">
                  <Link href="activities" legacyBehavior>
                    <a>Activities</a>
                  </Link>
                </li>
                <p>.</p>
                <li>
                  <Link href="donate" legacyBehavior>
                    <a>Donate</a>
                  </Link>
                </li>
                <p>.</p>
                <li className="pb-4">
                  <Link href="contact-us" legacyBehavior>
                    <a>Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-emperor">
              <h1 className="capitalize text-3xl font-bold">
                Born from the yearning to see to the realization of development
                blueprints.
              </h1>
              <p>
                TEI has created this platform to create awareness, enlighten,
                educate, and advocate for the actualisation of development.
              </p>
              <div>
                <Link href="/donate" legacyBehavior>
                  <a>
                    <button className="bg-flamingo hover:bg-tonyspink text-white font-bold py-2 px-4 rounded">
                      Donate Now
                    </button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex space-x-4 lg:space-x-8 text-lg">
              <a href="">Facebook</a>
              <p>.</p>
              <a href="">Twitter</a>
              <p>.</p>
              <a href="">Instagram</a>
            </div>
          </div>
          <div className="bg-supernova text-emperor">
            <nav className="hidden text-lg justify-center items-center space-x-4 py-8 md:py-16 lg:flex">
              <Link href="/" legacyBehavior>
                <a className="hover:opacity-75">Home</a>
              </Link>
              <p>.</p>
              <Link href="/about-us" legacyBehavior>
                <a className="hover:opacity-75">About Us</a>
              </Link>
              <p>.</p>
              <Link href="/activities" legacyBehavior>
                <a className="hover:opacity-75">Activities</a>
              </Link>
              <p>.</p>
              <Link href="/donate" legacyBehavior>
                <a className="hover:opacity-75">Donate</a>
              </Link>
              <p>.</p>
              <Link href="/contact-us" legacyBehavior>
                <a className="hover:opacity-75">Contact Us</a>
              </Link>
            </nav>
            <div className="flex justify-center items-center mt-16 mr-16 md:mt-0 bg-white">
              <h2 className="font-bold tracking-widest text-9xl text-transparent bg-gradient-text bg-clip-text animate-gradient">
                TEI
              </h2>
            </div>
          </div>
        </motion.header>
      </AnimatePresence>
      <main className="bg-bianca">
        <motion.section
          animate={inView1 ? "visible" : "hidden"}
          variants={variants}
          exit="hidden"
          transition={{ duration: 2 }}
          ref={ref1}
          className="key-objectives flex flex-col space-y-4 text-lg font-bold text-center justify-center items-center px-8 md:space-x-8 py-16 md:space-y-0 md:flex-row md:text-2xl md:justify-between md:px-16"
        >
          <p className="text-white">Involving the public</p>
          <p className="text-white">Raising Awareness</p>
          <p className="text-white">
            Championing the Achievement of Development Goals
          </p>
        </motion.section>
        <section className="flex flex-col space-y-4 p-8 lg:flex-row lg:space-y-0">
          <Image
            src="/images/tei-logo-removebg.png"
            alt="The Ebaidebheki Initiative Logo"
            width={400}
            height={200}
          />
          <div className="text-emperor space-y-4 md:px-8">
            <h2 className="text-4xl font-semibold">About Us</h2>
            <hr className="h-1 bg-flamingo w-16" />
            <div className="space-y-2">
              <p className="text-lg leading-8">
                The Ebaideheki Initiative is a distinguished Non-Governmental
                Agency at the forefront of advocacy for the United Nations
                Sustainable Development Goals (SDGs), with a primary focus on
                addressing the challenges posed by Climate Change.
              </p>
              <div>
                <Link href="/about-us" legacyBehavior>
                  <a className="underline text-flamingo text-xl font-semibold">
                    ReadMore
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-supernova flex flex-col space-y-4 p-8">
          <div className="text-emperor space-y-4 md:px-8">
            <h2 className="text-4xl font-semibold">Activities</h2>
            <hr className="h-1 bg-flamingo w-16" />
            <div className="space-y-2">
              <p className="text-lg leading-8">
                The TEI, as an advocacy platform, has evolved beyond its core
                advocacy mission and has become an active force for change
                through partnerships with other youth-led NGOs.
              </p>
              <div>
                <Link href="/activities" legacyBehavior>
                  <a className="underline text-flamingo text-xl font-semibold">
                    ReadMore
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <ClimateTeenHub />
        <section>
          <div className="flex justify-center">
            <video controls>
              <source src="/images/home-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-lg p-4 text-center font-semibold">
            Moments from our WALK FOR SDGs
          </p>
          <hr />
        </section>
        <section className="flex justify-center p-4">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold">Gallery</h2>
            <hr className="h-1 bg-flamingo w-16" />
            <p className="text-lg">
              Check out amazing images and videos from some of the activities we
              have held in the past...
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/home1.jpg"
                  width={350}
                  height={150}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/home2.jpg"
                  width={350}
                  height={150}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/home3.jpg"
                  width={350}
                  height={150}
                  alt=""
                />
              </div>
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg"
                  src="/images/home4.jpg"
                  width={350}
                  height={150}
                  alt=""
                />
              </div>
            </div>
            <div>
              <Link href="/gallery" legacyBehavior>
                <a>
                  <button className="bg-flamingo hover:bg-tonyspink text-white font-bold py-2 px-4 rounded">
                    See More
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <hr className="m-8" />
        <motion.section
          animate={inView2 ? "visible" : "hidden"}
          variants={variants}
          exit="hidden"
          transition={{ duration: 2 }}
          ref={ref2}
          className="space-y-4"
        >
          <h2 className="text-4xl text-center font-semibold">Our Partners</h2>
          <div className="flex justify-center items-center">
            <hr className="h-1 bg-flamingo w-16" />
          </div>
          <div className="grid grid-cols-2 p-8 gap-8 md:grid-cols-4">
            <Image
              src="/images/han-solicitors-partner.jpg"
              alt="Han Solicitors Logo"
              width={400}
              height={300}
            />
            <Image
              src="/images/nate-partner.jpg"
              alt="Nate's Delicacies Logo"
              width={400}
              height={300}
            />
            <Image
              src="/images/lafec-partner.jpg"
              alt="Lafec Agribiz Enterprises Logo"
              width={400}
              height={300}
            />
            <Image
              src="/images/mbz-laundry-partner.jpg"
              alt="MBZ Laundry Logo"
              width={400}
              height={300}
            />
            <Image
              src="/images/global-access-partner.jpg"
              alt="Global Access Master Class Logo"
              width={400}
              height={300}
            />
            <Image
              src="/images/beks-gormet-partner.jpg"
              alt="Bek's Gourmet Logo"
              width={400}
              height={300}
            />
            <Image
              src="/images/sun-aide-partner.jpg"
              alt="Sun Aide Skills Logo"
              width={400}
              height={300}
            />
          </div>
        </motion.section>
        <section className="flex flex-col px-16 py-8 bg-flamingo space-y-4 md:space-y-0 md:flex-row">
          <div className="flex justify-center items-center text-lg font-bold text-white md:w-3/4 md:text-4xl">
            <p className="text-center">
              Let&apos;s realize our development blueprints
            </p>
          </div>
          <div className="flex justify-center items-center md:w-1/4">
            <div>
              <Link href="/donate" legacyBehavior>
                <a>
                  <button className="bg-supernova hover:bg-tonyspink text-flamingo text-xl font-bold py-4 px-4 rounded">
                    Donate Now
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
