import {
  Handshake,
  MapPin,
  Mail,
  CheckCircle2,
  Mountain,
} from "lucide-react";

const partnerItems = [
  "Tourism Boards",
  "Travel Agencies",
  "Event Organizers",
  "Activity Providers",
  "Hotels & Resorts",
  "Influencers & Content Creators",
];

export default function PartnershipSection() {
  return (
    <section className="mt-5">
      <div className="bg-white rounded-[28px] border border-gray-200 overflow-hidden shadow-sm">
        <div className="grid lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
          {/* PARTNERSHIP */}
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
                <Handshake className="text-white" />
              </div>

              <div>
                <h2 className="text-[28px] font-bold text-gray-900 leading-tight">
                  Partnership &
                  <br />
                  Business Enquiries
                </h2>
              </div>
            </div>

            <p className="text-gray-500 mb-6">
              Interested in collaborating with Picnigo?
            </p>

            <div className="space-y-4">
              {partnerItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-orange-500 shrink-0"
                    size={18}
                  />

                  <span className="text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-8 border border-orange-300 rounded-xl px-5 py-3 flex items-center gap-3 text-orange-600 hover:bg-orange-50 transition">
              <Mail size={18} />
              info@picnigo.com
            </button>
          </div>

          {/* MISSION */}
          <div className="p-8 lg:p-10 relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
                <Mountain className="text-white" />
              </div>

              <h2 className="text-[28px] font-bold text-gray-900">
                Our Mission
              </h2>
            </div>

            <p className="text-gray-600 leading-8">
              At Picnigo, we’re building a
              community-driven travel platform
              that helps travelers connect,
              discover experiences, join trips,
              book activities, and explore the
              world together.
            </p>

            <div className="w-12 h-[2px] bg-orange-400 my-7" />

            <h3 className="text-3xl font-bold text-gray-900 leading-tight">
              The Complete
              <br />
              Travel Essentials.
            </h3>

            <div className="absolute bottom-6 right-6 opacity-10">
              <Mountain size={80} />
            </div>
          </div>

          {/* LOCATION */}
          <div className="p-8 lg:p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
                <MapPin className="text-white" />
              </div>

              <h2 className="text-[28px] font-bold text-gray-900">
                Our Location
              </h2>
            </div>

            <p className="text-gray-700 mb-5">
              Kerala, India
            </p>

            {/* MAP */}
            <div className="rounded-2xl overflow-hidden border border-gray-200">
              <iframe
                title="location"
                src="https://www.google.com/maps?q=Malappuram,Kerala&output=embed"
                className="w-full h-[240px]"
                loading="lazy"
              />
            </div>

            <a
              href="https://maps.google.com/?q=Malappuram,Kerala"
              target="_blank"
              className="mt-5 h-12 border border-gray-300 rounded-xl flex items-center justify-center font-medium hover:bg-gray-50 transition"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}