import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import GithubIcon from "../components/icons/Github.js";
import TwitterIcon from "../components/icons/Twitter.js";
import LinkedinIcon from "../components/icons/Linkedin.js";

const TypingAnimation = React.memo(() => {
  return (
    <TypeAnimation
      sequence={[
        "Front End Developer",
        2000,
        "React Developer",
        2000,
        "React Native Developer",
        2000,
      ]}
      wrapper="span"
      preRenderFirstString={true}
      speed={50}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
});

export default function Home() {
  return (
    <Layout
      title={"Portfolio / Home"}
      description={"My Portfolio"}
      className="w-full  flex items-center justify-center whitespace-nowrap overflow-auto scrollbar-hide "
    >
      <main className="w-full  flex items-center justify-center h-screen">
        <section className="h-full max-w-5xl flex items-center justify-center">
          <div className="flex items-center justify-center flex-col">
            <h4 className="text-lg text-white">
              <span className="text-xl font-normal">Merhaba,</span> Ben
            </h4>
            <h1 className="mt-5 text-xl font-extrabold tracking-normal uppercase md:text-4xl md:mt-3 text-white">
              Yavuz Selim Sarıhan
            </h1>

            <div className="mt-5 text-2xl font-normal text-transparent bg-gradient-to-r from-pink-500 via-indigo-400 to-purple-700 bg-clip-text md:mt-3">
              <TypingAnimation />
            </div>

            {/* Social Accounts */}
            <div className="flex items-center mt-8 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/Selexis"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center  transition-colors duration-300 text-gray-100 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>

             

              <motion.a
                href="https://www.linkedin.com/in/yavuz-selim-sar%C4%B1han-8423432bb/"
                target={"_blank"}
                rel="noopener noreferrer"
                className="flex items-center justify-center  transition-colors duration-300 text-gray-100 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
