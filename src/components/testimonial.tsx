import React from 'react'

const testimonial = () => {

    const reviews = 
    <div className="flex items-center">
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    </div>

    const googleLink = "https://www.google.com/search?q=cpr+santa+fe&oq=cpr+sa&aqs=chrome.1.69i57j69i59j46i175i199i512j0i512l2j69i60l3.2617j0j7&sourceid=chrome&ie=UTF-8#lrd=0x871857de207552b1:0xfa8caf6f2c86247b,1,,,,"
    
  return (
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            What our <span className="text-blue-500">students</span> are saying
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            <a href={googleLink} target="_blank" rel="noopener noreferrer">
                See what our past students are saying about us <span className="text-blue-500">on Google</span>
            </a>
        </p>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    I thought this was going to be one of those super boring classes where you pay $100 
                    to have someone play a video for you. I was pleasantly surprised with the class! my 
                    teacher was wonderful!! Karina (so sprry if that isn’t hpw you spell it) was super 
                    engaging and taught cpr in a way i am sure to remember for years to come! i’ll definitely 
                    be back when i re new my certification!
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Thora Ortegren</h1>
                        <span className="text-sm text-gray-500">{reviews}</span>
                    </div>
                </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    Great training. The female instructor was fantastic and took a wholistic approach to teaching. 
                    Loved the mnemonic associations used throughout the instruction process.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">Kirsten Wolfe</h1>
                        <span className="text-sm text-gray-500">{reviews}</span>
                    </div>
                </div>
            </div>

            <div className="p-8 border rounded-lg dark:border-gray-700">
                <p className="leading-loose text-gray-500 dark:text-gray-400">
                    Picture a mix of subject matter expertise, street smarts, and an energy level off the charts.  
                    Add in a dash of manic humor and you&apos;ll have some idea of why Katrina is such a fantastic instructor.  
                    A natural teacher who moves the class along smartly and professionally. Take any class she teaches 
                    and it will be treat.
                </p>

                <div className="flex items-center mt-8 -mx-2">
                    <div className="mx-2">
                        <h1 className="font-semibold text-gray-800 dark:text-white">The Wild Hare</h1>
                        <span className="text-sm text-gray-500">{reviews}</span>
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}

testimonial.propTypes = {}

export default testimonial