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

  const items = [
    "Every time I land a new rich client, I have to learn about their product, customers and industry before starting the exact work they want me to do for them. Usually, the client pays for this training period. Can you imagine $300 each week for training? That’s what can happen to you when you master the Work and Shine Strategy.",
    "I think it will make sense if you do some dollar-to-naira conversion so you can have an idea of what a client is willing to pay you to train you for the work you’ll be doing.",
    "ZIno also used the same system you're about to get",
  ];

  return (
    <div className="bg-purple-950 h-screen w-screen justify-start">
      <div className="pl-10">
        <h1 className="mt-5 pt-5 text-white text-2xl flex font-bold items-center justify-center mr-8">
          LET'S START WITH SOME TESTIMONIES
        </h1>
      </div>
      <div className="pl-10 pt-5 items-center justify-center">
        <ul className="text-white list-disc pl-4 space-y-6 mr-10 mb-10 justify-start">
          {testdata.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>

      <div className="pt-10 text-2xl bg-white">
        <strong className="ml-10">
          Miss Tobi from Ogun State said something similar;
        </strong>
        <ul className="list-disc space-y-4 leading-relaxed pl-10 justify-start pr-10 ">
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center pt-5">
        <iframe
          width="1000"
          height="550"
          src={videoUrl.replace("watch?v=", "embed/")}
        ></iframe>
      </div>
      <div className="pt-5 space-y-4 pb-5 pl-10">
        {" "}
        <h1>Victoria used the Work and Shine Course in 2019......</h1>
        <p>Hear From Stephen .....</p>
      </div>
      <div className="pt-10 text-2xl bg-neutral-200">
        <strong className="pl-10 text-xl">
          Clients that are happy to pay you while training you for the Work!
        </strong>
        <ul className="list-disk space-y-4 pt-5 leading-relaxed pl-10 justify-start pr-10">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center pt-5">
        <iframe
          src={videoUrl.replace("watch?v=", "embed/")}
          width="1000"
          height="550"
        ></iframe>
      </div>
      <h1 className="pt-5 pb-5 ml-20">
        Ready to earn 4 times your Salary now?
      </h1>
    </div>
  );
};

export default Testimony;
