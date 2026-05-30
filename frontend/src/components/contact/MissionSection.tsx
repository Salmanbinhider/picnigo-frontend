import { Compass, Users, Map } from "lucide-react";

export default function MissionSection() {
  return (
    <section className="py-24 px-5 lg:px-10 bg-[#fffaf5]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-orange-500 font-semibold uppercase tracking-widest">
            Our Mission
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-4">
            🗺️ The Complete Travel Essentials
          </h2>

          <p className="text-gray-600 mt-6 leading-8 text-lg">
            At Picnigo, we're building a
            community-driven travel platform
            that helps travelers connect,
            discover experiences, join trips,
            book activities, and explore
            the world together.
          </p>

          <div className="space-y-5 mt-8">
            {[
              "Connect with fellow travelers",
              "Discover amazing destinations",
              "Join exciting group trips",
              "Book memorable activities",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                <div className="bg-orange-100 p-3 rounded-xl">
                  <Compass className="text-orange-500" />
                </div>

                <p className="text-gray-700 font-medium">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-[40px] p-12 text-white shadow-2xl">
          <Users size={55} />

          <h3 className="text-3xl font-bold mt-6">
            Travel Together.
            Explore Better.
          </h3>

          <p className="mt-5 text-orange-100 leading-8">
            We aim to make travel social,
            accessible, and unforgettable
            for everyone around the world.
          </p>

          <div className="mt-8 flex gap-4">
            <Map />
            <span>Kerala, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}