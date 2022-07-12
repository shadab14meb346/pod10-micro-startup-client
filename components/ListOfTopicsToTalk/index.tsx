interface IListOfTopicsToTalkProps {
  topics: string[];
  profilePic: string;
  name: string;
}
const ListOfTopicsToTalk = ({
  topics,
  name,
  profilePic,
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
      </div>
    </div>
  );
};
export default ListOfTopicsToTalk;
