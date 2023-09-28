import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function Donate() {
  return (
    <>
      <Meta title="Donate" />
      <NavBar />
      <main className="p-8 pt-28 space-y-8 md:px-16 lg:px-32">
        <h1 className="text-center text-2xl text-flamingo font-bold md:text-4xl">
          Donate
        </h1>
        <h2 className="text-center text-xl text-emperor font-semibold md:text-2xl">
          Donate today and be part of our mission.
        </h2>
        <div className="space-y-4 text-lg leading-8">
          <p>
            We depend on the kind and generous support of individuals like you
            to finance our initiatives and drive positive change. Your
            contribution holds the power to create a substantial impact,
            allowing us to sustain our crucial efforts.
          </p>
          <p>
            We warmly welcome donations from individuals, corporations, and
            organizations that align with our vision for a brighter future.
          </p>
          <p>
            Together, let&apos;s turn our developmental blueprints into reality.
          </p>
        </div>
        <div className="py-8 bg-flamingo text-white px-8 rounded-r-lg space-y-8">
          <h3 className="text-2xl font-bold">
            You can make a bank transfer to the account details below.
          </h3>
          <p className="text-xl font-semibold">
            Account Name: The Ebaidebheki Initiative
          </p>
          <p className="text-xl font-semibold">Account Number: 1017631065</p>
          <p className="text-xl font-semibold">Bank: Zenith Bank</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
