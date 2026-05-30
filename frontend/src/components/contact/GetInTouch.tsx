import {
  Mail,
  Phone,
  Clock3,
  MapPin,
} from "lucide-react";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function GetInTouch() {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
          <Phone className="text-white" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900">
          Get in Touch
        </h2>
      </div>

      <div className="space-y-8">
        {/* Email */}
        <div className="flex gap-4">
          <Mail className="text-orange-500 shrink-0 mt-1" />

          <div>
            <h4 className="font-semibold text-gray-900">
              Email
            </h4>

            <p className="text-gray-600">
              info@picnigo.com
            </p>
          </div>
        </div>

        {/* Address */}
        <div className="flex gap-4">
          <MapPin className="text-orange-500 shrink-0 mt-1" />

          <div>
            <h4 className="font-semibold text-gray-900">
              Address
            </h4>

            <p className="text-gray-600 leading-7">
              Oorakam Kizhumuri,
              Malappuram, Kerala,
              India, 676519
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex gap-4">
          <Clock3 className="text-orange-500 shrink-0 mt-1" />

          <div>
            <h4 className="font-semibold text-gray-900">
              Business Hours
            </h4>

            <p className="text-gray-600">
              Monday – Saturday
            </p>

            <p className="text-gray-600">
              9:00 AM – 6:00 PM IST
            </p>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-gray-900">
            Follow Picnigo
          </h3>

          <p className="text-gray-500 mb-5">
            Stay connected and discover
            travel inspiration.
          </p>

          <div className="flex gap-4 flex-wrap">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/picnigo_com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center text-white hover:scale-110 transition duration-300 shadow-md"
            >
              <FaInstagram size={20} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/picnigo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white hover:scale-110 transition duration-300 shadow-md"
            >
              <FaFacebookF size={20} />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white hover:scale-110 transition duration-300 shadow-md"
            >
              <FaYoutube size={20} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/picnigo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-sky-700 flex items-center justify-center text-white hover:scale-110 transition duration-300 shadow-md"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}