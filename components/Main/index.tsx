const Main = () => {
  return (
    <form className="mx-32 mt-10 space-y-8">
      <div className="flex justify-center space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="w-1/2">
          <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
            <div>
              <label
                htmlFor="company-website"
                className="block text-sm font-medium text-gray-700"
              >
                Your twitter handle
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  twitter.com/
                </span>
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="elonmusk"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company-website"
                className="block text-sm font-medium text-gray-700"
              >
                The person you want to talk his/her twitter handle
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                  twitter.com/
                </span>
                <input
                  type="text"
                  name="company-website"
                  id="company-website"
                  className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 px-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="shadabshs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-center">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Get Ideas
          </button>
        </div>
      </div>
    </form>
  );
};

export default Main;
