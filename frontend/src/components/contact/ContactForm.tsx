import { useState } from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  SendHorizonal,
  Pencil,
} from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import GetInTouch from "./GetInTouch";

interface Props {
  onSuccess?: () => void;
}

export default function ContactForm({
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

    //   await axios.post(
    //     "/api/contact",
    //     formData
    //   );

      toast.success(
        "Message sent successfully"
      );

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });

      onSuccess?.();
    } catch (error) {
      toast.error(
        "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="contact-form"
      className="bg-white rounded-[30px] border border-gray-200 shadow-sm overflow-hidden"
    >
      <div className="grid lg:grid-cols-[1.7fr_1fr]">
        {/* LEFT */}
        <div className="p-8 lg:p-10 border-r border-gray-200">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
              <Mail className="text-white" />
            </div>

            <div>
              <h2 className="text-3xl font-bold">
                Send Us a Message
              </h2>

              <p className="text-gray-500">
                We will get back to you as
                soon as possible.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative">
                <User
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full h-14 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-orange-500"
                />
              </div>

              <div className="relative">
                <Mail
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-14 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div className="relative">
                <Phone
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={
                    formData.phoneNumber
                  }
                  onChange={handleChange}
                  className="w-full h-14 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-orange-500"
                />
              </div>

              <div className="relative">
                <Pencil
                  className="absolute left-4 top-4 text-gray-400"
                  size={18}
                />

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full h-14 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div className="relative">
              <MessageSquare
                className="absolute left-4 top-4 text-gray-400"
                size={18}
              />

              <textarea
                rows={5}
                name="message"
                placeholder="Message *"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-200 pl-12 pr-4 pt-4 outline-none resize-none focus:border-orange-500"
              />
            </div>

            <button
              disabled={loading}
              className="bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-10 py-4 rounded-xl flex items-center gap-2"
            >
              {loading
                ? "Sending..."
                : "Send Message"}

              <SendHorizonal size={18} />
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="p-8 lg:p-10 bg-[#fffdf9]">
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}