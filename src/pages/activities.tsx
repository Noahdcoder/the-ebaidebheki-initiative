import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ActivitiesSection from "@/components/ActivitiesSection";
import Image from "next/image";
import Link from "next/link";

export default function Activities() {
  /*
   * ==========================================
   * FEATURED 2026 ACTIVITIES
   * ==========================================
   *
   * Add the actual images to:
   * /public/images/
   */

  const featuredActivities = [
    {
      title: "Climate Teen Summit 2026",
      description:
        "A TEI programme bringing young people together around climate awareness, learning, engagement and meaningful climate action.",
      image: "/images/climate-innovation-2.jpg",
      link: "/climate-teen-summit-2026",
    },

    {
      title: "Climate Teens Innovation Bootcamp 2026",
      description:
        "A three-day youth climate learning and innovation programme held in Abuja, exploring climate change, clean technology, green careers and climate solution development.",
      image: "/images/climate-teen-hub-one.jpg",
      link: "/climate-teens-innovation-bootcamp-2026",
    },

    {
      title: "SheLeads Green Jobs Fellowship",
      description:
        "Nigeria's first women-only, internship-driven green jobs programme, equipping young Nigerian women with climate literacy, green skills, leadership training and real-world internship experience.",
      image: "/images/sheleads-flyer.jpg",
      link: "/sheleads-green-jobs-fellowship",
    },
  ];

  return (
    <>
      <Meta title="Activities" />

      <NavBar />

      <main className="px-6 pt-28 pb-16 md:px-16 lg:px-32">
        {/* ==========================================
            PAGE HEADER
        ========================================== */}

        <section className="text-center">
          <h1 className="text-3xl font-bold text-flamingo md:text-5xl">
            Activities
          </h1>

          <p className="mx-auto mt-5 max-w-4xl text-lg leading-8 text-emperor md:text-xl">
            The Ebaidebheki Initiative has evolved beyond its core advocacy
            mission to become an active force for change through youth
            engagement, climate action, education and partnerships.
          </p>
        </section>

        {/* ==========================================
            FEATURED 2026 ACTIVITIES
        ========================================== */}

        <section className="mt-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-mantis">
              Recent Work
            </p>

            <h2 className="mt-2 text-2xl font-bold text-mantis md:text-4xl">
              Our 2026 Activities
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-7">
              Explore some of the programmes and activities delivered by TEI
              during 2026.
            </p>
          </div>

          {/* ACTIVITY CARDS */}

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredActivities.map((activity) => (
              <article
                key={activity.title}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* IMAGE */}

                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}

                <div className="p-6">
                  <h3 className="text-xl font-bold text-mantis md:text-2xl">
                    {activity.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-700">
                    {activity.description}
                  </p>

                  <Link
                    href={activity.link}
                    className="mt-5 inline-block font-semibold text-mantis transition hover:text-flamingo"
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ==========================================
            ONGOING INITIATIVES
        ========================================== */}

        <section className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-mantis">
              Our Work
            </p>

            <h2 className="mt-2 text-2xl font-bold text-mantis md:text-4xl">
              Ongoing Initiatives
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-7">
              Through our ongoing initiatives, TEI continues to engage young
              people and communities around climate change, sustainability and
              the Sustainable Development Goals.
            </p>
          </div>

          <div className="mt-8">
            <ActivitiesSection />
          </div>
        </section>

        {/* ==========================================
            PAST INITIATIVES
        ========================================== */}

        <section className="mt-20">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-mantis">
              Our History
            </p>

            <h2 className="mt-2 text-2xl font-bold text-mantis md:text-4xl">
              Past Initiatives
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-7">
              Over the years, TEI has undertaken a number of initiatives aimed
              at advocacy, community engagement, education and partnership
              building.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <ol className="space-y-6">
              <li className="rounded-xl bg-gray-50 p-6">
                <span className="font-bold text-mantis">
                  1. SDGs and Climate Advocacy
                </span>

                <p className="mt-2 leading-7">
                  Conducted SDGs and climate advocacy through radio programmes
                  and community engagement.
                </p>
              </li>

              <li className="rounded-xl bg-gray-50 p-6">
                <span className="font-bold text-mantis">
                  2. IDP Camp Projects
                </span>

                <p className="mt-2 leading-7">
                  Engaged in meaningful projects within Internally Displaced
                  Persons (IDP) camps, addressing pressing issues.
                </p>
              </li>

              <li className="rounded-xl bg-gray-50 p-6">
                <span className="font-bold text-mantis">
                  3. Clean-Up Drives and Health Campaigns
                </span>

                <p className="mt-2 leading-7">
                  Initiated clean-up drives and health campaigns within IDP
                  camps, contributing to improved living conditions.
                </p>
              </li>

              <li className="rounded-xl bg-gray-50 p-6">
                <span className="font-bold text-mantis">
                  4. Libraries in IDP Camps
                </span>

                <p className="mt-2 leading-7">
                  Collaborated with fellow youth-led NGOs to establish libraries
                  in two IDP camps, promoting education and access to knowledge.
                </p>
              </li>

              <li className="rounded-xl bg-gray-50 p-6">
                <span className="font-bold text-mantis">5. SDGs 2030 Walk</span>

                <p className="mt-2 leading-7">
                  Orchestrated the SDGs 2030 Walk, an event officially endorsed
                  by the Office of the Senior Special Assistant to the President
                  of the Federal Republic of Nigeria on SDGs.
                </p>
              </li>

              <li className="rounded-xl bg-gray-50 p-6">
                <span className="font-bold text-mantis">
                  6. Youth-Led NGO Partnerships
                </span>

                <p className="mt-2 leading-7">
                  Fostered partnerships among youth-led NGOs.
                </p>
              </li>
            </ol>
          </div>
        </section>

        {/* ==========================================
            ONGOING COMMITMENT
        ========================================== */}

        <section className="mt-20">
          <div className="rounded-2xl bg-mantis px-6 py-10 text-center text-white md:px-12 md:py-14">
            <h2 className="text-2xl font-bold md:text-3xl">Our Commitment</h2>

            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8">
              Our commitment to driving positive change remains steadfast.
              Through climate advocacy, youth engagement, education,
              partnerships and community action, TEI continues to create
              opportunities for young people to contribute to a more sustainable
              future.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
