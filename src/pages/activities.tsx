import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ActivitiesSection from "@/components/ActivitiesSection";

export default function About() {
  return (
    <>
      <Meta title="Activities" />
      <NavBar />
      <main className="p-8 pt-28 space-y-8 md:px-16 lg:px-32">
        <h1 className="text-center text-2xl text-flamingo font-bold md:text-4xl">
          Activities
        </h1>
        <h2 className="text-center text-xl text-emperor font-semibold md:text-2xl">
          The TEI, as an advocacy platform, has evolved beyond its core advocacy
          mission and has become an active force for change through partnerships
          with other youth-led NGOs.
        </h2>
        <ActivitiesSection />
        <h3 className="text-lg text-emperor font-medium md:text-xl">
          In the past, we have successfully undertaken the following
          initiatives:
        </h3>
        <ol className="text-lg  space-y-4">
          <li>
            <span className="font-bold">1. </span>Conducted SDGs/Climate
            advocacy through radio programs and community engagement.
          </li>
          <li>
            <span className="font-bold">2. </span>Engaged in meaningful projects
            within Internally Displaced Persons (IDP) camps, addressing pressing
            issues.
          </li>
          <li>
            <span className="font-bold">3. </span>Initiated clean-up drives and
            health campaigns within IDP camps, contributing to improved living
            conditions.
          </li>
          <li>
            <span className="font-bold">4. </span>Collaborated with fellow
            youth-led NGOs to establish libraries in two IDP camps, promoting
            education and access to knowledge.
          </li>
          <li>
            <span className="font-bold">5. </span>Orchestrated the SDGs 2030
            walk, an event officially endorsed by the Office of the Senior
            Special Assistant to the President of the Federal Republic of
            Nigeria on SDGs.{" "}
          </li>
          <li>
            <span className="font-bold">6. </span>Fostered partnerships among
            youth-led NGOs.{" "}
          </li>
        </ol>
        <h3 className="text-lg text-emperor font-medium md:text-xl">
          Currently, our ongoing initiatives include:
        </h3>
        <ol className="text-lg  space-y-4">
          <li>
            <span className="font-bold">1. </span>Continuing our impactful radio
            advocacy efforts, ensuring that our message reaches a wider
            audience.
          </li>
          <li>
            <span className="font-bold">2. </span>Forging a recent collaboration
            with an NGO based in the UK. This partnership aims to enhance
            education in rural communities by delivering information in
            different languages, ultimately improving lives and disseminating
            valuable knowledge.
          </li>
          <li>
            <span className="font-bold">3. </span>Continuous engagement with the
            public on SDGs 2030 and Climate Change initiatives.
          </li>
        </ol>
        <p className="text-xl font-semibold">
          Our commitment to driving positive change remains steadfast, and we
          are excited about the opportunities and impact that lie ahead through
          these ongoing endeavors.
        </p>
      </main>
      <Footer />
    </>
  );
}
