import Head from "next/head";

type metaProps = {
  title: string;
};

export default function Meta({ title }: metaProps) {
  return (
    <>
      <Head>
        <title>The Ebaidebheki Initiative (TEI) - {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="title"
          content="Leading Environmental and Engineering Services | AOC Engineering Limited"
        />
        <meta
          name="description"
          content="AOC Engineering Limited provides comprehensive environmental planning, waste management, engineering, energy services, and petroleum-related solutions. With expertise in environmental impact assessment, pollution control, GIS services, and more, we are committed to sustainability and net zero goals. Contact us for reliable and innovative environmental and engineering solutions."
        />
        <meta
          name="keywords"
          content="environmental planning, waste management, engineering services, energy services, petroleum services, environmental impact assessment, pollution control, GIS services, groundwater investigation, waste disposal, structural designing, petroleum products, industrial operations, sustainability, net zero, climate change"
        />
        <meta
          property="og:title"
          content="AOC Engineering Limited | Leading Environmental and Engineering Services"
        />
        <meta
          property="og:url"
          content="https://aocengineeringlimited.com/who-we-are"
        />
        <meta
          property="og:description"
          content="AOC Engineering Limited is a leading provider of comprehensive environmental planning, waste management, engineering services, and energy solutions. With a strong commitment to sustainability and addressing climate change, we offer expertise in environmental impact assessment, pollution control, GIS services, and more. Our team of professionals is dedicated to delivering innovative and reliable solutions tailored to meet our clients' needs. Contact AOC Engineering Limited today for top-notch environmental and engineering services that contribute to a net-zero future."
        ></meta>
        <meta property="og:locale" content="en_US"></meta>
        <meta
          property="twitter:title"
          content="AOC Engineering Limited | Leading Environmental and Engineering Services"
        />
        <meta
          property="twitter:description"
          content="AOC Engineering Limited provides comprehensive environmental planning, waste management, engineering services, and energy solutions. We are committed to sustainability and offer expertise in environmental impact assessment, pollution control, GIS services, and more. Contact us for reliable and innovative environmental and engineering solutions."
        />
        <meta property="twitter:image" content="/images/aoc-logo-color.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="og:title"
          content="AOC Engineering Limited | Leading Environmental and Engineering Services"
        />
        <meta
          property="og:description"
          content="AOC Engineering Limited provides comprehensive environmental planning, waste management, engineering services, and energy solutions. We are committed to sustainability and offer expertise in environmental impact assessment, pollution control, GIS services, and more. Contact us for reliable and innovative environmental and engineering solutions."
        />
        <meta property="og:image" content="/images/aoc-logo-color.png" />
        <meta property="og:url" content="https://aocengineeringlimited.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="AOC Engineering Limited | Leading Environmental and Engineering Services"
        />
        <meta
          property="og:description"
          content="AOC Engineering Limited provides comprehensive environmental planning, waste management, engineering services, and energy solutions. We are committed to sustainability and offer expertise in environmental impact assessment, pollution control, GIS services, and more. Contact us for reliable and innovative environmental and engineering solutions."
        />
        <meta property="og:image" content="/images/aoc-logo-color.png" />
        <meta property="og:image" content="/images/aoc-logo-color.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link
          rel="canonical"
          href="https://aocengineeringlimited.com/who-we-are"
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
