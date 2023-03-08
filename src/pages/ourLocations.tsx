import React from 'react'

// ToDo add map locations on slider or cards for available cities, add connection for contact
const ourLocations = () => {
  return (
    <div className="max-w-xl px-6 py-12 lg:max-w-5xl">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
        CPR NM<span className="text-blue-500"> Is Offering Classes In:</span>
      </h2>
      <p className="mt-4 text-gray-500 dark:text-gray-300">
        Santa Fe, Albuquerque, Las Vegas, Los Alamos
      </p>
      <h4 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
        Don't See Your City Listed?<span className="text-blue-500"> Contact Us!</span>
      </h4>
      <div className="inline-flex w-full mt-6 sm:w-auto">
        <a
          href="https://checkout.square.site/buy/2BINXM25AARJTMJUU2YDIP3S"
          className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
        >
          Register For a Class now
        </a>
      </div>
    </div>
  );
}

ourLocations.propTypes = {}

export default ourLocations