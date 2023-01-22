import React, { useState } from 'react'

const faq = () => {

    const [toggle, setToggle] = useState(false)

    function toggleFaq(): any { 
        setToggle((toggle) => !toggle) 
    }

  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="container  py-12 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white">Frequently asked questions</h1>

            <div className="mt-8 space-y-8 lg:mt-12">
                <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <button className="flex items-center justify-between w-full" onClick={toggleFaq}>
                        <h1 className="font-semibold text-gray-700 dark:text-white">How do I know if I am taking the right class?</h1>

                        <span className={(toggle? "text-gray-400 bg-blue-500 rounded-full" : "text-gray-400 bg-gray-200 rounded-full" )}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={( toggle ? "M12 6v6m0 0v6m0-6h6m-6 0H6" : "M18 12H6")} />
                            </svg>
                        </span>
                    </button>
                    {!toggle && (
                        <p id="content1" className={( toggle? "mt-6 text-sm text-gray-500 dark:text-gray-300 hidden" : "mt-6 text-sm text-gray-500 dark:text-gray-300")}>
                            Contact us, and let us know what profession you are in, and we will direct you to the correct class. 
                        </p>
                    )}
                </div>
            </div>
            <div className="mt-8 space-y-8 lg:mt-12">
                <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <button className="flex items-center justify-between w-full" onClick={toggleFaq}>
                        <h1 className="font-semibold text-gray-700 dark:text-white">How long does it take to get my card?</h1>

                        <span className={(toggle? "text-gray-400 bg-blue-500 rounded-full" : "text-gray-400 bg-gray-200 rounded-full" )}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={( toggle ? "M12 6v6m0 0v6m0-6h6m-6 0H6" : "M18 12H6")} />
                            </svg>
                        </span>
                    </button>

                    <p id="content2" className="mt-6 text-sm text-gray-500 dark:text-gray-300 hidden">
                        We have the ability to email you a photocopy of your actual card the next day as long as the AHA coordinator who processes the cards is in her office(Mon-Fri) and not sick or on vacation. As of 12/2/19 CPR Santa Fe has moved to E-Card. There are no more hard cards from AHA anymore..
                    </p>
                </div>
            </div>
            <div className="mt-8 space-y-8 lg:mt-12">
                <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                    <button className="flex items-center justify-between w-full" onClick={() => {
                        const content = document.querySelector("#content3");
                        content?.classList.toggle("hidden");
                    }}>
                        <h1 className="font-semibold text-gray-700 dark:text-white">What if I want to learn CPR, but do not need a card?</h1>

                        <span className={(toggle? "text-gray-400 bg-blue-500 rounded-full" : "text-gray-400 bg-gray-200 rounded-full" )}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={( toggle ? "M12 6v6m0 0v6m0-6h6m-6 0H6" : "M18 12H6")} />
                            </svg>
                        </span>
                    </button>
                    {
                        !toggle && (
                            <p id="content3" className="mt-6 text-sm text-gray-500 dark:text-gray-300 hidden">
                                Absolutely, you can take the class for information only. You will not need to pay for a card.
                            </p>

                        )
                    }
                </div>
            </div>
        </div>
    </section>
      )
    }
    
    faq.propTypes = {}
    
export default faq
