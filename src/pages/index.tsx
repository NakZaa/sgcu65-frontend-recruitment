import React from "react";
import Image from "next/image";

import { Nav } from "components/Nav";
import { Form } from "components/Form";
import { Contact } from "components/Contact";

const Index = () => {
  return (
    <div className="relative flex flex-col w-full h-screen ">
      <Nav />
      <div className="flex flex-row justify-around w-full h-full pt-8 bg-center bg-no-repeat bg-cover md:pt-16 md:bg-desktop bg-mobile">
        <div className="items-start hidden md:flex">
          <Image src="/kite.png" width={512} height={512} alt="kite" />
        </div>
        <div className="flex flex-col items-center">
          <Form />
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default Index;
