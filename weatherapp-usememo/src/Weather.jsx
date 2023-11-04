import React, { useMemo, useState } from 'react'

const Weather = () => {
    const [city, setCity] = useState('')
    const [temperature, setTemperature] = useState('')
    const [error,setError] = useState(null)

    const convertTemperature = useMemo(()=>{
        return (celsius) => (celsius * 9/5) + 32;
    },[])

    const handleCityChange = (e) => {
        setCity(e.target.value);
    }

    const handleTemperatureChange = (e) =>{
        setTemperature(parseInt(e.target.value));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const response = { temperature: 25 };

        if (response.temperature !== undefined) {
            setTemperature(response.temperature);
            setError(null);
          } else {
            setError('Failed to fetch temperature data.');
          }
    }

    return (
        <div>
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div
              className="bg-white shadow-md border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Weather App Use Memo</h3>
                <div>
                  <input type="text" value={city} onChange={handleCityChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter City"/>
                </div>
                <div>
                  <input type="number" value={temperature} onChange={handleTemperatureChange} placeholder="Enter Temperature in Celsius" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
                </div>
                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Temperature</button>
              </form>
            </div>
          </div>
          <div className='m-auto md:w-8/12 lg:w-6/12 xl:w-6/12 mt-6'>
            <div className='bg-white shadow-md border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700'>
              <h2>Temperature in {city}</h2>
                {error ? (
                  <p className="error">{error}</p>
                ) : (
                  <>
                    <p>Celsius: {temperature}</p>
                    <p>Fahrenheit: {convertTemperature(temperature)}</p>
                  </>
                )}
            </div>
          </div>
        </div>
      );
}

export default Weather