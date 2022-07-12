import type { NextPage } from "next";
import Main from "../components/Main";
import FumbleLogoFull from "../components/FumbleLogoFull";

const Home: NextPage = () => {
  return (
    <>
      <div className="mt-10 flex justify-center">
        <FumbleLogoFull />
      </div>
      <Main />
    </>
  );
};

export default Home;
