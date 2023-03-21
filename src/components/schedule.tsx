import React, { useEffect, useState } from 'react'
import { InlineWidget } from "react-calendly";
import Tabletop from 'tabletop';
import Link from 'next/link';

const schedule = () => {

  // const sheetUrl = 'https://docs.google.com/spreadsheets/d/1h_GAxkX8IZCWf-ZJ5TrVWB34zsdSVszgRKTerwIQtzU/edit?usp=sharing'

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   Tabletop.init({
  //     key: "2PACX-1vS49zTrYHo5suM_SGUexGZFROQ1mTQ8EfDf1ocI4xek1bYhP4Bhm2-nuLveyrz2R3kLFJzYi013Ct8T",
  //     simpleSheet: true
  //   })
  //     .then((data: any) => setData(data))
  //     .catch((err: any) => console.warn(err));
  // }, []);

  // useEffect(() => {
  //   data.forEach((row: any) => {
  //     console.log(row.column1, row.column2, row.column3, row.column4);
  //   });
  // }, [data]);
  
  return (
    <div>
      <InlineWidget url="https://calendly.com/cprclassnm/1" />
      {/* {data.map((content: any, i) => (
        <div key={i}>
          <h4>{content.class}</h4>
          <h4>{content.date}</h4>
          <h4>{content.time}</h4>
          <h4>{content.capacity}</h4>
        </div>
      ))} */}
    </div>
  );
}

schedule.propTypes = {}

    // <>
    //   <section className="lg:flex lg:justify-center">
    //     <div className="bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
    //       <div className="max-w-xl px-6 py-12 lg:max-w-5xl">
    //         <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
    //           <span className="text-blue-500">
    //             Please Hange Tight While We Work On Our Schedule
    //           </span>
    //         </h2>

    //         <p className="mt-4 text-gray-500 dark:text-gray-300">
    //           Our schedule for upcoming weeks on nmonnths will be available soon
    //         </p>

    //         <div className="inline-flex w-full mt-6 sm:w-auto">
    //           <Link
    //             href="/contact"
    //           >
    //             <a className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
    //                 Contact us
    //             </a>
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </>
export default schedule