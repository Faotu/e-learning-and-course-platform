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
  const more = [
    "Your Landlord who will soon increase rent,",
    "The cost of food items that have gone up by 80%",
    "The cost of fuel",
    "The cost of airtime and data",
    "How much you pay for your children’s school fees",
    "And all the urgent 2k you need to attend to",
    "Mama or Papa who will need something urgently",
    "What if we add Hospital or Medical bills (God forbid)",
  ];

  return (
    <div>
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
      <div className="bg-purple-900">
        <div className="text-white pl-20 pr-20 pt-5 text-2xl font-bold space-y-4">
          <h1>My Friend,</h1>
          <p>
            With the way the country is going, one day, 1 us dollar will be
            equal to 2000 naira and your current salary will look like transport
            fare. Now think of about;
          </p>
        </div>
        <div className="text-white pl-20 pr-20 font-bold">
          <ul className="space-y-3">
            {more.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Steps;
