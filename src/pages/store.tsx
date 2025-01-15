import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';

const store = () => {
	return (
		<>
			<section className="bg-gray-100 dark:bg-gray-800 py-12 lg:flex lg:justify-center">
				<div className="overflow-hidden bg-white dark:bg-gray-900 mx-4 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl mb-8 lg:mb-0">
					<div className="lg:w-1/2 flex justify-center items-center">
						<div className="h-64 w-full bg-cover lg:h-full flex items-center justify-center">
							<img
								src="./images/aed-cpr-santa-fe.png"
								alt="AED CPR Santa Fe"
								className="h-full object-contain"
							/>
						</div>
					</div>
					<div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
						<h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
							HeartSine <span className="text-blue-500">350P AEDs</span>
						</h2>
						<p className="mt-4 text-gray-500 dark:text-gray-300">
							We love the HeartSine AEDs because they are very user-friendly: just press the on/off switch.
							That&apos;s it! Like all other AEDs, they have loud, clear voice prompts that guide a user
							through the steps during a rescue. But what really sets it apart is how light and portable
							it is. At 2.4 lbs., it is not only the lightest device but also one of the most durable and
							rugged. This device comes in semi-auto (350P) and fully automatic mode (360P). This device is
							perfect for almost any location.
						</p>
						<div className="inline-flex w-full mt-6 sm:w-auto">
							<a
								href="https://checkout.square.site/buy/2BINXM25AARJTMJUU2YDIP3S"
								className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
							>
								Buy Now
							</a>
						</div>
					</div>
				</div>
				<div className="overflow-hidden bg-white dark:bg-gray-900 mx-4 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
					<div className="lg:w-1/2 flex justify-center items-center">
						<div className="h-64 w-full bg-cover lg:h-full flex items-center justify-center ml-4">
							<img
								src="./images/Lifevac.jpg"
								alt="LifeVac Anti-Choking Device"
								className="h-full object-contain"
							/>
						</div>
					</div>
					<div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
						<h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
							LifeVac <span className="text-blue-500">Anti-Choking Device</span>
						</h2>
						<p className="mt-4 text-gray-500 dark:text-gray-300">
							The LifeVac is a patented, easy-to-use device designed to help save lives in choking emergencies.
							It uses powerful, one-way suction to remove obstructions from the airway without pushing them
							further down.
						</p>
						<p className="mt-4 text-gray-500 dark:text-gray-300">
							<strong>Key Features:</strong>
						</p>
						<ul className="mt-4 text-gray-500 dark:text-gray-300 list-disc list-inside">
							<li>Proven effectiveness: Generates over 300 mmHg suction.</li>
							<li>No training required—simple to operate with push-pull action.</li>
							<li>Suitable for children and adults.</li>
							<li>A life-saving tool for homes, schools, and workplaces.</li>
						</ul>
						<p className="mt-4 text-gray-500 dark:text-gray-300">
							Time is critical in choking situations—protect your family and act now!
						</p>
						<div className="inline-flex w-full mt-6 sm:w-auto">
							<a
								href="https://cprsantafe.square.site/product/lifevac-anti-choking-device/20?cp=true&sa=true&sbp=false&q=false"
								className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
							>
								Buy Now
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

store.propTypes = {}

export default store