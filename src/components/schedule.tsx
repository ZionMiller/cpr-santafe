import React from 'react'
import PropTypes from 'prop-types'

const schedule = () => {
  return (
    <>
      <section className="lg:flex lg:justify-center">
        <div className="bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
          <div className="max-w-xl px-6 py-12 lg:max-w-5xl">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              <span className="text-blue-500">
                Please Hange Tight While We Work On Our Schedule
              </span>
            </h2>

            <p className="mt-4 text-gray-500 dark:text-gray-300">
              Our schedule for upcoming weeks on nmonnths will be available soon
            </p>

            <div className="inline-flex w-full mt-6 sm:w-auto">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

schedule.propTypes = {}

export default schedule