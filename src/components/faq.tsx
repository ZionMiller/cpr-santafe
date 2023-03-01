import React, { useState } from 'react'

interface FaqItemProps {
    question: string;
    answer: string;
  }
  const FaqItem = ({ question, answer }: FaqItemProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="mt-8 space-y-8 lg:mt-12">
        <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
          <button
            className="flex items-center justify-between w-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            <h1 className="font-semibold text-gray-700 dark:text-white">
              {question}
            </h1>
  
            <span
              className={`text-gray-400 rounded-full ${
                isOpen ? "bg-gray-200" : "bg-blue-500"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M12 18l-6-6 6-6" : "M12 6l6 6-6 6"}
                />
              </svg>
            </span>
          </button>
  
          {isOpen && (
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
              {answer}
            </p>
          )}
        </div>
      </div>
    );
  };
  
  const Faq = () => {
    return (
      <section className="bg-white dark:bg-gray-900">
        <div className="container  py-12 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">
            Frequently asked questions
          </h1>
  
          <FaqItem
            question="How do I know if I am taking the right class?"
            answer="Contact us, and let us know what profession you are in, and we will direct you to the correct class."
          />
  
          <FaqItem
            question="How long does it take to get my card?"
            answer="We have the ability to email you a photocopy of your actual card the next day as long as the AHA coordinator who processes the cards is in her office(Mon-Fri) and not sick or on vacation. As of 12/2/19 CPR Santa Fe has moved to E-Card. There are no more hard cards from AHA anymore.."
          />
  
          <FaqItem
            question="What if I want to learn CPR, but do not need a card?"
            answer="Absolutely, you can take the class for information only. You will not need to pay for a card."
          />
        </div>
      </section>
    );
  };
    
export default Faq
