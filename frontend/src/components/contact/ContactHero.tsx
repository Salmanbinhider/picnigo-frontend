import { MoveRight } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="w-full">
            <div className="bg-white overflow-hidden border-b border-gray-200">
                <div className="grid lg:grid-cols-2 min-h-[350px]">
                    {/* LEFT */}
                    <div className="flex items-center bg-[#f8f8f8]">
                        <div className="max-w-[650px] px-8 lg:px-20 py-12">
                            <span className="inline-flex items-center rounded-full bg-orange-100 text-orange-600 px-4 py-2 text-sm font-medium">
                                Contact Us
                            </span>

                            <h1 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                                Let&apos;s Connect 🌍
                            </h1>

                            <p className="mt-5 text-gray-600 text-lg leading-8">
                                Whether you're planning your next adventure,
                                need support, want to partner with us,
                                or simply have a question — we’re here to help.
                            </p>

                            <div className="mt-7 border-l-4 border-orange-500 pl-4">
                                <p className="font-semibold text-gray-900">
                                    Travel begins with a conversation.
                                </p>

                                <p className="text-gray-500 text-sm mt-1">
                                    Need help, have feedback, or want
                                    to collaborate? We'd love to hear from you.
                                </p>
                            </div>

                            <a
                                href="#contact-form"
                                className="mt-8 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-3 rounded-xl"
                            >
                                Contact Picnigo
                                <MoveRight size={18} />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative h-[260px] lg:h-auto">
                        <img
                            src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg"
                            alt="Travel"
                            className="w-full h-full object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/20" />

                        
                    </div>
                </div>
            </div>
        </section>
    );
}