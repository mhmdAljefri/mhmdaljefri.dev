"use client";

import * as React from "react";
import { Text } from "@/components/ui/text";

export default function HeroSection() {
  const [opacity, setOpacity] = React.useState(1);

  React.useEffect(() => {
    const handleScroll = () => {
      const newOpacity = 1 - window.scrollY / window.innerHeight;
      setOpacity(newOpacity > 0 ? newOpacity : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        style={{ opacity }}
        className="flex-auto w-full -z-10 py-40 text-center gap-8 overflow-hidden flex flex-col justify-center items-center"
      >
        <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
          <Text as="h1" size={6}>
            Hello, I&apos;m <span className="font-black">Mohammed Aljefri</span>
          </Text>
        </div>

        <Text as="h2" size={4} className="max-w-2xl">
          Fullstack Web Developer. Passionate about{" "}
          <span className="font-bold">startups</span>,{" "}
          <span className="font-bold">open source</span>, and{" "}
          <span className="font-bold">
            crafting captivating digital experiences
          </span>
          .
        </Text>
      </section>
    </>
  );
}
