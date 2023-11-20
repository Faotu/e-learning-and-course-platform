import React from "react";
import testdata from "./testdata";
import Steps from "./Steps";

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

  const info = [
    "No office politics",
    "No Salary delays",
    "No long hours in Traffic",
    "No Godfather",
    "No Sleeping with Madam or Oga for",
    "Promotion",
    "I’m not even a Tech Bro or a website developer",
    "I did not pay anybody to get the employment",
    "I did not pay anybody to get the employment",
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
      <div className="bg-purple-900">
        <div className="ml-20">
          <h1 className="text-white font-bold pt-5 pb-2">
            But, so I don't Waste your Time;
          </h1>
          <p className="text-white pt-5">DON'T READ Further If:</p>
          <div className="bg-amber-300 rounded-lg mr-20 pt-8 pb-8">
            <ul className=" space-y-4">
              <li> You want to Blow overnight</li>
              <li> You think everyone online is trying to scam you</li>
              <li>
                {" "}
                You don’t have time to implement the content of the course
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white justify-center items-center">
        <h1 className="text-black ">
          What you’re about to discover got me $41,720 dollars in my first 2
          years! No be today I start.
        </h1>
        <div>{/* Image missing  */}</div>
        <div className="bg-purple-900 pt-5">
          <h1 className="text-white ml-20 pb-5 text-3xl font-bold">
            That is $41,720
          </h1>
          <div className="bg-white pl-20 rounded-lg ml-20 pt-5 mr-20 pr-10">
            <h1 className="text-bold text-3xl pb-5">
              $41,720 from the comfort of my House in Warri,
            </h1>
            <ul className="text-neutral-600 space-y-4 ">
              {info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="text-white pl-20 pt-5">
            <strong className="space-y-5 font-bold text-3xl">
              I know you are wondering how you can do the same.
            </strong>
            <p className="pt-5 text-3xl font-bold">Here's how</p>
          </div>
          <div className="flex items-center justify-between space-x-6 pl-20 pr-20 pt-4 pb-4">
            <div className="flex-1 rounded-tr-2xl rounded-bl-2xl bg-white h-50 w-70 text-2xl font-bold">
              <h1
                className="
                pt-5
                flex 
                justify-center
                items-center
               text-4xl
              text-gray-800 
               font-bold  
               text-shadow-lg
               shadow-yellow-200"
              >
                1
              </h1>
              <div className=" flex flex-col justify-center items-center">
                <p className=" pl-10 pr-10 justify-center">
                  Enroll for the Work
                </p>
                <p> and Shine course</p>

                <p>now</p>
              </div>
            </div>
            <div className="flex-1 rounded-tr-2xl rounded-bl-2xl bg-white h-50 w-70 p-4 text-2xl font-bold">
              <h1
                className="
                pt-5
                flex 
                justify-center
                items-center
               text-4xl
              text-gray-800 
               font-bold  
              shadow-red-300"
              >
                2
              </h1>
              <div className="flex flex-col justify-center items-center">
                <p className=" pl-10 pr-10 justify-center">Implement the</p>
                <p> content in the course</p>

                <p>now</p>
              </div>
            </div>
            <div className="flex-1 rounded-tr-2xl rounded-bl-2xl bg-white 5-40 w-70 p-4 text-2xl font-bold">
              <h1
                className="
                pt-5
                flex 
                justify-center
                items-center
               text-4xl
              text-gray-800 
               font-bold  
              shadow-red-300"
              >
                3
              </h1>
              <div className="flex flex-col justify-center items-center">
                <p className=" pl-10 pr-10 justify-center">Collect</p>
                <p> your money</p>
              </div>
            </div>
          </div>
          <strong className="text-4xl text-white pl-20 pb-5">
            It is that simple
          </strong>
        </div>
      </div>
      <Steps />
    </div>
  );
};

export default Testimony;
