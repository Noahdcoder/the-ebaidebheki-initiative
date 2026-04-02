import { useState } from "react";

export default function CommunitySection() {
  const [showCommunityLink, setShowCommunityLink] = useState(false);

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-32 rounded-2xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-flamingo mb-8">
        Join Our Community
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Volunteer Card */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Volunteer With Us</h3>
          <p className="text-gray-600 mb-4">
            Become part of our mission to drive climate awareness and impact.
          </p>
          <a
            href="https://forms.gle/bJycP7J6GZn3BSin9"
            target="_blank"
            className="inline-block bg-flamingo text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Apply Now
          </a>
        </div>

        {/* Join Hub Card */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Join Climate Teens Hub</h3>
          <p className="text-gray-600 mb-4">
            Fill a short form to join our growing community.
          </p>

          {!showCommunityLink ? (
            <button
              onClick={() => setShowCommunityLink(true)}
              className="bg-flamingo text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
            >
              Fill Form
            </button>
          ) : (
            <a
              href="https://chat.whatsapp.com/CTrs19fzTXPIrQoYRuZzJ5"
              target="_blank"
              className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
            >
              Join WhatsApp Community
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
