import { useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import { AiOutlinePlus } from "react-icons/ai";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    "How can I verify the legal status of a plot?",
    "Are there any restrictions or zoning regulations for the area?",
    "What is the typical process for buying a plot?",
    "Are financing options available for plot purchases?",
    "Can I visit the plot before making a decision?",
    "What documents do I need for the purchase?",
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="lg:w-[90%] w-[95%] mx-auto lg:my-20 my-10">
      <SectionHeader state="Frequently asked questions"></SectionHeader>
      <br />
      <br />
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className=" space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden py-2"
            >
              <div
                className="flex justify-between items-center p-4 bg-white cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-lg font-medium">{faq}</p>
                <AiOutlinePlus
                  className={`text-2xl transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                />
              </div>
              {activeIndex === index && (
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">
                    This is the answer to the question. Add your detailed answer
                    content here.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <img
            className="w-full  max-h-[90vh]"
            src="https://res.cloudinary.com/dwkqtskan/image/upload/v1731428434/Agamir_property/HomePage/tsm41g7uydvzenguteyz.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
