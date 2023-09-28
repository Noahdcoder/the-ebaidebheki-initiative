import Meta from "@/components/Meta";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationPin } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <Meta title="Contact Us" />
      <NavBar />
      <main className="p-8 pt-28 space-y-8 md:px-16 lg:px-32">
        <h1 className="text-center text-2xl text-flamingo font-bold md:text-4xl">
          Contact Us
        </h1>
        <h2 className="text-center text-xl text-emperor font-semibold md:text-2xl">
          You can reach out to us via any of the means below.
        </h2>
        <div className="flex flex-col space-y-8 justify-center items-center p-8 bg-flamingo rounded-r-lg shadow-md">
          <div className="grid grid-cols-1 gap-4 text-xl font-bold text-white md:grid-cols-2 md:gap-8">
            <div className="flex flex-col text-center space-y-4">
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:08069729754">+23408069729754</a>
            </div>
            <div className="flex flex-col text-center space-y-4">
              <FontAwesomeIcon icon={faLocationPin} />
              <p>Abuja, Nigeria</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
