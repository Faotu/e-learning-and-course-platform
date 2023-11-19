import React from "react";
import testdata from "./testdata";

const Testimony = () => {
  const videoUrl = "https://www.youtube.com/watch?v=XHOmBV4js_E";

  const text = [
    "“My Boss held my salary for over 4 months. I was so frustrated because my MBA school fee was due and got nowhere to turn to. Thank you Mr Christian for putting this Course together. You even went out of your way to do a Physical meet-up with me. Who knows what would have happened to my depressed a*s. I no longer do Nigerian clients. I get paid on time and nobody pressures me at work. Life is sweet. Did I tell you I have moved to a bigger apartment? I love my Work and the Salary always gives me joy.",
    "I wish I can Marry you self…”",
    "Mr John, a Military Man who was serving in Lagos was tired of 80,000 Naira Monthly salary said he used the Work and Shine strategy and made 300 thousand Naira last month.",
    "That's not even all",
    "If you have data and some free time, you can watch the following videos",
  ];

  return (
    <div className="bg-purple-950 h-screen w-screen justify-start">
      <div className="pl-10">
        <h1 className="mt-5 pt-5 text-white text-2xl flex font-bold items-center justify-center mr-8">
          LET'S START WITH SOME TESTIMONIES
        </h1>
      </div>
      <div className="pl-10 pt-5 items-center justify-center">
        <ul className="text-white list-disc pl-4 space-y-6 list-none mr-10 mb-10 justify-start">
          {testdata.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="pt-10 text-2xl bg-white">
        <strong className="ml-10">
          Miss Tobi from Ogun State said something similar;
        </strong>
        <ul className="list-disc space-y-4 list-none leading-relaxed pl-10 justify-start pr-10 ">
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center pt-5">
        <iframe
          width="850"
          height="550"
          src={videoUrl.replace("watch?v=", "embed/")}
          //   style={{ border: "none" }}
        ></iframe>
      </div>
      <div>
        <strong>
          Clients that are happy to pay you while training you for the Work!
        </strong>
      </div>
    </div>
  );
};

export default Testimony;
