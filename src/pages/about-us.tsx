import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function About() {
  return (
    <>
      <Meta title="About Us" />
      <NavBar />
      <main className="p-8 pt-28 space-y-8 md:px-16 lg:px-32">
        <h1 className="text-center text-2xl text-flamingo font-bold md:text-4xl">
          About Us
        </h1>
        <h2 className="text-center text-xl text-emperor font-semibold md:text-2xl">
          TEI was born from the yearning to see to the realization of
          development blueprints.
        </h2>
        <div className="space-y-4 text-lg leading-8">
          <p>
            TEI&apos;s core mission, &apos;Advocacy for development,&apos; is
            dedicated to engaging the public on critical developmental issues.
            With a profound understanding of the role advocacy plays in
            development, TEI has established this platform to foster awareness,
            enlightenment, education, and climate change advocacy in pursuit of
            sustainable development.
          </p>
          <p>
            In the context of the Sustainable Development Goals 2030 and the
            Africa Agenda 2063, it&apos;s evident that effective advocacy is a
            pivotal factor in the success or failure of policies, especially
            those pertaining to development.
          </p>
          <p>
            The imminent global population growth, projected to increase by over
            40% by 2100, approximately 3.9 billion more people, will strain our
            finite resources, escalate energy consumption, and exacerbate
            climate change challenges.
          </p>
          <p>
            A poignant example can be found in the concerning state of the
            world&apos;s water resources. Reports predict that over 5 billion
            people may face water shortages by 2050 due to heightened demand,
            the adverse effects of climate change, and contaminated water
            supplies. To avert such dire consequences and the unplanned
            development-related challenges, achieving &apos;universal and
            equitable&apos; access to water and other crucial targets by 2030 is
            imperative, echoing the essence of the Sustainable Development Goals
            (SDGs) 2030. Climate change advocacy plays a pivotal role in
            addressing these interconnected global challenges.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
