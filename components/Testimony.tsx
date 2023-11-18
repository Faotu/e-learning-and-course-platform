import React from "react";
import testdata from "./testdata";

const Testimony = () => {
  return (
    <div className="bg-purple-950 h-screen w-screen">
      <div className="pl-10">
        <h1>LET'S START WITH SOME TESTIMONIES</h1>

        <div>
          <ul className="text-white">
            {testdata.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
