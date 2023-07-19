import React, { useState } from 'react';

const DatePicker = ({setSelectedData}) => {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // State variables for year, month, and date
    const [year, setYear] = useState(null);
    const [month, setMonth] = useState(null); // Initial value is January (1)
    const [date, setDate] = useState(null);

    // Function to handle year change
    const handleYearChange = (event) => {
        setMonth(null)
        setDate(null)
        setYear(parseInt(event.target.value));
        setSelectedData({
            year: event.target.value,
            month: '',
            day: ''
        })
    };

    // Function to handle month change
    const handleMonthChange = (event) => {
        setDate(null)
        setMonth(parseInt(event.target.value));
        setSelectedData((prev) => ({
            ...prev,
            month: event.target.value,
            day: ''
        }))
    };

    // Function to handle date change
    const handleDateChange = (event) => {
        setDate(parseInt(event.target.value));
        setSelectedData((prev) => ({
            ...prev,
            day: event.target.value,
        }))
    };

    // Function to get the maximum date for the selected month and year
    const getMaxDate = () => {
        return new Date(year, month, 0).getDate();
    };

    // Generate arrays for years, months, and dates
    const years = Array.from({ length: 201 }, (_, index) => currentYear - 100 + index); // 100 years before and after the current year
    const months = Array.from({ length: 12 }, (_, index) => index + 1); // January to December
    const dates = Array.from({ length: getMaxDate() }, (_, index) => index + 1); // 1 to maximum date of the selected month

    return (
        <div className="flex flex-wrap gap-2 justify-between">
            {/* Year Selector */}
            <select
                id="year"
                name="year"
                className="px-4 lg:px-6 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={year ? year : 'YYYY'}
                onChange={handleYearChange}
            >
                <option value="YYYY" selected hidden disabled>
                    {year ? year : 'YYYY'}
                </option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>

            {/* Month Selector */}
            <select
                id="month"
                name="month"
                className="px-4 lg:px-6 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={month ? month : 'MM'}
                onChange={handleMonthChange}
            >
                <option value="MM" selected hidden disabled>
                    {month ? new Date(year, month - 1, 1).toLocaleString('en-US', { month: 'long' }) : 'MM'}
                </option>
                {months.map((month) => (
                    <option key={month} value={month}>
                        {new Date(year, month - 1, 1).toLocaleString('en-US', { month: 'long' })}
                    </option>
                ))}
            </select>

            {/* Date Selector */}
            <select
                id="date"
                name="date"
                className="px-4 lg:px-6 py-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                value={date ? date : 'DD'}
                onChange={handleDateChange}
            >
                <option value="DD" selected hidden disabled>
                    {date ? date : 'DD'}
                </option>
                {dates.map((date) => (
                    <option key={date} value={date}>
                        {date}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default DatePicker;
