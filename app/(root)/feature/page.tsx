import React from "react";
import Image from "next/image";

const Feature = () => {
  return (
    <section className="w-full border-t">
      <h1 className="h3-bold mt-6 text-center">Feature</h1>
      <div className="wrapper grid mt-4 grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="m-4 p-4">
          <h2 className="h3-bold">
            Trust by <br /> Thousands of Events
            <Image
              src="/assets/images/application3.png"
              alt="hero"
              width={2000}
              height={1000}
              className="max-h-[70vh] 2xl:max-h-[70vh]"
            />
          </h2>
        </div>

        <div className="border rounded-md p-10 space-between mt-10">
          <p className="leading-[40px] p-regular-24 mb-6">
            {" "}
            <span className="p-bold-24">1. Seamless Event Discovery</span> <br /> Seamless Event Discovery: Easily explore
            a wide range of courses and events tailored to your interests. With
            Evently's intuitive search and filtering options, finding the
            perfect event has never been easier. <br /> 
            <span className="p-bold-24">2. Interactive Learning
            Experience</span>
            <br /> Interactive Learning Experience: Immerse yourself in
            engaging and interactive learning experiences. From live workshops
            to immersive virtual courses, Evently offers a variety of learning
            formats to suit your preferences. <br /> 
            <span className="p-bold-24">3. Community Connection</span>
             <br /> 
             Community Connection: Connect with a vibrant community of learners and
            experts. Share insights, collaborate on projects, and build valuable
            connections that extend beyond the classroom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Feature;
