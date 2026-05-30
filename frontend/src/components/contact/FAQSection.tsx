import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How can I join a trip?",
    answer:
      "Browse available trips and send a join request through the Picnigo platform.",
  },
  {
    question: "How do I report an issue?",
    answer:
      "Use the contact form above or email support@picnigo.com.",
  },
  {
    question: "Can I list my travel activities?",
    answer:
      "Yes! Activity providers can contact us for onboarding and partnerships.",
  },
  {
    question: "Is Picnigo available worldwide?",
    answer:
      "We are continuously expanding to help travelers across the globe.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(
      openIndex === index ? null : index
    );
  };

  return (
    <section className="pb-6">
      <div className="bg-white rounded-[28px] border border-gray-200 shadow-sm p-7 lg:p-10">
        {/* HEADER */}
        <div className="mb-10">
          <span className="inline-flex rounded-full bg-orange-100 text-orange-600 px-4 py-2 text-sm font-medium">
            FAQ
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-3 text-gray-500 max-w-2xl">
            Find answers to common questions
            about Picnigo and your travel
            experience.
          </p>
        </div>

        {/* FAQ GRID */}
        <div className="grid md:grid-cols-2 gap-5">
          {faqs.map((faq, index) => {
            const isOpen =
              openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden transition hover:border-orange-300"
              >
                <button
                  onClick={() =>
                    toggleFAQ(index)
                  }
                  className="w-full flex items-center justify-between text-left p-5"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition duration-300 ${
                      isOpen
                        ? "rotate-180 text-orange-500"
                        : "text-gray-500"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-gray-600 leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}