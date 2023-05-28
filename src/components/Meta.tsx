import Head from "next/head";

type metaProps = {
  title: string;
};

export default function Meta({ title }: metaProps) {
  const fullTitle = `The Ebaidebheki Initiative (TEI) - ${title}`;
  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="title"
          content="Advocacy for Development | The Ebaidebheki Initiative (TEI)"
        />
        <meta
          name="description"
          content="Advocacy for Development | The Ebaidebheki Initiative (TEI) is a non-profit organization dedicated to raising awareness about the Sustainable Development Goals (SDGs) 2030 and the Africa Agenda 2063. We engage the public, educate, and advocate for the actualization of development initiatives. Join us in driving positive change and creating a sustainable future for all."
        />
        <meta
          name="keywords"
          content="advocacy, development, Sustainable Development Goals, SDGs, Africa Agenda 2063, awareness, education, public engagement"
        />
        <meta
          property="og:title"
          content="The Ebaidebheki Initiative (TEI) | Advocacy for Development"
        />
        <meta
          property="og:url"
          content="https://theebaidebhekiinitiative.org"
        />
        <meta
          property="og:description"
          content="The Ebaidebheki Initiative (TEI) is a non-profit organization dedicated to advocacy for development. We raise awareness about the Sustainable Development Goals (SDGs) 2030 and the Africa Agenda 2063. Our mission is to engage the public, educate, and advocate for the actualization of development initiatives. Join us in driving positive change and creating a sustainable future for all."
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="twitter:title"
          content="The Ebaidebheki Initiative (TEI) | Advocacy for Development"
        />
        <meta
          property="twitter:description"
          content="The Ebaidebheki Initiative (TEI) is a non-profit organization dedicated to advocacy for development. Join us in driving positive change and creating a sustainable future for all."
        />
        <meta property="twitter:image" content="/images/tei-logo.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="/images/tei-logo.jpg" />
        <meta
          property="og:url"
          content="https://theebaidebhekiinitiative.org"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link
          rel="canonical"
          href="https://theebaidebhekiinitiative.org/about-us"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/site.webmanifest" />
      </Head>
    </>
  );
}
