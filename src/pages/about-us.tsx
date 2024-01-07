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
        <section className="space-y-4">
          <h2 className="text-xl text-emperor font-semibold md:text-2xl">
            Welcome to The Ebaidebheki Initiative (TEI).
          </h2>
          <p className="text-lg leading-8">
            The Ebaideheki Initiative is a distinguished Non-Governmental Agency
            at the forefront of advocacy for the United Nations Sustainable
            Development Goals (SDGs), with a primary focus on addressing the
            challenges posed by Climate Change.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl text-emperor font-semibold md:text-2xl">
            Mission Statement:
          </h2>
          <p className="text-lg leading-8">
            At TEI, our mission is clear - to advocate for sustainable change.
            We are committed to creating awareness, promoting sustainability,
            and developing strategic initiatives that contribute to meaningful
            and lasting positive transformations.
          </p>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl text-emperor font-semibold md:text-2xl">
            Our Goals:
          </h2>
          <ul className="list-disc space-y-4 px-8">
            <li className="space-y-2">
              <h3 className="text-lg text-emperor font-medium md:text-xl">
                Climate Change Awareness:
              </h3>
              <p className="text-lg leading-8">
                Our objective is to elevate awareness of Climate Change,
                fostering a profound understanding of its urgency and societal
                impact.
              </p>
            </li>
            <li className="space-y-2">
              <h3 className="text-lg text-emperor font-medium md:text-xl">
                Sustainability Advocacy:
              </h3>
              <p className="text-lg leading-8">
                TEI champions sustainable living, advocating for practices that
                preserve the environment and its finite resources.
              </p>
            </li>
            <li className="space-y-2">
              <h3 className="text-lg text-emperor font-medium md:text-xl">
                Development Strategies:
              </h3>
              <p className="text-lg leading-8">
                We are dedicated to formulating and implementing innovative
                strategies aligned with global development goals, ensuring a
                resilient and environmentally responsible future.
              </p>
            </li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-xl text-emperor font-semibold md:text-2xl">
            Why TEI?
          </h2>
          <ul className="list-disc space-y-4 px-8">
            <li className="space-y-2">
              <h3 className="text-lg text-emperor font-medium md:text-xl">
                Passion for Change:
              </h3>
              <p className="text-lg leading-8">
                TEI was founded on a passionate commitment to making a
                significant impact. We believe that collective, purposeful
                action is integral to global sustainability.
              </p>
            </li>
            <li className="space-y-2">
              <h3 className="text-lg text-emperor font-medium md:text-xl">
                Community-Centric Approach:
              </h3>
              <p className="text-lg leading-8">
                Our initiatives are rooted in a community-centric approach. We
                empower communities to take charge of their sustainable future.
              </p>
            </li>
            <li className="space-y-2">
              <h3 className="text-lg text-emperor font-medium md:text-xl">
                Strategic Impact:
              </h3>
              <p className="text-lg leading-8">
                Understanding the importance of strategic planning in
                development, TEI integrates comprehensive plans to address the
                multifaceted challenges posed by Climate Change.
              </p>
            </li>
          </ul>
        </section>
        <section className="space-y-4 bg-flamingo text-white p-8 rounded-t-lg rounded-r-md">
          <h2 className="text-center text-xl font-bold">Join the Movement</h2>
          <p className="text-lg leading-8 font-semibold">
            Whether you are an individual, organization, or community, we extend
            an invitation to join us in this transformative journey. Together,
            we can contribute to a world where sustainable development is not
            merely a goal but an accomplished reality.
          </p>
        </section>
        <section>
          <p className="text-lg leading-8">
            Follow us for updates, engage in our initiatives, and become a
            catalyst for change. Let us collectively script a narrative of a
            sustainable future, united in purpose and impact.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
