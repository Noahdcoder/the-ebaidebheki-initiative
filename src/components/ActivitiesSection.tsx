export default function ActivitiesSection() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
        Key Ongoing Activities of TEI
      </h2>

      <div className="space-y-10">
        {/* 1. Climate Teen Hub */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800">
            1. Climate Teen Hub (CTH)
          </h3>
          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
            <li>
              TEI’s youth-focused hub for ages 10–19, engaging teens in climate
              change education, advocacy, and action.
            </li>
            <li>
              They hold regular meetups and empower teens to be
              <strong> Climate Champions / Eco Warriors</strong>.
            </li>
            <li>
              In 2024, they partnered with <strong>YALI</strong> on the “One
              Million Tree Project.”
            </li>
          </ul>
        </div>

        {/* 2. Green Squad */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800">
            2. Green Squad
          </h3>
          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
            <li>
              Launched around World Environment Day 2025, TEI introduced “Green
              Squads” — environmental leadership clubs in primary & secondary
              schools across the FCT.
            </li>
            <li>
              Students participate in sustainability challenges, mentorship, and
              practical environmental projects.
            </li>
          </ul>
        </div>

        {/* 3. Plastic Innovation Project */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800">
            3. Plastic Innovation Project
          </h3>
          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
            <li>
              Launched in June 2025 to support youth-led innovation in solving
              plastic pollution.
            </li>
            <li>
              The initiative includes innovation hubs, competitions, and
              collaborations with inventors, recyclers, and startups to
              repurpose plastic.
            </li>
          </ul>
        </div>

        {/* 4. Sustainability Grants */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800">
            4. Sustainability Grants
          </h3>
          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
            <li>
              TEI oversees the{" "}
              <strong>
                Felicia & Lawrence Omiunu Environmental Sustainability Grant
                (FLOESG)
              </strong>
              .
            </li>
            <li>
              The grant supports young individuals and community actors leading
              environmental or sustainability-related projects.
            </li>
          </ul>
        </div>

        {/* 5. Community Awareness & Advocacy */}
        <div>
          <h3 className="text-2xl font-semibold text-green-800">
            5. Community Awareness & Advocacy
          </h3>
          <ul className="list-disc ml-6 mt-3 space-y-2 text-gray-700 leading-relaxed">
            <li>
              TEI runs ongoing awareness campaigns on climate change,
              sustainability, and the SDGs through various media channels.
            </li>
            <li>
              They host the <strong>Sustainability Pulse with Ebaide</strong>{" "}
              which airs:
              <ul className="list-disc ml-6 mt-2">
                <li>Weekly on KissFM 99.9 Abuja</li>
                <li>Twice weekly on Aso TV (DSTV Channel 329)</li>
              </ul>
            </li>
            <li>
              TEI also builds partnerships with youth-led NGOs to scale their
              impact.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
