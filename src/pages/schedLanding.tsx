import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pricing from '../components/pricing';
import Schedule from '../components/schedule';

const schedLanding = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>('schedule')

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedOption(e.currentTarget.value);
    // if (selectedOption === "schedule") {
    //   setSelectedOption("classes");
    // } else {
    //   setSelectedOption("schedule");
    // }
  };

  const displaySchedule = () => {
    if (selectedOption === "schedule") {
      return <Schedule />;
    }
  };

  const discplayPricing = () => {
    if (selectedOption === "pricing") {
      return <Pricing />;
    }
  };

  return (
    <div>
      <div className="flex w-full items-center justify-center mt-7">
      {/* <label className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
        <span>Schedule</span>
        <span className="relative">
          <input id="Toggle2" type="checkbox" className="hidden peer" />
          <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-violet-400"></div>
          <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
        </span>
        <span>Classes</span>
      </label> */}
        <div
          className="grid w-[40rem] grid-cols-2 space-x-2 text-blue-500 rounded-xl p-2 border border-blue-500"
          x-data="app"
        >
          <div>
            <button
              className="block cursor-pointer select-none rounded-xl p-2 flex justify-center w-full"
              onClick={(e) => handleChange(e)}
              value="schedule"
            >
              Schedule
            </button>
          </div>
          <div>
            <button
              className="block cursor-pointer select-none rounded-xl p-2 flex justify-center w-full"
              onClick={(e) => handleChange(e)}
              value="pricing"
            >
              Class Pricing
            </button>
          </div>
        </div>
      </div>
      <div className="pt-8">
        <div className="news-content">{displaySchedule()}</div>
        <div className="news-content">{discplayPricing()}</div>
      </div>
    </div>
  );
}

schedLanding.propTypes = {}

export default schedLanding