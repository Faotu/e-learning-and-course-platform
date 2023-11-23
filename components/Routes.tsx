import React from "react";
import Image from "next/image";
const Routes = () => {
  return (
    <div className="bg-white flex flex-row items-center justify-center">
      <h1>Make a bank transfer to any of the account below</h1>
      <div className="bg-[#470954] pl-20 pr-20">
        <div className="rounded bg-white">
          <ul>
            <li>Bank : GT Bank</li>
            <li>Acct No : 0218804552</li>
            <li>Account name : Uzieyi Christian Ereziwosa</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#470954] pl-20 pr-20">
        <div className="rounded bg-white">
          <ul>
            <li>Bank : Opay</li>
            <li>Acct No : 9027445045</li>
            <li>Account name : Uzieyi Christian Ereziwosa</li>
          </ul>
        </div>
      </div>
      <div className="bg-white">
        <Image
          className="flex justify-center pb-5"
          src="/images/backimage.png"
          alt="chris background image"
          width={1500}
          height={200}
        ></Image>
      </div>
    </div>
  );
};

export default Routes;
