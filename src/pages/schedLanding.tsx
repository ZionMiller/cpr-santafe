import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pricing from '../components/pricing';
import Schedule from '../components/schedule';

const schedLanding = () => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>('schedule')

  const handleChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelectedOption(e.currentTarget.value);
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
      <div
        className="grid w-[40rem] grid-cols-2 space-x-2 text-blue-500 rounded-xl p-2 border border-blue-500"
        x-data="app"
      >
        <div>
          <button
            className=
              "block cursor-pointer select-none rounded-xl p-2 flex justify-center w-full"
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
  )
}

schedLanding.propTypes = {}

export default schedLanding