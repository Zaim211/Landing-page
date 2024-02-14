import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Intro = () => {
  return (
    <>
      <div className="relative">
        <Image
          src="/assets/images/hero.png"
          alt="hero"
          width={2000}
          height={1000}
          className="opacity-10 max-h-[70vh] 2xl:max-h-[70vh]"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center flex-col-2 wrapper items-center">
        <div className="w-fit h-auto flex flex-col leading-3 justify-center items-center text-center">
          <h1 className=" mr-3 h3-bold">
            Discover and attend top courses and events effortlessly with <br />
            <span className="h2-bold">Evently</span>
          </h1>
          <p className="p-regular-24">
            Buy and sell tickets seamlessly for a world of learning and
            entertainment.
          </p>
        <div className="mt-8">
        <Link href="/feature">
          <Button className="text-white ">Go to Feature Page</Button>
        </Link>
        </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
