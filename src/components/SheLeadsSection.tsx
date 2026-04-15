import Image from "next/image";

export default function SheLeadsSection() {
  return (
    <section className="mt-16 px-4 md:px-10 lg:px-32">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-bold text-cinnabar text-center">
          SheLeads Green Jobs Fellowship
        </h2>

        <p className="text-center text-lg font-semibold mt-2">
          Nigeria’s First Women-Only Green Jobs Fellowship
        </p>

        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
          Empowering the next generation of female leaders in Nigeria’s green
          economy.
        </p>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 mt-10 items-center">
          {/* TEXT */}
          <div className="space-y-4 text-gray-700">
            <p>
              The TEI SheLeads Green Jobs Fellowship is a free, intensive
              12-week online program followed by a 4-week internship placement.
              Designed exclusively for ambitious young Nigerian women aged
              18–30.
            </p>

            <h3 className="font-semibold text-lg text-cinnabar">
              What You Will Gain
            </h3>

            <ul className="list-disc pl-5 space-y-2">
              <li>Structured learning in climate change & green economy</li>
              <li>Guaranteed 4-week internship with partner organisations</li>
              <li>Hands-on projects and professional portfolio</li>
              <li>Mentorship from industry experts</li>
              <li>Certificate and career pathways</li>
            </ul>

            <p className="font-semibold">
              First Cohort: Limited to only 20 women.
            </p>

            <p className="text-red-600 font-bold">
              Applications close on 10 May 2026.
            </p>

            {/* CTA */}
            <a
              href="https://bit.ly/SheLeadsGreenJobs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Apply Now
            </a>
          </div>

          {/* FLYER IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/images/sheleads-flyer.jpg" // 👉 replace with your actual file
              alt="SheLeads Fellowship Flyer"
              width={500}
              height={600}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* FOOTNOTE */}
        <p className="text-sm text-gray-500 mt-8 text-center max-w-3xl mx-auto">
          Internship placement is prioritised for fellows who meet the 95%
          commitment requirement, including live sessions, tasks, and
          assignments.
        </p>
      </div>
    </section>
  );
}
