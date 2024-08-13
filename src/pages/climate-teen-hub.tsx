import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import VideoCard from "@/components/VideoCard";

export default function ClimateTeenHub() {
  return (
    <>
      <Meta title="Climate Teen Hub" />
      <NavBar />
      <main className="p-8 pt-28 space-y-8 md:px-16 lg:px-32">
        <h1 className="text-center text-2xl font-bold md:text-4xl">
          <span className="text-mantis">Climate Teen </span> Hub
        </h1>
        <h2 className="text-center text-xl text-emperor font-semibold md:text-2xl">
          Launched by The Ebaidebheki Initiative, Climate Teen Hub is a hub for
          young people from ages 10-19 to join their voices to climate change
          activities.
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Image
            src="/images/climate-champions.jpg"
            width={350}
            height={150}
            alt="Climate Champions"
          />
          <Image
            src="/images/eco-warriors.jpg"
            width={350}
            height={150}
            alt="Eco Warriors"
          />
          <Image
            src="/images/greener-and-cooler.jpg"
            width={350}
            height={150}
            alt="Greener and Cooler"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <VideoCard
            videoUrl="/images/idea.mp4"
            description="Co-founder of The Ebaidebheki Initiative speaking on the idea behind Climate Teen Hub."
          />
          <VideoCard
            videoUrl="/images/national-council-climate-change.mp4"
            description="Dr Salisu Dahiru (DG National Council on Climate Change) speaking on the official inauguration of the Climate Teen Hub."
          />
          <VideoCard
            videoUrl="/images/planting-trees.mp4"
            description="Members of Climate Teen Hub plant trees for Environment Sustainability to mark World Environment Day."
          />
          <VideoCard
            videoUrl="/images/tree-planting-in-schools.mp4"
            description="Encouraging Tree Planting in schools."
          />
          <VideoCard
            videoUrl="/images/climate-change.mp4"
            description="Members of Climate Teen Hub speaking on Climate Change and how it can be addressed."
          />
        </div>
        <div className="flex justify-center">
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <Image
              src="/images/climate-teen-hub-member.jpg"
              width={350}
              height={150}
              alt="Climate Teen Hub Member."
            />
            <div className="p-4">
              <p className="text-lg">
                Feel free to join Climate Teen Hub to participate in our
                activities and also encourage others to join.
              </p>
            </div>
          </div>
        </div>
        <p className="text-mantis text-center text-lg">
          {" "}
          <a href="https://www.instagram.com/climate_teenhub/">
            Click here to follow our dedicated Instagram page to follow our
            activities.
          </a>
        </p>
      </main>
      <Footer />
    </>
  );
}
