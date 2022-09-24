import React from "react";

// eslint-disable-next-line react/prop-types
const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="py-2 lg:px-56">
      <div className="flex rounded-md">
        <div className="relative flex-grow focus-within:z-10">
          <div className="relative mt-1 rounded-md shadow-md">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-600 bg-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full rounded-lg pl-10 sm:text-sm pr-8 pt-0 outline-none border border-violet-200 h-10 text-custom"
              placeholder="Search all 200 Icons"
            />
          </div>
          {/* <div className="absolute inset-y-0 left-0 pl-12 flex items-center pointer-events-none font-nunito">
            <svg
              className="h-5 w-5 text-gray-500 bg-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div> */}

          {/* <div className="pr-8 pt-0 pl-8">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              id="email"
              className="form-input min-w-full p-2 bg-transparent text-gray-900 border-custom border bg-opacity-gray-100 rounded-full pl-12 sm:text-sm sm:leading-10 focus:outline-none font-nunito "
              placeholder="Search all 200 Icons"
            ></input>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
