import Image from "next/image";
import Link from "next/link";
import { useNavbarSize } from "../../hooks/useNavBarSize";
import { useRouter } from "next/router";

export default function NavBar() {
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-red-600 transition ease transform duration-1000`;
  const router = useRouter();
  const { isOpen, setIsOpen, menuRef } = useNavbarSize();
  return (
    <>
      <nav className="absolute w-full bg-bianca shadow-lg p-4 space-y-4 md:px-16">
        <div className="flex justify-between">
          <Link href="/" legacyBehavior>
            <a>
              <Image
                src="/images/tei-logo.jpg"
                alt="The Ebaidebheki Initiative Logo"
                width={200}
                height={100}
                priority={true}
              />
            </a>
          </Link>
          {/* Mobile Hamburger */}
          <button
            className="flex flex-col h-12 w-12 rounded justify-center items-center group md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
          {/* Larger Screens' Links */}
          <ul className="hidden justify-around items-center space-x-16 text-emperor text-lg md:flex">
            <li
              className={`hover:text-supernova ${
                router.pathname === "/about-us" ? "text-flamingo" : ""
              }`}
            >
              <Link href="about-us" legacyBehavior>
                <a>About Us</a>
              </Link>
            </li>
            <p>.</p>
            <li
              className={`hover:text-supernova ${
                router.pathname === "/donate" ? "text-flamingo" : ""
              }`}
            >
              <Link href="donate" legacyBehavior>
                <a>Donate</a>
              </Link>
            </li>
            <p>.</p>
            <li
              className={`hover:text-supernova ${
                router.pathname === "/contact-us" ? "text-flamingo" : ""
              }`}
            >
              <Link href="contact-us" legacyBehavior>
                <a>Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Links */}
        <ul
          ref={menuRef}
          className={`space-y-2 text-emperor text-lg overflow-hidden transition-max-height duration-1000 md:hidden ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <li>
            <Link href="about-us" legacyBehavior>
              <a>About Us</a>
            </Link>
          </li>
          <p>.</p>
          <li>
            <Link href="donate" legacyBehavior>
              <a>Donate</a>
            </Link>
          </li>
          <p>.</p>
          <li>
            <Link href="contact-us" legacyBehavior>
              <a>Contact Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
