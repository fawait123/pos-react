export default function NavBar() {
  return (
    <>
      <div className="flex flex-col p-2 space-y-2 bg-[#1f2125] text-gray-500">
        <div className="flex items-center space-x-8">
          <div className="flex space-x-2 items-center">
            <img src="/logo.svg" className="w-8 h-8" alt="logo" />
            <span>POS</span>
          </div>
          <div className="flex justify-between flex-grow">
            <div className="flex h-10 w-full rounded-lg bg-[#2d2d2d] p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                className="focus:outline-none p-2 bg-[#2d2d2d] h-full w-full text-xs z-10"
                placeholder="Search menu here"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
