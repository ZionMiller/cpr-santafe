import React from 'react'
import PropTypes from 'prop-types'

const cta = () => {
  return (
    <>
    <section className="lg:py-12 lg:flex lg:justify-center">
    <div
    className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
    <div className="lg:w-1/2">
        <div className="h-64 lg:h-full" >
            <img src="./images/cpr-santa-fe-cta2.jpg"/>
        </div>
    </div>

    <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Welcome to <span className="text-blue-500">CPR Santa Fe!</span>
        </h2>

        <p className="mt-4 text-gray-500 dark:text-gray-300">
        Learn life-saving CPR skills with CPR Santa Fe. We offer the latest American Heart Association and Red Cross curriculum, 
        taught in a way that's easy to understand and remember. Perfect for families, businesses, schools, and organizations. 
        Custom classes available at your location, with flexible class sizes from 5-60+, and group rates. Book the date, location, 
        and class that works for you. All equipment and textbooks provided onsite. Check our website for new class listings every month.
        </p>

        <div className="inline-flex w-full mt-6 sm:w-auto">
            <a href="#" className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                View Pricing 
            </a>
        </div>
    </div>
</div>
</section>
</>
  )
}

cta.propTypes = {}

export default cta