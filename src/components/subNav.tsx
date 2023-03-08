import React from 'react'

const subNav = () => {
  return (
    <label
      htmlFor="Toggle2"
      className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100"
    >
      <span>This</span>
      <span className="relative">
        <input id="Toggle2" type="checkbox" className="hidden peer" />
        <div className="w-10 h-4 rounded-full shadow dark:bg-gray-600 peer-checked:dark:bg-violet-400"></div>
        <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-violet-400"></div>
      </span>
      <span>That</span>
    </label>
  );
}

subNav.propTypes = {}

export default subNav