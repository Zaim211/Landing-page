import React from "react";
import Image from "next/image";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";



const About = () => {
  return (
    <section className="w-full border-t">
      <h1 className="h3-bold text-center mt-6">About</h1>
      <div className="wrapper grid mt-4 grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <div className="m-8">
              <h2 className="p-regular-24"><span className="h1-bold">Founder:</span> TITAZAIM Youssef</h2>
              <div>
                <Image
                  src="/assets/images/Youssef.jpg"
                  alt="Your Picture"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
              <div className="flex gap-4 mt-4 p-4">
                <p className="size-10">
                  <Link href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCpVQrkJvMXwTGRtxHdhRFWgQmZxTTPBFKpgNZTCmHqvFDXmMkrTzhTJNdjFmGGtXqSdNw">
                    <FontAwesomeIcon icon={faEnvelope}  />{" "}
                  </Link>
                </p>
                <p className="size-9">
                  <Link href="https://www.linkedin.com/in/youssef-titazaim-%F0%9F%92%BB-0a6703180/">
                    <FontAwesomeIcon icon={faLinkedin} />{" "}
                  </Link>
                </p>
                <p className="size-10">
                  <Link href="https://twitter.com/titaytech">
                    <FontAwesomeIcon icon={faTwitter}  />{" "}
                  </Link>
                </p>
              </div>
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
          </p>
          <div className="mt-8 flex-start text-white">
          <Link href="/about" >
            <Button className="text-white">
              Read More
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
