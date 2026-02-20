export default function Report() {
  return (
    <div className="px-4 md:px-10 py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-cinnabar text-center">
        Climate Teen Summit 2026 Report
      </h1>

      {/* Download Button */}
      <div className="flex justify-center mt-6">
        <a
          href="/documents/teen-summit.pdf"
          download
          className="bg-cinnabar text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-600 transition"
        >
          Download PDF
        </a>
      </div>

      {/* Embedded Viewer */}
      <div className="mt-10 w-full h-[80vh]">
        <iframe
          src="/documents/teen-summit.pdf"
          className="w-full h-full rounded-lg shadow"
        ></iframe>
      </div>
    </div>
  );
}
