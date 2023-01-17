import React from 'react'
import PropTypes from 'prop-types'

const faq = () => {
  return (
    <div className="container px-6 py-12 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Frequently asked questions.</h1>
            <a href='/contact'>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    Please don't hesitate to <span className="text-blue-500">contact</span> us with questions, comments, 
                    concerns or scheduling inquiries. Feedback is always welcome, and a 
                    vital part of instruction.
                </p>
            </a>
        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">How do I know if I am taking the right class?</h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        Contact us, and let us know what profession you are in, and we will direct you to the correct class. 
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">How long does it take to get my card?</h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                        We have the ability to email you a photocopy of your actual card the next day as long as the AHA coordinator who processes the cards is in her office(Mon-Fri) and not sick or on vacation. As of 12/2/19 CPR Santa Fe has moved to E-Card. There are no more hard cards from AHA anymore..
                    </p>
                </div>
            </div>

            <div>
                <div className="inline-block p-3 text-white bg-blue-600 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <div>
                    <h1 className="text-xl font-semibold text-gray-700 dark:text-white">What if I want to learn CPR, but do not need a card?</h1>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                    Absolutely, you can take the class for information only. You will not need to pay for a card.
                    </p>

                </div>


            </div>
        </div>
    </div>
  )
}

faq.propTypes = {}

export default faq