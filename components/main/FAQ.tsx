import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "item-1",
    question: "How can I find the best travel destinations?",
    answer:
      "Explore our curated list of top travel destinations and discover hidden gems for your next adventure.",
  },
  {
    id: "item-2",
    question: "Can I customize my travel itinerary?",
    answer:
      "Absolutely! Customize your itinerary according to your preferences, interests, and budget for a personalized travel experience.",
  },
  {
    id: "item-3",
    question: "Are there any travel restrictions or requirements?",
    answer:
      "Stay updated on travel restrictions, entry requirements, and safety guidelines for your chosen destination before planning your trip.",
  },
  {
    id: "item-4",
    question: "How do I book accommodations and activities?",
    answer:
      "Easily book accommodations, tours, and activities through our platform to ensure a seamless and enjoyable travel experience.",
  },
  {
    id: "item-5",
    question: "Is customer support available during my trip?",
    answer:
      "Yes! Our dedicated customer support team is available 24/7 to assist you with any questions or concerns during your trip.",
  },
];

const FAQ = () => {
  return (
    <div className="my-12 md:mt-24">
      <div className="space-y-2">
        <h3 className="text-primary-blue font-semibold text-sm md:text-lg uppercase">
          Frequently Asked Questions
        </h3>
        <div className="flex flex-row justify-between items-center">
          <h1 className="capitalize font-bold text-xl md:text-3xl">
            Your Questions Answered
          </h1>
        </div>
      </div>
      <div className="mt-4 md:mt-8">
        {faqData.map((faq) => {
          return (
            <Accordion type="single" key={faq.id} collapsible>
              <AccordionItem value={faq.id}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
