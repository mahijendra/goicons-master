import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import GoSvg from "../public/assets/Go.png";

export default function Demo() {
  // Placeholder text data, as if from API
  const placeholderText = [{ type: "heading2", text: "Go Icons" }];

  const bodyText = [
    {
      type: "paragraph",
      text: "Get fully editable vector icons for your webiste. Hand-crafted free icons library, designed with great attention to detail.",
    },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  return (
    <>
      <motion.div
        className="relative bg-gray-50"
        initial="hidden"
        // animate="visible"
        animate="visible"
        variants={container}
      >
        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28 lg:px-56 mb-5">
          <div className="sm:text-center lg:text-left">
            <div className="inline-flex items-center rounded-full bg-gray-200 p-1 pr-2 text-white hover:text-gray-200 sm:text-base lg:text-sm xl:text-base">
              <span className="rounded-full bg-white px-3 py-0.5 text-sm font-normal leading-5 text-custom">
                Growing Collection
              </span>
              <span className="ml-2 text-sm text-custom">
                with <span className="font-bold tracking-wide">FREE</span> Updates
              </span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-2xl md:text-6xl lg:h-24 h-12">
              <span className="block xl:inline text-custom">
                {" "}
                {placeholderText.map((item, index) => {
                  return <AnimatedText {...item} key={index} />;
                })}
              </span>{" "}
            </h2>
            <div className="text-md text-gray-500 sm:mx-auto sm:max-w-xl lg:w-6/12 text-ellipsis tracking-wide font-medium sm:text-md md:text-md lg:mx-0 ">
              {bodyText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
            <div className="sm:mt-5 sm:flex sm:justify-center lg:justify-start">
              <div className="justify-center">
                <a
                  href="https://github.com/mahijendra/goicons-master"
                  className="button button--nina px-6 text-custom font-flair hover:text-custom relative block focus:outline-none border text-white border-custom rounded-lg text-sm text-center font-medium tracking-wide overflow-hidden bg-customPurple"
                  data-text="Github"
                >
                  
                  <span className="align-middle font-flair text-white">G</span>
                  <span className="align-middle font-flair text-white">i</span>
                  <span className="align-middle font-flair text-white">t</span>
                  <span className="align-middle font-flair text-white">h</span>
                  <span className="align-middle font-flair text-white">u</span>
                  <span className="align-middle font-flair text-white">b</span>
                </a>
              </div>
            </div>
          </div>
          <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
            <Image
              layout="fill"
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
              src={GoSvg}
              alt=""
            />
          </div>
        </main>
      </motion.div>
    </>
  );
}
