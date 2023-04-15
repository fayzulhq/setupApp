import React from "react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const data = [
  {
    title : "NPM",
    description : " It is a software package manager that is used primarily for installing, managing, and sharing packages or libraries written in JavaScript for use in Node.js projects. "
  },
  {
    title: "React JS",
    description:
    "ReactJS is like a magical toolbox for creating interactive and dynamic user interfaces in web applications using the power of components. It's like building with LEGO blocks to create web experiences that will blow your users' minds!",
  },
  {
    title: "TailwindCSS",
    description:
      "Tailwind CSS is like a styling superhero for web UI! It's a CSS framework that lets you design user interfaces for web apps using special utility classes, making your styling superpowers go through the roof!",
  },
  {
    title: "Next JS",
    description:
      "Next.js is React's speedy sidekick for building fast, SEO-friendly web apps with prerendering, dynamic routing, and combined frontend/backend development superpowers!",
  },
  {
    title: "Vite",
    description:
      "Vite is like a speedy and lightweight web development tool (bundler) for building modern web applications. It offers a turbocharged development experience with lightning-fast build times that'll make your web development dreams come true!",
  },
  {
    title: "TypeScript",
    description:
      "TypeScript is like JavaScript on steroids! It's a programming language that adds some superpowers like static typing and enhanced support for object-oriented development to good ol' JavaScript.",
  }
];

const Learn = () => {
  return (
    <>
    <h1 className="text-3xl leading-6 mb-12 font-semibold">What are they ?</h1>
      <div className="grid md:grid-cols-2 grid-flow-row gap-10">
        {data.map(({ title, description }) => (
          <div key={title} className="border border-white px-8 py-4 rounded-lg  hover:bg-gray-900">
            <h2 className={`${inter.className} mb-3 text-xl md:text-2xl font-semibold`}>
              {title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p
              className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
            >
              {description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Learn;
