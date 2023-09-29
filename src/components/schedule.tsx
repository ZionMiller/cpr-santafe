import React, { useEffect, useState } from 'react'

// const sheet-id = process.env.SHEET-ID
// const JSON = process.env.JSON

const Schedule = () => {
  const [classes, setClasses] = useState<string[][] | null>(null);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/1ukMf82A-cCh4g4-y_bQltufeClpASDilPvD4mc9awxs/values/classSchedule?alt=json&key=AIzaSyCg3v3JLCCm2_lxzJetnljOG3J9Wq-xsY4`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setClasses(data.values);
      });
  }, []);

  return (
    <div className="mt-4">
      <div>
        <table className="min-w-full bg-transparent">
          <thead>
            <tr>
              <th className="py-2 text-gray-400 text-left">Class Name</th>
              <th className="py-2 text-gray-400 text-left">Class Date</th>
              <th className="py-2 text-gray-400 text-left">Class Location</th>
              <th className="py-2 text-gray-400 text-left">Space Left</th>
              <th className="py-2 text-gray-400 text-left">Cost of Class</th>
            </tr>
          </thead>
          <tbody>
          {classes == null ? (
            <tr>
              <td className="px-1 py-2 text-gray-400 border-0" colSpan={5}>Loading available classes...</td>
            </tr>
          ) : (
            classes.map((classInfo, index) => (
              index !== 0 ? (
                <tr key={index}>
                  {classInfo.map((info, infoIndex) => (
                    <td className="px-1 py-2 text-gray-400 border-0" key={infoIndex}>{info}</td>
                  ))}
                </tr>
              ) : null
            ))
          )}
          </tbody>
        </table>
      </div>
  <br></br>
  <br></br>
  <h2 className='text-gray-400 text-center'>Please reach out to us at 505-795-5927 or email Save1HeartCPR@gmail.com if you have any questions about classes!</h2>
  <h2 className='text-gray-400 text-center'>*Note we teach combo classes, call to confirm if you have questions</h2>
  <br></br>
</div>
  );
}

Schedule.propTypes = {}

export default Schedule