import React, { useState } from 'react';
import NavBar from './NavBar';

function Addmovie() {
  const [name, setName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, releaseDate }),
      });

      if (response.ok) {
        console.log('Movie added successfully');
        
        setName('');
        setReleaseDate('');
      } else {
        console.error('Failed to add movie');
      }
    } catch (error) {
      console.error('Error adding movie:', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-md">
        <h3 className="text-2xl font-bold mb-4">Add any movie of your choice!</h3>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Add Movie:</label>
          <input
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Movie name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label className="block mb-2">Release date:</label>
          <input
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:border-blue-500"
            type="date"
            placeholder="Release date"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            required
          />
          <div className="ml-20">
            <button
              type="submit"
              className="btn btn-primary-outline border border-sky-500 rounded-md p-1 mx-10 hover:bg-sky-200 flex sm:flex-wrap lg:flex-nowrap"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Addmovie;

