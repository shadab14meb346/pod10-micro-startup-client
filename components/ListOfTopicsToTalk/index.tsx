interface IListOfTopicsToTalkProps {
  topics: string[];
  interests: string[];
  profilePic: string;
  name: string;
  description: string;
}
const ListOfTopicsToTalk = ({
  topics,
  name,
  profilePic,
  interests,
  description,
}: IListOfTopicsToTalkProps) => {
  return (
    <div className="mt-10 flex justify-center">
      <div>
        <img
          src={profilePic}
          alt={name}
          style={{
            maxWidth: "300px",
            maxHeight: "300px",
            borderRadius: "5px",
          }}
        />

        <div>
          <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">
            About
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">
          Possible things you can talk to {name}
        </h3>
        <div className="mt-4  flex flex-wrap">
          {topics?.map((topic) => {
            return (
              <span className="m-2 ml-0 inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
                {topic}
              </span>
            );
          })}
        </div>
        {interests.length > 0 && (
          <>
            <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">
              {name}'s interests
            </h3>
            <div className="mt-4  flex flex-wrap">
              {interests?.map((interest) => {
                return (
                  <span className="m-2 ml-0 inline-flex items-center rounded-md bg-indigo-100 px-2.5 py-0.5 text-sm font-medium text-indigo-800">
                    {interest}
                  </span>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default ListOfTopicsToTalk;
