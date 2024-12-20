import React, { useEffect } from "react";

function Test1() {


  useEffect(() => {
    console.log("Hello...");

    return () => {
      console.log("Goodbye...");
    };
  }, []);



  return (
    <>
      <h2>Hello From test1</h2>
      
    </>
  );
}

export default Test1;
