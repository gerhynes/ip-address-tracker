function App() {
  return (
    <div className="h-screen">
      <header className="pt-7 px-6 h-2/5 text-center pattern">
        <h1 className="text-3xl text-bold text-white mb-8">
          IP Address Tracker
        </h1>
        <form
          action="#"
          className="w-full max-w-xl mx-auto flex justify-center"
        >
          <div className="flex">
            <input
              className="py-4 px-6 rounded-l-xl text-xl"
              type="text"
              placeholder="Search for any IP address or domain"
            />
            <button className="bg-black rounded-r-xl px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </form>
      </header>
      <section className="px-6 absolute w-full">
        <div className="bg-white -mt-36 mx-auto p-6 text-center rounded-xl max-w-6xl">
          <p className="text-sm font-medium text-gray-400 uppercase mb-2">
            IP Address
          </p>
          <p className="text-xl font-bold mb-4">192.212.174.101</p>
          <p className="text-sm font-medium text-gray-400 uppercase mb-2">
            Location
          </p>
          <p className="text-xl font-bold mb-4">Brooklyn, NY 10001</p>
          <p className="text-sm font-medium text-gray-400 uppercase mb-2">
            Timezone
          </p>
          <p className="text-xl font-bold mb-4">UTC-05:00</p>
          <p className="text-sm font-medium text-gray-400 uppercase mb-2">
            ISP
          </p>
          <p className="text-xl font-bold">SpaceX Starlink</p>
        </div>
      </section>
      <section className="h-3/5">
        <div className="h-full bg-green-500" id="map"></div>
      </section>
      <footer className="p-4 mt-auto text-center">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/GK-Hynes">Gerard Hynes</a>.
      </footer>
    </div>
  );
}

export default App;
