export function Movies(props) {
    const { Title, Year, Poster, imdbRating, Ratings, imdbID } = props.movie;


    return (
        <div className="flex flex-col flex-wrap w-full max-w-sm bg-gray-300 rounded-xl shadow-md overflow-hidden md:max-w-80 md:max-h-90">
            <div className="w-full h-100 object-cover">
                <img src={Poster} alt="" />
            </div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 space-evenly">
                    <h5 className="text-xl font-medium text-black overflow-hidden">{Title}</h5>
                    <p className="text-gray-500">Released on: {Year}<span></span></p>
                    <p className="font-bold text-gray-500">IMDb Rating: {imdbRating}</p>
                    <div className="font-bold text-gray-500">
                        Ratings:
                        <ul>
                            {Ratings.map((rating, index) => (
                                <li key={index}>{rating.Source}: {rating.Value}</li>
                            ))}
                        </ul>
                    </div>
                    <button className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 mb-2">
                        Read more
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
