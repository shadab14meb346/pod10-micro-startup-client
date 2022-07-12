import { useState } from "react";
import { useKeywords } from "../../hooks/useKeywords";
import ListOfTopicsToTalk from "../ListOfTopicsToTalk";
import FumbleLogo from "../../assets/FumbleLogo.svg";

const Main = () => {
  const [username, setUserName] = useState("");
  const { loading, data, error, fetchKeywords } = useKeywords();

  const topics = data?.data?.tweetKeywords?.result?.map(
    (item: any) => item?.text
  );
  const userListTopics = data?.data?.userLists.split(",");

  return (
    <div className="mx-32 mt-10 flex justify-center space-y-8">
      <div className="">
        <FumbleLogo className="mb-10" />
        <div className="flex justify-start space-y-8 divide-y divide-gray-200 sm:space-y-5">
          <div className="">
            <div className="mt-6 space-y-6 sm:mt-5 sm:space-y-5">
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
                    placeholder="elonmusk"
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                    value={username}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-start">
            <button
              onClick={() => {
                fetchKeywords(username);
              }}
              style={{ width: "100px", height: "40px" }}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {loading ? (
                <svg
                  role="status"
                  className="h-8 w-8 animate-spin fill-white text-gray-200 dark:text-gray-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  ></path>
                </svg>
              ) : (
                "Get Ideas"
              )}
            </button>
          </div>
        </div>
        {data && (
          <ListOfTopicsToTalk
            topics={[...userListTopics, ...topics] as string[]}
            name={data?.data?.name}
            profilePic={data?.data?.profileImageUrl}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
