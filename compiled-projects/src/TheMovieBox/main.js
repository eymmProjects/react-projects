import React from "react";
import Navigation from "./component/navigation";
import Banner from "./component/Banner";
function main() {
  return (
    <>
      <div className=" absolute justify-between bg-transparent p-5 w-full">
        <Navigation />
      </div>
      <Banner />
    </>
  );
}

export default main;
