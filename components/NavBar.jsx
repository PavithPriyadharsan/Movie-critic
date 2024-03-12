import { Link } from "react-router-dom";

function NavBar(params) {
    return(
<nav className="flex justify-between flex-wrap bg-gray-200 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/"><span className="font-bold text-xl text-black tracking-tight mr-auto">MOVIECRITIC</span></Link>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex text-sm lg:flex-grow justify-end mx-20 sm:flex-wrap lg:flex-nowrap">

            <Link to="/addmovie" className="mt-4 lg:inline-block lg:mt-0">
              <button className="btn btn-primary-outline border border-sky-500 rounded-md p-1 mx-10 bg-sky-200 flex sm:flex-wrap lg:flex-nowrap">Add Movie</button>
            </Link>

            <Link to="/addreview" className="mt-4 lg:inline-block lg:mt-0">
              <button className="btn btn-primary-outline border border-sky-500 rounded-md p-1 mx-10 bg-sky-200 flex sm:flex-wrap lg:flex-nowrap">Add Movie Review</button>
            </Link>

          </div>
        </div>
      </nav>

    )
}
export default NavBar; 