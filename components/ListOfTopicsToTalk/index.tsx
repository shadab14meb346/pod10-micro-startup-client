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
        <div className="mt-2  flex flex-wrap">
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
            <div className="mt-2 flex flex-wrap">
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
        <div>
          <h3 className="mt-4 text-lg font-medium leading-6 text-gray-900">
            Some ice-breakers we find interesting:
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            1. What’s your go-to karaoke song? <br />
            2. The zombie apocalypse is here! Which 3 celebrities do you want on
            your side?
            <br />
            3. If music played every time you entered a room, what would you
            want your theme song to be? <br />
            4. What was the worst job you ever had?
            <br /> 5. You can play{" "}
            <a
              target="_blank"
              className="text-slate-700 underline"
              href="https://randomwordgenerator.com/would-you-rather-question.php"
            >
              Would You Rather...?
            </a>
            <br /> 6. You can play{" "}
            <a
              target="_blank"
              className="text-slate-700 underline"
              href="https://randomwordgenerator.com/never-have-i-ever-question.php"
            >
              Never Have I Ever...{" "}
            </a>
            <br /> 7. You can play{" "}
            <a
              target="_blank"
              className="text-slate-700 underline"
              href="https://randomwordgenerator.com/truth-or-dare-question.php"
            >
              Truth Or Dare
            </a>
            <br /> 8. You can play{" "}
            <a
              target="_blank"
              className="text-slate-700 underline"
              href="https://randomwordgenerator.com/charades.php"
            >
              Charades
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ListOfTopicsToTalk;
