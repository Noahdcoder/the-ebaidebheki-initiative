import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocation,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="grid grid-cols-1 gap-4 p-8 bg-bianca md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xl">
            For inquiries, sponsorships and partnerships
          </p>
          <div className="flex items-center text-lg space-x-4 text-emperor ">
            <FontAwesomeIcon icon={faPhone} />
            <a href="tel:+23408069729754">+23408069729754</a>
          </div>
          <div className="flex items-center text-lg space-x-4 text-emperor ">
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:ebaidebhekiinitiative@gmail.com">
              ebaidebhekiinitiative@gmail.com
            </a>
          </div>
          <div className="flex items-center text-lg space-x-4 text-emperor ">
            <FontAwesomeIcon icon={faLocation} />
            <p>Abuja, Nigeria</p>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl text-left font-bold md:text-center">
            Navigation
          </h3>
          <div className="flex flex-col md:justify-between md:flex-row">
            <Link href="/" legacyBehavior>
              <a className="hover:opacity-75">Home</a>
            </Link>
            <p>.</p>
            <Link href="/about-us" legacyBehavior>
              <a className="hover:opacity-75">About Us</a>
            </Link>
            <p>.</p>
            <Link href="/donate" legacyBehavior>
              <a className="hover:opacity-75">Donate</a>
            </Link>
            <p>.</p>
            <Link href="/contact-us" legacyBehavior>
              <a className="hover:opacity-75">Contact Us</a>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center text-lg p-8 bg-bianca">
        {currentYear} - The Ebaidebheki Initiative (TEI)
      </p>
    </footer>
  );
}
