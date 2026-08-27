import Image from "next/image";
import Link from "next/link";

export default function ClimateTeensBootcampSection() {
  /*
   * ==========================================
   * BOOTCAMP MEDIA
   * ==========================================
   *
   * Place your images inside:
   * /public/images/
   */

  const bootcampImages = [
    {
      src: "/images/climate-innovation-1.jpg",
      alt: "Climate Teens Innovation Bootcamp participants",
    },
    {
      src: "/images/climate-innovation-2.jpg",
      alt: "Climate Teens Innovation Bootcamp learning session",
    },
    {
      src: "/images/climate-innovation-3.jpg",
      alt: "Climate Teens Innovation Bootcamp participants",
    },
    {
      src: "/images/climate-innovation-4.jpg",
      alt: "Climate Teens Innovation Bootcamp activity",
    },
    {
      src: "/images/climate-innovation-5.jpg",
      alt: "Climate Teens Innovation Bootcamp participants",
    },
    {
      src: "/images/climate-innovation-6.jpg",
      alt: "Climate Teens Innovation Bootcamp",
    },
  ];

  return (
    <section className="mt-20">
      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
        {/* ==========================================
            HEADER
        ========================================== */}
        <div className="bg-mantis px-6 py-10 text-center text-white md:px-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider">
            TEI Project
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Climate Teens Innovation Bootcamp 2026
          </h2>

          <p className="mt-3 text-lg font-semibold">Teens Taking Action</p>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 md:text-lg">
            From climate learning to climate solutions.
          </p>
        </div>

        <div className="p-6 md:p-10">
          {/* ==========================================
              ABOUT THE PROJECT
          ========================================== */}
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-2xl font-bold text-mantis md:text-3xl">
              About the Bootcamp
            </h3>

            <p className="mt-5 leading-8">
              The Climate Teens Innovation Bootcamp 2026 was a three-day youth
              climate learning and innovation programme held in Abuja from 10–12
              August 2026.
            </p>

            <p className="mt-4 leading-8">
              The programme was delivered by The Ebaidebheki Initiative (TEI),
              with technical partnership from Clean Technology Hub. It was
              designed to equip young people with knowledge, practical exposure
              and opportunities to develop climate-focused ideas.
            </p>
          </div>

          {/* ==========================================
              PROJECT HIGHLIGHTS
          ========================================== */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-xl bg-gray-50 p-5 text-center">
              <h4 className="text-3xl font-bold text-mantis">20</h4>

              <p className="mt-1 text-sm font-medium">Participants Accepted</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5 text-center">
              <h4 className="text-3xl font-bold text-mantis">3</h4>

              <p className="mt-1 text-sm font-medium">Days of Learning</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5 text-center">
              <h4 className="text-3xl font-bold text-mantis">3</h4>

              <p className="mt-1 text-sm font-medium">University Students</p>
            </div>

            <div className="rounded-xl bg-gray-50 p-5 text-center">
              <h4 className="text-3xl font-bold text-mantis">10</h4>

              <p className="mt-1 text-sm font-medium">Solution Ideas</p>
            </div>
          </div>

          {/* ==========================================
              PROGRAMME SESSIONS
          ========================================== */}
          <div className="mt-14">
            <h3 className="text-center text-2xl font-bold text-mantis md:text-3xl">
              Programme Sessions
            </h3>

            <p className="mx-auto mt-3 max-w-3xl text-center leading-7">
              Across the three-day programme, participants took part in sessions
              covering climate change, clean technology, green careers, climate
              enterprise and innovation.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {/* DAY 1 */}
              <div className="rounded-xl border border-gray-100 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-mantis">
                  Day 1
                </p>

                <h4 className="mt-2 text-xl font-bold text-mantis">
                  Climate & Clean Technology
                </h4>

                <p className="mt-3 leading-7">
                  Participants explored climate change fundamentals and Nigerian
                  climate realities, followed by sessions on renewable energy,
                  clean cooking and the circular economy.
                </p>
              </div>

              {/* DAY 2 */}
              <div className="rounded-xl border border-gray-100 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wide text-mantis">
                  Day 2
                </p>

                <h4 className="mt-2 text-xl font-bold text-mantis">
                  Green Careers & Enterprise
                </h4>

                <p className="mt-3 leading-7">
                  Participants were introduced to green careers, climate
                  enterprise and opportunities within the growing green economy.
                </p>
              </div>

              {/* DAY 3 */}
              <div className="rounded-xl border border-gray-100 p-6 shadow-sm md:col-span-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-mantis">
                  Day 3
                </p>

                <h4 className="mt-2 text-xl font-bold text-mantis">
                  Climate Innovation & Solution Building
                </h4>

                <p className="mt-3 leading-7">
                  Participants worked in teams to identify problems and develop
                  early-stage climate solution ideas. Teams then presented their
                  concepts and received feedback.
                </p>
              </div>
            </div>
          </div>

          {/* ==========================================
              SOLUTION IDEAS
          ========================================== */}
          <div className="mt-14">
            <h3 className="text-center text-2xl font-bold text-mantis md:text-3xl">
              Climate Solution Ideas
            </h3>

            <p className="mx-auto mt-3 max-w-3xl text-center leading-7">
              During the innovation exercises, participants developed a range of
              early-stage ideas addressing environmental and community
              challenges.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-5">
                <h4 className="font-bold text-mantis">
                  Solar-Powered Market Fans
                </h4>

                <p className="mt-2 text-sm leading-6">
                  A concept using solar energy to reduce generator dependence
                  and improve comfort for traders and customers.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <h4 className="font-bold text-mantis">
                  Plastic Waste into School Desks
                </h4>

                <p className="mt-2 text-sm leading-6">
                  A concept focused on recycling plastic waste into durable
                  school furniture.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <h4 className="font-bold text-mantis">Green WhatsApp Radio</h4>

                <p className="mt-2 text-sm leading-6">
                  A concept for using WhatsApp voice messages and solar-powered
                  speakers to share climate information.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <h4 className="font-bold text-mantis">Cool Roof Gardens</h4>

                <p className="mt-2 text-sm leading-6">
                  A concept exploring rooftop gardens as a way to reduce heat
                  and increase urban greenery.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <h4 className="font-bold text-mantis">Waste-to-Biochar</h4>

                <p className="mt-2 text-sm leading-6">
                  An early-stage concept exploring the conversion of suitable
                  farm and food waste into biochar.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-5">
                <h4 className="font-bold text-mantis">
                  Solar-Powered Waste-Collecting Drone
                </h4>

                <p className="mt-2 text-sm leading-6">
                  An early-stage concept exploring how solar-powered drone
                  technology could support waste collection and recycling.
                </p>
              </div>
            </div>
          </div>

          {/* ==========================================
              STANDOUT STORY
          ========================================== */}
          <div className="mt-14 rounded-2xl bg-mantis/10 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-mantis">
              A Standout Moment
            </h3>

            <h4 className="mt-2 text-xl font-semibold">
              An 11-Year-Old Thinks in Systems
            </h4>

            <p className="mt-4 leading-8">
              The youngest participant, aged 11, developed and presented an
              early-stage concept for a solar-powered drone that could move
              around collecting trash and supporting recycling.
            </p>

            <p className="mt-4 leading-8">
              Although the concept has not been technically validated, it
              demonstrated the creativity and systems thinking the programme
              sought to encourage among young participants.
            </p>
          </div>

          {/* ==========================================
              PHOTO GALLERY
          ========================================== */}
          <div className="mt-14">
            <h3 className="text-center text-2xl font-bold text-mantis md:text-3xl">
              Bootcamp Highlights
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-center">
              A look at some of the participants, activities and moments from
              the Climate Teens Innovation Bootcamp 2026.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {bootcampImages.map((image, index) => (
                <div
                  key={index}
                  className="group overflow-hidden rounded-xl shadow-md"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ==========================================
              IMPACT REPORT
          ========================================== */}
          <div className="mt-14 rounded-2xl bg-gray-50 p-6 text-center md:p-10">
            <h3 className="text-2xl font-bold text-mantis md:text-3xl">
              Climate Teens Innovation Bootcamp 2026
              <br />
              Programme Impact Report
            </h3>

            <p className="mx-auto mt-4 max-w-2xl leading-7">
              Read the full programme impact report to learn more about the
              Bootcamp, its participants, learning sessions, climate solution
              ideas and key lessons from the first edition.
            </p>

            <a
              href="/documents/Climate_Teens_Innovation_Bootcamp_2026_Executive_Impact_Report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-mantis px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              View Impact Report
            </a>
          </div>

          {/* ==========================================
              PROJECT CTA
          ========================================== */}
          {/* <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-block rounded-lg border-2 border-mantis px-7 py-3 font-semibold text-mantis transition hover:bg-mantis hover:text-white"
            >
              Explore More TEI Projects
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
