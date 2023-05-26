import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import "@fortawesome/fontawesome-svg-core/styles.css"; //importing font awesome css
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} className="font-nunito" />
      </motion.div>
    </AnimatePresence>
  );
}
