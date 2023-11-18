import React from "react";
import data from "./data";

const Hero = () => {
  return (
    <div className="bg-neutral-300 h-screen w-screen pt-10 mr-10 pb-0">
      <div className="ml-10">
        <h1 className="font-bold">
          My Dear Intelligent, Hardworking, Young Nigerian,
        </h1>
        <h2 className="pt-4 pb-6">One of these things has brought you here;</h2>
        <div className="border-b border-gray-600 h-0 w-65 pt-10 pr-10"></div>
        <div className="pt-8">
          <ul className="list-disc pl-4 space-y-6">
            {data.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div className="border-b border-gray-600 h-0 w-65 pt-10 pr-10"></div>
        <strong className="pt-4">If this is so</strong>
        <h1 className="pt-4">
          Feel encouraged. I was exactly like you 5 years ago. Smart,
          Intelligent, and Hardworking but Broke - I mean Sapa United Broke. All
          because I was working for Poor Clients.
        </h1>
        <h1 className="pt-4">
          Now that I have won this Battle, I’m willing to help you Win over Sapa
          too
        </h1>
        <strong className="pt-6">But first;</strong>
      </div>
    </div>
  );
};

export default Hero;
