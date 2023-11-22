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
      <div className="bg-purple-950">
        <div className="text-white pl-20 pr-20 pt-5 pb-6 text-2xl font-bold space-y-4">
          <h1>My Friend,</h1>
          <p>
            With the way the country is going, one day, 1 us dollar will be
            equal to 2000 naira and your current salary will look like transport
            fare. Now think of about;
          </p>
        </div>
        <div className="text-white pl-20 pr-20 font-bold pb-5">
          <ul className="space-y-3 pb-5">
            {more.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="rounded-lg border-4 border-white p-4  text-white text-2xl font-bold pl-20 pr-20">
            <h1 className="text-center space-y-4">
              You see, the best way forward is to earn a good income. I mean 4
              times your current Salary or preferably, earn in US dollars which
              is what the Work and Shine Course is about to hand over to you if
              you enroll today
            </h1>
          </div>
        </div>
        <div className="bg-yellow-200 h-screen w-screen">
          <div className="pl-20 pr-20 pt-5 text-2xl">
            <strong>
              All you need to implement the Work and Shine Course is
            </strong>
            <ul className="list-none space-y-4">
              <li className="flex items-center before:content-['•'] before:block before:text-2xl before:mr-2 ">
                A Laptop/good smartphone,
              </li>
              <li className="flex items-center before:content-['•'] before:block before:text-2xl before:mr-2">
                Good internet connection
              </li>
              <li className="flex items-center before:content-['•'] before:block before:text-2xl before:mr-2">
                An open mind
              </li>
              <li className="flex items-center before:content-['•'] before:block before:text-2xl before:mr-2">
                And time to put into practice the things you will learn
              </li>
            </ul>

            {/* Import Image  */}

            <h1>Image content here</h1>
            <h1 className="text-center font-bold text-neutral-700">
              Nothing flashy. This was how I started in 2019
            </h1>
          </div>
        </div>
        <div className="bg-slate-300 h-screen w-screen">
          <div className="pl-20 pr-2 pt-5 pb-5 space-y-4">
            <h1 className="text-2xl font-bold ">
              It was with those plastic tables and chair I made my first $100 in
              2019.
            </h1>

            {/* Images */}
            <h1>Add images here</h1>

            <p className="text-2xl font-bold ">
              Thejourney since then has been exciting and full of fun, pain and
              lots of memories. Unlike other marketers online whojust sell
              courses, mine is different.
            </p>
            <p className="text-2xl font-bold">
              I’m offering you what has worked for me. Experiences that cost me
              a lot to gain and the pain of seating over 10,000 hours of work
              for clients across the globe
            </p>

            {/* Image */}
            <h1>Add image here </h1>
          </div>
          <div className="bg-yellow-200">
            <p className="text-center text-3xl font-bold leading-10 pt-10 pb-10 pl-20 pr-20">
              I know you are thinking that Work and Shine Course will cost you
              all your savings, But, NO! you don’t have to break your savings to
              get the Work and Shine Course and the many goodies I added for
              you. Before you even pay....
            </p>
          </div>
          <div className="bg-purple-900 h-screen w-screen">
            <h1 className="text-3xl font-bold pl-20 pr-20 pt-5 text-white leading-10">
              Just take a look at what you can earn when you master the system
              I’m going to show you in the Work and Shine course
            </h1>
            {/* Images  */}
            <h1>Add Imges here</h1>
          </div>
          <div className="bg-purple-900 h-screen w-screen">
            <div className="bg-white leading-10 text-2xl">
              <h1 className="pl-20 pr-20 font-bold">
                In addition to the course, you’ll get some extras...
              </h1>
              <h2 className="pl-20 pr-20">
                Bonuses you’ll get when you enroll today
              </h2>
              <ol className="list-decimal pl-20 pr-20 pt-5 pb-5 leading-10 text-xl font-bold ">
                <li>
                  My income multiplication blueprint{" "}
                  <span className="text-red-500 line-through">#51,500</span>{" "}
                </li>
                <li>
                  My global visibility roadmap{" "}
                  <span className="text-red-500 line-through"> #15,750</span>{" "}
                </li>
                <li>
                  A copy of every proposal that has gotten me a rich client
                  <span className="text-red-500 line-through"> #30,500 </span>
                </li>
                <li>
                  Lifetime access to ask me anything as you implement the course
                  content <span className="text-red-500">Priceless</span>
                </li>
                <li>
                  Free access to my life Q and A sessions{" "}
                  <span className="text-red-500">Priceless</span>{" "}
                </li>
              </ol>
            </div>
            <div className="bg-purple-900 pt-5 flex justify-center items-center">
              <div className="w-80 h-40 bg-white rounded">
                <h1 className="">
                  To get access to the Work and Shine course now, all you need
                  do is make a payment of #4,950.00 only
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
