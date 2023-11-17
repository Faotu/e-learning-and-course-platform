// interface HeaderProps {
//   children: React.ReactNode;
//   className?: string;
// }

const Header = () => {
  const videoUrl = "https://www.youtube.com/watch?v=XHOmBV4js_E";

  return (
    <div
      className="
    flex 
    flex-col 
    items-center 
    bg-purple-900 
    pt-4 
    pb-4
    w-screen 
    sm:h-full 
    sm:w-screen "
    >
      <div>
        <h1 className="text-white text-2xl text-center justify-center px-4">
          You have Found Everything You Need to Earn 4 Times Your Current Salary
          Today!
        </h1>
      </div>
      <div className="flex justify-center items-center pt-5">
        <iframe
          width="850"
          height="550"
          src={videoUrl.replace("watch?v=", "embed/")}
          //   style={{ border: "none" }}
        ></iframe>
      </div>
    </div>
  );
};

export default Header;
