import React from "react";
import Image from "next/image";


const AboutUs = () => {
  return (
    <section className="w-full border-t">
      <h1 className="h3-bold mt-4 text-center">About</h1>
      <div className="wrapper grid mt-8 grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
        <div className="m-4 p-4">
          <h2 className="h2-bold">
            Trust by <br /> Thousands of Events
            <Image
              src="/assets/images/event.png"
              alt="hero"
              width={500}
              height={500}
              className="max-h-[70vh] 2xl:max-h-[70vh]"
            />
          </h2>
        </div>

        <div className="p-3 border rounded-md mt-10">
          <p className="leading-[40px] p-regular-24 mb-6">
            {" "}
            At <span className="h2-bold">EVENTLY</span>, I believe in the power
            of connection and continuous learning. My platform is designed to
            empower individuals like you to explore, discover, and engage with a
            diverse range of courses and events. <br className="mt-2" /> Whether
            you're a lifelong learner seeking new skills or a seasoned
            professional looking to expand your horizons, I'm here to support
            your journey every step of the way. Join my me today and unlock a
            world of endless possibilities...
            <br className="mt-4" />
            <span className="h2-bold">Evently</span>was born out of a deep
            passion for lifelong learning and community building. Inspired by my
            own experiences of attending events and courses that sparked my
            curiosity and propelled my personal and professional growth, I
            recognized the invaluable benefits of connecting with like-minded
            individuals and learning from experts in various fields. My journey
            began with a vision to create a platform where individuals could
            effortlessly discover and attend top-notch courses and events, while
            also fostering meaningful connections with others who share similar
            interests and aspirations. What started as a humble idea soon
            evolved into a full-fledged project, driven by my commitment to
            making learning accessible and enjoyable for everyone.
          </p>
          <div className="mt-8 flex-start text-white"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
