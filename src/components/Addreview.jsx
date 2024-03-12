import React, { useState } from 'react';
import NavBar from './NavBar';

function AddReview(params) {
    const [selectedValue, setSelectedValue] = useState('Select a movie');
    const [showOptions, setShowOptions] = useState(false);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        setShowOptions(false);
    };

    return (
        <>
        <NavBar />
            <div className="max-w-xl mx-auto my-8 p-20 bg-white rounded-md shadow-md">
            <h1 className='text-2xl'>Add your review by selecting a movie of your choice!</h1>
            <div className="relative">
                <div className="relative inline-block text-left mt-10">
                    <div>
                        <button
                            type="button"
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
                            id="options-menu"
                            aria-haspopup="true"
                            aria-expanded="true"
                            onClick={() => setShowOptions(!showOptions)}
                        >
                            {selectedValue}
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>

                    {showOptions && (
                        <div
                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                        >
                            <div
                                className="py-1"
                                role="none"
                            >
                                <div
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    onClick={handleChange}
                                    value="marvel"
                                >
                                   Marvel
                                </div>
                                <div
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    onClick={handleChange}
                                    value="dc"
                                >
                                   DC 
                                </div>
                                <div
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    onClick={handleChange}
                                    value="classics"
                                >
                                    Cult classics
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex flex-col items-center">
            <label className="block mt-10">Your Name:</label>
            <input className="block border border-gray-300 rounded-md px-4 py-2 m-2 focus:outline-none focus:border-indigo-500" type="text" placeholder="Your name" />
            <label className="block mt-10">Rating out of 10:</label>
            <input className="block border border-gray-300 rounded-md px-4 py-2 m-2 focus:outline-none focus:border-indigo-500" placeholder="Your rating" />
            <label className="block mt-10">Comments:</label>
            <input className="block border border-gray-300 rounded-md px-4 py-2 m-2 focus:outline-none focus:border-indigo-500" type="text" placeholder="Type your review" />
            <button className='btn btn-primary-outline mt-4 p-1 border-2 border-sky-500 hover:bg-blue-200 rounded-md'>Submit Review</button>
            </div>

            </div>
        </>
    );
}

export default AddReview;
