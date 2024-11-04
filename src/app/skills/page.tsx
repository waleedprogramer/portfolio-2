import React from "react";
import Heading from "../components/Heading";
import Icons from "../components/Icons";
import Client from "../components/Client";

const SkillsSection = () => {
  return (
    <> 
    <div>
      <Heading title="SKILLS" subtitle=" My Skills"/>
    </div>
    <div className="flex flex-col-reverse md:flex-row justify-center gap-20 lg:gap-60 items-center p-8 mt-10">
      <Icons/>
      <Client/>
    </div>
    </>
  );
};

export default SkillsSection;
