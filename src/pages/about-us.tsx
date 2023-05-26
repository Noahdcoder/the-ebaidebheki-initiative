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
          TEI was birthed out of the yearning to see to the actualisation of
          development blueprints.
        </h2>
        <div className="space-y-4 text-lg leading-8">
          <p>
            “Advocacy for development”, which is TEI’s mantra entails engagement
            of the public on developmental issues. Fully abreast with the
            essence of advocacy in development, TEI has created this platform to
            create awareness, enlighten, educate, and advocate for the
            actualisation of development.
          </p>
          <p>
            With the advent of the Sustainable Development Goals 2030 and the
            Africa Agenda 2063, it is no news that one of the major factors that
            contributes to the failure or success of policies, including
            development policy, is advocacy.
          </p>
          <p>
            The human population is predicted to grow by over 40% between now
            and 2100. This is a growth of about 3.9billion which would push the
            global population from the current projected figure of 7.8billion to
            11.2billion. Expectedly, this would have great implications for our
            resources, energy use and climate change.
          </p>
          <p>
            For instance, the report on the state of the world’s water states
            that more than 5billion people could suffer water shortages by 2050
            due to increased demand, climate change and polluted supplies. In
            order to avert this, and many other severe problems which comes with
            unplanned development, it is imperative to have “universal and
            equitable” access to water and a host of other targets to be met by
            2030. This consideration lies at the heart of the Sustainable
            Development Goals (SDGs) 2030.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
