import React from "react";
import PropTypes from "prop-types";

const about = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Our <span className="text-blue-500">Team</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <img
                className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                src="/images/karena-cpr.png"
                alt=""
              />

              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Karena McLain
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Founder & Lead Instructor
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              I am Karena McLain Cobb, a licensed EMT-A, former EMT and
              firefighter for Santa Fe County, and CPR/AED/First Aid Instructor.
              I am also a mother of 4, grandmother of 2, and married to a
              Paramedic Firefighter. I live and work in Santa Fe, New Mexico
              where I teach at Santa Fe Community College and run my own
              business, CPR Santa Fe, with the goal of providing high-quality,
              scenario-based CPR training and instruction to improve community
              safety.
            </p>

            <div className="flex mt-4 -mx-2">
              <a
                href="https://www.linkedin.com/in/karena-mclain-1b4b7b148/"
                className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                aria-label="Linkedin"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z"
                    id="Shape"
                    fill="#000000"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
            <div className="flex flex-col sm:-mx-4 sm:flex-row">
              <div className="mt-4 sm:mx-4 sm:mt-0">
                <h1 className="text-xl font-semibold text-gray-700 capitalize md:text-2xl dark:text-white group-hover:text-white">
                  Want To Join Our Team?
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  Apply To Become a CPR NM Team Member Today!
                </p>
              </div>
            </div>

            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              We offer a training program to equip future instructors with
              skills needed to bring our quality CPR classes to your community.
              Once applicants complete our training program, we provide
              equipment, guidance, and if near one of our locations, office
              space to conduct classes
            </p>
            <p className="mt-4 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
              <span className="text-blue-500">Contact us</span> to learn more!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

about.propTypes = {};

export default about;
