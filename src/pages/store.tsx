import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const store = () => {
  return (
    <>
   <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
        <div
            className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
            <div className="lg:w-1/2">
                <div className="h-64 bg-cover lg:h-full">
                    <img src="./images/aed-cpr-santa-fe.png"/>
                </div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                HeartSine <span className="text-blue-500">350P/360P AEDs </span>
                </h2>

                <p className="mt-4 text-gray-500 dark:text-gray-300">
                We love the HeartSine 350P/360P AEDs because they are very user-friendly: just press the on/off switch. 
                That's it! Like all other AEDs, they have loud, clear voice prompts that guide a user through the steps 
                during a rescue. But what really sets it apart is how light and portable it is. At 2.4 lbs., it is not 
                only the lightest device but also one of the most durable and rugged. This device comes in semi-auto 
                (350P) and fully automatic mode (360P). This device is perfect for almost any location.
                </p>

                <div className="inline-flex w-full mt-6 sm:w-auto">
                    <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                        Buy Now
                    </a>
                </div>
            </div>
        </div>
    </section>
    <section className="bg-white dark:bg-gray-900">
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                <span className="inline-block text-blue-500 dark:text-blue-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                    </svg>
                </span>

                <h1 className="text-2xl font-semibold text-center text-gray-700 capitalize dark:text-white">Features</h1>

                <ul className="text-gray-500 dark:text-gray-300">
                    <li><FaCheckCircle /><span> The Heartsine 350P AED provides visual and voice prompts to guide the rescuer through the entire rescue process.</span></li>                    <li>The device is easy to understand and maintain, with a Pad-Pak electrode pad and battery combination that is easy to replace, and has a 4-year life.</li>
                    <li>The 350P is lightweight and compact, with a weight of 2.4 lbs and dimensions of 8.0" x 7.25" x 1.9", making it the smallest AED on the US market.</li>
                    <li>The device includes CPR compressions guidance via metronome and utilizes SCOPE biphasic technology and a low energy escalating waveform that automatically adjusts for differences in patient impedance.</li>
                    <li>The 350P has a durable IP56 rating for protection against dust and water and includes complete weekly self-checks and low cost of ownership.</li>
                    <li>The device also includes data retrieval, with up to 90 minutes of patient rescue data automatically recorded, which can be downloaded via USB cable.</li>
                    <li>The device comes with a semi-rigid carry case and an 8-year warranty.</li>
                    <li>The device is available in two options, Semi-Automatic (350P) with two button operation (On button and Shock button) or Fully-Automatic (360P) with On button only</li>
                    <li>Pediatric Pad-Pak electrode pad/battery combination is also available as an option.</li>
                    <li>The price of Heartsine 350P is 1,275.00 and it includes training.</li>            
                </ul>

                <a href="#" className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-300 transform bg-blue-100 rounded-full rtl:-scale-x-100 dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </div>
    </section>
    </>
  )
}

store.propTypes = {}

export default store