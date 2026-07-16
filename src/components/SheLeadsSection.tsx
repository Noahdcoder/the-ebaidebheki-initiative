import Image from "next/image";
import Link from "next/link";

export default function SheLeadsSection() {
  return (
    <section className="mt-20">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Hero */}
        <div className="bg-cinnabar text-white px-6 py-10 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            SheLeads Green Jobs Fellowship
          </h2>

          <p className="mt-3 text-lg md:text-xl">
            Nigeria&apos;s First Women-Only Green Jobs Programme
          </p>
        </div>

        <div className="p-6 md:p-10 space-y-14">
          {/* Overview */}
          <section>
            <h3 className="text-2xl font-bold text-cinnabar mb-4">Overview</h3>

            <p className="leading-8 text-gray-700">
              The SheLeads Green Jobs Fellowship is Nigeria&apos;s first
              women-only, internship-driven green jobs programme. Launched in
              June 2026 by The Ebaidebheki Initiative (TEI), it equips 20 young
              Nigerian women aged 18–30 with climate literacy, green skills,
              leadership training, and real-world internship experience to
              prepare them for leadership roles in Nigeria&apos;s green economy.
            </p>
          </section>

          {/* Orientation */}
          <section className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-cinnabar mb-4">
                Orientation Ceremony
              </h3>

              <p className="leading-8 text-gray-700">
                The programme officially commenced with an inspiring Orientation
                Ceremony held on <strong>3 June 2026</strong>. Fellows were
                welcomed by TEI&apos;s Executive Director alongside
                distinguished guest speakers who introduced the vision of the
                fellowship, outlined expectations, and encouraged participants
                as they began their 12-week journey.
              </p>
            </div>

            <Image
              src="/images/fellow-3.jpg"
              alt="SheLeads Orientation Ceremony"
              width={700}
              height={500}
              className="rounded-xl shadow-md object-cover"
            />
          </section>

          {/* Phase Cards */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-green-200 bg-green-50 p-6">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                ✅ Phase 1 – Foundation Practicals
              </h3>

              <p className="text-gray-700 leading-7">
                Fellows completed environmental restoration practicals through a
                nationwide Tree Planting Exercise across Nigeria&apos;s six
                geopolitical zones, planting more than{" "}
                <strong>60 trees </strong>
                in schools and orphanage homes. The Abuja practical at Abuja
                Children&apos;s Home on 27 June 2026 featured the planting of
                Mango, Pawpaw, Lemon, Moringa and other fruit trees while
                engaging children who enthusiastically joined the exercise.
              </p>
            </div>

            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                🚀 Phase 2 – Innovation & Skills Practicals
              </h3>

              <p className="text-gray-700 leading-7">
                Fellows are currently progressing into practical innovation
                projects including upcycling, renewable energy prototypes and
                climate-tech advocacy campaigns, translating classroom learning
                into impactful community solutions.
              </p>
            </div>
          </section>

          {/* Tree Planting */}
          <section className="grid lg:grid-cols-2 gap-8 items-center">
            <Image
              src="/images/fellow-2.jpg"
              alt="Tree Planting Exercise"
              width={700}
              height={500}
              className="rounded-xl shadow-md object-cover"
            />

            <div>
              <h3 className="text-2xl font-bold text-cinnabar mb-4">
                Environmental Restoration in Action
              </h3>

              <p className="leading-8 text-gray-700">
                Across Nigeria, fellows have already begun creating measurable
                environmental impact through coordinated tree planting,
                community engagement and climate awareness activities that
                demonstrate practical leadership beyond the classroom.
              </p>
            </div>
          </section>

          {/* Cohort */}
          <section className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-cinnabar mb-4">
                Pioneering Cohort
              </h3>

              <p className="leading-8 text-gray-700">
                We proudly celebrate the pioneering Cohort 1 fellows who are
                laying the foundation for a new generation of female leaders in
                Nigeria&apos;s green economy.
              </p>
            </div>

            <Image
              src="/images/fellow-1.jpg"
              alt="Selected Fellows"
              width={700}
              height={850}
              className="rounded-xl shadow-md object-cover"
            />
          </section>

          {/* Programme Structure */}
          <section>
            <h3 className="text-2xl font-bold text-cinnabar mb-5">
              Programme Structure
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-5">
                ✓ 12 weeks of intensive training (theory & practicals)
              </div>

              <div className="bg-gray-50 rounded-lg p-5">
                ✓ 4-week internship with partner organisations
              </div>

              <div className="bg-gray-50 rounded-lg p-5">
                ✓ Climate literacy & green skills
              </div>

              <div className="bg-gray-50 rounded-lg p-5">
                ✓ Leadership & project management
              </div>
            </div>
          </section>

          {/* Goal */}
          <section className="bg-cinnabar/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-cinnabar mb-4">Our Goal</h3>

            <p className="leading-8 text-gray-700">
              To deliberately position young Nigerian women to benefit from the
              National Climate Change Fund and the growing green economy,
              ensuring they are not left behind but become leaders driving
              Nigeria&apos;s green transition.
            </p>
          </section>

          {/* CTA */}
          {/* <div className="text-center">
            <Link
              href="/climate-teen-summit-2026"
              className="inline-block bg-cinnabar text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
            >
              View More Photos & Updates
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
}
