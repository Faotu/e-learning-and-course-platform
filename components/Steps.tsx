import React from "react";

const Steps = () => {
  const sets = [
    "How to get very rich clients to hire you even if you are not a pro or don’t have any real work experience yet",
    "How to get clients to pay you in US dollars even if you don’t have a dollar account now",
    "How to work from your home so you don’t have to spend your lifetime in Lagos Traffic or pay expensive transport fares everyday",
    "How to learn new skills that rich clients are looking for from the comfort of your home",
    "How to collect your payment in US dollars even if there’s no Dollar in Nigeria",
    "How to set yourself up for global Visibility In fact, you’ll learn how to Work and Shine with the skills you have and the work you do!",
  ];
  return (
    <div className="bg-yellow-200 pt-10 pl-20 pr-20 items-center justify-center">
      <div>
        <h1 className="text-neutral-900 text-4xl font-bold pb-5">
          In the Work and Shine course, I will show you step-by-step;
        </h1>
        <ul className="space-y-4 text-neutral-700">
          {sets.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Steps;
